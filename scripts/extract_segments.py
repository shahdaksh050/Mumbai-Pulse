"""
Extract unique road segments from a CSV and print them.

Useful for a quick preview or to feed a MERN frontend dropdown
without needing the full database.

Usage
─────
    python -m scripts.extract_segments --csv data/mumbai_traffic.csv
    python -m scripts.extract_segments --csv data/mumbai_traffic.csv --json
"""

from __future__ import annotations

import argparse
import json
import sys
from pathlib import Path

import pandas as pd


def extract(csv_path: str, as_json: bool = False) -> None:
    df = pd.read_csv(csv_path)

    segments = (
        df.groupby("road_id")
        .agg(
            road_name=("road_name", "first"),
            segment_name=("segment_name", "first"),
            lat=("lat", "first"),
            lon=("lon", "first"),
            road_class=("road_class", "first"),
            readings=("road_id", "count"),
        )
        .reset_index()
        .sort_values("road_name")
    )

    if as_json:
        records = segments.to_dict(orient="records")
        print(json.dumps(records, indent=2))
    else:
        print(f"\n{'='*80}")
        print(f" Found {len(segments)} unique road segments")
        print(f"{'='*80}\n")
        for _, row in segments.iterrows():
            print(
                f"  [{row['road_id']:>10}]  {row['road_name']:<35} "
                f"| {row['segment_name']:<30} "
                f"| {row['road_class']:<12} "
                f"| ({row['lat']:.4f}, {row['lon']:.4f}) "
                f"| {row['readings']} pts"
            )
        print()


def main():
    parser = argparse.ArgumentParser(description="List unique road segments")
    parser.add_argument("--csv", required=True, help="Path to traffic CSV")
    parser.add_argument(
        "--json", action="store_true", help="Output as JSON (for piping)"
    )
    args = parser.parse_args()
    extract(args.csv, args.json)


if __name__ == "__main__":
    main()
