"""
Offline-friendly fallback data for API endpoints when MongoDB is unreachable.
Keeps the frontend usable in preview deployments and local dev without Mongo.
"""

from __future__ import annotations

from datetime import datetime, timedelta
from typing import List, Dict, Any

# Canonical segment set (mirrors the frontend static seed)
STATIC_SEGMENTS: List[Dict[str, Any]] = [
    {"road_id": "AKR_2", "road_name": "Western Express Highway", "segment_name": "Andheri-Kurla Rd", "lat": 19.1136, "lon": 72.8697, "road_class": "arterial"},
    {"road_id": "BPT_11", "road_name": "Bandra Kurla Complex", "segment_name": "BKC Connector", "lat": 19.0679, "lon": 72.8679, "road_class": "arterial"},
    {"road_id": "ETW_7", "road_name": "Eastern Freeway", "segment_name": "Chembur Ramp", "lat": 19.0485, "lon": 72.8785, "road_class": "expressway"},
    {"road_id": "WOR_4", "road_name": "Worli Sea Face", "segment_name": "Worli Promenade", "lat": 19.0169, "lon": 72.8177, "road_class": "coastal"},
    {"road_id": "SCLR_3", "road_name": "Santacruz-Chembur Link Rd", "segment_name": "SCLR Elevated", "lat": 19.0807, "lon": 72.8694, "road_class": "arterial"},
]


def _base_pct(idx: int) -> float:
    return min(95.0, 62.0 + idx * 6.5)


def fallback_predictions(limit: int = 50) -> List[Dict[str, Any]]:
    """Return deterministic pseudo-live predictions for UI continuity."""
    now = datetime.utcnow()
    rows: List[Dict[str, Any]] = []
    for idx, seg in enumerate(STATIC_SEGMENTS):
        pct = _base_pct(idx)
        for j in range(3):
            ts = now - timedelta(minutes=idx * 7 + j * 5)
            rows.append({
                "road_id": seg["road_id"],
                "road_name": seg["road_name"],
                "segment_name": seg["segment_name"],
                "timestamp": ts.isoformat() + "Z",
                "congestion_pct": pct - j * 3,
                "congestion_band": "Severe" if pct > 80 else "Heavy" if pct > 70 else "Moderate",
            })
    return rows[:limit]


def fallback_time_range(road_id: str) -> Dict[str, Any]:
    now = datetime.utcnow()
    earliest = now - timedelta(days=7)
    latest = now
    return {
        "road_id": road_id,
        "earliest": earliest.isoformat() + "Z",
        "latest": latest.isoformat() + "Z",
        "total_readings": 7 * 24,
    }


def fallback_forecast(road_id: str, timestamp: datetime) -> Dict[str, Any]:
    base = 68.0
    history = []
    for i in range(24):
        ts = timestamp - timedelta(hours=24 - i)
        history.append({
            "time": ts.isoformat(),
            "congestion": round(base + (i % 6) - 6, 2),
        })

    forecast = []
    for idx, hours in enumerate([1, 2, 3, 4, 5, 6]):
        ts = timestamp + timedelta(hours=hours)
        forecast.append({
            "time": ts.isoformat(),
            "congestion": round(base + 2 + idx * 1.5, 2),
        })

    seg = next((s for s in STATIC_SEGMENTS if s["road_id"] == road_id), None) or STATIC_SEGMENTS[0]
    return {
        "zone_id": road_id,
        "segment_name": seg.get("segment_name", ""),
        "road_name": seg.get("road_name", ""),
        "history": history,
        "forecast": forecast,
    }
