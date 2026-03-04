/**
 * Multi-Dimensional Model Scoring Engine
 * Ported from llmfit Rust implementation
 */

import {
  QUANT_HIERARCHY,
  MLX_QUANT_HIERARCHY,
  getQuantQualityPenalty,
  getQuantSpeedMultiplier,
  estimateMemory,
  estimateDiskSizeGiB,
  getBackendSpeedConstant,
  parseParams,
  inferUseCase,
} from "./utils.js";

// Run modes
export const RunMode = {
  GPU: "GPU",
  MOE_OFFLOAD: "MOE_OFFLOAD",
  CPU_OFFLOAD: "CPU_OFFLOAD",
  CPU_ONLY: "CPU_ONLY",
};

// Fit levels
export const FitLevel = {
  PERFECT: "Perfect",
  GOOD: "Good",
  MARGINAL: "Marginal",
  TOO_TIGHT: "Too Tight",
};

// Use cases
export const UseCase = {
  GENERAL: "General",
  CODING: "Coding",
  REASONING: "Reasoning",
  CHAT: "Chat",
  MULTIMODAL: "Multimodal",
  EMBEDDING: "Embedding",
};

/**
 * Score fit level based on memory utilization
 * Perfect requires GPU. CPU caps at Marginal.
 */
function scoreFit(required, available, recommended, runMode) {
  if (required > available) {
    return FitLevel.TOO_TIGHT;
  }

  const utilization = required / available;

  // Perfect: GPU with recommended memory met
  if (runMode === RunMode.GPU && required <= recommended) {
    return FitLevel.PERFECT;
  }

  // Good: GPU with good headroom, or MoE/CpuOffload with decent fit
  if (
    (runMode === RunMode.GPU && utilization <= 0.85) ||
    (runMode === RunMode.MOE_OFFLOAD && utilization <= 0.85) ||
    (runMode === RunMode.CPU_OFFLOAD && utilization <= 0.85)
  ) {
    return FitLevel.GOOD;
  }

  // Marginal: tight fit or CPU-only (caps here)
  if (runMode === RunMode.CPU_ONLY || utilization <= 0.95) {
    return FitLevel.MARGINAL;
  }

  return FitLevel.TOO_TIGHT;
}

/**
 * Fit score: how well model fills available memory (0-100)
 * Sweet spot: 50-80% utilization
 */
export function fitScore(required, available) {
  if (available <= 0 || required > available) {
    return 0;
  }

  const ratio = required / available;

  if (ratio <= 0.5) {
    // Under-utilizing: 60 + (ratio / 0.5) * 40
    return 60 + (ratio / 0.5) * 40;
  } else if (ratio <= 0.8) {
    // Sweet spot: 100
    return 100;
  } else if (ratio <= 0.9) {
    // Getting tight: 70
    return 70;
  } else {
    // Very tight: 50
    return 50;
  }
}

/**
 * Speed score: estimated TPS normalized to target (0-100)
 */
export function speedScore(tps, useCase) {
  const targets = {
    [UseCase.GENERAL]: 40,
    [UseCase.CODING]: 40,
    [UseCase.REASONING]: 25,
    [UseCase.CHAT]: 40,
    [UseCase.MULTIMODAL]: 40,
    [UseCase.EMBEDDING]: 200,
  };

  const target = targets[useCase] || 40;
  return Math.min(100, (tps / target) * 100);
}

/**
 * Context score: window size vs typical use case needs (0-100)
 */
export function contextScore(contextLength, useCase) {
  const targets = {
    [UseCase.GENERAL]: 4096,
    [UseCase.CODING]: 8192,
    [UseCase.REASONING]: 8192,
    [UseCase.CHAT]: 4096,
    [UseCase.MULTIMODAL]: 4096,
    [UseCase.EMBEDDING]: 512,
  };

  const target = targets[useCase] || 4096;

  if (contextLength >= target) {
    return 100;
  } else if (contextLength >= target / 2) {
    return 70;
  } else {
    return 30;
  }
}

/**
 * Quality score: param count + family reputation + quant penalty + task alignment
 */
export function qualityScore(model, quant, useCase) {
  const params = model.paramsBillions;

  // Base quality by parameter count
  let base;
  if (params < 1) base = 30;
  else if (params < 3) base = 45;
  else if (params < 7) base = 60;
  else if (params < 10) base = 75;
  else if (params < 20) base = 82;
  else if (params < 40) base = 89;
  else base = 95;

  // Family reputation bump
  const nameLower = model.name.toLowerCase();
  let familyBump = 0;
  if (nameLower.includes("qwen")) familyBump = 2;
  else if (nameLower.includes("deepseek")) familyBump = 3;
  else if (nameLower.includes("llama")) familyBump = 2;
  else if (
    nameLower.includes("mistral") ||
    nameLower.includes("mixtral")
  )
    familyBump = 1;
  else if (nameLower.includes("gemma")) familyBump = 1;
  else if (nameLower.includes("phi")) familyBump = 0;
  else if (nameLower.includes("starcoder")) familyBump = 1;

  // Quantization penalty
  const qPenalty = getQuantQualityPenalty(quant);

  // Task alignment bump
  let taskBump = 0;
  if (useCase === UseCase.CODING) {
    if (
      nameLower.includes("code") ||
      nameLower.includes("starcoder") ||
      nameLower.includes("wizard")
    ) {
      taskBump = 6;
    }
  } else if (useCase === UseCase.REASONING) {
    if (params >= 13) taskBump = 5;
  } else if (useCase === UseCase.MULTIMODAL) {
    if (nameLower.includes("vision")) taskBump = 6;
  }

  return Math.max(0, Math.min(100, base + familyBump + qPenalty + taskBump));
}

