import React from 'react';

export const FullBleedShowcase = ({ project, settings }) => {
  const isDark = settings.background === '#171717' || settings.background === '#0F172A';
  const textColor = isDark ? 'text-white' : 'text-[#171717]';
  const subtextColor = isDark ? 'text-[#A0A0A0]' : 'text-[#777777]';
  const borderColor = isDark ? 'border-[#333333]' : 'border-[#E7E7E4]';

  const primaryShot = project.screenshots[0]?.url || '/docvyn.png';

  const fontClass =
    settings.fontFamily === 'serif'
      ? 'font-serif'
      : settings.fontFamily === 'mono'
      ? 'font-mono'
      : 'font-sans';

  const shadowClass =
    settings.shadow === 'none'
      ? ''
      : settings.shadow === 'subtle'
      ? 'shadow-subtle'
      : settings.shadow === 'elevated'
      ? 'shadow-elevated'
      : settings.shadow === 'floating'
      ? 'shadow-floating'
      : 'shadow-editorial';

  const borderClass =
    settings.borderStyle === 'none'
      ? ''
      : settings.borderStyle === 'dark'
      ? 'border border-[#171717]'
      : `border ${borderColor}`;

  const paddingClass =
    settings.spacing === 'tight'
      ? 'p-6'
      : settings.spacing === 'balanced'
      ? 'p-8'
      : 'p-10';

  return (
    <div
      className={`w-full h-full flex flex-col justify-between ${paddingClass} ${fontClass} transition-colors duration-200 select-none`}
      style={{ backgroundColor: settings.background }}
    >
      {/* Top Floating Identification Bar */}
      <div className="flex items-center justify-between pb-3 px-1 text-[11px] font-mono tracking-wider">
        <div className="flex items-center gap-3">
          <span className={`font-bold ${textColor}`}>{project.title}</span>
          <span className={subtextColor}>&bull;</span>
          <span className={subtextColor}>{project.category}</span>
        </div>
        <div className="flex items-center gap-4">
          <span className={subtextColor}>{project.url}</span>
          <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${isDark ? 'bg-white/10 text-white' : 'bg-black/5 text-[#171717]'}`}>
            PROD
          </span>
        </div>
      </div>

      {/* Massive Edge-to-Edge Screenshot (92%+ coverage) */}
      <div className="flex-1 w-full min-h-0 relative">
        <div
          className={`w-full h-full relative overflow-hidden ${shadowClass} ${borderClass} bg-[#121212]`}
          style={{ borderRadius: settings.borderRadius }}
        >
          <img
            src={primaryShot}
            alt={project.title}
            className="w-full h-full object-cover object-top"
            crossOrigin="anonymous"
          />
        </div>
      </div>

      {/* Minimal Bottom Identification Strip */}
      <div className="flex items-center justify-between pt-3 px-1 text-[10px] font-mono tracking-widest uppercase">
        <span className={subtextColor}>PLATFORM SHOWCASE &mdash; {project.year || '2026'}</span>
        <span className={subtextColor}>{project.techStack?.slice(0, 5).join(' // ')}</span>
      </div>
    </div>
  );
};
