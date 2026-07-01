// 1. Extracted out of the JSX tree to prevent parsing/compilation bugs
const grainSvgData = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E";

const gridMask = "radial-gradient(circle at 50% 20%, black 0%, transparent 70%)";

export default function SiteBackground() {
    return (
        <div className="fixed inset-0 -z-10 bg-qutham-white overflow-hidden pointer-events-none">

            {/* Embedded CSS to ensure drift animations run flawlessly without changing your classes */}
            <style dangerouslySetInnerHTML={{ __html: `
                @keyframes driftSlow {
                    0% { transform: translate(-50%, 0px) scale(1); }
                    50% { transform: translate(-48%, -40px) scale(1.1); }
                    100% { transform: translate(-50%, 0px) scale(1); }
                }
                @keyframes driftMed {
                    0% { transform: translate(0px, 0px) scale(1); }
                    50% { transform: translate(-30px, 40px) scale(1.15); }
                    100% { transform: translate(0px, 0px) scale(1); }
                }
                @keyframes driftFast {
                    0% { transform: translate(0px, 0px) scale(1); }
                    50% { transform: translate(40px, -20px) scale(1.08); }
                    100% { transform: translate(0px, 0px) scale(1); }
                }
                .animate-drift-slow { animation: driftSlow 25s infinite ease-in-out; }
                .animate-drift-med { animation: driftMed 18s infinite ease-in-out; }
                .animate-drift-fast { animation: driftFast 14s infinite ease-in-out; }
            `}} />

            {/* Soft ambient light blobs — kept pale so it stays light-themed */}
            <div
                className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full blur-3xl opacity-[0.12] animate-drift-slow"
                style={{ background: "radial-gradient(circle, rgba(21,85,145,1) 0%, transparent 70%)" }}
            />
            <div
                className="absolute top-1/3 -left-40 w-[700px] h-[700px] rounded-full blur-3xl opacity-[0.08] animate-drift-med"
                style={{ background: "radial-gradient(circle, rgba(10,2,75,1) 0%, transparent 70%)" }}
            />
            <div
                className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full blur-3xl opacity-[0.10] animate-drift-fast"
                style={{ background: "radial-gradient(circle, rgba(21,85,145,1) 0%, transparent 70%)" }}
            />

            {/* Fine grid */}
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: "linear-gradient(rgba(10,2,75,1) 1px, transparent 1px), linear-gradient(90deg, rgba(10,2,75,1) 1px, transparent 1px)",
                    backgroundSize: "48px 48px",
                    WebkitMaskImage: gridMask,
                    maskImage: gridMask,
                }}
            />

            {/* Grain — Clean variable injected dynamically */}
            <div
                className="absolute inset-0 opacity-[0.08] mix-blend-overlay"
                style={{
                    backgroundImage: `url("${grainSvgData}")`,
                }}
            />
        </div>
    );
}