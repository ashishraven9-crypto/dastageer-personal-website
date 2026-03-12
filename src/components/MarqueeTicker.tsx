const items = [
  "AI Product Management",
  "Prompt Engineering",
  "RAG Pipelines",
  "n8n Automation",
  "LLM Orchestration",
  "Medical Management",
  "NIT Kurukshetra MBA",
  "Healthcare IoT",
  "AI Guardrails",
  "Cursor · Lovable",
  "LangChain",
  "Clinical Decision Support",
  "Model Fine-tuning",
  "Vector Databases",
  "OpenAI API",
  "Antigravity · OpenClaw",
];

const MarqueeTicker = () => {
  // Triple the items to ensure seamless loop on all screen sizes
  const tripled = [...items, ...items, ...items];
  return (
    <div
      className="w-full overflow-hidden border-y border-border py-3 my-4 relative z-10"
      style={{ background: "linear-gradient(90deg, hsl(36,30%,93%) 0%, hsl(36,25%,90%) 50%, hsl(36,30%,93%) 100%)" }}
    >
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-20 z-10 pointer-events-none"
        style={{ background: "linear-gradient(90deg, hsl(36,30%,93%), transparent)" }} />
      <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-20 z-10 pointer-events-none"
        style={{ background: "linear-gradient(-90deg, hsl(36,30%,93%), transparent)" }} />

      <div
        className="ticker-track gap-6 sm:gap-8"
        style={{ display: "flex", whiteSpace: "nowrap" }}
      >
        {tripled.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-medium text-muted-foreground font-sans tracking-wide uppercase shrink-0"
          >
            <span
              className="w-1 h-1 rounded-full shrink-0"
              style={{ background: "hsl(30, 25%, 55%)" }}
            />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default MarqueeTicker;
