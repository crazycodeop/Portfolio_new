import React from 'react';
import { TemplateRenderer } from '../Templates';

export const Canvas = ({
  project,
  settings,
  canvasRef,
  zoom = 1,
  showGrid = false,
}) => {
  // Dimension aspect calculation
  let baseWidth = 1920;
  let baseHeight = 1080;

  if (settings.aspectRatio === '4:3') {
    baseWidth = 1600;
    baseHeight = 1200;
  } else if (settings.aspectRatio === '1:1') {
    baseWidth = 1400;
    baseHeight = 1400;
  } else if (settings.aspectRatio === 'story') {
    baseWidth = 1080;
    baseHeight = 1920;
  } else if (settings.aspectRatio === 'custom' && settings.width && settings.height) {
    baseWidth = settings.width;
    baseHeight = settings.height;
  }

  return (
    <div className="relative flex-1 h-full overflow-auto bg-[#EFEFEA] flex items-center justify-center p-8 select-none">
      {/* Zoomed Canvas Container */}
      <div
        className="transition-transform duration-150 ease-out origin-center"
        style={{
          transform: `scale(${zoom})`,
          width: `${baseWidth}px`,
          height: `${baseHeight}px`,
          minWidth: `${baseWidth}px`,
          minHeight: `${baseHeight}px`,
        }}
      >
        {/* The exportable artboard */}
        <div
          ref={canvasRef}
          id="showcase-artboard"
          className="w-full h-full relative overflow-hidden shadow-floating"
          style={{
            backgroundColor: settings.background,
            width: `${baseWidth}px`,
            height: `${baseHeight}px`,
          }}
        >
          {/* Optional Swiss Grid Overlay for Alignment */}
          {showGrid && (
            <div
              className="absolute inset-0 pointer-events-none z-50 grid grid-cols-12 gap-8 px-16 opacity-15"
              style={{
                backgroundImage: 'linear-gradient(to right, rgba(23, 23, 23, 0.1) 1px, transparent 1px)',
                backgroundSize: '100% 100%',
              }}
            >
              {[...Array(12)].map((_, i) => (
                <div key={i} className="h-full bg-red-500/10 border-x border-red-500/20" />
              ))}
            </div>
          )}

          {/* Active Template Renderer */}
          <TemplateRenderer project={project} settings={settings} />
        </div>
      </div>
    </div>
  );
};
