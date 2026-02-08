"""
FastAPI application entry-point.

Run with:
    uvicorn src.main:app --reload --host 0.0.0.0 --port 8000
"""

from __future__ import annotations

import os
from contextlib import asynccontextmanager

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from src.db.models import init_db
from src.api.routes import router
from src.api.ai_ops import ai_router
from src.api.chatbot import chat_router
from src.api.classifier import load_classifier_artifacts
from src.api.datathon import load_datathon_artifacts


@asynccontextmanager
async def lifespan(app: FastAPI):
    """
    Startup: create DB tables + load model artefacts into memory.
    Shutdown: (nothing special needed).
    """
    # 1. Ensure database tables exist
    await init_db()

    # 2. Load legacy classifier artefacts (optional)
    load_classifier_artifacts()

    # 3. Load Datathon multi-horizon models (primary serving path)
    load_datathon_artifacts()

    yield  # ← app runs here


app = FastAPI(
    title="Mumbai Traffic Congestion Forecasting API",
    description=(
        "TCN-based 6-hour congestion forecasting with segmented search. "
        "Designed for integration with a MERN-stack frontend."
    ),
    version="1.0.0",
    lifespan=lifespan,
)

# ──────────────────────── CORS for React frontend ──────────────────────────
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],           # tighten in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ──────────────────────── Register routes ──────────────────────────────────
app.include_router(router)
app.include_router(ai_router)
app.include_router(chat_router)
