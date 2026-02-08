"use client";

import { Navbar } from "@/components/ui/Navbar";
import NavigatorDashboard from "@/components/dashboard/NavigatorDashboard";

export default function NavigatorPage() {
    return (
        <main className="min-h-screen bg-background text-foreground pb-20">
            <Navbar />
            <div className="pt-24 px-4 max-w-7xl mx-auto space-y-8">
                <div>
                    <h1 className="text-3xl font-bold mb-2">Traffic Navigator</h1>
                    <p className="text-muted-foreground">Pinpoint specific road segments and analyze real-time conditions.</p>
                </div>

                <NavigatorDashboard />
            </div>
        </main>
    );
}
