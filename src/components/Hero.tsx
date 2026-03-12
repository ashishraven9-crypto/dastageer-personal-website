import { ArrowUpRight, Linkedin, Mail, MapPin, Brain, Stethoscope, Cpu, ChevronDown } from "lucide-react";
import { useTypewriter } from "@/hooks/useTypewriter";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useCounter } from "@/hooks/useCounter";
import { useAB } from "@/contexts/ABContext";
import FloatingBadges from "./FloatingBadges";
import MagneticCard from "./MagneticCard";

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
    <div className="text-center group flex-1 min-w-0">
      <div className="font-serif text-2xl sm:text-3xl md:text-4xl font-black text-foreground tabular-nums transition-all duration-300 group-hover:scale-110">
        {count}{suffix}
      </div>
      <div className="text-[10px] sm:text-xs text-muted-foreground font-sans mt-1 tracking-wide uppercase leading-tight">{label}</div>
    </div>
  );
};

const Hero = () => {
  const typed = useTypewriter(roles, 70, 2000);
  const { ref: statsRef, visible: statsVisible } = useScrollReveal(0.3);
  const { track } = useAB();

  return (
    <section id="hero" className="pt-24 sm:pt-28 pb-6 px-3 sm:px-4 relative z-10">
      <div className="max-w-5xl mx-auto">

        {/* Main hero card — MagneticCard wrapper */}
        <MagneticCard strength={4} className="rounded-3xl sm:rounded-4xl overflow-hidden animate-scale-in relative group">
          <div className="rounded-3xl sm:rounded-4xl bg-card border border-border overflow-hidden relative">
            {/* Animated gradient hover glow */}
            <div
              className="absolute inset-0 rounded-3xl sm:rounded-4xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none animate-gradient"
              style={{
                background: "linear-gradient(135deg, hsl(var(--beige-light)) 0%, hsl(var(--beige-warm)) 50%, hsl(var(--beige-light)) 100%)",
              }}
            />

            {/* Floating badges overlay */}
            <FloatingBadges />

            <div className="grid md:grid-cols-2 gap-0">

              {/* Left — animated identity panel */}
              <div
                className="relative overflow-hidden flex items-center justify-center min-h-[260px] sm:min-h-[320px] md:min-h-[440px]"
                style={{ background: "linear-gradient(135deg, hsl(var(--beige-light)) 0%, hsl(var(--beige-mid)) 100%)" }}
              >
                {/* Morphing blob background */}
                <div
                  className="absolute morph-blob pointer-events-none"
                  style={{
                    width: "200px",
                    height: "200px",
                    background: "hsl(var(--beige-warm) / 0.35)",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                />
                <div
                  className="absolute morph-blob-2 pointer-events-none"
                  style={{
                    width: "140px",
                    height: "140px",
                    background: "hsl(var(--sand) / 0.25)",
                    top: "30%",
                    left: "30%",
                  }}
                />

                {/* Animated concentric rings */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div
                      key={i}
                      className="absolute rounded-full"
                      style={{
                        width: `${i * 64}px`,
                        height: `${i * 64}px`,
                        border: `1px solid hsl(var(--beige-warm) / ${0.6 - i * 0.08})`,
                        animation: `spin ${8 + i * 4}s linear infinite ${i % 2 === 0 ? "reverse" : ""}`,
                      }}
                    />
                  ))}
                </div>

                {/* Orbiting dot */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{
                      background: "hsl(var(--foreground) / 0.4)",
                      animation: "orbit 6s linear infinite",
                    }}
                  />
                </div>

                {/* Floating dots */}
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1.5 h-1.5 rounded-full"
                    style={{
                      background: `hsl(var(--sand))`,
                      top: `${15 + i * 13}%`,
                      left: `${10 + (i % 3) * 30}%`,
                      animation: `float ${3 + i * 0.5}s ease-in-out infinite`,
                      animationDelay: `${i * 0.4}s`,
                      opacity: 0.7,
                    }}
                  />
                ))}

                {/* Center monogram — glitch on hover */}
                <div className="relative z-10 flex flex-col items-center gap-3">
                  <div
                    className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-foreground text-background flex items-center justify-center text-xl sm:text-2xl font-bold font-sans tracking-tight shadow-2xl glitch cursor-default select-none"
                    data-text="GMD"
                    style={{ animation: "pulse-glow 3s ease-in-out infinite" }}
                  >
                    GMD
                  </div>
                  <div className="text-center px-4">
                    <p className="font-serif font-bold text-foreground text-base sm:text-lg">G.Md.Dastageer</p>
                    <p className="text-xs text-muted-foreground font-sans mt-1">MBA · NIT Kurukshetra</p>
                  </div>
                </div>

                {/* MBA badge */}
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-background/80 backdrop-blur-md text-xs font-medium text-foreground border border-border font-sans animate-fade-in">
                    <span className="w-1.5 h-1.5 rounded-full bg-foreground animate-pulse" />
                    MBA @ NIT Kurukshetra
                  </span>
                </div>

                {/* Skill pills */}
                <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-1.5 justify-center">
                  {[
                    { icon: Brain,       label: "AI PM" },
                    { icon: Stethoscope, label: "Medical Mgmt" },
                    { icon: Cpu,         label: "LLM Engineering" },
                  ].map(({ icon: Icon, label }, i) => (
                    <span
                      key={label}
                      className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-background/70 backdrop-blur-sm border border-border text-[10px] sm:text-xs font-medium text-foreground font-sans hover:bg-foreground hover:text-background transition-all duration-300 cursor-default"
                      style={{ animationDelay: `${i * 0.2}s` }}
                    >
                      <Icon size={9} />
                      {label}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right — content */}
              <div className="p-6 sm:p-8 md:p-12 flex flex-col justify-center gap-4 sm:gap-5">
                {/* Location pill */}
                <div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-muted text-xs font-medium text-muted-foreground border border-border font-sans">
                    <MapPin size={11} />
                    <span className="truncate">Bangalore, India · Open to Opportunities</span>
                  </span>
                </div>

                {/* Heading with typewriter */}
                <div>
                  <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-black leading-[1.1] tracking-tight text-foreground mb-3">
                    Journey Through<br />
                    <em className="not-italic text-foreground/80">AI &amp; Healthcare</em>
                  </h1>
                  {/* Typewriter subtitle */}
                  <div className="h-6 sm:h-7 flex items-center">
                    <span className="text-sm sm:text-base font-semibold text-foreground/70 font-sans">
                      {typed}
                      <span className="inline-block w-0.5 h-4 sm:h-5 bg-foreground ml-0.5 animate-pulse align-middle" />
                    </span>
                  </div>
                  <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed font-sans max-w-sm mt-3">
                    Bridging artificial intelligence, healthcare management, and strategic business
                    thinking — building products that create real-world impact across India.
                  </p>
                </div>

                {/* CTA + socials */}
                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href="#projects"
                    onClick={() => track("cta_click", "hero_view_work")}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-foreground text-background text-sm font-semibold hover:bg-foreground/80 hover:scale-105 transition-all font-sans shadow-lg hover:shadow-xl"
                  >
                    View My Work
                    <ArrowUpRight size={13} />
                  </a>
                  <a
                    href="#contact"
                    onClick={() => track("cta_click", "hero_get_in_touch")}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-border bg-muted text-foreground text-sm font-semibold hover:bg-foreground hover:text-background hover:scale-105 transition-all font-sans"
                  >
                    Get In Touch
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
                        className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border-2 border-border hover:border-foreground hover:bg-foreground hover:text-background transition-all flex items-center justify-center hover:scale-110 text-muted-foreground hover:text-background duration-300"
                      >
                        <Icon size={14} />
                      </a>
                    ))}
                  </div>
                </div>

                {/* Animated Stats */}
                <div ref={statsRef} className="flex items-center gap-3 sm:gap-6 pt-4 border-t border-border">
                  <StatCard value={1}  suffix="+" label="Years Exp."     active={statsVisible} />
                  <div className="w-px h-8 bg-border shrink-0" />
                  <StatCard value={20} suffix="+" label="Certifications" active={statsVisible} />
                  <div className="w-px h-8 bg-border shrink-0" />
                  <StatCard value={2}  suffix=""  label="Key Domains"    active={statsVisible} />
                </div>
              </div>
            </div>
          </div>
        </MagneticCard>

        {/* Scroll indicator */}
        <div className="flex justify-center mt-6 sm:mt-8 animate-bounce">
          <ChevronDown size={20} className="text-muted-foreground" />
        </div>

        {/* Intro tagline — staggered word reveal */}
        <div className="max-w-3xl mx-auto py-8 sm:py-10 text-center px-2">
          <h2 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold leading-tight text-foreground animate-slide-up">
            Perspective is a space where AI meets healthcare — exploring ideas, building products,
            and discovering new ways to transform medicine through technology.
          </h2>
          <p className="mt-4 sm:mt-5 text-sm sm:text-base text-muted-foreground leading-relaxed font-sans animate-slide-up stagger-1">
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
