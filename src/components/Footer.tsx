import { Linkedin, Mail, Phone, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="px-4 pb-8 pt-4">
      <div className="max-w-5xl mx-auto">
        {/* Main footer card */}
        <div className="rounded-4xl bg-card border border-border p-8 md:p-10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">

            {/* Brand */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2.5">
                <span className="w-9 h-9 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold font-serif">
                  G
                </span>
                <span className="font-serif font-bold text-foreground text-base">G. Mohammed Dastageer</span>
              </div>
              <p className="text-xs text-muted-foreground font-sans max-w-xs leading-relaxed">
                MBA · NIT Kurukshetra &nbsp;·&nbsp; AI Product Manager &nbsp;·&nbsp; Medical Management Specialist &nbsp;·&nbsp; Bangalore, India
              </p>
            </div>

            {/* Nav links */}
            <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground font-sans">
              {["About", "Skills", "Projects", "Experience", "Blog", "Contact"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="hover:text-foreground transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>

            {/* Social + scroll up */}
            <div className="flex items-center gap-2">
              {[
                { href: "https://www.linkedin.com/in/mohammed-dastageer-g-a57019120", icon: Linkedin, label: "LinkedIn", external: true },
                { href: "mailto:gmddastageer@gmail.com",                              icon: Mail,     label: "Email",    external: false },
                { href: "tel:+919490133147",                                          icon: Phone,    label: "Phone",    external: false },
              ].map(({ href, icon: Icon, label, external }) => (
                <a
                  key={label}
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-full border border-border bg-background flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-accent/40 transition-all hover:scale-110"
                >
                  <Icon size={14} />
                </a>
              ))}
              <button
                onClick={scrollToTop}
                aria-label="Scroll to top"
                className="floating-button w-10 h-10 ml-1"
              >
                <ArrowUp size={14} />
              </button>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-8 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted-foreground font-sans">
            <span>© 2025 Gooduru Mohammed Dastageer. All rights reserved.</span>
            <span>Built with React · TypeScript · TailwindCSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
