import React, { useEffect, useRef } from 'react';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import '@fontsource/inter/300.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';

import { NextSeo } from 'next-seo';

function MyApp({ Component, pageProps }: AppProps) {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateGlow = (x: number, y: number) => {
      if (glowRef.current) {
        glowRef.current.style.background = `radial-gradient(600px circle at ${x}px ${y}px, rgba(29, 78, 216, 0.15), transparent 80%)`;
      }
      document.documentElement.style.setProperty('--mouse-x', `${x}px`);
      document.documentElement.style.setProperty('--mouse-y', `${y}px`);
    };

    // Center initial position on load
    if (typeof window !== 'undefined') {
      updateGlow(window.innerWidth / 2, window.innerHeight / 3);
    }

    const handleMove = (e: MouseEvent | TouchEvent | PointerEvent) => {
      let clientX = (e as MouseEvent).clientX;
      let clientY = (e as MouseEvent).clientY;

      if (clientX === undefined && 'touches' in e && (e as TouchEvent).touches && (e as TouchEvent).touches[0]) {
        clientX = (e as TouchEvent).touches[0].clientX;
        clientY = (e as TouchEvent).touches[0].clientY;
      }

      if (clientX !== undefined && clientY !== undefined) {
        updateGlow(clientX, clientY);
      }
    };

    // Global listeners on both window and document to ensure events are never lost
    window.addEventListener('mousemove', handleMove, { passive: true });
    window.addEventListener('pointermove', handleMove, { passive: true });
    document.addEventListener('mousemove', handleMove, { passive: true });
    document.addEventListener('pointermove', handleMove, { passive: true });
    window.addEventListener('touchmove', handleMove, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('pointermove', handleMove);
      document.removeEventListener('mousemove', handleMove);
      document.removeEventListener('pointermove', handleMove);
      window.removeEventListener('touchmove', handleMove);
    };
  }, []);

  return (
    <>
      <NextSeo
        title="Roshan Yadav"
        defaultTitle="Roshan Yadav"
        titleTemplate="%s"
        description="Roshan Yadav is a Full Stack Engineer & AI Engineer with 2+ years of experience architecting scalable cloud-native B2B SaaS platforms and enterprise GenAI architectures."
        canonical="https://roshan-yadav.is-a.dev"
        openGraph={{
          type: 'website',
          locale: 'en_US',
          url: 'https://roshan-yadav.is-a.dev',
          title: 'Roshan Yadav',
          description:
            'Full Stack Engineer & AI Engineer with 2+ years architecting scalable cloud-native B2B SaaS platforms and enterprise GenAI architectures.',
          site_name: 'Roshan Yadav',
          images: [
            {
              url: 'https://roshan-yadav.is-a.dev/favicon4.png',
              width: 1024,
              height: 1024,
              alt: 'Roshan Yadav',
            },
          ],
        }}
        additionalMetaTags={[
          {
            name: 'keywords',
            content:
              'Roshan Yadav, Full Stack Engineer, AI Engineer, Python, Django, FastAPI, Celery, PostgreSQL, React, Next.js, AWS, Docker, RAG, Gemini API',
          },
          {
            name: 'author',
            content: 'Roshan Yadav',
          },
          {
            name: 'theme-color',
            content: '#0f172a',
          },
        ]}
      />

      {/* Root Layout Wrapper with slate-900 background */}
      <div
        className="group/spotlight relative min-h-screen bg-slate-900 leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900"
        onMouseMove={(e) => {
          if (glowRef.current) {
            glowRef.current.style.background = `radial-gradient(600px circle at ${e.clientX}px ${e.clientY}px, rgba(29, 78, 216, 0.15), transparent 80%)`;
          }
          document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
          document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
        }}
      >
        {/* Global Viewport Cursor Glow: Fixed overlay at z-30 directly matching Brittany Chiang's reference */}
        <div
          ref={glowRef}
          id="global-cursor-glow"
          className="pointer-events-none fixed inset-0 z-30 transition duration-300 animate-glow"
          style={{
            background:
              'radial-gradient(600px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), rgba(29, 78, 216, 0.15), transparent 80%)',
          }}
          aria-hidden="true"
        />

        {/* Page Content */}
        <div className="relative">
          <Component {...pageProps} />
        </div>
      </div>
    </>
  );
}

export default MyApp;
