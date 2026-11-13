import React, { useState, useEffect } from 'react';
import type { NextPage } from 'next';
import {
  Sidebar,
  About,
  Experience,
  Projects,
  Skills,
  Footer,
  Spotlight,
  TimeTravel,
} from '../components';

const Home: NextPage = () => {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
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
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="group/spotlight relative bg-slate-900 leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900">
      {/* Interactive Cursor Spotlight Glow */}
      <Spotlight />

      {/* Main Container with z-10 Stacking Context above Spotlight */}
      <div className="relative z-10 mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-16 lg:py-0">
        {/* Skip to Content for Accessibility */}
        <a
          href="#content"
          className="absolute left-0 top-0 block -translate-x-full rounded bg-teal-400 px-4 py-3 text-sm font-bold uppercase tracking-widest text-slate-900 focus-visible:translate-x-0 focus-visible:text-slate-900 z-50 transition-transform"
        >
          Skip to Content
        </a>

        {/* Desktop Split View: Sticky Sidebar on Left, Scrolling Main on Right */}
        <div className="lg:flex lg:justify-between lg:gap-4">
          <Sidebar activeSection={activeSection} />

          <main id="content" className="pt-24 lg:w-[52%] lg:py-24">
            <About />
            <Experience />
            <Projects />
            <Skills />
            <Footer />
          </main>
        </div>
      </div>

      {/* Floating Animated Time Travel / Version History button */}
      <TimeTravel />
    </div>
  );
};

export default Home;
