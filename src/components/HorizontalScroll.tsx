"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import WaterRippleImage from "./ui/WaterRippleImage";
import { cn } from "@/lib/utils";

const visions = [
    {
        id: 1,
        title: "Philosophy",
        description: "Designing the connective tissue between innovative design and terminal-level engineering.",
        category: "01",
        image: "/assets/philosophy.png",
    },
    {
        id: 2,
        title: "Architecture",
        description: "Building scalable AI-powered platforms & production-level UI infrastructure.",
        category: "02",
        image: "/assets/architecture.png",
    },
    {
        id: 3,
        title: "Scalability",
        description: "High-stakes UI/UX infrastructure built to handle future demands.",
        category: "03",
        image: "/assets/scalable.png",
    },
    {
        id: 4,
        title: "Performance",
        description: "Relentless focus on performance and maintainability at every scale.",
        category: "04",
        image: "/assets/performance.png",
    },
];

export default function HorizontalScroll() {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    // Provide a smooth horizontal translation over 400vh of vertical scroll
    const x = useTransform(scrollYProgress, [0, 1], ["0%", `-${(visions.length - 1) * 100}%`]);

    return (
        // Restored to 400vh to give each of the 4 items 100vh of scroll room (smooth speed)
        <section ref={targetRef} className="relative h-[400vh] bg-background">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                <motion.div style={{ x }} className="flex h-full">
                    {visions.map((vision, index) => {
                        const isEven = index % 2 === 0;
                        return (
                            <div
                                key={vision.id}
                                className={cn(
                                    "relative h-screen w-screen flex flex-col items-center justify-center py-12 px-6 sm:px-12 md:px-24 gap-12 md:gap-20",
                                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                                )}
                            >
                                {/* Image Side - Captures hover correctly with z-20 */}
                                <div className="w-full md:w-[45%] h-[40vh] md:h-[70vh] relative group z-20 border border-white/5 shadow-2xl shadow-black/40">
                                    <WaterRippleImage
                                        src={vision.image}
                                        alt={vision.title}
                                        className="w-full h-full"
                                    />
                                </div>

                                {/* Content Side - Balanced, professional typography */}
                                <div className={cn(
                                    "w-full md:w-[40%] flex flex-col justify-center z-10",
                                    isEven ? "text-left" : "text-left md:text-right md:items-end"
                                )}>
                                    <motion.span
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 0.4, y: 0 }}
                                        className="text-primary font-mono text-[10px] md:text-xs uppercase tracking-[0.5em] mb-4"
                                    >
                                        / {vision.category}
                                    </motion.span>
                                    <h3 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter text-white uppercase leading-[0.9] mb-6">
                                        {vision.title}
                                    </h3>
                                    <p className="text-base md:text-lg text-white/40 font-light leading-relaxed max-w-md">
                                        {vision.description}
                                    </p>

                                    <div className={cn(
                                        "mt-8 w-16 h-[1px] opacity-20",
                                        isEven ? "bg-gradient-to-r from-primary to-transparent" : "bg-gradient-to-l from-primary to-transparent"
                                    )} />
                                </div>
                            </div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
