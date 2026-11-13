import React from 'react';

export const EditorialShowcase = ({ project, settings }) => {
  const isDark = settings.background === '#171717' || settings.background === '#0F172A';
  const textColor = isDark ? 'text-white' : 'text-[#171717]';
  const subtextColor = isDark ? 'text-[#A0A0A0]' : 'text-[#777777]';
  const borderColor = isDark ? 'border-[#333333]' : 'border-[#E7E7E4]';
  const tagBg = isDark ? 'bg-white/10 text-white' : 'bg-[#171717]/5 text-[#171717]';

  const primaryShot = project.screenshots[0]?.url || '/docvyn.png';
  const secondaryShot = project.screenshots[1]?.url || project.screenshots[0]?.url || '/flowforge.png';

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
      {/* Top Editorial Row */}
      <div className="flex items-baseline justify-between border-b pb-6 mb-8" style={{ borderColor: isDark ? '#2E2E2E' : '#E7E7E4' }}>
        <div className="flex items-center gap-4">
          <span className={`text-[12px] font-mono tracking-widest uppercase font-semibold ${subtextColor}`}>
            CASE NO. 01
          </span>
          <span className={`text-xs ${subtextColor}`}>/</span>
          <span className={`text-[12px] font-mono tracking-widest uppercase font-semibold ${textColor}`}>
            {project.category || 'PRODUCT ARCHITECTURE'}
          </span>
        </div>
        <span className={`text-[12px] font-mono tracking-widest uppercase ${subtextColor}`}>
          {project.year || '2026'} &mdash; {project.client || 'ENTERPRISE'}
        </span>
      </div>

      {/* Main Asymmetric Grid */}
      <div className="grid grid-cols-12 gap-8 flex-1 min-h-0 items-stretch">
        {/* Left Column: Typography + Secondary Detail Screenshot */}
        <div className="col-span-5 flex flex-col justify-between h-full pr-4">
          <div>
            <h1 className={`text-4xl lg:text-5xl font-bold tracking-tight leading-[1.05] mb-4 ${textColor}`}>
              {project.title}
            </h1>
            <p className={`text-sm lg:text-base leading-relaxed mb-6 ${subtextColor}`}>
              {project.description}
            </p>

            {settings.showFeatures && project.features?.length > 0 && (
              <div className="space-y-4 pt-4 border-t" style={{ borderColor: isDark ? '#2E2E2E' : '#E7E7E4' }}>
                {project.features.slice(0, 2).map((feat, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className={`text-xs font-semibold tracking-wide uppercase font-mono ${textColor}`}>
                      0{idx + 1}. {feat.title}
                    </div>
                    <div className={`text-xs leading-normal ${subtextColor}`}>
                      {feat.description}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Secondary Screenshot Slot */}
          <div className="mt-6 pt-4">
            <span className={`block text-[10px] font-mono tracking-widest uppercase mb-2 ${subtextColor}`}>
              FIG 02. &mdash; SYSTEM DETAIL / EXECUTION
            </span>
            <div
              className={`w-full h-36 lg:h-44 relative overflow-hidden ${shadowClass} ${borderClass} bg-[#121212]`}
              style={{ borderRadius: settings.borderRadius }}
            >
              <img
                src={secondaryShot}
                alt="Detail"
                className="w-full h-full object-cover object-top"
                crossOrigin="anonymous"
              />
            </div>
          </div>
        </div>

        {/* Right Column: Dominant Primary Interface Screenshot */}
        <div className="col-span-7 flex flex-col h-full">
          <span className={`block text-[10px] font-mono tracking-widest uppercase mb-2 ${subtextColor}`}>
            FIG 01. &mdash; PRIMARY WORKSPACE INTERFACE
          </span>
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
      </div>

      {/* Footer Strip */}
      {settings.showMetadata && (
        <div className="mt-8 pt-4 flex items-center justify-between text-[11px] font-mono tracking-wider border-t transition-colors" style={{ borderColor: isDark ? '#2E2E2E' : '#E7E7E4' }}>
          <span className={subtextColor}>ARCHITECTURE: {project.techStack?.slice(0, 4).join(' &bull; ')}</span>
          <span className={subtextColor}>SOURCE: {project.url || 'WWW.DOCVYN.COM'}</span>
        </div>
      )}
    </div>
  );
};
