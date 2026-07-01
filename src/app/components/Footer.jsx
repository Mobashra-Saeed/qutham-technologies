import Image from "next/image";

export default function Footer() {
    return (
        <footer className="relative w-full bg-qutham-navy text-white font-lato select-none overflow-hidden border-t border-white/5">
            {/* Top Minimal Graphic Line Matrix */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            {/* Changed: Adjusted vertical padding from py-16 to py-10 for a tighter, cleaner spacing block */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 items-start">
                    
                    <div className="md:col-span-5 space-y-5">
                        <a href="#home" className="flex items-center gap-3 group inline-flex">
                            <div className="flex items-center gap-3 transition-transform duration-500 ease-out group-hover:scale-[1.02]">
                                <div className="relative w-9 h-9 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-center p-1 transition-all duration-500 ease-out group-hover:border-white/20 group-hover:bg-white/[0.06] overflow-hidden">
                                    <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:animate-[footerShimmer_0.8s_ease-out_forwards]" />
                                    <Image
                                        src="/images/icon.png"
                                        alt="Qutham Logo"
                                        fill
                                        sizes="36px"
                                        className="object-contain p-1 transition-transform duration-500 ease-out group-hover:rotate-[-4deg]"
                                    />
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <span className="text-lg font-bold text-white tracking-tight">Qutham</span>
                                    <span className="text-lg font-bold text-white">Technologies</span>
                                </div>
                            </div>
                        </a>
                        <p className="text-sm text-white/60 leading-relaxed max-w-sm">
                            Architecting ultra-secure global digital solutions, custom applications, and strategic infrastructure frameworks.
                        </p>
                    </div>

                    {/* Quick Access Matrix (Right Columns) */}
                    <div className="grid grid-cols-2 gap-8 md:col-span-7 w-full md:justify-items-end">
                        
                        {/* Directory Links */}
                        <div className="space-y-4 md:text-left w-full max-w-[160px]">
                            <h4 className="text-xs font-bold uppercase tracking-widest text-white/50">Navigation</h4>
                            <ul className="space-y-2.5 text-sm">
                                {[
                                    { label: "Home", href: "#home" },
                                    { label: "About Us", href: "#about" },
                                    { label: "Courses", href: "#courses" },
                                    { label: "Why Choose Us", href: "#stats" },
                                    { label: "Contact Us", href: "#contact_us" },
                                ].map((item) => (
                                    <li key={item.label}>
                                        <a 
                                            href={item.href}
                                            className="text-white/60 hover:text-white transition-all duration-300 transform hover:translate-x-1 inline-block"
                                        >
                                            {item.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Node Sync Directory */}
                        <div className="space-y-4 md:text-left w-full max-w-[220px]">
                            <h4 className="text-xs font-bold uppercase tracking-widest text-white/50">Social Media Presence </h4>
                            <ul className="space-y-2.5 text-sm">
                                {[
                                    { name: "Instagram", url: "https://www.instagram.com/qutham_official" },
                                    { name: "Facebook", url: "https://www.facebook.com/QuthamOfficial" },
                                    { name: "LinkedIn", url: "https://pk.linkedin.com/company/qtuham-technologies" }
                                ].map((soc) => (
                                    <li key={soc.name}>
                                        <a 
                                            href={soc.url}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="text-white/60 hover:text-white transition-all duration-300 transform hover:translate-x-1 inline-block"
                                        >
                                            {soc.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </div>
                </div>

                {/* Changed: Brought margin-top down from mt-6 to mt-10 for proportional layout balancing */}
                <div className="mt-10 pt-4 border-t border-white/[0.04] flex flex-col sm:flex-row text-xs text-white/60">
                    <p>&copy; {new Date().getFullYear()} Qutham Technologies. All Rights Reserved.</p>
                </div>
            </div>

            {/* Micro-Animation Keyframe Block */}
            <style dangerouslySetInnerHTML={{__html: `
                @keyframes footerShimmer {
                    100% { transform: translateX(100%); }
                }
            `}} />
        </footer>
    );
}