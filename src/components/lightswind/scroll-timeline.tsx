"use client";

import React, { useState, useEffect, useRef } from "react";
import {
    motion,
    MotionValue,
    useScroll,
    useTransform,
    useSpring,
} from "framer-motion";
import { cn } from "@/lib/utils";

import { Calendar, ExternalLink, Linkedin } from "lucide-react";

export interface TimelineEvent {
    id?: string;
    year: string;
    title: string;
    subtitle?: string;
    description: string;
    link?: string;
    highlights?: string[];
    icon?: React.ReactNode;
    color?: string;
}

export interface ScrollTimelineProps {
    events: TimelineEvent[];
    title?: string;
    subtitle?: string;
    animationOrder?: "sequential" | "staggered" | "simultaneous";
    cardAlignment?: "alternating" | "left" | "right";
    lineColor?: string;
    activeColor?: string;
    progressIndicator?: boolean;
    cardVariant?: "default" | "elevated" | "outlined" | "filled";
    cardEffect?: "none" | "glow" | "shadow" | "bounce";
    parallaxIntensity?: number;
    progressLineWidth?: number;
    progressLineCap?: "round" | "square";
    dateFormat?: "text" | "badge";
    className?: string;
    revealAnimation?: "fade" | "slide" | "scale" | "flip" | "none";
    connectorStyle?: "dots" | "line" | "dashed";
    perspective?: boolean;
    darkMode?: boolean;
    smoothScroll?: boolean;
}

