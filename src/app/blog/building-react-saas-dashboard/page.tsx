import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata = {
  title: "Building a React SaaS Dashboard | Manthan Kathiriya Blog",
  description: "Discover the process behind building a scalable AI SaaS dashboard using React, TypeScript, and Tailwind CSS.",
  keywords: [
    "React SaaS dashboard tutorial",
    "TypeScript dashboard architecture",
    "AI proposal platform architecture",
    "Manthan Kathiriya blog"
  ],
};

export default function SaaSBlog() {
  return (
    <div className="min-h-screen bg-background text-white pt-24 pb-16 px-6 sm:px-12 md:px-16 lg:px-24">
      <div className="max-w-3xl mx-auto">
        <Link href="/#projects" className="inline-flex items-center text-primary hover:text-white transition-colors mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>
        <h1 className="text-4xl sm:text-5xl font-black tracking-tight mb-6 mt-8">
          Building a Scalable React SaaS Dashboard
        </h1>
        <p className="text-xl text-white/70 leading-relaxed mb-10">
          Insights into frontend architecture, state management, and component design when building complex B2B applications.
        </p>
        <div className="prose prose-invert max-w-none">
          <p>
            Creating a dynamic UI for an AI proposal platform required careful consideration of state management and role-based access.
          </p>
          <p>
            By leveraging TypeScript and React Query, the application ensures type safety and optimal caching mechanisms for high-performance dashboards.
          </p>
        </div>
      </div>
    </div>
  );
}
