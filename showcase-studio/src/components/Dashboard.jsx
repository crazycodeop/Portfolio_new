import React, { useState } from 'react';
import {
  Plus,
  ExternalLink,
  Copy,
  Trash2,
  Download,
  Clock,
  Layers,
  Sparkles,
  ArrowRight,
  Camera,
  FolderKanban,
  Check,
} from 'lucide-react';
import { TEMPLATES_CONFIG } from '../data/initialProjects';

export const Dashboard = ({
  projects,
  onOpenProject,
  onCreateProject,
  onDuplicateProject,
  onDeleteProject,
  exportHistory = [],
}) => {
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [showHistory, setShowHistory] = useState(false);
  const [copiedId, setCopiedId] = useState(null);

  // Extract unique categories
  const categories = ['ALL', ...new Set(projects.map((p) => p.category).filter(Boolean))];

  const filteredProjects =
    selectedCategory === 'ALL'
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  const handleCopyHistory = (item) => {
    const link = document.createElement('a');
    link.download = `${item.projectTitle.toLowerCase()}-export.png`;
    link.href = item.dataUrl;
    link.click();
    setCopiedId(item.id);
    setTimeout(() => setCopiedId(null), 1500);
  };

  return (
    <div className="min-h-screen bg-[#F7F7F5] text-[#171717] flex flex-col select-none">
      {/* Editorial Top Header */}
      <header className="border-b border-[#E7E7E4] bg-white sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 bg-[#171717] text-white flex items-center justify-center rounded font-mono font-bold text-xs tracking-tighter">
              SS
            </div>
            <div>
              <span className="font-bold text-sm tracking-tight text-[#171717]">
                SHOWCASE STUDIO
              </span>
              <span className="text-[10px] font-mono text-[#777777] ml-2 hidden sm:inline">
                &mdash; SWISS EDITORIAL PRESENTATION GENERATOR
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowHistory(!showHistory)}
              className={`px-3 py-1.5 rounded text-xs font-mono transition-colors flex items-center gap-1.5 border ${
                showHistory
                  ? 'border-[#171717] bg-[#171717] text-white'
                  : 'border-[#E7E7E4] bg-white text-[#555555] hover:text-[#171717]'
              }`}
            >
              <Clock className="w-3.5 h-3.5" />
              <span>Export History ({exportHistory.length})</span>
            </button>

            <button
              onClick={onCreateProject}
              className="px-4 py-1.5 bg-[#171717] text-white rounded text-xs font-mono font-semibold hover:bg-black transition-colors flex items-center gap-1.5 shadow-subtle"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>New Showcase</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-6 lg:px-10 py-10 flex-1 w-full space-y-10">
        {/* Editorial Subheader & Philosophy Banner */}
        <section className="grid grid-cols-12 gap-8 items-end border-b border-[#E7E7E4] pb-8">
          <div className="col-span-12 lg:col-span-8 space-y-2">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#777777] font-semibold">
              SWISS MODERNIST &bull; PORTFOLIO ARTIFACTS
            </span>
            <h1 className="text-3xl lg:text-4xl font-bold tracking-tight text-[#171717] leading-tight">
              High-Fidelity Project Showcase Presentations
            </h1>
            <p className="text-xs lg:text-sm text-[#777777] max-w-2xl leading-relaxed">
              Automated high-resolution web captures transformed into disciplined Swiss modernist case studies. The software interface remains the primary hero.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="col-span-12 lg:col-span-4 flex items-center justify-start lg:justify-end gap-1.5 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-2.5 py-1 text-[11px] font-mono uppercase tracking-wider rounded border transition-colors ${
                  selectedCategory === cat
                    ? 'border-[#171717] bg-[#171717] text-white font-bold'
                    : 'border-[#E7E7E4] bg-white text-[#777777] hover:border-[#171717]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        {/* Export History Drawer / Section (if opened) */}
        {showHistory && (
          <section className="bg-white border border-[#E7E7E4] rounded-xl p-6 space-y-4 shadow-subtle animate-in fade-in duration-200">
            <div className="flex items-center justify-between border-b border-[#E7E7E4] pb-3">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#171717]" />
                <h2 className="text-xs font-mono uppercase tracking-widest font-bold text-[#171717]">
                  Rendered Export History
                </h2>
              </div>
              <span className="text-[11px] font-mono text-[#777777]">
                Saved locally across page reloads
              </span>
            </div>

            {exportHistory.length === 0 ? (
              <div className="py-8 text-center text-xs text-[#777777] font-mono">
                No showcases exported yet. Click any project below to customize and export.
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {exportHistory.map((item) => (
                  <div
                    key={item.id}
                    className="border border-[#E7E7E4] rounded-lg overflow-hidden bg-[#FAF9F8] p-3 space-y-2 group"
                  >
                    <div className="aspect-video w-full rounded bg-black/5 overflow-hidden border border-black/10">
                      <img
                        src={item.dataUrl}
                        alt={item.projectTitle}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold truncate text-[#171717]">
                        {item.projectTitle}
                      </span>
                      <span className="text-[10px] font-mono text-[#777777]">
                        {item.scale}
                      </span>
                    </div>
                    <button
                      onClick={() => handleCopyHistory(item)}
                      className="w-full py-1 text-center text-[11px] font-mono rounded border border-[#E7E7E4] bg-white hover:bg-[#171717] hover:text-white transition-colors flex items-center justify-center gap-1"
                    >
                      {copiedId === item.id ? (
                        <>
                          <Check className="w-3 h-3 text-emerald-600" />
                          <span>Downloaded</span>
                        </>
                      ) : (
                        <>
                          <Download className="w-3 h-3" />
                          <span>Re-Download PNG</span>
                        </>
                      )}
                    </button>
                  </div>
                ))}
              </div>
            )}
          </section>
        )}

        {/* Projects Grid */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono uppercase tracking-widest text-[#777777] font-semibold">
              ACTIVE CASE STUDIES ({filteredProjects.length})
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {filteredProjects.map((proj) => {
              const tmpl = TEMPLATES_CONFIG.find((t) => t.id === proj.selectedTemplate) || TEMPLATES_CONFIG[0];
              const primaryShot = proj.screenshots[0]?.url || '/docvyn.png';

              return (
                <div
                  key={proj.id}
                  className="bg-white rounded-xl border border-[#E7E7E4] overflow-hidden hover:border-[#171717] transition-all duration-200 group flex flex-col justify-between shadow-subtle"
                >
                  {/* Card Artboard Preview Area */}
                  <div
                    onClick={() => onOpenProject(proj)}
                    className="aspect-[16/10] w-full bg-[#FAF9F7] p-6 flex items-center justify-center cursor-pointer border-b border-[#E7E7E4] relative overflow-hidden group-hover:bg-[#F2F1ED] transition-colors"
                  >
                    {/* Embedded Miniature Presentation Preview */}
                    <div className="w-full h-full rounded-md shadow-editorial border border-black/10 overflow-hidden relative bg-[#121212]">
                      <img
                        src={primaryShot}
                        alt={proj.title}
                        className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
                      />
                    </div>

                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm border border-[#E7E7E4] px-2 py-0.5 rounded text-[10px] font-mono uppercase font-bold text-[#171717]">
                      {tmpl.name}
                    </div>
                  </div>

                  {/* Card Content & Details */}
                  <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-baseline justify-between mb-1.5">
                        <span className="text-[11px] font-mono uppercase tracking-widest text-[#777777]">
                          {proj.category} &bull; {proj.year}
                        </span>
                        <span className="text-[11px] font-mono text-[#777777]">
                          {proj.screenshots.length} {proj.screenshots.length === 1 ? 'Screenshot' : 'Screenshots'}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold tracking-tight text-[#171717]">
                        {proj.title}
                      </h3>
                      <p className="text-xs text-[#777777] line-clamp-2 mt-1.5 leading-relaxed">
                        {proj.description}
                      </p>
                    </div>

                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-1.5 pt-2 border-t border-[#E7E7E4]">
                      {proj.techStack?.slice(0, 4).map((tech, idx) => (
                        <span
                          key={idx}
                          className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#F7F7F5] text-[#555555]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Card Actions Footer */}
                    <div className="flex items-center justify-between pt-3 border-t border-[#E7E7E4]">
                      <div className="flex items-center gap-1">
                        <button
                          onClick={() => onDuplicateProject(proj)}
                          className="p-1.5 rounded hover:bg-[#F7F7F5] text-[#777777] hover:text-[#171717]"
                          title="Duplicate Project"
                        >
                          <Copy className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => onDeleteProject(proj.id)}
                          className="p-1.5 rounded hover:bg-red-50 text-[#777777] hover:text-red-600"
                          title="Delete Project"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <button
                        onClick={() => onOpenProject(proj)}
                        className="px-3.5 py-1.5 bg-[#171717] text-white rounded text-xs font-mono font-semibold hover:bg-black transition-colors flex items-center gap-1.5"
                      >
                        <span>Open in Studio</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </main>

      {/* Minimal Footer */}
      <footer className="border-t border-[#E7E7E4] bg-white py-6 mt-16 text-center text-xs font-mono text-[#777777]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span>SHOWCASE STUDIO &bull; SWISS EDITORIAL ENGINE</span>
          <span>DEV PORTFOLIO ASSET SYSTEM &bull; LOCAL PERSISTENCE</span>
        </div>
      </footer>
    </div>
  );
};
