import React from 'react';

export const ProjectOverview = ({ project, settings }) => {
  const isDark = settings.background === '#171717' || settings.background === '#0F172A';
  const textColor = isDark ? 'text-white' : 'text-[#171717]';
  const subtextColor = isDark ? 'text-[#A0A0A0]' : 'text-[#777777]';
  const borderColor = isDark ? 'border-[#333333]' : 'border-[#E7E7E4]';
  const cardBg = isDark ? 'bg-white/5 border-[#2A2A2A]' : 'bg-white border-[#E7E7E4]';
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
      ? 'p-8'
      : settings.spacing === 'balanced'
      ? 'p-12'
      : 'p-16';

  return (
    <div
      className={`w-full h-full flex flex-col justify-between ${paddingClass} ${fontClass} transition-colors duration-200 select-none`}
      style={{ backgroundColor: settings.background }}
    >
      {/* Top Header */}
      <header className="border-b pb-6 mb-6" style={{ borderColor: isDark ? '#2E2E2E' : '#E7E7E4' }}>
        <div className="flex items-center justify-between mb-2">
          <span className={`text-[11px] font-mono tracking-widest uppercase font-semibold ${subtextColor}`}>
            SYSTEM OVERVIEW &bull; SPECIFICATION
          </span>
          <span className={`text-[11px] font-mono tracking-widest uppercase ${subtextColor}`}>
            {project.role} &bull; {project.year}
          </span>
        </div>
        <div className="grid grid-cols-12 gap-8 items-baseline">
          <h1 className={`col-span-6 text-4xl font-bold tracking-tight ${textColor}`}>
            {project.title}
          </h1>
          <p className={`col-span-6 text-xs lg:text-sm leading-relaxed ${subtextColor}`}>
            {project.description}
          </p>
        </div>
      </header>

      {/* Center 2-Column Split: Dominant Screenshot Left, Architecture Details Right */}
      <div className="grid grid-cols-12 gap-8 flex-1 min-h-0 items-stretch">
        {/* Left Column: Main Screenshot (65%) */}
        <div className="col-span-8 flex flex-col h-full">
          <div
            className={`w-full flex-1 relative overflow-hidden ${shadowClass} ${borderClass} bg-[#121212]`}
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

        {/* Right Column: Architectural Highlights & Tech Stack (35%) */}
        <div className="col-span-4 flex flex-col justify-between h-full space-y-4">
          {/* Key Features Block */}
          <div className="space-y-3">
            <span className={`text-[11px] font-mono tracking-widest uppercase font-bold block ${subtextColor}`}>
              KEY ARCHITECTURAL HIGHLIGHTS
            </span>
            {project.features?.slice(0, 3).map((f, i) => (
              <div
                key={i}
                className={`p-3.5 rounded-lg border ${cardBg}`}
                style={{ borderRadius: settings.borderRadius }}
              >
                <div className={`text-xs font-bold font-mono tracking-wide ${textColor}`}>
                  {f.title}
                </div>
                <div className={`text-[11px] leading-relaxed mt-1 ${subtextColor}`}>
                  {f.description}
                </div>
              </div>
            ))}
          </div>

          {/* Tech Stack Tags Block */}
          <div className="pt-2">
            <span className={`text-[11px] font-mono tracking-widest uppercase font-bold block mb-2 ${subtextColor}`}>
              TECHNOLOGIES DEPLOYED
            </span>
            <div className="flex flex-wrap gap-1.5">
              {project.techStack?.map((tech, i) => (
                <span
                  key={i}
                  className={`text-[10px] font-mono px-2 py-1 rounded ${tagBg}`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Status Strip */}
      {settings.showMetadata && (
        <footer className="mt-6 pt-4 flex items-center justify-between text-[11px] font-mono tracking-wider border-t transition-colors" style={{ borderColor: isDark ? '#2E2E2E' : '#E7E7E4' }}>
          <span className={subtextColor}>CLIENT: {project.client}</span>
          <span className={subtextColor}>VERIFIED REPOSITORY: {project.url}</span>
          <span className={subtextColor}>PLATFORM STATUS: OPERATIONAL</span>
        </footer>
      )}
    </div>
  );
};
