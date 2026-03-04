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
    { node: <SiReact />, title: "React", href: "https://react.dev" },
    { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
    { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
    { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
    { node: <SiNodedotjs />, title: "Node.js", href: "https://nodejs.org" },
    { node: <SiMongodb />, title: "MongoDB", href: "https://www.mongodb.com" },
    { node: <SiExpress />, title: "Express", href: "https://expressjs.com" },
    { node: <SiPython />, title: "Python", href: "https://www.python.org" },
    { node: <SiFramer />, title: "Framer", href: "https://www.framer.com/motion/" },
    { node: <SiVercel />, title: "Vercel", href: "https://vercel.com" },
    { node: <SiGit />, title: "Git", href: "https://git-scm.com" },
    { node: <SiGithub />, title: "GitHub", href: "https://github.com" },
    { node: <SiShopify />, title: "Shopify", href: "https://www.shopify.com" },
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
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-24 items-center">
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
                        <div className="space-y-8 text-lg sm:text-xl md:text-2xl text-white/40 leading-relaxed font-light max-w-2xl">
                            <p>
                                I am a <span className="text-white font-bold opacity-100">Frontend Architect</span> focused on building the connective tissue between innovative design and terminal-level engineering.
                            </p>
                            <p>
                                With 8 months of industrial MERN experience, I specialize in <span className="text-secondary font-medium italic opacity-80">AI-powered SaaS platforms</span> and high-stakes UI/UX infrastructure.
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
                                className="opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700"
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
                                tabs={skills.map((skillGroup) => ({
                                    id: skillGroup.category,
                                    label: skillGroup.category,
                                    content: (
                                        <div className="flex flex-wrap justify-center gap-3 mt-8">
                                            {skillGroup.items.map((skill) => (
                                                <motion.span
                                                    key={skill}
                                                    whileHover={{
                                                        scale: 1.1,
                                                        backgroundColor: "rgba(139, 92, 246, 0.2)",
                                                        borderColor: "rgba(139, 92, 246, 0.4)"
                                                    }}
                                                    className="px-5 py-2.5 bg-white/5 border border-white/10 rounded-2xl text-sm font-medium text-white/80 transition-all duration-300 cursor-default"
                                                >
                                                    {skill}
                                                </motion.span>
                                            ))}
                                        </div>
                                    )
                                }))}
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
