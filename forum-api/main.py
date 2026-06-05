from __future__ import annotations

import json
import os
import sqlite3
from collections import defaultdict

from fastapi import FastAPI, HTTPException, Request, WebSocket, WebSocketDisconnect
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field
from slowapi import Limiter, _rate_limit_exceeded_handler
from slowapi.errors import RateLimitExceeded
from slowapi.util import get_remote_address

DATABASE_URL = os.environ.get("DATABASE_URL", "/data/forum.db")

limiter = Limiter(key_func=get_remote_address)
app = FastAPI()
app.state.limiter = limiter
app.add_exception_handler(RateLimitExceeded, _rate_limit_exceeded_handler)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://druijffc.lpd50.uk"],
    allow_methods=["GET", "POST", "PUT", "DELETE"],
    allow_headers=["Content-Type"],
)

# In-memory WebSocket registry: step_id → set of WebSocket connections
ps_rooms: dict[int, set[WebSocket]] = defaultdict(set)


def get_db() -> sqlite3.Connection:
    conn = sqlite3.connect(DATABASE_URL)
    conn.row_factory = sqlite3.Row
    return conn


def init_db() -> None:
    parent = os.path.dirname(DATABASE_URL)
    if parent:
        os.makedirs(parent, exist_ok=True)
    db = get_db()
    db.execute(
        """
        CREATE TABLE IF NOT EXISTS messages (
            id         INTEGER PRIMARY KEY AUTOINCREMENT,
            name       TEXT NOT NULL,
            content    TEXT NOT NULL,
            created_at TEXT NOT NULL DEFAULT (datetime('now'))
        )
        """
    )
    try:
        db.execute("ALTER TABLE messages ADD COLUMN category TEXT NOT NULL DEFAULT ''")
    except sqlite3.OperationalError:
        pass
    db.execute(
        """
        CREATE TABLE IF NOT EXISTS ps_steps (
            id         INTEGER PRIMARY KEY AUTOINCREMENT,
            name       TEXT NOT NULL,
            date       TEXT NOT NULL,
            content    TEXT NOT NULL DEFAULT '',
            created_at TEXT NOT NULL DEFAULT (datetime('now'))
        )
        """
    )
    db.commit()
    db.close()


init_db()


# ── Forum ──

class MessageIn(BaseModel):
    name: str = Field(min_length=1, max_length=50)
    content: str = Field(min_length=1, max_length=280)
    category: str = Field(default='', max_length=50)


@app.get("/forum/api/messages")
def get_messages(category: str = ""):
    db = get_db()
    if category:
        rows = db.execute(
            "SELECT id, name, content, category, created_at FROM messages WHERE category = ? ORDER BY id DESC LIMIT 100",
            (category,),
        ).fetchall()
    else:
        rows = db.execute(
            "SELECT id, name, content, category, created_at FROM messages ORDER BY id DESC LIMIT 100"
        ).fetchall()
    db.close()
    return [dict(r) for r in rows]


@app.post("/forum/api/messages", status_code=201)
@limiter.limit("10/minute")
def post_message(request: Request, body: MessageIn):
    db = get_db()
    cursor = db.execute(
        "INSERT INTO messages (name, content, category) VALUES (?, ?, ?)",
        (body.name, body.content, body.category),
    )
    db.commit()
    row = db.execute(
        "SELECT id, name, content, category, created_at FROM messages WHERE id = ?",
        (cursor.lastrowid,),
    ).fetchone()
    db.close()
    return dict(row)


# ── Polarsteps REST ──

class StepIn(BaseModel):
    name: str = Field(min_length=1, max_length=100)
    date: str = Field(min_length=1, max_length=10)


class StepContentIn(BaseModel):
    content: str


@app.get("/polarsteps/api/steps")
def get_steps():
    db = get_db()
    rows = db.execute(
        "SELECT id, name, date, created_at FROM ps_steps ORDER BY date ASC, id ASC"
    ).fetchall()
    db.close()
    return [dict(r) for r in rows]


@app.post("/polarsteps/api/steps", status_code=201)
@limiter.limit("5/minute")
def create_step(request: Request, body: StepIn):
    db = get_db()
    cursor = db.execute(
        "INSERT INTO ps_steps (name, date) VALUES (?, ?)",
        (body.name, body.date),
    )
    db.commit()
    row = db.execute(
        "SELECT id, name, date, content, created_at FROM ps_steps WHERE id = ?",
        (cursor.lastrowid,),
    ).fetchone()
    db.close()
    return dict(row)


@app.get("/polarsteps/api/steps/{step_id}")
def get_step(step_id: int):
    db = get_db()
    row = db.execute(
        "SELECT id, name, date, content, created_at FROM ps_steps WHERE id = ?",
        (step_id,),
    ).fetchone()
    db.close()
    if not row:
        raise HTTPException(status_code=404, detail="Step niet gevonden")
    return dict(row)


@app.put("/polarsteps/api/steps/{step_id}")
async def update_step(step_id: int, body: StepContentIn):
    db = get_db()
    db.execute("UPDATE ps_steps SET content = ? WHERE id = ?", (body.content, step_id))
    db.commit()
    row = db.execute(
        "SELECT id, name, date, content, created_at FROM ps_steps WHERE id = ?",
        (step_id,),
    ).fetchone()
    db.close()
    if not row:
        raise HTTPException(status_code=404, detail="Step niet gevonden")
    if step_id in ps_rooms:
        msg = json.dumps({"type": "update", "content": body.content})
        for ws in list(ps_rooms[step_id]):
            try:
                await ws.send_text(msg)
            except Exception:
                ps_rooms[step_id].discard(ws)
    return dict(row)


@app.delete("/polarsteps/api/steps/{step_id}", status_code=204)
def delete_step(step_id: int):
    db = get_db()
    db.execute("DELETE FROM ps_steps WHERE id = ?", (step_id,))
    db.commit()
    db.close()


# ── Polarsteps WebSocket ──

@app.websocket("/polarsteps/ws/{step_id}")
async def polarsteps_ws(websocket: WebSocket, step_id: int):
    await websocket.accept()
    ps_rooms[step_id].add(websocket)

    db = get_db()
    row = db.execute("SELECT content FROM ps_steps WHERE id = ?", (step_id,)).fetchone()
    db.close()
    if row:
        await websocket.send_text(json.dumps({"type": "init", "content": row["content"]}))

    count = len(ps_rooms[step_id])
    for ws in list(ps_rooms[step_id]):
        try:
            await ws.send_text(json.dumps({"type": "viewers", "count": count}))
        except Exception:
            pass

    try:
        while True:
            raw = await websocket.receive_text()
            data = json.loads(raw)
            if data.get("type") == "update":
                content = str(data.get("content", ""))
                db = get_db()
                db.execute("UPDATE ps_steps SET content = ? WHERE id = ?", (content, step_id))
                db.commit()
                db.close()
                msg = json.dumps({"type": "update", "content": content})
                for ws in list(ps_rooms[step_id]):
                    if ws is not websocket:
                        try:
                            await ws.send_text(msg)
                        except Exception:
                            ps_rooms[step_id].discard(ws)
    except WebSocketDisconnect:
        pass
    finally:
        ps_rooms[step_id].discard(websocket)
        if not ps_rooms[step_id]:
            del ps_rooms[step_id]
        else:
            count = len(ps_rooms[step_id])
            for ws in list(ps_rooms[step_id]):
                try:
                    await ws.send_text(json.dumps({"type": "viewers", "count": count}))
                except Exception:
                    pass
