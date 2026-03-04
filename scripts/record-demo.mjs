// Record a short demo video of llmfit-web using a *headed* Chromium session.
//
// Typical usage (Linux, headless server):
//   xvfb-run -a node scripts/record-demo.mjs
//
// Outputs:
//   artifacts/videos/<random>.webm
//
// Then convert to GIF:
//   ffmpeg -i artifacts/videos/<file>.webm -vf "fps=15,scale=1000:-1:flags=lanczos" -loop 0 demo.gif

import { chromium } from 'playwright';

const URL = process.env.URL ?? 'http://localhost:8000';

const browser = await chromium.launch({ headless: false });
const context = await browser.newContext({
  viewport: { width: 1280, height: 720 },
  recordVideo: { dir: 'artifacts/videos', size: { width: 1280, height: 720 } },
});

const page = await context.newPage();

await page.goto(URL, { waitUntil: 'domcontentloaded' });

// Demo flow (edit as you like)
await page.waitForTimeout(500);

// Choose a GPU if present (ignore errors if selector changes)
try {
  await page.selectOption('#gpuModel', { label: 'RTX 4090' });
} catch {}

try {
  await page.selectOption('#systemRam', '32');
} catch {}

try {
  await page.selectOption('#useCase', 'Coding');
} catch {}

await page.getByText('Find Models', { exact: true }).click();
await page.waitForTimeout(2500);

// Scroll results a bit
await page.mouse.wheel(0, 1400);
await page.waitForTimeout(1200);

await context.close();
await browser.close();

console.log('✅ Demo recorded. Check artifacts/videos for the recorded file.');
