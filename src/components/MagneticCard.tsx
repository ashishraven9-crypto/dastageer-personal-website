import React, { useRef, useCallback } from "react";

interface MagneticCardProps {
  children: React.ReactNode;
  className?: string;
  strength?: number; // tilt strength in degrees, default 8
  disabled?: boolean;
}

const MagneticCard = ({ children, className = "", strength = 8, disabled = false }: MagneticCardProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (disabled || !ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -strength;
      const rotateY = ((x - centerX) / centerX) * strength;
      ref.current.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(8px)`;
    },
    [disabled, strength]
  );

  const handleMouseLeave = useCallback(() => {
    if (!ref.current) return;
    ref.current.style.transform = "perspective(800px) rotateX(0deg) rotateY(0deg) translateZ(0px)";
  }, []);

  return (
    <div
      ref={ref}
      className={`tilt-card ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  );
};

export default MagneticCard;
