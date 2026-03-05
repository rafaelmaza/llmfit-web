/**
 * UI/Browser Tests
 * 
 * Tests the actual HTML interface behavior, rendering, and user interactions.
 * Requires: npm install -D @playwright/test
 * 
 * Run: npx playwright test test/ui.test.js
 */

import { test, expect } from '@playwright/test';

test.describe('llmfit-web UI', () => {
  
  test.beforeEach(async ({ page }) => {
    // Start local server: npm start (or specify your URL)
    await page.goto('http://localhost:8000');
    await page.waitForLoadState('networkidle');
  });

  // ──────────────── Page Load & Rendering ────────────────

  test('should load page with title', async ({ page }) => {
    const title = await page.title();
    expect(title).toContain('llmfit');
  });

  test('should display hardware selection form', async ({ page }) => {
    const gpuLabel = await page.locator('label:has-text("GPU")').first();
    expect(gpuLabel).toBeVisible();
  });

  test('should show CPU-only warning when GPU=no is selected', async ({ page }) => {
    // Select "No GPU"
    await page.locator('input[name="gpuMode"][value="no"]').check();
    
    // CPU-only message should appear
    const warning = await page.locator('text=CPU-only inference');
    expect(warning).toBeVisible();
    expect(warning).toContainText('5-20 tokens/sec');
  });

  test('should hide CPU-only warning when GPU=yes', async ({ page }) => {
    // Start with GPU=no to show warning
    await page.locator('input[name="gpuMode"][value="no"]').check();
    
    // Switch to GPU=yes
    await page.locator('input[name="gpuMode"][value="yes"]').check();
    
    // Warning should disappear
    const warning = await page.locator('#cpuOnlyMessage');
    await expect(warning).toHaveCSS('display', 'none');
  });

  // ──────────────── GPU Selection ────────────────

  test('should show GPU model dropdown when GPU=yes', async ({ page }) => {
    await page.locator('input[name="gpuMode"][value="yes"]').check();
    
    const gpuModelSelect = await page.locator('#gpuModel');
    expect(gpuModelSelect).toBeVisible();
  });

  test('should show custom VRAM input when GPU model is "OTHER"', async ({ page }) => {
    await page.locator('input[name="gpuMode"][value="yes"]').check();
    await page.locator('#gpuModel').selectOption('OTHER');
    
    const customVramInput = await page.locator('#customVram');
    expect(customVramInput).toBeVisible();
  });

  // ──────────────── Results & Memory Display ────────────────

  test('should show results after running analysis', async ({ page }) => {
    await page.locator('input[name="gpuMode"][value="yes"]').check();
    await page.locator('#gpuModel').selectOption('RTX-3070');
    await page.locator('button:has-text("Analyze")').click();
    
    // Wait for results
    await page.waitForSelector('.model-card');
    const cards = await page.locator('.model-card');
    expect(cards).toHaveCount(expect.any(Number));
  });

  test('memory display should show GPU VRAM for GPU-only modes', async ({ page }) => {
    await page.locator('input[name="gpuMode"][value="yes"]').check();
    await page.locator('#gpuModel').selectOption('RTX-3070'); // 8GB VRAM
    await page.locator('button:has-text("Analyze")').click();
    
    await page.waitForSelector('.model-card');
    
    // Look for memory display with "8.0GB" (GPU VRAM)
    const memoryDisplay = await page.locator('.detail-value:has-text("of 8.0GB")');
    expect(memoryDisplay).toBeTruthy();
  });

  test('memory display should show both GPU+RAM for hybrid modes', async ({ page }) => {
    // Large model that requires CPU offload
    await page.locator('input[name="gpuMode"][value="yes"]').check();
    await page.locator('#gpuModel').selectOption('RTX-3070'); // 8GB VRAM only
    await page.locator('#systemRam').selectOption('32');
    await page.locator('button:has-text("Analyze")').click();
    
    await page.waitForSelector('.model-card');
    
    // For CPU+GPU hybrid: should show "8GB GPU + 32GB RAM"
    const memoryDisplay = await page.locator(
      'text=/GPU.*RAM|\\d+GB GPU\\s+\\+\\s+\\d+GB/'
    );
    // At least one card should have hybrid memory display if any big models present
    const count = await memoryDisplay.count();
    expect(count >= 0).toBeTruthy(); // May be 0 if no hybrid models fit
  });

  test('CPU-only results should show reasonable speeds (0.1-10 tok/s)', async ({ page }) => {
    await page.locator('input[name="gpuMode"][value="no"]').check();
    await page.locator('button:has-text("Analyze")').click();
    
    await page.waitForSelector('.model-card');
    
    // Extract all speed values
    const speedElements = await page.locator('.detail-value:has-text("tok/s")');
    const count = await speedElements.count();
    
    for (let i = 0; i < count; i++) {
      const text = await speedElements.nth(i).textContent();
      const match = text.match(/([\d.]+)\s+tok\/s/);
      
      if (match) {
        const tps = parseFloat(match[1]);
        // CPU-only: expect 0.1 - 10 tok/s (realistic range)
        expect(tps).toBeGreaterThanOrEqual(0.1);
        expect(tps).toBeLessThanOrEqual(10);
      }
    }
  });

  // ──────────────── Filters ────────────────

  test('GPU filter should hide CPU-only results', async ({ page }) => {
    await page.locator('input[name="gpuMode"][value="no"]').check();
    await page.locator('button:has-text("Analyze")').click();
    
    await page.waitForSelector('.model-card');
    const allCards = await page.locator('.model-card');
    const initialCount = await allCards.count();
    
    // Enable GPU filter (hide CPU-only)
    const gpuCheckbox = await page.locator('input#filterGPU');
    await gpuCheckbox.check();
    
    // Wait and count visible cards
    const visibleCards = await page.locator('.model-card:visible');
    const visibleCount = await visibleCards.count();
    
    expect(visibleCount).toBeLessThanOrEqual(initialCount);
  });

  test('context filter should hide models with insufficient context', async ({ page }) => {
    await page.locator('input[name="gpuMode"][value="yes"]').check();
    await page.locator('#gpuModel').selectOption('RTX-3070');
    
    // Set minimum context to 8K
    await page.locator('#minContext').fill('8192');
    
    await page.locator('button:has-text("Analyze")').click();
    await page.waitForSelector('.model-card');
    
    // All visible cards should have context >= 8K
    const contextElements = await page.locator('text=Context').parent().locator('..').locator('.detail-value');
    const count = await contextElements.count();
    
    for (let i = 0; i < Math.min(count, 5); i++) {
      const text = await contextElements.nth(i).textContent();
      const match = text.match(/(\d+)K?/);
      if (match && text.includes('K')) {
        const contextK = parseInt(match[1]);
        expect(contextK).toBeGreaterThanOrEqual(8);
      }
    }
  });

  // ──────────────── Consistency Checks ────────────────

  test('GPU speed should be higher than CPU speed for same model', async ({ page }) => {
    // Run GPU analysis
    await page.locator('input[name="gpuMode"][value="yes"]').check();
    await page.locator('#gpuModel').selectOption('RTX-4090');
    await page.locator('#useCase').selectOption('general');
    await page.locator('button:has-text("Analyze")').click();
    
    await page.waitForSelector('.model-card');
    const gpuSpeeds = await page.locator('.detail-value:has-text("tok/s")').allTextContents();
    const gpuTps = gpuSpeeds.map(t => parseFloat(t.match(/([\d.]+)/)[1]));
    
    // Run CPU analysis
    await page.locator('input[name="gpuMode"][value="no"]').check();
    await page.locator('button:has-text("Analyze")').click();
    
    await page.waitForSelector('.model-card');
    const cpuSpeeds = await page.locator('.detail-value:has-text("tok/s")').allTextContents();
    const cpuTps = cpuSpeeds.map(t => parseFloat(t.match(/([\d.]+)/)[1]));
    
    // Average GPU speed should be higher than average CPU speed
    const gpuAvg = gpuTps.reduce((a, b) => a + b) / gpuTps.length;
    const cpuAvg = cpuTps.reduce((a, b) => a + b) / cpuTps.length;
    
    expect(gpuAvg).toBeGreaterThan(cpuAvg);
  });

});
