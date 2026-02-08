"use client";

import { SparklesText } from "@/components/ui/sparkles-text";
import { ChevronRight, Zap } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
    return (
        <div className="relative w-full flex flex-col items-center justify-center py-20 overflow-hidden bg-background">
            <div className="absolute inset-0 w-full h-full bg-grid-white/[0.02] -z-10 [mask-image:linear-gradient(to_bottom,white,transparent)]" />

            <div className="z-10 flex flex-col items-center gap-6 text-center max-w-4xl px-4">
                <h1 className="text-5xl md:text-7xl font-bold tracking-tighter flex flex-wrap items-center justify-center gap-2">
                    <span className="text-foreground">Mumbai</span>
                    <SparklesText text="Pulse" />
                </h1>

                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                    The next-generation traffic command center for Mumbai. Monitor congestion, predict bottlenecks, and optimize city flow in real-time.
                </p>

                <div className="flex flex-col md:flex-row items-center justify-center gap-4 pt-4">
                    <Link
                        href="/map"
                        className="px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(var(--primary),0.5)]"
                    >
                        Launch Grid <Zap className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </div>
    );
}
