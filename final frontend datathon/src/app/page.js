"use client";

import { HeroSection } from "@/components/dashboard/HeroSection";
import { Navbar } from "@/components/ui/Navbar";
import { ArrowRight, Map, BarChart3, Bell, Navigation } from "lucide-react";
import Link from "next/link";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center bg-background text-foreground overflow-x-hidden">
            <Navbar />

            <section className="relative w-full pt-16">
                <HeroSection />
            </section>

            {/* Features Grid */}
            <section className="w-full max-w-7xl px-4 py-16 space-y-12">
                <div className="text-center space-y-4">
                    <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
                        Advanced Traffic Intelligence
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Leverage AI-driven insights to predict congestion, optimize routes, and enhance urban mobility.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <FeatureCard
                        icon={<Map className="w-8 h-8 text-primary" />}
                        title="Real-Time Grid"
                        description="Interactive visualization of city traffic with live congestion heatmaps."
                        href="/map"
                    />
                    <FeatureCard
                        icon={<BarChart3 className="w-8 h-8 text-purple-500" />}
                        title="Predictive Analytics"
                        description="48-hour forecasting models and critical hotspot analysis."
                        href="/analytics"
                    />
                    <FeatureCard
                        icon={<Navigation className="w-8 h-8 text-blue-500" />}
                        title="Traffic Navigator"
                        description="Pinpoint specific road segments and view detailed status metadata."
                        href="/navigator"
                    />
                    <FeatureCard
                        icon={<Bell className="w-8 h-8 text-orange-500" />}
                        title="Smart Alerts"
                        description="Instant notifications for accidents, road closures, and delays."
                        href="/alerts"
                    />
                </div>
            </section>
        </main>
    );
}

function FeatureCard({ icon, title, description, href }) {
    return (
        <Link href={href} className="group relative p-6 rounded-2xl bg-card/40 border border-border/50 hover:bg-card/60 transition-all hover:scale-105 duration-300 flex flex-col h-full">
            <div className="mb-4 bg-background/50 w-fit p-3 rounded-xl border border-border/50 group-hover:border-primary/50 transition-colors">
                {icon}
            </div>
            <h3 className="text-xl font-semibold mb-2 text-foreground">{title}</h3>
            <p className="text-muted-foreground mb-4 flex-grow">{description}</p>
            <div className="flex items-center text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-[-10px] group-hover:translate-x-0 duration-300 mt-auto">
                Explore <ArrowRight className="w-4 h-4 ml-1" />
            </div>
        </Link>
    );
}
