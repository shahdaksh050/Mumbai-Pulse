import os
from contextlib import asynccontextmanager
from datetime import datetime, timedelta

import pytest
import torch
from fastapi import HTTPException
from fastapi.testclient import TestClient

from src.main import app
from src.config import INPUT_WINDOW, FORECAST_HORIZON, NUM_FEATURES, MODEL_PATH
from src.models.tcn import build_tcn_from_config


def _sample_forecast_response():
    return {
        "zone_id": "AIR_1",
        "segment_name": "Terminal 2 (Sahar)",
        "road_name": "Airport Approach Road",
        "history": [
            {"time": "2026-02-06T00:00:00", "congestion": 42.1},
            {"time": "2026-02-06T01:00:00", "congestion": 43.2},
        ],
        "forecast": [
            {"time": "2026-02-06T02:00:00", "congestion": 45.3},
            {"time": "2026-02-06T03:00:00", "congestion": 46.4},
        ],
    }


@pytest.fixture(scope="module")
def client():
    @asynccontextmanager
    async def test_lifespan(app_instance):
        yield

    app.router.lifespan_context = test_lifespan
    with TestClient(app) as test_client:
        yield test_client


def test_forecast_missing_fields_returns_422(client):
    response = client.post("/api/forecast", json={"road_id": "AKR_2"})
    assert response.status_code == 422


def test_forecast_invalid_timestamp_returns_422(client):
    response = client.post(
        "/api/forecast",
        json={"road_id": "AKR_2", "timestamp": "not-a-date"},
    )
    assert response.status_code == 422


def test_forecast_future_timestamp_returns_422(client):
    future_ts = (datetime.now() + timedelta(days=1)).isoformat()
    response = client.post(
        "/api/forecast",
        json={"road_id": "AKR_2", "timestamp": future_ts},
    )
    assert response.status_code == 422


def test_shape_mismatch_returns_400(monkeypatch, client):
    async def fake_predict_segment(db, road_id, timestamp):
        raise HTTPException(status_code=400, detail="Shape mismatch: expected 24")

    monkeypatch.setattr("src.api.routes.predict_segment", fake_predict_segment)

    response = client.post(
        "/api/forecast",
        json={"road_id": "AKR_2", "timestamp": "2026-02-06T12:00:00"},
    )
    assert response.status_code == 400


def test_model_inference_mocked(monkeypatch, client):
    async def fake_predict_segment(db, road_id, timestamp):
        return _sample_forecast_response()

    monkeypatch.setattr("src.api.routes.predict_segment", fake_predict_segment)

    response = client.post(
        "/api/forecast",
        json={"road_id": "AIR_1", "timestamp": "2026-02-06T12:00:00"},
    )
    assert response.status_code == 200
    payload = response.json()
    assert "history" in payload
    assert "forecast" in payload
    assert payload["zone_id"] == "AIR_1"


def test_model_output_shape_if_available():
    if not MODEL_PATH.exists():
        pytest.skip("Model weights not found; skipping integration test")

    model = build_tcn_from_config()
    model.load_state_dict(torch.load(MODEL_PATH, map_location="cpu"))
    model.eval()

    x = torch.randn(1, NUM_FEATURES, INPUT_WINDOW)
    with torch.no_grad():
        y = model(x)

    assert tuple(y.shape) == (1, FORECAST_HORIZON)
