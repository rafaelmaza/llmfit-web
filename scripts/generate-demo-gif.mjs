// Generates demo.gif without ffmpeg by capturing PNG frames with Playwright
// and encoding them to an animated GIF in pure JavaScript.
//
// Usage:
//   node scripts/generate-demo-gif.mjs
//
// Output:
//   demo.gif (repo root)

import fs from 'node:fs/promises';
import path from 'node:path';
import { chromium } from 'playwright';
import gifencPkg from 'gifenc';
const { GIFEncoder, quantize, applyPalette } = gifencPkg;
import { PNG } from 'pngjs';

const URL = process.env.URL ?? 'https://rafaelmaza.github.io/llmfit-web/';
const outGif = path.resolve('demo.gif');
const framesDir = path.resolve('artifacts/gif-frames');

await fs.mkdir(framesDir, { recursive: true });

const width = 900;
const height = 650;

const browser = await chromium.launch({ headless: true });
const context = await browser.newContext({ viewport: { width, height } });
const page = await context.newPage();

await page.goto(URL, { waitUntil: 'domcontentloaded' });

// Helper: capture a frame (with a per-frame delay for the final GIF)
let frameIdx = 0;
const frames = [];
async function snap(label, waitMs = 1200, gifDelayMs = 1400) {
  await page.waitForTimeout(waitMs);
  const file = path.join(
    framesDir,
    `${String(frameIdx).padStart(3, '0')}-${label}.png`
  );
  await page.screenshot({ path: file, fullPage: false });
  frames.push({ file, delay: gifDelayMs });
  frameIdx += 1;
}

// Flow
await snap('loaded', 800, 1800);

// Prep the search (make changes people can follow)
// Make sure the form is on-screen
await page.locator('#gpuModel').scrollIntoViewIfNeeded();
await snap('form-visible', 300, 900);

// Choose GPU (dropdown is populated dynamically)
await page.waitForFunction(() => {
  const el = document.querySelector('#gpuModel');
  return el && el.options && el.options.length > 10;
});
await page.selectOption('#gpuModel', { label: 'RTX 4090' });
await snap('gpu-selected', 700, 1800);

// Play with RAM a bit
await page.selectOption('#systemRam', '32');
await snap('ram-32', 500, 1400);
await page.selectOption('#systemRam', '64');
await snap('ram-64', 700, 1800);
await page.selectOption('#systemRam', '32');
await snap('ram-back-32', 700, 1800);

// Purpose / use case (ensure dropdown is visible)
await page.locator('#useCase').scrollIntoViewIfNeeded();
await snap('usecase-visible', 300, 900);
await page.selectOption('#useCase', 'General');
await snap('usecase-general', 600, 1800);
await page.selectOption('#useCase', 'Coding');
await snap('usecase-coding', 700, 2000);

// Min context and min tok/s (use new fields)
await page.locator('#minContext').scrollIntoViewIfNeeded();
await snap('requirements-visible', 300, 900);
await page.selectOption('#minContext', '8192');
await snap('minctx-8k', 600, 1800);
await page.selectOption('#minTps', '10');
await snap('mintps-10', 600, 1800);

// Untick a checkbox (e.g., hide MoE)
await page.locator('#filterMoE').scrollIntoViewIfNeeded();
await snap('filters-visible', 300, 900);
await page.click('#filterMoE');
await snap('filter-moe-off', 700, 2200);

// Submit
await page.locator('button', { hasText: 'Find Models' }).click();
// Wait until results are shown (safer than a blind sleep)
await page.waitForSelector('#resultsPanel', { state: 'visible', timeout: 15000 });
await snap('results-top', 1200, 2600);

// Scroll to results and move slowly so text is readable
for (let i = 1; i <= 6; i++) {
  await page.mouse.wheel(0, 260);
  await snap(`scroll-${i}`, 900, 2000);
}

await context.close();
await browser.close();

// Encode frames
const encoder = GIFEncoder();

for (const fr of frames) {
  const buf = await fs.readFile(fr.file);
  const png = PNG.sync.read(buf);

  // Quantize to 256 colors
  const palette = quantize(png.data, 256);
  const index = applyPalette(png.data, palette);

  encoder.writeFrame(index, width, height, { palette, delay: fr.delay });
}

encoder.finish();
const gif = encoder.bytes();
await fs.writeFile(outGif, Buffer.from(gif));

console.log(`✅ Wrote ${outGif} (${gif.length} bytes) from ${frames.length} frames`);
