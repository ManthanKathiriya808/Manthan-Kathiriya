"use client";

import { ScrollVelocityContainer, ScrollVelocityRow } from "@/components/ui/scroll-based-velocity";

export default function ScrollVelocity() {
    return (
        <section className="py-24 overflow-hidden bg-background/50 backdrop-blur-sm border-y border-white/5">
            <div className="relative flex w-full flex-col items-center justify-center">
                <ScrollVelocityContainer className="text-5xl font-black tracking-[-0.05em] md:text-8xl lg:text-9xl uppercase">
                    <ScrollVelocityRow baseVelocity={3} direction={1} className="text-white/10 italic">
                        Creative Developer <span className="text-primary/20 mx-8">•</span>
                        Frontend Architect <span className="text-primary/20 mx-8">•</span>
                        MERN Stack Expert <span className="text-primary/20 mx-8">•</span>
                    </ScrollVelocityRow>
                    <ScrollVelocityRow baseVelocity={3} direction={-1} className="text-white/5">
                        UI/UX Engineering <span className="text-secondary/10 mx-8">•</span>
                        Digital Performance <span className="text-secondary/10 mx-8">•</span>
                        Scalable Systems <span className="text-secondary/10 mx-8">•</span>
                    </ScrollVelocityRow>
                </ScrollVelocityContainer>

                {/* Visual Polish: Side Gradients */}
                <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background to-transparent z-10"></div>
                <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background to-transparent z-10"></div>
            </div>
        </section>
    );
}
