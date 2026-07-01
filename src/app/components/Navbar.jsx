"use client";
import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
    const [activeLink, setActiveLink] = useState("Home");
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navLinks = [
        { name: "Home", href: "#home" },
        { name: "About Us", href: "#about" },
        { name: "Courses", href: "#courses" },
        { name: "Contact Us", href: "#contact_us" },
        { name: "Why Choose Us", href: "#stats" },
    ];

    return (
        <nav className="fixed top-0 left-0 w-full bg-qutham-navy border-b border-white/5 z-50 shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20 items-center">


                    <a href="#home" className="flex items-center gap-3 group inline-flex select-none">
                        <div className="flex items-center gap-3 transition-transform duration-500 ease-out group-hover:scale-[1.02]">
                            <div className="relative w-9 h-9 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-center p-1 transition-all duration-500 ease-out group-hover:border-white/20 group-hover:bg-white/[0.06] overflow-hidden">
                                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:animate-[shimmer_0.8s_ease-out_forwards]" />
                                <Image
                                    src="/images/icon.png"
                                    alt="Qutham Logo"
                                    fill
                                    sizes="36px"
                                    className="object-contain p-1 transition-transform duration-500 ease-out group-hover:rotate-[-4deg]"
                                    priority
                                />
                            </div>
                            <div className="flex items-center gap-1.5">
                                <span className="text-lg font-bold text-white tracking-tight">Qutham</span>
                                <span className="text-lg font-bold text-white">Technologies</span>
                            </div>
                        </div>
                        <style dangerouslySetInnerHTML={{
                            __html: `
        @keyframes shimmer {
            100% { transform: translateX(100%); }
        }
    `}} />
                    </a>

                    <div className="hidden md:flex items-center gap-6 lg:gap-8 h-full">
                        {navLinks.map((link) => {
                            const isActive = activeLink === link.name;
                            return (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setActiveLink(link.name)}
                                    className={`relative text-sm lg:text-[0.95rem] font-medium h-full flex items-center transition-colors duration-300 ${isActive ? "text-white" : "text-white/80 hover:text-white"
                                        }`}
                                >
                                    {link.name}

                                    {isActive && (
                                        <span className="absolute bottom-6 left-0 w-full h-[3px] bg-white rounded-t-sm" />
                                    )}
                                </a>
                            );
                        })}
                    </div>


                    <div className="hidden md:flex items-center">
                        <a
                            href="#contact_us"
                            className="relative border border-qutham-navy bg-qutham-white text-qutham-navy text-sm font-semibold px-6 py-2.5 rounded-lg shadow-md overflow-hidden hover:shadow-[0_0_0_4px_rgba(21,85,145,0.15),0_10px_30px_rgba(10,2,75,0.35)] hover:border-qutham-navy transition-all duration-300 active:scale-95 group"
                        >
                            <span className="absolute inset-0 bg-qutham-blue translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                            <span className="relative z-10 group-hover:text-white">Contact Us</span>
                        </a>
                    </div>

                    {/* Mobile Hamburguer Toggle */}
                    <div className="md:hidden flex items-center">
                        <button
                            type="button"
                            aria-label="Toggle navigation menu"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="inline-flex h-11 w-11 items-center justify-center rounded-md text-white/80 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/30 transition-colors"
                        >
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {mobileMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>

                </div>
            </div>

            {/* Mobile Sidebar Dropdown */}
            {
                mobileMenuOpen && (
                    <div className="md:hidden bg-qutham-navy border-t border-white/5 px-4 py-4 space-y-1 shadow-inner">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => {
                                    setActiveLink(link.name);
                                    setMobileMenuOpen(false);
                                }}
                                className={`block px-3 py-2.5 rounded-md text-base font-medium transition-colors ${activeLink === link.name ? "bg-white/10 text-white" : "text-white/70 hover:bg-white/5 hover:text-white"
                                    }`}
                            >
                                {link.name}
                            </a>
                        ))}
                        <div className="pt-4 border-t border-white/5">
                            <a
                                href="#contact_us"
                                onClick={() => setMobileMenuOpen(false)}
                                className="block text-center bg-qutham-blue text-white font-semibold py-3 rounded-lg transition-colors hover:bg-qutham-blue/90"
                            >
                                Contact Us
                            </a>
                        </div>
                    </div>
                )
            }
        </nav >
    );
}