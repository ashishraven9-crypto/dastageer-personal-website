import { ArrowUpRight, Award, CheckCircle2 } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useState, useEffect, useRef } from "react";

const skillCategories = [
  {
    title: "Generative AI & LLM Engineering",
    tagLabel: "AI / LLM",
    tagClass: "tag-ai",
    description: "Cutting-edge AI tools and frameworks for building intelligent products",
    skills: [
      "Prompt Engineering Strategy",
      "Retrieval Augmented Generation (RAG)",
      "Model Fine-tuning vs Prompting",
      "AI Hallucination Mitigation",
      "AI Guardrails",
      "LLM Orchestration",
      "OpenAI API / GPT-4",
      "Gemini / Claude",
      "LangChain",
      "Vector Databases",
    ],
  },
  {
    title: "AI Automation & No-Code Tools",
    tagLabel: "Automation",
    tagClass: "tag-tech",
    description: "Modern AI-powered automation and development platforms",
    skills: [
      "n8n (AI Workflow Automation)",
      "Cursor (AI Code Editor)",
      "Lovable (AI Web Builder)",
      "Antigravity",
      "OpenClaw",
      "Make / Zapier",
      "Flowise",
      "Dify",
      "Bolt.new",
    ],
  },
  {
    title: "AI Product Management",
    tagLabel: "Strategy",
    tagClass: "tag-mba",
    description: "Strategic frameworks for building and scaling AI products",
    skills: [
      "AI Product Roadmapping",
      "Scrum / Agile",
      "Go-to-Market Strategy",
      "Comparative Market Analysis",
      "Root Cause Analysis",
      "User Story Mapping",
      "OKR Framework",
      "Product-Led Growth",
    ],
  },
  {
    title: "Medical & Healthcare Tech",
    tagLabel: "Healthcare",
    tagClass: "tag-health",
    description: "Healthcare informatics and clinical technology systems",
    skills: [
      "Healthcare IoT",
      "Raspberry Pi",
      "Clinical Decision Support",
      "Health Informatics",
      "Patient Monitoring Systems",
      "Medical Device Management",
      "Healthcare Analytics",
      "Digital Health Strategy",
    ],
  },
  {
    title: "Data & Analytics",
    tagLabel: "Data",
    tagClass: "tag-leadership",
    description: "Data-driven decision making and business intelligence",
    skills: [
      "Python",
      "Machine Learning",
      "Microsoft Power BI",
      "SQL / DBMS",
      "Data Analysis",
      "Deep Learning",
    ],
  },
  {
    title: "Engineering & DevOps",
    tagLabel: "Engineering",
    tagClass: "tag-strategy",
    description: "Full-stack development and cloud infrastructure",
    skills: [
      "React / Vue.js / Node.js",
      "Full Stack Development",
      "Docker / Kubernetes",
      "AWS IoT",
      "DevOps / CI-CD",
      "MERN Stack",
    ],
  },
];

const certs = [
  { name: "Prompt Engineering for Developers",                        issuer: "DeepLearning.AI",                          tag: "tag-ai" },
  { name: "LangChain for LLM Application Development",               issuer: "DeepLearning.AI",                          tag: "tag-ai" },
  { name: "Google — Fundamentals of Digital Marketing",              issuer: "Google",                                   tag: "tag-leadership" },
  { name: "AWS IoT Device Management",                                issuer: "Amazon Web Services",                      tag: "tag-tech" },
  { name: "MITRE ATT&CK Defender™ — Cyber Threat Intelligence",     issuer: "Cybrary",                                  tag: "tag-strategy" },
  { name: "12-Factor App",                                             issuer: "Kode Kloud",                               tag: "tag-tech" },
  { name: "Cybersecurity Virtual Experience Program",                  issuer: "Forage",                                   tag: "tag-strategy" },
  { name: "Multi-Cloud Network Associate",                             issuer: "Aviatrix",                                 tag: "tag-tech" },
  { name: "CCNA — Routing & Switching",                               issuer: "The Digital Adda",                         tag: "tag-tech" },
  { name: "Introduction to Physical Computing",                        issuer: "Lancaster University",                     tag: "tag-health" },
];

const competencies = [
  { name: "Generative AI & Prompt Engineering", pct: 88 },
  { name: "AI Automation (n8n, Cursor, Lovable)", pct: 85 },
  { name: "AI Product Management",               pct: 82 },
  { name: "Healthcare Technology",               pct: 80 },
  { name: "Full Stack Development",              pct: 84 },
  { name: "Data Analysis & ML",                  pct: 78 },
];

