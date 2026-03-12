import { ArrowUpRight, TrendingUp } from "lucide-react";
import { useRef, useState, useEffect } from "react";

const projects = [
  {
    id: "P001",
    title: "Smart Healthcare Monitoring with Raspberry Pi & ML",
    category: "Healthcare Technology",
    categoryClass: "tag-health",
    date: "Mar 2023",
    description:
      "Developed a fully operational medical monitoring system using advanced machine learning techniques, cloud storage models, and Raspberry Pi hardware. Real-time patient vitals tracking with intelligent anomaly detection.",
    highlights: ["Best Project — 97% mentor votes", "92% customer satisfaction (A+)", "75% community engagement increase"],
    tags: ["Raspberry Pi", "Machine Learning", "IoT", "Healthcare", "Python"],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80&fit=crop",
    size: "large",
  },
  {
    id: "P002",
    title: "CO₂ Emission Calculator — Environmental Analytics Platform",
    category: "Data Engineering",
    categoryClass: "tag-tech",
    date: "Jan 2023",
    description: "Environmental analytics platform supporting 250 concurrent users with real-time CO₂ footprint tracking and gamified sustainability leagues.",
    highlights: ["94% calculation accuracy", "45% engagement increase", "12 hrs saved per week"],
    tags: ["SQL", "Angular", "Data Analytics", "Gamification"],
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&q=80&fit=crop",
    size: "small",
  },
  {
    id: "P003",
    title: "AI-Powered Medical Triage System",
    category: "AI Product Management",
    categoryClass: "tag-ai",
    date: "2024",
    description: "Designing an AI-driven triage system for Indian tier-2 hospitals using NLP, RAG-powered clinical knowledge retrieval, and AI guardrails for patient prioritization.",
    highlights: ["RAG-powered clinical knowledge base", "AI guardrails for safety", "30% wait time reduction target"],
    tags: ["RAG", "NLP", "LLM", "Healthcare", "AI Guardrails"],
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&q=80&fit=crop",
    size: "small",
  },
  {
    id: "P004",
    title: "n8n AI Automation Workflows for Healthcare Ops",
    category: "AI Automation",
    categoryClass: "tag-tech",
    date: "2025",
    description: "Intelligent automation workflows using n8n to streamline hospital administrative tasks — scheduling, follow-up reminders, and LLM-powered clinical report summarization.",
    highlights: ["8+ automated hospital workflows", "LLM-powered report summarization", "60% admin time reduction"],
    tags: ["n8n", "AI Automation", "LLM Integration", "No-Code"],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80&fit=crop",
    size: "small",
  },
];

// Tilt card — disabled on touch devices
const TiltCard = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isTouch = typeof window !== "undefined" && navigator.maxTouchPoints > 0;

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isTouch) return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(800px) rotateY(${x * 6}deg) rotateX(${-y * 6}deg) scale(1.02)`;
  };

  const handleLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "perspective(800px) rotateY(0deg) rotateX(0deg) scale(1)";
  };

  return (
    <div
      ref={ref}
      className={className}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ transition: "transform 0.3s ease", willChange: "transform" }}
    >
      {children}
    </div>
  );
};

const RevealCard = ({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold: 0.08 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} className={`reveal ${visible ? "visible" : ""} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
};

const ProjectCard = ({ project, delay = 0 }: { project: typeof projects[0]; delay?: number }) => (
  <RevealCard delay={delay} className="h-full">
    <TiltCard className="group relative rounded-3xl sm:rounded-4xl overflow-hidden h-full">
      <div
        className="relative overflow-hidden bg-muted rounded-3xl sm:rounded-4xl w-full"
        style={{ aspectRatio: project.size === "large" ? "16/9" : "4/3" }}
      >
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-all duration-500" />

        {/* Content */}
        <div className="absolute inset-0 p-4 sm:p-6 md:p-8 flex flex-col justify-between">
          <div className="flex items-start justify-between gap-2">
            <span className={`px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-medium backdrop-blur-md font-sans ${project.categoryClass}`}>
              {project.category}
            </span>
            <span className="px-2 sm:px-3 py-1 sm:py-1.5 rounded-full bg-white/20 backdrop-blur-md text-[10px] sm:text-xs font-medium text-white border border-white/30 font-sans shrink-0">
              {project.date}
            </span>
          </div>

          <div className="flex items-end justify-between gap-3">
            <div className="flex-1 min-w-0">
              <span className="text-white/40 text-[10px] font-mono tracking-widest block mb-1.5">{project.id}</span>
              <h3 className={`text-white font-bold leading-tight font-serif ${project.size === "large" ? "text-lg sm:text-2xl md:text-3xl" : "text-base sm:text-lg md:text-xl"}`}>
                {project.title}
              </h3>
              {project.size === "large" && (
                <p className="text-white/70 text-xs sm:text-sm mt-1.5 leading-relaxed font-sans line-clamp-2 hidden sm:block">
                  {project.description}
                </p>
              )}
              {/* Highlights on hover */}
              <div className="flex flex-col gap-1 mt-2 max-h-0 group-hover:max-h-24 overflow-hidden transition-all duration-500">
                {project.highlights.slice(0, 2).map((h) => (
                  <div key={h} className="flex items-center gap-1.5">
                    <TrendingUp size={9} className="text-white/60 shrink-0" />
                    <span className="text-white/70 text-[10px] font-sans">{h}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-1 sm:gap-1.5 mt-2 sm:mt-3">
                {project.tags.slice(0, 4).map((tag) => (
                  <span key={tag} className="px-1.5 sm:px-2 py-0.5 rounded-full bg-white/15 backdrop-blur-sm text-white/80 text-[9px] sm:text-[10px] font-medium border border-white/20 font-sans">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Floating arrow */}
        <div className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6 floating-button w-8 h-8 sm:w-10 sm:h-10 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
          <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
        </div>
      </div>
    </TiltCard>
  </RevealCard>
);

const Projects = () => (
  <section id="projects" className="py-8 sm:py-10 px-3 sm:px-4 relative z-10">
    <div className="max-w-5xl mx-auto">
      <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground font-sans mb-4">
        Projects &amp; Case Studies
      </p>
      <div className="flex items-end justify-between mb-4 sm:mb-5">
        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold leading-tight text-foreground">
          Work That Creates <em className="not-italic text-foreground/60">Real Impact</em>
        </h2>
        <a href="#contact" className="hidden sm:flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors font-sans shrink-0 ml-4">
          Collaborate →
        </a>
      </div>

      {/* Mobile: single column stack; tablet+: grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
        <div className="sm:col-span-2 md:col-span-2">
          <ProjectCard project={projects[0]} delay={0} />
        </div>
        <div>
          <ProjectCard project={projects[1]} delay={100} />
        </div>
        <div>
          <ProjectCard project={projects[2]} delay={150} />
        </div>
        <div>
          <ProjectCard project={projects[3]} delay={200} />
        </div>
      </div>
    </div>
  </section>
);

export default Projects;
