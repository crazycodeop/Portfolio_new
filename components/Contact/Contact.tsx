import React from 'react';
import Link from 'next/link';
import { VscGithubAlt } from 'react-icons/vsc';
import { GrLinkedinOption } from 'react-icons/gr';
import { FiMail, FiPhone, FiArrowUpRight } from 'react-icons/fi';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 sm:py-28 px-5 sm:px-10 lg:px-16 max-w-7xl mx-auto border-t border-white/[0.06]">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-12 sm:mb-16 gap-2 sm:gap-3">
        <div>
          <span className="text-xs font-mono text-neutral-500 tracking-[0.25em] uppercase block mb-1.5">
            05 / CONTACT
          </span>
          <h2 className="text-[1.75rem] sm:text-4xl font-light text-white tracking-tight">
            Initiate Conversation
          </h2>
        </div>
        <span className="text-xs font-mono text-neutral-500 tracking-wider">
          DIRECT REACH
        </span>
      </div>

      <div className="max-w-4xl">
        {/* Large Editorial Headline */}
        <h3 className="text-[2.2rem] xs:text-[2.6rem] sm:text-6xl lg:text-[4.25rem] font-light tracking-tight leading-[1.12] sm:leading-[1.08] text-white">
          HAVE A PROJECT IN MIND?
          <span className="block text-neutral-400 font-light mt-1">LET&apos;S TALK.</span>
        </h3>

        <p className="mt-6 sm:mt-8 text-neutral-300 text-[15px] sm:text-[17px] max-w-2xl font-light leading-[1.65]">
          Whether you are looking to architect a scalable backend platform, build production-grade GenAI pipelines, or discuss engineering roles&mdash;reach out directly.
        </p>

        {/* Primary Contact CTA Buttons (Full width on mobile, auto on sm+) */}
        <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
          <a
            href="mailto:roshany.ir.ry@gmail.com"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 text-xs sm:text-[13px] font-semibold tracking-[0.2em] uppercase text-black bg-white hover:bg-neutral-200 min-h-[50px] px-7 py-4 rounded transition-colors duration-200"
          >
            <FiMail className="w-4 h-4 text-black flex-shrink-0" />
            <span className="truncate">roshany.ir.ry@gmail.com</span>
            <FiArrowUpRight className="w-4 h-4 text-black flex-shrink-0" />
          </a>

          <a
            href="tel:+919834905805"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 text-xs sm:text-[13px] font-mono tracking-wider text-neutral-300 hover:text-white border border-white/[0.12] hover:border-white/[0.25] min-h-[50px] px-6 py-4 rounded transition-colors duration-200"
          >
            <FiPhone className="w-4 h-4 flex-shrink-0" />
            <span>+91 9834905805</span>
          </a>
        </div>

        {/* Social & Resume Links */}
        <div className="mt-12 sm:mt-16 pt-8 sm:pt-10 border-t border-white/[0.06] flex flex-wrap items-center gap-6 sm:gap-8">
          <Link
            href="https://www.linkedin.com/in/roshanyadav026"
            target="_blank"
            rel="noopener noreferrer"
            className="group min-h-[44px] flex items-center gap-2 text-xs sm:text-[13px] font-mono tracking-wider text-neutral-300 hover:text-white transition-colors py-1"
          >
            <GrLinkedinOption className="w-4 h-4 text-neutral-400 group-hover:text-white transition-colors" />
            <span>LINKEDIN</span>
            <FiArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
          </Link>

          <Link
            href="https://github.com/crazycodeop"
            target="_blank"
            rel="noopener noreferrer"
            className="group min-h-[44px] flex items-center gap-2 text-xs sm:text-[13px] font-mono tracking-wider text-neutral-300 hover:text-white transition-colors py-1"
          >
            <VscGithubAlt className="w-4 h-4 text-neutral-400 group-hover:text-white transition-colors" />
            <span>GITHUB</span>
            <FiArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
          </Link>

          <a
            href="/Roshan_Yadav_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group min-h-[44px] flex items-center gap-2 text-xs sm:text-[13px] font-mono tracking-wider text-neutral-300 hover:text-white transition-colors py-1"
          >
            <span>DOWNLOAD RESUME (PDF)</span>
            <FiArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
          </a>
        </div>
      </div>
    </section>
  );
};
