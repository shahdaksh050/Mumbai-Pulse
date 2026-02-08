"""
Train the TCN model on the ingested traffic dataset.

Pipeline
────────
1. Load CSV → add cyclic features → scale → create sliding windows per segment.
2. Split into train / val.
3. Train the TemporalConvNet for N epochs (MSE loss, Adam optimiser).
4. Save model weights + scaler to ``models/``.

Usage
─────
    python -m scripts.train --csv data/mumbai_traffic.csv
    python -m scripts.train --csv data/mumbai_traffic.csv --epochs 120 --lr 5e-4
"""

from __future__ import annotations

import argparse
import sys
from pathlib import Path

import numpy as np
import pandas as pd
import torch
import torch.nn as nn
from torch.utils.data import DataLoader, TensorDataset

ROOT = Path(__file__).resolve().parent.parent
sys.path.insert(0, str(ROOT))

from src.config import (
    BATCH_SIZE,
    LEARNING_RATE,
    EPOCHS,
    TRAIN_SPLIT,
    MODEL_PATH,
    SCALER_PATH,
    MODEL_DIR,
)
from src.data.preprocessor import prepare_training_data
from src.models.tcn import build_tcn_from_config


def train(
    csv_path: str,
    epochs: int = EPOCHS,
    lr: float = LEARNING_RATE,
    batch_size: int = BATCH_SIZE,
) -> None:
    device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
    print(f"Device: {device}")
    if torch.cuda.is_available():
        print(f"GPU: {torch.cuda.get_device_name(0)}")
        print(f"GPU Memory: {torch.cuda.get_device_properties(0).total_memory / 1024**3:.1f} GB")
    else:
        print("Note: GPU not available, using CPU")

    # ── 1. Prepare data ───────────────────────────────────────────────────
    print("Preparing training data …")
    df = pd.read_csv(csv_path, parse_dates=["timestamp"])
    X, Y, scaler = prepare_training_data(df)
    print(f"  X shape: {X.shape}   Y shape: {Y.shape}")

    # ── 2. Train / Val split ──────────────────────────────────────────────
    n = len(X)
    split = int(n * TRAIN_SPLIT)
    X_train, Y_train = X[:split], Y[:split]
    X_val, Y_val = X[split:], Y[split:]

    train_ds = TensorDataset(
        torch.from_numpy(X_train).float(),
        torch.from_numpy(Y_train).float(),
    )
    val_ds = TensorDataset(
        torch.from_numpy(X_val).float(),
        torch.from_numpy(Y_val).float(),
    )

    # Use smaller batch size for memory efficiency
    effective_batch_size = 256  # Gradient accumulation
    train_loader = DataLoader(train_ds, batch_size=batch_size, shuffle=True)
    val_loader = DataLoader(val_ds, batch_size=batch_size)

    print(f"Training samples: {len(X_train):,}")
    print(f"Validation samples: {len(X_val):,}")
    print(f"Batch size: {batch_size}, Effective batch: {effective_batch_size}")

    # ── 3. Model, loss, optimiser ─────────────────────────────────────────
    model = build_tcn_from_config().to(device)
    criterion = nn.MSELoss()
    optimiser = torch.optim.Adam(model.parameters(), lr=lr)
    scheduler = torch.optim.lr_scheduler.ReduceLROnPlateau(
        optimiser, mode="min", factor=0.5, patience=5
    )

    best_val_loss = float("inf")

    # ── 4. Training loop ──────────────────────────────────────────────────
    accumulation_steps = effective_batch_size // batch_size
    print(f"Gradient accumulation steps: {accumulation_steps}")

    for epoch in range(1, epochs + 1):
        model.train()
        train_losses = []
        optimiser.zero_grad()
        
        for i, (xb, yb) in enumerate(train_loader):
            xb, yb = xb.to(device), yb.to(device)
            pred = model(xb)
            loss = criterion(pred, yb) / accumulation_steps
            loss.backward()
            
            # Accumulate gradients
            if (i + 1) % accumulation_steps == 0:
                optimiser.step()
                optimiser.zero_grad()
                
            train_losses.append(loss.item() * accumulation_steps)

        # Validation
        model.eval()
        val_losses = []
        with torch.no_grad():
            for xb, yb in val_loader:
                xb, yb = xb.to(device), yb.to(device)
                pred = model(xb)
                val_losses.append(criterion(pred, yb).item())

        t_loss = np.mean(train_losses)
        v_loss = np.mean(val_losses)
        scheduler.step(v_loss)

        if epoch % 5 == 0 or epoch == 1:
            print(
                f"  Epoch {epoch:>3}/{epochs}  "
                f"train_loss={t_loss:.6f}  val_loss={v_loss:.6f}"
            )

        if v_loss < best_val_loss:
            best_val_loss = v_loss
            MODEL_DIR.mkdir(parents=True, exist_ok=True)
            torch.save(model.state_dict(), MODEL_PATH)

    print(f"\n✓ Best val loss: {best_val_loss:.6f}")
    print(f"✓ Model saved to: {MODEL_PATH}")
    print(f"✓ Scaler saved to: {SCALER_PATH}")


def main():
    parser = argparse.ArgumentParser(description="Train TCN congestion model")
    parser.add_argument("--csv", required=True, help="Path to traffic CSV")
    parser.add_argument("--epochs", type=int, default=EPOCHS)
    parser.add_argument("--lr", type=float, default=LEARNING_RATE)
    parser.add_argument("--batch-size", type=int, default=BATCH_SIZE)
    args = parser.parse_args()
    train(args.csv, args.epochs, args.lr, args.batch_size)


if __name__ == "__main__":
    main()


def main():
    parser = argparse.ArgumentParser(description="Train TCN congestion model")
    parser.add_argument("--csv", required=True, help="Path to traffic CSV")
    parser.add_argument("--epochs", type=int, default=EPOCHS)
    parser.add_argument("--lr", type=float, default=LEARNING_RATE)
    parser.add_argument("--batch-size", type=int, default=BATCH_SIZE)
    args = parser.parse_args()
    train(args.csv, args.epochs, args.lr, args.batch_size)


if __name__ == "__main__":
    main()
