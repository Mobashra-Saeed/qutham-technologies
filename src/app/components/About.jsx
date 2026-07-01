"use client";

import { useEffect, useRef, useState } from "react";

export default function About() {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.15 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section
            id="about"
            ref={sectionRef}
            className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 select-none overflow-hidden"
        >
            {/* Embedded custom style block to handle entry animations smoothly via state */}
            <style dangerouslySetInnerHTML={{
                __html: `
                .reveal-element {
                    opacity: 0;
                    transform: translateY(24px);
                    transition: opacity 0.8s cubic-bezier(0.25, 1, 0.5, 1), transform 0.8s cubic-bezier(0.25, 1, 0.5, 1);
                }
                .reveal-active .reveal-element {
                    opacity: 1;
                    transform: translateY(0);
                }
            `}} />

            <div className={` items-start ${isVisible ? 'reveal-active' : ''}`}>

                {/* === LEFT COLUMN: Narrative & Core Thesis === */}
                <div className="lg:col-span-7 space-y-6 text-left">
                    <div className="reveal-element [transition-delay:100ms] space-y-2">
                        <p className="text-xs font-lato tracking-widest text-qutham-blue uppercase font-bold">
                            — Who We Are
                        </p>

                        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-qutham-navy tracking-tight leading-[1.1]">
                            Architecting Code.
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-qutham-blue via-qutham-navy to-qutham-blue bg-[length:200%_auto] animate-gradient-shift">
                                Cultivating Innovators.
                            </span>
                        </h2>
                    </div>

                    <div className="reveal-element [transition-delay:250ms] space-y-5 text-sm sm:text-base text-qutham-navy/80 font-normal leading-relaxed max-w-2xl">
                        <p>
                            Qutham Technologies operates at the intersection of production-grade software development and elite technical education. We do not work in theoretical vacuums; we build systems that scale and prepare individuals to manage them.
                        </p>
                        <p className="text-qutham-navy/60">
                            Whether delivering high-performance mobile architectures for global enterprises or translating complex engineering principles into structured IT curriculums, our blueprint remains continuous: engineering excellence without compromise.
                        </p>
                    </div>


                    <div className="reveal-element [transition-delay:350ms] pt-0">
                        <div className="w-20 h-[2px] bg-gradient-to-r from-qutham-blue to-transparent" />
                    </div>
                </div>

            </div>
        </section>
    );
}