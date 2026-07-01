"use client";

import { useState } from "react";

export default function ContactUs() {
    const [formState, setFormState] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: ""
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormState(prev => ({ ...prev, [name]: value }));
    };

    return (
        <section 
            id="contact_us" 
            className="relative scroll-mt-28 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 select-none overflow-hidden bg-white"
        >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start max-w-6xl mx-auto">
                
                {/* === LEFT COLUMN: COMMUNICATIONS PLATFORM === */}
                <div className="lg:col-span-5 space-y-10 text-left">
                    <div className="space-y-3">
                        <p className="text-xs font-lato tracking-widest text-qutham-blue uppercase font-bold">
                            — Contact Us
                        </p>
                        <h2 className="text-4xl sm:text-5xl font-black text-qutham-navy tracking-tight leading-[1.1]">
                            Let’s Build Something <span className="text-qutham-blue">Extraordinary.</span>
                        </h2>
                        <p className="text-sm text-qutham-navy/70 leading-relaxed max-w-sm pt-2">
                            Connect With Your Secure Future Now!
                        </p>
                    </div>

                    {/* Official Node Data Channels */}
                    <div className="space-y-6 pt-2">
                        {/* Website Channel */}
                        <div className="flex items-start gap-4">
                            <div className="p-2.5 rounded-xl bg-qutham-blue/5 border border-qutham-blue/10 text-qutham-blue shadow-sm">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                                    <circle cx="12" cy="12" r="10" />
                                    <path d="M2 12h20" />
                                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10Z" />
                                </svg>
                            </div>
                            <div>
                                <h4 className="text-[11px] font-lato font-bold uppercase tracking-wider text-qutham-navy/40">Website</h4>
                                <a href="https://qutham.com/" target="_blank" rel="noreferrer" className="text-sm font-semibold text-qutham-navy hover:text-qutham-blue transition-colors duration-200 block mt-0.5">
                                    qutham.com
                                </a>
                            </div>
                        </div>

                        {/* Consolidated Social Verification Node Links */}
                        <div className="flex items-start gap-4">
                            <div className="p-2.5 rounded-lg bg-qutham-blue/5 border border-qutham-blue/10 text-qutham-blue">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                                    <circle cx="12" cy="12" r="10" />
                                    <line x1="2" y1="12" x2="22" y2="12" />
                                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                                </svg>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-[11px] font-mono font-bold uppercase tracking-wider text-qutham-navy/40">Social Channels</h4>
                                <div className="flex flex-col gap-1.5 pt-0.5">
                                    <a href="https://www.instagram.com/qutham_official" target="_blank" rel="noreferrer" className="text-sm font-semibold text-qutham-navy hover:text-qutham-blue transition-colors duration-200 block">
                                        instagram.com/qutham_official
                                    </a>
                                    <a href="https://www.facebook.com/QuthamOfficial" target="_blank" rel="noreferrer" className="text-sm font-semibold text-qutham-navy hover:text-qutham-blue transition-colors duration-200 block">
                                        facebook.com/QuthamOfficial
                                    </a>
                                    <a href="https://pk.linkedin.com/company/qtuham-technologies" target="_blank" rel="noreferrer" className="text-sm font-semibold text-qutham-navy hover:text-qutham-blue transition-colors duration-200 block">
                                        linkedin.com/company/qutham-tech
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* === RIGHT COLUMN: DATA ACQUISITION FORM === */}
                <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 border border-qutham-navy/15 shadow-[0_8px_28px_rgba(10,2,75,0.05)] hover:border-qutham-blue/30 hover:shadow-[0_18px_50px_rgba(21,85,145,0.18)] hover:-translate-y-1 transition-all duration-500 ease-out relative">
                    
                    <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="space-y-1.5 text-left">
                                <label className="text-[11px] font-lato font-bold text-qutham-navy/60 uppercase tracking-wider">First Name *</label>
                                <input 
                                    type="text" 
                                    name="firstName"
                                    value={formState.firstName}
                                    onChange={handleInputChange}
                                    placeholder=" Muhammad" 
                                    className="w-full bg-qutham-navy/[0.01] border border-qutham-navy/15 rounded-xl px-4 py-2.5 text-sm font-lato text-qutham-navy placeholder:text-qutham-navy/30 focus:outline-none focus:border-qutham-blue focus:ring-2 focus:ring-qutham-blue/10 focus:bg-white transition-all duration-200"
                                    required 
                                />
                            </div>
                            <div className="space-y-1.5 text-left">
                                <label className="text-[11px] font-lato font-bold text-qutham-navy/60 uppercase tracking-wider">Last Name *</label>
                                <input 
                                    type="text" 
                                    name="lastName"
                                    value={formState.lastName}
                                    onChange={handleInputChange}
                                    placeholder=" Khan" 
                                    className="w-full bg-qutham-navy/[0.01] border border-qutham-navy/15 rounded-xl px-4 py-2.5 text-sm font-lato text-qutham-navy placeholder:text-qutham-navy/30 focus:outline-none focus:border-qutham-blue focus:ring-2 focus:ring-qutham-blue/10 focus:bg-white transition-all duration-200"
                                    required 
                                />
                            </div>
                        </div>

                        <div className="space-y-1.5 text-left">
                            <label className="text-[11px] font-lato font-bold text-qutham-navy/60 uppercase tracking-wider">Your Work Email *</label>
                            <input 
                                type="text" 
                                name="email"
                                value={formState.email}
                                onChange={handleInputChange}
                                placeholder="name@gmail.com" 
                                className="w-full bg-qutham-navy/[0.01] border border-qutham-navy/15 rounded-xl px-4 py-2.5 text-sm font-lato text-qutham-navy placeholder:text-qutham-navy/30 focus:outline-none focus:border-qutham-blue focus:ring-2 focus:ring-qutham-blue/10 focus:bg-white transition-all duration-200"
                                required 
                            />
                        </div>

                        <div className="space-y-1.5 text-left">
                            <label className="text-[11px] font-lato font-bold text-qutham-navy/60 uppercase tracking-wider">Contact Number</label>
                            <input 
                                type="text" 
                                name="phone"
                                value={formState.phone}
                                onChange={handleInputChange}
                                placeholder="+92 300 1234567" 
                                className="w-full bg-qutham-navy/[0.01] border border-qutham-navy/15 rounded-xl px-4 py-2.5 text-sm font-lato text-qutham-navy placeholder:text-qutham-navy/30 focus:outline-none focus:border-qutham-blue focus:ring-2 focus:ring-qutham-blue/10 focus:bg-white transition-all duration-200"
                            />
                        </div>

                        <div className="space-y-1.5 text-left">
                            <label className="text-[11px] font-lato font-bold text-qutham-navy/60 uppercase tracking-wider">Resolve any Queries *</label>
                            <textarea 
                                name="message"
                                value={formState.message}
                                onChange={handleInputChange}
                                rows={4}
                                placeholder="Feel Free to Reach Out For Any Queries or Confusions you have..." 
                                className="w-full bg-qutham-navy/[0.01] border border-qutham-navy/15 rounded-xl px-4 py-2.5 text-sm font-lato text-qutham-navy placeholder:text-qutham-navy/30 focus:outline-none focus:border-qutham-blue focus:ring-2 focus:ring-qutham-blue/10 focus:bg-white transition-all duration-200 resize-none"
                                required
                            />
                        </div>

                        <div className="pt-2 text-right">
                            <button 
                                type="submit" 
                                className="relative inline-flex items-center gap-3 bg-qutham-navy text-white font-lato text-xs font-bold tracking-widest uppercase px-6 py-3 rounded-xl shadow-md overflow-hidden hover:shadow-[0_12px_30px_rgba(21,85,145,0.35)] active:scale-[0.98] transition-all duration-300 cursor-pointer group"
                            >
                                <span className="absolute inset-0 bg-qutham-blue translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                                <span className="relative z-10">Send Message</span>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="relative z-10 w-3.5 h-3.5">
                                    <line x1="22" y1="2" x2="11" y2="13" />
                                    <polygon points="22 2 15 22 11 13 2 9 22 2" />
                                </svg>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}