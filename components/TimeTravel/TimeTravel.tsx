import React, { useState, useEffect } from 'react';
import { FiX, FiClock, FiCheck } from 'react-icons/fi';

interface VersionItem {
  version: string;
  label: string;
  date: string;
  description: string;
  url?: string;
  isCurrent?: boolean;
}

// Configurable portfolio versions
const portfolioVersions: VersionItem[] = [
  {
    version: 'v1.0',
    label: 'Split-Screen Minimalist Portfolio',
    date: '2026',
    description: 'Current production release inspired by Brittany Chiang design system.',
    isCurrent: true,
  },
];

export const TimeTravel: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  return (
    <>
      {/* Floating Animated Time Travel Trigger Button */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40">
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="group relative flex items-center justify-center p-3 rounded-full bg-slate-800/90 hover:bg-slate-800 border border-slate-700/80 text-slate-400 hover:text-teal-300 shadow-lg backdrop-blur hover:-translate-y-1.5 transition-all duration-200 active:scale-95"
          aria-label="View portfolio version history"
          title="Portfolio Archives"
        >
          {/* Animated Hourglass / Time Travel Icon */}
          <FiClock className="h-5 w-5 transition-transform duration-500 group-hover:rotate-180" />

          {/* Tooltip on Desktop */}
          <span className="pointer-events-none absolute bottom-full mb-2 right-0 hidden rounded bg-slate-900/95 px-2.5 py-1 text-[11px] font-mono text-slate-300 opacity-0 shadow-md border border-slate-800 transition-opacity group-hover:opacity-100 sm:block whitespace-nowrap">
            Portfolio Archives
          </span>
        </button>
      </div>

      {/* Modal Dialog */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm transition-opacity"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />

          {/* Dialog Container */}
          <div className="relative w-full max-w-md rounded-xl bg-slate-900 border border-slate-700/80 p-6 sm:p-7 shadow-2xl z-10 transition-all">
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="absolute right-4 top-4 text-slate-400 hover:text-slate-200 p-1.5 rounded-md hover:bg-slate-800 transition-colors"
              aria-label="Close dialog"
            >
              <FiX className="h-5 w-5" />
            </button>

            {/* Header */}
            <div className="mb-6">
              <span className="text-[11px] font-mono text-teal-300 uppercase tracking-widest block mb-1">
                TIME MACHINE
              </span>
              <h3
                id="modal-title"
                className="text-xl sm:text-2xl font-bold tracking-tight text-slate-200"
              >
                Portfolio Iterations
              </h3>
              <p className="mt-1.5 text-xs sm:text-sm text-slate-400">
                Explore previous iterations and archived versions of my portfolio.
              </p>
            </div>

            {/* Versions List */}
            <div className="space-y-3">
              {portfolioVersions.map((item) => (
                <div
                  key={item.version}
                  className="group relative flex items-start justify-between p-3.5 rounded-lg border border-slate-800 bg-slate-950/50 hover:border-slate-700 transition-colors"
                >
                  <div className="space-y-1 pr-3">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-semibold text-slate-200">
                        {item.version}
                      </span>
                      {item.isCurrent && (
                        <span className="inline-flex items-center gap-1 rounded-full bg-teal-400/10 px-2 py-0.5 text-[10px] font-medium text-teal-300">
                          <FiCheck className="h-3 w-3" />
                          <span>Current</span>
                        </span>
                      )}
                      <span className="text-[11px] font-mono text-slate-500">
                        &middot; {item.date}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {item.url && !item.isCurrent ? (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="text-xs font-mono text-teal-300 hover:underline shrink-0 pt-0.5"
                    >
                      Visit &rarr;
                    </a>
                  ) : null}
                </div>
              ))}
            </div>

            {/* Note */}
            <div className="mt-6 pt-4 border-t border-slate-800 text-center">
              <p className="text-[11px] font-mono text-slate-500">
                Archived versions can be linked here as new iterations are released.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
