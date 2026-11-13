import React, { useState, useEffect } from 'react';
import { INITIAL_PROJECTS } from './data/initialProjects';
import { Dashboard } from './components/Dashboard';
import { VisualEditor } from './components/Editor/VisualEditor';
import { NewProjectModal } from './components/NewProjectModal';

export default function App() {
  const [projects, setProjects] = useState(() => {
    try {
      const saved = localStorage.getItem('showcase_studio_projects');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch (e) {
      console.error('Failed to load projects from localStorage', e);
    }
    return INITIAL_PROJECTS;
  });

  const [exportHistory, setExportHistory] = useState(() => {
    try {
      const saved = localStorage.getItem('showcase_studio_exports');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error('Failed to load export history', e);
    }
    return [];
  });

  const [currentView, setCurrentView] = useState('dashboard'); // 'dashboard' | 'editor'
  const [activeProjectId, setActiveProjectId] = useState(null);
  const [newProjectModalOpen, setNewProjectModalOpen] = useState(false);

  // Sync projects to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('showcase_studio_projects', JSON.stringify(projects));
    } catch (e) {
      console.error('Failed to save projects', e);
    }
  }, [projects]);

  // Sync exports to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('showcase_studio_exports', JSON.stringify(exportHistory));
    } catch (e) {
      console.error('Failed to save export history', e);
    }
  }, [exportHistory]);

  const activeProject = projects.find((p) => p.id === activeProjectId) || projects[0];

  const handleOpenProject = (idOrProj) => {
    const id = typeof idOrProj === 'object' && idOrProj !== null ? idOrProj.id : idOrProj;
    setActiveProjectId(id);
    setCurrentView('editor');
  };

  const handleCreateProject = (newProject) => {
    setProjects((prev) => [newProject, ...prev]);
    setActiveProjectId(newProject.id);
    setCurrentView('editor');
  };

  const handleUpdateProject = (updatedProject) => {
    setProjects((prev) =>
      prev.map((p) => (p.id === updatedProject.id ? updatedProject : p))
    );
  };

  const handleDuplicateProject = (idOrProj) => {
    const id = typeof idOrProj === 'object' && idOrProj !== null ? idOrProj.id : idOrProj;
    const original = projects.find((p) => p.id === id);
    if (!original) return;
    const duplicated = {
      ...original,
      id: `proj-${Date.now()}`,
      title: `${original.title} (Copy)`,
      screenshots: original.screenshots.map((s, idx) => ({
        ...s,
        id: `shot-${Date.now()}-${idx}`,
      })),
    };
    setProjects((prev) => [duplicated, ...prev]);
  };

  const handleDeleteProject = (id) => {
    if (projects.length <= 1) {
      alert('You must keep at least one project in Showcase Studio.');
      return;
    }
    if (confirm('Are you sure you want to delete this project?')) {
      setProjects((prev) => prev.filter((p) => p.id !== id));
      if (activeProjectId === id) {
        setCurrentView('dashboard');
        setActiveProjectId(null);
      }
    }
  };

  const handleRecordExport = (record) => {
    setExportHistory((prev) => [record, ...prev].slice(0, 30));
  };

  return (
    <div className="min-h-screen bg-[#F7F7F5] text-[#171717] font-sans antialiased selection:bg-[#171717] selection:text-white">
      {currentView === 'dashboard' && (
        <Dashboard
          projects={projects}
          onOpenProject={handleOpenProject}
          onCreateProject={() => setNewProjectModalOpen(true)}
          onDuplicateProject={handleDuplicateProject}
          onDeleteProject={handleDeleteProject}
          exportHistory={exportHistory}
        />
      )}

      {currentView === 'editor' && activeProject && (
        <VisualEditor
          key={activeProject.id}
          project={activeProject}
          initialProject={activeProject}
          onUpdateProject={handleUpdateProject}
          onSaveProject={handleUpdateProject}
          onBackToDashboard={() => setCurrentView('dashboard')}
          onRecordExport={handleRecordExport}
        />
      )}

      <NewProjectModal
        isOpen={newProjectModalOpen}
        onClose={() => setNewProjectModalOpen(false)}
        onCreateProject={handleCreateProject}
      />
    </div>
  );
}
