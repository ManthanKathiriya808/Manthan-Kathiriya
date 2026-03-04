"use client";

import { cn } from "@/lib/utils";
import {
    motion,
    useAnimationFrame,
    useMotionValue,
    useScroll,
    useSpring,
    useTransform,
    useVelocity,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface ScrollVelocityContainerProps {
    children: React.ReactNode;
    className?: string;
}

export const ScrollVelocityContainer = ({
    children,
    className,
}: ScrollVelocityContainerProps) => {
    return (
        <div
            className={cn(
                "relative flex w-full flex-col items-center justify-center overflow-hidden",
                className,
            )}
        >
            {children}
        </div>
    );
};

interface ScrollVelocityRowProps {
    children: React.ReactNode;
    baseVelocity?: number;
    direction?: 1 | -1;
    className?: string;
    scrollReactivity?: boolean;
}

export const ScrollVelocityRow = ({
    children,
    baseVelocity = 5,
    direction = 1,
    className,
    scrollReactivity = true,
}: ScrollVelocityRowProps) => {
    const baseX = useMotionValue(0);
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, {
        damping: 50,
        stiffness: 400,
    });
    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
        clamp: false,
    });

    const [repetition, setRepetition] = useState(1);
    const containerRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const calculateRepetitions = () => {
            if (containerRef.current && textRef.current) {
                const containerWidth = containerRef.current.offsetWidth;
                const textWidth = textRef.current.offsetWidth;
                const newRepetition = Math.ceil(containerWidth / textWidth) + 2;
                setRepetition(newRepetition);
            }
        };

        calculateRepetitions();
        window.addEventListener("resize", calculateRepetitions);
        return () => window.removeEventListener("resize", calculateRepetitions);
    }, [children]);

    // Use a custom wrap function that handles negative numbers correctly
    const wrap = (min: number, max: number, v: number) => {
        const rangeSize = max - min;
        return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
    };

    const x = useTransform(baseX, (v) => `${wrap(-100 / repetition, 0, v)}%`);

    const directionFactor = useRef<number>(1);
    useAnimationFrame((t, delta) => {
        let moveBy = direction * baseVelocity * (delta / 1000);

        if (scrollReactivity) {
            if (velocityFactor.get() < 0) {
                directionFactor.current = -1;
            } else if (velocityFactor.get() > 0) {
                directionFactor.current = 1;
            }

            moveBy += directionFactor.current * Math.abs(moveBy) * velocityFactor.get();
        }

        baseX.set(baseX.get() + moveBy);
    });

    return (
        <div
            ref={containerRef}
            className={cn("flex whitespace-nowrap overflow-hidden", className)}
        >
            <motion.div className="flex whitespace-nowrap" style={{ x }}>
                {Array.from({ length: repetition }).map((_, i) => (
                    <span key={i} ref={i === 0 ? textRef : null} className="flex">
                        {children}
                    </span>
                ))}
            </motion.div>
        </div>
    );
};
