"""
AI Operations endpoints: proxy Groq mitigation suggestions for critical road segments.
"""

from __future__ import annotations

import os
from typing import Any, Dict, List

import httpx
from fastapi import APIRouter, HTTPException
from pydantic import BaseModel, Field

GROQ_BASE_URL = "https://api.groq.com/openai/v1"
GROQ_MODEL = os.getenv("GROQ_MODEL", "llama-3.1-8b-instant")
GROQ_API_KEY = os.getenv("GROQ_API_KEY")

ai_router = APIRouter(prefix="/api", tags=["ai-ops"])


class CriticalSegment(BaseModel):
    road_name: str = Field(..., description="Road name")
    congestion_pct: float = Field(..., description="Congestion percentage")
    current_speed: float | None = Field(None, description="Current speed km/h")


class MitigationRequest(BaseModel):
    critical_segments: List[CriticalSegment]


class MitigationResponse(BaseModel):
    analysis: str
    actions: List[str]


async def _call_groq(critical_segments: List[CriticalSegment]) -> Dict[str, Any]:
    if not GROQ_API_KEY:
        raise HTTPException(status_code=500, detail="GROQ_API_KEY is not configured")

    # Build prompt
    lines = [
        "You are a Mumbai Traffic Control Expert. Given these congested roads, "
        "suggest 3 specific, actionable short-term mitigation steps (e.g., diverting traffic, deploying marshals). "
        "Keep it under 50 words per bullet.",
        "Critical segments:",
    ]
    for seg in critical_segments:
        speed_part = f", speed {seg.current_speed:.1f} km/h" if seg.current_speed is not None else ""
        lines.append(f"- {seg.road_name}: {seg.congestion_pct:.1f}% congestion{speed_part}")
    user_prompt = "\n".join(lines)

    payload = {
        "model": GROQ_MODEL,
        "messages": [
            {"role": "system", "content": "You are a Mumbai Traffic Control Expert."},
            {"role": "user", "content": user_prompt},
        ],
        "temperature": 0.4,
        "max_tokens": 220,
    }

    headers = {
        "Authorization": f"Bearer {GROQ_API_KEY}",
        "Content-Type": "application/json",
    }

    async with httpx.AsyncClient(base_url=GROQ_BASE_URL, timeout=15) as client:
        resp = await client.post("/chat/completions", json=payload, headers=headers)
        if resp.status_code >= 400:
            raise HTTPException(status_code=resp.status_code, detail=f"Groq API error: {resp.text}")
        data = resp.json()

    # Extract message content
    content = data.get("choices", [{}])[0].get("message", {}).get("content", "")
    if not content:
        raise HTTPException(status_code=502, detail="Empty response from Groq")
    return {"content": content}


def _parse_actions(content: str) -> MitigationResponse:
    # Basic splitting into bullets; fallback to whole content
    lines = [ln.strip("-• \t") for ln in content.splitlines() if ln.strip()]
    bullets = [ln for ln in lines if len(ln) > 0]
    if not bullets:
        bullets = [content.strip()]
    analysis = bullets[0]
    actions = bullets[:3] if len(bullets) >= 3 else bullets
    return MitigationResponse(analysis=analysis, actions=actions)


@ai_router.post("/generate-mitigation", response_model=MitigationResponse)
async def generate_mitigation(req: MitigationRequest) -> MitigationResponse:
    """Proxy to Grok for mitigation guidance on critical segments."""
    if not req.critical_segments:
        raise HTTPException(status_code=400, detail="critical_segments cannot be empty")
    groq_resp = await _call_groq(req.critical_segments)
    return _parse_actions(groq_resp["content"])
