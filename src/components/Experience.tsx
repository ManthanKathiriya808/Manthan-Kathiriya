"use client";

import { motion } from "framer-motion";
import { ScrollTimeline, TimelineEvent } from "./lightswind/scroll-timeline";

type ExperienceItem = {
    company: string;
    role: string;
    period: string;
    link?: string;
    highlights: string[];
};

const experiences: ExperienceItem[] = [

    {
        company: "Edugenius Softwares LLP",
        role: "AI & Robotics Teacher",
        period: "April 2026 - Present",
        link: "https://www.linkedin.com/company/edugenius-softwares-llp/posts/?feedView=all",
        highlights: [
            "Teaching Coding, AI, Robotics, and Virtual Reality to school students.",
            "Conducting hands-on robotics and programming sessions using interactive learning methods.",
            "Guiding students in developing real-world projects and problem-solving skills.",
            "Creating engaging lesson plans and practical activities for different age groups.",
            "Training students on coding platforms, app development, and basic electronics.",
            "Managing computer lab activities and supporting STEM-based education initiatives.",
            "Encouraging creativity, innovation, and teamwork through project-based learning."
        ],
    },    {
        company: "Self-Employed",
        role: "Freelance Web Developer",
        period: "2024 - Present",
        highlights: [
            "Designing and building high-performance web applications, e-commerce sites, and business landing pages for global clients.",
            "Developing end-to-end digital solutions utilizing modern web technologies including React.js, Next.js, Node.js, and Tailwind CSS.",
            "Providing technical consulting, SEO optimization, and complete UI/UX modernization services."
        ],
    },
    {
        company: "NITSAN Technologies",
        role: "Jr. Frontend Developer",
        period: "August 2025 - March 2026",
        link: "https://www.linkedin.com/company/nitsan-technologies/posts/?feedView=all",
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
        link: "https://www.linkedin.com/company/parvam-softech/posts/?feedView=all",
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
    link: exp.link,
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
                    revealAnimation="fade"
                    progressIndicator={true}
                    parallaxIntensity={0.1}
                    className="!min-h-0"
                />
            </div>
        </section>
    );
}

