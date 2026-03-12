import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
  pulse: number;
  pulseSpeed: number;
}

const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let particles: Particle[] = [];
    let pointer = { x: -1000, y: -1000 };

    // Detect mobile/touch for performance
    const isMobile = window.innerWidth < 768 || navigator.maxTouchPoints > 0;

    const resize = () => {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Mouse (desktop)
    const onMouseMove = (e: MouseEvent) => {
      pointer.x = e.clientX;
      pointer.y = e.clientY;
    };
    // Touch (mobile)
    const onTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        pointer.x = e.touches[0].clientX;
        pointer.y = e.touches[0].clientY;
      }
    };
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("touchmove", onTouchMove, { passive: true });

    // Fewer particles on mobile for performance
    const density = isMobile ? 28000 : 12000;
    const maxParticles = isMobile ? 30 : 80;
    const count = Math.min(Math.floor((window.innerWidth * window.innerHeight) / density), maxParticles);
    const connectionDist = isMobile ? 80 : 120;

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * (isMobile ? 0.25 : 0.4),
        vy: (Math.random() - 0.5) * (isMobile ? 0.25 : 0.4),
        radius: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.35 + 0.08,
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: Math.random() * 0.02 + 0.005,
      });
    }

    // Warm beige particle color — rgba(160, 130, 100, opacity)
    const particleColor = (opacity: number) => `rgba(160,130,100,${opacity})`;
    const lineColor     = (opacity: number) => `rgba(140,115,90,${opacity})`;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particles.length; i++) {
        // Connections (skip on mobile for perf)
        if (!isMobile) {
          for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < connectionDist) {
              ctx.beginPath();
              ctx.strokeStyle = lineColor(0.12 * (1 - dist / connectionDist));
              ctx.lineWidth = 0.5;
              ctx.moveTo(particles[i].x, particles[i].y);
              ctx.lineTo(particles[j].x, particles[j].y);
              ctx.stroke();
            }
          }
        }

        // Pointer interaction — repel
        const mdx   = particles[i].x - pointer.x;
        const mdy   = particles[i].y - pointer.y;
        const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
        if (mdist < 100 && mdist > 0) {
          const force = (100 - mdist) / 100;
          particles[i].vx += (mdx / mdist) * force * 0.5;
          particles[i].vy += (mdy / mdist) * force * 0.5;
        }

        // Dampen + move
        particles[i].vx *= 0.99;
        particles[i].vy *= 0.99;
        particles[i].x  += particles[i].vx;
        particles[i].y  += particles[i].vy;
        particles[i].pulse += particles[i].pulseSpeed;

        // Bounce
        if (particles[i].x < 0 || particles[i].x > canvas.width)  particles[i].vx *= -1;
        if (particles[i].y < 0 || particles[i].y > canvas.height)  particles[i].vy *= -1;

        // Draw
        const pulsedRadius  = particles[i].radius + Math.sin(particles[i].pulse) * 0.4;
        const pulsedOpacity = particles[i].opacity + Math.sin(particles[i].pulse) * 0.08;
        ctx.beginPath();
        ctx.arc(particles[i].x, particles[i].y, pulsedRadius, 0, Math.PI * 2);
        ctx.fillStyle = particleColor(pulsedOpacity);
        ctx.fill();
      }

      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("touchmove", onTouchMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.7 }}
      aria-hidden="true"
    />
  );
};

export default ParticleBackground;
