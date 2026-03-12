import { ArrowUpRight, Clock, ChevronDown, ChevronUp } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const posts = [
  {
    category: "Generative AI",
    categoryClass: "tag-ai",
    title: "AI Hallucination Mitigation Strategies: A Comprehensive Guide",
    excerpt:
      "LLMs confidently produce false information — a phenomenon called hallucination. As an AI PM and MBA student, I break down the root causes, real-world consequences in healthcare, and the most effective mitigation strategies available today.",
    readTime: "9 min read",
    date: "Mar 2026",
    image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80&fit=crop",
    featured: true,
    fullPost: true,
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
  {
    category: "RAG & LLM",
    categoryClass: "tag-mba",
    title: "RAG vs Fine-tuning: Which Strategy Should Your AI Product Use?",
    excerpt:
      "Retrieval Augmented Generation and model fine-tuning solve fundamentally different problems. Drawing from hands-on experience building healthcare AI products, I break down when to use each strategy.",
    readTime: "7 min read",
    date: "Nov 2024",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80&fit=crop",
    featured: false,
  },
];

const hallucination_sections = [
  {
    heading: "What Is AI Hallucination?",
    content: `AI hallucination refers to the phenomenon where a large language model (LLM) generates text that is factually incorrect, fabricated, or entirely disconnected from reality — yet presented with full confidence. The term borrows from psychology, where hallucinations involve perceiving things that do not exist.

In the context of LLMs like GPT-4, Gemini, or Claude, hallucinations manifest as invented citations, false medical facts, non-existent legal precedents, or plausible-sounding but wrong product specifications. For an AI Product Manager, hallucination is not merely a technical bug — it is a product risk, a liability, and a trust-breaking event.`,
  },
  {
    heading: "Why Do LLMs Hallucinate?",
    content: `LLMs are trained to predict the next token based on statistical patterns in vast text corpora. They do not "know" facts — they approximate them. Several root causes drive hallucinations:

**Training data gaps:** If the model was not trained on accurate or sufficient data about a topic, it fills the gap with plausible-sounding interpolations.

**Overconfidence in generation:** LLMs are optimized to produce fluent, confident text. There is no built-in mechanism to say "I don't know" unless specifically trained for it.

**Context window limitations:** When a prompt exceeds the model's context window, it may lose track of earlier constraints and generate inconsistent outputs.

**Prompt ambiguity:** Vague or underspecified prompts give the model too much freedom to invent details.`,
  },
  {
    heading: "Real-World Consequences in Healthcare",
    content: `The stakes of hallucination are highest in high-stakes domains like healthcare. Consider these scenarios:

A clinical decision support system powered by an LLM suggests a drug dosage that was never validated for a specific patient population — the model invented a plausible-sounding but incorrect protocol.

A medical chatbot confidently cites a non-existent clinical trial to justify a treatment recommendation, which a physician then acts upon.

As an MBA student specializing in Medical Management and AI PM, I have studied how these failures erode institutional trust in AI systems and create regulatory exposure. The FDA's evolving guidance on AI/ML-based Software as a Medical Device (SaMD) directly addresses the need for hallucination controls.`,
  },
  {
    heading: "Mitigation Strategy 1 — RAG",
    content: `RAG is the most widely adopted strategy for grounding LLM outputs in verified, up-to-date information. Instead of relying solely on the model's parametric memory, RAG retrieves relevant documents from a curated knowledge base at inference time and injects them into the prompt as context.

**How it works:** A user query is converted into a vector embedding, which is used to retrieve semantically similar documents from a vector database (e.g., Pinecone, Weaviate, ChromaDB). These documents are prepended to the prompt, giving the model factual grounding before it generates a response.

**Why it reduces hallucination:** The model is explicitly told "here is the source material — answer from this." When the answer is not in the retrieved context, a well-prompted RAG system will say so rather than fabricate.`,
  },
  {
    heading: "Mitigation Strategy 2 — Prompt Engineering",
    content: `Thoughtful prompt design is the first line of defense against hallucination. Key techniques include:

**Chain-of-Thought (CoT) prompting:** Instructing the model to reason step-by-step before giving a final answer reduces confident leaps to wrong conclusions.

**Explicit uncertainty instructions:** Prompting the model with "If you are not certain, say 'I don't know'" significantly reduces fabrication.

**Structured output constraints:** Asking for JSON, tables, or specific formats forces the model to be precise and reduces free-form hallucination.`,
  },
  {
    heading: "Mitigation Strategy 3 — AI Guardrails",
    content: `Guardrails are programmatic layers that sit between the LLM and the end user, intercepting and filtering outputs before they reach production.

**Output validation:** Checking model outputs against known schemas, fact databases, or rule-based systems.

**Confidence scoring:** Some models and frameworks (e.g., LangChain, Guardrails AI) can estimate the model's confidence in a response and flag low-confidence outputs for human review.

**Human-in-the-loop (HITL):** For high-stakes decisions, routing uncertain or flagged outputs to a human reviewer before action is taken. This is especially critical in healthcare and legal domains.`,
  },
  {
    heading: "A PM's Framework for Hallucination Risk",
    content: `As an AI PM, I approach hallucination as a product risk management problem:

**1. Risk tiering:** Classify use cases by the cost of a hallucination. Apply mitigation effort proportionally.

**2. Evaluation benchmarks:** Establish hallucination rate baselines using datasets like TruthfulQA or HaluEval.

**3. Defense-in-depth:** Layer RAG + prompt engineering + guardrails + HITL for high-stakes applications.

**4. Transparency by design:** Surface uncertainty to users. A product that says "I'm not confident — please verify" builds more trust than one that confidently hallucinates.`,
  },
  {
    heading: "Conclusion",
    content: `AI hallucination is not a problem that will be "solved" by a single breakthrough. It is a systemic characteristic of current LLM architectures that must be managed through a combination of technical controls, product design choices, and organizational processes.

For AI PMs and healthcare technologists, the imperative is clear: deploy LLMs responsibly, with layered safeguards, transparent uncertainty communication, and robust evaluation pipelines.

— G.Md.Dastageer, MBA (AI PM & Medical Management), NIT Kurukshetra`,
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

const BlogCard = ({ post, large = false }: { post: typeof posts[0]; large?: boolean }) => (
  <div className="group relative rounded-3xl sm:rounded-4xl overflow-hidden card-hover cursor-pointer h-full">
    <div
      className={`relative overflow-hidden bg-muted rounded-3xl sm:rounded-4xl w-full`}
      style={{ aspectRatio: large ? "16/9" : "4/3" }}
    >
      <img
        src={post.image}
        alt={post.title}
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />
      <div className="absolute inset-0 p-4 sm:p-5 flex flex-col justify-between">
        <div className="flex items-start justify-between gap-2">
          <span className="px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs font-medium backdrop-blur-md font-sans bg-white/20 text-white border border-white/30">
            {post.category}
          </span>
          <span className="flex items-center gap-1 px-2 sm:px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-[10px] sm:text-xs text-white border border-white/30 font-sans shrink-0">
            <Clock size={9} />
            {post.readTime}
          </span>
        </div>
        <div className="flex items-end justify-between gap-3">
          <div className="flex-1 min-w-0">
            <span className="text-white/50 text-[10px] block mb-1.5 font-sans">{post.date}</span>
            <h3 className={`text-white font-bold leading-tight font-serif ${large ? "text-base sm:text-xl md:text-2xl" : "text-sm sm:text-base md:text-lg"}`}>
              {post.title}
            </h3>
            {large && (
              <p className="text-white/70 text-xs sm:text-sm mt-1.5 leading-relaxed font-sans line-clamp-2 hidden sm:block">
                {post.excerpt}
              </p>
            )}
          </div>
        </div>
      </div>
      <div className="absolute bottom-4 sm:bottom-5 right-4 sm:right-5 floating-button w-8 h-8 sm:w-10 sm:h-10 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
        <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
      </div>
    </div>
  </div>
);

const Blog = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="blog" className="py-8 sm:py-10 px-3 sm:px-4 relative z-10">
      <div className="max-w-5xl mx-auto">

        <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground font-sans mb-4">
          Blog &amp; Insights
        </p>

        <div className="flex items-end justify-between mb-4 sm:mb-5 gap-3">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold leading-tight text-foreground">
            Perspectives on{" "}
            <em className="not-italic text-foreground/60">AI &amp; Healthcare</em>
          </h2>
          <a href="#" className="hidden sm:flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors font-sans shrink-0">
            View All →
          </a>
        </div>

        {/* ── Featured AI Hallucination Full Post ── */}
        <RevealCard className="rounded-3xl sm:rounded-4xl bg-card border border-border overflow-hidden mb-4 sm:mb-5">
          {/* Hero image */}
          <div className="relative overflow-hidden bg-muted" style={{ aspectRatio: "21/7", minHeight: "120px" }}>
            <img
              src="https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1200&q=80&fit=crop"
              alt="AI Hallucination"
              loading="lazy"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
            <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6">
              <div className="flex items-center gap-2 mb-2 sm:mb-3 flex-wrap">
                <span className="px-2 sm:px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-[10px] sm:text-xs text-white border border-white/30 font-sans">
                  Featured · Generative AI
                </span>
                <span className="flex items-center gap-1 px-2 sm:px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-[10px] sm:text-xs text-white border border-white/30 font-sans">
                  <Clock size={9} /> 9 min read
                </span>
              </div>
              <h3 className="font-serif text-base sm:text-2xl md:text-3xl font-bold text-white leading-tight max-w-2xl">
                AI Hallucination Mitigation Strategies: A Comprehensive Guide
              </h3>
            </div>
          </div>

          {/* Article body */}
          <div className="p-5 sm:p-8 md:p-10">
            <div className="flex items-center gap-3 mb-5 sm:mb-6 pb-5 sm:pb-6 border-b border-border">
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-foreground text-background flex items-center justify-center text-xs font-bold font-sans shrink-0">
                GMD
              </div>
              <div className="min-w-0">
                <p className="text-sm font-semibold text-foreground font-sans">G.Md.Dastageer</p>
                <p className="text-[10px] sm:text-xs text-muted-foreground font-sans truncate">MBA · NIT Kurukshetra · AI PM &amp; Medical Management · Mar 2026</p>
              </div>
            </div>

            {/* Introduction — always visible */}
            <div className="mb-5 sm:mb-6 space-y-3 sm:space-y-4">
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed font-sans">
                LLMs confidently produce false information — a phenomenon called <strong className="text-foreground">hallucination</strong>.
                As an AI Product Manager and MBA student specializing in Medical Management, I have spent considerable time
                studying how hallucinations emerge, why they are particularly dangerous in healthcare contexts, and what
                product and engineering strategies can meaningfully reduce their frequency and impact.
              </p>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed font-sans">
                This article covers the root causes of hallucination, real-world consequences in clinical settings,
                and a layered mitigation framework drawing from RAG, prompt engineering, guardrails, and fine-tuning.
              </p>
            </div>

            {/* Expandable full article */}
            {expanded && (
              <div className="space-y-5 sm:space-y-8 mb-5 sm:mb-6">
                {hallucination_sections.map((section, i) => (
                  <div key={i} className="border-l-2 border-border pl-4 sm:pl-6">
                    <h4 className="font-serif text-base sm:text-lg font-bold text-foreground mb-2 sm:mb-3">{section.heading}</h4>
                    <div className="space-y-2 sm:space-y-3">
                      {section.content.split("\n\n").map((para, j) => (
                        <p key={j} className="text-xs sm:text-sm text-muted-foreground leading-relaxed font-sans">
                          {para.startsWith("**") ? (
                            <span dangerouslySetInnerHTML={{
                              __html: para.replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground">$1</strong>')
                            }} />
                          ) : para}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Read more / collapse button */}
            <button
              onClick={() => setExpanded(!expanded)}
              className="flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full border border-border hover:bg-foreground hover:text-background transition-all text-xs sm:text-sm font-semibold font-sans text-foreground"
              style={{ background: "hsl(36, 25%, 93%)" }}
            >
              {expanded ? (
                <><ChevronUp size={13} /> Collapse Article</>
              ) : (
                <><ChevronDown size={13} /> Read Full Article (9 min)</>
              )}
            </button>
          </div>
        </RevealCard>

        {/* Other posts grid — 1 col mobile, 2 sm, 3 md */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
          {posts.slice(1, 4).map((post, i) => (
            <RevealCard key={post.title} delay={i * 80}>
              <BlogCard post={post} />
            </RevealCard>
          ))}

          <RevealCard delay={240}>
            <BlogCard post={posts[4]} />
          </RevealCard>

          {/* Newsletter card */}
          <RevealCard delay={300} className="sm:col-span-2">
            <div
              className="rounded-3xl sm:rounded-4xl border border-border overflow-hidden flex flex-col justify-center p-5 sm:p-8 gap-3 sm:gap-4 h-full"
              style={{ background: "linear-gradient(135deg, hsl(36,30%,96%) 0%, hsl(36,25%,92%) 100%)" }}
            >
              <h3 className="font-serif text-lg sm:text-xl font-bold text-foreground leading-snug">
                Stay Updated on AI &amp; Healthcare Insights
              </h3>
              <p className="text-[11px] sm:text-xs text-muted-foreground font-sans leading-relaxed">
                Get my latest articles on prompt engineering, RAG, healthcare AI, and MBA strategy delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 px-4 py-2.5 rounded-full border border-border bg-background text-sm font-sans text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-foreground/20"
                />
                <button className="px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-all font-sans whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </div>
          </RevealCard>
        </div>
      </div>
    </section>
  );
};

export default Blog;
