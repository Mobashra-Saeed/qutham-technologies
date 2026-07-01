export default function Hero() {
    return (
        <section id="home" className="relative min-h-screen w-full select-none flex items-center justify-center overflow-hidden px-3 sm:px-4">

            {/* === CONTENT === */}
            <div className="relative z-10 w-full max-w-4xl mx-auto px-2 sm:px-6 lg:px-8 pt-20 sm:pt-16 pb-20 sm:pb-28 flex flex-col items-center text-center">

                <a
                    href="#contact_us"
                    className="opacity-0 animate-fade-up [animation-delay:0ms] inline-flex items-center gap-3 bg-white border border-qutham-navy/10 rounded-full px-4 py-1.5 shadow-sm mb-10 group transition-all duration-300 hover:border-qutham-blue/30 hover:shadow-md mx-auto cursor-pointer"
                >
                    <span className="relative w-2 h-2 rounded-full bg-qutham-blue">
                        <span className="absolute inset-0 rounded-full bg-qutham-blue animate-ping opacity-75" />
                    </span>
                    <span className="text-xs font-medium text-qutham-navy/80 tracking-wide">
                        Your Future is just a click away.{" "}
                        <span className="font-semibold text-qutham-navy group-hover:text-qutham-blue transition-colors">
                            Enroll Now
                        </span>
                    </span>
                </a>

                <div className="space-y-1 max-w-3xl">
                    <p className="opacity-0 animate-fade-up [animation-delay:100ms] text-xs font-lato tracking-widest text-qutham-blue uppercase font-bold">
                        — We Build Dreams that Inspire
                    </p>

                    <h1 className="opacity-0 animate-fade-up [animation-delay:200ms] text-4xl xs:text-5xl sm:text-6xl md:text-7xl font-black text-qutham-navy tracking-tight leading-[1.05] sm:leading-[1.1]">
                        Qutham
                        <span className="block sm:inline text-transparent bg-clip-text bg-gradient-to-r from-qutham-blue via-qutham-navy to-qutham-blue sm:ml-4 bg-[length:200%_auto] animate-gradient-shift">
                            Technologies.
                        </span>
                    </h1>

                    <p className="opacity-0 animate-fade-up [animation-delay:300ms] text-sm sm:text-base text-qutham-navy/70 leading-relaxed max-w-xl mx-auto font-normal">
                        At Qutham Tech, We Craft Innovative Digital Solutions and Empower the Next Generation of Developers with Expert IT Courses.
                    </p>
                </div>

                <div className="opacity-0 animate-fade-up [animation-delay:400ms] flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-8 w-full sm:w-auto">

                    <a
                        href="#courses"
                        className="relative bg-qutham-navy text-white text-sm font-semibold px-6 py-3 rounded-lg shadow-md overflow-hidden hover:shadow-lg hover:shadow-qutham-blue/30 transition-all duration-300 active:scale-95 group"
                    >
                        <span className="absolute inset-0 bg-qutham-blue translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                        <span className="relative z-10">Choose Courses</span>
                    </a>
                    <a
                        href="#contact_us"
                        className="text-qutham-navy/80 hover:text-qutham-navy text-sm font-semibold px-4 py-3 flex items-center gap-1 group transition-colors"
                    >
                        Contact Us
                        <span className="transform transition-transform group-hover:translate-x-1">→</span>
                    </a>
                </div>
            </div>
        </section>
    );
}