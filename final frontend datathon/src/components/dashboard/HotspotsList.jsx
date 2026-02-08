"use client";

import { useEffect, useMemo, useState } from "react";
import { AlertTriangle, TrendingUp, Info } from "lucide-react";
import { searchPredictions } from "@/lib/api";
import { cn } from "@/lib/utils";

function getSeverity(congestionPct) {
    if (congestionPct >= 80) return { key: "critical", label: "Critical", barClass: "bg-red-500/5 border-red-500/20 hover:bg-red-500/10 hover:border-red-500/40", pillClass: "bg-red-500/20 text-red-500" };
    if (congestionPct >= 60) return { key: "heavy", label: "Heavy", barClass: "bg-orange-500/5 border-orange-500/20 hover:bg-orange-500/10 hover:border-orange-500/40", pillClass: "bg-orange-500/20 text-orange-500" };
    return { key: "moderate", label: "Moderate", barClass: "bg-yellow-500/5 border-yellow-500/20 hover:bg-yellow-500/10 hover:border-yellow-500/40", pillClass: "bg-yellow-500/20 text-yellow-500" };
}

const REFRESH_MS = 5 * 60 * 1000;

export function HotspotsList() {
    const [hotspots, setHotspots] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        let mounted = true;
        const fetchHotspots = async () => {
            setLoading(true);
            try {
                const results = await searchPredictions({ min_congestion: 60, limit: 50 });
                if (!mounted) return;
                setHotspots(results || []);
                setError("");
            } catch (err) {
                if (mounted) setError(err.message || "Failed to load hotspots");
            } finally {
                if (mounted) setLoading(false);
            }
        };

        fetchHotspots();
        const id = setInterval(fetchHotspots, REFRESH_MS);
        return () => {
            mounted = false;
            clearInterval(id);
        };
    }, []);

    const sortedHotspots = useMemo(
        () => [...hotspots].sort((a, b) => (b?.congestion_pct || 0) - (a?.congestion_pct || 0)),
        [hotspots]
    );

    return (
        <div className="w-full h-full flex flex-col p-4 bg-card/40 backdrop-blur-sm border border-border/50 rounded-xl">
            <div className="mb-4 flex items-center justify-between">
                <div>
                    <h3 className="text-lg font-semibold text-foreground">Critical Hotspots</h3>
                    <p className="text-xs text-muted-foreground">Areas requiring immediate attention</p>
                </div>
                <AlertTriangle className="text-orange-500 h-5 w-5 animate-pulse" />
            </div>

            {error && <p className="text-sm text-red-500 mb-2">{error}</p>}
            {loading && <p className="text-sm text-muted-foreground">Loading live hotspots…</p>}

            <div className="space-y-3 overflow-y-auto max-h-[300px] pr-2 scrollbar-thin scrollbar-thumb-border scrollbar-track-transparent">
                {!loading && sortedHotspots.length === 0 && (
                    <p className="text-sm text-muted-foreground">No hotspots found for the current filters.</p>
                )}
                {sortedHotspots.map((hotspot) => {
                    const severity = getSeverity(hotspot.congestion_pct || 0);
                    return (
                        <div
                            key={`${hotspot.road_id}-${hotspot.timestamp}`}
                            className={cn(
                                "group flex items-center justify-between p-3 rounded-lg border transition-all cursor-pointer",
                                severity.barClass
                            )}
                        >
                            <div className="flex flex-col gap-1">
                                <span className="font-medium text-sm text-foreground group-hover:text-primary transition-colors">
                                    {hotspot.segment_name || hotspot.road_name || hotspot.road_id}
                                </span>
                                <div className="flex items-center gap-2 text-xs">
                                    <span className={cn("px-1.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider", severity.pillClass)}>
                                        {severity.label}
                                    </span>
                                    <span className="text-muted-foreground flex items-center gap-1">
                                        <TrendingUp className="h-3 w-3" />
                                        {Math.round(hotspot.congestion_pct || 0)}% congestion{hotspot.congestion_band ? ` (${hotspot.congestion_band})` : ""}
                                    </span>
                                </div>
                            </div>

                            <div className="h-8 w-8 rounded-full bg-background/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                <Info className="h-4 w-4 text-foreground" />
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
