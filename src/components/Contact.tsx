import { Mail, Phone, Linkedin, MapPin, Send, MessageSquare, Briefcase, Users } from "lucide-react";
import { useState } from "react";

const services = [
  {
    icon: Briefcase,
    title: "AI Product Strategy",
    description: "End-to-end AI product roadmapping, prompt engineering strategy, RAG pipeline design, and go-to-market planning for healthcare and enterprise AI products.",
    color: "var(--accent-green)",
  },
  {
    icon: MessageSquare,
    title: "Healthcare Technology Consulting",
    description: "Advisory on digital health transformation, IoT implementation, AI automation with n8n, and clinical workflow optimization for hospitals and health-tech startups.",
    color: "var(--accent-cyan)",
  },
  {
    icon: Users,
    title: "MBA Mentorship & Collaboration",
    description: "Open to collaborative research, AI product case study partnerships, and peer mentorship with fellow MBA students and early-career professionals.",
    color: "var(--accent-violet)",
  },
];

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
    <section id="contact" className="py-24 px-6" style={{ background: "rgba(16,185,129,0.015)" }}>
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-16 text-center">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "var(--accent-green)" }}>
            Contact & Services
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-syne">
            Let's Build Something{" "}
            <span className="gradient-text">Meaningful Together</span>
          </h2>
          <div className="section-divider mx-auto mb-6" />
          <p className="text-muted-foreground max-w-xl mx-auto">
            Whether you are a recruiter, a healthcare organization, an AI/tech company, or an investor —
            I would love to connect and explore how we can create impact together.
          </p>
        </div>

        {/* Services */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.title} className="glass-card rounded-2xl p-6 text-center">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4"
                  style={{ background: `${s.color}15`, border: `1px solid ${s.color}30` }}>
                  <Icon size={20} style={{ color: s.color }} />
                </div>
                <h3 className="font-semibold text-foreground mb-2 font-syne">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.description}</p>
              </div>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Contact info */}
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-6 font-syne">Get In Touch</h3>
            <div className="space-y-4 mb-8">
              {[
                { icon: Mail,     label: "Email",    value: "gmddastageer@gmail.com",                                   href: "mailto:gmddastageer@gmail.com",                                  color: "var(--accent-green)" },
                { icon: Phone,    label: "Phone",    value: "+91 9490133147",                                            href: "tel:+919490133147",                                              color: "var(--accent-cyan)" },
                { icon: Linkedin, label: "LinkedIn", value: "mohammed-dastageer-g",                                      href: "https://www.linkedin.com/in/mohammed-dastageer-g-a57019120",    color: "var(--accent-violet)" },
                { icon: MapPin,   label: "Location", value: "Bangalore, India",                                          href: "#",                                                              color: "var(--accent-amber)" },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <a key={item.label} href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 glass-card rounded-xl p-4 group">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: `${item.color}15`, border: `1px solid ${item.color}30` }}>
                      <Icon size={16} style={{ color: item.color }} />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground">{item.label}</div>
                      <div className="text-sm font-medium text-foreground group-hover:text-white transition-colors">
                        {item.value}
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Availability */}
            <div className="glass-card rounded-xl p-5" style={{ borderColor: "rgba(16,185,129,0.3)" }}>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full pulse-glow" style={{ background: "var(--accent-green)" }} />
                <span className="text-sm font-semibold text-foreground">Available for Opportunities</span>
              </div>
              <p className="text-xs text-muted-foreground">
                Currently open to full-time roles, internships, consulting engagements, and collaborative research
                projects in AI PM, healthcare technology, and business strategy.
              </p>
            </div>
          </div>

          {/* Contact form */}
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-6 font-syne">Send a Message</h3>
            {sent ? (
              <div className="glass-card rounded-2xl p-8 text-center">
                <div className="w-14 h-14 rounded-full mx-auto mb-4 flex items-center justify-center"
                  style={{ background: "rgba(16,185,129,0.15)" }}>
                  <Send size={22} style={{ color: "var(--accent-green)" }} />
                </div>
                <h4 className="font-bold text-foreground mb-2 font-syne">Message Sent!</h4>
                <p className="text-sm text-muted-foreground">Thank you for reaching out. I'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-muted-foreground mb-1.5 block font-medium">Full Name</label>
                    <input name="name" value={form.name} onChange={handleChange} required placeholder="Your name"
                      className="w-full px-4 py-3 rounded-xl text-sm text-foreground placeholder:text-muted-foreground outline-none transition-all"
                      style={{ background: "var(--card)", border: "1px solid var(--border)" }} />
                  </div>
                  <div>
                    <label className="text-xs text-muted-foreground mb-1.5 block font-medium">Email Address</label>
                    <input name="email" type="email" value={form.email} onChange={handleChange} required placeholder="your@email.com"
                      className="w-full px-4 py-3 rounded-xl text-sm text-foreground placeholder:text-muted-foreground outline-none transition-all"
                      style={{ background: "var(--card)", border: "1px solid var(--border)" }} />
                  </div>
                </div>
                <div>
                  <label className="text-xs text-muted-foreground mb-1.5 block font-medium">Subject</label>
                  <select name="subject" value={form.subject} onChange={handleChange} required
                    className="w-full px-4 py-3 rounded-xl text-sm text-foreground outline-none transition-all"
                    style={{ background: "var(--card)", border: "1px solid var(--border)" }}>
                    <option value="">Select a topic...</option>
                    <option value="job">Job / Internship Opportunity</option>
                    <option value="consulting">Consulting / Advisory</option>
                    <option value="research">Research Collaboration</option>
                    <option value="mentorship">Mentorship</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs text-muted-foreground mb-1.5 block font-medium">Message</label>
                  <textarea name="message" value={form.message} onChange={handleChange} required rows={5}
                    placeholder="Tell me about the opportunity or how I can help..."
                    className="w-full px-4 py-3 rounded-xl text-sm text-foreground placeholder:text-muted-foreground outline-none transition-all resize-none"
                    style={{ background: "var(--card)", border: "1px solid var(--border)" }} />
                </div>
                <button type="submit"
                  className="w-full py-3 rounded-xl font-semibold text-sm text-white flex items-center justify-center gap-2 hover:opacity-85 transition-opacity gentle-animation"
                  style={{ background: "linear-gradient(135deg, #10b981, #06b6d4)" }}>
                  <Send size={15} />
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>

        {/* ── Bottom contact strip ── */}
        <div className="mt-20 pt-10 border-t border-border">
          <h3 className="text-center text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-8">
            Direct Contact
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { icon: Phone,    label: "Phone",    value: "+91 9490133147",          href: "tel:+919490133147",                                           color: "var(--accent-green)" },
              { icon: Mail,     label: "Gmail",    value: "gmddastageer@gmail.com",  href: "mailto:gmddastageer@gmail.com",                               color: "var(--accent-cyan)" },
              { icon: Linkedin, label: "LinkedIn", value: "Connect on LinkedIn",     href: "https://www.linkedin.com/in/mohammed-dastageer-g-a57019120",  color: "var(--accent-violet)" },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <a key={item.label} href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 glass-card rounded-2xl px-6 py-4 group min-w-[200px] justify-center">
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: `${item.color}15`, border: `1px solid ${item.color}30` }}>
                    <Icon size={16} style={{ color: item.color }} />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">{item.label}</div>
                    <div className="text-sm font-semibold text-foreground group-hover:text-white transition-colors">
                      {item.value}
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
