import { Linkedin, Mail, Phone, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="border-t border-border py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-xs">
                G
              </div>
              <span className="font-semibold text-foreground">G. Mohammed Dastageer</span>
            </div>
            <p className="text-xs text-muted-foreground max-w-xs">
              MBA Candidate · AI Product Manager · Medical Management Specialist · Bangalore, India
            </p>
          </div>

          {/* Nav links */}
          <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
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
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/mohammed-dastageer-g-a57019120"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg glass-card flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
            >
              <Linkedin size={15} />
            </a>
            <a
              href="mailto:gmddasageer@gmail.com"
              className="w-9 h-9 rounded-lg glass-card flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail size={15} />
            </a>
            <a
              href="tel:+919490133147"
              className="w-9 h-9 rounded-lg glass-card flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
            >
              <Phone size={15} />
            </a>
            <button
              onClick={scrollToTop}
              className="w-9 h-9 rounded-lg glass-card flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors ml-2"
            >
              <ArrowUp size={15} />
            </button>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
          <span>© 2025 Gooduru Mohammed Dastageer. All rights reserved.</span>
          <span>Built with React · TypeScript · TailwindCSS</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
