"use client";

import { Clock, MapPin, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function TravelDelay() {
    const [source, setSource] = useState("Dadar");
    const [destination, setDestination] = useState("BKC");
    const [isCalculating, setIsCalculating] = useState(false);

    const baseTime = 25; // mins
    const [delay, setDelay] = useState(10); // stable initial to avoid SSR mismatch

    useEffect(() => {
        // deterministic pseudo-random based on source+dest for stable hydration
        const seed = (source + destination).split("").reduce((a, c) => a + c.charCodeAt(0), 0);
        const pseudo = (seed % 21) + 5; // 5-25
        setDelay(pseudo);
    }, [source, destination]);

    const totalTime = baseTime + delay;

    return (
        <div className="w-full flex flex-col p-4 bg-card/40 backdrop-blur-sm border border-border/50 rounded-xl">
            <div className="mb-4 flex items-center justify-between">
                <div>
                    <h3 className="text-lg font-semibold text-foreground">Travel Estimator</h3>
                    <p className="text-xs text-muted-foreground">Calculate delay on your route</p>
                </div>
                <Clock className="text-blue-500 h-5 w-5" />
            </div>

            <div className="space-y-4">
                <div className="grid grid-cols-[1fr,auto,1fr] gap-2 items-center">
                    <div className="space-y-1">
                        <label className="text-[10px] uppercase text-muted-foreground font-bold tracking-wider">From</label>
                        <div className="flex items-center gap-2 p-2 rounded bg-background/50 border border-border/50">
                            <MapPin className="h-3 w-3 text-emerald-500" />
                            <select
                                className="bg-transparent text-sm w-full outline-none"
                                value={source}
                                onChange={(e) => setSource(e.target.value)}
                            >
                                <option>Dadar</option>
                                <option>Andheri</option>
                                <option>Colaba</option>
                                <option>Thane</option>
                            </select>
                        </div>
                    </div>

                    <div className="pt-4 text-muted-foreground">
                        <ArrowRight className="h-4 w-4" />
                    </div>

                    <div className="space-y-1">
                        <label className="text-[10px] uppercase text-muted-foreground font-bold tracking-wider">To</label>
                        <div className="flex items-center gap-2 p-2 rounded bg-background/50 border border-border/50">
                            <MapPin className="h-3 w-3 text-red-500" />
                            <select
                                className="bg-transparent text-sm w-full outline-none"
                                value={destination}
                                onChange={(e) => setDestination(e.target.value)}
                            >
                                <option>BKC</option>
                                <option>Powai</option>
                                <option>Worli</option>
                                <option>Airport</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="p-3 rounded-lg bg-background/30 border border-border/30 space-y-2">
                    <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Standard Time</span>
                        <span className="text-sm font-mono">{baseTime} min</span>
                    </div>
                    <div className="flex justify-between items-center text-red-400">
                        <span className="text-sm font-medium">Traffic Delay</span>
                        <span className="text-sm font-mono font-bold">+{delay} min</span>
                    </div>
                    <div className="h-px bg-border/50 my-1" />
                    <div className="flex justify-between items-center">
                        <span className="text-sm font-bold text-foreground">Total Estimate</span>
                        <span className="text-lg font-mono font-bold text-primary">{totalTime} min</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
