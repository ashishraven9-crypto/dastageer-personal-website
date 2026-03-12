import { useEffect, useRef } from "react";

interface FloatingElement {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  type: "text" | "chart" | "node" | "line" | "circle";
  content?: string;
  rotation: number;
  rotationSpeed: number;
  color: string;
  phase: number;
}

const MBA_TEXTS = [
  "ROI", "EBITDA", "NPV", "IRR", "SWOT",
  "BCG", "P&L", "KPI", "OKR", "GTM",
  "MVP", "TAM", "SAM", "SOM", "CAC",
  "LTV", "MRR", "ARR", "CAGR", "WACC",
  "AI PM", "RAG", "LLM", "NIT KUK",
  "Σ", "Δ", "∫", "∂", "α", "β",
  "f(x)", "y=mx+b", "R²", "σ",
  "Strategy", "Innovation", "Disruption",
  "Healthcare", "AI", "MBA",
];

const WARM_COLORS = [
  "rgba(92,74,50,0.12)",
  "rgba(138,125,107,0.10)",
  "rgba(160,140,110,0.09)",
  "rgba(180,160,130,0.08)",
  "rgba(92,74,50,0.07)",
];

const MBABackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const elementsRef = useRef<FloatingElement[]>([]);
  const animFrameRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = document.body.scrollHeight || window.innerHeight * 6;
    };
    resize();
    window.addEventListener("resize", resize);

    // Reduce count on mobile
    const isMobile = window.innerWidth < 768;
    const count = isMobile ? 28 : 55;

    // Initialize elements
    elementsRef.current = Array.from({ length: count }, (_, i) => {
      const type = i % 5 === 0 ? "chart"
        : i % 5 === 1 ? "node"
        : i % 5 === 2 ? "circle"
        : i % 5 === 3 ? "line"
        : "text";
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.25,
        size: type === "text" ? 10 + Math.random() * 10
          : type === "chart" ? 28 + Math.random() * 22
          : type === "node" ? 3 + Math.random() * 5
          : type === "circle" ? 18 + Math.random() * 30
          : 30 + Math.random() * 50,
        opacity: 0.04 + Math.random() * 0.10,
        type,
        content: MBA_TEXTS[Math.floor(Math.random() * MBA_TEXTS.length)],
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.003,
        color: WARM_COLORS[Math.floor(Math.random() * WARM_COLORS.length)],
        phase: Math.random() * Math.PI * 2,
      };
    });

    const drawBarChart = (ctx: CanvasRenderingContext2D, el: FloatingElement) => {
      const bars = 4;
      const bw = el.size / bars;
      const heights = [0.4, 0.7, 0.55, 0.9].map(h => h * el.size);
      ctx.save();
      ctx.translate(el.x, el.y);
      ctx.rotate(el.rotation);
      ctx.globalAlpha = el.opacity;
      for (let i = 0; i < bars; i++) {
        ctx.fillStyle = el.color;
        ctx.fillRect(i * bw - el.size / 2, -heights[i], bw - 2, heights[i]);
      }
      // Trend line
      ctx.beginPath();
      ctx.strokeStyle = el.color;
      ctx.lineWidth = 1.2;
      ctx.moveTo(-el.size / 2, -heights[0]);
      for (let i = 1; i < bars; i++) {
        ctx.lineTo(i * bw - el.size / 2, -heights[i]);
      }
      ctx.stroke();
      // Axes
      ctx.beginPath();
      ctx.moveTo(-el.size / 2, 0);
      ctx.lineTo(el.size / 2, 0);
      ctx.moveTo(-el.size / 2, 0);
      ctx.lineTo(-el.size / 2, -el.size);
      ctx.stroke();
      ctx.restore();
    };

    const drawLineChart = (ctx: CanvasRenderingContext2D, el: FloatingElement) => {
      const points = [0.3, 0.5, 0.4, 0.75, 0.6, 0.9, 0.8];
      ctx.save();
      ctx.translate(el.x, el.y);
      ctx.rotate(el.rotation);
      ctx.globalAlpha = el.opacity;
      ctx.strokeStyle = el.color;
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      points.forEach((p, i) => {
        const px = (i / (points.length - 1)) * el.size - el.size / 2;
        const py = -p * el.size * 0.6;
        if (i === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      });
      ctx.stroke();
      // Dots on data points
      points.forEach((p, i) => {
        const px = (i / (points.length - 1)) * el.size - el.size / 2;
        const py = -p * el.size * 0.6;
        ctx.beginPath();
        ctx.arc(px, py, 2, 0, Math.PI * 2);
        ctx.fillStyle = el.color;
        ctx.fill();
      });
      // Axes
      ctx.beginPath();
      ctx.moveTo(-el.size / 2, 0);
      ctx.lineTo(el.size / 2, 0);
      ctx.moveTo(-el.size / 2, 0);
      ctx.lineTo(-el.size / 2, -el.size * 0.7);
      ctx.stroke();
      ctx.restore();
    };

    const drawNode = (ctx: CanvasRenderingContext2D, el: FloatingElement, all: FloatingElement[]) => {
      ctx.save();
      ctx.globalAlpha = el.opacity;
      ctx.fillStyle = el.color;
      ctx.beginPath();
      ctx.arc(el.x, el.y, el.size, 0, Math.PI * 2);
      ctx.fill();
      // Connect to nearby nodes
      all.forEach(other => {
        if (other === el || other.type !== "node") return;
        const dx = other.x - el.x;
        const dy = other.y - el.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 180) {
          ctx.beginPath();
          ctx.strokeStyle = el.color;
          ctx.lineWidth = 0.6;
          ctx.globalAlpha = el.opacity * (1 - dist / 180);
          ctx.moveTo(el.x, el.y);
          ctx.lineTo(other.x, other.y);
          ctx.stroke();
        }
      });
      ctx.restore();
    };

    const drawCircle = (ctx: CanvasRenderingContext2D, el: FloatingElement) => {
      ctx.save();
      ctx.translate(el.x, el.y);
      ctx.rotate(el.rotation);
      ctx.globalAlpha = el.opacity * 0.7;
      ctx.strokeStyle = el.color;
      ctx.lineWidth = 1;
      // Dashed circle
      ctx.setLineDash([4, 6]);
      ctx.beginPath();
      ctx.arc(0, 0, el.size, 0, Math.PI * 2);
      ctx.stroke();
      // Inner circle
      ctx.setLineDash([]);
      ctx.beginPath();
      ctx.arc(0, 0, el.size * 0.5, 0, Math.PI * 2);
      ctx.stroke();
      // Cross hairs
      ctx.beginPath();
      ctx.moveTo(-el.size, 0); ctx.lineTo(el.size, 0);
      ctx.moveTo(0, -el.size); ctx.lineTo(0, el.size);
      ctx.stroke();
      ctx.restore();
    };

    const drawText = (ctx: CanvasRenderingContext2D, el: FloatingElement) => {
      ctx.save();
      ctx.translate(el.x, el.y);
      ctx.rotate(el.rotation);
      ctx.globalAlpha = el.opacity;
      ctx.fillStyle = el.color.replace(/[\d.]+\)$/, "0.18)");
      ctx.font = `${el.size}px 'Merriweather', serif`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(el.content || "", 0, 0);
      ctx.restore();
    };

    const animate = (time: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      elementsRef.current.forEach(el => {
        // Gentle floating drift
        el.x += el.vx + Math.sin(time * 0.0003 + el.phase) * 0.15;
        el.y += el.vy + Math.cos(time * 0.0002 + el.phase) * 0.10;
        el.rotation += el.rotationSpeed;

        // Wrap around edges
        if (el.x < -100) el.x = canvas.width + 100;
        if (el.x > canvas.width + 100) el.x = -100;
        if (el.y < -100) el.y = canvas.height + 100;
        if (el.y > canvas.height + 100) el.y = -100;

        // Draw based on type
        if (el.type === "chart") {
          if (Math.random() > 0.5) drawBarChart(ctx, el);
          else drawLineChart(ctx, el);
        } else if (el.type === "node") {
          drawNode(ctx, el, elementsRef.current);
        } else if (el.type === "circle") {
          drawCircle(ctx, el);
        } else if (el.type === "line") {
          drawLineChart(ctx, el);
        } else {
          drawText(ctx, el);
        }
      });

      animFrameRef.current = requestAnimationFrame(animate);
    };

    animFrameRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animFrameRef.current);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 0,
      }}
    />
  );
};

export default MBABackground;
