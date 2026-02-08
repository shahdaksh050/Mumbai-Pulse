"use client";

import { useState } from "react";
import { Play, RotateCcw } from "lucide-react";
import { cn } from "@/lib/utils";

export function ForecastingControls() {
    const [horizon, setHorizon] = useState(60);
    const [isSimulating, setIsSimulating] = useState(false);

    const handleSimulate = () => {
        setIsSimulating(true);
        setTimeout(() => setIsSimulating(false), 2000);
    };

    return (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-2xl">
            <div className="bg-background/80 backdrop-blur-xl border border-primary/20 rounded-2xl p-4 shadow-2xl flex flex-col md:flex-row items-center gap-6 ring-1 ring-white/10">

                <div className="flex-1 w-full space-y-2">
                    <div className="flex justify-between text-sm font-medium">
                        <span className="text-muted-foreground">Prediction Horizon</span>
                        <span className="text-primary">{horizon} Minutes</span>
                    </div>
                    <input
                        type="range"
                        min="15"
                        max="180"
                        step="15"
                        value={horizon}
                        onChange={(e) => setHorizon(parseInt(e.target.value))}
                        className="w-full h-2 bg-secondary rounded-lg appearance-none cursor-pointer accent-primary"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground/50">
                        <span>15m</span>
                        <span>3h</span>
                    </div>
                </div>

                <div className="flex items-center gap-3 w-full md:w-auto">
                    <button
                        onClick={handleSimulate}
                        disabled={isSimulating}
                        className={cn(
                            "flex-1 md:flex-none px-6 py-2.5 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 min-w-[140px]",
                            isSimulating
                                ? "bg-emerald-500/20 text-emerald-500 border border-emerald-500/50 cursor-wait"
                                : "bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_20px_rgba(var(--primary),0.5)]"
                        )}
                    >
                        {isSimulating ? (
                            <>
                                <RotateCcw className="w-4 h-4 animate-spin" />
                                Processing...
                            </>
                        ) : (
                            <>
                                <Play className="w-4 h-4 fill-current" />
                                Run Forecast
                            </>
                        )}
                    </button>
                </div>

            </div>
        </div>
    );
}
