import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import MBABackground from "@/components/MBABackground";
import CustomCursor from "@/components/CustomCursor";
import MarqueeTicker from "@/components/MarqueeTicker";
import ScrollProgressBar from "@/components/ScrollProgressBar";

const Index = () => (
  <div className="min-h-screen bg-background text-foreground relative">
    {/* Scroll progress bar */}
    <ScrollProgressBar />

    {/* MBA-themed animated background — floating charts, formulas, strategy icons */}
    <MBABackground />

    {/* Custom magnetic cursor */}
    <CustomCursor />

    {/* Page content */}
    <Navbar />
    <Hero />

    {/* Scrolling skill ticker between Hero and About */}
    <MarqueeTicker />

    <About />
    <Skills />
    <Projects />
    <Experience />
    <Blog />
    <Contact />
    <Footer />
  </div>
);

export default Index;
