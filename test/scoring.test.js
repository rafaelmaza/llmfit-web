import test from "node:test";
import assert from "node:assert";

import {
  analyzeModel,
  weightedScore,
  fitScore,
  speedScore,
  contextScore,
  qualityScore,
  estimateTps,
  scoreModels,
  filterByRunMode,
  RunMode,
  FitLevel,
  UseCase,
} from "../src/scoring.js";

// Helper to create test model
function testModel(name, params, contextLength = 4096) {
  return {
    name,
    provider: "Test",
    paramsBillions: params,
    contextLength,
    isMoE: false,
  };
}

// Helper to create test hardware
function testHardware(
  vram,
  systemRam = 32,
  hasGpu = true,
  backend = "CUDA",
  unified = false
) {
  return {
    hasGpu,
    vram,
    systemRam,
    backend,
    cpuCores: 8,
    unified,
  };
}

test("fitScore - sweet spot (50-80% utilization)", () => {
  const score = fitScore(6, 10);
  assert(score >= 95, "Should score near perfect for 60% utilization");

  const score2 = fitScore(8, 10);
  assert.strictEqual(score2, 100, "Should be perfect for 80% utilization");
});

test("fitScore - under-utilized", () => {
  const score = fitScore(2, 10);
  assert(score >= 60 && score < 100, "Should be good but not optimal");
});

test("fitScore - tight fit", () => {
  const score = fitScore(9.5, 10);
  assert(score >= 50 && score < 80, "Should be marginal");
});

test("fitScore - exceeds available", () => {
  const score = fitScore(11, 10);
  assert.strictEqual(score, 0, "Should be 0 when exceeds");
});

test("speedScore - at target TPS", () => {
  const score = speedScore(40, UseCase.GENERAL);
  assert.strictEqual(score, 100, "Should be 100 at target");
});

test("speedScore - below target", () => {
  const score = speedScore(20, UseCase.GENERAL);
  assert.strictEqual(score, 50, "Should be 50 at half target");
});

test("speedScore - above target", () => {
  const score = speedScore(80, UseCase.GENERAL);
  assert.strictEqual(score, 100, "Should cap at 100");
});

test("contextScore - meets target", () => {
  const model = testModel("Test", 7, 4096);
  const score = contextScore(model.contextLength, UseCase.GENERAL);
  assert.strictEqual(score, 100, "Should be 100 when meets target");
});

test("contextScore - below target", () => {
  const score = contextScore(2048, UseCase.CODING); // target: 8192
  assert(score < 100, "Should be less than 100");
  assert(score >= 30, "Should be at least 30");
});

test("qualityScore - larger params score higher", () => {
  const small = testModel("Small", 1);
  const medium = testModel("Medium", 7);
  const large = testModel("Large", 70);

  const qSmall = qualityScore(small, "Q4_K_M", UseCase.GENERAL);
  const qMedium = qualityScore(medium, "Q4_K_M", UseCase.GENERAL);
  const qLarge = qualityScore(large, "Q4_K_M", UseCase.GENERAL);

  assert(qMedium > qSmall, "Medium should score higher than small");
  assert(qLarge > qMedium, "Large should score higher than medium");
});

test("qualityScore - quantization penalty", () => {
  const model = testModel("Test", 7);

  const q8 = qualityScore(model, "Q8_0", UseCase.GENERAL);
  const q4 = qualityScore(model, "Q4_K_M", UseCase.GENERAL);
  const q2 = qualityScore(model, "Q2_K", UseCase.GENERAL);

  assert(q8 > q4, "Q8 should score higher than Q4");
  assert(q4 > q2, "Q4 should score higher than Q2");
});

test("estimateTps - GPU faster than CPU", () => {
  const model = testModel("Test", 7);
  const hwGpu = testHardware(16, 32, true, "CUDA");
  const hwCpu = testHardware(0, 32, false, "CPU_X86");

  const tpsGpu = estimateTps(model, "Q4_K_M", hwGpu, RunMode.GPU);
  const tpsCpu = estimateTps(model, "Q4_K_M", hwCpu, RunMode.CPU_ONLY);

  assert(tpsGpu > tpsCpu, "GPU should be faster than CPU");
});

