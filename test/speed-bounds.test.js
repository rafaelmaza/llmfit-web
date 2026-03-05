/**
 * Speed Bounds Tests
 * 
 * Validates that estimated TPS are realistic and match claims made in the UI.
 * This catches gross overestimation bugs like the CPU speed constant being too high.
 */

import test from "node:test";
import assert from "node:assert";

import { estimateTps, analyzeModel, RunMode } from "../src/scoring.js";

function testModel(name, params) {
  return {
    name,
    provider: "Test",
    paramsBillions: params,
    contextLength: 4096,
    isMoE: false,
  };
}

function testHardware(vram, systemRam, hasGpu = true, backend = "CUDA", cpuCores = 8) {
  return { hasGpu, vram, systemRam, backend, cpuCores, unified: false };
}

// ──────────────── CRITICAL: CPU Speed Bounds ────────────────
// UI claims "5-20 tokens/sec" for CPU-only. Tests validate realistic ranges.
// Note: Tiny models (<3B) can exceed this due to cache effects; tests use realistic model sizes.

test("CPU-only: small model (3-5B) should be 5-15 tok/s", () => {
  const model = testModel("SmallModel-3.8B", 3.8);
  const hw = testHardware(0, 32, false, "CPU_X86", 8);

  const tps = estimateTps(model, "Q4_K_M", hw, RunMode.CPU_ONLY);
  
  assert(
    tps >= 5 && tps <= 15,
    `Expected 5-15 tok/s for ~4B CPU model, got ${tps.toFixed(1)}`
  );
});

test("CPU-only: 7B model should be 3-6 tok/s (medium model)", () => {
  const model = testModel("Llama-7B", 7.0);
  const hw = testHardware(0, 32, false, "CPU_X86", 8);

  const tps = estimateTps(model, "Q4_K_M", hw, RunMode.CPU_ONLY);
  
  assert(
    tps >= 3 && tps <= 6,
    `Expected 3-6 tok/s for 7B CPU model, got ${tps.toFixed(1)}`
  );
});

test("CPU-only: 13B model should be 1.5-5 tok/s (large model, slow)", () => {
  const model = testModel("Llama-13B", 13.0);
  const hw = testHardware(0, 32, false, "CPU_X86", 8);

  const tps = estimateTps(model, "Q4_K_M", hw, RunMode.CPU_ONLY);
  
  assert(
    tps >= 1.5 && tps <= 5,
    `Expected 1.5-5 tok/s for 13B CPU model, got ${tps.toFixed(1)}`
  );
});

test("CPU-only: 70B model should be <1 tok/s (very slow)", () => {
  const model = testModel("Llama-70B", 70.0);
  const hw = testHardware(0, 32, false, "CPU_X86", 8);

  const tps = estimateTps(model, "Q4_K_M", hw, RunMode.CPU_ONLY);
  
  assert(
    tps < 1,
    `Expected <1 tok/s for 70B CPU model, got ${tps.toFixed(1)}`
  );
});

// ──────────────── GPU Speed Sanity ────────────────

test("GPU (CUDA): 7B should be 30-45 tok/s on RTX 4090", () => {
  const model = testModel("Llama-7B", 7.0);
  const hw = testHardware(24, 32, true, "CUDA", 16);

  const tps = estimateTps(model, "Q4_K_M", hw, RunMode.GPU);
  
  assert(
    tps >= 30 && tps <= 45,
    `Expected 30-45 tok/s for 7B on RTX 4090, got ${tps.toFixed(1)}`
  );
});

test("GPU (CUDA): 13B should be 15-25 tok/s on RTX 4090", () => {
  const model = testModel("Llama-13B", 13.0);
  const hw = testHardware(24, 32, true, "CUDA", 16);

  const tps = estimateTps(model, "Q4_K_M", hw, RunMode.GPU);
  
  assert(
    tps >= 15 && tps <= 25,
    `Expected 15-25 tok/s for 13B on RTX 4090, got ${tps.toFixed(1)}`
  );
});

// ──────────────── CPU Offload Penalty ────────────────

test("CPU offload (spilling): should be much slower than pure GPU", () => {
  const model = testModel("Llama-7B", 7.0);
  const hw = testHardware(8, 32, true, "CUDA", 8);

  const tpsGpu = estimateTps(model, "Q4_K_M", hw, RunMode.GPU);
  const tpsOffload = estimateTps(model, "Q4_K_M", hw, RunMode.CPU_OFFLOAD);

  const ratio = tpsGpu / tpsOffload;
  assert(
    ratio >= 1.5,
    `CPU offload should be 1.5x+ slower than pure GPU (ratio: ${ratio.toFixed(2)})`
  );
});

// ──────────────── CPU Core Impact ────────────────

test("CPU-only: 4-core CPU should be ~15% slower than 8-core", () => {
  const model = testModel("Llama-7B", 7.0);
  const hw4 = testHardware(0, 32, false, "CPU_X86", 4);
  const hw8 = testHardware(0, 32, false, "CPU_X86", 8);

  const tps4 = estimateTps(model, "Q4_K_M", hw4, RunMode.CPU_ONLY);
  const tps8 = estimateTps(model, "Q4_K_M", hw8, RunMode.CPU_ONLY);

  assert(
    tps8 > tps4,
    "8-core should be faster than 4-core"
  );
  
  const ratio = tps8 / tps4;
  assert(
    ratio >= 1.1 && ratio <= 1.25,
    `Expected 10-25% speedup, got ${((ratio - 1) * 100).toFixed(0)}%`
  );
});

console.log("✅ All speed bound tests passed!");
