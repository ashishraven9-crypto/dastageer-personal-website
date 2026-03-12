import { GraduationCap, Briefcase, Calendar, ArrowUpRight, MapPin, Sparkles } from "lucide-react";
import { useRef, useState, useEffect } from "react";

const experience = [
  {
    type: "work",
    role: "Database Management Intern",
    org: "Suven Technologies",
    period: "June 2022 – July 2022",
    location: "Remote / India",
    description:
      "Collaborated with a 2-member team to design and develop a secure e-commerce web application. Implemented CRUD operations using PHP, SQL, and Angular, achieving 90% data accuracy and 82% customer satisfaction. Conducted user research surveys with 170 participants.",
    tags: ["PHP", "SQL", "Angular", "CRUD", "Web Development"],
    tagClass: "tag-tech",
  },
];

const education = [
  {
    degree: "MBA — AI Product Management & Medical Management",
    institution: "National Institute of Technology (NIT) Kurukshetra",
    period: "2024 – Present",
    location: "Kurukshetra, Haryana, India",
    description:
      "Pursuing an advanced MBA at NIT Kurukshetra with dual specialization in AI Product Management and Medical Management. Coursework covers AI-driven product strategy, healthcare operations, LLM applications, prompt engineering, business analytics, and cross-functional leadership.",
    tags: ["AI PM", "Medical Management", "NIT Kurukshetra", "Strategy", "LLM"],
    tagClass: "tag-mba",
    featured: true,
  },
  {
    degree: "B.Tech — Electrical & Electronics Engineering (EEE)",
    institution: "Amrita School of Engineering, Bangalore",
    period: "2020 – 2024",
    location: "Bangalore, India",
    description:
      "Graduated with a strong foundation in electrical systems, embedded computing, and machine learning applications. Published research on healthcare monitoring using Raspberry Pi. Awarded A+ for the Smart Health Care Monitoring project — best project with 97% mentor vote share.",
    tags: ["EEE", "Machine Learning", "IoT", "Embedded Systems", "Research"],
    tagClass: "tag-health",
    featured: false,
  },
  {
    degree: "Intermediate (Class XII — Science)",
    institution: "Sri Chaitanya Junior College, Vijayawada",
    period: "2018 – 2020",
    location: "Vijayawada, Andhra Pradesh",
    description:
      "Completed intermediate education with a focus on Physics, Chemistry, and Mathematics — building the analytical foundation for engineering and technology studies.",
    tags: ["PCM", "Science", "Foundation"],
    tagClass: "tag-strategy",
    featured: false,
  },
];