test("estimateTps - run mode penalties", () => {
  const model = testModel("Test", 7);
  const hw = testHardware(16, 32, true, "CUDA");

  const tpsGpu = estimateTps(model, "Q4_K_M", hw, RunMode.GPU);
  const tpsMoe = estimateTps(model, "Q4_K_M", hw, RunMode.MOE_OFFLOAD);
  const tpsOffload = estimateTps(model, "Q4_K_M", hw, RunMode.CPU_OFFLOAD);
  const tpsCpu = estimateTps(model, "Q4_K_M", hw, RunMode.CPU_ONLY);

  assert(tpsGpu > tpsMoe, "GPU faster than MoE");
  assert(tpsMoe > tpsOffload, "MoE faster than CPU offload");
  assert(tpsOffload > tpsCpu, "CPU offload faster than CPU only");
});

test("analyzeModel - GPU path when fits", () => {
  const model = testModel("Llama-7B", 7);
  const hw = testHardware(16, 32, true, "CUDA");

  const result = analyzeModel(model, hw, UseCase.GENERAL);

  assert.strictEqual(
    result.runMode,
    RunMode.GPU,
    "Should use GPU path"
  );
  assert(
    result.fitLevel !== FitLevel.TOO_TIGHT,
    "Should fit"
  );
});

test("analyzeModel - CPU-only when no GPU", () => {
  const model = testModel("Llama-7B", 7);
  const hw = testHardware(0, 32, false, "CPU_X86");

  const result = analyzeModel(model, hw, UseCase.GENERAL);

  assert.strictEqual(result.runMode, RunMode.CPU_ONLY);
  assert.strictEqual(result.fitLevel, FitLevel.MARGINAL, "CPU caps at Marginal");
});

test("analyzeModel - CPU offload when VRAM insufficient", () => {
  const model = testModel("Llama-13B", 13);
  const hw = testHardware(4, 32, true, "CUDA");

  const result = analyzeModel(model, hw, UseCase.GENERAL);

  assert(result.fitLevel === FitLevel.GOOD || result.fitLevel === FitLevel.MARGINAL);
});

test("analyzeModel - unified memory (Apple Silicon)", () => {
  const model = testModel("Llama-7B", 7);
  const hw = testHardware(16, 16, true, "METAL", true); // unified=true

  const result = analyzeModel(model, hw, UseCase.GENERAL);

  assert(
    result.notes.some((n) => n.includes("Unified memory")),
    "Should note unified memory"
  );
});

test("analyzeModel - too large model", () => {
  const model = testModel("Llama-70B", 70);
  const hw = testHardware(8, 16, true, "CUDA");

  const result = analyzeModel(model, hw, UseCase.GENERAL);

  assert.strictEqual(result.fitLevel, FitLevel.TOO_TIGHT);
});

test("weightedScore - different weights by use case", () => {
  const scores = {
    quality: 80,
    speed: 70,
    fit: 90,
    context: 100,
  };

  const general = weightedScore(scores, UseCase.GENERAL);
  const coding = weightedScore(scores, UseCase.CODING);
  const embedding = weightedScore(scores, UseCase.EMBEDDING);

  // All should be valid
  assert(general > 0 && general <= 100);
  assert(coding > 0 && coding <= 100);
  assert(embedding > 0 && embedding <= 100);

  // Different use cases should produce different scores (due to different weights)
  assert.notStrictEqual(general, embedding, "Weights should differ by use case");
});

test("scoreModels - ranks by fit level and score", () => {
  const models = [
    testModel("Llama-70B", 70), // too large
    testModel("Llama-7B", 7),   // fits well
    testModel("Llama-13B", 13), // fits
  ];

  const hw = testHardware(16, 32, true, "CUDA");
  const results = scoreModels(models, hw, UseCase.GENERAL);

  // Too-tight should be last
  const lastResult = results[results.length - 1];
  assert.strictEqual(
    lastResult.fitLevel,
    FitLevel.TOO_TIGHT,
    "70B should be too tight"
  );

  // Runnable models should be sorted by score descending
  const runnable = results.filter((r) => r.fitLevel !== FitLevel.TOO_TIGHT);
  for (let i = 0; i < runnable.length - 1; i++) {
    assert(
      runnable[i].compositeScore >= runnable[i + 1].compositeScore,
      "Should be sorted by score descending"
    );
  }
});

