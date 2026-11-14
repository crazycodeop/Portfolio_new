import React from 'react';
import Link from 'next/link';

const experiences = [
  {
    period: '2024 — 2026',
    fullPeriod: 'OCT 2024 — OCT 2026',
    role: 'Software Engineer',
    company: 'VakilDesk Technologies Pvt. Ltd.',
    location: 'Remote',
    description:
      'Spearheaded core backend architecture, high-availability AWS cloud infrastructure, and enterprise GenAI systems for mission-critical B2B legal tech SaaS platforms.',
    highlights: [
      'Architected and delivered 4 full-stack B2B SaaS platforms using Python, Django, DRF, and React, connecting responsive frontend interfaces to REST APIs across 10+ corporate clients with 100% on-time delivery.',
      'Engineered cloud infrastructure on AWS (EC2, S3, RDS) with Docker and Jenkins CI/CD—cutting deployment cycles by 35% with 99.9% SLA uptime, and reducing hosting costs by 50% via memory leak fixes and EC2 rightsizing (32 GiB to 8 GiB RAM).',
      'Pioneered production GenAI RAG pipelines using Gemini API, LangChain, and vector embeddings for semantic retrieval, reducing automated legal drafting turnaround time by 60%.',
    ],
    skills: [
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
      'React',
      'Jenkins CI/CD',
      'Pytest',
    ],
  },
];

export const Experience: React.FC = () => {
  return (
    <section
      id="experience"
      className="mb-8 scroll-mt-8 sm:mb-12 sm:scroll-mt-12 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Work experience"
    >
      {/* Sticky Mobile Header */}
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          Experience
        </h2>
      </div>

      <div>
        <ol className="group/list">
          {experiences.map((exp, idx) => (
            <li key={idx} className="mb-12">
              <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                {/* Clean Specular Hover Surface — No Boxy Borders */}
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />

                {/* Left Date Column */}
                <header
                  className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2"
                  aria-label={exp.fullPeriod}
                >
                  {exp.period}
                </header>

                {/* Right Details Column */}
                <div className="z-10 sm:col-span-6">
                  <h3 className="font-medium leading-snug text-slate-200">
                    <div>
                      <a
                        className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
                        href="https://vakildesk.com"
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label={`${exp.role} at ${exp.company} (opens in a new tab)`}
                      >
                        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
                        <span>
                          {exp.role} &middot;{' '}
                          <span className="inline-block">
                            {exp.company}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                              aria-hidden="true"
                            >
                              <path
                                fillRule="evenodd"
                                d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </span>
                        </span>
                      </a>
                    </div>
                  </h3>

                  <p className="mt-2 text-sm leading-normal text-slate-400">
                    {exp.description}
                  </p>

                  <ul className="mt-3 space-y-2 text-xs sm:text-sm text-slate-400/90 leading-relaxed list-disc list-inside">
                    {exp.highlights.map((item, hIdx) => (
                      <li key={hIdx} className="marker:text-teal-300/80">
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Skills Pill Badges */}
                  <ul className="mt-4 flex flex-wrap" aria-label="Technologies used">
                    {exp.skills.map((skill) => (
                      <li key={skill} className="mr-1.5 mt-2">
                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                          {skill}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          ))}
        </ol>

        {/* View Full Resume Link with Arrow */}
        <div className="mt-12">
          <a
            className="inline-flex items-baseline font-semibold leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 font-medium group/link text-base"
            href="/Roshan_Yadav_Resume.pdf"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="View Full Résumé (opens in a new tab)"
          >
            <span>
              View Full{' '}
              <span className="inline-block">
                R&eacute;sum&eacute;
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};
