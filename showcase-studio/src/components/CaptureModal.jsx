import React, { useState } from 'react';
import { X, Camera, Monitor, Smartphone, Globe, AlertCircle, CheckCircle2, Loader2, Upload } from 'lucide-react';

export const CaptureModal = ({ isOpen, onClose, onAddScreenshot, defaultUrl = '' }) => {
  const [url, setUrl] = useState(defaultUrl || '');
  const [preset, setPreset] = useState('desktop'); // 'desktop', 'mobile', 'fullpage', 'custom'
  const [customWidth, setCustomWidth] = useState(1440);
  const [customHeight, setCustomHeight] = useState(1000);
  const [delay, setDelay] = useState(1000);
  const [screenshotName, setScreenshotName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [loadingStep, setLoadingStep] = useState('');
  const [error, setError] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [capturedMeta, setCapturedMeta] = useState(null);

  if (!isOpen) return null;

  const handleCapture = async () => {
    if (!url.trim()) {
      setError('Please provide a valid website URL.');
      return;
    }

    setError(null);
    setIsLoading(true);
    setPreviewImage(null);

    try {
      setLoadingStep('1/4: Launching Playwright browser...');
      await new Promise((r) => setTimeout(r, 400));

      setLoadingStep('2/4: Loading DOM & resolving web fonts...');
      await new Promise((r) => setTimeout(r, 400));

      setLoadingStep('3/4: Scrolling to trigger lazy-loaded images...');

      const response = await fetch('/api/capture', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          url: url.trim(),
          preset,
          width: customWidth,
          height: customHeight,
          deviceScaleFactor: 2,
          delay: Number(delay),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to capture screenshot');
      }

      setLoadingStep('4/4: Screenshot captured successfully!');
      setPreviewImage(data.image);
      setCapturedMeta(data.metadata);
      setScreenshotName(data.metadata?.title || 'Web Interface Screenshot');
    } catch (err) {
      console.error(err);
      setError(err.message || 'Could not connect to capture server. Ensure backend is running.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSaveToProject = () => {
    if (!previewImage) return;

    onAddScreenshot({
      id: `shot-${Date.now()}`,
      name: screenshotName || 'Captured Interface',
      url: previewImage,
      viewport: preset === 'mobile' ? 'Mobile 390x844' : 'Desktop 1440x1000',
      caption: `Captured from ${url}`,
    });

    onClose();
  };

  const handleDirectUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      onAddScreenshot({
        id: `shot-${Date.now()}`,
        name: file.name.replace(/\.[^/.]+$/, ''),
        url: event.target.result,
        viewport: 'Local File',
        caption: 'Uploaded image file',
      });
      onClose();
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl border border-[#E7E7E4] max-w-xl w-full overflow-hidden flex flex-col max-h-[90vh]">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#E7E7E4] bg-[#FBFBFA]">
          <div className="flex items-center gap-2.5">
            <div className="p-1.5 rounded bg-[#171717] text-white">
              <Camera className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-sm font-bold tracking-tight text-[#171717]">
                Automated Playwright Screenshot Capture
              </h2>
              <p className="text-[11px] text-[#777777]">
                Captures high-resolution @2x retina screenshots without browser chrome.
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

        {/* Modal Body */}
        <div className="p-6 space-y-5 overflow-y-auto">
          {/* Target URL */}
          <div>
            <label className="block text-xs font-mono uppercase tracking-widest text-[#777777] font-semibold mb-1.5">
              Live Project URL
            </label>
            <div className="flex items-center gap-2">
              <div className="relative flex-1">
                <Globe className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#999999]" />
                <input
                  type="text"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  placeholder="https://your-live-project.com"
                  className="w-full pl-9 pr-3 py-2 text-xs font-mono rounded border border-[#E7E7E4] focus:border-[#171717] outline-none"
                />
              </div>
              <button
                onClick={handleCapture}
                disabled={isLoading || !url.trim()}
                className="px-4 py-2 bg-[#171717] text-white text-xs font-mono font-semibold rounded hover:bg-black disabled:opacity-40 transition-colors shrink-0 flex items-center gap-1.5"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-3.5 h-3.5 animate-spin" />
                    <span>Capturing...</span>
                  </>
                ) : (
                  <>
                    <Camera className="w-3.5 h-3.5" />
                    <span>Capture</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Viewport Presets */}
          <div>
            <label className="block text-xs font-mono uppercase tracking-widest text-[#777777] font-semibold mb-1.5">
              Viewport Resolution
            </label>
            <div className="grid grid-cols-3 gap-2.5">
              <button
                type="button"
                onClick={() => setPreset('desktop')}
                className={`p-3 rounded border text-left flex items-start gap-2.5 transition-all ${
                  preset === 'desktop'
                    ? 'border-[#171717] bg-[#F7F7F5] ring-1 ring-[#171717]'
                    : 'border-[#E7E7E4] hover:bg-[#FAF9F7]'
                }`}
              >
                <Monitor className="w-4 h-4 mt-0.5 text-[#171717]" />
                <div>
                  <div className="text-xs font-bold text-[#171717]">Desktop</div>
                  <div className="text-[10px] font-mono text-[#777777]">1440 × 1000 @ 2x</div>
                </div>
              </button>

              <button
                type="button"
                onClick={() => setPreset('mobile')}
                className={`p-3 rounded border text-left flex items-start gap-2.5 transition-all ${
                  preset === 'mobile'
                    ? 'border-[#171717] bg-[#F7F7F5] ring-1 ring-[#171717]'
                    : 'border-[#E7E7E4] hover:bg-[#FAF9F7]'
                }`}
              >
                <Smartphone className="w-4 h-4 mt-0.5 text-[#171717]" />
                <div>
                  <div className="text-xs font-bold text-[#171717]">Mobile</div>
                  <div className="text-[10px] font-mono text-[#777777]">390 × 844 @ 2x</div>
                </div>
              </button>

              <button
                type="button"
                onClick={() => setPreset('fullpage')}
                className={`p-3 rounded border text-left flex items-start gap-2.5 transition-all ${
                  preset === 'fullpage'
                    ? 'border-[#171717] bg-[#F7F7F5] ring-1 ring-[#171717]'
                    : 'border-[#E7E7E4] hover:bg-[#FAF9F7]'
                }`}
              >
                <Globe className="w-4 h-4 mt-0.5 text-[#171717]" />
                <div>
                  <div className="text-xs font-bold text-[#171717]">Full Page</div>
                  <div className="text-[10px] font-mono text-[#777777]">Complete Document</div>
                </div>
              </button>
            </div>
          </div>

          {/* Loading Progress State */}
          {isLoading && (
            <div className="p-4 rounded-lg bg-[#FAF9F7] border border-[#E7E7E4] space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono font-medium text-[#171717]">
                <Loader2 className="w-4 h-4 animate-spin text-[#171717]" />
                <span>{loadingStep}</span>
              </div>
              <div className="w-full bg-[#E7E7E4] h-1.5 rounded-full overflow-hidden">
                <div className="bg-[#171717] h-full animate-pulse w-3/4 rounded-full" />
              </div>
            </div>
          )}

          {/* Error Message */}
          {error && (
            <div className="p-3.5 rounded-lg bg-red-50 border border-red-200 text-red-700 text-xs flex items-start gap-2.5">
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
              <div className="flex-1 leading-relaxed">
                <div className="font-semibold">Capture Failed</div>
                <div>{error}</div>
                <div className="mt-2 text-[11px] text-red-600">
                  Tip: You can also directly upload any existing screenshot image below.
                </div>
              </div>
            </div>
          )}

          {/* Captured Preview */}
          {previewImage && (
            <div className="space-y-3 pt-3 border-t border-[#E7E7E4]">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-semibold text-emerald-700 font-mono">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Screenshot Ready</span>
                </div>
                <span className="text-[10px] font-mono text-[#777777]">
                  {capturedMeta?.viewport?.width} × {capturedMeta?.viewport?.height} (scale 2x)
                </span>
              </div>

              <div className="relative border border-[#E7E7E4] rounded-lg overflow-hidden max-h-56 bg-[#121212]">
                <img
                  src={previewImage}
                  alt="Captured Preview"
                  className="w-full h-auto object-cover object-top"
                />
              </div>

              <div>
                <label className="block text-[11px] font-mono uppercase tracking-wider text-[#777777] mb-1">
                  Screenshot Label
                </label>
                <input
                  type="text"
                  value={screenshotName}
                  onChange={(e) => setScreenshotName(e.target.value)}
                  className="w-full px-3 py-1.5 text-xs rounded border border-[#E7E7E4] outline-none font-medium"
                />
              </div>
            </div>
          )}

          {/* Direct File Upload Alternate Option */}
          <div className="pt-3 border-t border-[#E7E7E4]">
            <label className="block text-xs font-mono uppercase tracking-widest text-[#777777] font-semibold mb-1.5">
              Or Upload Local Image File
            </label>
            <label className="w-full border border-dashed border-[#CCCCCC] rounded-lg p-3.5 flex items-center justify-center gap-2 cursor-pointer hover:border-[#171717] hover:bg-[#FAF9F7] transition-colors">
              <Upload className="w-4 h-4 text-[#777777]" />
              <span className="text-xs text-[#555555]">Select PNG or JPG file from your computer</span>
              <input type="file" accept="image/*" onChange={handleDirectUpload} className="hidden" />
            </label>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-end gap-3 px-6 py-4 border-t border-[#E7E7E4] bg-[#FBFBFA]">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-mono text-[#777777] hover:text-[#171717]"
          >
            Cancel
          </button>
          <button
            onClick={handleSaveToProject}
            disabled={!previewImage}
            className="px-5 py-2 bg-[#171717] text-white text-xs font-mono font-semibold rounded hover:bg-black disabled:opacity-30 transition-colors flex items-center gap-1.5"
          >
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Add to Showcase</span>
          </button>
        </div>
      </div>
    </div>
  );
};
