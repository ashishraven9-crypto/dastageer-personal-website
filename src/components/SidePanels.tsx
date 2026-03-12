import { useEffect, useState } from "react";
import { Linkedin, Mail, Github, ArrowUp } from "lucide-react";

const LEFT_SKILLS = [
  "AI PM", "RAG", "LLM", "n8n", "NIT KUK",
  "Cursor", "Lovable", "LangChain", "Supabase",
  "Next.js", "React", "Prompt Eng.",
];

const RIGHT_METRICS = [
  { label: "ROI", value: "↑ 3x" },
  { label: "CAGR", value: "22%" },
  { label: "NPS", value: "87" },
  { label: "TAM", value: "$4B" },
  { label: "KPI", value: "✓" },
  { label: "OKR", value: "Q2" },
];

const MiniBarChart = () => {
  const bars = [40, 65, 50, 80, 60, 90, 72];
  return (
    <div className="flex items-end gap-[3px] h-10">
      {bars.map((h, i) => (
        <div
          key={i}
          style={{
            height: `${h}%`,
            width: 5,
            background: `rgba(92,74,50,${0.15 + i * 0.03})`,
            borderRadius: 2,
            animation: `sideBarGrow 1.2s ease ${i * 0.1}s both`,
          }}
        />
      ))}
    </div>
  );
};

const MiniLineChart = () => {
  const points = [30, 55, 40, 70, 60, 85, 75];
  const w = 44, h = 32;
  const path = points.map((p, i) => {
    const x = (i / (points.length - 1)) * w;
    const y = h - (p / 100) * h;
    return `${i === 0 ? "M" : "L"}${x},${y}`;
  }).join(" ");
  return (
    <svg width={w} height={h} style={{ overflow: "visible" }}>
      <path d={path} fill="none" stroke="rgba(92,74,50,0.25)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      {points.map((p, i) => (
        <circle
          key={i}
          cx={(i / (points.length - 1)) * w}
          cy={h - (p / 100) * h}
          r={2}
          fill="rgba(92,74,50,0.35)"
        />
      ))}
    </svg>
  );
};

