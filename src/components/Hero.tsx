import { ArrowDown, Linkedin, Mail, MapPin } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient mesh */}
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 30% 40%, rgba(79,142,247,0.08) 0%, transparent 60%), radial-gradient(ellipse at 70% 60%, rgba(139,92,246,0.06) 0%, transparent 60%)" }} />

      {/* Floating particles */}
      <div className="absolute top-24 left-16 w-2 h-2 rounded-full float-gentle opacity-40" style={{ background: "var(--accent-blue)" }} />
      <div className="absolute top-48 right-24 w-3 h-3 rounded-full drift-left opacity-30" style={{ background: "var(--accent-teal)" }} />
      <div className="absolute bottom-40 left-1/3 w-2 h-2 rounded-full drift-right opacity-35" style={{ background: "var(--accent-purple)" }} />
      <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 rounded-full float-gentle opacity-25" style={{ background: "var(--accent-gold)", animationDelay: "2s" }} />
      <div className="absolute bottom-1/3 right-16 w-2 h-2 rounded-full drift-left opacity-20" style={{ background: "var(--accent-teal)", animationDelay: "3s" }} />

      {/* Main content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-24">
        {/* Status badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-card/60 text-xs font-medium text-muted-foreground mb-8 fade-in-up">
          <span className="w-2 h-2 rounded-full pulse-glow" style={{ background: "var(--accent-teal)" }} />
          Open to Opportunities &nbsp;·&nbsp; MBA Candidate &nbsp;·&nbsp; Bangalore, India
        </div>

        {/* Name */}
        <h1 className="font-playfair text-5xl md:text-7xl font-bold mb-4 fade-in-up" style={{ animationDelay: "0.1s" }}>
          Gooduru Mohammed
          <br />
          <span className="gradient-text">Dastageer</span>
        </h1>

        {/* Tagline */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-3 fade-in-up" style={{ animationDelay: "0.2s" }}>
          MBA Candidate &nbsp;·&nbsp; AI Product Manager &nbsp;·&nbsp; Medical Management Specialist
        </p>

        {/* Brief pitch */}
        <p className="text-base text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed fade-in-up" style={{ animationDelay: "0.3s" }}>
          Bridging the gap between{" "}
          <span className="text-foreground font-medium">artificial intelligence</span>,{" "}
          <span className="text-foreground font-medium">healthcare management</span>, and{" "}
          <span className="text-foreground font-medium">strategic business thinking</span>{" "}
          — building products and systems that create measurable real-world impact.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4 justify-center mb-12 fade-in-up" style={{ animationDelay: "0.4s" }}>
          <a
            href="#projects"
            className="px-6 py-3 rounded-xl font-semibold text-sm text-white transition-all hover:opacity-90 hover:-translate-y-0.5 gentle-animation"
            style={{ background: "linear-gradient(135deg, var(--accent-blue), var(--accent-purple))" }}
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-xl font-semibold text-sm border border-border text-foreground glass-card hover:-translate-y-0.5"
          >
            Get In Touch
          </a>
        </div>

        {/* Social links */}
        <div className="flex items-center justify-center gap-4 fade-in-up" style={{ animationDelay: "0.5s" }}>
          <a
            href="https://www.linkedin.com/in/mohammed-dastageer-g-a57019120"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <Linkedin size={15} />
            LinkedIn
          </a>
          <span className="w-1 h-1 rounded-full bg-border" />
          <a
            href="mailto:gmddasageer@gmail.com"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <Mail size={15} />
            gmddasageer@gmail.com
          </a>
          <span className="w-1 h-1 rounded-full bg-border" />
          <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <MapPin size={13} />
            Bangalore
          </span>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-6 max-w-lg mx-auto mt-16 fade-in-up" style={{ animationDelay: "0.6s" }}>
          {[
            { value: "4+", label: "Years Experience" },
            { value: "10+", label: "Certifications" },
            { value: "2", label: "Key Domains" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl font-bold gradient-text">{stat.value}</div>
              <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-muted-foreground hover:text-foreground transition-colors float-gentle"
      >
        <span className="text-xs font-medium tracking-widest uppercase opacity-60">Scroll</span>
        <ArrowDown size={15} className="opacity-60" />
      </a>
    </section>
  );
};

export default Hero;
