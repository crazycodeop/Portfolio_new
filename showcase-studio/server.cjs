const express = require('express');
const cors = require('cors');
const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', service: 'Showcase Studio Capture Service', timestamp: new Date().toISOString() });
});

// Capture endpoint
app.post('/api/capture', async (req, res) => {
  let {
    url,
    preset = 'desktop', // 'desktop', 'mobile', 'fullpage', 'custom'
    width,
    height,
    deviceScaleFactor = 2,
    fullPage = false,
    sectionSelector = null,
    delay = 1000,
  } = req.body;

  if (!url) {
    return res.status(400).json({ error: 'URL is required' });
  }

  // Format URL if protocol is missing
  let targetUrl = url.trim();
  if (!/^https?:\/\//i.test(targetUrl)) {
    targetUrl = 'https://' + targetUrl;
  }

  // Set viewport based on preset
  let vpWidth = 1440;
  let vpHeight = 1000;
  let isMobileDevice = false;

  if (preset === 'mobile') {
    vpWidth = 390;
    vpHeight = 844;
    isMobileDevice = true;
  } else if (preset === 'fullpage') {
    vpWidth = 1440;
    vpHeight = 1000;
    fullPage = true;
  } else if (preset === 'custom' && width && height) {
    vpWidth = parseInt(width, 10);
    vpHeight = parseInt(height, 10);
  }

  let browser = null;
  try {
    // Launch Chromium, with fallback to system Edge if standalone chromium binary isn't found
    const launchOptions = {
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage', '--hide-scrollbars'],
    };

    try {
      browser = await chromium.launch(launchOptions);
    } catch (launchErr) {
      // Fallback to Microsoft Edge on Windows if needed
      const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
      if (fs.existsSync(edgePath)) {
        browser = await chromium.launch({ ...launchOptions, executablePath: edgePath });
      } else {
        throw launchErr;
      }
    }

    const context = await browser.newContext({
      viewport: { width: vpWidth, height: vpHeight },
      deviceScaleFactor: Number(deviceScaleFactor) || 2,
      isMobile: isMobileDevice,
      hasTouch: isMobileDevice,
      userAgent: isMobileDevice
        ? 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1'
        : 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
    });

    const page = await context.newPage();

    // Navigate to page with networkidle fallback
    try {
      await page.goto(targetUrl, { waitUntil: 'networkidle', timeout: 25000 });
    } catch {
      await page.goto(targetUrl, { waitUntil: 'domcontentloaded', timeout: 20000 });
    }

    // Wait for fonts to finish loading
    await page.evaluate(async () => {
      if (document.fonts && document.fonts.ready) {
        await document.fonts.ready;
      }
    });

    // Auto-scroll to trigger lazy-loaded images and dynamic content
    await page.evaluate(async () => {
      await new Promise((resolve) => {
        let totalHeight = 0;
        const distance = 400;
        const timer = setInterval(() => {
          const scrollHeight = document.body.scrollHeight;
          window.scrollBy(0, distance);
          totalHeight += distance;

          if (totalHeight >= scrollHeight || totalHeight > 5000) {
            clearInterval(timer);
            window.scrollTo(0, 0);
            setTimeout(resolve, 300);
          }
        }, 80);
      });
    });

    // Clean up unnecessary scrollbars and fixed promotional banners if any
    await page.addStyleTag({
      content: `
        ::-webkit-scrollbar { display: none !important; width: 0 !important; }
        body { -ms-overflow-style: none !important; scrollbar-width: none !important; }
      `,
    });

    // Optional delay for web animations to settle
    if (delay > 0) {
      await page.waitForTimeout(Math.min(delay, 5000));
    }

    // Get page title for smart labelling
    const pageTitle = (await page.title()) || new URL(targetUrl).hostname;

    let screenshotBuffer;
    if (sectionSelector) {
      const element = await page.$(sectionSelector);
      if (element) {
        screenshotBuffer = await element.screenshot({ type: 'png' });
      } else {
        screenshotBuffer = await page.screenshot({ type: 'png', fullPage });
      }
    } else {
      screenshotBuffer = await page.screenshot({ type: 'png', fullPage });
    }

    await browser.close();
    browser = null;

    const base64Image = `data:image/png;base64,${screenshotBuffer.toString('base64')}`;

    res.json({
      success: true,
      image: base64Image,
      metadata: {
        url: targetUrl,
        title: pageTitle,
        preset,
        viewport: { width: vpWidth, height: vpHeight },
        deviceScaleFactor,
        fullPage,
        capturedAt: new Date().toISOString(),
      },
    });
  } catch (error) {
    if (browser) await browser.close();
    console.error('Capture error:', error);
    res.status(500).json({
      error: error.message || 'Failed to capture screenshot. Ensure the URL is accessible.',
    });
  }
});

// Upload endpoint
app.post('/api/upload', (req, res) => {
  const { image, name } = req.body;
  if (!image) {
    return res.status(400).json({ error: 'Image data is required' });
  }
  res.json({
    success: true,
    image,
    metadata: {
      name: name || 'Uploaded Screenshot',
      uploadedAt: new Date().toISOString(),
    },
  });
});

app.listen(PORT, () => {
  console.log(`[Showcase Studio Server] Running on http://localhost:${PORT}`);
});
