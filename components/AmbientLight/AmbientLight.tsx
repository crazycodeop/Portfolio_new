import React, { useEffect, useState, useRef } from 'react';
import { useTheme } from '../../context/ThemeContext';

export const AmbientLight: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const rafRef = useRef<number | null>(null);
  const { theme, mounted } = useTheme();

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

  // Parallax translation factors
  const offsetPrimary = Math.min(scrollY * 0.035, 120);
  const offsetSecondary = Math.min(scrollY * -0.025, 80);

  const isDark = mounted ? theme === 'dark' : true;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden select-none transition-opacity duration-300"
      aria-hidden="true"
    >
      {/* Primary Top-Left Peripheral Glow */}
      <div
        className="absolute -top-[20vh] -left-[15vw] w-[85vw] h-[80vh] rounded-full ambient-drift-slow"
        style={{
          background: isDark
            ? 'radial-gradient(ellipse 70% 65% at 30% 30%, rgba(255, 255, 255, 0.025) 0%, rgba(228, 228, 231, 0.012) 35%, rgba(161, 161, 170, 0.003) 65%, transparent 85%)'
            : 'radial-gradient(ellipse 70% 65% at 30% 30%, rgba(192, 132, 252, 0.03) 0%, rgba(24, 24, 27, 0.015) 35%, transparent 75%)',
          transform: `translate3d(0, ${offsetPrimary}px, 0)`,
          filter: 'blur(60px)',
          willChange: 'transform',
        }}
      />

      {/* Secondary Bottom-Right Peripheral Glow */}
      <div
        className="absolute -bottom-[25vh] -right-[15vw] w-[80vw] h-[75vh] rounded-full ambient-drift-reverse"
        style={{
          background: isDark
            ? 'radial-gradient(ellipse 65% 60% at 70% 70%, rgba(255, 255, 255, 0.02) 0%, rgba(228, 228, 231, 0.008) 40%, rgba(161, 161, 170, 0.002) 70%, transparent 85%)'
            : 'radial-gradient(ellipse 65% 60% at 70% 70%, rgba(219, 39, 119, 0.02) 0%, rgba(24, 24, 27, 0.01) 40%, transparent 75%)',
          transform: `translate3d(0, ${offsetSecondary}px, 0)`,
          filter: 'blur(70px)',
          willChange: 'transform',
        }}
      />
    </div>
  );
};
