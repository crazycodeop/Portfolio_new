import React, { useEffect, useState, useRef } from 'react';

export const AmbientLight: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const rafRef = useRef<number | null>(null);

  // Smooth, throttled scroll offset tracking via requestAnimationFrame
  useEffect(() => {
    const handleScroll = () => {
      if (rafRef.current) return;
      rafRef.current = requestAnimationFrame(() => {
        setScrollY(window.scrollY);
        rafRef.current = null;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  // Parallax translation factors (extremely subtle: 0.035x)
  const offsetPrimary = Math.min(scrollY * 0.035, 120);
  const offsetSecondary = Math.min(scrollY * -0.025, 80);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden select-none"
      aria-hidden="true"
    >
      {/* Primary Top-Left Peripheral Glow (Ultra-diffused charcoal light) */}
      <div
        className="absolute -top-[20vh] -left-[15vw] w-[85vw] h-[80vh] rounded-full ambient-drift-slow"
        style={{
          background:
            'radial-gradient(ellipse 70% 65% at 30% 30%, rgba(255, 255, 255, 0.024) 0%, rgba(228, 228, 231, 0.012) 35%, rgba(161, 161, 170, 0.003) 65%, transparent 85%)',
          transform: `translate3d(0, ${offsetPrimary}px, 0)`,
          filter: 'blur(60px)',
          willChange: 'transform',
        }}
      />

      {/* Secondary Bottom-Right Peripheral Glow (Counter-balancing soft luminance) */}
      <div
        className="absolute -bottom-[25vh] -right-[15vw] w-[80vw] h-[75vh] rounded-full ambient-drift-reverse"
        style={{
          background:
            'radial-gradient(ellipse 65% 60% at 70% 70%, rgba(255, 255, 255, 0.018) 0%, rgba(228, 228, 231, 0.008) 40%, rgba(161, 161, 170, 0.002) 70%, transparent 85%)',
          transform: `translate3d(0, ${offsetSecondary}px, 0)`,
          filter: 'blur(70px)',
          willChange: 'transform',
        }}
      />

      {/* Center Content Protection Mask: ensures typography spine remains pure matte-black */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 900px 750px at center 40%, rgba(9, 9, 11, 0.75) 0%, rgba(9, 9, 11, 0.3) 60%, transparent 95%)',
        }}
      />
    </div>
  );
};
