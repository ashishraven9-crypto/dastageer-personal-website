import { ArrowUpRight, Linkedin, Mail, MapPin, Brain, Stethoscope, Cpu, ChevronDown } from "lucide-react";
import { useTypewriter } from "@/hooks/useTypewriter";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useCounter } from "@/hooks/useCounter";

const roles = [
  "AI Product Manager",
  "Medical Management Specialist",
  "LLM Engineer",
  "Healthcare Strategist",
  "MBA @ NIT Kurukshetra",
];

const StatCard = ({ value, suffix, label, active }: { value: number; suffix: string; label: string; active: boolean }) => {
  const count = useCounter(value, 1800, active);
  return (
    <div className="text-center group">
      <div className="font-serif text-3xl md:text-4xl font-black text-foreground tabular-nums transition-all duration-300 group-hover:scale-110">
        {count}{suffix}
      </div>
      <div className="text-xs text-muted-foreground font-sans mt-1 tracking-wide uppercase">{label}</div>
    </div>
  );
};

const Hero = () => {
  const typed = useTypewriter(roles, 70, 2000);
  const { ref: statsRef, visible: statsVisible } = useScrollReveal(0.3);

  return (
    <section id="hero" className="pt-28 pb-6 px-4 relative z-10">
      <div className="max-w-5xl mx-auto">

        {/* Main hero card */}
        <div className="rounded-4xl bg-card border border-border overflow-hidden animate-scale-in relative group">
          {/* Animated gradient border glow on hover */}
          <div className="absolute inset-0 rounded-4xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
            style={{ background: "linear-gradient(135deg, rgba(0,0,0,0.04) 0%, rgba(0,0,0,0.08) 100%)" }} />

          <div className="grid md:grid-cols-2 gap-0 min-h-[440px]">

            {/* Left — animated identity panel */}
            <div className="relative overflow-hidden bg-muted min-h-[300px] md:min-h-0 flex items-center justify-center">
              {/* Animated concentric rings */}
              <div className="absolute inset-0 flex items-center justify-center">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="absolute rounded-full border border-border/40"
                    style={{
                      width: `${i * 80}px`,
                      height: `${i * 80}px`,
                      animation: `spin ${8 + i * 4}s linear infinite ${i % 2 === 0 ? "reverse" : ""}`,
                      opacity: 1 - i * 0.15,
                    }}
                  />
                ))}
              </div>

              {/* Floating dots */}
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1.5 h-1.5 rounded-full bg-foreground/20"
                  style={{
                    top: `${15 + i * 13}%`,
                    left: `${10 + (i % 3) * 30}%`,
                    animation: `float ${3 + i * 0.5}s ease-in-out infinite`,
                    animationDelay: `${i * 0.4}s`,
                  }}
                />
              ))}

              {/* Center monogram */}
              <div className="relative z-10 flex flex-col items-center gap-4">
                <div
                  className="w-24 h-24 rounded-full bg-foreground text-background flex items-center justify-center text-2xl font-bold font-sans tracking-tight shadow-2xl"
                  style={{ animation: "pulse-glow 3s ease-in-out infinite" }}
                >
                  GMD
                </div>
                <div className="text-center">
                  <p className="font-serif font-bold text-foreground text-lg">G.Md.Dastageer</p>
                  <p className="text-xs text-muted-foreground font-sans mt-1">MBA · NIT Kurukshetra</p>
                </div>
              </div>

              {/* MBA badge */}
              <div className="absolute top-5 left-5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-background/80 backdrop-blur-md text-xs font-medium text-foreground border border-border font-sans animate-fade-in">
                  <span className="w-1.5 h-1.5 rounded-full bg-foreground animate-pulse" />
                  MBA @ NIT Kurukshetra
                </span>
              </div>

              {/* Skill pills */}
              <div className="absolute bottom-5 left-5 right-5 flex flex-wrap gap-2 justify-center">
                {[
                  { icon: Brain, label: "AI PM" },
                  { icon: Stethoscope, label: "Medical Mgmt" },
                  { icon: Cpu, label: "LLM Engineering" },
                ].map(({ icon: Icon, label }, i) => (
                  <span
                    key={label}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-background/70 backdrop-blur-sm border border-border text-xs font-medium text-foreground font-sans hover:bg-foreground hover:text-background transition-all duration-300 cursor-default"
                    style={{ animationDelay: `${i * 0.2}s` }}
                  >
                    <Icon size={10} />
                    {label}
                  </span>
                ))}
              </div>
            </div>

            {/* Right — content */}
            <div className="p-8 md:p-12 flex flex-col justify-center gap-5">
              {/* Location pill */}
              <div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-muted text-xs font-medium text-muted-foreground border border-border font-sans">
                  <MapPin size={11} />
                  Bangalore, India · Open to Opportunities
                </span>
              </div>

              {/* Heading with typewriter */}
              <div>
                <h1 className="font-serif text-4xl md:text-5xl font-black leading-[1.1] tracking-tight text-foreground mb-3">
                  Journey Through<br />
                  <em className="not-italic text-foreground/80">AI &amp; Healthcare</em>
                </h1>
                {/* Typewriter subtitle */}
                <div className="h-7 flex items-center">
                  <span className="text-base font-semibold text-foreground/70 font-sans">
                    {typed}
                    <span className="inline-block w-0.5 h-5 bg-foreground ml-0.5 animate-pulse align-middle" />
                  </span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed font-sans max-w-sm mt-3">
                  Bridging artificial intelligence, healthcare management, and strategic business
                  thinking — building products that create real-world impact across India.
                </p>
              </div>

              {/* CTA + socials */}
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#projects"
                  className="flex items-center gap-2 px-6 py-3 rounded-full bg-foreground text-background text-sm font-semibold hover:bg-foreground/80 hover:scale-105 transition-all font-sans shadow-lg hover:shadow-xl"
                >
                  View My Work
                  <ArrowUpRight size={14} />
                </a>
                <div className="flex items-center gap-2">
                  {[
                    { href: "https://www.linkedin.com/in/mohammed-dastageer-g-a57019120", icon: Linkedin, label: "LinkedIn" },
                    { href: "mailto:gmddastageer@gmail.com", icon: Mail, label: "Email" },
                  ].map(({ href, icon: Icon, label }) => (
                    <a
                      key={label}
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="w-11 h-11 rounded-full border-2 border-border hover:border-foreground hover:bg-foreground hover:text-background transition-all flex items-center justify-center hover:scale-110 text-muted-foreground hover:text-background duration-300"
                    >
                      <Icon size={15} />
                    </a>
                  ))}
                </div>
              </div>

              {/* Animated Stats */}
              <div ref={statsRef} className="flex items-center gap-6 pt-4 border-t border-border">
                <StatCard value={1} suffix="+" label="Years Exp." active={statsVisible} />
                <div className="w-px h-8 bg-border" />
                <StatCard value={20} suffix="+" label="Certifications" active={statsVisible} />
                <div className="w-px h-8 bg-border" />
                <StatCard value={2} suffix="" label="Key Domains" active={statsVisible} />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center mt-8 animate-bounce">
          <ChevronDown size={20} className="text-muted-foreground" />
        </div>

        {/* Intro tagline */}
        <div className="max-w-3xl mx-auto py-10 text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-bold leading-tight text-foreground animate-slide-up">
            Perspective is a space where AI meets healthcare — exploring ideas, building products,
            and discovering new ways to transform medicine through technology.
          </h2>
          <p className="mt-5 text-base text-muted-foreground leading-relaxed font-sans animate-slide-up stagger-1">
            From prompt engineering and RAG pipelines to clinical decision support and hospital operations,
            I bring an interdisciplinary perspective grounded in an MBA from NIT Kurukshetra
            and a B.Tech in Electrical Engineering from Amrita School of Engineering, Bangalore.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