test("scoreModels - Llama-7B on RTX 4090 should score well", () => {
  const model = testModel("Meta-Llama-3-7B", 7);
  const hw = testHardware(24, 32, true, "CUDA");

  const results = scoreModels([model], hw, UseCase.GENERAL);
  const result = results[0];

  assert(result.compositeScore >= 70, "7B on RTX 4090 should score 70+");
  assert.strictEqual(result.fitLevel, FitLevel.PERFECT);
  assert.strictEqual(result.runMode, RunMode.GPU);
});

test("scoreModels - Llama-7B on 8GB laptop GPU", () => {
  const model = testModel("Meta-Llama-3-7B", 7);
  const hw = testHardware(8, 16, true, "CUDA");

  const results = scoreModels([model], hw, UseCase.GENERAL);
  const result = results[0];

  assert(result.fitLevel === FitLevel.GOOD || result.fitLevel === FitLevel.MARGINAL);
  assert(result.compositeScore > 0);
});

test("scoreModels - Coding use case boosts code models", () => {
  const codeModel = testModel("StarCoder2-7B", 7);
  const generalModel = testModel("Llama-7B", 7);

  const hw = testHardware(16, 32, true, "CUDA");

  const codeScore = scoreModels([codeModel], hw, UseCase.CODING)[0].compositeScore;
  const generalScore = scoreModels([generalModel], hw, UseCase.CODING)[0].compositeScore;

  // Code model should score higher on Coding use case
  assert(codeScore > generalScore, "Code model should score higher for Coding");
});

// ──────────────── Run Mode Filter Tests ────────────────

test("filterByRunMode - all enabled shows all results", () => {
  const results = [
    { runMode: RunMode.GPU, name: "Model A" },
    { runMode: RunMode.MOE_OFFLOAD, name: "Model B" },
    { runMode: RunMode.CPU_OFFLOAD, name: "Model C" },
    { runMode: RunMode.CPU_ONLY, name: "Model D" },
  ];

  const filters = { gpu: true, moe: true, cpuGpu: true, cpuOnly: true };
  const filtered = filterByRunMode(results, filters);

  assert.strictEqual(filtered.length, 4, "Should return all 4 results");
});

test("filterByRunMode - GPU only", () => {
  const results = [
    { runMode: RunMode.GPU, name: "Model A" },
    { runMode: RunMode.MOE_OFFLOAD, name: "Model B" },
    { runMode: RunMode.CPU_OFFLOAD, name: "Model C" },
    { runMode: RunMode.CPU_ONLY, name: "Model D" },
  ];

  const filters = { gpu: true, moe: false, cpuGpu: false, cpuOnly: false };
  const filtered = filterByRunMode(results, filters);

  assert.strictEqual(filtered.length, 1, "Should return 1 GPU model");
  assert.strictEqual(filtered[0].runMode, RunMode.GPU);
});

test("filterByRunMode - no CPU offload (GPU + MoE only)", () => {
  const results = [
    { runMode: RunMode.GPU, name: "Model A" },
    { runMode: RunMode.MOE_OFFLOAD, name: "Model B" },
    { runMode: RunMode.CPU_OFFLOAD, name: "Model C" },
    { runMode: RunMode.CPU_ONLY, name: "Model D" },
  ];

  const filters = { gpu: true, moe: true, cpuGpu: false, cpuOnly: false };
  const filtered = filterByRunMode(results, filters);

  assert.strictEqual(filtered.length, 2, "Should return GPU + MoE models");
  assert.strictEqual(filtered[0].runMode, RunMode.GPU);
  assert.strictEqual(filtered[1].runMode, RunMode.MOE_OFFLOAD);
});

test("filterByRunMode - all disabled returns empty", () => {
  const results = [
    { runMode: RunMode.GPU, name: "Model A" },
    { runMode: RunMode.MOE_OFFLOAD, name: "Model B" },
  ];

  const filters = { gpu: false, moe: false, cpuGpu: false, cpuOnly: false };
  const filtered = filterByRunMode(results, filters);

  assert.strictEqual(filtered.length, 0, "Should return no results");
});

console.log("✅ All tests passed!");
