import React from 'react';

export const About: React.FC = () => {
  return (
    <section
      id="about"
      className="mb-8 scroll-mt-8 sm:mb-12 sm:scroll-mt-12 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="About me"
    >
      {/* Sticky Mobile Header */}
      <div
        className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0 animate-reveal"
        style={{ animationDelay: '260ms' }}
      >
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          About
        </h2>
      </div>

      <div className="space-y-4 text-slate-400 leading-relaxed text-base">
        <p className="animate-reveal" style={{ animationDelay: '300ms' }}>
          Hi there! I&apos;m Roshan, and I enjoy building things that solve real engineering
          problems. I&apos;m a software engineer working across backend systems, modern web
          applications, and Generative AI. I particularly enjoy designing systems that are scalable,
          reliable, and practical &mdash; from distributed backend architectures to AI-powered
          applications.
        </p>

        <p className="animate-reveal" style={{ animationDelay: '340ms' }}>
          Over the past 2+ years, I&apos;ve worked on building and scaling cloud-native B2B SaaS
          platforms at <span className="font-medium text-slate-200">VakilDesk Technologies</span>. My
          work spans Python, Django, FastAPI, PostgreSQL, Redis, Celery, AWS, and React. I&apos;ve
          worked on enterprise platforms, optimized database queries and caching to improve
          performance by 40%, reduced infrastructure costs by 50%, and built integrations with
          services like DocuSign, eMudhra, and GST APIs.
        </p>

        <p className="animate-reveal" style={{ animationDelay: '380ms' }}>
          I&apos;m also interested in making Generative AI more reliable and useful in real-world
          applications. I&apos;ve been building{' '}
          <a
            className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 transition-colors"
            href="#projects"
          >
            Docvyn
          </a>
          , a document intelligence platform powered by RAG, and{' '}
          <a
            className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 transition-colors"
            href="#projects"
          >
            FlowForge AI
          </a>
          , an AI workflow engine focused on structured execution and reliability. I enjoy exploring
          the engineering behind these systems, particularly retrieval architectures, workflow
          orchestration, and making AI outputs more predictable.
        </p>

        <p className="animate-reveal" style={{ animationDelay: '420ms' }}>
          I graduated with a B.E. in Electronics &amp; Telecommunications from{' '}
          <span className="font-medium text-slate-200">
            Thadomal Shahani Engineering College
          </span>
          , with a CGPA of 8.82/10. Outside of work, I enjoy exploring distributed systems, cloud
          architecture, open-source AI projects, and learning new technologies.
        </p>
      </div>
    </section>
  );
};
