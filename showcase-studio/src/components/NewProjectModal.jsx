import React, { useState } from 'react';
import { X, Plus, Globe, Sparkles } from 'lucide-react';
import { TEMPLATES_CONFIG } from '../data/initialProjects';

export const NewProjectModal = ({ isOpen, onClose, onCreateProject }) => {
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [selectedTemplate, setSelectedTemplate] = useState('template-a');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    const newProject = {
      id: `proj-${Date.now()}`,
      title: title.trim(),
      subtitle: `${category || 'Web Application'} Case Study`,
      category: category.trim() || 'Software Engineering',
      url: url.trim(),
      year: new Date().getFullYear().toString(),
      client: 'Production Software',
      role: 'Full Stack Engineer',
      description:
        description.trim() ||
        'Scalable web application engineered with modular cloud architecture, high-performance database indexing, and responsive interfaces.',
      features: [
        { title: 'Modular Architecture', description: 'Engineered for resilience, high availability, and rapid deployment cycles.' },
        { title: 'Sub-Second Response', description: 'Optimized caching and queries delivering consistent low-latency throughput.' },
      ],
      techStack: ['React', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'Docker'],
      screenshots: [
        {
          id: `shot-${Date.now()}-1`,
          name: `${title} Primary Interface`,
          url: '/docvyn.png', // Default high-res fallback
          viewport: 'Desktop 1440x1000',
          caption: 'Primary interface dashboard view',
        },
      ],
      selectedTemplate,
      canvasSettings: {
        aspectRatio: '16:9',
        width: 1920,
        height: 1080,
        background: '#F7F7F5',
        fontFamily: 'sans',
        titleSize: 'large',
        borderRadius: '12px',
        shadow: 'editorial',
        borderStyle: 'subtle',
        spacing: 'generous',
        showMetadata: true,
        showTechStack: true,
        showFeatures: true,
      },
      updatedAt: new Date().toISOString(),
    };

    onCreateProject(newProject);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl border border-[#E7E7E4] max-w-lg w-full overflow-hidden flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#E7E7E4] bg-[#FBFBFA]">
          <div className="flex items-center gap-2.5">
            <div className="p-1.5 rounded bg-[#171717] text-white">
              <Plus className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-sm font-bold tracking-tight text-[#171717]">
                Create New Project Showcase
              </h2>
              <p className="text-[11px] text-[#777777]">
                Configure project metadata and choose a Swiss presentation template.
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded hover:bg-[#EFEFEA] text-[#777777] hover:text-[#171717]"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-xs font-mono uppercase tracking-widest text-[#777777] font-semibold mb-1">
              Project Title *
            </label>
            <input
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. Docvyn or FlowForge AI"
              className="w-full px-3 py-2 text-sm rounded border border-[#E7E7E4] focus:border-[#171717] outline-none"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-mono uppercase tracking-widest text-[#777777] font-semibold mb-1">
                Category
              </label>
              <input
                type="text"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                placeholder="e.g. AI / SaaS"
                className="w-full px-3 py-2 text-sm rounded border border-[#E7E7E4] focus:border-[#171717] outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-mono uppercase tracking-widest text-[#777777] font-semibold mb-1">
                Live URL
              </label>
              <div className="relative">
                <Globe className="w-3.5 h-3.5 absolute left-2.5 top-1/2 -translate-y-1/2 text-[#999999]" />
                <input
                  type="text"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  placeholder="https://..."
                  className="w-full pl-8 pr-3 py-2 text-xs font-mono rounded border border-[#E7E7E4] focus:border-[#171717] outline-none"
                />
              </div>
            </div>
          </div>

          <div>
            <label className="block text-xs font-mono uppercase tracking-widest text-[#777777] font-semibold mb-1">
              Summary Description
            </label>
            <textarea
              rows={2}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Brief summary of the engineering architecture and problem solved..."
              className="w-full px-3 py-2 text-xs leading-relaxed rounded border border-[#E7E7E4] focus:border-[#171717] outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-mono uppercase tracking-widest text-[#777777] font-semibold mb-1.5">
              Initial Showcase Template
            </label>
            <div className="grid grid-cols-2 gap-2">
              {TEMPLATES_CONFIG.slice(0, 4).map((t) => (
                <button
                  type="button"
                  key={t.id}
                  onClick={() => setSelectedTemplate(t.id)}
                  className={`p-2.5 rounded border text-left transition-all ${
                    selectedTemplate === t.id
                      ? 'border-[#171717] bg-[#F7F7F5] ring-1 ring-[#171717]'
                      : 'border-[#E7E7E4] hover:bg-[#FAF9F7]'
                  }`}
                >
                  <div className="text-xs font-bold text-[#171717]">{t.name}</div>
                  <div className="text-[10px] text-[#777777] truncate">{t.description}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="pt-4 flex items-center justify-end gap-3 border-t border-[#E7E7E4]">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-mono text-[#777777] hover:text-[#171717]"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2 bg-[#171717] text-white text-xs font-mono font-semibold rounded hover:bg-black transition-colors flex items-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Create Project</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
