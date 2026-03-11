import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata = {
  title: "AI Proposal Platform | SaaS Dashboard Project | Manthan Kathiriya",
  description:
    "AI-powered SaaS platform for proposal management with role-based dashboards and credit-based workflow system. Frontend developed using React.js and TypeScript.",
  keywords: [
    "AI SaaS dashboard project",
    "React SaaS dashboard",
    "AI proposal platform",
    "React admin dashboard project",
    "TypeScript SaaS frontend",
    "React developer portfolio project",
    "Developer Branding",
    "Manthan Kathiriya projects",
    "Manthan developer portfolio",
    "manthan.dev projects",
    "React SaaS dashboard developer",
  ],
};

export default function AIProposalPlatformProject() {
  return (
    <div className="min-h-screen bg-background text-white pt-24 pb-16 px-6 sm:px-12 md:px-16 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "CreativeWork",
              name: "AI Proposal Platform",
              author: {
                "@type": "Person",
                name: "Manthan Kathiriya",
              },
              description:
                "AI-powered SaaS platform for proposal management with role-based dashboards.",
              programmingLanguage: [
                "React.js",
                "TypeScript",
                "Tailwind CSS"
              ],
            }),
          }}
        />
        <Link href="/#projects" className="inline-flex items-center text-primary hover:text-white transition-colors mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Projects
        </Link>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight mb-6 mt-12">
          AI Proposal Platform
        </h1>
        <div className="flex flex-wrap gap-4 mb-8">
          <span className="px-4 py-1.5 text-sm font-medium border rounded-full text-cyan-400 border-cyan-400/30 bg-cyan-400/5">React.js</span>
          <span className="px-4 py-1.5 text-sm font-medium border rounded-full text-blue-500 border-blue-500/30 bg-blue-500/5">TypeScript</span>
          <span className="px-4 py-1.5 text-sm font-medium border rounded-full text-red-400 border-red-400/30 bg-red-400/5">React Query</span>
          <span className="px-4 py-1.5 text-sm font-medium border rounded-full text-sky-400 border-sky-400/30 bg-sky-400/5">Tailwind CSS</span>
        </div>
        
        <p className="text-xl text-white/70 leading-relaxed mb-10">
          AI-powered Request for Proposal platform. I developed the frontend for this credit-based SaaS application featuring role-based dashboards, proposal generation workflows, and dynamic UI components designed for scale and performance.
        </p>
      </div>
    </div>
  );
}
