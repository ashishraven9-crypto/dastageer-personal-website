import { Mail, Phone, Linkedin, MapPin, Send, MessageSquare, Briefcase, Users, ArrowUpRight } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const services = [
  {
    icon: Briefcase,
    title: "AI Product Strategy",
    description: "End-to-end AI product roadmapping, prompt engineering strategy, RAG pipeline design, and go-to-market planning for healthcare and enterprise AI products.",
    tagClass: "tag-ai",
    tagLabel: "AI / LLM",
  },
  {
    icon: MessageSquare,
    title: "Healthcare Technology Consulting",
    description: "Advisory on digital health transformation, IoT implementation, AI automation with n8n, and clinical workflow optimization for hospitals and health-tech startups.",
    tagClass: "tag-health",
    tagLabel: "Healthcare",
  },
  {
    icon: Users,
    title: "MBA Mentorship & Collaboration",
    description: "Open to collaborative research, AI product case study partnerships, and peer mentorship with fellow MBA students and early-career professionals.",
    tagClass: "tag-mba",
    tagLabel: "Strategy",
  },
];

const contactItems = [
  { icon: Phone,    label: "Phone",    value: "+91 9490133147",                                        href: "tel:+919490133147",                                          tagClass: "tag-health" },
  { icon: Mail,     label: "Gmail",    value: "gmddastageer@gmail.com",                                href: "mailto:gmddastageer@gmail.com",                              tagClass: "tag-ai" },
  { icon: Linkedin, label: "LinkedIn", value: "mohammed-dastageer-g",                                  href: "https://www.linkedin.com/in/mohammed-dastageer-g-a57019120", tagClass: "tag-mba" },
  { icon: MapPin,   label: "Location", value: "Bangalore, India",                                      href: "#",                                                          tagClass: "tag-strategy" },
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

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="py-8 sm:py-10 px-3 sm:px-4 relative z-10">
      <div className="max-w-5xl mx-auto">

        <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground font-sans mb-4">
          Contact &amp; Services
        </p>

        {/* Heading card */}
        <RevealCard className="rounded-3xl sm:rounded-4xl bg-card border border-border p-6 sm:p-8 md:p-12 mb-4 sm:mb-5">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold leading-tight text-foreground mb-3">
            Let's Build Something{" "}
            <em className="not-italic text-foreground/60">Meaningful Together</em>
          </h2>
          <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed font-sans max-w-2xl">
            Whether you are a recruiter, a healthcare organization, an AI/tech company, or an investor —
            I would love to connect and explore how we can create impact together.
          </p>
        </RevealCard>

        {/* Services grid — 1 col mobile, 3 sm+ */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-4 sm:mb-5">
          {services.map((s, i) => (
            <RevealCard key={s.title} delay={i * 80} className="group rounded-2xl sm:rounded-3xl bg-card border border-border overflow-hidden card-hover h-full">
              <div className="p-4 sm:p-6 flex flex-col gap-2 sm:gap-3 h-full min-h-[140px] sm:min-h-[180px]">
                <div className="flex items-center justify-between">
                  <span className={`px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs font-medium font-sans ${s.tagClass}`}>
                    {s.tagLabel}
                  </span>
                  <div className="floating-button w-8 h-8 sm:w-9 sm:h-9">
                    <s.icon size={13} />
                  </div>
                </div>
                <h3 className="font-serif text-sm sm:text-base font-bold text-foreground leading-snug">{s.title}</h3>
                <p className="text-[11px] sm:text-xs text-muted-foreground leading-relaxed font-sans flex-1">{s.description}</p>
              </div>
            </RevealCard>
          ))}
        </div>

        {/* Contact info + form — stack on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-5">

          {/* Contact info card */}
          <RevealCard className="rounded-2xl sm:rounded-3xl bg-card border border-border p-5 sm:p-6 md:p-8 flex flex-col gap-3 sm:gap-4">
            <h3 className="font-serif text-base sm:text-lg font-bold text-foreground">Get In Touch</h3>
            <div className="space-y-2 sm:space-y-3">
              {contactItems.map(({ icon: Icon, label, value, href, tagClass }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-border hover:border-foreground/20 hover:shadow-sm transition-all group"
                  style={{ background: "hsl(36, 25%, 97%)" }}
                >
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-background border border-border flex items-center justify-center shrink-0 group-hover:bg-foreground group-hover:border-foreground transition-all">
                    <Icon size={13} className="text-muted-foreground group-hover:text-background transition-colors" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-[10px] sm:text-xs text-muted-foreground font-sans">{label}</p>
                    <p className="text-xs sm:text-sm font-semibold text-foreground font-sans truncate">{value}</p>
                  </div>
                  <span className={`px-1.5 sm:px-2 py-0.5 rounded-full text-[9px] sm:text-[10px] font-medium font-sans shrink-0 ${tagClass}`}>
                    {label}
                  </span>
                </a>
              ))}
            </div>
          </RevealCard>

          {/* Contact form card */}
          <RevealCard delay={100} className="rounded-2xl sm:rounded-3xl bg-card border border-border p-5 sm:p-6 md:p-8">
            <h3 className="font-serif text-base sm:text-lg font-bold text-foreground mb-4 sm:mb-5">Send a Message</h3>
            {sent ? (
              <div className="flex flex-col items-center justify-center h-full gap-4 py-8 sm:py-10 text-center">
                <div
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border flex items-center justify-center"
                  style={{ background: "hsl(36, 30%, 92%)", borderColor: "hsl(36, 25%, 80%)" }}
                >
                  <Send size={18} className="text-foreground" />
                </div>
                <h4 className="font-serif text-base sm:text-lg font-bold text-foreground">Message Sent!</h4>
                <p className="text-xs sm:text-sm text-muted-foreground font-sans">Thank you for reaching out. I'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-[10px] sm:text-xs text-muted-foreground mb-1 sm:mb-1.5 block font-medium font-sans">Full Name</label>
                    <input
                      name="name" value={form.name} onChange={handleChange} required placeholder="Your name"
                      aria-label="Full Name"
                      className="w-full px-3 sm:px-4 py-2 sm:py-2.5 rounded-full border border-border bg-background text-xs sm:text-sm font-sans text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-foreground/20"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] sm:text-xs text-muted-foreground mb-1 sm:mb-1.5 block font-medium font-sans">Email Address</label>
                    <input
                      name="email" type="email" value={form.email} onChange={handleChange} required placeholder="your@email.com"
                      aria-label="Email Address"
                      className="w-full px-3 sm:px-4 py-2 sm:py-2.5 rounded-full border border-border bg-background text-xs sm:text-sm font-sans text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-foreground/20"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-[10px] sm:text-xs text-muted-foreground mb-1 sm:mb-1.5 block font-medium font-sans">Subject</label>
                  <select
                    name="subject" value={form.subject} onChange={handleChange} required
                    aria-label="Subject"
                    className="w-full px-3 sm:px-4 py-2 sm:py-2.5 rounded-full border border-border bg-background text-xs sm:text-sm font-sans text-foreground focus:outline-none focus:ring-2 focus:ring-foreground/20"
                  >
                    <option value="">Select a topic...</option>
                    <option value="job">Job / Internship Opportunity</option>
                    <option value="consulting">Consulting / Advisory</option>
                    <option value="research">Research Collaboration</option>
                    <option value="mentorship">Mentorship</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="text-[10px] sm:text-xs text-muted-foreground mb-1 sm:mb-1.5 block font-medium font-sans">Message</label>
                  <textarea
                    name="message" value={form.message} onChange={handleChange} required rows={4}
                    placeholder="Tell me about the opportunity or how I can help..."
                    aria-label="Message"
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-2xl border border-border bg-background text-xs sm:text-sm font-sans text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-foreground/20 resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-2.5 sm:py-3 rounded-full bg-primary text-primary-foreground font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 hover:opacity-90 transition-all font-sans"
                >
                  <Send size={13} />
                  Send Message
                </button>
              </form>
            )}
          </RevealCard>
        </div>

        {/* Direct contact strip — beige background */}
        <RevealCard delay={200} className="rounded-3xl sm:rounded-4xl border border-border p-5 sm:p-6 md:p-8"
          style={{ background: "linear-gradient(135deg, hsl(36,30%,95%) 0%, hsl(36,25%,91%) 100%)" } as React.CSSProperties}
        >
          <p className="text-[10px] sm:text-xs font-semibold tracking-widest uppercase text-muted-foreground font-sans text-center mb-4 sm:mb-5">
            Direct Contact
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-2 sm:gap-4">
            {[
              { icon: Phone,    label: "Phone",    value: "+91 9490133147",         href: "tel:+919490133147" },
              { icon: Mail,     label: "Gmail",    value: "gmddastageer@gmail.com", href: "mailto:gmddastageer@gmail.com" },
              { icon: Linkedin, label: "LinkedIn", value: "Connect on LinkedIn",    href: "https://www.linkedin.com/in/mohammed-dastageer-g-a57019120" },
            ].map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 sm:px-6 py-3 sm:py-4 rounded-full bg-background border border-border hover:border-foreground/30 hover:shadow-md transition-all group w-full sm:w-auto justify-center sm:justify-start"
              >
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-border flex items-center justify-center shrink-0 group-hover:bg-foreground group-hover:border-foreground transition-all"
                  style={{ background: "hsl(36, 25%, 93%)" }}>
                  <Icon size={13} className="text-muted-foreground group-hover:text-background transition-colors" />
                </div>
                <div>
                  <p className="text-[10px] sm:text-xs text-muted-foreground font-sans">{label}</p>
                  <p className="text-xs sm:text-sm font-semibold text-foreground font-sans">{value}</p>
                </div>
                <ArrowUpRight size={12} className="text-muted-foreground group-hover:text-foreground transition-colors ml-1 shrink-0" />
              </a>
            ))}
          </div>
        </RevealCard>
      </div>
    </section>
  );
};

export default Contact;
