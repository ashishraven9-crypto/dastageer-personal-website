import { MapPin, Phone, Mail, Brain, HeartPulse, TrendingUp, BookOpen, ArrowUpRight } from "lucide-react";

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

const About = () => {
  return (
    <section id="about" className="py-10 px-4">
      <div className="max-w-5xl mx-auto">

        {/* Section label */}
        <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground font-sans mb-4">
          About Me
        </p>

        {/* Main about card — reference blog large rounded card */}
        <div className="rounded-4xl bg-card border border-border overflow-hidden mb-5 card-hover">
          <div className="grid md:grid-cols-5 gap-0">

            {/* Left — narrative (3 cols) */}
            <div className="md:col-span-3 p-8 md:p-12 flex flex-col justify-center gap-5">
              <h2 className="font-serif text-3xl md:text-4xl font-bold leading-tight text-foreground">
                Where Technology Meets<br />
                <em className="not-italic text-accent">Healthcare Strategy</em>
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
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-semibold w-fit hover:opacity-90 hover:scale-105 transition-all font-sans"
              >
                Get In Touch <ArrowUpRight size={13} />
              </a>
            </div>

            {/* Right — info cards (2 cols) */}
            <div className="md:col-span-2 bg-muted/40 border-t md:border-t-0 md:border-l border-border p-8 flex flex-col justify-center gap-3">
              {[
                { icon: MapPin,  label: "Location",  value: "Bangalore, India" },
                { icon: Phone,   label: "Phone",     value: "+91 9490133147" },
                { icon: Mail,    label: "Email",     value: "gmddastageer@gmail.com" },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-center gap-3 p-4 rounded-2xl bg-background border border-border">
                  <div className="w-9 h-9 rounded-full bg-muted flex items-center justify-center shrink-0">
                    <Icon size={14} className="text-muted-foreground" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-muted-foreground font-sans">{label}</p>
                    <p className="text-sm font-semibold text-foreground font-sans truncate">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pillars grid — article card style from reference */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {pillars.map((p, i) => (
            <div
              key={p.title}
              className={`group relative rounded-3xl bg-card border border-border overflow-hidden card-hover animate-slide-up stagger-${i + 1}`}
            >
              <div className="p-6 flex flex-col gap-3 h-full min-h-[200px]">
                {/* Top: tag + floating button */}
                <div className="flex items-center justify-between">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium font-sans ${p.tag}`}>
                    {p.tagLabel}
                  </span>
                  <div className="floating-button w-9 h-9">
                    <p.icon size={14} />
                  </div>
                </div>
                <h3 className="font-serif text-base font-bold text-foreground leading-snug">{p.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed font-sans flex-1">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