// Animated progress bar that fills when visible
const AnimatedBar = ({ pct, visible }: { pct: number; visible: boolean }) => {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    if (visible) {
      const t = setTimeout(() => setWidth(pct), 200);
      return () => clearTimeout(t);
    }
  }, [visible, pct]);
  return (
    <div className="progress-track">
      <div className="progress-fill" style={{ width: `${width}%` }} />
    </div>
  );
};

// Scroll-reveal wrapper
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
    <div
      ref={ref}
      className={`reveal ${visible ? "visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

const Skills = () => {
  const { ref: barsRef, visible: barsVisible } = useScrollReveal(0.2);

  return (
    <section id="skills" className="py-10 px-4 relative z-10">
      <div className="max-w-5xl mx-auto">

        <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground font-sans mb-4">
          Skills &amp; Expertise
        </p>

        {/* Section heading */}
        <RevealCard className="rounded-4xl bg-card border border-border p-8 md:p-12 mb-5">
          <h2 className="font-serif text-3xl md:text-4xl font-bold leading-tight text-foreground mb-3">
            A Multidisciplinary <em className="not-italic text-foreground/60">Skill Stack</em>
          </h2>
          <p className="text-muted-foreground text-sm leading-relaxed font-sans max-w-2xl">
            From cutting-edge LLM engineering and AI automation to healthcare technology and MBA-level strategy —
            a skill set built for the AI era.
          </p>
        </RevealCard>

        {/* Skill cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-5">
          {skillCategories.map((cat, i) => (
            <RevealCard key={cat.title} delay={i * 80} className="group rounded-3xl bg-card border border-border overflow-hidden glow-card h-full">
              <div className="p-6 flex flex-col gap-3 h-full">
                <div className="flex items-center justify-between">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium font-sans ${cat.tagClass}`}>
                    {cat.tagLabel}
                  </span>
                  <div className="floating-button w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowUpRight size={13} />
                  </div>
                </div>
                <h3 className="font-serif text-base font-bold text-foreground leading-snug">{cat.title}</h3>
                <p className="text-xs text-muted-foreground font-sans">{cat.description}</p>
                <div className="flex flex-wrap gap-1.5 mt-1">
                  {cat.skills.map((skill) => (
                    <span key={skill} className="skill-pill">{skill}</span>
                  ))}
                </div>
              </div>
            </RevealCard>
          ))}
        </div>

        {/* Competency + Certifications */}
        <div className="grid md:grid-cols-2 gap-4">

          {/* Animated competency bars */}
          <RevealCard className="rounded-3xl bg-card border border-border p-6 md:p-8">
            <h3 className="font-serif text-lg font-bold text-foreground mb-5">Core Competency Levels</h3>
            <div ref={barsRef} className="space-y-4">
              {competencies.map((item, i) => (
                <div key={item.name} style={{ transitionDelay: `${i * 100}ms` }}>
                  <div className="flex justify-between text-xs mb-1.5 font-sans">
                    <span className="text-foreground font-medium">{item.name}</span>
                    <span className="text-muted-foreground font-semibold">{item.pct}%</span>
                  </div>
                  <AnimatedBar pct={item.pct} visible={barsVisible} />
                </div>
              ))}
            </div>
          </RevealCard>

          {/* Certifications */}
          <RevealCard delay={100} className="rounded-3xl bg-card border border-border p-6 md:p-8">
            <h3 className="font-serif text-lg font-bold text-foreground mb-5">Certifications &amp; Training</h3>
            <div className="space-y-2">
              {certs.map((cert, i) => (
                <div
                  key={cert.name}
                  className="flex items-start gap-3 p-3 rounded-2xl bg-muted/50 border border-border hover:bg-muted hover:border-foreground/20 transition-all duration-300 hover:translate-x-1 group"
                  style={{ transitionDelay: `${i * 40}ms` }}
                >
                  <CheckCircle2 size={14} className="text-muted-foreground mt-0.5 shrink-0 group-hover:text-foreground transition-colors" />
                  <div>
                    <p className="text-xs font-semibold text-foreground font-sans leading-snug">{cert.name}</p>
                    <p className="text-xs text-muted-foreground font-sans mt-0.5">{cert.issuer}</p>
                  </div>
                </div>
              ))}
            </div>
          </RevealCard>
        </div>
      </div>
    </section>
  );
};

export default Skills;