const SidePanels = () => {
  const [scrollPct, setScrollPct] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const pct = Math.round((el.scrollTop / (el.scrollHeight - el.clientHeight)) * 100);
      setScrollPct(isNaN(pct) ? 0 : pct);
      setVisible(el.scrollTop > 200);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* ── LEFT SIDE PANEL ── */}
      <div
        className="fixed left-0 top-0 h-full z-10 hidden xl:flex flex-col items-center justify-between py-20 px-2"
        style={{ width: 72, pointerEvents: "none" }}
      >
        {/* Top: vertical site name */}
        <div
          style={{
            writingMode: "vertical-rl",
            transform: "rotate(180deg)",
            fontSize: 10,
            letterSpacing: "0.18em",
            color: "rgba(92,74,50,0.35)",
            fontFamily: "'Merriweather', serif",
            textTransform: "uppercase",
            pointerEvents: "none",
            userSelect: "none",
          }}
        >
          G.Md.Dastageer · Portfolio
        </div>

        {/* Middle: floating skill tags */}
        <div className="flex flex-col gap-2 items-center">
          {LEFT_SKILLS.map((skill, i) => (
            <div
              key={skill}
              style={{
                fontSize: 9,
                color: "rgba(92,74,50,0.40)",
                background: "rgba(92,74,50,0.06)",
                border: "1px solid rgba(92,74,50,0.12)",
                borderRadius: 20,
                padding: "2px 7px",
                fontFamily: "sans-serif",
                letterSpacing: "0.05em",
                animation: `sideFadeIn 0.6s ease ${i * 0.08}s both, sideBob ${3 + i * 0.3}s ease-in-out ${i * 0.2}s infinite`,
                pointerEvents: "none",
                whiteSpace: "nowrap",
              }}
            >
              {skill}
            </div>
          ))}
        </div>

        {/* Bottom: mini bar chart */}
        <div style={{ opacity: 0.5 }}>
          <MiniBarChart />
          <div style={{ fontSize: 8, color: "rgba(92,74,50,0.35)", textAlign: "center", marginTop: 4, fontFamily: "sans-serif" }}>
            SKILLS
          </div>
        </div>
      </div>

      {/* ── RIGHT SIDE PANEL ── */}
      <div
        className="fixed right-0 top-0 h-full z-10 hidden xl:flex flex-col items-center justify-between py-20 px-2"
        style={{ width: 72, pointerEvents: "none" }}
      >
        {/* Top: social links (pointer-events on) */}
        <div className="flex flex-col gap-3 items-center" style={{ pointerEvents: "auto" }}>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "rgba(92,74,50,0.45)",
              transition: "color 0.2s, transform 0.2s",
              display: "flex",
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "rgba(92,74,50,0.9)"; (e.currentTarget as HTMLElement).style.transform = "scale(1.2)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "rgba(92,74,50,0.45)"; (e.currentTarget as HTMLElement).style.transform = "scale(1)"; }}
          >
            <Linkedin size={15} />
          </a>
          <a
            href="mailto:gmddastageer@gmail.com"
            style={{
              color: "rgba(92,74,50,0.45)",
              transition: "color 0.2s, transform 0.2s",
              display: "flex",
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "rgba(92,74,50,0.9)"; (e.currentTarget as HTMLElement).style.transform = "scale(1.2)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "rgba(92,74,50,0.45)"; (e.currentTarget as HTMLElement).style.transform = "scale(1)"; }}
          >
            <Mail size={15} />
          </a>
          <a
            href="https://github.com/ashishraven9-crypto"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "rgba(92,74,50,0.45)",
              transition: "color 0.2s, transform 0.2s",
              display: "flex",
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "rgba(92,74,50,0.9)"; (e.currentTarget as HTMLElement).style.transform = "scale(1.2)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "rgba(92,74,50,0.45)"; (e.currentTarget as HTMLElement).style.transform = "scale(1)"; }}
          >
            <Github size={15} />
          </a>
          {/* Vertical line below icons */}
          <div style={{ width: 1, height: 32, background: "rgba(92,74,50,0.18)" }} />
        </div>

        {/* Middle: MBA metric cards */}
        <div className="flex flex-col gap-2 items-center">
          {RIGHT_METRICS.map((m, i) => (
            <div
              key={m.label}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                background: "rgba(92,74,50,0.05)",
                border: "1px solid rgba(92,74,50,0.10)",
                borderRadius: 8,
                padding: "4px 8px",
                animation: `sideFadeIn 0.6s ease ${i * 0.1}s both, sideBob ${3.5 + i * 0.25}s ease-in-out ${i * 0.15}s infinite`,
                pointerEvents: "none",
              }}
            >
              <span style={{ fontSize: 8, color: "rgba(92,74,50,0.35)", fontFamily: "sans-serif", letterSpacing: "0.1em" }}>{m.label}</span>
              <span style={{ fontSize: 11, color: "rgba(92,74,50,0.60)", fontFamily: "'Merriweather', serif", fontWeight: 700 }}>{m.value}</span>
            </div>
          ))}
        </div>

        {/* Bottom: mini line chart + scroll % + scroll-to-top */}
        <div className="flex flex-col items-center gap-3" style={{ pointerEvents: "auto" }}>
          <div style={{ opacity: 0.5, pointerEvents: "none" }}>
            <MiniLineChart />
            <div style={{ fontSize: 8, color: "rgba(92,74,50,0.35)", textAlign: "center", marginTop: 4, fontFamily: "sans-serif" }}>
              GROWTH
            </div>
          </div>

          {/* Scroll percentage */}
          <div style={{
            fontSize: 9,
            color: "rgba(92,74,50,0.40)",
            fontFamily: "sans-serif",
            letterSpacing: "0.05em",
            pointerEvents: "none",
          }}>
            {scrollPct}%
          </div>

          {/* Scroll to top */}
          {visible && (
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              style={{
                background: "rgba(92,74,50,0.10)",
                border: "1px solid rgba(92,74,50,0.20)",
                borderRadius: "50%",
                width: 28,
                height: 28,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                color: "rgba(92,74,50,0.60)",
                transition: "all 0.2s",
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "rgba(92,74,50,0.20)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "rgba(92,74,50,0.10)"; }}
            >
              <ArrowUp size={12} />
            </button>
          )}

          {/* Vertical line */}
          <div style={{ width: 1, height: 32, background: "rgba(92,74,50,0.18)" }} />

          {/* Vertical scroll label */}
          <div
            style={{
              writingMode: "vertical-rl",
              fontSize: 9,
              letterSpacing: "0.18em",
              color: "rgba(92,74,50,0.30)",
              fontFamily: "sans-serif",
              textTransform: "uppercase",
              pointerEvents: "none",
              userSelect: "none",
            }}
          >
            Scroll
          </div>
        </div>
      </div>

      {/* Keyframes injected via style tag */}
      <style>{`
        @keyframes sideFadeIn {
          from { opacity: 0; transform: translateX(8px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes sideBob {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-4px); }
        }
        @keyframes sideBarGrow {
          from { transform: scaleY(0); transform-origin: bottom; }
          to { transform: scaleY(1); transform-origin: bottom; }
        }
      `}</style>
    </>
  );
};

export default SidePanels;
