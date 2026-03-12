import { ArrowRight, Clock } from "lucide-react";

const posts = [
  {
    category: "Generative AI",
    title: "RAG vs Fine-tuning: Which Strategy Should Your AI Product Use?",
    excerpt:
      "Retrieval Augmented Generation and model fine-tuning are both powerful approaches to customizing LLM behavior — but they solve fundamentally different problems. Drawing from hands-on experience building healthcare AI products, I break down when to use each strategy and how to avoid the most common pitfalls.",
    readTime: "7 min read",
    date: "Mar 2025",
    color: "var(--accent-green)",
    tag: "RAG · LLM",
  },
  {
    category: "AI Automation",
    title: "Building Healthcare Workflows with n8n: A Practical Guide",
    excerpt:
      "n8n is rapidly becoming the go-to tool for AI workflow automation in healthcare. I walk through how I built automated patient follow-up, report summarization, and appointment scheduling pipelines — reducing administrative burden by over 60% without writing a single line of backend code.",
    readTime: "6 min read",
    date: "Feb 2025",
    color: "var(--accent-cyan)",
    tag: "n8n · Automation",
  },
  {
    category: "AI Product Management",
    title: "AI Guardrails: The Product Manager's Guide to Safe LLM Deployment",
    excerpt:
      "Deploying LLMs in production without guardrails is like shipping software without tests. As an AI PM, understanding hallucination mitigation, output validation, and content filtering is no longer optional — it is a core product responsibility.",
    readTime: "5 min read",
    date: "Jan 2025",
    color: "var(--accent-violet)",
    tag: "AI Guardrails · PM",
  },
  {
    category: "Medical Management",
    title: "Why India's Healthcare System Needs AI Product Managers Now",
    excerpt:
      "India's healthcare sector is at an inflection point. With 1.4 billion people and a doctor-to-patient ratio far below WHO recommendations, AI-driven product management offers a scalable path to closing the gap — but only if PMs understand both the technology and the clinical context.",
    readTime: "6 min read",
    date: "Dec 2024",
    color: "var(--accent-amber)",
    tag: "Healthcare AI",
  },
];

const Blog = () => {
  return (
    <section id="blog" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="flex flex-wrap items-end justify-between gap-6 mb-16">
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "var(--accent-green)" }}>
              Blog & Insights
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-syne">
              Perspectives on{" "}
              <span className="gradient-text">AI & Healthcare</span>
            </h2>
            <div className="section-divider" />
          </div>
          <a href="#" className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            View All Posts <ArrowRight size={14} />
          </a>
        </div>

        {/* Featured post */}
        <div className="glass-card rounded-2xl p-8 mb-8 group cursor-pointer">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-semibold"
                  style={{ background: `${posts[0].color}15`, border: `1px solid ${posts[0].color}30`, color: posts[0].color }}>
                  Featured · {posts[0].category}
                </span>
                <span className="text-xs text-muted-foreground flex items-center gap-1">
                  <Clock size={11} /> {posts[0].readTime}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-white transition-colors font-syne">
                {posts[0].title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-5">{posts[0].excerpt}</p>
              <div className="flex items-center gap-2 text-sm font-medium" style={{ color: posts[0].color }}>
                Read Article <ArrowRight size={14} />
              </div>
            </div>
            <div className="lg:w-64 h-40 lg:h-auto rounded-xl flex-shrink-0"
              style={{ background: `linear-gradient(135deg, ${posts[0].color}20, var(--accent-cyan)15)`, border: `1px solid ${posts[0].color}20` }} />
          </div>
        </div>

        {/* Other posts grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {posts.slice(1).map((post) => (
            <div key={post.title} className="glass-card rounded-2xl p-6 group cursor-pointer flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <span className="px-2.5 py-1 rounded-full text-xs font-medium"
                  style={{ background: `${post.color}12`, border: `1px solid ${post.color}25`, color: post.color }}>
                  {post.tag}
                </span>
                <span className="text-xs text-muted-foreground">{post.date}</span>
              </div>
              <h3 className="font-bold text-foreground mb-3 group-hover:text-white transition-colors leading-snug font-syne">
                {post.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-4">
                {post.excerpt.slice(0, 130)}...
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
