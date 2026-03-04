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

// Helper: capture a frame
let frameIdx = 0;
async function snap(label, delayMs = 700) {
  await page.waitForTimeout(delayMs);
  const file = path.join(framesDir, `${String(frameIdx).padStart(3, '0')}-${label}.png`);
  await page.screenshot({ path: file, fullPage: false });
  frameIdx += 1;
}

// Flow
await snap('loaded', 500);

// Select GPU / RAM / use case
try { await page.selectOption('#gpuModel', { label: 'RTX 4090' }); } catch {}
await snap('gpu');
try { await page.selectOption('#systemRam', '32'); } catch {}
await snap('ram');
try { await page.selectOption('#useCase', 'Coding'); } catch {}
await snap('usecase');

// Submit
await page.getByText('Find Models', { exact: true }).click();
await snap('loading', 600);
await snap('results', 1800);

// Scroll results
await page.mouse.wheel(0, 900);
await snap('scroll1', 700);
await page.mouse.wheel(0, 900);
await snap('scroll2', 700);

await context.close();
await browser.close();

// Encode frames
const files = (await fs.readdir(framesDir))
  .filter(f => f.endsWith('.png'))
  .sort();

const encoder = GIFEncoder();

// 12 fps-ish
const delay = 85; // ms

for (const f of files) {
  const buf = await fs.readFile(path.join(framesDir, f));
  const png = PNG.sync.read(buf);

  // Quantize to 256 colors
  const palette = quantize(png.data, 256);
  const index = applyPalette(png.data, palette);

  encoder.writeFrame(index, width, height, { palette, delay });
}

encoder.finish();
const gif = encoder.bytes();
await fs.writeFile(outGif, Buffer.from(gif));

console.log(`✅ Wrote ${outGif} (${gif.length} bytes) from ${files.length} frames`);
