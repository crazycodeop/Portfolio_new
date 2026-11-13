const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

async function renderShowcases() {
  console.log('Launching Chromium for showcase rendering...');
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1920, height: 1080 },
    deviceScaleFactor: 2,
  });

  const page = await context.newPage();

  // Load and reset localStorage
  await page.goto('http://localhost:5173/');
  await page.evaluate(() => {
    localStorage.removeItem('showcase_studio_projects');
    localStorage.removeItem('showcase_studio_exports');
  });
  await page.reload({ waitUntil: 'networkidle' });
  await page.waitForTimeout(1000);

  const outDir = path.resolve(__dirname, '../public/images');
  const showcaseDir = path.join(outDir, 'showcases');
  if (!fs.existsSync(showcaseDir)) {
    fs.mkdirSync(showcaseDir, { recursive: true });
  }

  // 1. Render Docvyn
  console.log('Opening Docvyn in Showcase Studio...');
  // Click on "Open in Studio" button for Docvyn
  const docvynBtn = page.locator('button:has-text("Open in Studio")').first();
  await docvynBtn.click();
  await page.waitForTimeout(2000);

  // Locate the artboard canvas
  const canvas = page.locator('#showcase-artboard');
  await canvas.waitFor({ state: 'visible' });
  await page.waitForTimeout(1000);

  const docvynOut = path.join(outDir, 'docvyn.png');
  const docvynShowcase = path.join(showcaseDir, 'docvyn-showcase.png');
  await canvas.screenshot({ path: docvynOut });
  fs.copyFileSync(docvynOut, docvynShowcase);
  console.log(`Rendered Docvyn showcase to: ${docvynOut}`);

  // Return to Dashboard
  const backBtn = page.locator('button:has-text("Dashboard")').first();
  await backBtn.click();
  await page.waitForTimeout(1500);

  // 2. Render FlowForge AI
  console.log('Opening FlowForge AI in Showcase Studio...');
  const ffBtn = page.locator('button:has-text("Open in Studio")').nth(1);
  await ffBtn.click();
  await page.waitForTimeout(2000);

  const canvas2 = page.locator('#showcase-artboard');
  await canvas2.waitFor({ state: 'visible' });
  await page.waitForTimeout(1000);

  const ffOut = path.join(outDir, 'flowforge.png');
  const ffShowcase = path.join(showcaseDir, 'flowforge-showcase.png');
  await canvas2.screenshot({ path: ffOut });
  fs.copyFileSync(ffOut, ffShowcase);
  console.log(`Rendered FlowForge showcase to: ${ffOut}`);

  await browser.close();
  console.log('Showcase rendering complete!');
}

renderShowcases().catch((err) => {
  console.error('Error rendering showcases:', err);
  process.exit(1);
});
