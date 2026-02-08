# Mumbai Urban Traffic Congestion Forecasting — Backend

> **TCN-based 6-hour congestion forecasting** with segmented search, designed for a MERN-stack frontend.

---

## Project Structure

```
DatathonV2/
├── src/
│   ├── config.py                 # Central configuration & hyperparameters
│   ├── main.py                   # FastAPI app entry-point
│   ├── models/
│   │   └── tcn.py                # Temporal Convolutional Network (PyTorch)
│   ├── data/
│   │   └── preprocessor.py       # Feature engineering, scaler, sliding windows
│   ├── api/
│   │   ├── routes.py             # FastAPI REST endpoints
│   │   ├── logic.py              # Segmented search & inference pipeline
│   │   └── schemas.py            # Pydantic request/response models
│   └── db/
│       └── models.py             # SQLAlchemy async models, DB schema
├── scripts/
│   ├── ingest_data.py            # CSV → database ingestion
│   ├── extract_segments.py       # List unique road segments (for dropdown)
│   └── train.py                  # Train the TCN model
├── models/                       # Saved model weights & scaler (generated)
├── data/                         # Place your CSV dataset here
├── requirements.txt
└── README.md
```

---

## Quick Start

### 1. Install dependencies

```bash
pip install -r requirements.txt
```

### 2. Place your dataset

Put your traffic CSV file in `data/`:
```
data/mumbai_traffic.csv
```

### 3. Preview road segments (optional)

```bash
python -m scripts.extract_segments --csv data/mumbai_traffic.csv
python -m scripts.extract_segments --csv data/mumbai_traffic.csv --json   # JSON output
```

### 4. Ingest data into database

```bash
python -m scripts.ingest_data --csv data/mumbai_traffic.csv
```

This creates:
- `traffic.db` (SQLite) with all readings
- A `road_segments` table for the frontend dropdown

### 5. Train the TCN model

```bash
python -m scripts.train --csv data/mumbai_traffic.csv --epochs 80
```

Saves:
- `models/tcn_congestion.pt` — trained weights
- `models/scaler.joblib` — fitted Min-Max scaler

### 6. Start the API server

```bash
uvicorn src.main:app --reload --host 0.0.0.0 --port 8000
```

Open `http://localhost:8000/docs` for the interactive Swagger UI.

---

## API Endpoints

| Method | Endpoint                         | Description                              |
| ------ | -------------------------------- | ---------------------------------------- |
| GET    | `/api/health`                    | Liveness check                           |
| GET    | `/api/segments`                  | List all road segments (dropdown data)   |
| GET    | `/api/segments/{road_id}/range`  | Available time range for a segment       |
| POST   | `/api/forecast`                  | Segmented search + TCN 6-hour forecast   |
| POST   | `/api/search`                    | Search readings by zone/time/congestion  |

### Forecast Request Example

```json
POST /api/forecast
{
  "road_id": "AIR_1",
  "timestamp": "2024-02-08T00:30:00"
}
```

### Forecast Response

```json
{
  "zone_id": "AIR_1",
  "segment_name": "Terminal 2 (Sahar)",
  "road_name": "Airport Approach Road",
  "history": [
    {"time": "2024-02-07T00:30:00", "congestion": 45.12},
    ...
  ],
  "forecast": [
    {"time": "2024-02-08T00:30:00", "congestion": 60.34},
    ...
  ]
}
```

### Prediction Region Search

```json
POST /api/search
{
  "road_id": "AIR_1",
  "start_time": "2024-02-07T00:00:00",
  "end_time": "2024-02-08T00:00:00",
  "min_congestion": 50,
  "max_congestion": 90,
  "limit": 50
}
```

---

## Database Schema

### Indexing Strategy

The `traffic_readings` table has a **composite index** on `(road_id, timestamp)`:

```sql
CREATE INDEX ix_road_time ON traffic_readings (road_id, timestamp);
```

This makes the core segmented-search query — "fetch 24 rows for segment X before time T" — an **index range scan** with `O(log N + 24)` cost, regardless of table size.

### Tables

- **`traffic_readings`** — One row per hour per road segment. All sensor data.
- **`road_segments`** — Unique segments with metadata (name, lat/lon, class). Powers the dropdown.

---

## Architecture Notes

### TCN Design
- **Causal convolutions** — left-padding only, zero future data leakage
- **Dilated convolutions** (1, 2, 4, 8) — receptive field covers the full 24-hour window
- **Residual connections** — skip connections in each temporal block
- **Dropout 0.3** — regularisation after each activation

### Sliding Windows
- Per-segment windowing prevents cross-segment data leakage
- `X = data[t₀:t₂₃]` (24 hours), `Y = data[t₂₄:t₂₉]` (6 hours ahead)

### Segmented Search Pipeline
1. **Fetch** — 24 rows from DB using composite index
2. **Scale** — apply saved MinMax scaler
3. **Infer** — forward pass through TCN
4. **Inverse-scale** — back to 0-100% congestion
5. **Format** — JSON for React chart

---

## Switching to PostgreSQL

1. Install `asyncpg`: `pip install asyncpg`
2. Update `DATABASE_URL` in `src/config.py`:
   ```python
   DATABASE_URL = "postgresql+asyncpg://user:pass@host:5432/traffic"
   ```
3. Everything else works identically.
