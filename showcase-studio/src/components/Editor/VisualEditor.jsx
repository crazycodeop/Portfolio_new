import React, { useState, useRef, useCallback } from 'react';
import {
  ArrowLeft,
  Download,
  Camera,
  ZoomIn,
  ZoomOut,
  Maximize2,
  Grid,
  Check,
} from 'lucide-react';
import { Canvas } from './Canvas';
import { SidebarControls } from './SidebarControls';
import { HistoryControls } from './HistoryControls';
import { CaptureModal } from '../CaptureModal';
import { ExportModal } from '../ExportModal';

export const VisualEditor = ({
  initialProject,
  project: propProject,
  onSaveProject,
  onUpdateProject,
  onBackToDashboard,
  onRecordExport,
}) => {
  const currentInitial = propProject || initialProject || {};
  const saveHandler = onUpdateProject || onSaveProject;

  // Current active project & canvas settings state
  const [project, setProject] = useState(currentInitial);
  const [settings, setSettings] = useState(
    currentInitial.canvasSettings || {
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
    }
  );

  // Undo / Redo History Stack
  const [history, setHistory] = useState({
    past: [],
    future: [],
  });

  // Editor View Controls
  const [zoom, setZoom] = useState(0.48); // scaled to fit editor screen nicely
  const [showGrid, setShowGrid] = useState(false);
  const [savedFeedback, setSavedFeedback] = useState(false);

  // Modals
  const [isCaptureOpen, setIsCaptureOpen] = useState(false);
  const [isExportOpen, setIsExportOpen] = useState(false);

  // Artboard Reference for html-to-image
  const canvasRef = useRef(null);

  // Record state changes into Undo Stack
  const pushState = useCallback(
    (newProject, newSettings) => {
      setHistory((prev) => ({
        past: [
          ...prev.past.slice(-25), // keep last 25 states
          { project: JSON.parse(JSON.stringify(project)), settings: JSON.parse(JSON.stringify(settings)) },
        ],
        future: [],
      }));
      setProject(newProject);
      setSettings(newSettings);

      // Auto-persist to parent and local storage
      if (saveHandler) {
        saveHandler({
          ...newProject,
          canvasSettings: newSettings,
          updatedAt: new Date().toISOString(),
        });
      }

      setSavedFeedback(true);
      setTimeout(() => setSavedFeedback(false), 1200);
    },
    [project, settings, saveHandler]
  );

  const handleUpdateProject = (updatedProject) => {
    pushState(updatedProject, settings);
  };

  const handleUpdateSettings = (updatedSettings) => {
    pushState(project, updatedSettings);
  };

  const handleUndo = () => {
    if (history.past.length === 0) return;
    const previous = history.past[history.past.length - 1];
    const newPast = history.past.slice(0, -1);

    setHistory({
      past: newPast,
      future: [{ project: JSON.parse(JSON.stringify(project)), settings: JSON.parse(JSON.stringify(settings)) }, ...history.future],
    });

    setProject(previous.project);
    setSettings(previous.settings);
    if (saveHandler) {
      saveHandler({ ...previous.project, canvasSettings: previous.settings });
    }
  };

  const handleRedo = () => {
    if (history.future.length === 0) return;
    const next = history.future[0];
    const newFuture = history.future.slice(1);

    setHistory({
      past: [...history.past, { project: JSON.parse(JSON.stringify(project)), settings: JSON.parse(JSON.stringify(settings)) }],
      future: newFuture,
    });

    setProject(next.project);
    setSettings(next.settings);
    if (saveHandler) {
      saveHandler({ ...next.project, canvasSettings: next.settings });
    }
  };

  const handleAddCapturedScreenshot = (shot) => {
    handleUpdateProject({
      ...project,
      screenshots: [...project.screenshots, shot],
    });
  };

  return (
    <div className="flex flex-col h-screen w-screen bg-[#F7F7F5] overflow-hidden">
      {/* Top Application Bar */}
      <header className="h-14 border-b border-[#E7E7E4] bg-white flex items-center justify-between px-5 select-none z-20">
        <div className="flex items-center gap-4">
          <button
            onClick={onBackToDashboard}
            className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#555555] hover:text-[#171717] transition-colors py-1 px-2 rounded hover:bg-[#F7F7F5]"
            title="Return to Projects Dashboard"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Dashboard</span>
          </button>

          <div className="w-[1px] h-4 bg-[#E7E7E4]" />

          <div className="flex items-center gap-2">
            <span className="font-bold text-sm tracking-tight text-[#171717]">
              {project.title}
            </span>
            <span className="text-[11px] font-mono uppercase px-2 py-0.5 rounded bg-[#F0F0EB] text-[#555555]">
              {project.selectedTemplate.toUpperCase()}
            </span>
            {savedFeedback && (
              <span className="text-[11px] font-mono text-emerald-600 flex items-center gap-1">
                <Check className="w-3 h-3" /> Saved
              </span>
            )}
          </div>
        </div>

        {/* Center Canvas View Controls (Zoom, Grid, History) */}
        <div className="flex items-center gap-3">
          <HistoryControls
            canUndo={history.past.length > 0}
            canRedo={history.future.length > 0}
            onUndo={handleUndo}
            onRedo={handleRedo}
          />

          <div className="flex items-center gap-1 bg-white border border-[#E7E7E4] rounded-md p-1 shadow-subtle">
            <button
              onClick={() => setZoom((z) => Math.max(0.25, Number((z - 0.05).toFixed(2))))}
              className="p-1.5 rounded hover:bg-[#F7F7F5] text-[#555555] hover:text-[#171717]"
              title="Zoom Out"
            >
              <ZoomOut className="w-3.5 h-3.5" />
            </button>
            <span className="text-[11px] font-mono text-[#555555] px-1 min-w-[3rem] text-center">
              {Math.round(zoom * 100)}%
            </span>
            <button
              onClick={() => setZoom((z) => Math.min(1.2, Number((z + 0.05).toFixed(2))))}
              className="p-1.5 rounded hover:bg-[#F7F7F5] text-[#555555] hover:text-[#171717]"
              title="Zoom In"
            >
              <ZoomIn className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setZoom(0.48)}
              className="p-1.5 rounded hover:bg-[#F7F7F5] text-[#555555] hover:text-[#171717]"
              title="Fit to Screen"
            >
              <Maximize2 className="w-3.5 h-3.5" />
            </button>
          </div>

          <button
            onClick={() => setShowGrid((g) => !g)}
            className={`p-2 rounded-md border transition-colors ${
              showGrid
                ? 'border-[#171717] bg-[#171717] text-white'
                : 'border-[#E7E7E4] bg-white text-[#555555] hover:text-[#171717]'
            }`}
            title="Toggle Swiss Typographic Grid"
          >
            <Grid className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Right Actions: Capture & Export */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsCaptureOpen(true)}
            className="px-3 py-1.5 rounded-md border border-[#E7E7E4] bg-white text-xs font-mono font-medium text-[#171717] hover:bg-[#F7F7F5] transition-colors flex items-center gap-1.5 shadow-subtle"
          >
            <Camera className="w-3.5 h-3.5" />
            <span>Playwright Capture</span>
          </button>

          <button
            onClick={() => setIsExportOpen(true)}
            className="px-4 py-1.5 rounded-md bg-[#171717] text-white text-xs font-mono font-bold uppercase tracking-wider hover:bg-black transition-colors flex items-center gap-2 shadow-subtle"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Export Image</span>
          </button>
        </div>
      </header>

      {/* Main Workspace Body */}
      <div className="flex-1 flex overflow-hidden">
        {/* Canvas Area */}
        <Canvas
          project={project}
          settings={settings}
          canvasRef={canvasRef}
          zoom={zoom}
          showGrid={showGrid}
        />

        {/* Right Inspector Sidebar */}
        <SidebarControls
          project={project}
          settings={settings}
          onUpdateProject={handleUpdateProject}
          onUpdateSettings={handleUpdateSettings}
          onOpenCaptureModal={() => setIsCaptureOpen(true)}
        />
      </div>

      {/* Playwright Screenshot Capture Modal */}
      <CaptureModal
        isOpen={isCaptureOpen}
        onClose={() => setIsCaptureOpen(false)}
        defaultUrl={project.url}
        onAddScreenshot={handleAddCapturedScreenshot}
      />

      {/* High-Resolution PNG Export Modal */}
      <ExportModal
        isOpen={isExportOpen}
        onClose={() => setIsExportOpen(false)}
        canvasRef={canvasRef}
        project={project}
        settings={settings}
        onRecordExport={onRecordExport}
      />
    </div>
  );
};
