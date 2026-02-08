"""
Temporal Convolutional Network (TCN) for traffic congestion forecasting.

Key design choices
──────────────────
1. **Causal convolutions** — left-padding only so future data never leaks
   into the prediction.
2. **Exponentially dilated convolutions** (1, 2, 4, 8) — the receptive field
   grows exponentially, covering the full 24-hour input window efficiently.
3. **Residual connections** — each temporal block adds its input back to its
   output, stabilising gradients for deeper stacks.
4. **Dropout (0.3)** — applied after each activation for regularisation.

Tensor shapes (running example)
───────────────────────────────
Input  → (B, C_in=14, L=24)   14 features, 24 time-steps
Output → (B, H=6)             6-step congestion forecast (regression)
"""

from __future__ import annotations

import torch
import torch.nn as nn
from typing import List


# ────────────────────────── Causal Conv1d ──────────────────────────────────

class CausalConv1d(nn.Module):
    """
    1-D convolution with *left-only* (causal) padding so that each output
    time-step depends only on current and past inputs — never the future.

    padding = (kernel_size - 1) * dilation   (applied on the LEFT only)
    """

    def __init__(
        self,
        in_channels: int,
        out_channels: int,
        kernel_size: int,
        dilation: int = 1,
    ):
        super().__init__()
        self.causal_padding = (kernel_size - 1) * dilation
        self.conv = nn.Conv1d(
            in_channels,
            out_channels,
            kernel_size,
            dilation=dilation,
            # No built-in padding — we pad manually for causal guarantee
            padding=0,
        )

    def forward(self, x: torch.Tensor) -> torch.Tensor:
        """x: (B, C, L) → (B, C_out, L)"""
        # F.pad format: (left, right)
        x = nn.functional.pad(x, (self.causal_padding, 0))
        return self.conv(x)


# ────────────────────────── Temporal Block ─────────────────────────────────

class TemporalBlock(nn.Module):
    """
    One residual block of the TCN:

        Input ──┬── CausalConv → BN → ReLU → Dropout
                │   CausalConv → BN → ReLU → Dropout
                │                 │
                └── (1×1 conv) ──(+)── ReLU → Output

    A 1×1 convolution on the skip path matches channel dimensions when
    in_channels ≠ out_channels.
    """

    def __init__(
        self,
        in_channels: int,
        out_channels: int,
        kernel_size: int,
        dilation: int,
        dropout: float = 0.3,
    ):
        super().__init__()

        # --- main path (two causal conv layers) ---
        self.conv1 = CausalConv1d(in_channels, out_channels, kernel_size, dilation)
        self.bn1 = nn.BatchNorm1d(out_channels)

        self.conv2 = CausalConv1d(out_channels, out_channels, kernel_size, dilation)
        self.bn2 = nn.BatchNorm1d(out_channels)

        self.dropout = nn.Dropout(dropout)
        self.relu = nn.ReLU(inplace=True)

        # --- residual (skip) path ---
        self.downsample = (
            nn.Conv1d(in_channels, out_channels, kernel_size=1)
            if in_channels != out_channels
            else nn.Identity()
        )

    def forward(self, x: torch.Tensor) -> torch.Tensor:
        """x: (B, C_in, L) → (B, C_out, L)"""
        residual = self.downsample(x)

        out = self.conv1(x)
        out = self.bn1(out)
        out = self.relu(out)
        out = self.dropout(out)

        out = self.conv2(out)
        out = self.bn2(out)
        out = self.relu(out)
        out = self.dropout(out)

        return self.relu(out + residual)


# ────────────────────────── Full TCN ───────────────────────────────────────

class TemporalConvNet(nn.Module):
    """
    Stack of ``TemporalBlock`` layers with exponentially increasing dilation,
    followed by a linear head that maps the final time-step's representation
    to the forecast horizon.

    Parameters
    ----------
    num_features : int
        Number of input channels (multivariate features per time-step).
    num_channels : list[int]
        Hidden channel size for each temporal block.
        len(num_channels) must equal len(dilations).
    kernel_size : int
        Convolution kernel width.  Default 3.
    dilations : list[int]
        Dilation factor for each block.  Default [1, 2, 4, 8].
    dropout : float
        Dropout probability.  Default 0.3.
    forecast_horizon : int
        Number of future time-steps to predict.  Default 6.

    Forward
    -------
    x : (B, num_features, seq_len=24) → (B, forecast_horizon=6)
    """

    def __init__(
        self,
        num_features: int = 14,
        num_channels: List[int] | None = None,
        kernel_size: int = 3,
        dilations: List[int] | None = None,
        dropout: float = 0.3,
        forecast_horizon: int = 6,
    ):
        super().__init__()

        if num_channels is None:
            num_channels = [64, 64, 64, 64]
        if dilations is None:
            dilations = [1, 2, 4, 8]

        assert len(num_channels) == len(dilations), (
            "num_channels and dilations must have the same length"
        )

        # Compute receptive field for documentation / sanity-check
        self.receptive_field = 1 + 2 * (kernel_size - 1) * sum(dilations)

        layers: list[nn.Module] = []
        in_ch = num_features
        for out_ch, d in zip(num_channels, dilations):
            layers.append(
                TemporalBlock(in_ch, out_ch, kernel_size, dilation=d, dropout=dropout)
            )
            in_ch = out_ch

        self.network = nn.Sequential(*layers)

        # Regression head — takes the LAST time-step's hidden state
        self.fc = nn.Linear(num_channels[-1], forecast_horizon)

    def forward(self, x: torch.Tensor) -> torch.Tensor:
        """
        Parameters
        ----------
        x : Tensor (B, num_features, seq_len)
            Multivariate time-series batch.

        Returns
        -------
        Tensor (B, forecast_horizon)
            Predicted congestion levels for the next ``forecast_horizon``
            time-steps (regression; values in normalised scale).
        """
        # (B, C_in, L) → (B, C_hidden, L)
        out = self.network(x)

        # Take the representation at the LAST time-step (causal ⇒ it has
        # seen the entire input window).
        out = out[:, :, -1]  # (B, C_hidden)

        # Project to forecast horizon
        return self.fc(out)  # (B, forecast_horizon)


# ───────────────── Convenience: build model from config ────────────────────

def build_tcn_from_config():
    """Construct a TemporalConvNet using values from ``src.config``."""
    from src.config import (
        NUM_FEATURES,
        TCN_CHANNELS,
        TCN_KERNEL_SIZE,
        DILATION_FACTORS,
        TCN_DROPOUT,
        FORECAST_HORIZON,
    )

    model = TemporalConvNet(
        num_features=NUM_FEATURES,
        num_channels=TCN_CHANNELS,
        kernel_size=TCN_KERNEL_SIZE,
        dilations=DILATION_FACTORS,
        dropout=TCN_DROPOUT,
        forecast_horizon=FORECAST_HORIZON,
    )
    return model


# ──────────────────────── Quick smoke-test ─────────────────────────────────

if __name__ == "__main__":
    model = build_tcn_from_config()
    print(model)
    print(f"\nReceptive field: {model.receptive_field} time-steps")

    dummy = torch.randn(4, 14, 24)          # batch=4, features=14, seq_len=24
    pred = model(dummy)
    print(f"Input shape : {dummy.shape}")    # (4, 14, 24)
    print(f"Output shape: {pred.shape}")     # (4, 6)
