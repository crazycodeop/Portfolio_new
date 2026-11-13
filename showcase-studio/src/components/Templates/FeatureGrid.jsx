import React from 'react';

export const FeatureGrid = ({ project, settings }) => {
  const isDark = settings.background === '#171717' || settings.background === '#0F172A';
  const textColor = isDark ? 'text-white' : 'text-[#171717]';
  const subtextColor = isDark ? 'text-[#A0A0A0]' : 'text-[#777777]';
  const borderColor = isDark ? 'border-[#333333]' : 'border-[#E7E7E4]';

  const screenshots = project.screenshots.length >= 2
    ? project.screenshots
    : [
        project.screenshots[0] || { url: '/docvyn.png', name: 'Document Analysis' },
        { url: '/flowforge.png', name: 'Workflow Engine' },
        { url: '/docvyn.png', name: 'Vector Ingestion' },
      ];

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
      <header className="border-b pb-6 mb-8" style={{ borderColor: isDark ? '#2E2E2E' : '#E7E7E4' }}>
        <div className="flex items-center justify-between mb-3">
          <span className={`text-[11px] font-mono tracking-widest uppercase font-semibold ${subtextColor}`}>
            SYSTEM BREAKDOWN &mdash; {project.category || 'FEATURE MATRIX'}
          </span>
          <span className={`text-[11px] font-mono tracking-widest uppercase ${subtextColor}`}>
            {project.year || '2026'} / {project.client || 'ENTERPRISE SAAS'}
          </span>
        </div>
        <div className="flex items-baseline justify-between">
          <h1 className={`text-3xl lg:text-4xl font-bold tracking-tight ${textColor}`}>
            {project.title} &mdash; Core Engineering Modules
          </h1>
          <p className={`text-xs lg:text-sm max-w-md text-right ${subtextColor}`}>
            {project.subtitle || project.description}
          </p>
        </div>
      </header>

      {/* Structured 2 or 3 Column Feature Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 flex-1 min-h-0 items-stretch">
        {screenshots.slice(0, 3).map((shot, idx) => {
          const feature = project.features?.[idx] || {
            title: shot.name || `Core Capability 0${idx + 1}`,
            description: shot.caption || 'High-throughput architecture delivering sub-second latency and deterministic state.',
          };

          return (
            <div key={idx} className="flex flex-col h-full justify-between">
              {/* Image Frame */}
              <div
                className={`w-full flex-1 relative overflow-hidden mb-4 ${shadowClass} ${borderClass} bg-[#121212]`}
                style={{ borderRadius: settings.borderRadius, minHeight: '180px' }}
              >
                <img
                  src={shot.url}
                  alt={shot.name}
                  className="w-full h-full object-cover object-top"
                  crossOrigin="anonymous"
                />
              </div>

              {/* Minimal Feature Label & Description */}
              <div className="pt-2">
                <div className="flex items-center gap-2 mb-1">
                  <span className={`text-[10px] font-mono font-bold uppercase ${isDark ? 'text-teal-400' : 'text-[#171717]'}`}>
                    0{idx + 1}
                  </span>
                  <span className={`text-xs font-bold tracking-wide uppercase font-mono ${textColor}`}>
                    {feature.title}
                  </span>
                </div>
                <p className={`text-xs leading-relaxed ${subtextColor}`}>
                  {feature.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer Strip */}
      {settings.showMetadata && (
        <footer className="mt-8 pt-4 flex items-center justify-between text-[11px] font-mono tracking-wider border-t transition-colors" style={{ borderColor: isDark ? '#2E2E2E' : '#E7E7E4' }}>
          <span className={subtextColor}>ENGINEERING: {project.techStack?.join(' / ')}</span>
          <span className={subtextColor}>STABLE RELEASE 2.4.0</span>
        </footer>
      )}
    </div>
  );
};
