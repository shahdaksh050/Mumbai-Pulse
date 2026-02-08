"""
Stateless chat endpoint for Traffic Command AI.
"""
from __future__ import annotations

import os
from typing import Any, List

import httpx
from fastapi import APIRouter, HTTPException
from pydantic import BaseModel, Field

GROQ_BASE_URL = "https://api.groq.com/openai/v1"
GROQ_MODEL = os.getenv("GROQ_MODEL", "llama-3.1-8b-instant")
GROQ_API_KEY = os.getenv("GROQ_API_KEY")

auth_headers = {"Authorization": f"Bearer {GROQ_API_KEY}", "Content-Type": "application/json"}

chat_router = APIRouter(prefix="/api", tags=["chat"])


class ChatMessage(BaseModel):
    role: str
    content: str


class ChatRequest(BaseModel):
    user_message: str = Field(..., description="User's latest message")
    chat_history: List[ChatMessage] = Field(default_factory=list, description="Prior messages")
    live_context: List[Any] = Field(default_factory=list, description="Current critical segments")


class ChatResponse(BaseModel):
    reply: str


def _build_messages(req: ChatRequest) -> List[dict]:
    context_str = "\n".join(
        [f"- {c.get('road_name','?')}: {c.get('congestion_pct','?')}% congestion" for c in req.live_context]
    ) or "No live context provided."

    system_prompt = (
        "You are the Mumbai Pulse Traffic Command AI. You have access to real-time sensor data. "
        "Here is the current situation:\n"
        f"{context_str}\n"
        "Answer the user's questions tactically and concisely. Do not hallucinate roads that aren't in the data."
    )

    messages = [{"role": "system", "content": system_prompt}]
    messages.extend({"role": m.role, "content": m.content} for m in req.chat_history)
    messages.append({"role": "user", "content": req.user_message})
    return messages


async def _call_groq(messages: List[dict]) -> str:
    if not GROQ_API_KEY:
        raise HTTPException(status_code=500, detail="GROQ_API_KEY is not configured")

    payload = {
        "model": GROQ_MODEL,
        "messages": messages,
        "temperature": 0.4,
        "max_tokens": 320,
    }

    async with httpx.AsyncClient(base_url=GROQ_BASE_URL, timeout=15) as client:
        resp = await client.post("/chat/completions", json=payload, headers=auth_headers)
        if resp.status_code >= 400:
            raise HTTPException(status_code=resp.status_code, detail=f"Groq API error: {resp.text}")
        data = resp.json()

    content = data.get("choices", [{}])[0].get("message", {}).get("content")
    if not content:
        raise HTTPException(status_code=502, detail="Empty response from Groq")
    return content


@chat_router.post("/chat/message", response_model=ChatResponse)
async def chat_message(req: ChatRequest) -> ChatResponse:
    messages = _build_messages(req)
    reply = await _call_groq(messages)
    return ChatResponse(reply=reply)
