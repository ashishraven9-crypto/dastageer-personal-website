const badges = [
  { label: "AI PM",          icon: "🤖", delay: "0s",    top: "15%",  left: "8%"  },
  { label: "RAG Pipelines",  icon: "🔗", delay: "0.8s",  top: "72%",  left: "5%"  },
  { label: "n8n Automation", icon: "⚡", delay: "1.6s",  top: "25%",  right: "6%" },
  { label: "NIT Kurukshetra",icon: "🎓", delay: "0.4s",  top: "65%",  right: "4%" },
  { label: "LLM Engineer",   icon: "🧠", delay: "1.2s",  top: "45%",  left: "3%"  },
];

const FloatingBadges = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl sm:rounded-4xl">
    {badges.map((b) => (
      <div
        key={b.label}
        className="badge-pulse absolute hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-semibold font-sans shadow-md"
        style={{
          top: b.top,
          left: b.left,
          right: b.right,
          animationDelay: b.delay,
          background: "hsl(var(--card))",
          borderColor: "hsl(var(--border))",
          color: "hsl(var(--foreground))",
          boxShadow: "0 4px 16px -4px hsl(var(--shadow-soft) / 0.12)",
        }}
      >
        <span>{b.icon}</span>
        <span>{b.label}</span>
      </div>
    ))}
  </div>
);

export default FloatingBadges;
