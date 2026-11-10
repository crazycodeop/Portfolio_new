import React from 'react';
import Link from 'next/link';
import {
  SiPython,
  SiDjango,
  SiFastapi,
  SiNodedotjs,
  SiPostgresql,
  SiMysql,
  SiRedis,
  SiDocker,
  SiReact,
} from 'react-icons/si';
import { FaAws } from 'react-icons/fa';
import { BsCpu } from 'react-icons/bs';
import { VscGithubAlt } from 'react-icons/vsc';
import { GrLinkedinOption } from 'react-icons/gr';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[82vh] sm:min-h-[88vh] flex flex-col justify-center pt-24 sm:pt-32 pb-16 sm:pb-20 px-5 sm:px-10 lg:px-16 max-w-7xl mx-auto">
      {/* Editorial Headline */}
      <div className="max-w-5xl">
        <h1 className="text-[2.4rem] xs:text-[2.75rem] sm:text-6xl md:text-7xl lg:text-[4.75rem] font-light tracking-tight leading-[1.1] sm:leading-[1.08] select-none">
          <span className="block text-white font-light">Backend Engineer</span>
          <span className="block text-neutral-400 font-light mt-1">
            &amp; AI Engineer
          </span>
        </h1>

        {/* Supporting description */}
        <div className="mt-6 sm:mt-10 max-w-2xl space-y-2">
          <p className="text-neutral-300 text-base sm:text-xl font-normal leading-[1.6]">
            2+ years architecting scalable cloud-native B2B SaaS platforms.
          </p>
          <p className="text-neutral-400 text-[15px] sm:text-lg font-normal leading-[1.6]">
            Specialized in distributed backend systems and enterprise GenAI architectures.
          </p>
        </div>

        {/* Selected Technology Icons (Monochrome & Touch-friendly) */}
        <div className="mt-8 sm:mt-12 flex flex-wrap items-center gap-3.5 sm:gap-7 text-neutral-400">
          {[
            { Icon: SiPython, title: 'Python' },
            { Icon: SiDjango, title: 'Django' },
            { Icon: SiFastapi, title: 'FastAPI' },
            { Icon: SiNodedotjs, title: 'Node.js' },
            { Icon: SiPostgresql, title: 'PostgreSQL' },
            { Icon: SiMysql, title: 'MySQL' },
            { Icon: SiRedis, title: 'Redis / Celery' },
            { Icon: SiDocker, title: 'Docker' },
            { Icon: FaAws, title: 'AWS Infrastructure' },
            { Icon: BsCpu, title: 'Generative AI & LLMs' },
            { Icon: SiReact, title: 'React' },
          ].map(({ Icon, title }) => (
            <div
              key={title}
              className="w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center rounded bg-white/[0.03] sm:bg-transparent border border-white/[0.06] sm:border-transparent text-neutral-400 hover:text-white transition-colors duration-200"
              title={title}
            >
              <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
          ))}
        </div>

        {/* Hero CTA & Social Presence */}
        <div className="mt-10 sm:mt-14 flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-12">
          <a
            href="#work"
            className="inline-flex items-center justify-center gap-2.5 min-h-[48px] px-6 py-3.5 text-xs sm:text-[13px] font-semibold tracking-[0.22em] uppercase text-black bg-white sm:text-white sm:bg-transparent sm:hover:text-neutral-300 rounded sm:rounded-none transition-colors border border-transparent sm:border-none"
          >
            <span>VIEW SELECTED WORK</span>
            <span className="transition-transform duration-200 group-hover:translate-x-1">
              &rarr;
            </span>
          </a>

          <div className="flex items-center gap-5 sm:border-l sm:border-white/[0.08] sm:pl-8 pt-2 sm:pt-0">
            <Link
              href="https://github.com/crazycodeop"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="min-h-[44px] min-w-[44px] flex items-center justify-center text-neutral-400 hover:text-white transition-colors duration-200 rounded-md"
            >
              <VscGithubAlt className="w-5 h-5" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/roshanyadav026"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="min-h-[44px] min-w-[44px] flex items-center justify-center text-neutral-400 hover:text-white transition-colors duration-200 rounded-md"
            >
              <GrLinkedinOption className="w-4 h-4" />
            </Link>
            <a
              href="/Roshan_Yadav_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono text-neutral-400 hover:text-white ml-2 py-2 underline underline-offset-4 sm:hidden"
            >
              RESUME (PDF) &rarr;
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
