import React, { useEffect, useState } from 'react';

export const Spotlight: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 600, y: 400 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    let rafId: number | null = null;
    const handlePointerMove = (e: PointerEvent | MouseEvent) => {
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        setMousePosition({ x: e.clientX, y: e.clientY });
        setIsHovering(true);
        rafId = null;
      });
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    window.addEventListener('mousemove', handlePointerMove, { passive: true });
    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('mousemove', handlePointerMove);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      className={`pointer-events-none fixed inset-0 z-30 transition-opacity duration-500 motion-reduce:hidden ${
        isHovering ? 'opacity-100' : 'opacity-70'
      }`}
      style={{
        background: `radial-gradient(650px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(45, 212, 191, 0.09) 0%, rgba(29, 78, 216, 0.22) 35%, transparent 80%)`,
      }}
      aria-hidden="true"
    />
  );
};
