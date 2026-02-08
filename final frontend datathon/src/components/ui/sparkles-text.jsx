"use client";

import { useEffect, useMemo } from "react";
import { motion, useAnimation } from "framer-motion";
import { cn } from "@/lib/utils";

export const SparklesText = ({
    text,
    className,
    sparklesCount = 10,
    colors = { first: "#A07CFE", second: "#FE8FB5" },
}) => {
    const controls = useAnimation();

    // Deterministic sparkles to avoid SSR/client mismatches
    const sparkles = useMemo(() => {
        let seed = 42;
        const rng = () => {
            seed = (seed * 1664525 + 1013904223) % 4294967296;
            return seed / 4294967296;
        };
        return Array.from({ length: sparklesCount }).map((_, i) => ({
            color: i % 2 === 0 ? colors.first : colors.second,
            top: `${rng() * 100}%`,
            left: `${rng() * 100}%`,
            delay: rng() * 2,
        }));
    }, [sparklesCount, colors]);

    useEffect(() => {
        controls.start({
            opacity: [0, 1, 0],
            scale: [0.5, 1, 0.5],
            transition: {
                duration: 2,
                repeat: Infinity,
                repeatDelay: Math.random() * 2,
            },
        });
    }, [controls]);

    return (
        <div className={cn("relative inline-block", className)}>
            <span className="relative z-10 font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-gradient-x">
                {text}
            </span>
            {sparkles.map((sparkle, i) => (
                <Sparkle
                    key={i}
                    color={sparkle.color}
                    delay={sparkle.delay}
                    top={sparkle.top}
                    left={sparkle.left}
                />
            ))}
        </div>
    );
};

const Sparkle = ({ color, delay, top, left }) => {
    return (
        <motion.svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            style={{
                position: "absolute",
                top,
                left,
                zIndex: 0,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
                rotate: [0, 180],
            }}
            transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: delay,
                ease: "easeInOut",
            }}
        >
            <path
                d="M10 0L12.5 7.5L20 10L12.5 12.5L10 20L7.5 12.5L0 10L7.5 7.5L10 0Z"
                fill={color}
            />
        </motion.svg>
    );
};
