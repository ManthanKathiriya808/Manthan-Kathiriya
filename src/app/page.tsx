"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import ScrollyCanvas from "@/components/ScrollyCanvas";
import TextReveal from "@/components/TextReveal";

import dynamic from "next/dynamic";
import type { SliderItemData } from "@/components/ui/ThreeDSlider";

const About = dynamic(() => import("@/components/About"));
const Projects = dynamic(() => import("@/components/Projects"));
const Experience = dynamic(() => import("@/components/Experience"));
const Contact = dynamic(() => import("@/components/Contact"));
const TechStackBeams = dynamic(() => import("@/components/TechStackBeams"));
const WoofyShowcase = dynamic(() => import("@/components/WoofyShowcase"));
const ThreeDSlider = dynamic(() => import("@/components/ui/ThreeDSlider"));


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

  const sliderItems: SliderItemData[] = [
    { title: "CREATIVE VISION", num: "01", imageUrl: "/images/portrait/WhatsApp Image 2026-03-07 at 15.56.26.jpeg" },
    { title: "TECHNICAL MASTERY", num: "02", imageUrl: "/images/portrait/WhatsApp Image 2025-12-28 at 21.09.05.jpeg" },
    { title: "YUKTI INNOVATORS", num: "03", imageUrl: "/images/portrait/Screenshot 2026-03-07 at 4.01.41 PM.png" },
    { title: "ENERGY CHALLENGE", num: "04", imageUrl: "/images/portrait/my.jpeg" },
    { title: "INNOVATION LEAD", num: "05", imageUrl: "/images/portrait/img2.jpeg" },
    { title: "INNOVATION LEAD", num: "06", imageUrl: "/images/portrait/img1.jpeg" },
    { title: "INNOVATION LEAD", num: "07", imageUrl: "/images/portrait/img3.jpeg" },
    { title: "INNOVATION LEAD", num: "08", imageUrl: "/images/portrait/img5.jpeg" },
    { title: "INNOVATION LEAD", num: "09", imageUrl: "/images/portrait/img4.jpeg" },
  ];

  const sliderContainerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sliderContainerRef,
    offset: ["start start", "end end"]
  });

  // Map 0-1 scroll progress to 0-100 slider progress
  const sliderProgress = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const [sliderVal, setSliderVal] = useState(0);

  useEffect(() => {
    return sliderProgress.on("change", (latest) => {
      setSliderVal(latest);
    });
  }, [sliderProgress]);

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
          <h1>
            <TextReveal
              highlight="KATHIRIYA"
              className="text-5xl md:text-8xl font-black tracking-tighter text-white mb-4 uppercase flex justify-center"
            >
              MANTHAN KATHIRIYA
            </TextReveal>
          </h1>
          <h2 className="text-xl md:text-3xl font-medium text-white max-w-2xl mx-auto leading-relaxed tracking-wide mb-4">
            React Developer & Frontend Engineer
          </h2>
          <p className="text-lg md:text-2xl font-light text-white/60 max-w-2xl mx-auto leading-relaxed tracking-wide">
            Frontend-focused <span className="text-white">MERN Stack Developer</span>.
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

      <TechStackBeams />
      <Projects />
      {/* Featured Showcase Section - Scroll Pinned */}
      <section ref={sliderContainerRef} className="relative h-[300vh] w-full bg-background/50">
        <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden">
          <div className="mb-8 text-center px-4">
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-white uppercase italic">Moments & Milestones</h2>
            <p className="text-white/40 text-sm mt-2 tracking-widest uppercase">Scroll to explore the 3D Interactive Gallery</p>
          </div>
          <div className="w-full h-[60vh] md:h-[70vh]">
            <ThreeDSlider items={sliderItems} scrollProgress={sliderVal} />
          </div>
        </div>
      </section>


      <Experience />
      <WoofyShowcase />
      <Contact />

    </main>
  );
}