/**
 * Estimate tokens/second for a model on given hardware
 */
export function estimateTps(model, quant, hardware, runMode, isMLX = false) {
  // Backend speed constant K
  let k = getBackendSpeedConstant(hardware.backend, isMLX);

  const params = model.paramsBillions || 0.1;
  let base = k / params;

  // Quantization speed multiplier
  base *= getQuantSpeedMultiplier(quant);

  // Threading bonus
  if (hardware.cpuCores >= 8) {
    base *= 1.1;
  }

  // Run mode penalties
  switch (runMode) {
    case RunMode.GPU:
      break; // no penalty
    case RunMode.MOE_OFFLOAD:
      base *= 0.8; // expert switching latency
      break;
    case RunMode.CPU_OFFLOAD:
      base *= 0.5; // significant penalty
      break;
    case RunMode.CPU_ONLY:
      base *= 0.3; // worst case
      break;
  }

  // CPU-only should use CPU K regardless
  if (runMode === RunMode.CPU_ONLY) {
    const cpuK = 70; // x86, adjust for ARM if needed
    base = (cpuK / params) * getQuantSpeedMultiplier(quant);
    if (hardware.cpuCores >= 8) {
      base *= 1.1;
    }
  }

  return Math.max(0.1, base);
}

/**
 * Determine best quantization for a given memory budget
 */
export function bestQuantForBudget(model, budget, hierarchy) {
  for (const quant of hierarchy) {
    const mem = estimateMemory(model.paramsBillions, quant);
    if (mem <= budget) {
      return quant;
    }
  }
  return hierarchy[hierarchy.length - 1]; // fallback to most compressed
}

/**
 * Analyze a model against given hardware and return full fit analysis
 */
export function analyzeModel(model, hardware, useCase) {
  const isMoE = model.isMoE || false;
  const isMLX = hardware.backend === "METAL" && hardware.unified;

  // Determine runtime and quantization hierarchy
  const runtime = isMLX ? "MLX" : "llama.cpp";
  const hierarchy = isMLX ? MLX_QUANT_HIERARCHY : QUANT_HIERARCHY;

  // Base memory requirements
  const minMemory = estimateMemory(model.paramsBillions, "F16");
  const recommendedMemory = minMemory * 2;

  // Step 1: Determine execution path
  let runMode, memRequired, memAvailable;
  const notes = [];

  if (hardware.hasGpu) {
    const vram = hardware.vram || 0;

    if (hardware.unified) {
      // Apple Silicon: shared pool
      notes.push("Unified memory: GPU and CPU share the same pool");
      if (
        isMoE &&
        bestQuantForBudget(model, vram, hierarchy) !== hierarchy[0]
      ) {
        runMode = RunMode.MOE_OFFLOAD;
        memRequired = minMemory;
        memAvailable = vram;
      } else {
        const bestQuant = bestQuantForBudget(model, vram, hierarchy);
        memRequired = estimateMemory(model.paramsBillions, bestQuant);
        runMode = RunMode.GPU;
        memAvailable = vram;
      }
    } else {
      // Discrete GPU: VRAM + fallback to system RAM
      if (minMemory <= vram) {
        runMode = RunMode.GPU;
        memRequired = estimateMemory(
          model.paramsBillions,
          bestQuantForBudget(model, vram, hierarchy)
        );
        memAvailable = vram;
      } else if (minMemory <= hardware.systemRam) {
        // Try MoE offloading or CPU offload
        if (isMoE && minMemory * 0.4 <= vram) {
          runMode = RunMode.MOE_OFFLOAD;
          memRequired = minMemory * 0.4;
          memAvailable = Math.max(vram, hardware.systemRam);
          notes.push("MoE: Expert offloading to system RAM");
        } else {
          runMode = RunMode.CPU_OFFLOAD;
          memRequired = estimateMemory(
            model.paramsBillions,
            bestQuantForBudget(model, hardware.systemRam, hierarchy)
          );
          memAvailable = hardware.systemRam;
          notes.push(
            "Insufficient VRAM: spilling to system RAM (reduced performance)"
          );
        }
      } else {
        runMode = RunMode.GPU; // fallback
        memRequired = minMemory;
        memAvailable = vram;
        notes.push("Model too large: does not fit");
      }
    }
  } else {
    // CPU-only path
    runMode = RunMode.CPU_ONLY;
    memRequired = estimateMemory(
      model.paramsBillions,
      bestQuantForBudget(model, hardware.systemRam, hierarchy)
    );
    memAvailable = hardware.systemRam;
    notes.push("No GPU: inference will be slow");
  }

  // Step 2: Score fit level
  const fitLevel = scoreFit(
    memRequired,
    memAvailable,
    recommendedMemory,
    runMode
  );

  const utilization = (memRequired / memAvailable) * 100;

  // Step 3: Find best quantization
  const bestQuant = bestQuantForBudget(model, memAvailable, hierarchy);

  // Step 4: Estimate speed
  const tps = estimateTps(model, bestQuant, hardware, runMode, isMLX);

  // Step 5: Compute scores
  const scores = {
    quality: qualityScore(model, bestQuant, useCase),
    speed: speedScore(tps, useCase),
    fit: fitScore(memRequired, memAvailable),
    context: contextScore(model.contextLength, useCase),
  };

  const compositeScore = weightedScore(scores, useCase);

  // Approx disk size (GiB) for the recommended quant
  const diskSizeGiB = estimateDiskSizeGiB(model.paramsBillions, bestQuant);

  return {
    model: model.name,
    provider: model.provider,
    paramsBillions: model.paramsBillions,
    contextLength: model.contextLength,
    fitLevel,
    runMode,
    memoryRequiredGb: memRequired,
    memoryAvailableGb: memAvailable,
    utilizationPct: utilization,
    estimatedTps: tps,
    diskSizeGiB,
    bestQuant,
    useCase,
    runtime,
    scores,
    compositeScore,
    notes,
  };
}

