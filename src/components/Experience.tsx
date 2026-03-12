import { GraduationCap, Briefcase, Calendar, ArrowUpRight, MapPin } from "lucide-react";

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
    type: "education",
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
    type: "education",
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
    type: "education",
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

const Experience = () => {
  return (
    <section id="experience" className="py-10 px-4">
      <div className="max-w-5xl mx-auto">

        {/* Section label */}
        <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground font-sans mb-4">
          Experience &amp; Education
        </p>

        {/* Section heading */}
        <div className="flex items-end justify-between mb-5">
          <h2 className="font-serif text-3xl md:text-4xl font-bold leading-tight text-foreground">
            Building Knowledge,{" "}
            <em className="not-italic text-accent">Delivering Results</em>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-4">

          {/* Education column */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-2">
              <GraduationCap size={16} className="text-muted-foreground" />
              <h3 className="font-serif text-base font-bold text-foreground">Education</h3>
            </div>
            {education.map((item, i) => (
              <div
                key={i}
                className={`group rounded-3xl bg-card border overflow-hidden card-hover ${item.featured ? "border-accent/40" : "border-border"}`}
              >
                {/* Image-like header */}
                <div className={`h-2 w-full ${item.featured ? "bg-accent" : "bg-muted"}`} />
                <div className="p-6 flex flex-col gap-3">
                  {/* Top: tag + date */}
                  <div className="flex items-center justify-between gap-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium font-sans ${item.tagClass}`}>
                      {item.type === "education" ? "Education" : "Work"}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground font-sans">
                      <Calendar size={10} />
                      {item.period}
                    </span>
                  </div>
                  {/* Title */}
                  <h4 className="font-serif text-base font-bold text-foreground leading-snug">{item.degree}</h4>
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-sans">
                    <MapPin size={11} />
                    {item.institution} · {item.location}
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed font-sans">{item.description}</p>
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {item.tags.map((tag) => (
                      <span key={tag} className="skill-pill">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Work Experience + Seeking column */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-2">
              <Briefcase size={16} className="text-muted-foreground" />
              <h3 className="font-serif text-base font-bold text-foreground">Work Experience</h3>
            </div>

            {experience.map((item, i) => (
              <div key={i} className="group rounded-3xl bg-card border border-border overflow-hidden card-hover">
                <div className="h-2 w-full bg-muted" />
                <div className="p-6 flex flex-col gap-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium font-sans ${item.tagClass}`}>
                      Internship
                    </span>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground font-sans">
                      <Calendar size={10} />
                      {item.period}
                    </span>
                  </div>
                  <h4 className="font-serif text-base font-bold text-foreground leading-snug">{item.role}</h4>
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-sans">
                    <MapPin size={11} />
                    {item.org} · {item.location}
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed font-sans">{item.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {item.tags.map((tag) => (
                      <span key={tag} className="skill-pill">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            {/* Actively seeking card */}
            <div className="rounded-3xl bg-card border border-accent/30 overflow-hidden">
              <div className="h-2 w-full bg-accent" />
              <div className="p-6 flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  <span className="text-sm font-semibold text-foreground font-sans">Actively Seeking</span>
                </div>
                <p className="text-xs text-muted-foreground font-sans leading-relaxed">
                  Open to roles in AI Product Management, Healthcare Technology, and Business Strategy
                  at organizations driving innovation in India and globally.
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-primary text-primary-foreground text-xs font-semibold w-fit hover:opacity-90 transition-all font-sans"
                >
                  Get In Touch <ArrowUpRight size={12} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
