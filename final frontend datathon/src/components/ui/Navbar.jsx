"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { LayoutDashboard, Map, BarChart3, AlertTriangle, Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { name: "Home", href: "/", icon: <LayoutDashboard className="w-4 h-4" /> },
        { name: "Live Map", href: "/map", icon: <Map className="w-4 h-4" /> },
        { name: "Analytics", href: "/analytics", icon: <BarChart3 className="w-4 h-4" /> },
        { name: "Navigator", href: "/navigator", icon: <Map className="w-4 h-4" /> },
        { name: "Alerts", href: "/alerts", icon: <AlertTriangle className="w-4 h-4" /> },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <Link href="/" className="flex items-center gap-2 font-bold text-xl text-primary">
                            <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                                <Map className="w-5 h-5 text-primary" />
                            </div>
                            <span className="hidden sm:inline-block bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">
                                Mumbai Pulse
                            </span>
                        </Link>
                    </div>

                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={cn(
                                        "px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-2",
                                        pathname === item.href
                                            ? "bg-primary/10 text-primary border border-primary/20"
                                            : "text-muted-foreground hover:bg-secondary/50 hover:text-foreground"
                                    )}
                                >
                                    {item.icon}
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-secondary/50 focus:outline-none"
                        >
                            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-background border-b border-border/50 overflow-hidden"
                    >
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className={cn(
                                        "block px-3 py-2 rounded-md text-base font-medium flex items-center gap-2",
                                        pathname === item.href
                                            ? "bg-primary/10 text-primary"
                                            : "text-muted-foreground hover:bg-secondary/50 hover:text-foreground"
                                    )}
                                >
                                    {item.icon}
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
