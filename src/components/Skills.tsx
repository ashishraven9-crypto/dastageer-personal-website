import { ArrowUpRight } from "lucide-react";

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
  { name: "Prompt Engineering for Developers",                                   issuer: "DeepLearning.AI",                          tag: "tag-ai" },
  { name: "LangChain for LLM Application Development",                          issuer: "DeepLearning.AI",                          tag: "tag-ai" },
  { name: "Google — Fundamentals of Digital Marketing",                         issuer: "Google",                                   tag: "tag-leadership" },
  { name: "AWS IoT Device Management",                                           issuer: "Amazon Web Services",                      tag: "tag-tech" },
  { name: "MITRE ATT&CK Defender™ (MAD) — Cyber Threat Intelligence",          issuer: "Cybrary",                                  tag: "tag-strategy" },
  { name: "12-Factor App",                                                        issuer: "Kode Kloud",                               tag: "tag-tech" },
  { name: "Cybersecurity Virtual Experience Program",                             issuer: "Forage",                                   tag: "tag-strategy" },
  { name: "Multi-Cloud Network Associate",                                        issuer: "Aviatrix",                                 tag: "tag-tech" },
  { name: "CCNA — Routing & Switching",                                          issuer: "The Digital Adda",                         tag: "tag-tech" },
  { name: "Introduction to Physical Computing",                                   issuer: "Lancaster University & Institute of Coding", tag: "tag-health" },
];

const competencies = [
  { name: "Generative AI & Prompt Engineering", pct: 88 },
  { name: "AI Automation (n8n, Cursor, Lovable)", pct: 85 },
  { name: "AI Product Management",               pct: 82 },
  { name: "Healthcare Technology",               pct: 80 },
  { name: "Full Stack Development",              pct: 84 },
  { name: "Data Analysis & ML",                  pct: 78 },
];

const Skills = () => {
  return (
    <section id="skills" className="py-10 px-4">
      <div className="max-w-5xl mx-auto">

        {/* Section label */}
        <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground font-sans mb-4">
          Skills &amp; Expertise
        </p>

        {/* Section heading card */}
        <div className="rounded-4xl bg-card border border-border p-8 md:p-12 mb-5">
          <h2 className="font-serif text-3xl md:text-4xl font-bold leading-tight text-foreground mb-3">
            A Multidisciplinary <em className="not-italic text-accent">Skill Stack</em>
          </h2>
          <p className="text-muted-foreground text-sm leading-relaxed font-sans max-w-2xl">
            From cutting-edge LLM engineering and AI automation to healthcare technology and MBA-level strategy —
            a skill set built for the AI era.
          </p>
        </div>

        {/* Skill cards grid — article card style */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-5">
          {skillCategories.map((cat, i) => (
            <div
              key={cat.title}
              className={`group rounded-3xl bg-card border border-border overflow-hidden card-hover animate-slide-up stagger-${(i % 6) + 1}`}
            >
              <div className="p-6 flex flex-col gap-3 h-full">
                {/* Top: tag + arrow */}
                <div className="flex items-center justify-between">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium font-sans ${cat.tagClass}`}>
                    {cat.tagLabel}
                  </span>
                  <div className="floating-button w-8 h-8">
                    <ArrowUpRight size={13} />
                  </div>
                </div>
                <h3 className="font-serif text-base font-bold text-foreground leading-snug">{cat.title}</h3>
                <p className="text-xs text-muted-foreground font-sans">{cat.description}</p>
                {/* Skill pills */}
                <div className="flex flex-wrap gap-1.5 mt-1">
                  {cat.skills.map((skill) => (
                    <span key={skill} className="skill-pill">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Competency + Certifications row */}
        <div className="grid md:grid-cols-2 gap-4">

          {/* Competency bars */}
          <div className="rounded-3xl bg-card border border-border p-6 md:p-8">
            <h3 className="font-serif text-lg font-bold text-foreground mb-5">Core Competency Levels</h3>
            <div className="space-y-4">
              {competencies.map((item) => (
                <div key={item.name}>
                  <div className="flex justify-between text-xs mb-1.5 font-sans">
                    <span className="text-foreground font-medium">{item.name}</span>
                    <span className="text-muted-foreground">{item.pct}%</span>
                  </div>
                  <div className="progress-track">
                    <div className="progress-fill" style={{ width: `${item.pct}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="rounded-3xl bg-card border border-border p-6 md:p-8">
            <h3 className="font-serif text-lg font-bold text-foreground mb-5">Certifications &amp; Training</h3>
            <div className="space-y-2.5">
              {certs.map((cert) => (
                <div key={cert.name} className="flex items-start gap-3 p-3 rounded-2xl bg-muted/50 border border-border">
                  <span className={`mt-0.5 px-2 py-0.5 rounded-full text-[10px] font-medium font-sans shrink-0 ${cert.tag}`}>
                    {cert.issuer.split(" ")[0]}
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold text-foreground font-sans leading-snug">{cert.name}</p>
                    <p className="text-[10px] text-muted-foreground font-sans mt-0.5">{cert.issuer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
