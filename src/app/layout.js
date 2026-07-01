import { Lato } from "next/font/google";
import "./globals.css";
import SiteBackground from "./components/SiteBackground";

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"], 
  display: "swap", 
});

export const metadata = {
  title: "Qutham Technologies | Digital Solutions & Tech Courses",
  description: "We build modern web and mobile applications, and empower the next generation of developers through expert IT courses.",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
        <body className={`${lato.className} relative min-h-screen bg-transparent antialiased`}>
            <SiteBackground />
            <main className="relative z-10">{children}</main>
        </body>
    </html>
  );
}