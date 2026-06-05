from __future__ import annotations

import asyncio
import json
import os
import sqlite3
from collections import defaultdict
from datetime import datetime, timedelta

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
    allow_methods=["GET", "POST", "PUT", "DELETE", "PATCH"],
    allow_headers=["Content-Type"],
)

# ── Polarsteps in-memory state (never persisted) ──
# {step_id: {"token": str, "expires": datetime, "writer": str}}
ps_locks: dict[int, dict] = {}
# {step_id: set[WebSocket]}  — readers only
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
        CREATE TABLE IF NOT EXISTS steps (
            id         INTEGER PRIMARY KEY AUTOINCREMENT,
            title      TEXT NOT NULL,
            date       TEXT NOT NULL DEFAULT (date('now')),
            content    TEXT NOT NULL DEFAULT '',
            created_at TEXT NOT NULL DEFAULT (datetime('now')),
            updated_at TEXT NOT NULL DEFAULT (datetime('now'))
        )
        """
    )
    db.commit()
    db.close()


init_db()


@app.on_event("startup")
async def startup() -> None:
    asyncio.create_task(_lock_cleanup_loop())


async def _lock_cleanup_loop() -> None:
    """Remove expired locks every 10 s and broadcast 'unlocked'."""
    while True:
        await asyncio.sleep(10)
        now = datetime.utcnow()
        expired = [sid for sid, lk in list(ps_locks.items()) if now > lk["expires"]]
        for sid in expired:
            del ps_locks[sid]
            await _broadcast(sid, {"type": "unlocked"})


async def _broadcast(step_id: int, msg: dict) -> None:
    if step_id not in ps_rooms:
        return
    text = json.dumps(msg)
    for ws in list(ps_rooms[step_id]):
        try:
            await ws.send_text(text)
        except Exception:
            ps_rooms[step_id].discard(ws)


def _active_lock(step_id: int) -> dict | None:
    lock = ps_locks.get(step_id)
    if lock is None:
        return None
    if datetime.utcnow() > lock["expires"]:
        del ps_locks[step_id]
        return None
    return lock


# ══════════════════════════════════════════
# Forum
# ══════════════════════════════════════════

class MessageIn(BaseModel):
    name: str = Field(min_length=1, max_length=50)
    content: str = Field(min_length=1, max_length=280)
    category: str = Field(default="", max_length=50)


@app.get("/forum/api/messages")
def get_messages(category: str = ""):
    db = get_db()
    if category:
        rows = db.execute(
            "SELECT id, name, content, category, created_at FROM messages "
            "WHERE category = ? ORDER BY id DESC LIMIT 100",
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


# ══════════════════════════════════════════
# Polarsteps — REST
# ══════════════════════════════════════════

class StepCreate(BaseModel):
    title: str = Field(min_length=1, max_length=100)
    date: str = Field(min_length=1, max_length=10)


class StepPatch(BaseModel):
    content: str
    session_token: str


class LockRequest(BaseModel):
    session_token: str
    writer: str = Field(default="Iemand", max_length=50)


class HeartbeatRequest(BaseModel):
    session_token: str


@app.get("/polarsteps/api/steps")
def get_steps():
    db = get_db()
    rows = db.execute(
        "SELECT id, title, date, updated_at FROM steps ORDER BY date ASC, id ASC"
    ).fetchall()
    db.close()
    return [dict(r) for r in rows]


@app.post("/polarsteps/api/steps", status_code=201)
@limiter.limit("5/minute")
def create_step(request: Request, body: StepCreate):
    db = get_db()
    cursor = db.execute(
        "INSERT INTO steps (title, date) VALUES (?, ?)",
        (body.title, body.date),
    )
    db.commit()
    row = db.execute(
        "SELECT id, title, date, content, created_at, updated_at FROM steps WHERE id = ?",
        (cursor.lastrowid,),
    ).fetchone()
    db.close()
    return dict(row)


@app.get("/polarsteps/api/steps/{step_id}")
def get_step(step_id: int):
    db = get_db()
    row = db.execute(
        "SELECT id, title, date, content, created_at, updated_at FROM steps WHERE id = ?",
        (step_id,),
    ).fetchone()
    db.close()
    if not row:
        raise HTTPException(status_code=404, detail="Step niet gevonden")
    return dict(row)


@app.patch("/polarsteps/api/steps/{step_id}")
@limiter.limit("60/minute")
async def patch_step(request: Request, step_id: int, body: StepPatch):
    lock = _active_lock(step_id)
    if lock is None or lock["token"] != body.session_token:
        raise HTTPException(status_code=403, detail="Geen actieve schrijflock voor dit token")
    db = get_db()
    db.execute(
        "UPDATE steps SET content = ?, updated_at = datetime('now') WHERE id = ?",
        (body.content, step_id),
    )
    db.commit()
    row = db.execute(
        "SELECT id, title, date, content, updated_at FROM steps WHERE id = ?",
        (step_id,),
    ).fetchone()
    db.close()
    if not row:
        raise HTTPException(status_code=404, detail="Step niet gevonden")
    await _broadcast(step_id, {"type": "content", "content": body.content})
    return dict(row)


@app.delete("/polarsteps/api/steps/{step_id}", status_code=204)
async def delete_step(step_id: int):
    db = get_db()
    db.execute("DELETE FROM steps WHERE id = ?", (step_id,))
    db.commit()
    db.close()
    ps_locks.pop(step_id, None)
    await _broadcast(step_id, {"type": "deleted"})


@app.post("/polarsteps/api/steps/{step_id}/lock")
async def acquire_lock(step_id: int, body: LockRequest):
    existing = _active_lock(step_id)
    if existing and existing["token"] != body.session_token:
        raise HTTPException(status_code=409, detail=f"{existing['writer']} schrijft al")
    ps_locks[step_id] = {
        "token": body.session_token,
        "expires": datetime.utcnow() + timedelta(seconds=30),
        "writer": body.writer,
    }
    await _broadcast(step_id, {"type": "locked", "writer": body.writer})
    return {"locked": True, "writer": body.writer}


@app.delete("/polarsteps/api/steps/{step_id}/lock", status_code=204)
async def release_lock(step_id: int, session_token: str):
    lock = _active_lock(step_id)
    if lock and lock["token"] == session_token:
        del ps_locks[step_id]
        await _broadcast(step_id, {"type": "unlocked"})


@app.post("/polarsteps/api/steps/{step_id}/heartbeat")
@limiter.limit("10/minute")
def heartbeat(request: Request, step_id: int, body: HeartbeatRequest):
    lock = _active_lock(step_id)
    if lock is None or lock["token"] != body.session_token:
        raise HTTPException(status_code=403, detail="Lock niet (meer) actief")
    lock["expires"] = datetime.utcnow() + timedelta(seconds=30)
    return {"extended": True}


# ══════════════════════════════════════════
# Polarsteps — WebSocket (server→client only)
# ══════════════════════════════════════════

@app.websocket("/polarsteps/ws/steps/{step_id}")
async def polarsteps_ws(websocket: WebSocket, step_id: int):
    await websocket.accept()
    ps_rooms[step_id].add(websocket)

    db = get_db()
    row = db.execute("SELECT content FROM steps WHERE id = ?", (step_id,)).fetchone()
    db.close()

    lock = _active_lock(step_id)
    await websocket.send_text(json.dumps({
        "type": "init",
        "content": row["content"] if row else "",
        "lock": {"writer": lock["writer"]} if lock else None,
    }))

    try:
        while True:
            msg = await websocket.receive()
            if msg["type"] == "websocket.disconnect":
                break
            # Server→client only: silently discard any incoming data
    except WebSocketDisconnect:
        pass
    finally:
        ps_rooms[step_id].discard(websocket)
        if not ps_rooms[step_id]:
            del ps_rooms[step_id]
