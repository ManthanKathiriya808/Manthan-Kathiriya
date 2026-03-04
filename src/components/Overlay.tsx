"use client";

import { motion, MotionValue, useTransform } from "framer-motion";

interface OverlayProps {
    scrollYProgress: MotionValue<number>;
}

export default function Overlay({ scrollYProgress }: OverlayProps) {
    // We perfectly align the text with the 4 distinctive head poses in the video sequence!

    // Section 1: 0% to 15% (Face straight)
    const opacity1 = useTransform(scrollYProgress, [0, 0.1, 0.15], [1, 1, 0]);
    const y1 = useTransform(scrollYProgress, [0, 0.15], [0, -100]);

    // Section 2: 20% to 40% (Face turned Right -> Text on Right)
    const opacity2 = useTransform(scrollYProgress, [0.2, 0.25, 0.35, 0.4], [0, 1, 1, 0]);
    const y2 = useTransform(scrollYProgress, [0.2, 0.25, 0.35, 0.4], [50, 0, 0, -50]);

    // Section 3: 45% to 65% (Face turned Left -> Text on Left)
    const opacity3 = useTransform(scrollYProgress, [0.45, 0.5, 0.6, 0.65], [0, 1, 1, 0]);
    const y3 = useTransform(scrollYProgress, [0.45, 0.5, 0.6, 0.65], [50, 0, 0, -50]);

    // Section 4: 70% to 95% (Face straight, intense -> Text bottom middle)
    const opacity4 = useTransform(scrollYProgress, [0.7, 0.75, 0.9, 0.95], [0, 1, 1, 0]);
    const y4 = useTransform(scrollYProgress, [0.7, 0.75, 0.9, 0.95], [50, 0, 0, -50]);

    // Down Indicator (Only visible at top)
    const opacityArrow = useTransform(scrollYProgress, [0, 0.05], [1, 0]);

    return (
        <div className="absolute inset-0 w-full h-full pointer-events-none flex flex-col justify-center items-center px-6 md:px-24 z-10">

            {/* Section 1: Straight */}
            <motion.div
                style={{ opacity: opacity1, y: y1 }}
                className="absolute text-center flex flex-col items-center justify-center w-full px-4"
            >
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter text-white mb-4 drop-shadow-lg">
                    Manthan Kathiriya
                </h1>
                <p className="text-base md:text-lg lg:text-xl text-white/70 uppercase tracking-[0.3em] drop-shadow-md">
                    Creative Developer
                </p>
            </motion.div>

            {/* Section 2: Looks Right! So Text belongs on the RIGHT */}
            <motion.div
                style={{ opacity: opacity2, y: y2 }}
                className="absolute w-full px-8 md:px-[10%] flex justify-end"
            >
                <div className="max-w-xl bg-black/10 md:bg-transparent backdrop-blur-md md:backdrop-blur-none p-8 md:p-0 rounded-2xl md:rounded-none border border-white/10 md:border-transparent shadow-2xl md:shadow-none text-right">
                    <h2 className="text-3xl md:text-5xl font-semibold text-white mb-4 leading-tight">
                        I build interactive <br /><span className="text-white/60">digital experiences.</span>
                    </h2>
                    <p className="text-white/80 text-lg md:text-xl leading-relaxed">
                        Transforming complex problems into seamless, performant web applications using modern tech stacks.
                    </p>
                </div>
            </motion.div>

            {/* Section 3: Looks Left! So Text belongs on the LEFT */}
            <motion.div
                style={{ opacity: opacity3, y: y3 }}
                className="absolute w-full px-8 md:px-[10%] flex justify-start"
            >
                <div className="max-w-xl text-left bg-black/10 md:bg-transparent backdrop-blur-md md:backdrop-blur-none p-8 md:p-0 rounded-2xl md:rounded-none border border-white/10 md:border-transparent shadow-2xl md:shadow-none">
                    <h2 className="text-3xl md:text-5xl font-semibold text-white mb-4 leading-tight">
                        Bridging design <span className="text-white/60">&amp;</span> engineering.
                    </h2>
                    <p className="text-white/80 text-lg md:text-xl leading-relaxed">
                        Frontend architect scaling AI platforms and interactive SaaS dashboards with pixel-perfect precision.
                    </p>
                </div>
            </motion.div>

            {/* Section 4: Looks Straight Ahead Again -> Text at Bottom Center */}
            <motion.div
                style={{ opacity: opacity4, y: y4 }}
                className="absolute bottom-24 w-full flex flex-col items-center justify-center px-8 md:px-[10%]"
            >
                <div className="max-w-xl text-center bg-black/10 md:bg-transparent backdrop-blur-md md:backdrop-blur-none p-6 md:p-0 rounded-2xl md:rounded-none border border-white/10 md:border-transparent shadow-2xl md:shadow-none">
                    <h2 className="text-2xl md:text-4xl font-semibold text-white mb-2 leading-tight">
                        Ready to explore?
                    </h2>
                    <p className="text-white/80 text-base md:text-lg leading-relaxed">
                        Scroll down to view my selected work and case studies.
                    </p>
                </div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                style={{ opacity: opacityArrow }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="text-white/50 text-xs tracking-widest uppercase drop-shadow-md">Scroll</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent"></div>
            </motion.div>

        </div>
    );
}
