import React from 'react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-24 px-5 sm:px-10 lg:px-16 max-w-7xl mx-auto border-t border-[#e4e4e7] dark:border-[#3f3f46]">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-12 sm:mb-16 gap-2 sm:gap-3">
        <div>
          <span className="text-xs font-mono text-[#6b7280] dark:text-[#a1a1aa] tracking-[0.25em] uppercase block mb-1.5">
            04 / ABOUT
          </span>
          <h2 className="text-[1.75rem] sm:text-4xl font-light text-[#1f2937] dark:text-[#e4e4e7] tracking-tight">
            Background &amp; Philosophy
          </h2>
        </div>
        <span className="text-xs font-mono text-[#6b7280] dark:text-[#a1a1aa] tracking-wider">
          ENGINEERING PRINCIPLES
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
        {/* Left Column: Core Narrative */}
        <div className="lg:col-span-8 space-y-5 sm:space-y-6 text-[#4b5563] dark:text-[#a1a1aa] text-[15px] sm:text-[17px] font-light leading-[1.65] sm:leading-[1.7]">
          <p className="text-lg sm:text-2xl text-[#1f2937] dark:text-[#e4e4e7] font-light leading-snug">
            I am a software engineer focused on building robust backend systems, resilient distributed data pipelines, and production-grade Generative AI applications.
          </p>

          <p>
            Over the past 2+ years, I have architected and deployed multi-tenant B2B SaaS platforms serving enterprise clients. My core work centers on solving concrete engineering challenges: eliminating database bottlenecks, designing deterministic workflow engines, cutting infrastructure overhead, and orchestrating fault-tolerant asynchronous microservices.
          </p>

          <p>
            In Generative AI, my emphasis is on determinism and reliability. Moving beyond exploratory chatbot scripts, I design and build production-grade architectures&mdash;such as grounded RAG pipelines with verifiable page citations (Docvyn) and topological DAG workflow orchestrators with automated schema repair and human approval gates (FlowForge AI).
          </p>

          <p className="text-[#6b7280] dark:text-[#a1a1aa] text-sm sm:text-base leading-[1.65]">
            I believe that good software engineering is defined by clear architectural boundaries, strict data isolation, comprehensive automated testing, and disciplined system design.
          </p>
        </div>

        {/* Right Column: Education & Stats */}
        <div className="lg:col-span-4 space-y-7 sm:space-y-8 border-t border-[#e4e4e7] dark:border-[#3f3f46] pt-8 lg:border-t-0 lg:pt-0 lg:border-l lg:pl-10">
          <div>
            <span className="text-[11px] font-mono text-[#6b7280] dark:text-[#a1a1aa] uppercase tracking-widest block mb-2">
              EDUCATION
            </span>
            <h3 className="text-base sm:text-lg font-medium text-[#1f2937] dark:text-[#e4e4e7]">
              Thadomal Shahani Engineering College
            </h3>
            <p className="text-sm sm:text-[15px] text-[#4b5563] dark:text-[#a1a1aa] mt-1">
              B.E. in Electronics &amp; Telecommunications
            </p>
            <div className="flex items-center gap-3 mt-2 text-xs sm:text-[13px] font-mono text-[#6b7280] dark:text-[#a1a1aa]">
              <span>CGPA: 8.82 / 10.00</span>
              <span>&middot;</span>
              <span>Class of 2024</span>
            </div>
            <p className="text-xs sm:text-[13px] text-[#6b7280] dark:text-[#71717a] mt-2.5 sm:mt-3 leading-relaxed">
              Coursework: Data Structures, Analysis of Algorithms, Object-Oriented Programming, Database Management Systems.
            </p>
          </div>

          <div className="border-t border-[#e4e4e7] dark:border-[#3f3f46] pt-6">
            <span className="text-[11px] font-mono text-[#6b7280] dark:text-[#a1a1aa] uppercase tracking-widest block mb-3">
              ENGINEERING PILLARS
            </span>
            <ul className="space-y-2.5 text-xs sm:text-[13px] font-mono text-[#1f2937] dark:text-[#e4e4e7]">
              <li className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 bg-[#6b7280] dark:bg-[#a1a1aa] rounded-full flex-shrink-0" />
                <span>Deterministic AI &amp; Strict Guardrails</span>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 bg-[#6b7280] dark:bg-[#a1a1aa] rounded-full flex-shrink-0" />
                <span>Zero-Data-Loss Asynchronous Queues</span>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 bg-[#6b7280] dark:bg-[#a1a1aa] rounded-full flex-shrink-0" />
                <span>Multi-Tenant Data Isolation in SQL</span>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 bg-[#6b7280] dark:bg-[#a1a1aa] rounded-full flex-shrink-0" />
                <span>High Test Coverage (Pytest &amp; Vitest)</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
