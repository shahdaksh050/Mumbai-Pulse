"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Server, Database, Brain, Globe, Cpu } from "lucide-react";

export function ArchitectureModal({ isOpen, onClose }) {
    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-background/80 backdrop-blur-sm"
                    />
                    <motion.div
                        initial={{ scale: 0.95, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.95, opacity: 0, y: 20 }}
                        className="relative w-full max-w-lg overflow-hidden rounded-xl border border-border bg-card p-6 shadow-2xl"
                    >
                        <div className="absolute top-4 right-4">
                            <button
                                onClick={onClose}
                                className="rounded-full p-2 hover:bg-muted transition-colors"
                            >
                                <X className="w-5 h-5 text-muted-foreground" />
                            </button>
                        </div>

                        <div className="mb-6">
                            <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">
                                System Architecture
                            </h2>
                            <p className="text-muted-foreground text-sm">
                                Technical stack powering Mumbai Pulse.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 gap-4">
                            <TechItem
                                icon={<Globe className="text-blue-500" />}
                                title="Frontend Layer"
                                desc="Next.js 14, React, Tailwind CSS, Framer Motion"
                            />
                            <TechItem
                                icon={<Server className="text-green-500" />}
                                title="API Gateway"
                                desc="Node.js, GraphQL, WebSocket Streaming"
                            />
                            <TechItem
                                icon={<Brain className="text-pink-500" />}
                                title="AI Engine"
                                desc="PyTorch, Graph Neural Networks (GNN), LSTM"
                            />
                            <TechItem
                                icon={<Database className="text-yellow-500" />}
                                title="Data Lake"
                                desc="PostgreSQL, Redis (Caching), Apache Kafka"
                            />
                            <TechItem
                                icon={<Cpu className="text-cyan-500" />}
                                title="Infrastructure"
                                desc="Docker, Kubernetes, AWS Lambda"
                            />
                        </div>

                        <div className="mt-6 flex justify-end">
                            <button
                                onClick={onClose}
                                className="px-4 py-2 text-sm font-medium hover:bg-muted rounded-lg transition-colors"
                            >
                                Close
                            </button>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}

function TechItem({ icon, title, desc }) {
    return (
        <div className="flex items-start gap-4 p-3 rounded-lg border border-border/50 bg-background/50 hover:bg-muted/50 transition-colors">
            <div className="p-2 rounded-md bg-secondary text-primary">
                {icon}
            </div>
            <div>
                <h3 className="font-semibold text-sm">{title}</h3>
                <p className="text-xs text-muted-foreground">{desc}</p>
            </div>
        </div>
    );
}
