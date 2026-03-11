import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata = {
  title: "AI Knowledge Search Platform | RAG Project | Manthan Kathiriya",
  description:
    "AI-powered knowledge search and chat platform using Retrieval-Augmented Generation (RAG). Built admin dashboard and embedded search/chat widget interface.",
  keywords: [
    "AI knowledge search project",
    "RAG AI project",
    "React AI dashboard",
    "TypeScript AI frontend",
    "React developer portfolio project",
    "Next.js portfolio projects",
    "Frontend developer portfolio",
    "Developer Branding",
    "Manthan Kathiriya projects",
    "Manthan developer portfolio",
    "manthan.dev projects",
  ],
};

export default function AIKnowledgeSearchProject() {
  return (
    <div className="min-h-screen bg-background text-white pt-24 pb-16 px-6 sm:px-12 md:px-16 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "CreativeWork",
              name: "AI Knowledge Search Platform",
              author: {
                "@type": "Person",
                name: "Manthan Kathiriya",
              },
              description:
                "AI-powered knowledge search and chat platform using Retrieval-Augmented Generation (RAG).",
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
          AI Knowledge Search Platform
        </h1>
        <div className="flex flex-wrap gap-4 mb-8">
          <span className="px-4 py-1.5 text-sm font-medium border rounded-full text-cyan-400 border-cyan-400/30 bg-cyan-400/5">React.js</span>
          <span className="px-4 py-1.5 text-sm font-medium border rounded-full text-blue-500 border-blue-500/30 bg-blue-500/5">TypeScript</span>
          <span className="px-4 py-1.5 text-sm font-medium border rounded-full text-sky-400 border-sky-400/30 bg-sky-400/5">Tailwind CSS</span>
        </div>
        
        <p className="text-xl text-white/70 leading-relaxed mb-10">
          An AI-powered knowledge search and chat platform utilizing Retrieval-Augmented Generation (RAG). I built the admin dashboard and an embeddable search and chat widget interface for seamless integration.
        </p>
      </div>
    </div>
  );
}
