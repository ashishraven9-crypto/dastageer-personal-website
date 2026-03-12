import { Linkedin, Mail, Phone, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="px-3 sm:px-4 pb-6 sm:pb-8 pt-3 sm:pt-4">
      <div className="max-w-5xl mx-auto">
        {/* Main footer card */}
        <div
          className="rounded-3xl sm:rounded-4xl border border-border p-5 sm:p-8 md:p-10"
          style={{ background: "linear-gradient(135deg, hsl(36,30%,97%) 0%, hsl(36,25%,93%) 100%)" }}
        >
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-5 sm:gap-8">

            {/* Brand */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2.5">
                <span className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold font-sans tracking-tight">
                  GMD
                </span>
                <span className="font-serif font-bold text-foreground text-sm sm:text-base">G.Md.Dastageer</span>
              </div>
              <p className="text-[10px] sm:text-xs text-muted-foreground font-sans max-w-xs leading-relaxed">
                MBA · NIT Kurukshetra &nbsp;·&nbsp; AI Product Manager &nbsp;·&nbsp; Medical Management Specialist &nbsp;·&nbsp; Bangalore, India
              </p>
            </div>

            {/* Nav links — wrap nicely on mobile */}
            <div className="flex flex-wrap gap-x-4 sm:gap-x-5 gap-y-2 text-xs sm:text-sm text-muted-foreground font-sans">
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
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-border bg-background flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-all hover:scale-110"
                >
                  <Icon size={13} />
                </a>
              ))}
              <button
                onClick={scrollToTop}
                aria-label="Scroll to top"
                className="floating-button w-9 h-9 sm:w-10 sm:h-10 ml-1"
              >
                <ArrowUp size={13} />
              </button>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-5 sm:mt-8 pt-4 sm:pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-2 text-[10px] sm:text-xs text-muted-foreground font-sans text-center sm:text-left">
            <span>© 2025 Gooduru Mohammed Dastageer. All rights reserved.</span>
            <span>Built with React · TypeScript · TailwindCSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
