from __future__ import annotations

import os
import sqlite3

from fastapi import FastAPI, Request
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
    allow_methods=["GET", "POST"],
    allow_headers=["Content-Type"],
)


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
    db.commit()
    db.close()


init_db()


class MessageIn(BaseModel):
    name: str = Field(min_length=1, max_length=50)
    content: str = Field(min_length=1, max_length=280)


@app.get("/forum/api/messages")
def get_messages():
    db = get_db()
    rows = db.execute(
        "SELECT id, name, content, created_at FROM messages ORDER BY id DESC LIMIT 100"
    ).fetchall()
    db.close()
    return [dict(r) for r in rows]


@app.post("/forum/api/messages", status_code=201)
@limiter.limit("10/minute")
def post_message(request: Request, body: MessageIn):
    db = get_db()
    cursor = db.execute(
        "INSERT INTO messages (name, content) VALUES (?, ?)",
        (body.name, body.content),
    )
    db.commit()
    row = db.execute(
        "SELECT id, name, content, created_at FROM messages WHERE id = ?",
        (cursor.lastrowid,),
    ).fetchone()
    db.close()
    return dict(row)