/**
 * Weighted composite score based on use case
 */
export function weightedScore(scoreComponents, useCase) {
  const weights = {
    [UseCase.GENERAL]: { q: 0.45, s: 0.3, f: 0.15, c: 0.1 },
    [UseCase.CODING]: { q: 0.5, s: 0.2, f: 0.15, c: 0.15 },
    [UseCase.REASONING]: { q: 0.55, s: 0.15, f: 0.15, c: 0.15 },
    [UseCase.CHAT]: { q: 0.4, s: 0.35, f: 0.15, c: 0.1 },
    [UseCase.MULTIMODAL]: { q: 0.5, s: 0.2, f: 0.15, c: 0.15 },
    [UseCase.EMBEDDING]: { q: 0.3, s: 0.4, f: 0.2, c: 0.1 },
  };

  const w = weights[useCase] || weights[UseCase.GENERAL];
  const raw =
    scoreComponents.quality * w.q +
    scoreComponents.speed * w.s +
    scoreComponents.fit * w.f +
    scoreComponents.context * w.c;

  return Math.round(raw * 10) / 10; // Round to 1 decimal place
}

/**
 * Score multiple models and return ranked by fit
 */
export function scoreModels(models, hardware, useCase) {
  const results = models
    .map((model) => analyzeModel(model, hardware, useCase))
    .sort((a, b) => {
      // TooTight models go last
      if (a.fitLevel === FitLevel.TOO_TIGHT && b.fitLevel !== FitLevel.TOO_TIGHT) {
        return 1;
      }
      if (a.fitLevel !== FitLevel.TOO_TIGHT && b.fitLevel === FitLevel.TOO_TIGHT) {
        return -1;
      }

      // Otherwise sort by composite score descending
      return b.compositeScore - a.compositeScore;
    });

  return results;
}

/**
 * Filter scored results by run mode
 * @param {Array} results - Array of scored model results
 * @param {Object} filters - Filter options { gpu, moe, cpuGpu, cpuOnly }
 * @returns {Array} Filtered results
 */
export function filterByRunMode(results, filters) {
  return results.filter(r => {
    if (r.runMode === RunMode.GPU && !filters.gpu) return false;
    if (r.runMode === RunMode.MOE_OFFLOAD && !filters.moe) return false;
    if (r.runMode === RunMode.CPU_OFFLOAD && !filters.cpuGpu) return false;
    if (r.runMode === RunMode.CPU_ONLY && !filters.cpuOnly) return false;
    return true;
  });
}

/**
 * Filter scored results by common user constraints (context + speed).
 *
 * @param {Array} results - scored results from scoreModels/analyzeModel
 * @param {Object} req
 * @param {number|null} req.minContext - minimum context window (tokens), e.g. 8192
 * @param {number|null} req.minTps - minimum estimated tokens/sec
 * @returns {Array}
 */
export function filterByRequirements(results, { minContext = null, minTps = null } = {}) {
  return results.filter(r => {
    if (minContext != null) {
      const ctx = r.contextLength ?? 0;
      if (ctx < minContext) return false;
    }
    if (minTps != null) {
      const tps = r.estimatedTps ?? 0;
      if (tps < minTps) return false;
    }
    return true;
  });
}
