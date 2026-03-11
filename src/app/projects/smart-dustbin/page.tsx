import Link from 'next/link';
import { ArrowLeft, Github } from 'lucide-react';

export const metadata = {
  title: "Smart Dustbin | IoT Waste Monitoring System | Manthan Kathiriya",
  description:
    "Smart Dustbin is an IoT-based waste monitoring system developed using Arduino sensors and a React dashboard for real-time bin monitoring, gas detection, temperature and humidity tracking.",
  keywords: [
    "Smart Dustbin project",
    "IoT waste management system",
    "Arduino smart dustbin",
    "IoT waste monitoring project",
    "smart garbage monitoring system",
    "IoT portfolio project",
    "Manthan Kathiriya IoT project",
    "Developer Branding",
    "Manthan Kathiriya projects",
    "Manthan developer portfolio",
    "manthan.dev projects",
    "IoT smart dustbin project",
  ],
};

export default function SmartDustbinProject() {
  return (
    <div className="min-h-screen bg-background text-white pt-24 pb-16 px-6 sm:px-12 md:px-16 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "CreativeWork",
              name: "Smart Dustbin",
              author: {
                "@type": "Person",
                name: "Manthan Kathiriya",
              },
              description:
                "IoT-based waste monitoring system developed using Arduino sensors and a React dashboard.",
              programmingLanguage: [
                "React.js",
                "Flask",
                "Arduino",
                "C++",
                "Python"
              ],
            }),
          }}
        />
        <Link href="/#projects" className="inline-flex items-center text-primary hover:text-white transition-colors mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Projects
        </Link>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight mb-6 mt-12">
          Smart Dustbin
        </h1>
        <div className="flex flex-wrap gap-4 mb-8">
          <span className="px-4 py-1.5 text-sm font-medium border rounded-full text-cyan-400 border-cyan-400/30 bg-cyan-400/5">React</span>
          <span className="px-4 py-1.5 text-sm font-medium border rounded-full text-gray-400 border-gray-400/30 bg-gray-400/5">Flask</span>
          <span className="px-4 py-1.5 text-sm font-medium border rounded-full text-teal-400 border-teal-400/30 bg-teal-400/5">Arduino</span>
          <span className="px-4 py-1.5 text-sm font-medium border rounded-full text-orange-400 border-orange-400/30 bg-orange-400/5">Sensors</span>
        </div>
        
        <p className="text-xl text-white/70 leading-relaxed mb-10">
          Smart Dustbin is an IoT-based waste monitoring system. It features a real-time dashboard for bin fill levels, gas detection, temperature, and humidity using an array of sensors connected to an Arduino.
        </p>

        <div className="flex gap-4">
          <a href="https://github.com/ManthanKathiriya808/ManthanKathiriya808-smart-dustbin.git" target="_blank" rel="noreferrer" className="inline-flex items-center px-6 py-3 bg-white/10 text-white font-semibold rounded-[2rem] hover:bg-white/20 transition-colors">
            <Github className="w-5 h-5 mr-2" />
            Source Code
          </a>
        </div>
      </div>
    </div>
  );
}
