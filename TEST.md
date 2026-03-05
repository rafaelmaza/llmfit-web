# Testing Guide

This project has **three layers of tests** to catch bugs at different levels:

## 1. Unit Tests (Scoring Logic)
Tests core calculation logic: memory estimation, speed prediction, model fit scoring.

```bash
npm run test:unit
```

**Files:**
- `test/scoring.test.js` — Original tests (relative behavior, edge cases)
- `test/speed-bounds.test.js` — **NEW: Validates realistic speed ranges** (catches the CPU speed bug!)

**What's Tested:**
- ✅ Memory estimation (F16, Q4, Q2, etc.)
- ✅ Quantization and run modes (GPU, CPU_OFFLOAD, CPU_ONLY)
- ✅ Speed estimates with realistic bounds (3-6 tok/s for 7B CPU, 30-45 for 7B GPU)
- ✅ CPU core impact, GPU vs CPU comparison
- ✅ Model fit levels and filtering

## 2. Integration Tests
Tests the full pipeline: load models → score → filter → rank.

```bash
npm run test:integration
```

## 3. Browser/UI Tests
Tests the actual web interface: form interaction, result rendering, filter behavior.

```bash
npm run test:ui
```

**Requires:**
- Local server running: `npm start` (port 8000)
- Playwright installed (included in devDependencies)

**What's Tested:**
- ✅ Page loads, form renders
- ✅ GPU mode toggle shows/hides warnings
- ✅ Results display with realistic speed values
- ✅ Memory display clarity (GPU vs CPU+GPU hybrid)
- ✅ Filters work correctly
- ✅ GPU is consistently faster than CPU

## Run All Tests

```bash
npm run test:all
```

Or individually:

```bash
npm test                  # Unit + integration
npm run test:unit        # Unit only
npm run test:integration # Integration only
npm run test:ui          # Browser UI only
```

## Why These Matter

The **CPU speed bounds test** caught a critical bug where CPU-only inference was claiming **42 tok/s** (unrealistic) when the warning said **5-20 tok/s** (realistic). This test validates:

- Small models (3-5B): 5-15 tok/s ✅
- Medium models (7B): 3-6 tok/s ✅
- Large models (13B+): 1.5-5 tok/s ✅
- GPU always faster than CPU ✅

## Adding New Tests

**For logic changes:** Add to `test/speed-bounds.test.js` or `test/scoring.test.js`

**For UI changes:** Add to `test/ui.test.js` (see Playwright docs: https://playwright.dev/docs/intro)

**Test new realistic speeds:** Any significant scoring change should include bounds tests to prevent future regressions.

## CI/CD Integration

Add to your CI pipeline:

```yaml
- name: Run unit tests
  run: npm run test:unit
  
- name: Run UI tests
  run: npm run test:ui
```

This catches issues **before users find them**. 🎯
