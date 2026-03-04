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

const URL = process.env.URL ?? 'http://localhost:8000';
const outGif = path.resolve('demo.gif');
const framesDir = path.resolve('artifacts/gif-frames');

await fs.mkdir(framesDir, { recursive: true });

const width = 900;
const height = 560;

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
try { await page.selectOption('#gpuModel', { label: 'RTX 4090' }); } catch {}
await snap('gpu-selected', 900, 1800);

// Play with RAM a bit
try { await page.selectOption('#systemRam', '32'); } catch {}
await snap('ram-32', 700, 1400);
try { await page.selectOption('#systemRam', '64'); } catch {}
await snap('ram-64', 900, 1800);
try { await page.selectOption('#systemRam', '32'); } catch {}
await snap('ram-back-32', 900, 1800);

// Purpose / use case
try { await page.selectOption('#useCase', 'General'); } catch {}
await snap('usecase-general', 800, 1600);
try { await page.selectOption('#useCase', 'Coding'); } catch {}
await snap('usecase-coding', 900, 1800);

// Untick a checkbox (e.g., hide MoE)
try { await page.click('#filterMoE'); } catch {}
await snap('filter-moe-off', 900, 2000);

// Submit
await page.getByText('Find Models', { exact: true }).click();
await snap('loading', 700, 1200);
await snap('results-top', 2600, 2200);

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
