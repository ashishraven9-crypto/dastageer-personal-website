import { useState, useEffect } from "react";
import { X, RefreshCw, Trash2, Trophy, TrendingUp, Users, Clock, MousePointer, BookOpen, Mail, Zap } from "lucide-react";
import { computeMetrics, clearEvents, seedDemoData } from "../lib/abTesting";
import type { VariantMetrics } from "../lib/abTesting";
import { useAB } from "../contexts/ABContext";

interface ABDashboardProps {
  onClose: () => void;
}

const MetricBar = ({ value, max, color }: { value: number; max: number; color: string }) => (
  <div className="w-full h-2 rounded-full overflow-hidden" style={{ background: "hsl(var(--muted))" }}>
    <div
      className="h-full rounded-full transition-all duration-1000"
      style={{ width: `${max > 0 ? (value / max) * 100 : 0}%`, background: color }}
    />
  </div>
);

const WaveBar = ({ value, max, color, delay = 0 }: { value: number; max: number; color: string; delay?: number }) => {
  const pct = max > 0 ? (value / max) * 100 : 0;
  return (
    <div
      className="flex-1 flex flex-col items-center gap-1"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="text-xs font-bold font-sans" style={{ color }}>
        {value}
      </div>
      <div
        className="w-full rounded-t-sm transition-all duration-1000"
        style={{
          height: `${Math.max(4, pct * 0.6)}px`,
          background: color,
          opacity: 0.85,
        }}
      />
    </div>
  );
};

const ScoreRing = ({ score, color }: { score: number; color: string }) => {
  const r = 28;
  const circ = 2 * Math.PI * r;
  const dash = (score / 100) * circ;
  return (
    <svg width="72" height="72" viewBox="0 0 72 72">
      <circle cx="36" cy="36" r={r} fill="none" stroke="hsl(var(--muted))" strokeWidth="6" />
      <circle
        cx="36" cy="36" r={r}
        fill="none"
        stroke={color}
        strokeWidth="6"
        strokeDasharray={`${dash} ${circ}`}
        strokeLinecap="round"
        transform="rotate(-90 36 36)"
        style={{ transition: "stroke-dasharray 1.2s cubic-bezier(0.4,0,0.2,1)" }}
      />
      <text x="36" y="40" textAnchor="middle" fontSize="13" fontWeight="bold" fill="hsl(var(--foreground))" fontFamily="serif">
        {score}
      </text>
    </svg>
  );
};

