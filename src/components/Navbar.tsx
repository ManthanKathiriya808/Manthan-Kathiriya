"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Atom } from "lucide-react";
import Magnetic from "./Magnetic";
import ScrollProgress from "./ScrollProgress";

const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("Home");

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            // Basic active section detection
            const sections = navLinks.map(link => link.href.substring(1));
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top >= -100 && rect.top <= 300) {
                        setActiveSection(navLinks.find(l => l.href === `#${section}`)?.name || "Home");
                        break;
                    }
                }
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${scrolled ? "py-4" : "py-8"}`}
        >
            <ScrollProgress />
            <div className="max-w-7xl mx-auto px-6 sm:px-12 md:px-16 lg:px-24 flex items-center justify-between">
                {/* Logo Section */}
                <Magnetic>
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="hidden md:flex items-center gap-2 group cursor-pointer"
                    >
                        <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center border border-primary/20 group-hover:bg-primary/30 transition-all duration-300">
                            <Atom className="text-primary w-6 h-6 group-hover:rotate-180 transition-transform duration-700" />
                        </div>
                        <span className="text-xl font-bold tracking-tight text-white  italic">
                            Manthan<span className="text-primary text-3xl ">.</span>dev
                        </span>
                    </motion.div>
                </Magnetic>

                {/* Desktop Nav - Pill Style */}
                <div className="hidden md:block">
                    <div className="bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl px-2 py-2 rounded-full flex items-center gap-1 shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
                        {navLinks.map((link) => (
                            <motion.a
                                key={link.name}
                                href={link.href}
                                onClick={() => setActiveSection(link.name)}
                                className={`relative px-6 py-2 text-sm font-medium transition-all duration-300 rounded-full h-full flex flex-col items-center justify-center ${activeSection === link.name ? "text-white" : "text-white/50 hover:text-white/80"}`}
                            >
                                {link.name}
                                {activeSection === link.name && (
                                    <motion.div
                                        layoutId="activeTab"
                                        className="absolute bottom-1 w-1 h-1 bg-white rounded-full"
                                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                    />
                                )}
                            </motion.a>
                        ))}
                    </div>
                </div>

                {/* Mobile Toggle */}
                <div className="md:hidden">
                    <Magnetic>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white"
                            aria-label="Toggle navigation menu"
                            aria-expanded={isOpen}
                        >
                            {isOpen ? <X size={20} /> : <Menu size={20} />}
                        </button>
                    </Magnetic>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 right-0 mt-4 mx-6 p-6 bg-background/90 backdrop-blur-2xl border border-white/10 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col gap-4 md:hidden"
                    >
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => {
                                    setIsOpen(false);
                                    setActiveSection(link.name);
                                }}
                                className={`text-lg font-medium tracking-tight px-4 py-2 rounded-xl transition-all ${activeSection === link.name ? "bg-white/10 text-white" : "text-white/50"}`}
                            >
                                {link.name}
                            </a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
