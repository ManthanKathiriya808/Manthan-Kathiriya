"use client";

import { motion } from "framer-motion";
import LogoLoop from "./LogoLoop";
import { Tabs } from "./ui/tabs";
import {
    SiReact,
    SiNextdotjs,
    SiTypescript,
    SiTailwindcss,
    SiNodedotjs,
    SiMongodb,
    SiExpress,
    SiPython,
    SiFramer,
    SiVercel,
    SiGit,
    SiGithub,
    SiShopify
} from "react-icons/si";

const techLogos = [
    { node: <SiReact className="text-[#61DAFB]" />, title: "React", href: "https://react.dev" },
    { node: <SiNextdotjs className="text-white" />, title: "Next.js", href: "https://nextjs.org" },
    { node: <SiTypescript className="text-[#3178C6]" />, title: "TypeScript", href: "https://www.typescriptlang.org" },
    { node: <SiTailwindcss className="text-[#38BDF8]" />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
    { node: <SiNodedotjs className="text-[#339933]" />, title: "Node.js", href: "https://nodejs.org" },
    { node: <SiMongodb className="text-[#47A248]" />, title: "MongoDB", href: "https://www.mongodb.com" },
    { node: <SiExpress className="text-gray-400" />, title: "Express", href: "https://expressjs.com" },
    { node: <SiPython className="text-[#FFD43B]" />, title: "Python", href: "https://www.python.org" },
    { node: <SiFramer className="text-white" />, title: "Framer", href: "https://www.framer.com/motion/" },
    { node: <SiVercel className="text-white" />, title: "Vercel", href: "https://vercel.com" },
    { node: <SiGit className="text-[#F05032]" />, title: "Git", href: "https://git-scm.com" },
    { node: <SiGithub className="text-white" />, title: "GitHub", href: "https://github.com" },
    { node: <SiShopify className="text-[#96BF48]" />, title: "Shopify", href: "https://www.shopify.com" },
];

const skills = [
    { category: "Frontend", items: ["Next.js", "React.js", "JavaScript (ES6+)", "TypeScript", "Tailwind CSS", "Bootstrap", "Material UI", "React Query"] },
    { category: "Backend", items: ["Node.js", "Express.js", "MongoDB (Mongoose)", "REST APIs", "JWT Authentication", "Python"] },
    { category: "CMS & Platforms", items: ["Shopify"] },
    { category: "Tools", items: ["Git", "GitHub", "GitLab", "Vite", "Postman", "Vercel", "Responsive Design"] },
];

export default function About() {
    return (
        <section id="about" className="py-16 md:py-24 bg-background relative overflow-hidden">
            {/* Ambient Background Glows */}
            <div className="absolute top-1/4 left-1/4 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-primary/10 blur-[100px] sm:blur-[150px] rounded-full -z-10 animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-secondary/10 blur-[100px] sm:blur-[150px] rounded-full -z-10 animate-pulse" style={{ animationDelay: '2s' }} />

            <div className="max-w-7xl mx-auto px-6 sm:px-12 md:px-16 lg:px-24 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-1 gap-12 lg:gap-16 xl:gap-24 items-center">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                        className="lg:col-span-7 min-w-0"
                    >
                        <h2 className="text-primary font-mono text-[10px] sm:text-xs uppercase tracking-[0.6em] mb-8 md:mb-10 opacity-70">The Philosophy</h2>
                        <h3 className="text-4xl sm:text-5xl md:text-7xl lg:text-5xl xl:text-6xl font-black mb-8 md:mb-12 leading-[0.95] tracking-[-0.05em] text-white w-full">
                            Designing <span className="text-white/20">Scalable</span> <br />
                            <span className="text-primary underline decoration-white/10 underline-offset-8">Architectures.</span>
                        </h3>
                        <div className="space-y-8 text-lg sm:text-xl md:text-2xl text-white/70 leading-relaxed font-light max-w-2xl">
                            <p>
                                I am a <span className="text-white font-bold opacity-100">Frontend Architect</span> focused on building the connective tissue between innovative design and terminal-level engineering.
                            </p>
                            <p>
                                I specialize in <span className="text-secondary font-medium italic opacity-80">AI-powered SaaS platforms</span> and high-stakes UI/UX infrastructure.
                            </p>
                        </div>

                        {/* Tech Logo Loop */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="mt-16 pt-10 border-t border-white/5"
                        >
                            <LogoLoop
                                logos={techLogos}
                                speed={40}
                                logoHeight={24}
                                gap={50}
                                fadeOut
                                scaleOnHover
                                className="opacity-80 hover:opacity-100 transition-all duration-500"
                            />
                        </motion.div>
                    </motion.div>

                    {/* Skills Grid as Tabs */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="lg:col-span-5 flex flex-col items-center bg-white/[0.02] border border-white/[0.08] p-6 sm:p-10 rounded-[2rem] sm:rounded-[3rem] backdrop-blur-sm"
                    >
                        <div className="w-full">
                            <Tabs
                                tabs={skills.map((skillGroup) => {
                                    const categoryColors: Record<string, string> = {
                                        "Frontend": "bg-violet-600",
                                        "Backend": "bg-emerald-600",
                                        "CMS & Platforms": "bg-sky-600",
                                        "Tools": "bg-amber-600"
                                    };
                                    return {
                                        id: skillGroup.category,
                                        label: skillGroup.category,
                                        activeColor: categoryColors[skillGroup.category],
                                        content: (
                                            <div className="flex flex-wrap justify-center gap-3 mt-8">
                                                {skillGroup.items.map((skill) => {
                                                    const colors: Record<string, string> = {
                                                        "Next.js": "text-blue-400 border-blue-400/30 bg-blue-400/5 hover:border-blue-400/60 hover:bg-blue-400/15",
                                                        "React.js": "text-cyan-400 border-cyan-400/30 bg-cyan-400/5 hover:border-cyan-400/60 hover:bg-cyan-400/15",
                                                        "JavaScript (ES6+)": "text-yellow-400 border-yellow-400/30 bg-yellow-400/5 hover:border-yellow-400/60 hover:bg-yellow-400/15",
                                                        "TypeScript": "text-blue-500 border-blue-500/30 bg-blue-500/5 hover:border-blue-500/60 hover:bg-blue-500/15",
                                                        "Tailwind CSS": "text-sky-400 border-sky-400/30 bg-sky-400/5 hover:border-sky-400/60 hover:bg-sky-400/15",
                                                        "Bootstrap": "text-purple-500 border-purple-500/30 bg-purple-500/5 hover:border-purple-500/60 hover:bg-purple-500/15",
                                                        "Material UI": "text-blue-600 border-blue-600/30 bg-blue-600/5 hover:border-blue-600/60 hover:bg-blue-600/15",
                                                        "React Query": "text-red-400 border-red-400/30 bg-red-400/5 hover:border-red-400/60 hover:bg-red-400/15",
                                                        "Node.js": "text-green-500 border-green-500/30 bg-green-500/5 hover:border-green-500/60 hover:bg-green-500/15",
                                                        "Express.js": "text-gray-400 border-gray-400/30 bg-gray-400/5 hover:border-gray-400/60 hover:bg-gray-400/15",
                                                        "MongoDB (Mongoose)": "text-green-600 border-green-600/30 bg-green-600/5 hover:border-green-600/60 hover:bg-green-600/15",
                                                        "REST APIs": "text-orange-400 border-orange-400/30 bg-orange-400/5 hover:border-orange-400/60 hover:bg-orange-400/15",
                                                        "JWT Authentication": "text-pink-500 border-pink-500/30 bg-pink-500/5 hover:border-pink-500/60 hover:bg-pink-500/15",
                                                        "Python": "text-yellow-500 border-yellow-500/30 bg-yellow-500/5 hover:border-yellow-500/60 hover:bg-yellow-500/15",
                                                        "Shopify": "text-green-400 border-green-400/30 bg-green-400/5 hover:border-green-400/60 hover:bg-green-400/15",
                                                        "Git": "text-orange-600 border-orange-600/30 bg-orange-600/5 hover:border-orange-600/60 hover:bg-orange-600/15",
                                                        "GitHub": "text-white border-white/20 bg-white/5 hover:border-white/50 hover:bg-white/10",
                                                        "GitLab": "text-orange-500 border-orange-500/30 bg-orange-500/5 hover:border-orange-500/60 hover:bg-orange-500/15",
                                                        "Vite": "text-purple-400 border-purple-400/30 bg-purple-400/5 hover:border-purple-400/60 hover:bg-purple-400/15",
                                                        "Postman": "text-orange-400 border-orange-400/30 bg-orange-400/5 hover:border-orange-400/60 hover:bg-orange-400/15",
                                                        "Vercel": "text-white border-white/20 bg-white/5 hover:border-white/50 hover:bg-white/10",
                                                        "Responsive Design": "text-indigo-400 border-indigo-400/30 bg-indigo-400/5 hover:border-indigo-400/60 hover:bg-indigo-400/15",
                                                    };
                                                    return (
                                                        <motion.span
                                                            key={skill}
                                                            whileHover={{ scale: 1.05 }}
                                                            className={`px-5 py-2.5 border rounded-2xl text-sm font-medium transition-all duration-300 cursor-default ${colors[skill] || "text-primary border-primary/30 bg-primary/5 hover:border-primary/60 hover:bg-primary/15"}`}
                                                        >
                                                            {skill}
                                                        </motion.span>
                                                    );
                                                })}
                                            </div>
                                        )
                                    };
                                })}
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