const RevealCard = ({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold: 0.06 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} className={`reveal ${visible ? "visible" : ""} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
};

const Experience = () => (
  <section id="experience" className="py-8 sm:py-10 px-3 sm:px-4 relative z-10">
    <div className="max-w-5xl mx-auto">

      <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground font-sans mb-4">
        Experience &amp; Education
      </p>

      <RevealCard className="mb-4 sm:mb-5">
        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold leading-tight text-foreground">
          Building Knowledge,{" "}
          <em className="not-italic text-foreground/60">Delivering Results</em>
        </h2>
      </RevealCard>

      {/* Stack on mobile, side-by-side on md+ */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

        {/* Education column */}
        <div className="space-y-3 sm:space-y-4">
          <RevealCard className="flex items-center gap-2 mb-1">
            <GraduationCap size={15} className="text-muted-foreground" />
            <h3 className="font-serif text-sm sm:text-base font-bold text-foreground">Education</h3>
          </RevealCard>

          <div className="relative pl-4">
            {/* Timeline line */}
            <div className="absolute left-0 top-3 bottom-3 w-px bg-border" />

            <div className="space-y-3 sm:space-y-4">
              {education.map((item, i) => (
                <RevealCard key={i} delay={i * 120} className="relative">
                  {/* Timeline dot */}
                  <div
                    className={`absolute -left-4 top-6 w-2 h-2 rounded-full border-2 transition-all duration-500 ${
                      item.featured ? "bg-foreground border-foreground scale-125" : "bg-background border-border"
                    }`}
                  />

                  <div
                    className={`group rounded-2xl sm:rounded-3xl bg-card border overflow-hidden glow-card ${
                      item.featured ? "border-foreground/20" : "border-border"
                    }`}
                  >
                    {/* Beige color bar */}
                    <div
                      className="h-1.5 w-full"
                      style={{
                        background: item.featured
                          ? "linear-gradient(90deg, hsl(30,25%,40%), hsl(36,30%,60%))"
                          : "hsl(36, 25%, 88%)",
                      }}
                    />
                    <div className="p-4 sm:p-6 flex flex-col gap-2 sm:gap-3">
                      <div className="flex items-center justify-between gap-2 flex-wrap">
                        <span className={`px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs font-medium font-sans ${item.tagClass}`}>
                          Education
                        </span>
                        <span className="flex items-center gap-1 text-[10px] sm:text-xs text-muted-foreground font-sans">
                          <Calendar size={9} />
                          {item.period}
                        </span>
                      </div>
                      <h4 className="font-serif text-sm sm:text-base font-bold text-foreground leading-snug">{item.degree}</h4>
                      <div className="flex items-start gap-1.5 text-[10px] sm:text-xs text-muted-foreground font-sans">
                        <MapPin size={10} className="shrink-0 mt-0.5" />
                        <span>{item.institution} · {item.location}</span>
                      </div>
                      <p className="text-[11px] sm:text-xs text-muted-foreground leading-relaxed font-sans">{item.description}</p>
                      <div className="flex flex-wrap gap-1 sm:gap-1.5">
                        {item.tags.map((tag) => (
                          <span key={tag} className="skill-pill text-[10px] px-2 py-0.5">{tag}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </RevealCard>
              ))}
            </div>
          </div>
        </div>

        {/* Work Experience column */}
        <div className="space-y-3 sm:space-y-4">
          <RevealCard delay={60} className="flex items-center gap-2 mb-1">
            <Briefcase size={15} className="text-muted-foreground" />
            <h3 className="font-serif text-sm sm:text-base font-bold text-foreground">Work Experience</h3>
          </RevealCard>

          {experience.map((item, i) => (
            <RevealCard key={i} delay={i * 100 + 80} className="group rounded-2xl sm:rounded-3xl bg-card border border-border overflow-hidden glow-card">
              <div className="h-1.5 w-full" style={{ background: "hsl(36, 25%, 88%)" }} />
              <div className="p-4 sm:p-6 flex flex-col gap-2 sm:gap-3">
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <span className={`px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs font-medium font-sans ${item.tagClass}`}>
                    Internship
                  </span>
                  <span className="flex items-center gap-1 text-[10px] sm:text-xs text-muted-foreground font-sans">
                    <Calendar size={9} />
                    {item.period}
                  </span>
                </div>
                <h4 className="font-serif text-sm sm:text-base font-bold text-foreground leading-snug">{item.role}</h4>
                <div className="flex items-start gap-1.5 text-[10px] sm:text-xs text-muted-foreground font-sans">
                  <MapPin size={10} className="shrink-0 mt-0.5" />
                  <span>{item.org} · {item.location}</span>
                </div>
                <p className="text-[11px] sm:text-xs text-muted-foreground leading-relaxed font-sans">{item.description}</p>
                <div className="flex flex-wrap gap-1 sm:gap-1.5">
                  {item.tags.map((tag) => (
                    <span key={tag} className="skill-pill text-[10px] px-2 py-0.5">{tag}</span>
                  ))}
                </div>
              </div>
            </RevealCard>
          ))}

          {/* Actively seeking card */}
          <RevealCard delay={200} className="rounded-2xl sm:rounded-3xl bg-card border border-foreground/15 overflow-hidden group hover:border-foreground/30 transition-all duration-300">
            <div
              className="h-1.5 w-full"
              style={{ background: "linear-gradient(90deg, hsl(30,25%,40%), hsl(36,30%,60%))" }}
            />
            <div className="p-4 sm:p-6 flex flex-col gap-2 sm:gap-3 relative overflow-hidden">
              <div
                className="absolute -bottom-8 -right-8 w-28 sm:w-32 h-28 sm:h-32 rounded-full pointer-events-none"
                style={{
                  background: "hsl(36, 35%, 88%)",
                  animation: "blob 8s ease-in-out infinite",
                  opacity: 0.6,
                }}
              />
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles size={13} className="text-foreground animate-pulse" />
                  <span className="text-sm font-semibold text-foreground font-sans">Actively Seeking</span>
                </div>
                <p className="text-[11px] sm:text-xs text-muted-foreground font-sans leading-relaxed">
                  Open to roles in AI Product Management, Healthcare Technology, and Business Strategy
                  at organizations driving innovation in India and globally.
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-primary text-primary-foreground text-xs font-semibold w-fit hover:opacity-90 hover:scale-105 transition-all font-sans mt-3 shadow-md"
                >
                  Get In Touch <ArrowUpRight size={11} />
                </a>
              </div>
            </div>
          </RevealCard>
        </div>
      </div>
    </div>
  </section>
);

export default Experience;
