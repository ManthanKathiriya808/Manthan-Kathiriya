import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata = {
  title: "Building an IoT Smart Dustbin | Manthan Kathiriya Blog",
  description: "Read about how I built an IoT-based waste monitoring system using Arduino sensors and a React dashboard for real-time monitoring.",
  keywords: [
    "IoT smart dustbin tutorial",
    "Arduino waste monitoring",
    "React IoT dashboard",
    "Manthan Kathiriya blog"
  ],
};

export default function SmartDustbinBlog() {
  return (
    <div className="min-h-screen bg-background text-white pt-24 pb-16 px-6 sm:px-12 md:px-16 lg:px-24">
      <div className="max-w-3xl mx-auto">
        <Link href="/#projects" className="inline-flex items-center text-primary hover:text-white transition-colors mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>
        <h1 className="text-4xl sm:text-5xl font-black tracking-tight mb-6 mt-8">
          How I Built a Smart Dustbin using IoT
        </h1>
        <p className="text-xl text-white/70 leading-relaxed mb-10">
          An overview of creating a full-stack IoT waste monitoring system connecting hardware sensors via Arduino up to a React and Flask dashboard.
        </p>
        <div className="prose prose-invert max-w-none">
          <p>
            The project involves several gas, humidity, and ultrasonic sensors to continuously measure the waste level inside the bin. When the bin reaches a certain capacity, it updates the central database.
          </p>
          <p>
            On the frontend, a React application provides a user-friendly dashboard for administrators to monitor all dustbins across a city or campus simultaneously.
          </p>
        </div>
      </div>
    </div>
  );
}
