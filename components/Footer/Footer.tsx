import React from 'react';
import Image from 'next/image';

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

      <p className="leading-relaxed text-slate-400">
        Made with ❤️ with{' '}
        <a
          href="https://nextjs.org/"
          className="font-medium text-slate-300 hover:text-teal-300 focus-visible:text-teal-300 transition-colors underline underline-offset-4"
          target="_blank"
          rel="noreferrer noopener"
        >
          Next.js
        </a>
      </p>

      {/* Subtle Personal Brand Signature */}
      <div className="pt-1">
        <Image
          src="/cutout.png"
          alt="Roshan Yadav Personal Brand Signature"
          width={44}
          height={44}
          className="h-10 w-10 -ml-2 object-contain opacity-70 hover:opacity-100 transition-opacity"
        />
      </div>

      <p className="text-[11px] text-slate-600 font-mono">
        &copy; {new Date().getFullYear()} Roshan Yadav. All rights reserved.
      </p>
    </footer>
  );
};
