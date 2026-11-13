import React, { useState } from 'react';
import {
  LayoutTemplate,
  Palette,
  Type,
  FileText,
  Image as ImageIcon,
  Plus,
  Trash2,
  Upload,
  Camera,
  ChevronRight,
  MoveUp,
  MoveDown,
} from 'lucide-react';
import { TEMPLATES_CONFIG, BACKGROUND_PRESETS } from '../../data/initialProjects';

export const SidebarControls = ({
  project,
  settings,
  onUpdateProject,
  onUpdateSettings,
  onOpenCaptureModal,
}) => {
  const [activeTab, setActiveTab] = useState('templates'); // 'templates', 'styling', 'typography', 'content', 'screenshots'
  const [newTechTag, setNewTechTag] = useState('');

  const handleFileUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const newShot = {
        id: `shot-${Date.now()}`,
        name: file.name.replace(/\.[^/.]+$/, ''),
        url: event.target.result,
        viewport: 'Custom Upload',
        caption: 'Uploaded interface preview',
      };
      onUpdateProject({
        ...project,
        screenshots: [...project.screenshots, newShot],
      });
    };
    reader.readAsDataURL(file);
  };

  const handleRemoveScreenshot = (id) => {
    if (project.screenshots.length <= 1) {
      alert('You must have at least one screenshot in your showcase.');
      return;
    }
    onUpdateProject({
      ...project,
      screenshots: project.screenshots.filter((s) => s.id !== id),
    });
  };

  const handleMoveScreenshot = (idx, direction) => {
    const newIdx = idx + direction;
    if (newIdx < 0 || newIdx >= project.screenshots.length) return;
    const items = [...project.screenshots];
    const [moved] = items.splice(idx, 1);
    items.splice(newIdx, 0, moved);
    onUpdateProject({
      ...project,
      screenshots: items,
    });
  };

  const handleAddFeature = () => {
    onUpdateProject({
      ...project,
      features: [
        ...(project.features || []),
        { title: 'New Architecture Capability', description: 'Describe the engineering mechanism and performance impact.' },
      ],
    });
  };

  const handleUpdateFeature = (idx, key, val) => {
    const updated = [...(project.features || [])];
    updated[idx] = { ...updated[idx], [key]: val };
    onUpdateProject({ ...project, features: updated });
  };

  const handleRemoveFeature = (idx) => {
    const updated = (project.features || []).filter((_, i) => i !== idx);
    onUpdateProject({ ...project, features: updated });
  };

  const handleAddTechTag = (e) => {
    if (e.key === 'Enter' && newTechTag.trim()) {
      e.preventDefault();
      if (!project.techStack?.includes(newTechTag.trim())) {
        onUpdateProject({
          ...project,
          techStack: [...(project.techStack || []), newTechTag.trim()],
        });
      }
      setNewTechTag('');
    }
  };

  const handleRemoveTechTag = (tag) => {
    onUpdateProject({
      ...project,
      techStack: (project.techStack || []).filter((t) => t !== tag),
    });
  };

  return (
    <aside className="w-80 lg:w-96 border-l border-[#E7E7E4] bg-white flex flex-col h-full select-none">
      {/* Tab Navigation */}
      <div className="flex items-center border-b border-[#E7E7E4] px-2 bg-[#FBFBFA]">
        <button
          onClick={() => setActiveTab('templates')}
          className={`flex-1 py-3 text-xs font-mono uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors border-b-2 ${
            activeTab === 'templates'
              ? 'border-[#171717] font-bold text-[#171717] bg-white'
              : 'border-transparent text-[#777777] hover:text-[#171717]'
          }`}
          title="Templates"
        >
          <LayoutTemplate className="w-3.5 h-3.5" />
          <span>Layout</span>
        </button>

        <button
          onClick={() => setActiveTab('styling')}
          className={`flex-1 py-3 text-xs font-mono uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors border-b-2 ${
            activeTab === 'styling'
              ? 'border-[#171717] font-bold text-[#171717] bg-white'
              : 'border-transparent text-[#777777] hover:text-[#171717]'
          }`}
          title="Styling & Backgrounds"
        >
          <Palette className="w-3.5 h-3.5" />
          <span>Style</span>
        </button>

        <button
          onClick={() => setActiveTab('typography')}
          className={`flex-1 py-3 text-xs font-mono uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors border-b-2 ${
            activeTab === 'typography'
              ? 'border-[#171717] font-bold text-[#171717] bg-white'
              : 'border-transparent text-[#777777] hover:text-[#171717]'
          }`}
          title="Typography"
        >
          <Type className="w-3.5 h-3.5" />
          <span>Type</span>
        </button>

        <button
          onClick={() => setActiveTab('content')}
          className={`flex-1 py-3 text-xs font-mono uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors border-b-2 ${
            activeTab === 'content'
              ? 'border-[#171717] font-bold text-[#171717] bg-white'
              : 'border-transparent text-[#777777] hover:text-[#171717]'
          }`}
          title="Content & Metadata"
        >
          <FileText className="w-3.5 h-3.5" />
          <span>Copy</span>
        </button>

        <button
          onClick={() => setActiveTab('screenshots')}
          className={`flex-1 py-3 text-xs font-mono uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors border-b-2 ${
            activeTab === 'screenshots'
              ? 'border-[#171717] font-bold text-[#171717] bg-white'
              : 'border-transparent text-[#777777] hover:text-[#171717]'
          }`}
          title="Screenshots"
        >
          <ImageIcon className="w-3.5 h-3.5" />
          <span>Shots</span>
        </button>
      </div>

      {/* Tab Panels */}
      <div className="flex-1 overflow-y-auto p-5 space-y-6 text-sm">
        {/* 1. TEMPLATES TAB */}
        {activeTab === 'templates' && (
          <div className="space-y-4">
            <div>
              <h3 className="text-xs font-mono uppercase tracking-widest text-[#777777] font-semibold mb-1">
                Showcase Composition
              </h3>
              <p className="text-xs text-[#777777]">
                Swiss modernist editorial templates tailored for real software interfaces.
              </p>
            </div>

            <div className="space-y-2.5">
              {TEMPLATES_CONFIG.map((tmpl) => (
                <div
                  key={tmpl.id}
                  onClick={() => onUpdateProject({ ...project, selectedTemplate: tmpl.id })}
                  className={`p-3.5 rounded-lg border transition-all cursor-pointer ${
                    project.selectedTemplate === tmpl.id
                      ? 'border-[#171717] bg-[#F7F7F5] ring-1 ring-[#171717]'
                      : 'border-[#E7E7E4] hover:border-[#BBBBB7] bg-white'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-semibold text-xs tracking-tight text-[#171717]">
                      {tmpl.name}
                    </span>
                    <span className="text-[10px] font-mono uppercase px-1.5 py-0.5 rounded bg-black/5 text-[#555555]">
                      {tmpl.tag}
                    </span>
                  </div>
                  <p className="text-[11px] text-[#777777] leading-snug">
                    {tmpl.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Canvas Aspect Ratio */}
            <div className="pt-4 border-t border-[#E7E7E4]">
              <label className="block text-xs font-mono uppercase tracking-widest text-[#777777] font-semibold mb-2">
                Canvas Aspect Ratio
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: '16:9', label: '16:9 Landscape' },
                  { id: '4:3', label: '4:3 Standard' },
                  { id: '1:1', label: '1:1 Square' },
                ].map((aspect) => (
                  <button
                    key={aspect.id}
                    onClick={() => onUpdateSettings({ ...settings, aspectRatio: aspect.id })}
                    className={`py-2 px-1 text-center text-xs font-mono rounded border transition-colors ${
                      settings.aspectRatio === aspect.id
                        ? 'border-[#171717] bg-[#171717] text-white font-medium'
                        : 'border-[#E7E7E4] hover:bg-[#F7F7F5] text-[#555555]'
                    }`}
                  >
                    {aspect.id}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* 2. STYLING TAB */}
        {activeTab === 'styling' && (
          <div className="space-y-5">
            {/* Background Presets */}
            <div>
              <h3 className="text-xs font-mono uppercase tracking-widest text-[#777777] font-semibold mb-2">
                Background Palette
              </h3>
              <div className="grid grid-cols-3 gap-2">
                {BACKGROUND_PRESETS.map((bg) => (
                  <button
                    key={bg.id}
                    onClick={() => onUpdateSettings({ ...settings, background: bg.hex })}
                    className={`flex items-center gap-2 p-2 rounded border text-left text-xs transition-all ${
                      settings.background === bg.hex
                        ? 'border-[#171717] ring-1 ring-[#171717] font-medium'
                        : 'border-[#E7E7E4] hover:border-[#BBBBB7]'
                    }`}
                  >
                    <span
                      className="w-4 h-4 rounded-full border border-black/10 shrink-0"
                      style={{ backgroundColor: bg.hex }}
                    />
                    <span className="truncate text-[11px]">{bg.label}</span>
                  </button>
                ))}
              </div>

              {/* Custom Hex Color Picker */}
              <div className="mt-3 flex items-center gap-2">
                <input
                  type="color"
                  value={settings.background}
                  onChange={(e) => onUpdateSettings({ ...settings, background: e.target.value })}
                  className="w-8 h-8 rounded border border-[#E7E7E4] cursor-pointer"
                />
                <input
                  type="text"
                  value={settings.background}
                  onChange={(e) => onUpdateSettings({ ...settings, background: e.target.value })}
                  className="flex-1 px-3 py-1.5 text-xs font-mono rounded border border-[#E7E7E4] uppercase"
                  placeholder="#F7F7F5"
                />
              </div>
            </div>

            {/* Screenshot Corner Radius */}
            <div className="pt-4 border-t border-[#E7E7E4]">
              <label className="block text-xs font-mono uppercase tracking-widest text-[#777777] font-semibold mb-2">
                Corner Radius
              </label>
              <div className="grid grid-cols-4 gap-2">
                {['0px', '8px', '12px', '16px'].map((r) => (
                  <button
                    key={r}
                    onClick={() => onUpdateSettings({ ...settings, borderRadius: r })}
                    className={`py-1.5 text-xs font-mono rounded border text-center transition-colors ${
                      settings.borderRadius === r
                        ? 'border-[#171717] bg-[#171717] text-white font-medium'
                        : 'border-[#E7E7E4] hover:bg-[#F7F7F5] text-[#555555]'
                    }`}
                  >
                    {r}
                  </button>
                ))}
              </div>
            </div>

            {/* Shadows */}
            <div className="pt-4 border-t border-[#E7E7E4]">
              <label className="block text-xs font-mono uppercase tracking-widest text-[#777777] font-semibold mb-2">
                Elevation Shadow
              </label>
              <div className="grid grid-cols-4 gap-2">
                {[
                  { id: 'none', label: 'None' },
                  { id: 'subtle', label: 'Subtle' },
                  { id: 'editorial', label: 'Editorial' },
                  { id: 'elevated', label: 'Elevated' },
                ].map((s) => (
                  <button
                    key={s.id}
                    onClick={() => onUpdateSettings({ ...settings, shadow: s.id })}
                    className={`py-1.5 text-xs font-mono rounded border text-center transition-colors ${
                      settings.shadow === s.id
                        ? 'border-[#171717] bg-[#171717] text-white font-medium'
                        : 'border-[#E7E7E4] hover:bg-[#F7F7F5] text-[#555555]'
                    }`}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Spacing & Padding */}
            <div className="pt-4 border-t border-[#E7E7E4]">
              <label className="block text-xs font-mono uppercase tracking-widest text-[#777777] font-semibold mb-2">
                Artboard Spacing
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'tight', label: 'Tight' },
                  { id: 'balanced', label: 'Balanced' },
                  { id: 'generous', label: 'Generous' },
                ].map((sp) => (
                  <button
                    key={sp.id}
                    onClick={() => onUpdateSettings({ ...settings, spacing: sp.id })}
                    className={`py-1.5 text-xs font-mono rounded border text-center transition-colors ${
                      settings.spacing === sp.id
                        ? 'border-[#171717] bg-[#171717] text-white font-medium'
                        : 'border-[#E7E7E4] hover:bg-[#F7F7F5] text-[#555555]'
                    }`}
                  >
                    {sp.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Screenshot Borders */}
            <div className="pt-4 border-t border-[#E7E7E4]">
              <label className="block text-xs font-mono uppercase tracking-widest text-[#777777] font-semibold mb-2">
                Border Hairline
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'none', label: 'None' },
                  { id: 'subtle', label: 'Subtle Grey' },
                  { id: 'dark', label: 'Dark Stroke' },
                ].map((b) => (
                  <button
                    key={b.id}
                    onClick={() => onUpdateSettings({ ...settings, borderStyle: b.id })}
                    className={`py-1.5 text-xs font-mono rounded border text-center transition-colors ${
                      settings.borderStyle === b.id
                        ? 'border-[#171717] bg-[#171717] text-white font-medium'
                        : 'border-[#E7E7E4] hover:bg-[#F7F7F5] text-[#555555]'
                    }`}
                  >
                    {b.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* 3. TYPOGRAPHY TAB */}
        {activeTab === 'typography' && (
          <div className="space-y-5">
            <div>
              <label className="block text-xs font-mono uppercase tracking-widest text-[#777777] font-semibold mb-2">
                Typography System
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'sans', label: 'Inter / Swiss' },
                  { id: 'serif', label: 'Editorial Serif' },
                  { id: 'mono', label: 'Technical Mono' },
                ].map((f) => (
                  <button
                    key={f.id}
                    onClick={() => onUpdateSettings({ ...settings, fontFamily: f.id })}
                    className={`py-2 px-1 text-center text-xs rounded border transition-colors ${
                      settings.fontFamily === f.id
                        ? 'border-[#171717] bg-[#171717] text-white font-medium'
                        : 'border-[#E7E7E4] hover:bg-[#F7F7F5] text-[#555555]'
                    }`}
                  >
                    {f.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Display Elements Toggle */}
            <div className="pt-4 border-t border-[#E7E7E4] space-y-3">
              <label className="block text-xs font-mono uppercase tracking-widest text-[#777777] font-semibold">
                Elements Visibility
              </label>

              {[
                { key: 'showMetadata', label: 'Show Metadata Bar (Year / Client / Role)' },
                { key: 'showTechStack', label: 'Show Technology Stack Badges' },
                { key: 'showFeatures', label: 'Show Key Feature Callouts' },
              ].map((toggle) => (
                <label key={toggle.key} className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={settings[toggle.key]}
                    onChange={(e) => onUpdateSettings({ ...settings, [toggle.key]: e.target.checked })}
                    className="w-4 h-4 rounded text-[#171717] border-[#E7E7E4] focus:ring-black accent-[#171717]"
                  />
                  <span className="text-xs text-[#333333]">{toggle.label}</span>
                </label>
              ))}
            </div>
          </div>
        )}

        {/* 4. CONTENT & METADATA TAB */}
        {activeTab === 'content' && (
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-mono uppercase tracking-widest text-[#777777] font-semibold mb-1">
                Project Title
              </label>
              <input
                type="text"
                value={project.title}
                onChange={(e) => onUpdateProject({ ...project, title: e.target.value })}
                className="w-full px-3 py-2 text-sm rounded border border-[#E7E7E4] focus:border-[#171717] outline-none"
                placeholder="e.g. Docvyn"
              />
            </div>

            <div>
              <label className="block text-xs font-mono uppercase tracking-widest text-[#777777] font-semibold mb-1">
                Subtitle / Category
              </label>
              <input
                type="text"
                value={project.category}
                onChange={(e) => onUpdateProject({ ...project, category: e.target.value })}
                className="w-full px-3 py-2 text-sm rounded border border-[#E7E7E4] focus:border-[#171717] outline-none"
                placeholder="e.g. AI / LegalTech SaaS"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-mono uppercase tracking-widest text-[#777777] font-semibold mb-1">
                  Year
                </label>
                <input
                  type="text"
                  value={project.year || '2026'}
                  onChange={(e) => onUpdateProject({ ...project, year: e.target.value })}
                  className="w-full px-3 py-2 text-sm rounded border border-[#E7E7E4] focus:border-[#171717] outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-widest text-[#777777] font-semibold mb-1">
                  Role
                </label>
                <input
                  type="text"
                  value={project.role || 'Full Stack Engineer'}
                  onChange={(e) => onUpdateProject({ ...project, role: e.target.value })}
                  className="w-full px-3 py-2 text-sm rounded border border-[#E7E7E4] focus:border-[#171717] outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono uppercase tracking-widest text-[#777777] font-semibold mb-1">
                Project URL
              </label>
              <input
                type="text"
                value={project.url || ''}
                onChange={(e) => onUpdateProject({ ...project, url: e.target.value })}
                className="w-full px-3 py-2 text-sm font-mono text-xs rounded border border-[#E7E7E4] focus:border-[#171717] outline-none"
                placeholder="https://..."
              />
            </div>

            <div>
              <label className="block text-xs font-mono uppercase tracking-widest text-[#777777] font-semibold mb-1">
                Summary Description
              </label>
              <textarea
                rows={3}
                value={project.description}
                onChange={(e) => onUpdateProject({ ...project, description: e.target.value })}
                className="w-full px-3 py-2 text-xs leading-relaxed rounded border border-[#E7E7E4] focus:border-[#171717] outline-none"
              />
            </div>

            {/* Tech Stack Tags */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-widest text-[#777777] font-semibold mb-1">
                Technologies
              </label>
              <div className="flex flex-wrap gap-1.5 mb-2">
                {project.techStack?.map((t, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1 text-[11px] font-mono px-2 py-0.5 rounded bg-[#F0F0EB] text-[#171717]"
                  >
                    <span>{t}</span>
                    <button
                      onClick={() => handleRemoveTechTag(t)}
                      className="hover:text-red-500 text-xs ml-0.5"
                    >
                      &times;
                    </button>
                  </span>
                ))}
              </div>
              <input
                type="text"
                value={newTechTag}
                onChange={(e) => setNewTechTag(e.target.value)}
                onKeyDown={handleAddTechTag}
                placeholder="Type tech and press Enter..."
                className="w-full px-3 py-1.5 text-xs font-mono rounded border border-[#E7E7E4] focus:border-[#171717] outline-none"
              />
            </div>

            {/* Architecture Highlights / Features */}
            <div className="pt-3 border-t border-[#E7E7E4]">
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-mono uppercase tracking-widest text-[#777777] font-semibold">
                  Feature Highlights
                </label>
                <button
                  onClick={handleAddFeature}
                  className="text-xs font-mono text-[#171717] hover:underline flex items-center gap-1 font-semibold"
                >
                  <Plus className="w-3 h-3" /> Add
                </button>
              </div>

              <div className="space-y-3">
                {project.features?.map((f, i) => (
                  <div key={i} className="p-2.5 rounded border border-[#E7E7E4] bg-[#FBFBFA] space-y-1.5 relative group">
                    <button
                      onClick={() => handleRemoveFeature(i)}
                      className="absolute top-2 right-2 text-[#999999] hover:text-red-500"
                      title="Remove Feature"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                    <input
                      type="text"
                      value={f.title}
                      onChange={(e) => handleUpdateFeature(i, 'title', e.target.value)}
                      className="w-[85%] px-2 py-1 text-xs font-bold font-mono rounded border border-[#E7E7E4] bg-white"
                      placeholder="Feature Title"
                    />
                    <textarea
                      rows={2}
                      value={f.description}
                      onChange={(e) => handleUpdateFeature(i, 'description', e.target.value)}
                      className="w-full px-2 py-1 text-[11px] leading-relaxed rounded border border-[#E7E7E4] bg-white"
                      placeholder="Brief capability description..."
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* 5. SCREENSHOTS TAB */}
        {activeTab === 'screenshots' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xs font-mono uppercase tracking-widest text-[#777777] font-semibold mb-0.5">
                  Screenshots ({project.screenshots.length})
                </h3>
                <p className="text-[11px] text-[#777777]">
                  Slot 1 is dominant primary hero.
                </p>
              </div>
              <button
                onClick={onOpenCaptureModal}
                className="px-2.5 py-1.5 text-xs font-mono bg-[#171717] text-white rounded flex items-center gap-1.5 hover:bg-black transition-colors"
              >
                <Camera className="w-3 h-3" />
                <span>Capture</span>
              </button>
            </div>

            {/* Upload Custom File button */}
            <label className="block w-full border border-dashed border-[#CCCCCC] rounded-lg p-3 text-center cursor-pointer hover:border-[#171717] hover:bg-[#F9F9F8] transition-colors">
              <Upload className="w-4 h-4 mx-auto mb-1 text-[#777777]" />
              <span className="text-xs font-medium text-[#333333]">Upload screenshot image</span>
              <input
                type="file"
                accept="image/*"
                onChange={handleFileUpload}
                className="hidden"
              />
            </label>

            {/* Screenshot List with Reordering */}
            <div className="space-y-2.5 pt-2">
              {project.screenshots.map((shot, idx) => (
                <div
                  key={shot.id}
                  className="p-2.5 rounded-lg border border-[#E7E7E4] bg-[#FBFBFA] flex items-center gap-3"
                >
                  <img
                    src={shot.url}
                    alt={shot.name}
                    className="w-16 h-12 rounded object-cover border border-black/10 shrink-0 bg-[#121212]"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-medium text-[#171717] truncate">
                      {shot.name || `Screenshot ${idx + 1}`}
                    </div>
                    <div className="text-[10px] font-mono text-[#777777]">
                      Slot 0{idx + 1} &bull; {shot.viewport || 'Desktop'}
                    </div>
                  </div>

                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => handleMoveScreenshot(idx, -1)}
                      disabled={idx === 0}
                      className="p-1 text-[#777777] hover:text-[#171717] disabled:opacity-30"
                      title="Move Up"
                    >
                      <MoveUp className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => handleMoveScreenshot(idx, 1)}
                      disabled={idx === project.screenshots.length - 1}
                      className="p-1 text-[#777777] hover:text-[#171717] disabled:opacity-30"
                      title="Move Down"
                    >
                      <MoveDown className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => handleRemoveScreenshot(shot.id)}
                      className="p-1 text-[#777777] hover:text-red-500"
                      title="Delete"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </aside>
  );
};
