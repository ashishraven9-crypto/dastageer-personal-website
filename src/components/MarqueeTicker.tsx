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
];

const MarqueeTicker = () => {
  const doubled = [...items, ...items];
  return (
    <div className="w-full overflow-hidden border-y border-border bg-muted/30 py-3 my-4 relative z-10">
      <div className="flex gap-8 animate-ticker whitespace-nowrap w-max">
        {doubled.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-2 text-xs font-medium text-muted-foreground font-sans tracking-wide uppercase shrink-0">
            <span className="w-1 h-1 rounded-full bg-foreground/30 shrink-0" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default MarqueeTicker;
