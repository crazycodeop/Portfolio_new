import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="max-w-md pb-16 text-xs sm:text-sm text-slate-500 sm:pb-0 space-y-4">
      <div className="pt-6 border-t border-slate-800/80 space-y-2">
        <p className="text-slate-400 font-medium text-xs tracking-wider uppercase">
          Direct Reach
        </p>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-mono text-slate-400">
          <a
            href="mailto:roshany.ir.ry@gmail.com"
            className="hover:text-teal-300 transition-colors"
          >
            roshany.ir.ry@gmail.com
          </a>
          <span>&middot;</span>
          <a
            href="tel:+919834905805"
            className="hover:text-teal-300 transition-colors"
          >
            +91 9834905805
          </a>
        </div>
      </div>

      <p className="leading-relaxed">
        Loosely designed in{' '}
        <span className="font-medium text-slate-400">Figma</span> and coded in{' '}
        <span className="font-medium text-slate-400">Visual Studio Code</span>. Built with{' '}
        <a
          href="https://nextjs.org/"
          className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300 transition-colors"
          target="_blank"
          rel="noreferrer noopener"
        >
          Next.js
        </a>{' '}
        and{' '}
        <a
          href="https://tailwindcss.com/"
          className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300 transition-colors"
          target="_blank"
          rel="noreferrer noopener"
        >
          Tailwind CSS
        </a>
        , deployed with{' '}
        <a
          href="https://vercel.com/"
          className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300 transition-colors"
          target="_blank"
          rel="noreferrer noopener"
        >
          Vercel
        </a>
        . All text is set in the{' '}
        <span className="font-medium text-slate-400">Inter</span> typeface.
      </p>

      <p className="text-[11px] text-slate-600 font-mono">
        &copy; {new Date().getFullYear()} Roshan Yadav. All rights reserved.
      </p>
    </footer>
  );
};
