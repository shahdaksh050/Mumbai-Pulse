#!/usr/bin/env python3
import json
import random
import time
from datetime import datetime, timedelta

import requests

PREDICT_URL = "http://localhost:8000/predict"
FORECAST_URL = "http://localhost:8000/api/forecast"


def build_dummy_sequence(hours=24, features=8):
    return [
        [round(random.uniform(0, 100), 3) for _ in range(features)]
        for _ in range(hours)
    ]


def send_request(url, payload):
    start = time.time()
    response = requests.post(url, json=payload, timeout=30)
    elapsed = time.time() - start

    print(f"URL: {url}")
    print(f"Status Code: {response.status_code}")
    try:
        data = response.json()
        print("Response JSON:")
        print(json.dumps(data, indent=2))
    except Exception:
        print("Raw Response:")
        print(response.text)
    print(f"Time Taken: {elapsed:.3f}s")
    return response


if __name__ == "__main__":
    dummy_sequence = build_dummy_sequence(hours=24, features=8)
    predict_payload = {
        "zone_id": "ZONE_1",
        "history": dummy_sequence,
    }

    try:
        response = send_request(PREDICT_URL, predict_payload)
    except requests.exceptions.RequestException as exc:
        print(f"Request failed: {exc}")
        response = None

    if response is None or response.status_code == 404:
        fallback_timestamp = (datetime.now() - timedelta(hours=1)).isoformat()
        fallback_payload = {
            "road_id": "AKR_2",
            "timestamp": fallback_timestamp,
        }
        print("\n/predict not available. Falling back to /api/forecast...")
        send_request(FORECAST_URL, fallback_payload)
