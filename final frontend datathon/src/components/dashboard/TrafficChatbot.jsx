"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { sendChatMessage } from "@/lib/api";
import { Loader2, Send } from "lucide-react";

export default function TrafficChatbot({ criticalSegments = [] }) {
    const [messages, setMessages] = useState([
        { role: "ai", text: "I'm online. Ask about any critical road and I’ll propose a quick mitigation." },
    ]);
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const scrollRef = useRef(null);

    const chatHistoryPayload = useMemo(
        () => messages.map((m) => ({ role: m.role === "ai" ? "assistant" : "user", content: m.text })),
        [messages]
    );

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages, loading]);

    const handleSend = async () => {
        const trimmed = input.trim();
        if (!trimmed || loading) return;
        const nextMessages = [...messages, { role: "user", text: trimmed }];
        setMessages(nextMessages);
        setInput("");
        setLoading(true);
        setError("");
        try {
            const res = await sendChatMessage(trimmed, chatHistoryPayload, criticalSegments);
            setMessages([...nextMessages, { role: "ai", text: res.reply }]);
        } catch (err) {
            setError(err.message || "Failed to get response");
        } finally {
            setLoading(false);
        }
    };

    const onKeyDown = (e) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    return (
        <div className="rounded-xl border border-emerald-400/30 bg-slate-950/80 text-slate-50 shadow-[0_0_0_1px_rgba(52,211,153,0.2)] p-4 flex flex-col min-h-[320px]">
            <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                    <h3 className="text-sm font-semibold">Traffic Command AI</h3>
                </div>
                <span className="text-[11px] text-emerald-200/80">Online</span>
            </div>

            <div ref={scrollRef} className="flex-1 overflow-y-auto space-y-3 pr-1">
                {messages.map((m, idx) => (
                    <div key={idx} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                        <div
                            className={`max-w-[85%] rounded-lg px-3 py-2 text-sm leading-relaxed whitespace-pre-line ${
                                m.role === "user"
                                    ? "bg-cyan-500/20 border border-cyan-400/40 text-cyan-50"
                                    : "bg-slate-800/80 border border-slate-700 text-slate-100"
                            }`}
                        >
                            {m.text}
                        </div>
                    </div>
                ))}
                {loading && (
                    <div className="text-xs text-emerald-200/80 flex items-center gap-2">
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Thinking...
                    </div>
                )}
                {error && <div className="text-xs text-red-400">{error}</div>}
            </div>

            <div className="mt-3 flex items-center gap-2">
                <textarea
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={onKeyDown}
                    rows={2}
                    placeholder="Ask about any critical road..."
                    className="flex-1 bg-slate-900 border border-emerald-500/30 rounded-lg px-3 py-2 text-sm text-slate-50 focus:outline-none focus:ring-2 focus:ring-emerald-400/60 resize-none"
                />
                <button
                    onClick={handleSend}
                    disabled={loading || !input.trim()}
                    className="h-10 px-3 rounded-lg bg-emerald-500 text-black font-semibold text-sm flex items-center gap-2 disabled:opacity-50"
                >
                    <Send className="w-4 h-4" />
                    Send
                </button>
            </div>
        </div>
    );
}
