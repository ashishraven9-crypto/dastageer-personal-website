import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useState, useEffect, useRef } from "react";

const skillCategories = [
  {
    title: "Generative AI & LLM Engineering",
    tagLabel: "AI / LLM",
    tagClass: "tag-ai",
    description: "Core AI APIs, agent frameworks, and LLM engineering for building intelligent products",
    skills: [
      "Prompt Engineering Strategy",
      "Retrieval Augmented Generation (RAG)",
      "Model Fine-tuning vs Prompting",
      "AI Hallucination Mitigation",
      "AI Guardrails",
      "LLM Orchestration",
      "OpenAI API / GPT-4",
      "Anthropic Claude API",
      "Google Gemini API",
      "Hugging Face",
      "LangChain",
      "LangGraph",
      "LlamaIndex",
      "CrewAI",
      "AutoGen",
      "Semantic Kernel",
    ],
  },
  {
    title: "Vector Databases & AI Memory",
    tagLabel: "Vector DB",
    tagClass: "tag-research",
    description: "AI memory, semantic search, and vector storage for smart AI applications",
    skills: [
      "Pinecone",
      "Weaviate",
      "ChromaDB",
      "Supabase Vector",
      "Embeddings",
      "Semantic Search",
      "Knowledge Graphs",
    ],
  },
  {
    title: "AI Automation & No-Code Tools",
    tagLabel: "Automation",
    tagClass: "tag-tech",
    description: "Modern AI-powered automation, workflow orchestration, and development platforms",
    skills: [
      "n8n (AI Workflow Automation)",
      "Make.com",
      "Zapier",
      "Webhooks & Trigger Flows",
      "Cursor (AI Code Editor)",
      "GitHub Copilot",
      "Windsurf IDE",
      "Lovable (AI Web Builder)",
      "Antigravity",
      "OpenClaw",
      "Flowise",
      "Dify",
      "Bolt.new",
      "Notion AI",
      "Perplexity (Research)",
    ],
  },
  {
    title: "Frontend Development",
    tagLabel: "Frontend",
    tagClass: "tag-strategy",
    description: "Modern web and mobile frontend stack for building production-grade applications",
    skills: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "TypeScript",
      "React Native",
      "Expo",
      "Webflow",
      "Framer",
      "REST APIs",
      "Webhooks",
      "JSON",
      "HTTP Methods (GET/POST)",
    ],
  },
  {
    title: "Backend, Database & Auth",
    tagLabel: "Backend",
    tagClass: "tag-mba",
    description: "Server-side architecture, databases, and authentication systems",
    skills: [
      "Supabase",
      "PostgreSQL",
      "Firebase",
      "Prisma ORM",
      "Redis (Caching)",
      "Node.js",
      "JWT Authentication",
      "OAuth 2.0",
      "REST API Design",
      "SQL / DBMS",
      "MERN Stack",
    ],
  },
  {
    title: "AI Product Management",
    tagLabel: "Strategy",
    tagClass: "tag-leadership",
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
      "PostHog Analytics",
      "Mixpanel",
      "Google Analytics",
    ],
  },
  {
    title: "Medical & Healthcare Tech",
    tagLabel: "Healthcare",
    tagClass: "tag-health",
    description: "Healthcare informatics, IoT, and clinical technology systems",
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
    title: "Payments, Analytics & Monitoring",
    tagLabel: "Payments",
    tagClass: "tag-ai",
    description: "Payment integrations, user analytics, and application monitoring",
    skills: [
      "Razorpay (India)",
      "Stripe (Global)",
      "Subscription Handling",
      "Payment Webhooks",
      "Google Analytics",
      "PostHog",
      "Mixpanel",
      "Sentry (Error Tracking)",
      "LogRocket (Session Replay)",
    ],
  },
  {
    title: "DevOps, Security & Testing",
    tagLabel: "DevOps",
    tagClass: "tag-strategy",
    description: "Deployment, CI/CD, security fundamentals, and API testing",
    skills: [
      "Docker",
      "GitHub Actions (CI/CD)",
      "Vercel",
      "Netlify",
      "Expo Build System",
      "Capacitor",
      "Environment Variables",
      "OWASP Basics",
      "Role-Based Access Control",
      "Encryption Basics",
      "Jest (Testing)",
      "Postman (API Testing)",
      "AWS IoT",
      "CDN Concepts",
    ],
  },
  {
    title: "Data & Machine Learning",
    tagLabel: "Data",
    tagClass: "tag-research",
    description: "Data-driven decision making, ML, and business intelligence",
    skills: [
      "Python",
      "Machine Learning",
      "Deep Learning",
      "Microsoft Power BI",
      "Data Analysis",
      "Pandas / NumPy",
      "Scikit-learn",
    ],
  },
];

const certs = [
  { name: "Prompt Engineering for Developers",               issuer: "DeepLearning.AI",     tag: "tag-ai" },
  { name: "LangChain for LLM Application Development",       issuer: "DeepLearning.AI",     tag: "tag-ai" },
  { name: "Google — Fundamentals of Digital Marketing",      issuer: "Google",              tag: "tag-leadership" },
  { name: "AWS IoT Device Management",                        issuer: "Amazon Web Services", tag: "tag-tech" },
  { name: "MITRE ATT&CK Defender™ — Cyber Threat Intel",    issuer: "Cybrary",             tag: "tag-strategy" },
  { name: "12-Factor App",                                    issuer: "Kode Kloud",          tag: "tag-tech" },
  { name: "Cybersecurity Virtual Experience Program",         issuer: "Forage",              tag: "tag-strategy" },
  { name: "Multi-Cloud Network Associate",                    issuer: "Aviatrix",            tag: "tag-tech" },
  { name: "CCNA — Routing & Switching",                      issuer: "The Digital Adda",    tag: "tag-tech" },
  { name: "Introduction to Physical Computing",               issuer: "Lancaster University",tag: "tag-health" },
];

