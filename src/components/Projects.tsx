import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Perspective from "./Perspective";

export default function Projects() {
    const projects = [
        {
            title: "RFP AI",
            role: "Frontend Developer",
            desc: "AI-Powered Request for Proposal Platform. Developed complete frontend for credit-based SaaS with role-based panels.",
            tech: ["React.js", "TypeScript", "React Query", "Tailwind CSS"],
            link: "#"
        },
        {
            title: "RAGSuite",
            role: "Frontend Developer",
            desc: "AI Search & Chat Platform (RAG-based). Built Admin Dashboard and Embedded Search/Chat widget UI.",
            tech: ["React.js", "TypeScript", "Tailwind CSS"],
            link: "#"
        },
        {
            title: "BookBazar",
            role: "Full Stack",
            desc: "Dynamic e-commerce website with product browsing, cart, and checkout features. Integrated user authentication.",
            tech: ["JavaScript", "CSS3", "Bootstrap", "UI Verse"],
            link: "https://github.com/ManthanKathiriya808"
        },
        {
            title: "Smart Dustbin",
            role: "IoT Developer",
            desc: "Waste Monitoring System. Real-time dashboard for bin fill levels, gas, temp & humidity using sensors.",
            tech: ["React", "Flask", "Arduino", "Sensors"],
            link: "https://github.com/ManthanKathiriya808"
        },
        {
            title: "Chamunda Nursery",
            role: "Freelance",
            desc: "Complete e-commerce store built with Shopify and a modern business landing page for a local plant nursery.",
            tech: ["Shopify", "ShipRocket"],
            link: "https://www.chamundanursery.in/"
        },
        {
            title: "Shree Ram Engineering",
            role: "Freelance",
            desc: "Corporate website showcasing engineering services and professional portfolio.",
            tech: ["React", "Vite", "TailwindCSS"],
            link: "https://shree-ram-engineering-fp45.vercel.app/"
        }
    ];

    return (
        <section id="projects" className="relative z-20 bg-background w-full min-h-screen py-16 md:py-24 overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[800px] h-[300px] sm:h-[800px] bg-primary/5 blur-[100px] sm:blur-[120px] rounded-full -z-10" />

            <div className="max-w-7xl mx-auto px-6 sm:px-12 md:px-16 lg:px-24">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                    className="mb-32"
                >
                    <h2 className="text-primary font-mono text-[10px] sm:text-xs uppercase tracking-[0.6em] mb-6 opacity-70">Selected Works</h2>
                    <h3 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-black tracking-[-0.05em] uppercase text-white mb-10">
                        Built to <span className="text-white/10">Scale.</span>
                    </h3>
                    <p className="text-white/40 text-lg sm:text-xl lg:text-2xl max-w-3xl leading-relaxed font-light">
                        A curation of high-performance architectures and interactive digital experiences.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((p, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                        >
                            <Perspective className="h-full">
                                <div
                                    className="group relative overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] bg-white/[0.03] border border-white/[0.08] p-6 sm:p-8 hover:bg-white/[0.05] transition-all duration-500 flex flex-col h-full"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                    <div className="relative z-10 flex-1 flex flex-col">
                                        <div className="flex justify-between items-start mb-10">
                                            <div>
                                                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 group-hover:text-primary transition-colors duration-300">{p.title}</h3>
                                                <p className="text-xs font-mono text-white/30 uppercase tracking-widest">{p.role}</p>
                                            </div>
                                            <a href={p.link} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white/40 hover:text-white hover:bg-primary transition-all duration-300">
                                                {p.link.includes('github') ? <Github className="w-5 h-5" /> : <ExternalLink className="w-5 h-5" />}
                                            </a>
                                        </div>

                                        <p className="text-white/50 text-base leading-relaxed mb-10 flex-1">
                                            {p.desc}
                                        </p>

                                        <div className="flex flex-wrap gap-2 mt-auto">
                                            {p.tech.map((t, idx) => (
                                                <span key={idx} className="px-4 py-1.5 text-xs font-medium text-white/70 bg-white/5 rounded-full border border-white/10 group-hover:border-primary/30 transition-colors">
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </Perspective>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
