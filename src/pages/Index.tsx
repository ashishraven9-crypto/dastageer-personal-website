import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ParticleBackground from "@/components/ParticleBackground";
import CustomCursor from "@/components/CustomCursor";
import MarqueeTicker from "@/components/MarqueeTicker";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import { ABProvider, useAB } from "@/contexts/ABContext";

// Inner component that reads variant from context
const PortfolioContent = () => {
  const { variant } = useAB();

  // Map variant to CSS class
  const variantClass =
    variant === "midnight" ? "variant-midnight" :
    variant === "forest"   ? "variant-forest"   : "";

  return (
    <div className={`min-h-screen bg-background text-foreground relative transition-colors duration-700 ${variantClass}`}>
      {/* Scroll progress bar */}
      <ScrollProgressBar />

      {/* Animated particle background */}
      <ParticleBackground />

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
};

const Index = () => (
  <ABProvider>
    <PortfolioContent />
  </ABProvider>
);

export default Index;
