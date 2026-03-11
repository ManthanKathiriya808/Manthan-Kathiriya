import Link from 'next/link';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';

export const metadata = {
  title: "BookBazar | MERN Stack E-commerce Project | Manthan Kathiriya",
  description:
    "BookBazar is a full stack MERN e-commerce application developed by Manthan Kathiriya featuring product browsing, authentication, shopping cart and checkout system.",
  keywords: [
    "BookBazar project",
    "MERN ecommerce project",
    "React ecommerce project",
    "Node.js ecommerce project",
    "full stack ecommerce project",
    "Manthan Kathiriya projects",
    "React portfolio project",
    "MERN stack portfolio",
    "Developer Branding",
    "Manthan developer portfolio",
    "manthan.dev projects",
    "React Developer Keywords",
    "React portfolio projects",
    "Next.js portfolio projects",
    "Frontend developer portfolio",
    "React developer portfolio",
    "Project Keywords"
  ],
};

export default function BookBazarProject() {
  return (
    <div className="min-h-screen bg-background text-white pt-24 pb-16 px-6 sm:px-12 md:px-16 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "CreativeWork",
              name: "BookBazar",
              author: {
                "@type": "Person",
                name: "Manthan Kathiriya",
              },
              description:
                "Full stack MERN ecommerce application with authentication, cart and checkout features.",
              programmingLanguage: [
                "React.js",
                "Node.js",
                "MongoDB",
                "JavaScript",
              ],
            }),
          }}
        />
        <Link href="/#projects" className="inline-flex items-center text-primary hover:text-white transition-colors mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Projects
        </Link>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight mb-6 mt-12">
          BookBazar
        </h1>
        <div className="flex flex-wrap gap-4 mb-8">
          <span className="px-4 py-1.5 text-sm font-medium border rounded-full text-yellow-400 border-yellow-400/30 bg-yellow-400/5">JavaScript</span>
          <span className="px-4 py-1.5 text-sm font-medium border rounded-full text-blue-400 border-blue-400/30 bg-blue-400/5">CSS3</span>
          <span className="px-4 py-1.5 text-sm font-medium border rounded-full text-purple-500 border-purple-500/30 bg-purple-500/5">Bootstrap</span>
          <span className="px-4 py-1.5 text-sm font-medium border rounded-full text-pink-400 border-pink-400/30 bg-pink-400/5">UI Verse</span>
        </div>
        
        <p className="text-xl text-white/70 leading-relaxed mb-10">
          BookBazar is a dynamic e-commerce website with product browsing, cart, and checkout features. It integrates user authentication and provides a seamless shopping experience for book enthusiasts.
        </p>

        <div className="flex gap-4">
          <a href="https://bookbazar-final.vercel.app/" target="_blank" rel="noreferrer" className="inline-flex items-center px-6 py-3 bg-primary text-background font-semibold rounded-[2rem] hover:bg-white transition-colors">
            <ExternalLink className="w-5 h-5 mr-2" />
            Live Project
          </a>
          <a href="https://github.com/ManthanKathiriya808/bookbazar-final.git" target="_blank" rel="noreferrer" className="inline-flex items-center px-6 py-3 bg-white/10 text-white font-semibold rounded-[2rem] hover:bg-white/20 transition-colors">
            <Github className="w-5 h-5 mr-2" />
            Source Code
          </a>
        </div>
      </div>
    </div>
  );
}
