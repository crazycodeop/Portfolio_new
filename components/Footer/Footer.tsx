import React from 'react';
import Link from 'next/link';
import { VscGithubAlt } from 'react-icons/vsc';
import { GrLinkedinOption } from 'react-icons/gr';
import { FiArrowUp } from 'react-icons/fi';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#e4e4e7] dark:border-[#3f3f46] bg-[#ffffff] dark:bg-[#18181b] py-10 sm:py-14 px-5 sm:px-10 lg:px-16 max-w-7xl mx-auto transition-colors duration-250">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Left: Brand & Copyright */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-center sm:text-left">
          <span className="text-[13px] font-semibold tracking-[0.25em] text-[#1f2937] dark:text-[#e4e4e7] uppercase">
            ROSHAN YADAV<span className="text-[#6b7280] dark:text-[#a1a1aa]">.</span>
          </span>
          <span className="text-xs sm:text-[13px] font-mono text-[#6b7280] dark:text-[#a1a1aa]">
            &copy; {new Date().getFullYear()} ROSHAN YADAV. ALL RIGHTS RESERVED.
          </span>
        </div>

        {/* Right: Social & Back-to-Top */}
        <div className="flex items-center gap-5 sm:gap-6">
          <Link
            href="https://github.com/crazycodeop"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="w-11 h-11 flex items-center justify-center text-[#6b7280] hover:text-[#1f2937] dark:text-[#a1a1aa] dark:hover:text-[#e4e4e7] transition-colors duration-200"
          >
            <VscGithubAlt className="w-4 h-4" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/roshanyadav026"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="w-11 h-11 flex items-center justify-center text-[#6b7280] hover:text-[#1f2937] dark:text-[#a1a1aa] dark:hover:text-[#e4e4e7] transition-colors duration-200"
          >
            <GrLinkedinOption className="w-4 h-4" />
          </Link>

          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Back to top"
            className="group flex items-center gap-1.5 text-xs font-mono tracking-wider uppercase text-[#4b5563] hover:text-[#1f2937] dark:text-[#a1a1aa] dark:hover:text-[#e4e4e7] border border-[#e4e4e7] dark:border-[#3f3f46] hover:bg-black/[0.04] dark:hover:bg-white/[0.06] px-4 py-2.5 rounded min-h-[44px] transition-all duration-200 active:scale-95"
          >
            <span>TOP</span>
            <FiArrowUp className="w-3.5 h-3.5 transition-transform duration-200 group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
