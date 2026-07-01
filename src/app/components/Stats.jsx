"use client";

import { useEffect, useRef, useState } from "react";

// 1. Counter Node (Kept completely intact with smooth hover & kinetic roll)
function CounterNode({ targetValue, suffix, label, subLabel }) {
    const [currentCount, setCurrentCount] = useState(0);
    const containerRef = useRef(null);
    const executionTriggered = useRef(false);

    useEffect(() => {
        const triggerObserver = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !executionTriggered.current) {
                    executionTriggered.current = true;

                    const finalTarget = parseInt(targetValue, 10);
                    if (isNaN(finalTarget)) return;

                    const animationDuration = 1800; 
                    const initiationTime = performance.now();

                    const executeTick = (timestamp) => {
                        const timeElapsed = timestamp - initiationTime;
                        const operationalProgress = Math.min(timeElapsed / animationDuration, 1);
                        const smoothedProgress = operationalProgress * (2 - operationalProgress);

                        setCurrentCount(Math.floor(smoothedProgress * finalTarget));

                        if (operationalProgress < 1) {
                            requestAnimationFrame(executeTick);
                        } else {
                            setCurrentCount(finalTarget);
                        }
                    };

                    requestAnimationFrame(executeTick);
                }
            },
            { threshold: 0.15 }
        );

        if (containerRef.current) {
            triggerObserver.observe(containerRef.current);
        }

        return () => triggerObserver.disconnect();
    }, [targetValue]);

    return (
        <div
            ref={containerRef}
            className="relative p-6 md:p-8 flex flex-col items-center text-center group hover:bg-qutham-navy transition-all duration-500 ease-out overflow-hidden cursor-default"
        >
            {/* Custom Embedded CSS for the Kinetic Roll & Blur Effect */}
            <style dangerouslySetInnerHTML={{__html: `
                @keyframes kineticRoll {
                    0% { transform: translateY(0); opacity: 1; filter: blur(0px); }
                    30% { transform: translateY(-40px); opacity: 0; filter: blur(4px); }
                    35% { transform: translateY(40px); opacity: 0; filter: blur(4px); }
                    100% { transform: translateY(0); opacity: 1; filter: blur(0px); }
                }
                .group:hover .kinetic-roll-wrapper {
                    animation: kineticRoll 0.55s cubic-bezier(0.25, 1, 0.5, 1) forwards;
                }
            `}} />

            {/* Kinetic Roll Container */}
            <div className="kinetic-roll-wrapper relative z-20 flex flex-col items-center">
                <span className="text-4xl md:text-5xl font-bold text-qutham-navy group-hover:text-white transition-colors duration-500 ease-out tracking-tight">
                    {currentCount.toLocaleString()}{suffix}
                </span>
                <span className="text-sm font-semibold text-qutham-navy group-hover:text-gray-100 mt-3 transition-colors duration-500 ease-out">
                    {label}
                </span>
                <span className="text-xs font-normal text-qutham-navy/60 group-hover:text-gray-300 mt-1 transition-colors duration-500 ease-out">
                    {subLabel}
                </span>
            </div>
        </div>
    );
}

