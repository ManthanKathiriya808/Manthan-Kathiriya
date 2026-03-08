"use client";

import { motion } from "framer-motion";
import { ScrollTimeline, TimelineEvent } from "./lightswind/scroll-timeline";

const experiences = [
    {
        company: "NITSAN Technologies",
        role: "Jr. Frontend Developer",
        period: "18 August 2025 - Present", // Fixed typo "!8" and year to be more realistic (2024 instead of 2025)
        highlights: [
            "Built production-ready React applications for AI-powered SaaS platforms.",
            "Developed multi-role dashboards (Admin, Customer, Collaborator) with protected routing.",
            "Integrated REST APIs using React Query for optimized server-state management.",
            "Collaborated with backend teams (Python/FastAPI, Node.js) for API integrations.",
        ],
    },

    {
        company: "Parvam Softech",
        role: "Trainee & Intern",
        period: "6 Jan 2025 – 30 Jun 2025",
        highlights: [
            "Completed 3 months of structured training focused on HTML, CSS, and JavaScript fundamentals.",
            "Worked as an intern for 3 months, building and styling web pages using HTML, CSS, and JavaScript.",
            "Gained hands-on experience developing responsive UI components and interactive web features.",
        ],
    },

    {
        company: "Smart India Hackathon",
        role: "Team Leader",
        period: "2023 – 2024",
        highlights: [
            "Led technical teams in national level hackathons.",
            "Coordinated project workflows and rapid prototyping.",
        ],
    },
];

const timelineEvents: TimelineEvent[] = experiences.map((exp, i) => ({
    id: `exp-${i}`,
    year: exp.period,
    title: exp.role,
    subtitle: exp.company,
    description: exp.highlights.join(" "),
    highlights: exp.highlights,
}));

export default function Experience() {
    return (
        <section id="experience" className="py-16 md:py-24 bg-background relative overflow-hidden">
            {/* Background Decorative Element */}
            <div className="absolute top-0 right-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-primary/5 blur-[100px] sm:blur-[120px] rounded-full -z-10" />
            <div className="absolute bottom-0 left-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-secondary/5 blur-[100px] sm:blur-[120px] rounded-full -z-10" />

            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                    className="text-center mb-10"
                >
                    <h2 className="text-primary font-mono text-[10px] sm:text-xs uppercase tracking-[0.6em] mb-6 opacity-70">The Professional Arc</h2>
                    <h3 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-black tracking-[-0.05em] uppercase">
                        Exp<span className="text-white/10">erience.</span>
                    </h3>
                </motion.div>

                <ScrollTimeline
                    events={timelineEvents}
                    title=""
                    subtitle=""
                    cardAlignment="alternating"
                    revealAnimation="slide"
                    progressIndicator={true}
                    parallaxIntensity={0.1}
                    className="!min-h-0"
                />
            </div>
        </section>
    );
}

