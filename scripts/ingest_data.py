"""
Ingest a CSV dataset into the MongoDB Atlas database.

This script:
1. Reads the raw CSV file.
2. Parses timestamps (timezone-aware → naive UTC for DB storage).
3. Inserts all rows into ``traffic_readings`` collection.
4. Extracts **unique road segments** and populates ``road_segments``
   collection (the collection that feeds the MERN frontend dropdown).

Usage
─────
    python -m scripts.ingest_data --csv data/mumbai_traffic.csv
"""

from __future__ import annotations

import argparse
import asyncio
import sys
from pathlib import Path

import pandas as pd
from motor.motor_asyncio import AsyncIOMotorClient

# Ensure project root is on sys.path
ROOT = Path(__file__).resolve().parent.parent
sys.path.insert(0, str(ROOT))

from src.config import MONGODB_URL, DATABASE_NAME
from src.db.models import traffic_readings, road_segments


async def ingest(csv_path: str, batch_size: int = 500) -> None:
    """Load CSV → MongoDB (traffic_readings + road_segments collections)."""

    print(f"Reading {csv_path} …")
    df = pd.read_csv(csv_path, parse_dates=["timestamp"])

    # Normalise timestamps to timezone-naive (UTC)
    if df["timestamp"].dt.tz is not None:
        df["timestamp"] = df["timestamp"].dt.tz_convert("UTC").dt.tz_localize(None)

    # Connect to MongoDB
    client = AsyncIOMotorClient(MONGODB_URL)
    db = client[DATABASE_NAME]

    try:
        # ── 1. Insert traffic readings in batches ──────────────────────────────
        print(f"Inserting {len(df)} traffic readings …")
        records = df.to_dict(orient="records")
        for start in range(0, len(records), batch_size):
            batch = records[start : start + batch_size]
            # Convert records to MongoDB format (remove None values)
            mongo_batch = []
            for r in batch:
                # Filter out None values and convert to MongoDB document
                doc = {k: v for k, v in r.items() if v is not None}
                mongo_batch.append(doc)

            if mongo_batch:
                await traffic_readings.insert_many(mongo_batch)
            print(f"  ✓ {min(start + batch_size, len(records))}/{len(records)}")

        # ── 2. Extract unique segments for the dropdown ────────────────────────
        print("Extracting unique road segments …")
        seg_df = (
            df.groupby("road_id")
            .agg(
                road_name=("road_name", "first"),
                segment_name=("segment_name", "first"),
                lat=("lat", "first"),
                lon=("lon", "first"),
                road_class=("road_class", "first"),
            )
            .reset_index()
        )

        # Clear old segment list
        await road_segments.delete_many({})

        # Insert new segments
        segment_docs = []
        for _, row in seg_df.iterrows():
            doc = {
                "road_id": row["road_id"],
                "road_name": row["road_name"],
                "segment_name": row["segment_name"],
                "lat": row["lat"],
                "lon": row["lon"],
                "road_class": row["road_class"],
            }
            # Filter out None values
            doc = {k: v for k, v in doc.items() if v is not None}
            segment_docs.append(doc)

        if segment_docs:
            await road_segments.insert_many(segment_docs)

        print(f"✓ Inserted {len(segment_docs)} unique segments into road_segments collection.")
        print("Done.")

    finally:
        client.close()


def main():
    parser = argparse.ArgumentParser(description="Ingest traffic CSV into DB")
    parser.add_argument(
        "--csv",
        required=True,
        help="Path to the raw traffic CSV file",
    )
    parser.add_argument(
        "--batch-size",
        type=int,
        default=500,
        help="Number of rows per DB insert batch",
    )
    args = parser.parse_args()
    asyncio.run(ingest(args.csv, args.batch_size))


if __name__ == "__main__":
    main()
