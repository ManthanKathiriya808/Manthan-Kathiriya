"use client";

import React, { forwardRef, useRef } from "react";
import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/magicui/animated-beam";
import {
    SiReact,
    SiNodedotjs,
    SiMongodb,
    SiNextdotjs,
    SiTailwindcss,
    SiFramer,
    SiJavascript,
    SiTypescript,
    SiOpenai
} from "react-icons/si";

const Circle = forwardRef<
    HTMLDivElement,
    { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
    return (
        <div
            ref={ref}
            className={cn(
                "z-10 flex size-12 items-center justify-center rounded-full border-2 bg-white/5 border-white/10 p-3 shadow-[0_0_20px_-12px_rgba(255,255,255,0.8)] backdrop-blur-md",
                className
            )}
        >
            {children}
        </div>
    );
});

Circle.displayName = "Circle";

export default function TechStackBeams() {
    const containerRef = useRef<HTMLDivElement>(null);
    const reactRef = useRef<HTMLDivElement>(null);
    const nodeRef = useRef<HTMLDivElement>(null);
    const mongoRef = useRef<HTMLDivElement>(null);
    const nextRef = useRef<HTMLDivElement>(null);
    const centerRef = useRef<HTMLDivElement>(null);
    const tailwindRef = useRef<HTMLDivElement>(null);
    const framerRef = useRef<HTMLDivElement>(null);
    const tsRef = useRef<HTMLDivElement>(null);

    return (
        <section className="py-24 relative overflow-hidden bg-background">
            <div className="max-w-7xl mx-auto px-6 text-center mb-16">
                <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white uppercase italic">
                    The Ecosystem<span className="text-primary">.</span>
                </h2>
                <p className="mt-4 text-white/50 max-w-2xl mx-auto text-lg">
                    Building with a modern, high-performance stack centered around scalability and intelligence.
                </p>
            </div>

            <div
                className="relative flex h-[500px] w-full items-center justify-center overflow-hidden p-10 bg-transparent"
                ref={containerRef}
            >
                <div className="flex size-full max-h-[400px] max-w-4xl flex-col items-stretch justify-between gap-10">
                    <div className="flex flex-row items-center justify-between">
                        <Circle ref={reactRef}>
                            <SiReact className="w-full h-full text-[#61DAFB]" />
                        </Circle>
                        <Circle ref={nextRef}>
                            <SiNextdotjs className="w-full h-full text-white" />
                        </Circle>
                    </div>
                    <div className="flex flex-row items-center justify-between">
                        <Circle ref={mongoRef}>
                            <SiMongodb className="w-full h-full text-[#47A248]" />
                        </Circle>
                        <Circle ref={centerRef} className="size-24 bg-primary/10 border-primary/30">
                            <SiOpenai className="size-12 text-primary" />
                        </Circle>
                        <Circle ref={nodeRef}>
                            <SiNodedotjs className="w-full h-full text-[#339933]" />
                        </Circle>
                    </div>
                    <div className="flex flex-row items-center justify-between">
                        <Circle ref={tsRef}>
                            <SiTypescript className="w-full h-full text-[#3178C6]" />
                        </Circle>
                        <Circle ref={framerRef}>
                            <SiFramer className="w-full h-full text-white" />
                        </Circle>
                    </div>
                </div>

                <AnimatedBeam
                    containerRef={containerRef}
                    fromRef={reactRef}
                    toRef={centerRef}
                    curvature={-75}
                    endYOffset={-10}
                    gradientStartColor="#61DAFB"
                    gradientStopColor="#61DAFB"
                />
                <AnimatedBeam
                    containerRef={containerRef}
                    fromRef={nextRef}
                    toRef={centerRef}
                    curvature={-75}
                    endYOffset={-10}
                    reverse
                    gradientStartColor="#ffffff"
                    gradientStopColor="#ffffff"
                />
                <AnimatedBeam
                    containerRef={containerRef}
                    fromRef={mongoRef}
                    toRef={centerRef}
                    gradientStartColor="#47A248"
                    gradientStopColor="#47A248"
                />
                <AnimatedBeam
                    containerRef={containerRef}
                    fromRef={nodeRef}
                    toRef={centerRef}
                    reverse
                    gradientStartColor="#339933"
                    gradientStopColor="#339933"
                />
                <AnimatedBeam
                    containerRef={containerRef}
                    fromRef={tsRef}
                    toRef={centerRef}
                    curvature={75}
                    endYOffset={10}
                    gradientStartColor="#3178C6"
                    gradientStopColor="#3178C6"
                />
                <AnimatedBeam
                    containerRef={containerRef}
                    fromRef={framerRef}
                    toRef={centerRef}
                    curvature={75}
                    endYOffset={10}
                    reverse
                    gradientStartColor="#ffffff"
                    gradientStopColor="#ffffff"
                />
            </div>
        </section>
    );
}