const competencies = [
  { name: "Generative AI & Prompt Engineering",       pct: 88 },
  { name: "AI Automation (n8n, Cursor, Lovable)",     pct: 85 },
  { name: "AI Agent Frameworks (LangChain, CrewAI)",  pct: 80 },
  { name: "AI Product Management",                    pct: 82 },
  { name: "Healthcare Technology",                    pct: 80 },
  { name: "Full Stack Development (React/Next.js)",   pct: 84 },
  { name: "Backend & Database (Supabase/Postgres)",   pct: 76 },
  { name: "Data Analysis & ML",                       pct: 78 },
];

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

const Skills = () => {
  const { ref: barsRef, visible: barsVisible } = useScrollReveal(0.2);

  return (
    <section id="skills" className="py-8 sm:py-10 px-3 sm:px-4 relative z-10">
      <div className="max-w-5xl mx-auto">

        <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground font-sans mb-4">
          Skills &amp; Expertise
        </p>

        {/* Section heading */}
        <RevealCard className="rounded-3xl sm:rounded-4xl bg-card border border-border p-6 sm:p-8 md:p-12 mb-4 sm:mb-5">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold leading-tight text-foreground mb-3">
            A Multidisciplinary <em className="not-italic text-foreground/60">Skill Stack</em>
          </h2>
          <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed font-sans max-w-2xl">
            From LLM engineering, AI agent frameworks, and vector databases to full-stack development,
            healthcare technology, and MBA-level strategy — a complete skill set built for the AI era.
          </p>
        </RevealCard>

        {/* Skill cards grid — 1 col mobile, 2 sm, 3 lg */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mb-4 sm:mb-5">
          {skillCategories.map((cat, i) => (
            <RevealCard key={cat.title} delay={i * 60} className="group rounded-2xl sm:rounded-3xl bg-card border border-border overflow-hidden glow-card h-full">
              <div className="p-4 sm:p-6 flex flex-col gap-2 sm:gap-3 h-full">
                <div className="flex items-center justify-between">
                  <span className={`px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs font-medium font-sans ${cat.tagClass}`}>
                    {cat.tagLabel}
                  </span>
                  <div className="floating-button w-7 h-7 sm:w-8 sm:h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowUpRight size={12} />
                  </div>
                </div>
                <h3 className="font-serif text-sm sm:text-base font-bold text-foreground leading-snug">{cat.title}</h3>
                <p className="text-[11px] sm:text-xs text-muted-foreground font-sans hidden sm:block">{cat.description}</p>
                <div className="flex flex-wrap gap-1 sm:gap-1.5 mt-1">
                  {cat.skills.map((skill) => (
                    <span key={skill} className="skill-pill text-[10px] sm:text-xs px-2 py-0.5 sm:px-2.5 sm:py-1">{skill}</span>
                  ))}
                </div>
              </div>
            </RevealCard>
          ))}
        </div>

        {/* Competency + Certifications — stack on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">

          {/* Animated competency bars */}
          <RevealCard className="rounded-2xl sm:rounded-3xl bg-card border border-border p-5 sm:p-6 md:p-8">
            <h3 className="font-serif text-base sm:text-lg font-bold text-foreground mb-4 sm:mb-5">Core Competency Levels</h3>
            <div ref={barsRef} className="space-y-3 sm:space-y-4">
              {competencies.map((item, i) => (
                <div key={item.name} style={{ transitionDelay: `${i * 100}ms` }}>
                  <div className="flex justify-between text-[10px] sm:text-xs mb-1 sm:mb-1.5 font-sans">
                    <span className="text-foreground font-medium truncate pr-2">{item.name}</span>
                    <span className="text-muted-foreground font-semibold shrink-0">{item.pct}%</span>
                  </div>
                  <AnimatedBar pct={item.pct} visible={barsVisible} />
                </div>
              ))}
            </div>
          </RevealCard>

          {/* Certifications */}
          <RevealCard delay={100} className="rounded-2xl sm:rounded-3xl bg-card border border-border p-5 sm:p-6 md:p-8">
            <h3 className="font-serif text-base sm:text-lg font-bold text-foreground mb-4 sm:mb-5">Certifications &amp; Training</h3>
            <div className="space-y-1.5 sm:space-y-2">
              {certs.map((cert, i) => (
                <div
                  key={cert.name}
                  className="flex items-start gap-2 sm:gap-3 p-2.5 sm:p-3 rounded-xl sm:rounded-2xl border border-border hover:border-foreground/20 transition-all duration-300 hover:translate-x-1 group"
                  style={{
                    background: "hsl(var(--beige-light))",
                    transitionDelay: `${i * 40}ms`,
                  }}
                >
                  <CheckCircle2 size={13} className="text-muted-foreground mt-0.5 shrink-0 group-hover:text-foreground transition-colors" />
                  <div className="min-w-0">
                    <p className="text-[11px] sm:text-xs font-semibold text-foreground font-sans leading-snug">{cert.name}</p>
                    <p className="text-[10px] sm:text-xs text-muted-foreground font-sans mt-0.5">{cert.issuer}</p>
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
