import React from 'react';
import Image from 'next/image';

const projects = [
  {
    title: 'Docvyn · Document Intelligence Platform',
    url: 'https://github.com/crazycodeop/docvyn',
    image: '/images/docvyn.png',
    description:
      'Enterprise multi-tenant document intelligence and Retrieval-Augmented Generation (RAG) platform. Indexes 384-dimensional FastEmbed vectors in Supabase PostgreSQL with strict SQL-level tenant isolation. Powered by Groq LPUs (Llama 3.3 70B) with automatic Gemini API fallback and prompt-injection boundary defense, validated by 48 automated Pytest, HTTPX, and Vitest test suites.',
    skills: [
      'FastAPI',
      'React 18',
      'PostgreSQL',
      'pgvector',
      'Supabase',
      'Celery',
      'Redis',
      'Groq LPU',
      'Gemini API',
      'FastEmbed',
      'Pytest',
    ],
  },
  {
    title: 'FlowForge AI · Visual AI Workflow Orchestrator',
    url: 'https://github.com/crazycodeop/flowforge-ai',
    image: '/images/flowforge.png',
    description:
      'Visual DAG workflow orchestration platform designing and executing multi-step AI pipelines with durable state persistence. Implements topological DAG scheduling (Kahn’s algorithm), sub-40ms async task dispatch via Upstash Redis, distributed Celery worker heartbeat leases, deterministic LLM guardrails with automated Pydantic schema repair, and 62 automated test suites.',
    skills: [
      'FastAPI',
      'React Flow',
      'PostgreSQL 17',
      'Celery',
      'Upstash Redis',
      'Supabase',
      'Groq LPUs',
      'OpenAI',
      'Pydantic v2',
      'Docker',
      'Pytest',
    ],
  },
];

export const Projects: React.FC = () => {
  return (
    <section
      id="projects"
      className="mb-12 scroll-mt-12 sm:mb-16 sm:scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Selected projects"
    >
      {/* Sticky Mobile Header */}
      <div className="sticky top-0 z-20 -mx-6 mb-3 w-screen bg-slate-900/75 px-6 py-3.5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          Projects
        </h2>
      </div>

      <div>
        <ul className="group/list">
          {projects.map((proj, idx) => (
            <li key={idx} className="mb-12">
              <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                {/* Glowy Card Hover Background */}
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1),0_0_24px_-4px_rgba(45,212,191,0.15)] lg:group-hover:border lg:group-hover:border-teal-500/20 lg:group-hover:drop-shadow-lg" />

                {/* Left Column: HD Project Screenshot */}
                <div className="z-10 sm:order-1 sm:col-span-2">
                  <div className="relative aspect-video w-full rounded border-2 border-slate-200/10 overflow-hidden bg-slate-950 transition group-hover:border-teal-400/30 sm:translate-y-1 shadow-md">
                    <Image
                      src={proj.image}
                      alt={proj.title}
                      width={400}
                      height={225}
                      className="w-full h-full object-cover object-top transition duration-300 group-hover:scale-105"
                      priority={idx === 0}
                    />
                  </div>
                </div>

                {/* Right Column: Title, Description, Tags */}
                <div className="z-10 sm:order-2 sm:col-span-6">
                  <h3>
                    <a
                      className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
                      href={proj.url}
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label={`${proj.title} (opens in a new tab)`}
                    >
                      <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
                      <span>
                        {proj.title}
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
                    </a>
                  </h3>

                  <p className="mt-2 text-sm leading-normal text-slate-400">
                    {proj.description}
                  </p>

                  <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                    {proj.skills.map((skill) => (
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
        </ul>

        {/* View Project Archive on GitHub Link */}
        <div className="mt-12">
          <a
            className="inline-flex items-baseline font-semibold leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 font-medium group/link text-base"
            href="https://github.com/crazycodeop"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="View Full Project Archive on GitHub (opens in a new tab)"
          >
            <span>
              View Full Project{' '}
              <span className="inline-block">
                Archive on GitHub
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
