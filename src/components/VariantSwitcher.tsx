import { useState } from "react";
import { Palette, ChevronDown, Check, BarChart2 } from "lucide-react";
import { useAB } from "../contexts/ABContext";
import type { Variant } from "../lib/abTesting";

const VARIANTS: { id: Variant; label: string; desc: string; bg: string; accent: string; dot: string }[] = [
  {
    id: "beige",
    label: "Warm Beige",
    desc: "Cream & Sand",
    bg: "#F7F3EE",
    accent: "#C4A882",
    dot: "bg-[#C4A882]",
  },
  {
    id: "midnight",
    label: "Midnight Dark",
    desc: "Indigo & Slate",
    bg: "#0F1117",
    accent: "#6366F1",
    dot: "bg-[#6366F1]",
  },
  {
    id: "forest",
    label: "Forest Green",
    desc: "Emerald & Sage",
    bg: "#F0F7F4",
    accent: "#10B981",
    dot: "bg-[#10B981]",
  },
];

interface VariantSwitcherProps {
  onOpenDashboard: () => void;
}

const VariantSwitcher = ({ onOpenDashboard }: VariantSwitcherProps) => {
  const { variant, setVariant } = useAB();
  const [open, setOpen] = useState(false);
  const current = VARIANTS.find((v) => v.id === variant) || VARIANTS[0];

  return (
    <div className="fixed bottom-6 right-6 z-[9990] flex flex-col items-end gap-2">
      {/* Dashboard button */}
      <button
        onClick={onOpenDashboard}
        className="flex items-center gap-2 px-3 py-2 rounded-full text-xs font-semibold font-sans shadow-lg border transition-all hover:scale-105 active:scale-95"
        style={{
          background: "hsl(var(--card))",
          borderColor: "hsl(var(--border))",
          color: "hsl(var(--foreground))",
        }}
        title="View A/B Analytics"
      >
        <BarChart2 size={13} />
        <span className="hidden sm:inline">A/B Analytics</span>
      </button>

      {/* Variant switcher */}
      <div className="relative">
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center gap-2 px-3 py-2 rounded-full text-xs font-semibold font-sans shadow-lg border transition-all hover:scale-105 active:scale-95"
          style={{
            background: "hsl(var(--card))",
            borderColor: "hsl(var(--border))",
            color: "hsl(var(--foreground))",
          }}
          title="Switch color variant"
        >
          <Palette size={13} />
          <span
            className="w-3 h-3 rounded-full shrink-0"
            style={{ background: current.accent }}
          />
          <span className="hidden sm:inline">{current.label}</span>
          <ChevronDown
            size={11}
            className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          />
        </button>

        {/* Dropdown */}
        {open && (
          <div
            className="absolute bottom-full right-0 mb-2 rounded-2xl border shadow-xl overflow-hidden min-w-[200px]"
            style={{
              background: "hsl(var(--card))",
              borderColor: "hsl(var(--border))",
            }}
          >
            <div
              className="px-3 py-2 text-[10px] font-semibold tracking-widest uppercase border-b font-sans"
              style={{
                color: "hsl(var(--muted-foreground))",
                borderColor: "hsl(var(--border))",
              }}
            >
              A/B Test Variants
            </div>
            {VARIANTS.map((v) => (
              <button
                key={v.id}
                onClick={() => { setVariant(v.id); setOpen(false); }}
                className="w-full flex items-center gap-3 px-3 py-2.5 text-left transition-colors hover:bg-muted/60 font-sans"
              >
                {/* Color preview swatch */}
                <div
                  className="w-8 h-8 rounded-lg border shrink-0 flex items-center justify-center"
                  style={{ background: v.bg, borderColor: v.accent + "60" }}
                >
                  <div className="w-3 h-3 rounded-full" style={{ background: v.accent }} />
                </div>
                <div className="flex-1 min-w-0">
                  <p
                    className="text-xs font-semibold truncate"
                    style={{ color: "hsl(var(--foreground))" }}
                  >
                    {v.label}
                  </p>
                  <p
                    className="text-[10px]"
                    style={{ color: "hsl(var(--muted-foreground))" }}
                  >
                    {v.desc}
                  </p>
                </div>
                {variant === v.id && (
                  <Check size={13} style={{ color: v.accent }} className="shrink-0" />
                )}
              </button>
            ))}
            <div
              className="px-3 py-2 text-[9px] border-t font-sans"
              style={{
                color: "hsl(var(--muted-foreground))",
                borderColor: "hsl(var(--border))",
              }}
            >
              Variant saved to your session
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default VariantSwitcher;
