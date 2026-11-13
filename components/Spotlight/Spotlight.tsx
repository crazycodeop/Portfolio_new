import React, { useEffect, useRef, useState } from 'react';

export const Spotlight: React.FC = () => {
  const overlayRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Check if device is touch-only without fine pointer
    const isTouchOnly = window.matchMedia('(hover: none) and (pointer: coarse)').matches;
    if (isTouchOnly) return;

    const overlay = overlayRef.current;
    if (!overlay) return;

    // Initialize to center of viewport
    overlay.style.setProperty('--x', `${window.innerWidth / 2}px`);
    overlay.style.setProperty('--y', `${window.innerHeight / 2}px`);

    const handlePointerMove = (e: PointerEvent) => {
      if (!overlay) return;
      // High-performance DOM property update: 0 React re-renders, 120Hz tracking
      overlay.style.setProperty('--x', `${e.clientX}px`);
      overlay.style.setProperty('--y', `${e.clientY}px`);
      if (!visible) {
        setVisible(true);
      }
    };

    const handlePointerLeave = () => {
      setVisible(false);
    };

    const handlePointerEnter = () => {
      setVisible(true);
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    document.documentElement.addEventListener('mouseleave', handlePointerLeave);
    document.documentElement.addEventListener('mouseenter', handlePointerEnter);

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      document.documentElement.removeEventListener('mouseleave', handlePointerLeave);
      document.documentElement.removeEventListener('mouseenter', handlePointerEnter);
    };
  }, [visible]);

  return (
    <div
      ref={overlayRef}
      className={`pointer-events-none fixed inset-0 z-0 transition-opacity duration-500 motion-reduce:hidden ${
        visible ? 'opacity-100' : 'opacity-80'
      }`}
      style={{
        background: `radial-gradient(700px circle at var(--x, 50vw) var(--y, 50vh), rgba(29, 78, 216, 0.24) 0%, rgba(30, 58, 138, 0.14) 35%, rgba(15, 23, 42, 0) 80%)`,
      }}
      aria-hidden="true"
    />
  );
};