const ABDashboard = ({ onClose }: ABDashboardProps) => {
  const { variant: currentVariant, setVariant } = useAB();
  const [metrics, setMetrics] = useState<VariantMetrics[]>([]);
  const [activeTab, setActiveTab] = useState<"overview" | "detail">("overview");

  const refresh = () => setMetrics(computeMetrics());

  useEffect(() => {
    refresh();
  }, []);

  const handleReset = () => {
    clearEvents();
    seedDemoData();
    refresh();
  };

  const winner = metrics.length > 0
    ? metrics.reduce((a, b) => (a.engagementScore > b.engagementScore ? a : b))
    : null;

  const maxPageviews = Math.max(...metrics.map((m) => m.pageviews), 1);
  const maxCTA = Math.max(...metrics.map((m) => m.ctaClicks), 1);
  const maxBlog = Math.max(...metrics.map((m) => m.blogExpands), 1);
  const maxTime = Math.max(...metrics.map((m) => m.avgTimeOnPage), 1);

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-4" style={{ background: "hsl(var(--foreground) / 0.5)", backdropFilter: "blur(8px)" }}>
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl border shadow-2xl"
        style={{ background: "hsl(var(--card))", borderColor: "hsl(var(--border))" }}
      >
        {/* Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between p-5 sm:p-6 border-b" style={{ background: "hsl(var(--card))", borderColor: "hsl(var(--border))" }}>
          <div>
            <h2 className="font-serif text-lg sm:text-xl font-bold text-foreground">A/B Test Analytics</h2>
            <p className="text-xs text-muted-foreground font-sans mt-0.5">Color palette engagement comparison · Last 7 days</p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleReset}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-semibold font-sans hover:bg-muted transition-all"
              style={{ borderColor: "hsl(var(--border))", color: "hsl(var(--muted-foreground))" }}
              title="Reset to demo data"
            >
              <Trash2 size={11} />
              <span className="hidden sm:inline">Reset</span>
            </button>
            <button
              onClick={refresh}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-semibold font-sans hover:bg-muted transition-all"
              style={{ borderColor: "hsl(var(--border))", color: "hsl(var(--muted-foreground))" }}
            >
              <RefreshCw size={11} />
              <span className="hidden sm:inline">Refresh</span>
            </button>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-muted transition-all"
              style={{ color: "hsl(var(--muted-foreground))" }}
            >
              <X size={15} />
            </button>
          </div>
        </div>

        <div className="p-5 sm:p-6 space-y-5">

          {/* Winner banner */}
          {winner && (
            <div
              className="flex items-center gap-3 p-4 rounded-2xl border"
              style={{ background: winner.color + "18", borderColor: winner.color + "40" }}
            >
              <Trophy size={18} style={{ color: winner.color }} className="shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold font-sans" style={{ color: "hsl(var(--foreground))" }}>
                  🏆 <span style={{ color: winner.color }}>{winner.label}</span> is winning with{" "}
                  <strong>{winner.engagementScore}/100</strong> engagement score
                </p>
                <p className="text-xs text-muted-foreground font-sans mt-0.5">
                  Based on scroll depth, CTA clicks, time on page, and interaction events
                </p>
              </div>
              <button
                onClick={() => setVariant(winner.variant)}
                className="shrink-0 px-3 py-1.5 rounded-full text-xs font-semibold font-sans text-white transition-all hover:opacity-90"
                style={{ background: winner.color }}
              >
                Apply
              </button>
            </div>
          )}

          {/* Tabs */}
          <div className="flex gap-1 p-1 rounded-xl" style={{ background: "hsl(var(--muted))" }}>
            {(["overview", "detail"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className="flex-1 py-1.5 rounded-lg text-xs font-semibold font-sans capitalize transition-all"
                style={{
                  background: activeTab === tab ? "hsl(var(--card))" : "transparent",
                  color: activeTab === tab ? "hsl(var(--foreground))" : "hsl(var(--muted-foreground))",
                  boxShadow: activeTab === tab ? "0 1px 4px hsl(var(--shadow-soft) / 0.1)" : "none",
                }}
              >
                {tab === "overview" ? "Overview" : "Detailed Metrics"}
              </button>
            ))}
          </div>

          {activeTab === "overview" && (
            <>
              {/* Engagement score rings */}
              <div className="grid grid-cols-3 gap-3">
                {metrics.map((m) => (
                  <div
                    key={m.variant}
                    className="flex flex-col items-center gap-2 p-3 sm:p-4 rounded-2xl border cursor-pointer transition-all hover:scale-105"
                    style={{
                      borderColor: currentVariant === m.variant ? m.color : "hsl(var(--border))",
                      background: currentVariant === m.variant ? m.color + "10" : "hsl(var(--muted) / 0.4)",
                      boxShadow: currentVariant === m.variant ? `0 0 0 2px ${m.color}40` : "none",
                    }}
                    onClick={() => setVariant(m.variant)}
                  >
                    <ScoreRing score={m.engagementScore} color={m.color} />
                    <div className="text-center">
                      <p className="text-xs font-bold font-sans" style={{ color: "hsl(var(--foreground))" }}>{m.label}</p>
                      <p className="text-[10px] text-muted-foreground font-sans">{m.pageviews} views</p>
                    </div>
                    {currentVariant === m.variant && (
                      <span className="text-[9px] font-bold px-2 py-0.5 rounded-full text-white" style={{ background: m.color }}>
                        ACTIVE
                      </span>
                    )}
                  </div>
                ))}
              </div>

              {/* Bar chart — CTA Clicks */}
              <div className="p-4 rounded-2xl border" style={{ borderColor: "hsl(var(--border))", background: "hsl(var(--muted) / 0.3)" }}>
                <div className="flex items-center gap-2 mb-3">
                  <MousePointer size={13} className="text-muted-foreground" />
                  <p className="text-xs font-semibold font-sans text-foreground">CTA Click Rate</p>
                </div>
                <div className="flex items-end gap-2 h-16">
                  {metrics.map((m, i) => (
                    <WaveBar key={m.variant} value={m.ctaClicks} max={maxCTA} color={m.color} delay={i * 150} />
                  ))}
                </div>
                <div className="flex gap-2 mt-2">
                  {metrics.map((m) => (
                    <div key={m.variant} className="flex-1 text-center text-[9px] font-sans text-muted-foreground">{m.label.split(" ")[0]}</div>
                  ))}
                </div>
              </div>

              {/* Key metrics comparison */}
              <div className="space-y-3">
                {[
                  { icon: TrendingUp,   label: "Avg Scroll Depth",  key: "avgScrollDepth" as const, suffix: "%", max: 100 },
                  { icon: Clock,        label: "Avg Time on Page",  key: "avgTimeOnPage"  as const, suffix: "s", max: maxTime },
                  { icon: BookOpen,     label: "Blog Expands",      key: "blogExpands"    as const, suffix: "",  max: maxBlog },
                  { icon: Users,        label: "Pageviews",         key: "pageviews"      as const, suffix: "",  max: maxPageviews },
                ].map(({ icon: Icon, label, key, suffix, max }) => (
                  <div key={key}>
                    <div className="flex items-center gap-2 mb-1.5">
                      <Icon size={12} className="text-muted-foreground shrink-0" />
                      <p className="text-xs font-semibold font-sans text-foreground flex-1">{label}</p>
                      <div className="flex gap-3">
                        {metrics.map((m) => (
                          <span key={m.variant} className="text-xs font-bold font-sans" style={{ color: m.color }}>
                            {m[key]}{suffix}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex gap-1.5">
                      {metrics.map((m) => (
                        <div key={m.variant} className="flex-1">
                          <MetricBar value={m[key] as number} max={max} color={m.color} />
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {activeTab === "detail" && (
            <div className="space-y-4">
              {metrics.map((m) => (
                <div
                  key={m.variant}
                  className="p-4 sm:p-5 rounded-2xl border"
                  style={{
                    borderColor: currentVariant === m.variant ? m.color + "60" : "hsl(var(--border))",
                    background: "hsl(var(--muted) / 0.3)",
                  }}
                >
                  {/* Variant header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2.5">
                      <div className="w-3 h-3 rounded-full shrink-0" style={{ background: m.color }} />
                      <h3 className="font-serif text-sm font-bold text-foreground">{m.label}</h3>
                      {currentVariant === m.variant && (
                        <span className="text-[9px] font-bold px-2 py-0.5 rounded-full text-white" style={{ background: m.color }}>
                          ACTIVE
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      <ScoreRing score={m.engagementScore} color={m.color} />
                      <button
                        onClick={() => setVariant(m.variant)}
                        className="px-3 py-1.5 rounded-full text-xs font-semibold font-sans border transition-all hover:opacity-90"
                        style={{
                          borderColor: m.color,
                          color: currentVariant === m.variant ? "white" : m.color,
                          background: currentVariant === m.variant ? m.color : "transparent",
                        }}
                      >
                        {currentVariant === m.variant ? "Active" : "Switch"}
                      </button>
                    </div>
                  </div>

                  {/* Metric grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
                    {[
                      { icon: Users,       label: "Pageviews",    value: m.pageviews },
                      { icon: TrendingUp,  label: "Scroll Depth", value: `${m.avgScrollDepth}%` },
                      { icon: MousePointer,label: "CTA Clicks",   value: m.ctaClicks },
                      { icon: Clock,       label: "Avg Time",     value: `${m.avgTimeOnPage}s` },
                      { icon: BookOpen,    label: "Blog Expands", value: m.blogExpands },
                      { icon: Mail,        label: "Submissions",  value: m.contactSubmits },
                      { icon: Zap,         label: "Skill Hovers", value: m.skillHovers },
                      { icon: TrendingUp,  label: "Proj Hovers",  value: m.projectHovers },
                    ].map(({ icon: Icon, label, value }) => (
                      <div key={label} className="p-2.5 rounded-xl" style={{ background: "hsl(var(--card))" }}>
                        <div className="flex items-center gap-1.5 mb-1">
                          <Icon size={10} className="text-muted-foreground" />
                          <p className="text-[9px] text-muted-foreground font-sans uppercase tracking-wide">{label}</p>
                        </div>
                        <p className="text-sm font-bold font-sans" style={{ color: m.color }}>{value}</p>
                      </div>
                    ))}
                  </div>

                  {/* Section views */}
                  {Object.keys(m.sectionViews).length > 0 && (
                    <div>
                      <p className="text-[10px] text-muted-foreground font-sans uppercase tracking-widest mb-2">Section Views</p>
                      <div className="flex flex-wrap gap-1.5">
                        {Object.entries(m.sectionViews)
                          .sort(([, a], [, b]) => b - a)
                          .map(([section, count]) => (
                            <span
                              key={section}
                              className="px-2 py-0.5 rounded-full text-[10px] font-semibold font-sans border"
                              style={{
                                borderColor: m.color + "40",
                                background: m.color + "12",
                                color: "hsl(var(--foreground))",
                              }}
                            >
                              {section}: {count}
                            </span>
                          ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Footer note */}
          <p className="text-[10px] text-muted-foreground font-sans text-center pt-2 border-t" style={{ borderColor: "hsl(var(--border))" }}>
            Data stored in localStorage · Seeded with 7-day demo data · Click a variant card to switch palette
          </p>
        </div>
      </div>
    </div>
  );
};

export default ABDashboard;
