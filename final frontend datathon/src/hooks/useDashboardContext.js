"use client";

import { useCallback, useEffect, useMemo, useState } from "react";

const WEATHER_URL = "https://api.open-meteo.com/v1/forecast?latitude=19.07&longitude=72.87&current=rain,showers&hourly=rain";

function buildLocalSummary(rainMm, activeEvent) {
    const parts = [];
    if (rainMm > 2) parts.push("moderate rain");
    if (activeEvent) parts.push(`${activeEvent.name} active`);
    if (!parts.length) return "Traffic normal, stay alert.";
    return `${parts.join(" & ")}. Drive safe.`;
}

export function useDashboardContext() {
    const [rainMm, setRainMm] = useState(0);
    const [rainWindow, setRainWindow] = useState(null);
    const [events, setEvents] = useState([]);
    const [summary, setSummary] = useState("");
    const [loadingSummary, setLoadingSummary] = useState(false);
    const [errorSummary, setErrorSummary] = useState("");

    useEffect(() => {
        let cancelled = false;
        const loadWeather = async () => {
            try {
                const res = await fetch(WEATHER_URL);
                const json = await res.json();
                const currentRain = json?.current?.rain ?? 0;
                if (!cancelled) setRainMm(currentRain);

                const hours = json?.hourly?.time || [];
                const rains = json?.hourly?.rain || [];
                const idx2pm = hours.findIndex((t) => t.includes("T14:00"));
                const idx6pm = hours.findIndex((t) => t.includes("T18:00"));
                if (idx2pm !== -1 && idx6pm !== -1) {
                    const slice = rains.slice(idx2pm, idx6pm + 1);
                    const heavy = slice.some((v) => (v ?? 0) > 2);
                    if (!cancelled) setRainWindow(heavy ? { start: 14, end: 18 } : null);
                }
            } catch (err) {
                // keep silent; UI will continue without weather overlays
            }
        };
        loadWeather();
        return () => { cancelled = true; };
    }, []);

    const activeEvent = useMemo(() => {
        const nowHour = new Date().getHours();
        return events.find((e) => nowHour >= e.start && nowHour < e.end) || null;
    }, [events]);

    useEffect(() => {
        const token = process.env.NEXT_PUBLIC_EVENTBRITE_TOKEN;
        if (!token) {
            setEvents([]);
            return;
        }

        let cancelled = false;
        const loadEvents = async () => {
            try {
                const now = new Date();
                const startIso = new Date(now.getTime() - 60 * 60 * 1000).toISOString();
                const url = new URL("https://www.eventbriteapi.com/v3/events/search/");
                url.searchParams.set("location.address", "Mumbai");
                url.searchParams.set("location.within", "50km");
                url.searchParams.set("expand", "venue");
                url.searchParams.set("sort_by", "date");
                url.searchParams.set("start_date.range_start", startIso);

                const res = await fetch(url.toString(), {
                    headers: { Authorization: `Bearer ${token}` },
                });
                if (!res.ok) throw new Error("Events API failed");
                const json = await res.json();
                const mapped = (json?.events || []).map((e) => {
                    const start = e.start?.local ? new Date(e.start.local) : null;
                    const end = e.end?.local ? new Date(e.end.local) : null;
                    const startHour = start ? start.getHours() : null;
                    const endHour = end ? end.getHours() : null;
                    return {
                        name: e.name?.text || "Event",
                        start: startHour ?? 0,
                        end: endHour ?? (startHour != null ? startHour + 2 : 2),
                        venue: e.venue?.name || e.venue?.address?.localized_address_display || "Mumbai",
                        impact: "high",
                    };
                }).filter((e) => e.start != null && e.end != null);
                if (!cancelled) setEvents(mapped);
            } catch (err) {
                if (!cancelled) setEvents([]);
            }
        };

        loadEvents();
        return () => { cancelled = true; };
    }, []);

    const fetchGroqSummary = useCallback(() => {
        setLoadingSummary(true);
        setErrorSummary("");
        setSummary(buildLocalSummary(rainMm, activeEvent));
        setLoadingSummary(false);
    }, [rainMm, activeEvent]);

    useEffect(() => {
        fetchGroqSummary();
    }, [fetchGroqSummary]);

    return {
        rainMm,
        rainWindow,
        events,
        activeEvent,
        summary,
        loadingSummary,
        errorSummary,
        refreshSummary: fetchGroqSummary,
    };
}
