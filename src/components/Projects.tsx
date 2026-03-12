import { ExternalLink, Award, Users, TrendingUp } from "lucide-react";

const projects = [
  {
    id: "01",
    title: "Smart Healthcare Monitoring with Raspberry Pi & ML",
    category: "Healthcare Technology · AI/ML",
    period: "March 2023 – Present",
    status: "Published Research",
    description:
      "Developed a fully operational medical monitoring system using advanced machine learning techniques, cloud storage models, and Raspberry Pi hardware. The system provides real-time patient vitals tracking with intelligent anomaly detection.",
    highlights: [
      { icon: Award, text: "Best Project — 97% votes from mentors" },
      { icon: TrendingUp, text: "92% customer satisfaction rate (A+ grade)" },
      { icon: Users, text: "75% increase in community engagement" },
    ],
    tags: ["Raspberry Pi", "Machine Learning", "Cloud Storage", "IoT", "Healthcare", "Python"],
    color: "var(--accent-teal)",
    impact: "Research Published",
  },
  {
    id: "02",
    title: "CO₂ Emission Calculator — Environmental Analytics Platform",
    category: "Data Engineering · Sustainability",
    period: "January 2023 – Present",
    status: "Live Platform",
    description:
      "Engineered an intuitive environmental analytics platform supporting 250 concurrent users, enabling real-time CO₂ footprint tracking. Implemented competitive friend leagues to gamify sustainability and drive behavioral change.",
    highlights: [
      { icon: TrendingUp, text: "94% accuracy in emission calculations" },
      { icon: Users, text: "45% increase in student engagement" },
      { icon: Award, text: "Saves 12 hrs of manual work per week" },
    ],
    tags: ["SQL", "Angular", "Data Analytics", "Environmental Tech", "Gamification"],
    color: "var(--accent-blue)",
    impact: "250 Users",
  },
  {
    id: "03",
    title: "E-Commerce CRUD Application — Secure Web Platform",
    category: "Full Stack Development · Security",
    period: "June 2022 – July 2022",
    status: "Internship Project",
    description:
      "Collaborated with a 2-member team at Suven Technologies to build a secure e-commerce web application. Implemented robust CRUD operations with PHP, SQL, and Angular, achieving enterprise-grade security and user access management.",
    highlights: [
      { icon: Award, text: "90% accuracy in data operations" },
      { icon: Users, text: "82% customer satisfaction score" },
      { icon: TrendingUp, text: "Survey data from 170 participants" },
    ],
    tags: ["PHP", "SQL", "Angular", "CRUD", "Security", "E-Commerce"],
    color: "var(--accent-purple)",
    impact: "82% CSAT",
  },
  {
    id: "04",
    title: "AI-Powered Medical Triage System (MBA Capstone Concept)",
    category: "AI Product Management · Healthcare",
    period: "2024 – Present",
    status: "In Development",
    description:
      "Designing an AI-driven triage and patient prioritization system for Indian tier-2 hospitals. Combines NLP-based symptom analysis, ML-based risk scoring, and a mobile-first interface for healthcare workers with limited digital literacy.",
    highlights: [
      { icon: Brain, text: "NLP symptom classification engine" },
      { icon: HeartPulse, text: "Real-time risk stratification" },
      { icon: TrendingUp, text: "Targeting 30% reduction in wait times" },
    ],
    tags: ["AI/ML", "NLP", "Healthcare", "Product Management", "Mobile", "India"],
    color: "var(--accent-gold)",
    impact: "Concept Stage",
  },
];

// Inline icons for the last project
import { Brain, HeartPulse } from "lucide-react";

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "var(--accent-blue)" }}>
            Projects & Case Studies
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Work That Creates{" "}
            <span className="gradient-text">Real Impact</span>
          </h2>
          <div className="section-divider" />
        </div>

        {/* Projects grid */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="glass-card rounded-2xl p-8 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col lg:flex-row gap-8">
                {/* Left: number + category */}
                <div className="lg:w-48 flex-shrink-0">
                  <div
                    className="text-5xl font-black opacity-20 font-playfair mb-3"
                    style={{ color: project.color }}
                  >
                    {project.id}
                  </div>
                  <div
                    className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium mb-2"
                    style={{
                      background: `${project.color}15`,
                      border: `1px solid ${project.color}30`,
                      color: project.color,
                    }}
                  >
                    {project.status}
                  </div>
                  <div className="text-xs text-muted-foreground">{project.period}</div>
                </div>

                {/* Right: content */}
                <div className="flex-1">
                  <div className="text-xs text-muted-foreground mb-2">{project.category}</div>
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-white transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <div className="grid sm:grid-cols-3 gap-3 mb-5">
                    {project.highlights.map((h, i) => {
                      const Icon = h.icon;
                      return (
                        <div key={i} className="flex items-start gap-2">
                          <Icon size={14} className="mt-0.5 flex-shrink-0" style={{ color: project.color }} />
                          <span className="text-xs text-muted-foreground">{h.text}</span>
                        </div>
                      );
                    })}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md text-xs font-medium"
                        style={{
                          background: "rgba(255,255,255,0.05)",
                          border: "1px solid rgba(255,255,255,0.08)",
                          color: "var(--muted-foreground)",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Impact badge */}
                <div className="lg:w-24 flex-shrink-0 flex lg:flex-col items-center lg:items-end justify-start gap-2">
                  <div
                    className="text-center px-3 py-2 rounded-xl"
                    style={{ background: `${project.color}12`, border: `1px solid ${project.color}25` }}
                  >
                    <div className="text-sm font-bold" style={{ color: project.color }}>
                      {project.impact}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
