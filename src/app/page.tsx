"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollyCanvas from "@/components/ScrollyCanvas";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import TextReveal from "@/components/TextReveal";
import Magnetic from "@/components/Magnetic";
import ScrollVelocity from "@/components/ScrollVelocity";
import FeatureSection from "@/components/FeatureSection";
import TechStackBeams from "@/components/TechStackBeams";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  // Prevent scrolling while loading
  useEffect(() => {
    if (!isLoaded) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isLoaded]);

  return (
    <main className="relative min-h-screen bg-background selection:bg-white/30 selection:text-white">
      {/* Global Loading Overlay */}
      <AnimatePresence mode="wait">
        {!isLoaded && (
          <motion.div
            key="loader"
            exit={{ opacity: 0, filter: "blur(10px)" }}
            transition={{ duration: 1 }}
            className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-background"
          >
            <div className="banter-loader">
              <div className="banter-loader__box"></div>
              <div className="banter-loader__box"></div>
              <div className="banter-loader__box"></div>
              <div className="banter-loader__box"></div>
              <div className="banter-loader__box"></div>
              <div className="banter-loader__box"></div>
              <div className="banter-loader__box"></div>
              <div className="banter-loader__box"></div>
              <div className="banter-loader__box"></div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <ScrollyCanvas onLoaded={() => setIsLoaded(true)} />

      {/* Hero Content Overlay */}
      <section id="home" className="relative h-screen flex flex-col items-center justify-center text-center px-6 sm:px-12 md:px-16 lg:px-24 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
          className="z-10"
        >
          <TextReveal
            highlight="KATHIRIYA"
            className="text-5xl md:text-8xl font-black tracking-tighter text-white mb-4 uppercase flex justify-center"
          >
            MANTHAN KATHIRIYA
          </TextReveal>
          <p className="text-lg md:text-2xl font-light text-white/60 max-w-2xl mx-auto leading-relaxed tracking-wide">
            Frontend-focused <span className="text-white">MERN Stack Developer</span> & Founder of MP Dynamic Automation.
            Building scalable AI-powered platforms & production-level UI architecture.
          </p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={isLoaded ? { opacity: 1 } : {}}
            transition={{ delay: 1.5 }}
            className="mt-12 flex items-center justify-center gap-6 pointer-events-auto"
          >
            <div className="w-1 h-32 bg-gradient-to-b from-white to-transparent" />
          </motion.div>
        </motion.div>
      </section>

      <About />
      <ScrollVelocity />
      <TechStackBeams />

      <Projects />
      <Experience />
      <Contact />
    </main >
  );
}

