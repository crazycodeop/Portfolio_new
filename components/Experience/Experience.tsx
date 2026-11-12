import React from 'react';

const fullTimeExperience = {
  company: 'VakilDesk Technologies Pvt. Ltd.',
  role: 'Software Engineer',
  period: 'OCT 2024 — OCT 2026',
  type: 'Full-time',
  location: 'Remote',
  summary:
    'Spearheaded core backend architecture, AWS cloud infrastructure, and enterprise GenAI systems for mission-critical B2B legal tech SaaS platforms.',
  highlights: [
    'Spearheaded end-to-end architecture and technical requirements for 4 enterprise B2B SaaS platforms using React and Django, delivering 100% on-time across 10+ corporate clients.',
    'Engineered high-availability cloud infrastructure on AWS (EC2, S3, RDS) with Docker and Jenkins CI/CD—cutting deployment cycles by 35% with 99.9% SLA uptime, and reducing hosting costs by 50% via memory leak fixes and EC2 rightsizing (32 GiB to 8 GiB RAM).',
    'Pioneered production GenAI RAG pipelines leveraging Gemini API, LangChain, and vector embeddings for semantic retrieval, reducing automated legal drafting turnaround time by 60%.',
    'Orchestrated fault-tolerant asynchronous microservice workflows across DocuSign, eMudhra, GST, and WhiteBooks APIs via Celery, processing 10,000+ monthly transactions with zero data loss.',
    'Optimized high-throughput PostgreSQL databases by refactoring complex Django ORM queries and implementing Redis caching layers, eliminating N+1 bottlenecks and slashing latency by 40%.',
    'Developed WebDAV real-time document collaboration workflows for live MS Word editing and PDF rendering across 5,000+ legal documents, backed by automated Pytest suites (85%+ coverage) and multi-tenant security (JWT, OAuth2, RBAC).',
  ],
  techStack: [
    'Python',
    'Django',
    'FastAPI',
    'PostgreSQL',
    'AWS (EC2, S3, RDS)',
    'Docker',
    'Celery',
    'Redis',
    'Gemini API',
    'LangChain',
    'Jenkins CI/CD',
    'React',
  ],
};

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-16 sm:py-24 px-5 sm:px-10 lg:px-16 max-w-7xl mx-auto border-t border-[#e4e4e7] dark:border-[#3f3f46]">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-12 sm:mb-16 gap-2 sm:gap-3">
        <div>
          <span className="text-xs font-mono text-[#6b7280] dark:text-[#a1a1aa] tracking-[0.25em] uppercase block mb-1.5">
            01 / EXPERIENCE
          </span>
          <h2 className="text-[1.75rem] sm:text-4xl font-light text-[#1f2937] dark:text-[#e4e4e7] tracking-tight">
            Full-Time Engineering
          </h2>
        </div>
        <span className="text-xs font-mono text-[#6b7280] dark:text-[#a1a1aa] tracking-wider">
          PROFESSIONAL TIMELINE
        </span>
      </div>

      {/* Main Experience Card */}
      <div className="group pb-6 max-w-5xl">
        {/* Role & Company Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-3 mb-5 sm:mb-6">
          <div>
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
              <h3 className="text-2xl sm:text-3xl font-light text-[#1f2937] dark:text-[#e4e4e7] tracking-tight">
                {fullTimeExperience.role}
              </h3>
              <span className="text-[10px] sm:text-[11px] font-mono tracking-wider uppercase px-2 py-0.5 rounded bg-black/[0.04] dark:bg-white/[0.06] border border-[#e4e4e7] dark:border-[#3f3f46] text-[#1f2937] dark:text-[#e4e4e7]">
                {fullTimeExperience.type}
              </span>
            </div>
            <p className="text-[15px] sm:text-base font-medium text-[#4b5563] dark:text-[#a1a1aa] mt-1">
              {fullTimeExperience.company} &middot;{' '}
              <span className="text-[#6b7280] dark:text-[#a1a1aa] font-normal">{fullTimeExperience.location}</span>
            </p>
          </div>
          <div className="text-xs font-mono text-[#6b7280] dark:text-[#a1a1aa] tracking-widest uppercase mt-1 sm:mt-0">
            {fullTimeExperience.period}
          </div>
        </div>

        {/* High-level Summary */}
        <p className="text-[#1f2937] dark:text-[#e4e4e7] text-[15px] sm:text-[17px] leading-[1.65] font-light max-w-3xl mb-6 sm:mb-8">
          {fullTimeExperience.summary}
        </p>

        {/* Structured Impact Highlights */}
        <div className="space-y-3.5 sm:space-y-4 max-w-4xl pt-1">
          {fullTimeExperience.highlights.map((item, index) => (
            <div
              key={index}
              className="flex items-start text-[14.5px] sm:text-base text-[#1f2937] dark:text-[#e4e4e7] leading-[1.65]"
            >
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#6b7280] dark:bg-[#a1a1aa] mt-2.5 mr-3 flex-shrink-0" />
              <span>{item}</span>
            </div>
          ))}
        </div>

        {/* Technology Tags */}
        <div className="mt-8 sm:mt-10 pt-6 border-t border-[#e4e4e7] dark:border-[#3f3f46]">
          <span className="text-[11px] font-mono text-[#6b7280] dark:text-[#a1a1aa] uppercase tracking-widest block mb-3">
            CORE TECHNOLOGIES
          </span>
          <div className="flex flex-wrap gap-2">
            {fullTimeExperience.techStack.map((tech) => (
              <span
                key={tech}
                className="text-[12px] sm:text-[13px] font-mono tracking-wide px-2.5 py-1 sm:px-3 sm:py-1.5 rounded bg-white dark:bg-[#202024] border border-[#e4e4e7] dark:border-[#3f3f46] text-[#1f2937] dark:text-[#e4e4e7] hover:border-[#18181b] dark:hover:border-white/[0.3] transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
