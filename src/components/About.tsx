import { MapPin, Phone, Mail, Brain, HeartPulse, TrendingUp, BookOpen, ArrowUpRight } from "lucide-react";
import { useRef, useState, useEffect } from "react";

const pillars = [
  {
    icon: Brain,
    title: "AI Product Management",
    desc: "Designing AI-driven products using prompt engineering, RAG pipelines, LLM fine-tuning, and no-code AI automation tools — translating cutting-edge AI into real business value.",
    tag: "tag-ai",
    tagLabel: "AI / LLM",
  },
  {
    icon: HeartPulse,
    title: "Medical Management",
    desc: "Applying healthcare informatics, IoT-based patient monitoring, and data-driven clinical decision support to modernize healthcare delivery across India.",
    tag: "tag-health",
    tagLabel: "Healthcare",
  },
  {
    icon: TrendingUp,
    title: "Strategic Business Thinking",
    desc: "MBA-level frameworks for market analysis, competitive strategy, and cross-functional leadership — translating vision into executable roadmaps at NIT Kurukshetra.",
    tag: "tag-mba",
    tagLabel: "Strategy",
  },
  {
    icon: BookOpen,
    title: "Research & Innovation",
    desc: "Published researcher in healthcare IoT. Committed to applying technology where it matters most — in clinical environments that demand precision and reliability.",
    tag: "tag-research",
    tagLabel: "Research",
  },
];

const RevealCard = ({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} className={`reveal ${visible ? "visible" : ""} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
};

const About = () => (
  <section id="about" className="py-10 px-4 relative z-10">
    <div className="max-w-5xl mx-auto">

      <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground font-sans mb-4">
        About Me
      </p>

      {/* Main about card */}
      <RevealCard className="rounded-4xl bg-card border border-border overflow-hidden mb-5 glow-card">
        <div className="grid md:grid-cols-5 gap-0">

          {/* Left — narrative */}
          <div className="md:col-span-3 p-8 md:p-12 flex flex-col justify-center gap-5 relative overflow-hidden">
            {/* Animated blob background */}
            <div
              className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-muted/60 pointer-events-none"
              style={{ animation: "blob 10s ease-in-out infinite", opacity: 0.5 }}
            />
            <div className="relative z-10">
              <h2 className="font-serif text-3xl md:text-4xl font-bold leading-tight text-foreground mb-5">
                Where Technology Meets<br />
                <em className="not-italic text-foreground/60">Healthcare Strategy</em>
              </h2>
              <div className="space-y-4 text-muted-foreground text-sm leading-relaxed font-sans">
                <p>
                  I am an MBA student at <strong className="text-foreground">NIT Kurukshetra</strong> with
                  a dual specialization in AI Product Management and Medical Management. With a B.Tech (EEE)
                  from Amrita School of Engineering, Bangalore, and over four years of hands-on experience
                  spanning full-stack development, machine learning, and healthcare IoT, I bring a uniquely
                  interdisciplinary perspective to every challenge.
                </p>
                <p>
                  My research publication on{" "}
                  <em className="text-foreground font-medium">"Implementation of Healthcare Monitoring using Raspberry Pi"</em>{" "}
                  exemplifies my commitment to applying technology where it matters most — in clinical
                  environments that demand precision, reliability, and user-centric design.
                </p>
                <p>
                  My goal is to join forward-thinking organizations — healthcare enterprises, AI/tech companies,
                  or consulting firms — where I can drive meaningful transformation leveraging modern AI tools
                  like n8n, RAG pipelines, and LLM-based product systems.
                </p>
              </div>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-semibold w-fit hover:opacity-90 hover:scale-105 transition-all font-sans mt-5 shadow-lg hover:shadow-xl"
              >
                Get In Touch <ArrowUpRight size={13} />
              </a>
            </div>
          </div>

          {/* Right — info cards */}
          <div className="md:col-span-2 bg-muted/40 border-t md:border-t-0 md:border-l border-border p-8 flex flex-col justify-center gap-3">
            {[
              { icon: MapPin, label: "Location", value: "Bangalore, India" },
              { icon: Phone,  label: "Phone",    value: "+91 9490133147" },
              { icon: Mail,   label: "Email",    value: "gmddastageer@gmail.com" },
            ].map(({ icon: Icon, label, value }, i) => (
              <div
                key={label}
                className="flex items-center gap-3 p-4 rounded-2xl bg-background border border-border hover:border-foreground/30 hover:shadow-md transition-all duration-300 hover:translate-x-1 group"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="w-9 h-9 rounded-full bg-muted flex items-center justify-center shrink-0 group-hover:bg-foreground group-hover:text-background transition-all duration-300">
                  <Icon size={14} className="text-muted-foreground group-hover:text-background transition-colors" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-muted-foreground font-sans">{label}</p>
                  <p className="text-sm font-semibold text-foreground font-sans truncate">{value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealCard>

      {/* Pillars grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {pillars.map((p, i) => (
          <RevealCard key={p.title} delay={i * 100} className="group relative rounded-3xl bg-card border border-border overflow-hidden glow-card h-full">
            <div className="p-6 flex flex-col gap-3 h-full min-h-[200px]">
              <div className="flex items-center justify-between">
                <span className={`px-3 py-1 rounded-full text-xs font-medium font-sans ${p.tag}`}>
                  {p.tagLabel}
                </span>
                <div className="floating-button w-9 h-9 opacity-0 group-hover:opacity-100 transition-all duration-300 rotate-0 group-hover:rotate-12">
                  <p.icon size={14} />
                </div>
              </div>
              <h3 className="font-serif text-base font-bold text-foreground leading-snug">{p.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed font-sans flex-1">{p.desc}</p>
            </div>
          </RevealCard>
        ))}
      </div>
    </div>
  </section>
);

export default About;
