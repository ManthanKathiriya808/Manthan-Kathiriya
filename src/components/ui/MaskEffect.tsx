"use client";

import React, { useRef, useState } from "react";
import { motion, useSpring, useMotionValue, useTransform } from "framer-motion";

interface MaskRevealProps {
    children: React.ReactNode;
    revealContent: React.ReactNode;
    maskSize?: number;
    className?: string;
    glowColor?: string;
    showCursor?: boolean;
}

export const MaskReveal = ({
    children,
    revealContent,
    maskSize = 150,
    className = "",
    glowColor = "rgba(34, 211, 238, 0.4)",
    showCursor = true
}: MaskRevealProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);

    // Motion values for cursor position
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth springs for the mask position
    const springConfig = { damping: 25, stiffness: 200 };
    const maskX = useSpring(mouseX, springConfig);
    const maskY = useSpring(mouseY, springConfig);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!containerRef.current) return;
        const { left, top } = containerRef.current.getBoundingClientRect();
        mouseX.set(e.clientX - left);
        mouseY.set(e.clientY - top);
    };

    // Create a transform for the mask-image
    const maskImage = useTransform(
        [maskX, maskY],
        ([x, y]) => `radial-gradient(${maskSize}px circle at ${x}px ${y}px, black 100%, transparent 100%)`
    );

    const glowBackground = useTransform(
        [maskX, maskY],
        ([x, y]) => `radial-gradient(circle ${maskSize}px at ${x}px ${y}px, transparent 95%, ${glowColor} 100%)`
    );

    return (
        <div
            ref={containerRef}
            className={`relative overflow-hidden ${className}`}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{ cursor: showCursor && isHovered ? "none" : "default" }}
        >
            {/* Base Layer */}
            <div className="relative z-0 w-full h-full">
                {children}
            </div>

            {/* Reveal Layer with Mask */}
            <motion.div
                className="absolute inset-0 z-10 pointer-events-none"
                style={{
                    WebkitMaskImage: maskImage,
                    maskImage: maskImage,
                    opacity: isHovered ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
            >
                {revealContent}

                {/* Glow Ring */}
                <motion.div
                    className="absolute inset-0 z-20"
                    style={{
                        background: glowBackground,
                    }}
                />
            </motion.div>

            {/* Custom Cursor / Spotlight Indicator */}
            {showCursor && (
                <motion.div
                    className="absolute z-30 pointer-events-none border border-cyan-400/50 rounded-full flex items-center justify-center backdrop-blur-[2px]"
                    style={{
                        width: maskSize * 2,
                        height: maskSize * 2,
                        left: maskX,
                        top: maskY,
                        x: "-50%",
                        y: "-50%",
                    }}
                    animate={{
                        scale: isHovered ? 1 : 0.8,
                        opacity: isHovered ? 1 : 0,
                    }}
                >
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full shadow-[0_0_15px_rgba(34,211,238,1)]" />
                </motion.div>
            )}
        </div>
    );
};
