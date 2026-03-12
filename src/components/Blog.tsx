import { ArrowUpRight, Clock } from "lucide-react";

const posts = [
  {
    category: "Generative AI",
    categoryClass: "tag-ai",
    title: "RAG vs Fine-tuning: Which Strategy Should Your AI Product Use?",
    excerpt:
      "Retrieval Augmented Generation and model fine-tuning solve fundamentally different problems. Drawing from hands-on experience building healthcare AI products, I break down when to use each strategy and how to avoid the most common pitfalls.",
    readTime: "7 min read",
    date: "Mar 2025",
    image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80&fit=crop",
    featured: true,
  },
  {
    category: "AI Automation",
    categoryClass: "tag-tech",
    title: "Building Healthcare Workflows with n8n: A Practical Guide",
    excerpt:
      "n8n is rapidly becoming the go-to tool for AI workflow automation in healthcare. I walk through how I built automated patient follow-up, report summarization, and appointment scheduling pipelines.",
    readTime: "6 min read",
    date: "Feb 2025",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80&fit=crop",
    featured: false,
  },
  {
    category: "AI Product Management",
    categoryClass: "tag-mba",
    title: "AI Guardrails: The Product Manager's Guide to Safe LLM Deployment",
    excerpt:
      "Deploying LLMs in production without guardrails is like shipping software without tests. Hallucination mitigation, output validation, and content filtering are now core PM responsibilities.",
    readTime: "5 min read",
    date: "Jan 2025",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&q=80&fit=crop",
    featured: false,
  },
  {
    category: "Medical Management",
    categoryClass: "tag-health",
    title: "Why India's Healthcare System Needs AI Product Managers Now",
    excerpt:
      "India's healthcare sector is at an inflection point. With 1.4 billion people and a doctor-to-patient ratio far below WHO recommendations, AI-driven product management offers a scalable path to closing the gap.",
    readTime: "6 min read",
    date: "Dec 2024",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80&fit=crop",
    featured: false,
  },
];

const BlogCard = ({ post, large = false }: { post: typeof posts[0]; large?: boolean }) => (
  <div className="group relative rounded-4xl overflow-hidden card-hover cursor-pointer h-full">
    {/* Image */}
    <div className={`relative overflow-hidden bg-muted rounded-4xl ${large ? "aspect-[16/9]" : "aspect-[4/3]"}`}>
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

      {/* Content overlay */}
      <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between">
        {/* Top: category + read time */}
        <div className="flex items-start justify-between gap-2">
          <span className={`px-3 py-1.5 rounded-full text-xs font-medium backdrop-blur-md font-sans ${post.categoryClass} bg-opacity-80`}>
            {post.category}
          </span>
          <span className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-xs text-white border border-white/30 font-sans">
            <Clock size={10} />
            {post.readTime}
          </span>
        </div>

        {/* Bottom: date + title */}
        <div className="flex items-end justify-between gap-4">
          <div className="flex-1">
            <span className="text-white/50 text-xs block mb-2 font-sans">{post.date}</span>
            <h3 className={`text-white font-bold leading-tight font-serif ${large ? "text-xl md:text-2xl" : "text-base md:text-lg"}`}>
              {post.title}
            </h3>
            {large && (
              <p className="text-white/70 text-sm mt-2 leading-relaxed font-sans line-clamp-2">
                {post.excerpt}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Floating arrow button */}
      <div className="absolute bottom-6 right-6 floating-button">
        <ArrowUpRight className="w-5 h-5" />
      </div>
    </div>
  </div>
);

const Blog = () => {
  return (
    <section id="blog" className="py-10 px-4">
      <div className="max-w-5xl mx-auto">

        {/* Section label */}
        <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground font-sans mb-4">
          Blog &amp; Insights
        </p>

        {/* Heading + view all */}
        <div className="flex items-end justify-between mb-5">
          <h2 className="font-serif text-3xl md:text-4xl font-bold leading-tight text-foreground">
            Perspectives on{" "}
            <em className="not-italic text-accent">AI &amp; Healthcare</em>
          </h2>
          <a href="#" className="hidden sm:flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors font-sans">
            View All →
          </a>
        </div>

        {/* Blog grid — reference blog layout */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Featured large card */}
          <div className="sm:col-span-2 md:col-span-2">
            <BlogCard post={posts[0]} large />
          </div>
          {/* Small card */}
          <div>
            <BlogCard post={posts[1]} />
          </div>
          {/* Two more small cards */}
          <div>
            <BlogCard post={posts[2]} />
          </div>
          <div>
            <BlogCard post={posts[3]} />
          </div>

          {/* Newsletter / subscribe card */}
          <div className="rounded-4xl bg-card border border-border overflow-hidden flex flex-col justify-center p-8 gap-4">
            <h3 className="font-serif text-xl font-bold text-foreground leading-snug">
              Stay Updated on AI &amp; Healthcare Insights
            </h3>
            <p className="text-xs text-muted-foreground font-sans leading-relaxed">
              Get my latest articles on prompt engineering, RAG, healthcare AI, and MBA strategy delivered to your inbox.
            </p>
            <div className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full px-4 py-2.5 rounded-full border border-border bg-background text-sm font-sans text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/30"
              />
              <button className="w-full px-4 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-all font-sans">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
