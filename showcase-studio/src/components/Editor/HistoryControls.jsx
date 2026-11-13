import React, { useEffect } from 'react';
import { Undo2, Redo2 } from 'lucide-react';

export const HistoryControls = ({ canUndo, canRedo, onUndo, onRedo }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Ctrl+Z / Cmd+Z for Undo
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'z' && !e.shiftKey) {
        e.preventDefault();
        if (canUndo) onUndo();
      }
      // Ctrl+Y / Cmd+Y or Ctrl+Shift+Z for Redo
      if (
        ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'y') ||
        ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'z' && e.shiftKey)
      ) {
        e.preventDefault();
        if (canRedo) onRedo();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [canUndo, canRedo, onUndo, onRedo]);

  return (
    <div className="flex items-center gap-1 bg-white border border-[#E7E7E4] rounded-md p-1 shadow-subtle">
      <button
        onClick={onUndo}
        disabled={!canUndo}
        className="p-1.5 rounded hover:bg-[#F7F7F5] text-[#555555] hover:text-[#171717] disabled:opacity-30 disabled:hover:bg-transparent transition-colors"
        title="Undo (Ctrl+Z)"
      >
        <Undo2 className="w-4 h-4" />
      </button>
      <div className="w-[1px] h-3.5 bg-[#E7E7E4]" />
      <button
        onClick={onRedo}
        disabled={!canRedo}
        className="p-1.5 rounded hover:bg-[#F7F7F5] text-[#555555] hover:text-[#171717] disabled:opacity-30 disabled:hover:bg-transparent transition-colors"
        title="Redo (Ctrl+Y)"
      >
        <Redo2 className="w-4 h-4" />
      </button>
    </div>
  );
};
