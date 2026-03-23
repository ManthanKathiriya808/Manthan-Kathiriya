"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Instagram, ArrowRight, Send, MessageCircle } from "lucide-react";
import { useForm, ValidationError } from '@formspree/react';
import dynamic from "next/dynamic";

const Globe = dynamic(() => import("@/components/ui/globe").then((mod) => mod.Globe));

export default function Contact() {
    const [state, handleSubmit] = useForm("xbdanpov");

    const socialLinks = [
        { name: "LinkedIn", url: "https://www.linkedin.com/in/manthan-kathiriya/", icon: <Linkedin size={22} />, color: "#0077b5" },
        { name: "GitHub", url: "https://github.com/ManthanKathiriya808", icon: <Github size={22} />, color: "#ffffff" },
        { name: "WhatsApp", url: "https://wa.me/918320576261", icon: <MessageCircle size={22} />, color: "#25d366" },
        { name: "Instagram", url: "https://www.instagram.com/manthan_kathiriya_9_9_9/", icon: <Instagram size={22} />, color: "#e4405f" },
        { name: "Email", url: "mailto:manthankathiriya808@gmail.com", icon: <Mail size={22} />, color: "#ea4335" },
    ];

    return (
        <footer id="contact" className="pt-20 md:pt-32 bg-background border-t border-white/5 relative overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-white/[0.02] rounded-full blur-[120px] -translate-y-1/2 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 sm:px-12 md:px-16 lg:px-24 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-16 lg:gap-24 items-start">

                    {/* Left Column Text & Socials */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col h-full justify-between"
                    >
                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <div className="h-[1px] w-8 bg-white/60" />
                                <h2 className="text-sm uppercase tracking-[0.2em] text-white/70 font-medium">Get In Touch</h2>
                            </div>

                            <h3 className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter leading-[1.1]">
                                Let&apos;s build <br className="hidden md:block" />
                                <span className="text-white/50 italic">something extraordinary.</span>
                            </h3>

                            <p className="text-xl text-white/80 mb-12 max-w-lg leading-relaxed font-light">
                                Currently open for full-time roles and high-impact collaborations. Whether you have an idea or just want to say hi, my inbox is always open.
                            </p>
                        </div>

                        {/* Horizontal Social Links */}
                        <div className="mt-8 lg:mt-auto">
                            <p className="text-sm text-white/70 uppercase tracking-widest mb-6 font-medium">Connect with me</p>
                            <div className="flex flex-wrap gap-4">
                                {socialLinks.map((link, i) => (
                                    <motion.a
                                        key={link.name}
                                        href={link.url}
                                        target="_blank"
                                        rel="noreferrer"
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.1 * i, duration: 0.5 }}
                                        aria-label={link.name}
                                        className="flex items-center gap-3 px-6 py-4 bg-white/5 border border-white/10 rounded-full hover:bg-white hover:text-black hover:border-white transition-all duration-300 group"
                                        style={{ borderColor: `${link.color}33`, backgroundColor: `${link.color}0D` }}
                                    >
                                        <span className="transition-colors group-hover:text-black" style={{ color: link.color }}>{link.icon}</span>

                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-[2.5rem] p-8 md:p-10 w-full relative group"
                    >
                        {/* Subtle inner glow for form container */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                        <form onSubmit={handleSubmit} className="flex flex-col gap-6 relative z-10">
                            <div className="space-y-2">
                                <label htmlFor="email" className="block text-sm font-medium text-white/60 ml-2">
                                    Your Email
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    name="email"
                                    required
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder-white/20 focus:outline-none focus:border-white/50 focus:bg-white/10 transition-all duration-300"
                                    placeholder="hello@example.com"
                                />
                                <ValidationError
                                    prefix="Email"
                                    field="email"
                                    errors={state.errors}
                                    className="text-red-400 text-sm mt-2 ml-2"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="block text-sm font-medium text-white/60 ml-2">
                                    Your Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows={6}
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder-white/20 focus:outline-none focus:border-white/50 focus:bg-white/10 transition-all duration-300 resize-none"
                                    placeholder="Tell me about your project or opportunity..."
                                />
                                <ValidationError
                                    prefix="Message"
                                    field="message"
                                    errors={state.errors}
                                    className="text-red-400 text-sm mt-2 ml-2"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={state.submitting}
                                className="w-full flex items-center justify-center gap-3 px-8 py-5 bg-white text-black rounded-2xl font-bold hover:bg-white/90 focus:scale-[0.98] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed mt-4 overflow-hidden relative group/btn"
                            >
                                <span className="relative z-10 flex items-center gap-2">
                                    {state.submitting ? 'Sending Message...' : 'Send Message'}
                                    {!state.submitting && <Send size={18} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />}
                                </span>
                            </button>

                            {state.succeeded && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="p-4 bg-green-500/10 border border-green-500/20 rounded-2xl mt-2 flex items-center justify-center gap-2 text-green-400"
                                >
                                    <span className="text-sm font-medium">Message sent successfully! I&apos;ll be in touch.</span>
                                </motion.div>
                            )}
                        </form>
                    </motion.div>
                </div>

                <div className="mt-16 pt-8 pb-0 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-6 relative z-10">
                    <p className="text-white/70 text-sm tracking-widest uppercase font-medium">
                        © 2026 MANTHAN KATHIRIYA
                    </p>
                </div>

                {/* Globe */}
                <div className="relative flex w-full max-w-4xl h-[300px] md:h-[400px] items-center justify-center overflow-hidden mx-auto px-4 md:px-40">
                    <Globe className="top-0 md:top-10 scale-[1.2] md:scale-100" />
                    <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.5),transparent)]" />
                </div>
            </div>
        </footer>
    );
}
