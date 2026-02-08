"use client";

import { Navbar } from "@/components/ui/Navbar";
import { ActiveAlerts } from "@/components/dashboard/ActiveAlerts";

export default function AlertsPage() {
    return (
        <main className="min-h-screen bg-background text-foreground pb-20">
            <Navbar />
            <div className="pt-24 px-4 max-w-7xl mx-auto space-y-8">
                <div>
                    <h1 className="text-3xl font-bold mb-2">Active Alerts</h1>
                    <p className="text-muted-foreground">Real-time incident reporting and situational awareness.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <ActiveAlerts />

                    <div className="p-6 rounded-xl bg-card/40 border border-border/50">
                        <h3 className="tex-lg font-semibold mb-4">Emergency Contacts</h3>
                        <ul className="space-y-4 text-sm text-muted-foreground">
                            <li className="flex justify-between border-b border-border/30 pb-2">
                                <span>Traffic Control Room</span>
                                <span className="text-foreground font-mono">100 / 8454999999</span>
                            </li>
                            <li className="flex justify-between border-b border-border/30 pb-2">
                                <span>Ambulance</span>
                                <span className="text-foreground font-mono">108</span>
                            </li>
                            <li className="flex justify-between border-b border-border/30 pb-2">
                                <span>Disaster Management</span>
                                <span className="text-foreground font-mono">1916</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </main>
    );
}
