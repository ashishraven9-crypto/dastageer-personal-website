import { GraduationCap, Briefcase, Calendar } from "lucide-react";

const experience = [
  {
    type: "work",
    role: "Database Management Intern",
    org: "Suven Technologies",
    period: "June 2022 – July 2022",
    location: "Remote / India",
    description:
      "Collaborated with a 2-member team to design and develop a secure e-commerce web application. Implemented CRUD operations using PHP, SQL, and Angular, achieving 90% data accuracy and 82% customer satisfaction. Conducted user research surveys with 170 participants to inform product improvements.",
    tags: ["PHP", "SQL", "Angular", "CRUD", "Web Development"],
    color: "var(--accent-green)",
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
      "Pursuing an advanced MBA at NIT Kurukshetra with dual specialization in AI Product Management and Medical Management. Coursework covers AI-driven product strategy, healthcare operations management, LLM applications, prompt engineering, business analytics, and cross-functional leadership. Actively working on AI automation projects and healthcare technology case studies.",
    tags: ["AI PM", "Medical Management", "NIT Kurukshetra", "Strategy", "LLM", "Healthcare"],
    color: "var(--accent-violet)",
  },
  {
    type: "education",
    degree: "B.Tech — Electrical & Electronics Engineering (EEE)",
    institution: "Amrita School of Engineering, Bangalore",
    period: "2020 – 2024",
    location: "Bangalore, India",
    description:
      "Graduated with a strong foundation in electrical systems, embedded computing, and machine learning applications. Published research on healthcare monitoring using Raspberry Pi. Awarded A+ for the Smart Health Care Monitoring project, recognized as the best project by mentors with 97% vote share.",
    tags: ["EEE", "Machine Learning", "IoT", "Embedded Systems", "Research"],
    color: "var(--accent-cyan)",
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
    color: "var(--accent-amber)",
  },
];

const TimelineItem = ({
  item,
  isLast,
}: {
  item: (typeof experience)[0] | (typeof education)[0];
  isLast: boolean;
}) => {
  const isWork = item.type === "work";
  const Icon = isWork ? Briefcase : GraduationCap;

  return (
    <div className="flex gap-6">
      {/* Timeline column */}
      <div className="flex flex-col items-center">
        <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 z-10"
          style={{ background: `${item.color}18`, border: `1px solid ${item.color}35` }}>
          <Icon size={16} style={{ color: item.color }} />
        </div>
        {!isLast && (
          <div className="w-px flex-1 mt-2"
            style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.06) 0%, transparent 100%)", minHeight: "2rem" }} />
        )}
      </div>

      {/* Content */}
      <div className="flex-1 pb-10">
        <div className="glass-card rounded-xl p-6">
          <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
            <div>
              <h3 className="font-bold text-foreground text-lg font-syne">{item.role || item.degree}</h3>
              <div className="text-sm font-medium mt-0.5" style={{ color: item.color }}>
                {item.org || item.institution}
              </div>
              {item.location && (
                <div className="text-xs text-muted-foreground mt-0.5">{item.location}</div>
              )}
            </div>
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground bg-card/60 px-3 py-1.5 rounded-full border border-border">
              <Calendar size={11} />
              {item.period}
            </div>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">{item.description}</p>
          <div className="flex flex-wrap gap-2">
            {item.tags.map((tag) => (
              <span key={tag} className="px-2.5 py-1 rounded-md text-xs font-medium"
                style={{ background: `${item.color}10`, border: `1px solid ${item.color}20`, color: item.color }}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6" style={{ background: "rgba(16,185,129,0.015)" }}>
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-16">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "var(--accent-green)" }}>
            Experience & Education
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-syne">
            Building Knowledge,{" "}
            <span className="gradient-text">Delivering Results</span>
          </h2>
          <div className="section-divider" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Work Experience */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-8 flex items-center gap-2 font-syne">
              <Briefcase size={18} style={{ color: "var(--accent-green)" }} />
              Work Experience
            </h3>
            {experience.map((item, i) => (
              <TimelineItem key={i} item={item} isLast={i === experience.length - 1} />
            ))}

            {/* Actively seeking */}
            <div className="glass-card rounded-xl p-5" style={{ borderColor: "rgba(16,185,129,0.3)" }}>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full pulse-glow" style={{ background: "var(--accent-green)" }} />
                <span className="text-sm font-medium text-foreground">Actively Seeking</span>
              </div>
              <p className="text-xs text-muted-foreground">
                Open to roles in AI Product Management, Healthcare Technology, and Business Strategy
                at organizations driving innovation in India and globally.
              </p>
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-8 flex items-center gap-2 font-syne">
              <GraduationCap size={18} style={{ color: "var(--accent-violet)" }} />
              Education
            </h3>
            {education.map((item, i) => (
              <TimelineItem key={i} item={item} isLast={i === education.length - 1} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
