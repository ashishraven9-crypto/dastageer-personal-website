import { Brain, HeartPulse, TrendingUp, Users } from "lucide-react";

const pillars = [
  {
    icon: Brain,
    title: "AI Product Management",
    description:
      "Designing AI-driven products using prompt engineering, RAG pipelines, LLM fine-tuning, and no-code AI automation tools — translating cutting-edge AI into real business value.",
    color: "var(--accent-green)",
  },
  {
    icon: HeartPulse,
    title: "Medical Management",
    description:
      "Applying healthcare informatics, IoT-based patient monitoring, and data-driven clinical decision support to modernize healthcare delivery across India.",
    color: "var(--accent-cyan)",
  },
  {
    icon: TrendingUp,
    title: "Strategic Business Thinking",
    description:
      "MBA-level frameworks for market analysis, competitive strategy, and cross-functional leadership — translating vision into executable roadmaps at NIT Kurukshetra.",
    color: "var(--accent-violet)",
  },
  {
    icon: Users,
    title: "Team Leadership",
    description:
      "Proven ability to manage, motivate, and train high-performing teams in high-pressure environments, consistently driving 90%+ satisfaction outcomes.",
    color: "var(--accent-amber)",
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Section header */}
        <div className="mb-16">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "var(--accent-green)" }}>
            About Me
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 max-w-2xl font-syne">
            Where Technology Meets{" "}
            <span className="gradient-text">Healthcare Strategy</span>
          </h2>
          <div className="section-divider mb-8" />
          <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl">
            I am an MBA student at{" "}
            <span className="text-foreground font-semibold">NIT Kurukshetra</span> with a dual
            specialization in{" "}
            <span className="text-foreground font-medium">AI Product Management</span> and{" "}
            <span className="text-foreground font-medium">Medical Management</span>. With a B.Tech
            (EEE) from Amrita School of Engineering, Bangalore, and over four years of hands-on
            experience spanning full-stack development, machine learning, and healthcare IoT, I bring
            a uniquely interdisciplinary perspective to every challenge I tackle.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid md:grid-cols-2 gap-12 items-start mb-20">

          {/* Left: narrative */}
          <div className="space-y-5">
            <p className="text-muted-foreground leading-relaxed">
              My research publication on{" "}
              <em className="text-foreground">"Implementation of Healthcare Monitoring using Raspberry Pi"</em>{" "}
              exemplifies my commitment to applying technology where it matters most — in clinical
              environments that demand precision, reliability, and user-centric design.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              At NIT Kurukshetra, I am deepening my expertise in AI-driven product strategy,
              healthcare operations, and business analytics — equipping myself to lead transformation
              at the intersection of medicine, data, and enterprise strategy.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My goal is to join forward-thinking organizations — healthcare enterprises, AI/tech
              companies, or consulting firms — where I can drive meaningful transformation leveraging
              modern AI tools like n8n, RAG pipelines, and LLM-based product systems.
            </p>

            {/* Quick facts */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {[
                { label: "Location",    value: "Bangalore, India" },
                { label: "Phone",       value: "+91 9490133147" },
                { label: "Email",       value: "gmddastageer@gmail.com" },
                { label: "Availability", value: "Immediate" },
              ].map((fact) => (
                <div key={fact.label} className="glass-card rounded-lg p-4">
                  <div className="text-xs text-muted-foreground mb-1">{fact.label}</div>
                  <div className="text-sm font-medium text-foreground truncate">{fact.value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: core pillars */}
          <div className="space-y-4">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div key={pillar.title} className="glass-card rounded-xl p-5 flex gap-4">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: `${pillar.color}18`, border: `1px solid ${pillar.color}30` }}>
                    <Icon size={18} style={{ color: pillar.color }} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{pillar.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{pillar.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
