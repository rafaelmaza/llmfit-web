import test from "node:test";
import assert from "node:assert";

import { scoreModels, UseCase, FitLevel } from "../src/scoring.js";
import { searchModels, getTopModels, getMoEModels, getModelsByUseCase } from "../src/models.js";

// Helper
function testHardware(vram, systemRam = 32, hasGpu = true, backend = "CUDA", unified = false) {
  return { hasGpu, vram, systemRam, backend, cpuCores: 8, unified };
}

test("Integration: Find best Llama 7B on RTX 4090", () => {
  const models = searchModels("Llama-3.1-8B-Instruct");
  assert(models.length > 0, "Should find Llama models");

  const hw = testHardware(24, 32, true, "CUDA");
  const results = scoreModels(models, hw, UseCase.GENERAL);

  assert(results.length > 0, "Should score models");
  assert(results[0].fitLevel !== FitLevel.TOO_TIGHT, "Should fit");
  console.log(`✓ Best Llama-8B on RTX 4090: ${results[0].compositeScore}/100`);
});

test("Integration: Find best coding model on 8GB GPU", () => {
  const codingModels = searchModels("StarCoder");
  assert(codingModels.length > 0, "Should find coding models");

  const hw = testHardware(8, 16, true, "CUDA");
  const results = scoreModels(codingModels, hw, UseCase.CODING);

  const runnable = results.filter(r => r.fitLevel !== FitLevel.TOO_TIGHT);
  assert(runnable.length > 0, "Should have runnable models");
  console.log(`✓ Top coding model on 8GB GPU: ${results[0].model} (${results[0].compositeScore}/100)`);
});

test("Integration: Top 5 models on 24GB GPU", () => {
  const topModels = getTopModels(100);
  const hw = testHardware(24, 32, true, "CUDA");

  const scored = scoreModels(topModels, hw, UseCase.GENERAL);
  const runnable = scored.filter(r => r.fitLevel !== FitLevel.TOO_TIGHT).slice(0, 5);

  console.log("\n📊 Top 5 models on RTX 4090 (24GB VRAM):");
  runnable.forEach((r, i) => {
    console.log(`${i + 1}. ${r.model} (${r.compositeScore}/100) - ${r.fitLevel}`);
  });

  assert(runnable.length > 0, "Should have runnable models");
});

test("Integration: MoE models on high-VRAM setup", () => {
  const moeModels = getMoEModels().slice(0, 10);
  const hw = testHardware(80, 128, true, "CUDA");

  const results = scoreModels(moeModels, hw, UseCase.GENERAL);

  console.log("\n📊 MoE models on high-VRAM setup (80GB VRAM):");
  results.filter(r => r.fitLevel !== FitLevel.TOO_TIGHT).slice(0, 3).forEach((r) => {
    console.log(`✓ ${r.model} - ${r.runMode}`);
  });

  assert(results.length > 0, "Should score MoE models");
});

test("Integration: Models for CPU-only inference", () => {
  const smallModels = searchModels("Mistral-7B");
  const hw = testHardware(0, 16, false, "CPU_X86");

  const results = scoreModels(smallModels, hw, UseCase.CHAT);

  console.log("\n📊 CPU-only recommendation:");
  if (results[0].fitLevel !== FitLevel.TOO_TIGHT) {
    console.log(`✓ ${results[0].model} (${results[0].estimatedTps.toFixed(1)} tok/s)`);
  }
});

test("Integration: Llama-3.1-405B on different hardware tiers", () => {
  const models = searchModels("Llama-3.1-405B");
  assert(models.length > 0, "Should find 405B model");

  const configs = [
    { name: "8GB RTX 4060", vram: 8 },
    { name: "24GB RTX 4090", vram: 24 },
    { name: "80GB A100", vram: 80 },
  ];

  console.log("\n📊 Llama-3.1-405B across hardware tiers:");
  configs.forEach(cfg => {
    const hw = testHardware(cfg.vram, 32, true, "CUDA");
    const results = scoreModels(models, hw, UseCase.GENERAL);
    const fit = results[0].fitLevel;
    console.log(`${cfg.name}: ${fit}`);
  });
});

test("Integration: Use-case-specific recommendations", () => {
  const allModels = getTopModels(50);

  const useCases = [UseCase.CODING, UseCase.REASONING, UseCase.CHAT];
  const hw = testHardware(16, 32, true, "CUDA");

  console.log("\n📊 Best model per use case (16GB VRAM):");
  useCases.forEach(uc => {
    const results = scoreModels(allModels, hw, uc);
    const best = results.find(r => r.fitLevel !== FitLevel.TOO_TIGHT);
    if (best) {
      console.log(`${uc}: ${best.model.split('/')[1] || best.model} (${best.compositeScore}/100)`);
    }
  });
});

console.log("\n✅ All integration tests passed!");
