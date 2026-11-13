import React, { useState, useEffect } from 'react';
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

  useEffect(() => {
    // Scroll-spy navigation
    const sectionIds = ['about', 'experience', 'projects', 'skills'];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 250;
      for (const sectionId of sectionIds) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="group/spotlight relative leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900">
      {/* Main Container */}
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-16 lg:py-0">
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
    </div>
  );
};

export default Home;
