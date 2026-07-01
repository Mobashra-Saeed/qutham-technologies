"use client";

import { useEffect, useRef, useState } from "react";

const coursesData = [
    {
        id: "01",
        title: "Advanced Full-Stack Engineering",
        description: "Master modern multi-tier web architectures. Learn to build pixel-perfect user interfaces, performant server-side processing pipelines, and scalable database architectures.",
        // Hand-drawn clean developer brackets icon
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
            </svg>
        )
    },
    {
        id: "02",
        title: "Native & Cross-Platform App Architectures",
        description: "Engineer high-performance native environments for iOS and Android. Focus on modular mobile lifecycles, global state synchronization, and native hardware integrations.",
        // Hand-drawn crisp device mobile icon
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                <line x1="12" y1="18" x2="12.01" y2="18" />
            </svg>
        )
    },
    {
        id: "03",
        title: "Enterprise API & Backend Systems",
        description: "Design and deploy bulletproof backend infrastructures, real-time WebSocket routing matrices, secure token authentications, and automated database layers.",
        // Hand-drawn structured server database nodes icon
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
                <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
                <line x1="6" y1="6" x2="6.01" y2="6" />
                <line x1="6" y1="18" x2="6.01" y2="18" />
            </svg>
        )
    },
    {
        id: "04",
        title: "UI/UX Systems & Product Design",
        description: "Construct production-ready visual tokens, deep-level interactive user blueprint matrices, high-fidelity prototypes, and design systems built for scale.",
        // Hand-drawn crisp design grid layout viewport icon
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <path d="M21 9H3M21 15H3M12 3v18" />
            </svg>
        )
    }
];

export default function Courses() {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section
            id="courses"
            ref={sectionRef}
            className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 select-none overflow-hidden"
        >

            <style dangerouslySetInnerHTML={{
                __html: `
    .course-card-element {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.7s cubic-bezier(0.25, 1, 0.5, 1), transform 0.7s cubic-bezier(0.25, 1, 0.5, 1);
    }
    .courses-active .course-card-element {
        opacity: 1;
        transform: translateY(0);
    }
    
    
    .course-rotate-icon {
        transition: transform 1.5s cubic-bezier(0.34, 1.56, 0.64, 1);
    }
    
    .group:hover .course-rotate-icon {
        transform: rotate(360deg);
    }
`}} />

            {/* Section Heading matching the Hero Gradient mechanics */}
            <div className={`space-y-2 mb-16 text-center ${isVisible ? 'courses-active' : ''}`}>
                <p className="course-card-element [transition-delay:50ms] text-xs font-lato tracking-widest text-qutham-blue uppercase font-bold">
                    — Choose your Path and Start Learning Now
                </p>
                <h2 className="course-card-element [transition-delay:150ms] text-4xl sm:text-5xl font-black text-qutham-navy tracking-tight">
                    IT Courses
                    <span className="block sm:inline sm:ml-3 text-transparent bg-clip-text bg-gradient-to-r from-qutham-blue via-qutham-navy to-qutham-blue bg-[length:200%_auto] animate-gradient-shift">
                        We Offer.
                    </span>
                </h2>
            </div>


            <div className={`relative grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto ${isVisible ? 'courses-active' : ''}`}>

                {/* === COURSE CARDS ARCHITECTURE === */}
                {coursesData.map((course, idx) => (
                    <div
                        key={course.id}
                        className={`course-card-element group relative z-10 bg-white border border-qutham-navy/5 rounded-xl p-5 sm:p-6 shadow-sm transition-all duration-500 ease-out hover:bg-qutham-navy hover:border-qutham-navy hover:shadow-xl cursor-default flex flex-col justify-between`}
                        style={{ transitionDelay: `${(idx + 2) * 100}ms` }}
                    >
                        <div>
                            {/* Icon Wrapper Matrix */}
                            <div className="course-rotate-icon inline-flex p-2.5 rounded-lg bg-qutham-blue/5 border border-qutham-blue/10 text-qutham-blue group-hover:bg-white/10 group-hover:border-white/20 group-hover:text-white transition-all duration-500 mb-4">
                                {course.icon}
                            </div>

                            {/* Course Metadata Block */}
                            <h3 className="text-lg font-bold text-qutham-navy group-hover:text-white tracking-tight transition-colors duration-500">
                                {course.title}
                            </h3>

                            <p className="text-xs sm:text-sm text-qutham-navy/70 group-hover:text-white/70 font-normal leading-relaxed mt-1.5 transition-colors duration-500">
                                {course.description}
                            </p>
                        </div>

                        <button
                            onClick={() => {
                                const contactSection = document.getElementById("contact_us");
                                if (contactSection) {
                                    contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
                                }
                            }}
                            className="relative mt-6 w-full bg-qutham-navy text-white text-sm font-bold px-6 py-3 rounded-lg shadow-md overflow-hidden hover:shadow-lg hover:shadow-qutham-blue/30 transition-all duration-300 active:scale-95 group"
                        >
                            <span className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                            <span className="relative z-10 text-white group-hover:text-qutham-navy">Enroll Now</span>
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
}