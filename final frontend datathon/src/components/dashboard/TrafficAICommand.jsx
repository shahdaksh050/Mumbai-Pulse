"use client";

import { useEffect, useMemo, useState } from "react";
import { generateMitigation } from "@/lib/api";
import { Loader2 } from "lucide-react";

function debounce(fn, delay) {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => fn(...args), delay);
    };
}

export default function TrafficAICommand({ criticalSegments = [] }) {
    const [output, setOutput] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const debouncedFetch = useMemo(() => debounce(async (payload) => {
        if (!payload.length) return;
        setLoading(true);
        setError("");
        try {
            const res = await generateMitigation(payload);
            setOutput(res);
        } catch (err) {
            setError(err.message || "Failed to fetch AI guidance");
        } finally {
            setLoading(false);
        }
    }, 5000), []);

    useEffect(() => {
        debouncedFetch(criticalSegments.map((seg) => ({
            road_name: seg.road_name,
            congestion_pct: seg.congestion_pct,
            current_speed: seg.speed_kmph,
        })));
    }, [criticalSegments, debouncedFetch]);

    return (
        <div className="rounded-xl border border-emerald-400/30 bg-black/80 text-emerald-200 font-mono text-sm p-4 shadow-[0_0_0_1px_rgba(52,211,153,0.2)] relative overflow-hidden min-h-[220px]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(52,211,153,0.08),transparent_35%)]" />
            <div className="relative space-y-2">
                <div className="flex items-center gap-2 text-emerald-300">
                    <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>AI Traffic Command</span>
                </div>
                {loading && (
                    <div className="flex items-center gap-2 text-emerald-200/80">
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Analyzing traffic patterns...
                    </div>
                )}
                {error && <div className="text-red-400">{error}</div>}
                {output && (
                    <div className="space-y-2">
                        <div className="text-emerald-100">{output.analysis}</div>
                        <div className="space-y-1">
                            {output.actions?.map((act, idx) => (
                                <div key={idx} className="flex gap-2">
                                    <span className="text-emerald-500">{">"}</span>
                                    <span>{act}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
                {!loading && !error && !output && (
                    <div className="text-emerald-200/80">Awaiting critical roads…</div>
                )}
            </div>
        </div>
    );
}
