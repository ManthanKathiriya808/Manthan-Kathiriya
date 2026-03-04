"use client";

import { motion } from "framer-motion";

const experiences = [
    {
        company: "NITSAN Technologies",
        role: "Junior Frontend Developer",
        period: "!8 August 2025. - Present",
        highlights: [
            "Built production-ready React applications for AI-powered SaaS platforms.",
            "Developed multi-role dashboards (Admin, Customer, Collaborator) with protected routing.",
            "Integrated REST APIs using React Query for optimized server-state management.",
            "Collaborated with backend teams (Python/FastAPI, Node.js) for API integrations.",
        ],
    },
    {
        company: "MP Dynamic Automation",
        role: "Founder",
        period: "2025 – Present",
        highlights: [
            "Founded a dynamic automation startup focused on innovative solutions.",
            "Leading technical strategy and client acquisitions.",
        ],
    },
    {
        company: "Smart India Hackathon",
        role: "Team Leader",
        period: "2023 – 2025",
        highlights: [
            "Led technical teams in national level hackathons.",
            "Coordinated project workflows and rapid prototyping.",
        ],
    },
];

export default function Experience() {
    return (
        <section id="experience" className="py-16 md:py-24 bg-background relative overflow-hidden">
            {/* Background Decorative Element */}
            <div className="absolute top-0 right-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-primary/5 blur-[100px] sm:blur-[120px] rounded-full -z-10" />
            <div className="absolute bottom-0 left-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-secondary/5 blur-[100px] sm:blur-[120px] rounded-full -z-10" />

            <div className="max-w-5xl mx-auto px-6 sm:px-12 md:px-16 lg:px-24">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                    className="text-center mb-20 md:mb-32"
                >
                    <h2 className="text-primary font-mono text-[10px] sm:text-xs uppercase tracking-[0.6em] mb-6 opacity-70">The Professional Arc</h2>
                    <h3 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-black tracking-[-0.05em] uppercase">
                        Exp<span className="text-white/10">erience.</span>
                    </h3>
                </motion.div>

                <div className="relative">
                    {/* Animated Timeline Line - Polished with gradient and glow */}
                    <motion.div
                        initial={{ height: 0 }}
                        whileInView={{ height: "100%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 2, ease: "circOut" }}
                        className="absolute left-[17px] top-4 w-[1px] bg-gradient-to-b from-primary via-secondary to-transparent shadow-[0_0_15px_rgba(139,92,246,0.3)]"
                    />

                    <div className="space-y-24">
                        {experiences.map((exp, i) => (
                            <motion.div
                                key={exp.company + i}
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, delay: i * 0.2, ease: "easeOut" }}
                                className="relative pl-12 sm:pl-24 group"
                            >
                                {/* Timeline Dot - Holographic Effect */}
                                <div className="absolute left-[1px] sm:left-[2px] top-2 w-[32px] h-[32px] rounded-full bg-background border border-white/10 flex items-center justify-center z-10 transition-all duration-700 group-hover:scale-125 group-hover:border-primary">
                                    <div className="w-1.5 h-1.5 rounded-full bg-white group-hover:bg-primary group-hover:shadow-[0_0_10px_rgba(139,92,246,1)] transition-all duration-500" />
                                    <div className="absolute inset-0 rounded-full bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md -z-10" />
                                </div>

                                <div className="bg-white/[0.01] border border-white/[0.04] backdrop-blur-3xl p-8 sm:p-12 lg:p-16 rounded-[2rem] sm:rounded-[3rem] hover:bg-white/[0.02] transition-all duration-700 md:group-hover:translate-x-4 group-hover:border-white/10">
                                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 md:gap-8 mb-8 md:mb-12">
                                        <div>
                                            <h4 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4 leading-tight tracking-tighter uppercase">{exp.role}</h4>
                                            <div className="flex flex-wrap items-center gap-3 md:gap-4">
                                                <span className="text-base md:text-xl text-primary font-mono tracking-widest">{exp.company}</span>
                                                <span className="hidden sm:block w-1.5 h-1.5 rounded-full bg-white/10" />
                                                <span className="text-white/20 font-mono text-[10px] sm:text-sm tracking-widest uppercase">{exp.period}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <ul className="space-y-6">
                                        {exp.highlights.map((item, idx) => (
                                            <li key={idx} className="text-white/40 flex items-start gap-6 text-lg md:text-xl leading-relaxed font-light">
                                                <span className="mt-3 w-2 h-2 rounded-full bg-primary/20 flex-shrink-0 group-hover:bg-primary/60 transition-colors" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
