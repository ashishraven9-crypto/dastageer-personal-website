import { Mail, Phone, Linkedin, MapPin, Send, MessageSquare, Briefcase, Users, ArrowUpRight } from "lucide-react";
import { useState } from "react";

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
  { icon: Phone,    label: "Phone",    value: "+91 9490133147",                                         href: "tel:+919490133147",                                           tagClass: "tag-health" },
  { icon: Mail,     label: "Gmail",    value: "gmddastageer@gmail.com",                                 href: "mailto:gmddastageer@gmail.com",                               tagClass: "tag-ai" },
  { icon: Linkedin, label: "LinkedIn", value: "mohammed-dastageer-g",                                   href: "https://www.linkedin.com/in/mohammed-dastageer-g-a57019120",  tagClass: "tag-mba" },
  { icon: MapPin,   label: "Location", value: "Bangalore, India",                                       href: "#",                                                           tagClass: "tag-strategy" },
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
    <section id="contact" className="py-10 px-4">
      <div className="max-w-5xl mx-auto">

        {/* Section label */}
        <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground font-sans mb-4">
          Contact &amp; Services
        </p>

        {/* Heading card */}
        <div className="rounded-4xl bg-card border border-border p-8 md:p-12 mb-5">
          <h2 className="font-serif text-3xl md:text-4xl font-bold leading-tight text-foreground mb-3">
            Let's Build Something{" "}
            <em className="not-italic text-accent">Meaningful Together</em>
          </h2>
          <p className="text-muted-foreground text-sm leading-relaxed font-sans max-w-2xl">
            Whether you are a recruiter, a healthcare organization, an AI/tech company, or an investor —
            I would love to connect and explore how we can create impact together.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid sm:grid-cols-3 gap-4 mb-5">
          {services.map((s, i) => (
            <div key={s.title} className={`group rounded-3xl bg-card border border-border overflow-hidden card-hover animate-slide-up stagger-${i + 1}`}>
              <div className="p-6 flex flex-col gap-3 h-full min-h-[180px]">
                <div className="flex items-center justify-between">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium font-sans ${s.tagClass}`}>
                    {s.tagLabel}
                  </span>
                  <div className="floating-button w-9 h-9">
                    <s.icon size={14} />
                  </div>
                </div>
                <h3 className="font-serif text-base font-bold text-foreground leading-snug">{s.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed font-sans flex-1">{s.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Contact info + form */}
        <div className="grid md:grid-cols-2 gap-4 mb-4">

          {/* Contact info card */}
          <div className="rounded-3xl bg-card border border-border p-6 md:p-8 flex flex-col gap-4">
            <h3 className="font-serif text-lg font-bold text-foreground">Get In Touch</h3>

            <div className="space-y-3">
              {contactItems.map(({ icon: Icon, label, value, href, tagClass }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 rounded-2xl bg-muted/50 border border-border hover:border-accent/40 hover:bg-muted transition-all group"
                >
                  <div className="w-9 h-9 rounded-full bg-background border border-border flex items-center justify-center shrink-0">
                    <Icon size={14} className="text-muted-foreground group-hover:text-foreground transition-colors" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs text-muted-foreground font-sans">{label}</p>
                    <p className="text-sm font-semibold text-foreground font-sans truncate">{value}</p>
                  </div>
                  <span className={`px-2 py-0.5 rounded-full text-[10px] font-medium font-sans shrink-0 ${tagClass}`}>
                    {label}
                  </span>
                </a>
              ))}
            </div>


          </div>

          {/* Contact form card */}
          <div className="rounded-3xl bg-card border border-border p-6 md:p-8">
            <h3 className="font-serif text-lg font-bold text-foreground mb-5">Send a Message</h3>
            {sent ? (
              <div className="flex flex-col items-center justify-center h-full gap-4 py-10 text-center">
                <div className="w-14 h-14 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center">
                  <Send size={20} className="text-accent" />
                </div>
                <h4 className="font-serif text-lg font-bold text-foreground">Message Sent!</h4>
                <p className="text-sm text-muted-foreground font-sans">Thank you for reaching out. I'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="grid sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs text-muted-foreground mb-1.5 block font-medium font-sans">Full Name</label>
                    <input
                      name="name" value={form.name} onChange={handleChange} required placeholder="Your name"
                      className="w-full px-4 py-2.5 rounded-full border border-border bg-background text-sm font-sans text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/30"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-muted-foreground mb-1.5 block font-medium font-sans">Email Address</label>
                    <input
                      name="email" type="email" value={form.email} onChange={handleChange} required placeholder="your@email.com"
                      className="w-full px-4 py-2.5 rounded-full border border-border bg-background text-sm font-sans text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/30"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-xs text-muted-foreground mb-1.5 block font-medium font-sans">Subject</label>
                  <select
                    name="subject" value={form.subject} onChange={handleChange} required
                    className="w-full px-4 py-2.5 rounded-full border border-border bg-background text-sm font-sans text-foreground focus:outline-none focus:ring-2 focus:ring-accent/30"
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
                  <label className="text-xs text-muted-foreground mb-1.5 block font-medium font-sans">Message</label>
                  <textarea
                    name="message" value={form.message} onChange={handleChange} required rows={4}
                    placeholder="Tell me about the opportunity or how I can help..."
                    className="w-full px-4 py-3 rounded-2xl border border-border bg-background text-sm font-sans text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/30 resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 rounded-full bg-primary text-primary-foreground font-semibold text-sm flex items-center justify-center gap-2 hover:opacity-90 transition-all font-sans"
                >
                  <Send size={14} />
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Direct contact strip */}
        <div className="rounded-4xl bg-card border border-border p-6 md:p-8">
          <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground font-sans text-center mb-5">
            Direct Contact
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { icon: Phone,    label: "Phone",    value: "+91 9490133147",          href: "tel:+919490133147" },
              { icon: Mail,     label: "Gmail",    value: "gmddastageer@gmail.com",  href: "mailto:gmddastageer@gmail.com" },
              { icon: Linkedin, label: "LinkedIn", value: "Connect on LinkedIn",     href: "https://www.linkedin.com/in/mohammed-dastageer-g-a57019120" },
            ].map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-4 rounded-full bg-muted border border-border hover:border-accent/40 hover:bg-muted/80 transition-all group min-w-[200px] justify-center"
              >
                <div className="w-9 h-9 rounded-full bg-background border border-border flex items-center justify-center shrink-0">
                  <Icon size={14} className="text-muted-foreground group-hover:text-foreground transition-colors" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-sans">{label}</p>
                  <p className="text-sm font-semibold text-foreground font-sans">{value}</p>
                </div>
                <ArrowUpRight size={13} className="text-muted-foreground group-hover:text-foreground transition-colors ml-1" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
