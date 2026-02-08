"use client";

import { useEffect, useState, useMemo } from "react";
import { AlertCircle, AlertTriangle, Construction, ShieldAlert, CloudRain, CalendarRange } from "lucide-react";
import { cn } from "@/lib/utils";
import { searchPredictions } from "@/lib/api";
import { useDashboardContext } from "@/hooks/useDashboardContext";

const REFRESH_MS = 5 * 60 * 1000;

function bandToSeverity(band) {
    const b = (band || "").toLowerCase();
    if (b.includes("severe") || b.includes("heavy")) return "critical";
    if (b.includes("moderate")) return "moderate";
    return "light";
}

export function ActiveAlerts() {
    const [alerts, setAlerts] = useState([]);
    const [error, setError] = useState("");
    const {
        rainMm,
        rainWindow,
        events,
        activeEvent,
        summary,
        loadingSummary,
        errorSummary,
    } = useDashboardContext();

    useEffect(() => {
        let mounted = true;
        const fetchAlerts = () => {
            searchPredictions({ min_congestion: 70, limit: 20 })
                .then((rows) => {
                    if (!mounted) return;
                    const mapped = (rows || []).map((row, idx) => ({
                        id: row.road_id + idx,
                        type: row.congestion_band || "Alert",
                        location: row.road_name || row.segment_name || row.road_id,
                        time: row.timestamp?.slice(11, 16) || "now",
                        severity: bandToSeverity(row.congestion_band),
                        description: `Congestion ${row.congestion_pct?.toFixed?.(1) || ""}% at ${row.segment_name || row.road_id}`,
                    }));
                    setAlerts(mapped);
                })
                .catch((err) => setError(err.message));
        };

        fetchAlerts();
        const id = setInterval(fetchAlerts, REFRESH_MS);

        return () => { mounted = false; clearInterval(id); };
    }, []);

    const weatherCard = useMemo(() => ({
        id: "weather",
        severity: rainMm > 2 ? "critical" : rainMm > 0.5 ? "moderate" : "light",
        label: rainMm > 2 ? "Heavy rain" : rainMm > 0.5 ? "Light rain" : "Clear",
        detail: `${rainMm.toFixed?.(1) ?? rainMm} mm${rainWindow ? " · 2-6 PM window" : ""}`,
    }), [rainMm, rainWindow]);

    const eventCards = useMemo(() => {
        if (!events?.length) return [];
        return events.map((e, idx) => ({
            id: `event-${idx}`,
            name: e.name,
            window: `${e.start}:00 - ${e.end}:00`,
            venue: e.venue || "Mumbai",
            active: activeEvent?.name === e.name,
            severity: e.impact === "high" ? "critical" : "moderate",
        }));
    }, [events, activeEvent]);

    const incidentList = useMemo(() => alerts, [alerts]);

    return (
        <div className="w-full h-full flex flex-col p-5 bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl gap-4">
            <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-2">
                    <ShieldAlert className="text-red-500 h-5 w-5 animate-pulse" />
                    <div>
                        <h3 className="text-lg font-semibold text-foreground">Smart Alerts</h3>
                        <p className="text-xs text-muted-foreground">Weather, events, and live incidents</p>
                    </div>
                </div>
                <div className="text-xs text-foreground bg-secondary/60 border border-border/60 px-3 py-1 rounded-lg whitespace-nowrap">
                    {loadingSummary ? "Computing status…" : summary || "Live status pending"}
                </div>
            </div>

            {error && <p className="text-sm text-red-500 mb-2">{error}</p>}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="rounded-xl border border-border/60 bg-background/60 p-3 flex gap-3 items-center">
                    <div className={cn("p-2 rounded-lg", weatherCard.severity === "critical" ? "bg-red-500/10" : weatherCard.severity === "moderate" ? "bg-orange-500/10" : "bg-emerald-500/10") }>
                        <CloudRain className="h-5 w-5 text-cyan-400" />
                    </div>
                    <div className="space-y-1">
                        <p className="text-xs text-muted-foreground uppercase tracking-wide">Weather</p>
                        <p className="text-sm font-semibold text-foreground">{weatherCard.label}</p>
                        <p className="text-xs text-muted-foreground">{weatherCard.detail}</p>
                    </div>
                </div>

                <div className="rounded-xl border border-border/60 bg-background/60 p-3">
                    <div className="flex items-center gap-2 mb-2">
                        <CalendarRange className="h-4 w-4 text-purple-400" />
                        <p className="text-xs text-muted-foreground uppercase tracking-wide">Events</p>
                    </div>
                    <div className="space-y-2">
                        {eventCards.length === 0 && (
                            <p className="text-xs text-muted-foreground">No scheduled events.</p>
                        )}
                        {eventCards.map((e) => (
                            <div
                                key={e.id}
                                className={cn(
                                    "rounded-lg border border-border/50 p-2 text-sm",
                                    e.active ? "bg-purple-500/10 border-purple-400/60" : "bg-background/40"
                                )}
                            >
                                <div className="flex items-center justify-between text-foreground">
                                    <span className="font-semibold">{e.name}</span>
                                    <span className="text-[11px] text-muted-foreground">{e.window}</span>
                                </div>
                                <div className="text-xs text-muted-foreground flex justify-between">
                                    <span>{e.venue}</span>
                                    <span className={cn(
                                        "px-2 py-0.5 rounded-full text-[10px] font-semibold",
                                        e.severity === "critical" ? "bg-red-500/10 text-red-400" : "bg-yellow-500/10 text-yellow-500"
                                    )}>
                                        {e.active ? "Active" : "Scheduled"}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="mt-2 space-y-3 overflow-y-auto max-h-[260px] pr-2 scrollbar-thin scrollbar-thumb-border scrollbar-track-transparent">
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>Live incidents</span>
                    <span>{incidentList.length} items</span>
                </div>
                {incidentList.map((alert) => (
                    <div
                        key={alert.id}
                        className="flex flex-col gap-2 p-3 rounded-lg bg-background/50 border border-border/50 hover:border-primary/50 transition-colors"
                    >
                        <div className="flex items-start justify-between">
                            <div className="flex items-center gap-2">
                                {alert.type === "Accident" && <AlertCircle className="h-4 w-4 text-red-500" />}
                                {alert.type === "Construction" && <Construction className="h-4 w-4 text-orange-500" />}
                                {alert.type === "VVIP Movement" && <AlertTriangle className="h-4 w-4 text-yellow-500" />}
                                <span className="font-medium text-sm text-foreground">{alert.type}</span>
                            </div>
                            <span className="text-[10px] text-muted-foreground bg-secondary/50 px-2 py-0.5 rounded-full">
                                {alert.time}
                            </span>
                        </div>

                        <p className="text-xs text-muted-foreground">
                            <span className="font-semibold text-foreground">{alert.location}:</span> {alert.description}
                        </p>

                        <div className="flex items-center gap-2 mt-1">
                            <span className={cn(
                                "text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded",
                                alert.severity === "critical" ? "bg-red-500/10 text-red-500" :
                                    alert.severity === "heavy" ? "bg-orange-500/10 text-orange-500" :
                                        "bg-yellow-500/10 text-yellow-500"
                            )}>
                                {alert.severity} Impact
                            </span>
                        </div>
                    </div>
                ))}
                {!incidentList.length && <p className="text-sm text-muted-foreground">No active incidents.</p>}
            </div>
        </div>
    );
}
