"use client";

import { motion } from "framer-motion";
import WaterRippleImage from "./WaterRippleImage";
import TextReveal from "./TextReveal";

export default function FeatureSection() {
    return (
        <section className="py-24 md:py-48 px-6 sm:px-12 md:px-16 lg:px-24 bg-background overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 md:gap-24">
                {/* Text Content */}
                <div className="flex-1 flex flex-col gap-8">
                    <div className="space-y-4">
                        <motion.span
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="text-primary text-sm font-black uppercase tracking-[0.3em]"
                        >
                            Visionary Engineering
                        </motion.span>
                        <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white uppercase italic leading-[0.9]">
                            DESIGNING THE <br />
                            <span className="text-white/40">CONNECTIVE</span> <br />
                            TISSUE<span className="text-primary">.</span>
                        </h2>
                    </div>

                    <p className="text-lg md:text-xl text-white/50 font-light leading-relaxed max-w-xl">
                        I bridge the gap between high-level architectural design and terminal-level engineering. Every pixel is calculated, every interaction is intentional. My work focuses on building the future of AI-powered platforms with a relentless pursuit of performance and aesthetic excellence.
                    </p>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="w-fit pt-4"
                    >
                        <button className="px-10 py-5 bg-white text-black hover:bg-primary hover:text-white rounded-full font-black text-sm uppercase tracking-widest transition-all duration-500 transform hover:scale-105 active:scale-95">
                            Dive Deeper
                        </button>
                    </motion.div>
                </div>

                {/* Creative Visual with Water Effect */}
                <div className="flex-1 w-full aspect-square md:aspect-video lg:aspect-square relative rounded-[2rem] overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)]">
                    <WaterRippleImage src="/assets/cyberpunk_portrait.png" />
                </div>
            </div>
        </section>
    );
}
