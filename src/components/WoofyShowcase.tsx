"use client";

import React from 'react';
import { motion } from 'framer-motion';
import WoofyHoverImage from './ui/woofy-hover-image';

const WoofyShowcase: React.FC = () => {
    return (
        <section className="py-24 bg-black relative overflow-hidden">
  
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <div className="max-w-5xl mx-auto px-6 sm:px-12 flex justify-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    className="w-full relative group"
                >
                    <div className="relative rounded-[3rem] overflow-hidden border border-white/5 p-3 bg-white/[0.02] backdrop-blur-3xl shadow-2xl">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/10 opacity-30 pointer-events-none" />
                        <WoofyHoverImage
                            src="/manthan-futuristic.png"
                            alt="Main Showcase"
                            width="100%"
                            height={700}
                            effectType="inversion"
                            maskRadius={0.4}
                            turbulenceIntensity={0.3}
                            className="rounded-[2.5rem]"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default WoofyShowcase;
