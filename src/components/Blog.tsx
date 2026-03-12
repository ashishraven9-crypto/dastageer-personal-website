import { ArrowRight, Clock } from "lucide-react";

const posts = [
  {
    category: "AI Product Management",
    title: "Why India's Healthcare System Needs AI Product Managers Now",
    excerpt:
      "India's healthcare sector is at an inflection point. With 1.4 billion people and a doctor-to-patient ratio far below WHO recommendations, AI-driven product management offers a scalable path to closing the gap — but only if PMs understand both the technology and the clinical context.",
    readTime: "6 min read",
    date: "Feb 2025",
    color: "var(--accent-blue)",
    tag: "Healthcare AI",
  },
  {
    category: "Medical Management",
    title: "IoT in Clinical Settings: Lessons from Building a Raspberry Pi Monitor",
    excerpt:
      "After developing a healthcare monitoring system using Raspberry Pi and machine learning, I learned that the hardest problems in medical IoT are not technical — they are about trust, workflow integration, and the human factors that determine whether a clinician actually uses the device.",
    readTime: "5 min read",
    date: "Jan 2025",
    color: "var(--accent-teal)",
    tag: "IoT · Healthcare",
  },
  {
    category: "Business Strategy",
    title: "The MBA Advantage in AI Startups: Beyond the Hype",
    excerpt:
      "In a world where every engineer claims to be a product manager, what does an MBA actually bring to an AI startup? Drawing from my dual background in engineering and business, I explore the strategic, organizational, and market-facing capabilities that separate good AI products from great ones.",
    readTime: "7 min read",
    date: "Dec 2024",
    color: "var(--accent-purple)",
    tag: "Strategy · MBA",
  },
  {
    category: "Data & Analytics",
    title: "From CO₂ Calculators to Carbon Strategy: Data-Driven Sustainability",
    excerpt:
      "Building an environmental analytics platform taught me that data alone does not change behavior. The real leverage comes from combining accurate measurement with social mechanisms — leaderboards, peer comparison, and gamified accountability — to drive sustainable choices at scale.",
    readTime: "4 min read",
    date: "Nov 2024",
    color: "var(--accent-gold)",
    tag: "Sustainability · Data",
  },
];

const Blog = () => {
  return (
    <section id="blog" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-wrap items-end justify-between gap-6 mb-16">
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "var(--accent-blue)" }}>
              Blog & Insights
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Perspectives on{" "}
              <span className="gradient-text">AI & Healthcare</span>
            </h2>
            <div className="section-divider" />
          </div>
          <a
            href="#"
            className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            View All Posts <ArrowRight size={14} />
          </a>
        </div>

        {/* Featured post */}
        <div className="glass-card rounded-2xl p-8 mb-8 group cursor-pointer">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <span
                  className="px-3 py-1 rounded-full text-xs font-semibold"
                  style={{
                    background: `${posts[0].color}15`,
                    border: `1px solid ${posts[0].color}30`,
                    color: posts[0].color,
                  }}
                >
                  Featured · {posts[0].category}
                </span>
                <span className="text-xs text-muted-foreground flex items-center gap-1">
                  <Clock size={11} /> {posts[0].readTime}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-white transition-colors">
                {posts[0].title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-5">{posts[0].excerpt}</p>
              <div className="flex items-center gap-2 text-sm font-medium" style={{ color: posts[0].color }}>
                Read Article <ArrowRight size={14} />
              </div>
            </div>
            <div
              className="lg:w-64 h-40 lg:h-auto rounded-xl flex-shrink-0"
              style={{
                background: `linear-gradient(135deg, ${posts[0].color}20, var(--accent-purple)15)`,
                border: `1px solid ${posts[0].color}20`,
              }}
            />
          </div>
        </div>

        {/* Other posts grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {posts.slice(1).map((post) => (
            <div key={post.title} className="glass-card rounded-2xl p-6 group cursor-pointer flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <span
                  className="px-2.5 py-1 rounded-full text-xs font-medium"
                  style={{
                    background: `${post.color}12`,
                    border: `1px solid ${post.color}25`,
                    color: post.color,
                  }}
                >
                  {post.tag}
                </span>
                <span className="text-xs text-muted-foreground">{post.date}</span>
              </div>
              <h3 className="font-bold text-foreground mb-3 group-hover:text-white transition-colors leading-snug">
                {post.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-4">
                {post.excerpt.slice(0, 120)}...
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground flex items-center gap-1">
                  <Clock size={11} /> {post.readTime}
                </span>
                <span className="text-xs font-medium flex items-center gap-1" style={{ color: post.color }}>
                  Read <ArrowRight size={12} />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
