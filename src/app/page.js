import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import About from "./components/About";
import Courses from "./components/Courses";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";


export default function Home() {
  return (
    <main className="min-h-screen pt-20">
      <Navbar />
      <Hero />
      <About />
      <Stats />
      <Courses />
      <ContactUs />
      <Footer />
    </main>
  );
}
