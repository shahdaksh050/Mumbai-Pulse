# Deployment Guide

## Frontend (Vercel)
- Project root: set to `final frontend datathon` in Vercel project settings (monorepo layout).
- Build command: `npm run build`
- Install command: `npm install`
- Output directory: `.next`
- Framework: Next.js
- Environment variables (Dashboard → Settings → Environment Variables):
  - `NEXT_PUBLIC_EVENTBRITE_TOKEN` = your Eventbrite private token (if you want live events)
  - Remove/ignore Groq keys (not used). Weather uses OpenMeteo (no key).
- Add `.env.local` locally for dev; do not commit it. In Vercel, set the same vars via the UI.

## Backend (Render)
- A `render.yaml` is provided at repo root. Render will auto-detect it on connect.
- Service type: Web Service (FastAPI)
- Build command: `pip install -r requirements.txt`
- Start command: `uvicorn src.main:app --host 0.0.0.0 --port $PORT`
- Environment variables (Render → Environment):
  - `PYTHON_VERSION` = `3.10`
  - `DATABASE_URL` = `sqlite+aiosqlite:///./traffic.db` (or your Postgres URL if using Postgres)
  - `MODEL_PATH` = `models/tcn_congestion.pt`
  - `SCALER_PATH` = `models/scaler.joblib`
  - `EVENTBRITE_TOKEN` = your Eventbrite private token (optional; set to enable live events)
- Files needed at runtime: `models/tcn_congestion.pt` and `models/scaler.joblib` (already tracked). If you use Postgres, update `DATABASE_URL` and ensure the DB exists.

## CORS
- Backend currently allows all origins (`*`). Lock this down in `src/main.py` once you know your deployed frontend domain.

## Misc
- Restart the frontend after updating env vars.
- For local prod check: `npm run build && npm run start` in `final frontend datathon/`; backend: `uvicorn src.main:app --host 0.0.0.0 --port 8000` after `pip install -r requirements.txt`.
