import React, { useState } from 'react';
import { toPng, toBlob } from 'html-to-image';
import { X, Download, Copy, Check, Sparkles, Loader2, Image as ImageIcon } from 'lucide-react';

export const ExportModal = ({
  isOpen,
  onClose,
  canvasRef,
  project,
  settings,
  onRecordExport,
}) => {
  const [exportScale, setExportScale] = useState(2); // 1 = 1x (1920x1080), 2 = 2x (3840x2160 Ultra HD)
  const [isExporting, setIsExporting] = useState(false);
  const [exportedUrl, setExportedUrl] = useState(null);
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState(null);

  if (!isOpen) return null;

  const handleGenerateExport = async () => {
    if (!canvasRef.current) return;

    setIsExporting(true);
    setError(null);
    setExportedUrl(null);

    try {
      // Force web fonts ready check
      if (document.fonts) {
        await document.fonts.ready;
      }

      const node = canvasRef.current;

      const dataUrl = await toPng(node, {
        cacheBust: true,
        pixelRatio: exportScale,
        quality: 1,
        style: {
          transform: 'none',
          transformOrigin: 'top left',
        },
      });

      setExportedUrl(dataUrl);

      // Record to export history
      onRecordExport({
        id: `export-${Date.now()}`,
        projectId: project.id,
        projectTitle: project.title,
        template: project.selectedTemplate,
        aspectRatio: settings.aspectRatio,
        scale: `${exportScale}x`,
        dataUrl,
        timestamp: new Date().toISOString(),
      });
    } catch (err) {
      console.error('Export rasterization error:', err);
      setError('Failed to generate high-resolution image. Ensure all assets are loaded.');
    } finally {
      setIsExporting(false);
    }
  };

  const handleDownload = () => {
    if (!exportedUrl) return;
    const link = document.createElement('a');
    link.download = `${project.title.toLowerCase().replace(/\s+/g, '-')}-showcase-${Date.now()}.png`;
    link.href = exportedUrl;
    link.click();
  };

  const handleCopyToClipboard = async () => {
    if (!canvasRef.current) return;
    try {
      const blob = await toBlob(canvasRef.current, { pixelRatio: 2 });
      if (blob && navigator.clipboard && window.ClipboardItem) {
        await navigator.clipboard.write([new ClipboardItem({ 'image/png': blob })]);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    } catch (err) {
      console.error('Clipboard copy failed:', err);
      alert('Could not copy directly to clipboard. Please download the PNG instead.');
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl border border-[#E7E7E4] max-w-2xl w-full overflow-hidden flex flex-col max-h-[92vh]">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#E7E7E4] bg-[#FBFBFA]">
          <div className="flex items-center gap-2.5">
            <div className="p-1.5 rounded bg-[#171717] text-white">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-sm font-bold tracking-tight text-[#171717]">
                Export High-Resolution Showcase PNG
              </h2>
              <p className="text-[11px] text-[#777777]">
                Swiss editorial layout rasterized in crisp 300 DPI retina quality.
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

        {/* Body */}
        <div className="p-6 space-y-6 overflow-y-auto">
          {/* Resolution Presets */}
          <div>
            <label className="block text-xs font-mono uppercase tracking-widest text-[#777777] font-semibold mb-2">
              Export Resolution Quality
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setExportScale(1)}
                className={`p-3 rounded border text-left transition-all ${
                  exportScale === 1
                    ? 'border-[#171717] bg-[#F7F7F5] ring-1 ring-[#171717]'
                    : 'border-[#E7E7E4] hover:bg-[#FAF9F7]'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-bold text-[#171717]">Standard Web</span>
                  <span className="text-[10px] font-mono text-[#777777]">1x Scale</span>
                </div>
                <div className="text-[11px] font-mono text-[#777777]">1920 × 1080 PNG</div>
              </button>

              <button
                type="button"
                onClick={() => setExportScale(2)}
                className={`p-3 rounded border text-left transition-all ${
                  exportScale === 2
                    ? 'border-[#171717] bg-[#F7F7F5] ring-1 ring-[#171717]'
                    : 'border-[#E7E7E4] hover:bg-[#FAF9F7]'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-bold text-[#171717]">Retina 4K Ultra HD</span>
                  <span className="text-[10px] font-mono text-emerald-700 bg-emerald-50 px-1.5 py-0.2 rounded font-semibold">
                    Recommended
                  </span>
                </div>
                <div className="text-[11px] font-mono text-[#777777]">3840 × 2160 PNG (Zero blur)</div>
              </button>
            </div>
          </div>

          {/* Action Trigger */}
          {!exportedUrl && (
            <div className="text-center py-6 border border-dashed border-[#CCCCCC] rounded-xl bg-[#FAF9F8]">
              <ImageIcon className="w-8 h-8 mx-auto text-[#777777] mb-2" />
              <div className="text-xs font-semibold text-[#171717] mb-1">
                Ready to generate presentation asset
              </div>
              <p className="text-[11px] text-[#777777] max-w-sm mx-auto mb-4">
                Will render the complete editorial artboard with precise Swiss typography, shadows, and crisp screenshots.
              </p>
              <button
                onClick={handleGenerateExport}
                disabled={isExporting}
                className="px-6 py-2.5 bg-[#171717] text-white text-xs font-mono font-bold uppercase tracking-wider rounded-md hover:bg-black transition-colors inline-flex items-center gap-2"
              >
                {isExporting ? (
                  <>
                    <Loader2 className="w-3.5 h-3.5 animate-spin" />
                    <span>Rendering Pixel-Perfect PNG...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Render Showcase PNG</span>
                  </>
                )}
              </button>
            </div>
          )}

          {/* Error Message */}
          {error && (
            <div className="p-3.5 rounded bg-red-50 text-red-700 text-xs border border-red-200">
              {error}
            </div>
          )}

          {/* Exported Result Preview */}
          {exportedUrl && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-widest text-[#777777] font-semibold">
                  Rendered Result Preview
                </span>
                <span className="text-[11px] font-mono text-emerald-700 font-bold flex items-center gap-1">
                  <Check className="w-3.5 h-3.5" /> Ready for Download
                </span>
              </div>

              <div className="border border-[#E7E7E4] rounded-lg overflow-hidden bg-[#171717] shadow-subtle max-h-64 flex items-center justify-center p-2">
                <img
                  src={exportedUrl}
                  alt="Showcase Export Preview"
                  className="w-full h-auto max-h-60 object-contain rounded"
                />
              </div>

              <div className="flex items-center gap-3 pt-2">
                <button
                  onClick={handleDownload}
                  className="flex-1 py-2.5 bg-[#171717] text-white text-xs font-mono font-bold uppercase tracking-wider rounded hover:bg-black transition-colors flex items-center justify-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Full-Res PNG</span>
                </button>

                <button
                  onClick={handleCopyToClipboard}
                  className="px-4 py-2.5 border border-[#E7E7E4] text-[#171717] text-xs font-mono font-bold rounded hover:bg-[#F7F7F5] transition-colors flex items-center gap-2 shrink-0"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  <span>{copied ? 'Copied!' : 'Copy to Clipboard'}</span>
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-6 py-3.5 border-t border-[#E7E7E4] bg-[#FBFBFA]">
          <span className="text-[11px] font-mono text-[#777777]">
            Format: PNG &bull; Color: RGB &bull; Transparency: Preserved
          </span>
          <button
            onClick={onClose}
            className="text-xs font-mono text-[#777777] hover:text-[#171717]"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
