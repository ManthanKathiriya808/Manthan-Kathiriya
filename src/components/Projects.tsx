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
            link: "#",
            githubLink: ""
        },
        {
            title: "RAGSuite",
            role: "Frontend Developer",
            desc: "AI Search & Chat Platform (RAG-based). Built Admin Dashboard and Embedded Search/Chat widget UI.",
            tech: ["React.js", "TypeScript", "Tailwind CSS"],
            link: "#",
            githubLink: ""
        },
        {
            title: "BookBazar",
            role: "Full Stack",
            desc: "Dynamic e-commerce website with product browsing, cart, and checkout features. Integrated user authentication.",
            tech: ["JavaScript", "CSS3", "Bootstrap", "UI Verse"],
            link: "https://bookbazar-final.vercel.app/",
            githubLink: "https://github.com/ManthanKathiriya808/bookbazar-final.git"
        },
        {
            title: "Smart Dustbin",
            role: "IoT Developer",
            desc: "Waste Monitoring System. Real-time dashboard for bin fill levels, gas, temp & humidity using sensors.",
            tech: ["React", "Flask", "Arduino", "Sensors"],
            link: "#",
            githubLink: "https://github.com/ManthanKathiriya808/ManthanKathiriya808-smart-dustbin.git"
        },
        {
            title: "Chamunda Nursery",
            role: "Freelance",
            desc: "Complete e-commerce store built with Shopify and a modern business landing page for a local plant nursery.",
            tech: ["Shopify", "ShipRocket"],
            link: "https://www.chamundanursery.in/",
            githubLink: ""
        },
        {
            title: "Shree Ram Engineering",
            role: "Freelance",
            desc: "Corporate website showcasing engineering services and professional portfolio.",
            tech: ["React", "Vite", "TailwindCSS"],
            link: "https://shree-ram-engineering-fp45.vercel.app/",
            githubLink: ""
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
                                            <div className="flex items-center gap-2 relative z-20 pointer-events-auto">
                                                {p.githubLink && (
                                                    <a href={p.githubLink} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white/40 hover:text-white hover:bg-primary transition-all duration-300 relative z-20 pointer-events-auto">
                                                        <Github className="w-5 h-5" />
                                                    </a>
                                                )}
                                                {p.link !== "#" && (
                                                    <a href={p.link} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white/40 hover:text-white hover:bg-primary transition-all duration-300 relative z-20 pointer-events-auto">
                                                        <ExternalLink className="w-5 h-5" />
                                                    </a>
                                                )}
                                            </div>
                                        </div>

                                        <p className="text-white/50 text-base leading-relaxed mb-10 flex-1">
                                            {p.desc}
                                        </p>

                                        <div className="flex flex-wrap gap-2 mt-auto">
                                            {p.tech.map((t, idx) => {
                                                const colors: Record<string, string> = {
                                                    "React.js": "text-cyan-400 border-cyan-400/30 bg-cyan-400/5",
                                                    "React": "text-cyan-400 border-cyan-400/30 bg-cyan-400/5",
                                                    "TypeScript": "text-blue-500 border-blue-500/30 bg-blue-500/5",
                                                    "React Query": "text-red-400 border-red-400/30 bg-red-400/5",
                                                    "Tailwind CSS": "text-sky-400 border-sky-400/30 bg-sky-400/5",
                                                    "TailwindCSS": "text-sky-400 border-sky-400/30 bg-sky-400/5",
                                                    "JavaScript": "text-yellow-400 border-yellow-400/30 bg-yellow-400/5",
                                                    "CSS3": "text-blue-400 border-blue-400/30 bg-blue-400/5",
                                                    "Bootstrap": "text-purple-500 border-purple-500/30 bg-purple-500/5",
                                                    "UI Verse": "text-pink-400 border-pink-400/30 bg-pink-400/5",
                                                    "Flask": "text-gray-400 border-gray-400/30 bg-gray-400/5",
                                                    "Arduino": "text-teal-400 border-teal-400/30 bg-teal-400/5",
                                                    "Sensors": "text-orange-400 border-orange-400/30 bg-orange-400/5",
                                                    "Shopify": "text-green-400 border-green-400/30 bg-green-400/5",
                                                    "ShipRocket": "text-purple-400 border-purple-400/30 bg-purple-400/5",
                                                    "Vite": "text-purple-500 border-purple-500/30 bg-purple-500/5",
                                                };
                                                return (
                                                    <span key={idx} className={`px-4 py-1.5 text-xs font-medium border rounded-full transition-all duration-300 ${colors[t] || "text-white/70 border-white/10 bg-white/5"} group-hover:border-opacity-60`}>
                                                        {t}
                                                    </span>
                                                );
                                            })}
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
