const skillCategories = [
  {
    title: "AI & Machine Learning",
    color: "var(--accent-blue)",
    badgeClass: "skill-badge",
    skills: [
      "Machine Learning",
      "Deep Learning",
      "Python",
      "TensorFlow",
      "Jetson Nano",
      "Microsoft Power BI",
      "Data Analysis",
      "Hadoop",
      "Matlab",
    ],
  },
  {
    title: "Medical & Healthcare Tech",
    color: "var(--accent-teal)",
    badgeClass: "skill-badge-teal",
    skills: [
      "Healthcare IoT",
      "Raspberry Pi",
      "Clinical Decision Support",
      "Health Informatics",
      "Medical Device Management",
      "Patient Monitoring Systems",
      "Healthcare Analytics",
    ],
  },
  {
    title: "Product & Business",
    color: "var(--accent-purple)",
    badgeClass: "skill-badge-purple",
    skills: [
      "AI Product Management",
      "Scrum / Agile",
      "Comparative Market Analysis",
      "Digital Marketing",
      "Account Management",
      "Root Cause Analysis",
      "Go-to-Market Strategy",
    ],
  },
  {
    title: "Engineering & DevOps",
    color: "var(--accent-gold)",
    badgeClass: "",
    skills: [
      "Full Stack Development",
      "React / Vue.js / Node.js",
      "Docker / Kubernetes",
      "DevOps / CI-CD",
      "Terraform / Ansible",
      "Jenkins / Argo CD / Helm",
      "AWS IoT",
      "Cyber Security",
      "MERN Stack",
      ".NET",
      "SQL / DBMS",
    ],
  },
];

const certs = [
  { name: "Google — Fundamentals of Digital Marketing", issuer: "Google" },
  { name: "AWS IoT Device Management", issuer: "Amazon Web Services" },
  { name: "MITRE ATT&CK Defender™ (MAD) — Cyber Threat Intelligence", issuer: "Cybrary" },
  { name: "12-Factor App", issuer: "Kode Kloud" },
  { name: "Cybersecurity Virtual Experience Program", issuer: "Forage" },
  { name: "Multi-Cloud Network Associate", issuer: "Aviatrix" },
  { name: "CCNA — Routing & Switching", issuer: "The Digital Adda" },
  { name: "Introduction to Physical Computing", issuer: "Lancaster University & Institute of Coding" },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6" style={{ background: "rgba(255,255,255,0.01)" }}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "var(--accent-blue)" }}>
            Skills & Expertise
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            A Multidisciplinary{" "}
            <span className="gradient-text">Skill Stack</span>
          </h2>
          <div className="section-divider" />
        </div>

        {/* Skill grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-20">
          {skillCategories.map((cat) => (
            <div key={cat.title} className="glass-card rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-2 h-6 rounded-full"
                  style={{ background: cat.color }}
                />
                <h3 className="font-semibold text-foreground">{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className={cat.badgeClass || "skill-badge"}
                    style={
                      !cat.badgeClass
                        ? {
                            background: "rgba(245,158,11,0.1)",
                            border: "1px solid rgba(245,158,11,0.25)",
                            color: "var(--accent-gold)",
                            padding: "0.35rem 0.85rem",
                            borderRadius: "9999px",
                            fontSize: "0.8rem",
                            fontWeight: 500,
                          }
                        : {}
                    }
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Proficiency bars */}
        <div className="mb-20">
          <h3 className="text-xl font-semibold mb-8 text-foreground">Core Competency Levels</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { name: "AI / ML Engineering", pct: 85, color: "var(--accent-blue)" },
              { name: "Healthcare Technology", pct: 80, color: "var(--accent-teal)" },
              { name: "Product Strategy & Management", pct: 78, color: "var(--accent-purple)" },
              { name: "Full Stack Development", pct: 88, color: "var(--accent-blue)" },
              { name: "Data Analysis & BI", pct: 75, color: "var(--accent-teal)" },
              { name: "DevOps & Cloud", pct: 72, color: "var(--accent-purple)" },
            ].map((item) => (
              <div key={item.name}>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-foreground font-medium">{item.name}</span>
                  <span className="text-muted-foreground">{item.pct}%</span>
                </div>
                <div className="progress-bar">
                  <div
                    className="progress-fill"
                    style={{ width: `${item.pct}%`, background: `linear-gradient(90deg, ${item.color}, var(--accent-purple))` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-xl font-semibold mb-8 text-foreground">Certifications & Training</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {certs.map((cert) => (
              <div key={cert.name} className="glass-card rounded-xl p-4 flex items-start gap-3">
                <div
                  className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                  style={{ background: "var(--accent-blue)" }}
                />
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
