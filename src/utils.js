/**
 * Quantization Hierarchy and Speed Multipliers
 */

// Quantization levels from best quality to most compressed (GGUF format)
export const QUANT_HIERARCHY = [
  "Q8_0",
  "Q8_1",
  "Q7_K_M",
  "Q7_K_S",
  "Q6_K",
  "Q5_K_M",
  "Q5_K_S",
  "Q5_M",
  "Q5_0",
  "Q4_K_M",
  "Q4_K_S",
  "Q4_1",
  "Q4_0",
  "Q3_K_M",
  "Q3_K_S",
  "Q3_K_L",
  "Q3_M",
  "Q3_0",
  "Q2_K",
];

// Quantization hierarchy for Apple Silicon MLX format
export const MLX_QUANT_HIERARCHY = [
  "Q8",
  "Q6",
  "Q4",
  "Q2",
];

/**
 * Quality penalty by quantization level
 * Higher bits = higher quality
 */
export const QUANT_QUALITY_PENALTY = {
  "F16": 0,
  "F32": 0,
  "BF16": 0,
  "Q8_0": -2,
  "Q8_1": -3,
  "Q7_K_M": -4,
  "Q7_K_S": -5,
  "Q6_K": -6,
  "Q5_K_M": -8,
  "Q5_K_S": -10,
  "Q5_M": -10,
  "Q5_0": -12,
  "Q4_K_M": -12,
  "Q4_K_S": -14,
  "Q4_1": -15,
  "Q4_0": -15,
  "Q3_K_M": -20,
  "Q3_K_S": -22,
  "Q3_K_L": -20,
  "Q3_M": -22,
  "Q3_0": -25,
  "Q2_K": -30,
  "Q8": -2,   // MLX
  "Q6": -8,
  "Q4": -15,
  "Q2": -30,
};

/**
 * Speed multiplier by quantization level (relative to FP16)
 * Q4 ≈ 1x, Q8 ≈ 0.5x, Q2 ≈ 1.5x (due to compression)
 */
export const QUANT_SPEED_MULTIPLIER = {
  "F32": 0.5,
  "F16": 1.0,
  "BF16": 1.0,
  "Q8_0": 0.7,
  "Q8_1": 0.65,
  "Q7_K_M": 0.75,
  "Q7_K_S": 0.78,
  "Q6_K": 0.85,
  "Q5_K_M": 0.92,
  "Q5_K_S": 0.95,
  "Q5_M": 0.92,
  "Q5_0": 0.95,
  "Q4_K_M": 1.0,
  "Q4_K_S": 1.02,
  "Q4_1": 1.0,
  "Q4_0": 1.0,
  "Q3_K_M": 1.15,
  "Q3_K_S": 1.18,
  "Q3_K_L": 1.15,
  "Q3_M": 1.18,
  "Q3_0": 1.2,
  "Q2_K": 1.35,
  "Q8": 0.7,   // MLX
  "Q6": 0.85,
  "Q4": 1.0,
  "Q2": 1.35,
};

/**
 * Get quality penalty for a quantization level
 * @param {string} quant - Quantization name
 * @returns {number} Quality penalty (negative)
 */
export function getQuantQualityPenalty(quant) {
  return QUANT_QUALITY_PENALTY[quant] || -15;
}

/**
 * Get speed multiplier for a quantization level
 * @param {string} quant - Quantization name
 * @returns {number} Speed multiplier (relative to FP16)
 */
export function getQuantSpeedMultiplier(quant) {
  return QUANT_SPEED_MULTIPLIER[quant] || 1.0;
}

/**
 * Estimate memory requirement for a model at a given quantization
 * Formula: (param_count_billions * quant_bytes_per_param)
 *
 * Quantization bytes per parameter:
 * F32: 4 bytes, F16: 2 bytes, BF16: 2 bytes
 * Q8: 1 byte, Q6: 0.75 bytes, Q5: 0.625 bytes
 * Q4: 0.5 bytes, Q3: 0.375 bytes, Q2: 0.25 bytes
 */
export function estimateMemory(paramsBillions, quant) {
  const bytesPerParam = {
    "F32": 4.0,
    "F16": 2.0,
    "BF16": 2.0,
    "Q8_0": 1.0,
    "Q8_1": 1.0,
    "Q7_K_M": 0.875,
    "Q7_K_S": 0.875,
    "Q6_K": 0.75,
    "Q5_K_M": 0.625,
    "Q5_K_S": 0.625,
    "Q5_M": 0.625,
    "Q5_0": 0.625,
    "Q4_K_M": 0.5,
    "Q4_K_S": 0.5,
    "Q4_1": 0.5,
    "Q4_0": 0.5,
    "Q3_K_M": 0.375,
    "Q3_K_S": 0.375,
    "Q3_K_L": 0.375,
    "Q3_M": 0.375,
    "Q3_0": 0.375,
    "Q2_K": 0.25,
    "Q8": 1.0,
    "Q6": 0.75,
    "Q4": 0.5,
    "Q2": 0.25,
  };

  const bpp = bytesPerParam[quant] || 0.5;
  const memoryGb = (paramsBillions * bpp) / 1024 * 1024; // Convert bits to GB
  return paramsBillions * bpp;
}

/**
 * Backend speed constant K (higher = faster throughput)
 */
export const BACKEND_SPEED_CONSTANT = {
  "METAL_MLX": 250.0,
  "METAL_LLAMACPP": 160.0,
  "CUDA": 220.0,
  "ROCM": 180.0,
  "VULKAN": 150.0,
  "SYCL": 100.0,
  "CPU_ARM": 90.0,
  "CPU_X86": 70.0,
};

/**
 * Get backend speed constant
 * @param {string} backend - Backend name (CUDA, ROCM, METAL, SYCL, CPU_X86, CPU_ARM)
 * @param {boolean} isMLX - Whether using MLX runtime (Apple Silicon)
 * @returns {number} Speed constant K
 */
export function getBackendSpeedConstant(backend, isMLX = false) {
  if (backend === "METAL" && isMLX) {
    return BACKEND_SPEED_CONSTANT["METAL_MLX"];
  }
  return BACKEND_SPEED_CONSTANT[backend] || 70.0;
}

/**
 * Parse parameter count string to billions
 * Examples: "7B" -> 7, "70B" -> 70, "8x7B" -> 56 (MoE)
 */
export function parseParams(paramString) {
  if (!paramString) return 0;
  paramString = paramString.toLowerCase().trim();

  // Handle MoE format: "8x7B" -> 8 * 7 = 56B
  if (paramString.includes("x")) {
    const parts = paramString.split("x").map((p) => {
      const num = parseFloat(p);
      return isNaN(num) ? 0 : num;
    });
    return parts.reduce((a, b) => a * b, 1);
  }

  // Regular format: "7B" -> 7
  const match = paramString.match(/(\d+\.?\d*)\s*b/);
  if (match) {
    return parseFloat(match[1]);
  }

  return 0;
}

/**
 * Determine use case from model name
 */
export function inferUseCase(modelName) {
  const name = modelName.toLowerCase();

  if (
    name.includes("code") ||
    name.includes("starcoder") ||
    name.includes("wizard")
  ) {
    return "Coding";
  }
  if (name.includes("reasoning") || name.includes("r1")) {
    return "Reasoning";
  }
  if (
    name.includes("vision") ||
    name.includes("llava") ||
    name.includes("qwen-vl")
  ) {
    return "Multimodal";
  }
  if (name.includes("embed")) {
    return "Embedding";
  }
  if (name.includes("chat")) {
    return "Chat";
  }

  return "General";
}