// Subcomponent to safely use hooks per item
const TimelineItem = ({
    event,
    index,
    activeIndex,
    getCardClasses,
    getCardVariants,
    cardAlignment,
    parallaxIntensity,
    smoothProgress,
    setTimelineRef,
}: {
    event: TimelineEvent;
    index: number;
    activeIndex: number;
    getCardClasses: (i: number) => string;
    getCardVariants: (i: number) => unknown;
    cardAlignment: string;
    parallaxIntensity: number;
    smoothProgress: MotionValue<number>;
    setTimelineRef: (index: number, el: HTMLDivElement | null) => void;
}) => {
    const yOffset = useTransform(
        smoothProgress,
        [0, 1],
        [parallaxIntensity * 50, -parallaxIntensity * 50],
        { clamp: true }
    );

    return (
        <div
            ref={(el) => setTimelineRef(index, el)}
            className={cn(
                "relative flex items-center mb-12 lg:mb-20 py-4",
                "flex-col lg:flex-row",
                cardAlignment === "alternating"
                    ? index % 2 === 0
                        ? "lg:justify-start"
                        : "lg:flex-row-reverse lg:justify-start"
                    : cardAlignment === "left"
                        ? "lg:justify-start"
                        : "lg:flex-row-reverse lg:justify-start"
            )}
        >
            {/* Timeline Dot - Responsive Position */}
            <div
                className={cn(
                    "absolute top-1/2 transform -translate-y-1/2 z-30",
                    "left-[17px] lg:left-1/2 -translate-x-1/2"
                )}
            >
                <motion.div
                    className={cn(
                        "w-5 h-5 lg:w-6 lg:h-6 rounded-full border-4 bg-background flex items-center justify-center",
                        index <= activeIndex
                            ? "border-primary"
                            : "border bg-card"
                    )}
                    animate={
                        index <= activeIndex
                            ? {
                                scale: [1, 1.3, 1],
                                boxShadow: [
                                    "0 0 0px rgba(99,102,241,0)",
                                    "0 0 12px rgba(99,102,241,0.6)",
                                    "0 0 0px rgba(99,102,241,0)",
                                ],
                            }
                            : {}
                    }
                    transition={{
                        duration: 0.8,
                        repeat: Infinity,
                        repeatDelay: 4,
                        ease: "easeInOut",
                    }}
                />
            </div>
            <motion.div
                className={cn(
                    getCardClasses(index),
                    "pl-12 lg:pl-0 mt-4 lg:mt-0"
                )}
                variants={getCardVariants(index)}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: false, margin: "-100px" }}
                style={parallaxIntensity > 0 ? { y: yOffset } : undefined}
            >
                <div className="bg-white/[0.01] border border-white/[0.04] backdrop-blur-3xl p-6 sm:p-8 lg:p-16 rounded-[1.5rem] lg:rounded-[3rem] hover:bg-white/[0.02] transition-all duration-700 lg:group-hover:translate-x-4 group-hover:border-white/10">
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 lg:gap-8 mb-6 lg:mb-12">
                        <div>
                            <h4 className="text-2xl sm:text-3xl lg:text-5xl font-black text-white mb-2 lg:mb-4 leading-tight tracking-tighter uppercase">
                                {event.title}
                            </h4>
                            <div className="flex flex-wrap items-center gap-2 lg:gap-4">
                                <span className="text-sm lg:text-xl text-primary font-mono tracking-widest">{event.subtitle}</span>
                                <span className="hidden sm:block w-1 h-1 lg:w-1.5 lg:h-1.5 rounded-full bg-white/10" />
                                <span className="text-white font-mono text-[9px] lg:text-sm tracking-widest uppercase">{event.year}</span>
                                {event.link && (
                                    <motion.a
                                        href={event.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.1 }}
                                        className="text-[#0077B5] transition-colors flex items-center gap-1 ml-2"
                                        aria-label="LinkedIn Profile"
                                    >
                                        <Linkedin className="w-4 h-4 lg:w-5 lg:h-5" />
                                    </motion.a>
                                )}
                            </div>
                        </div>
                    </div>
                    {event.highlights ? (
                        <ul className="space-y-4 lg:space-y-6">
                            {event.highlights.map((item, idx) => (
                                <li key={idx} className="text-white/70 flex items-start gap-3 lg:gap-6 text-base lg:text-xl leading-relaxed font-light">
                                    <span className="mt-2 lg:mt-3 w-1.5 h-1.5 lg:w-2 lg:h-2 rounded-full bg-primary/20 flex-shrink-0 group-hover:bg-primary/60 transition-colors" />
                                    <span className="flex-1">{item}</span>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className="text-white/70 text-base lg:text-xl leading-relaxed font-light">
                            {event.description}
                        </p>
                    )}
                </div>
            </motion.div>
        </div>
    );
};

const DEFAULT_EVENTS: TimelineEvent[] = [
    {
        year: "2023",
        title: "Major Achievement",
        subtitle: "Organization Name",
        description:
            "Description of the achievement or milestone reached during this time period.",
    },
];

export const ScrollTimeline = ({
    events = DEFAULT_EVENTS,
    title = "Timeline",
    subtitle = "Scroll to explore the journey",
    animationOrder = "sequential",
    cardAlignment = "alternating",
    lineColor = "bg-primary/30",
    activeColor = "bg-primary",
    progressIndicator = true,
    cardVariant = "default",
    cardEffect = "none",
    parallaxIntensity = 0.2,
    progressLineWidth = 2,
    progressLineCap = "round",
    dateFormat = "badge",
    revealAnimation = "fade",
    className = "",
    connectorStyle = "line",
    perspective = false,
    darkMode = false,
    smoothScroll = true,
}: ScrollTimelineProps) => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(-1);
    const [isMobile, setIsMobile] = useState(false);
    const timelineRefs = useRef<(HTMLDivElement | null)[]>([]);
    const setTimelineRef = (index: number, el: HTMLDivElement | null) => {
        timelineRefs.current[index] = el;
    };

    const { scrollYProgress } = useScroll({
        target: scrollRef,
        offset: ["start 90%", "end 80%"],
    });

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    const progressHeight = useTransform(smoothProgress, [0, 1], ["0%", "100%"], { clamp: true });

    useEffect(() => {
        const unsubscribe = scrollYProgress.on("change", (v) => {
            const newIndex = Math.floor(v * events.length);
            if (
                newIndex !== activeIndex &&
                newIndex >= 0 &&
                newIndex < events.length
            ) {
                setActiveIndex(newIndex);
            }
        });
        return () => unsubscribe();
    }, [scrollYProgress, events.length, activeIndex]);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 1024);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    const getCardVariants = (index: number) => {
        const baseDelay =
            animationOrder === "simultaneous"
                ? 0
                : animationOrder === "staggered"
                    ? index * 0.2
                    : index * 0.3;

        const initialStates = {
            fade: { opacity: 0, y: 20 },
            slide: {
                x: isMobile
                    ? 0
                    : (cardAlignment === "left"
                        ? -50
                        : cardAlignment === "right"
                            ? 50
                            : index % 2 === 0
                                ? -50
                                : 50),
                y: isMobile ? 20 : 0,
                opacity: 0,
            },
            scale: { scale: 0.8, opacity: 0 },
            flip: { rotateY: 90, opacity: 0 },
            none: { opacity: 1 },
        };

        return {
            initial: initialStates[revealAnimation] || initialStates.fade,
            whileInView: {
                opacity: 1,
                y: 0,
                x: 0,
                scale: 1,
                rotateY: 0,
                transition: {
                    duration: 0.7,
                    delay: baseDelay,
                    ease: [0.25, 0.1, 0.25, 1.0] as [number, number, number, number],
                },
            },
            viewport: { once: false, margin: "-100px" },
        };
    };

    const getConnectorClasses = () => {
        const baseClasses = cn(
            "absolute left-[17px] lg:left-1/2 transform lg:-translate-x-1/2",
            lineColor
        );
        switch (connectorStyle) {
            case "dots":
                return cn(baseClasses, "w-1 rounded-full");
            case "dashed":
                return cn(
                    baseClasses,
                    `[mask-image:linear-gradient(to_bottom,black_33%,transparent_33%,transparent_66%,black_66%)] [mask-size:1px_12px]`
                );
            case "line":
            default:
                return cn(baseClasses);
        }
    };

    const getCardClasses = (index: number) => {
        const baseClasses = "relative z-30 transition-all duration-300 group";
        const alignmentClassesDesktop =
            cardAlignment === "alternating"
                ? index % 2 === 0
                    ? "lg:mr-[calc(50%+20px)]"
                    : "lg:ml-[calc(50%+20px)]"
                : cardAlignment === "left"
                    ? "lg:mr-auto lg:ml-0"
                    : "lg:ml-auto lg:mr-0";

        return cn(
            baseClasses,
            alignmentClassesDesktop,
            "w-full lg:w-[calc(50%-40px)]"
        );
    };

    return (
        <div
            ref={scrollRef}
            className={cn(
                "relative min-h-[50vh] w-full overflow-hidden",
                darkMode ? "bg-background text-foreground" : "",
                className
            )}
        >
            {(title || subtitle) && (
                <div className="text-center py-12 px-4">
                    {title && <h2 className="text-3xl md:text-5xl font-bold mb-4">{title}</h2>}
                    {subtitle && <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>}
                </div>
            )}

            <div className="relative max-w-7xl mx-auto px-4 pb-24">
                <div className="relative">
                    <div
                        className={cn(getConnectorClasses(), "h-full absolute top-0 z-10")}
                        style={{ width: `${progressLineWidth}px` }}
                    ></div>

                    {progressIndicator && (
                        <>
                            {/* Desktop Progress Line */}
                            <motion.div
                                className="hidden lg:block absolute top-0 z-10"
                                style={{
                                    height: progressHeight,
                                    width: progressLineWidth,
                                    left: "50%",
                                    transform: "translateX(-50%)",
                                    borderRadius: progressLineCap === "round" ? "9999px" : "0px",
                                    background: `linear-gradient(to bottom, #22d3ee, #6366f1, #a855f7)`,
                                    boxShadow: "0 0 15px rgba(99,102,241,0.5), 0 0 25px rgba(168,85,247,0.3)",
                                }}
                            />
                            {/* Mobile Progress Line */}
                            <motion.div
                                className="lg:hidden absolute top-0 z-10"
                                style={{
                                    height: progressHeight,
                                    width: progressLineWidth,
                                    left: "17px",
                                    transform: "translateX(-50%)",
                                    borderRadius: progressLineCap === "round" ? "9999px" : "0px",
                                    background: `linear-gradient(to bottom, #22d3ee, #6366f1, #a855f7)`,
                                    boxShadow: "0 0 15px rgba(99,102,241,0.5), 0 0 25px rgba(168,85,247,0.3)",
                                }}
                            />

                            {/* Traveling Glow - Mobile Position */}
                            <motion.div
                                className="lg:hidden absolute z-20"
                                style={{
                                    top: progressHeight,
                                    left: "17px",
                                    translateX: "-50%",
                                    translateY: "-50%",
                                }}
                            >
                                <motion.div
                                    className="w-4 h-4 rounded-full"
                                    style={{
                                        background: "radial-gradient(circle, rgba(168,85,247,0.8) 0%, rgba(99,102,241,0.5) 40%, rgba(34,211,238,0) 70%)",
                                        boxShadow: "0 0 10px 2px rgba(168, 85, 247, 0.6), 0 0 20px 5px rgba(99, 102, 241, 0.4)",
                                    }}
                                    animate={{ scale: [1, 1.2, 1] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                />
                            </motion.div>
                            {/* Traveling Glow - Desktop Position */}
                            <motion.div
                                className="hidden lg:block absolute z-20"
                                style={{
                                    top: progressHeight,
                                    left: "50%",
                                    translateX: "-50%",
                                    translateY: "-50%",
                                }}
                            >
                                <motion.div
                                    className="w-5 h-5 rounded-full"
                                    style={{
                                        background: "radial-gradient(circle, rgba(168,85,247,0.8) 0%, rgba(99,102,241,0.5) 40%, rgba(34,211,238,0) 70%)",
                                        boxShadow: "0 0 15px 4px rgba(168, 85, 247, 0.6), 0 0 25px 8px rgba(99, 102, 241, 0.4), 0 0 40px 15px rgba(34, 211, 238, 0.2)",
                                    }}
                                    animate={{ scale: [1, 1.3, 1] }}
                                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                />
                            </motion.div>
                        </>
                    )}

                    <div className="relative z-20">
                        {events.map((event, index) => (
                            <TimelineItem
                                key={event.id || index}
                                event={event}
                                index={index}
                                activeIndex={activeIndex}
                                getCardClasses={getCardClasses}
                                getCardVariants={getCardVariants}
                                cardAlignment={cardAlignment}
                                parallaxIntensity={parallaxIntensity}
                                smoothProgress={smoothProgress}
                                setTimelineRef={setTimelineRef}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};