// 2. The Main Stats Layout Component
export default function Stats() {
    // Grounded, realistic agency metrics (Data strictly untouched)
    const productionMetrics = [
        { target: "120", suffix: "+", label: "Web Applications", sub: "Custom & CMS platforms" },
        { target: "80", suffix: "+", label: "Mobile Apps", sub: "iOS & Android delivery" },
        { target: "150", suffix: "+", label: "Design Projects", sub: "Branding & UI/UX" },
        { target: "60", suffix: "+", label: "Marketing Campaigns", sub: "SEO & Social Media" },
        { target: "500000", suffix: "+", label: "Lines of Code", sub: "Based on actual implementation" }
    ];

    return (
        <section id="stats" className="relative z-20 w-full bg-gray-50/30 overflow-hidden px-3 sm:px-6 lg:px-8 py-14 sm:py-20 lg:py-24 select-none">
            
            {/* Premium Animated Background Fluid Shapes */}
            <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
                <style dangerouslySetInnerHTML={{__html: `
                    @keyframes driftOne {
                        0% { transform: translate(0px, 0px) scale(1); }
                        33% { transform: translate(40px, -60px) scale(1.2); }
                        66% { transform: translate(-30px, 20px) scale(0.8); }
                        100% { transform: translate(0px, 0px) scale(1); }
                    }
                    @keyframes driftTwo {
                        0% { transform: translate(0px, 0px) scale(1); }
                        50% { transform: translate(-50px, 40px) scale(1.15); }
                        100% { transform: translate(0px, 0px) scale(1); }
                    }
                    .animate-drift-1 { animation: driftOne 22s infinite alternate ease-in-out; }
                    .animate-drift-2 { animation: driftTwo 18s infinite alternate ease-in-out; }
                `}} />
                
                <div className="absolute -top-40 -left-40 w-96 h-96 md:w-[600px] md:h-[600px] rounded-full bg-qutham-navy/5 blur-[80px] md:blur-[120px] animate-drift-1"></div>
                <div className="absolute top-1/2 -right-20 w-80 h-80 md:w-[500px] md:h-[500px] rounded-full bg-qutham-blue/5 blur-[70px] md:blur-[100px] animate-drift-2"></div>
                <div className="absolute -bottom-20 left-1/3 w-72 h-72 md:w-[450px] md:h-[450px] rounded-full bg-qutham-navy/5 blur-[60px] md:blur-[110px] animate-drift-1 [animation-delay:2s]"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto">
                
                {/* Added: Section Header Array consistent with the main page structure */}
                <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 lg:mb-16 space-y-3">
                    <p className="text-xs font-lato tracking-widest text-qutham-blue uppercase font-bold">
                        — The Proof that Stands for our Expertise
                    </p>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-qutham-navy tracking-tight">
                        Why  <span className="text-qutham-blue">Choose Us?</span>
                    </h2>
                </div>

                {/* Core Stats Box Layout Container */}
                <div className="bg-white/70 backdrop-blur-xl border border-qutham-navy/10 rounded-2xl shadow-xl shadow-qutham-navy/5 overflow-hidden flex flex-col">

                    {/* Top Header */}
                    <div className="flex items-center justify-between px-6 py-4 border-b border-qutham-navy/5 bg-white/40">
                        <div className="flex items-center gap-3.5">
                            <span className="relative flex h-2.5 w-2.5 items-center justify-center">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-qutham-navy/30 [animation-duration:2s]"></span>
                                <span className="animate-ping absolute inline-flex h-[150%] w-[150%] rounded-full bg-qutham-navy/10 opacity-40 [animation-duration:2s] [animation-delay:0.5s]"></span>
                                <span className="absolute inline-flex h-full w-full rounded-full border border-qutham-navy/20 bg-qutham-navy/[0.05]"></span>
                                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-qutham-navy shadow-sm"></span>
                            </span>
                            <span className="text-xs font-semibold text-qutham-navy/80 uppercase tracking-wider">
                                Our Track Record
                            </span>
                        </div>
                    </div>

                    {/* The Counter Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 divide-y divide-x divide-qutham-navy/5 sm:divide-y-0 bg-white/20">
                        {productionMetrics.map((metric, index) => (
                            <CounterNode
                                key={index}
                                targetValue={metric.target}
                                suffix={metric.suffix}
                                label={metric.label}
                                subLabel={metric.sub}
                            />
                        ))}
                    </div>

                    {/* Bottom Footer */}
                    <div className="px-6 py-4 border-t border-qutham-navy/5 bg-white/40 flex flex-wrap gap-4 items-center justify-center lg:justify-start">
                        <span className="text-xs font-medium text-qutham-navy/70">
                            Building reliable digital solutions. Your trust is our priority.
                        </span>
                    </div>

                </div>
            </div>
        </section>
    );
}