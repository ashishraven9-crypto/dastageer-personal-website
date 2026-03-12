const skillCategories = [
  {
    title: "Generative AI & LLM Engineering",
    color: "var(--accent-green)",
    badgeClass: "skill-badge",
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
    color: "var(--accent-cyan)",
    badgeClass: "skill-badge-cyan",
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
    color: "var(--accent-violet)",
    badgeClass: "skill-badge-violet",
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
    color: "var(--accent-cyan)",
    badgeClass: "skill-badge-cyan",
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
    color: "var(--accent-amber)",
    badgeClass: "skill-badge-amber",
    description: "Data-driven decision making and business intelligence",
    skills: [
      "Python",
      "Machine Learning",
      "Microsoft Power BI",
      "SQL / DBMS",
      "Data Analysis",
      "Deep Learning",
      "Matlab",
      "Hadoop",
    ],
  },
  {
    title: "Engineering & DevOps",
    color: "var(--accent-green)",
    badgeClass: "skill-badge",
    description: "Full-stack development and cloud infrastructure",
    skills: [
      "React / Vue.js / Node.js",
      "Full Stack Development",
      "Docker / Kubernetes",
      "AWS IoT",
      "DevOps / CI-CD",
      "Cyber Security",
      "MERN Stack",
      "Shell Scripting",
    ],
  },
];

const certs = [
  { name: "Google — Fundamentals of Digital Marketing",                        issuer: "Google" },
  { name: "AWS IoT Device Management",                                          issuer: "Amazon Web Services" },
  { name: "MITRE ATT&CK Defender™ (MAD) — Cyber Threat Intelligence",         issuer: "Cybrary" },
  { name: "12-Factor App",                                                       issuer: "Kode Kloud" },
  { name: "Cybersecurity Virtual Experience Program",                            issuer: "Forage" },
  { name: "Multi-Cloud Network Associate",                                       issuer: "Aviatrix" },
  { name: "CCNA — Routing & Switching",                                         issuer: "The Digital Adda" },
  { name: "Introduction to Physical Computing",                                  issuer: "Lancaster University & Institute of Coding" },
  { name: "Prompt Engineering for Developers",                                   issuer: "DeepLearning.AI" },
  { name: "LangChain for LLM Application Development",                          issuer: "DeepLearning.AI" },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6" style={{ background: "rgba(16,185,129,0.015)" }}>
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-16">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "var(--accent-green)" }}>
            Skills & Expertise
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-syne">
            A Multidisciplinary{" "}
            <span className="gradient-text">Skill Stack</span>
          </h2>
          <div className="section-divider mb-4" />
          <p className="text-muted-foreground max-w-xl">
            From cutting-edge LLM engineering and AI automation to healthcare technology and MBA-level strategy — a skill set built for the AI era.
          </p>
        </div>

        {/* Skill grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
          {skillCategories.map((cat) => (
            <div key={cat.title} className="glass-card rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-2 h-6 rounded-full" style={{ background: cat.color }} />
                <h3 className="font-semibold text-foreground text-sm">{cat.title}</h3>
              </div>
              <p className="text-xs text-muted-foreground mb-4 pl-5">{cat.description}</p>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span key={skill} className={cat.badgeClass}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Proficiency bars */}
        <div className="mb-20">
          <h3 className="text-xl font-semibold mb-8 text-foreground font-syne">Core Competency Levels</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { name: "Generative AI & Prompt Engineering", pct: 88, color: "var(--accent-green)" },
              { name: "AI Product Management",               pct: 82, color: "var(--accent-cyan)" },
              { name: "Healthcare Technology",               pct: 80, color: "var(--accent-cyan)" },
              { name: "AI Automation (n8n, Cursor, etc.)",   pct: 85, color: "var(--accent-green)" },
              { name: "Data Analysis & ML",                  pct: 78, color: "var(--accent-violet)" },
              { name: "Full Stack Development",              pct: 84, color: "var(--accent-amber)" },
            ].map((item) => (
              <div key={item.name}>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-foreground font-medium">{item.name}</span>
                  <span className="text-muted-foreground">{item.pct}%</span>
                </div>
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: `${item.pct}%`, background: `linear-gradient(90deg, ${item.color}, var(--accent-cyan))` }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-xl font-semibold mb-8 text-foreground font-syne">Certifications & Training</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {certs.map((cert) => (
              <div key={cert.name} className="glass-card rounded-xl p-4 flex items-start gap-3">
                <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ background: "var(--accent-green)" }} />
                <div>
                  <div className="text-sm font-medium text-foreground">{cert.name}</div>
                  <div className="text-xs text-muted-foreground mt-0.5">{cert.issuer}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
