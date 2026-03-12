import { ArrowUpRight, Linkedin, Mail, MapPin } from "lucide-react";

const Hero = () => {
  return (
    <section id="hero" className="pt-28 pb-6 px-4">
      <div className="max-w-5xl mx-auto">

        {/* Main hero card — reference blog large rounded card */}
        <div className="rounded-4xl bg-card border border-border overflow-hidden card-hover animate-scale-in">
          <div className="grid md:grid-cols-2 gap-0 min-h-[420px]">

            {/* Left — profile image */}
            <div className="relative overflow-hidden bg-muted min-h-[280px] md:min-h-0">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=700&q=80&fit=crop&crop=face,top"
                alt="G. Mohammed Dastageer — MBA NIT Kurukshetra"
                className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105"
              />
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-card/30" />
              {/* MBA badge overlay */}
              <div className="absolute top-5 left-5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-xs font-medium text-white border border-white/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  MBA @ NIT Kurukshetra
                </span>
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

              {/* Heading — Merriweather serif */}
              <div>
                <h1 className="font-serif text-4xl md:text-5xl font-black leading-[1.1] tracking-tight text-foreground mb-4">
                  Journey Through<br />
                  <em className="not-italic text-accent">AI &amp; Healthcare</em>
                </h1>
                <p className="text-muted-foreground text-base leading-relaxed font-sans max-w-sm">
                  Bridging artificial intelligence, healthcare management, and strategic business
                  thinking — building products that create real-world impact across India.
                </p>
              </div>

              {/* CTA + socials */}
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#projects"
                  className="flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 hover:scale-105 transition-all font-sans"
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
                      className="w-11 h-11 rounded-full border-2 border-border hover:border-primary hover:bg-muted transition-all flex items-center justify-center hover:scale-110 text-muted-foreground hover:text-foreground"
                    >
                      <Icon size={15} />
                    </a>
                  ))}
                </div>
              </div>

              {/* Stats */}
              <div className="flex items-center gap-6 pt-4 border-t border-border">
                {[
                  { value: "4+",  label: "Years Exp." },
                  { value: "12+", label: "Certifications" },
                  { value: "2",   label: "Key Domains" },
                ].map((s) => (
                  <div key={s.label} className="text-center">
                    <div className="font-serif text-2xl font-black text-foreground">{s.value}</div>
                    <div className="text-xs text-muted-foreground font-sans">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Intro tagline — matches reference IntroSection */}
        <div className="max-w-3xl mx-auto py-12 text-center">
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
