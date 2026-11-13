import React from 'react';
import Image from 'next/image';

export const Footer: React.FC = () => {
  return (
    <footer className="max-w-md pb-16 text-xs sm:text-sm text-slate-500 sm:pb-0 space-y-3">
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

      {/* Brand Logo */}
      <div>
        <Image
          src="/cutout.png"
          alt="Roshan Yadav Logo"
          width={72}
          height={72}
          className="h-14 w-14 sm:h-16 sm:w-16 -ml-3 object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
        />
      </div>
    </footer>
  );
};
