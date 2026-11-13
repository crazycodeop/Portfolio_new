import React from 'react';

export const HeroShowcase = ({ project, settings }) => {
  const isDark = settings.background === '#171717' || settings.background === '#0F172A';
  const textColor = isDark ? 'text-white' : 'text-[#171717]';
  const subtextColor = isDark ? 'text-[#A0A0A0]' : 'text-[#777777]';
  const borderColor = isDark ? 'border-[#333333]' : 'border-[#E7E7E4]';
  const tagBg = isDark ? 'bg-white/10 text-white' : 'bg-[#171717]/5 text-[#171717]';

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
      ? 'p-10'
      : settings.spacing === 'balanced'
      ? 'p-14'
      : 'p-16 lg:p-20';

  return (
    <div
      className={`w-full h-full flex flex-col justify-between ${paddingClass} ${fontClass} transition-colors duration-200 select-none`}
      style={{ backgroundColor: settings.background }}
    >
      {/* Header Area with Swiss Grid Alignment */}
      <header className="grid grid-cols-12 gap-8 items-start mb-8 border-b pb-8 transition-colors" style={{ borderColor: isDark ? '#2E2E2E' : '#E7E7E4' }}>
        <div className="col-span-7">
          <div className="flex items-center gap-3 mb-2">
            <span className={`text-[11px] font-mono tracking-widest uppercase font-semibold ${subtextColor}`}>
              {project.category || 'PROJECT SHOWCASE'}
            </span>
            <span className={`text-xs ${subtextColor}`}>/</span>
            <span className={`text-[11px] font-mono tracking-widest uppercase ${subtextColor}`}>
              {project.year || '2026'}
            </span>
          </div>
          <h1 className={`text-4xl lg:text-5xl font-bold tracking-tight leading-none ${textColor}`}>
            {project.title}
          </h1>
        </div>

        <div className="col-span-5 flex flex-col justify-between h-full">
          <p className={`text-sm lg:text-base leading-relaxed ${subtextColor}`}>
            {project.description}
          </p>
          {settings.showTechStack && project.techStack?.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mt-4">
              {project.techStack.slice(0, 5).map((tech, i) => (
                <span
                  key={i}
                  className={`text-[11px] font-mono px-2 py-0.5 rounded ${tagBg}`}
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>
      </header>

      {/* Hero Dominant Screenshot (~80% visual focus) */}
      <div className="flex-1 w-full min-h-0 relative flex items-center justify-center">
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

      {/* Subtle Bottom Metadata Bar */}
      {settings.showMetadata && (
        <footer className="mt-6 pt-4 flex items-center justify-between text-[11px] font-mono tracking-wider border-t transition-colors" style={{ borderColor: isDark ? '#2E2E2E' : '#E7E7E4' }}>
          <span className={subtextColor}>ROLE &mdash; {project.role || 'FULL STACK ARCHITECT'}</span>
          <span className={subtextColor}>PLATFORM &mdash; {project.url || 'WWW.DOCVYN.COM'}</span>
          <span className={subtextColor}>CLIENT &mdash; {project.client || 'ENTERPRISE SAAS'}</span>
        </footer>
      )}
    </div>
  );
};
