"use client";

import { motion } from "framer-motion";
import React from "react";

interface TextRevealProps {
    text?: string;
    children?: React.ReactNode;
    className?: string;
    delay?: number;
    highlight?: string | string[];
}

export default function TextReveal({ text, children, className = "", delay = 0, highlight = "" }: TextRevealProps) {
    // Determine the text content to reveal
    const content = text || (typeof children === "string" ? children : "");
    const words = content ? content.split(" ") : [];

    const highlightArray = Array.isArray(highlight) ? highlight : [highlight];

    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.12, delayChildren: 0.04 * i + delay },
        }),
    };

    const child = {
        visible: {
            opacity: 1,
            y: 0,
            rotateX: 0,
            transition: {
                type: "spring" as const,
                damping: 12,
                stiffness: 100,
            },
        },
        hidden: {
            opacity: 0,
            y: 20,
            rotateX: 90,
        },
    };

    if (!content && children) {
        return <div className={className}>{children}</div>;
    }

    return (
        <motion.h3
            style={{ overflow: "hidden", display: "flex", flexWrap: "wrap", justifyContent: "inherit" }}
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className={className}
        >
            {words.map((word, index) => {
                const isHighlighted = highlightArray.some(h =>
                    word.toLowerCase().includes(h.toLowerCase())
                );

                return (
                    <span key={index} style={{ overflow: "hidden", display: "inline-block", marginRight: "0.25em" }}>
                        <motion.span
                            variants={child}
                            style={{ display: "inline-block" }}
                            className={isHighlighted ? "text-primary" : ""}
                        >
                            {word}
                        </motion.span>
                    </span>
                );
            })}
        </motion.h3>
    );
}
