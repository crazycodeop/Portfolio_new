import React, { useEffect, useState, useRef } from 'react';

/**
 * AmbientLight - Distinctive Architectural Light Environment
 * 
 * Re-engineered for noticeable visual presence while preserving minimalist identity:
 * - Visible charcoal-gray illumination with subtle silver-white light diffusion.
 * - Multi-field asymmetric composition:
 *     1. An elongated diagonal grazing light band (clerestory architectural wash).
 *     2. An upper-left volumetric silver-charcoal diffusion field.
 *     3. A lower-right counter-balancing depth field creating physical separation for project showcases.
 *     4. A tactile architectural micro-grain layer preventing banding on high-gamut displays.
 *     5. A calibrated center contrast shield protecting typography and code blocks.
 * - Ultra-slow, continuous organic evolution (42s - 60s) + smooth, throttled scroll parallax.
 * - Zero external UI, zero dependencies, full reduced-motion & mobile optimization.
 */
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

  // Parallax translation factors
  const offsetPrimary = Math.min(scrollY * 0.045, 160);
  const offsetSecondary = Math.min(scrollY * -0.035, 120);
  const offsetBeam = Math.min(scrollY * 0.025, 90);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden select-none"
      aria-hidden="true"
    >
      {/* 
        FIELD 1: Elongated Diagonal Grazing Light Beam
        Sweeps an oblique, diffused architectural light wash across the canvas.
      */}
      <div
        className="absolute -top-[25vh] -left-[20vw] w-[140vw] h-[45vh] ambient-beam-drift"
        style={{
          background:
            'linear-gradient(112deg, transparent 0%, rgba(255, 255, 255, 0.075) 28%, rgba(212, 212, 216, 0.045) 55%, transparent 85%)',
          transform: `translate3d(0, ${offsetBeam}px, 0) rotate(-16deg)`,
          filter: 'blur(75px)',
          willChange: 'transform',
        }}
      />

      {/* 
        FIELD 2: Primary Asymmetric Upper-Left Silver Diffusion Field
        Creates noticeable silver-white and charcoal illumination in the hero & top flank.
      */}
      <div
        className="absolute -top-[15vh] -left-[10vw] w-[85vw] h-[80vh] rounded-full ambient-field-primary"
        style={{
          background:
            'radial-gradient(ellipse 70% 65% at 35% 30%, rgba(255, 255, 255, 0.09) 0%, rgba(228, 228, 231, 0.05) 32%, rgba(161, 161, 170, 0.018) 62%, transparent 85%)',
          transform: `translate3d(0, ${offsetPrimary}px, 0)`,
          filter: 'blur(65px)',
          willChange: 'transform',
        }}
      />

      {/* 
        FIELD 3: Lower-Right Charcoal Depth Field
        Anchors the lower half of the portfolio, giving physical relief behind Docvyn & FlowForge AI cards.
      */}
      <div
        className="absolute top-[40vh] -right-[15vw] w-[90vw] h-[85vh] rounded-full ambient-field-secondary"
        style={{
          background:
            'radial-gradient(ellipse 65% 60% at 68% 65%, rgba(255, 255, 255, 0.065) 0%, rgba(212, 212, 216, 0.038) 35%, rgba(161, 161, 170, 0.012) 65%, transparent 85%)',
          transform: `translate3d(0, ${offsetSecondary}px, 0)`,
          filter: 'blur(75px)',
          willChange: 'transform',
        }}
      />

      {/* 
        FIELD 4: Lower Ground Ambient Glow (About & Contact Sections)
        Provides gentle depth as the user approaches the footer.
      */}
      <div
        className="absolute bottom-[-10vh] left-[15vw] w-[75vw] h-[55vh] rounded-full ambient-field-ground"
        style={{
          background:
            'radial-gradient(ellipse 75% 55% at 50% 70%, rgba(255, 255, 255, 0.05) 0%, rgba(212, 212, 216, 0.025) 40%, transparent 80%)',
          transform: `translate3d(0, ${offsetPrimary * -0.5}px, 0)`,
          filter: 'blur(70px)',
          willChange: 'transform',
        }}
      />

      {/* 
        FIELD 5: Architectural Noise Grain
        Fine-grained micro-texture that gives the matte-black surface a physical, tactile presence
        and completely eliminates digital color banding.
      */}
      <div
        className="absolute inset-0 opacity-[0.028] mix-blend-screen pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* 
        FIELD 6: Center Typography Contrast Shield
        Subtle vignetted mask protecting the central reading axis so headlines, code blocks,
        and body text maintain 100% pristine contrast over deep matte-black.
      */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 950px 800px at center 42%, rgba(9, 9, 11, 0.7) 0%, rgba(9, 9, 11, 0.25) 60%, transparent 95%)',
        }}
      />
    </div>
  );
};
