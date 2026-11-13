import React, { useState, useEffect, useRef } from 'react';
import type { NextPage } from 'next';
import {
  Sidebar,
  About,
  Experience,
  Projects,
  Skills,
  Footer,
} from '../components';

const Home: NextPage = () => {
  const [activeSection, setActiveSection] = useState('about');
  const spotlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 1. Scroll-spy navigation
    const sectionIds = ['about', 'experience', 'projects', 'skills'];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 250;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    // 2. Real-time cursor spotlight tracking
    const updateSpotlight = (x: number, y: number) => {
      if (spotlightRef.current) {
        spotlightRef.current.style.background = `radial-gradient(650px circle at ${x}px ${y}px, rgba(29, 78, 216, 0.35) 0%, rgba(37, 99, 235, 0.20) 35%, rgba(29, 78, 216, 0.08) 60%, transparent 80%)`;
      }
      document.documentElement.style.setProperty('--mouse-x', `${x}px`);
      document.documentElement.style.setProperty('--mouse-y', `${y}px`);
    };

    // Initialize to viewport center on desktop
    if (window.innerWidth >= 1024) {
      updateSpotlight(window.innerWidth / 2, window.innerHeight / 3);
    }

    const handlePointerMove = (e: MouseEvent | PointerEvent) => {
      if ('pointerType' in e && e.pointerType === 'touch') return;
      updateSpotlight(e.clientX, e.clientY);
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    window.addEventListener('mousemove', handlePointerMove, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('mousemove', handlePointerMove);
    };
  }, []);

  return (
    <div
      className="group/spotlight relative bg-slate-900 leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900"
      onMouseMove={(e) => {
        if (spotlightRef.current) {
          spotlightRef.current.style.background = `radial-gradient(650px circle at ${e.clientX}px ${e.clientY}px, rgba(29, 78, 216, 0.35) 0%, rgba(37, 99, 235, 0.20) 35%, rgba(29, 78, 216, 0.08) 60%, transparent 80%)`;
        }
        document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
        document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
      }}
    >
      {/* Viewport-wide cursor spotlight overlay at z-30 (pointer-events-none, never blocks clicks) */}
      <div
        ref={spotlightRef}
        id="cursor-glow"
        className="pointer-events-none fixed inset-0 z-30 transition duration-300 motion-reduce:hidden"
        style={{
          background:
            'radial-gradient(650px circle at var(--mouse-x, 50vw) var(--mouse-y, 35vh), rgba(29, 78, 216, 0.35) 0%, rgba(37, 99, 235, 0.20) 35%, rgba(29, 78, 216, 0.08) 60%, transparent 80%)',
        }}
        aria-hidden="true"
      />

      {/* Main Container */}
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-16 lg:py-0">
        {/* Desktop Split View: Sticky Sidebar on Left, Scrolling Main on Right */}
        <div className="lg:flex lg:justify-between lg:gap-4">
          <Sidebar activeSection={activeSection} />

          <main id="content" className="pt-6 sm:pt-10 lg:w-[52%] lg:py-24">
            <About />
            <Experience />
            <Projects />
            <Skills />
            <Footer />
          </main>
        </div>
      </div>
    </div>
  );
};

export default Home;
