/**
 * GPU Lookup Table
 * Maps common GPU models to their specifications (VRAM, backend)
 * Expanded to match llmfit GPU database (~80 GPUs)
 */

export const GPU_MODELS = {
  // ────────────────── NVIDIA CONSUMER (GeForce) ──────────────────

  // RTX 50-series (Blackwell)
  "RTX 5090": { vram: 32, backend: "CUDA" },
  "RTX 5080": { vram: 16, backend: "CUDA" },
  "RTX 5070 Ti": { vram: 16, backend: "CUDA" },
  "RTX 5070": { vram: 12, backend: "CUDA" },
  "RTX 5060 Ti": { vram: 16, backend: "CUDA" },
  "RTX 5060": { vram: 8, backend: "CUDA" },

  // RTX 40-series (Ada Lovelace)
  "RTX 4090": { vram: 24, backend: "CUDA" },
  "RTX 4080 Super": { vram: 16, backend: "CUDA" },
  "RTX 4080": { vram: 16, backend: "CUDA" },
  "RTX 4070 Ti Super": { vram: 16, backend: "CUDA" },
  "RTX 4070 Ti": { vram: 12, backend: "CUDA" },
  "RTX 4070 Super": { vram: 12, backend: "CUDA" },
  "RTX 4070": { vram: 12, backend: "CUDA" },
  "RTX 4060 Ti": { vram: 16, backend: "CUDA" },
  "RTX 4060": { vram: 8, backend: "CUDA" },

  // RTX 30-series (Ampere)
  "RTX 3090 Ti": { vram: 24, backend: "CUDA" },
  "RTX 3090": { vram: 24, backend: "CUDA" },
  "RTX 3080 Ti": { vram: 12, backend: "CUDA" },
  "RTX 3080": { vram: 10, backend: "CUDA" },
  "RTX 3070 Ti": { vram: 8, backend: "CUDA" },
  "RTX 3070": { vram: 8, backend: "CUDA" },
  "RTX 3060 Ti": { vram: 8, backend: "CUDA" },
  "RTX 3060": { vram: 12, backend: "CUDA" },

  // RTX 20-series (Turing)
  "RTX 2080 Ti": { vram: 11, backend: "CUDA" },
  "RTX 2080 Super": { vram: 8, backend: "CUDA" },
  "RTX 2080": { vram: 8, backend: "CUDA" },
  "RTX 2070 Super": { vram: 8, backend: "CUDA" },
  "RTX 2070": { vram: 8, backend: "CUDA" },
  "RTX 2060 Super": { vram: 8, backend: "CUDA" },
  "RTX 2060": { vram: 6, backend: "CUDA" },

  // GTX 16-series (Turing, no RT cores)
  "GTX 1660 Ti": { vram: 6, backend: "CUDA" },
  "GTX 1660 Super": { vram: 6, backend: "CUDA" },
  "GTX 1660": { vram: 6, backend: "CUDA" },
  "GTX 1650 Super": { vram: 4, backend: "CUDA" },
  "GTX 1650": { vram: 4, backend: "CUDA" },

  // ────────────────── NVIDIA DATA CENTER / PROFESSIONAL ──────────────────

  // H-series (Hopper)
  "H200": { vram: 141, backend: "CUDA" },
  "H100 SXM": { vram: 80, backend: "CUDA" },
  "H100": { vram: 80, backend: "CUDA" },

  // A-series (Ampere datacenter)
  "A100 SXM": { vram: 80, backend: "CUDA" },
  "A100 (80GB)": { vram: 80, backend: "CUDA" },
  "A100 (40GB)": { vram: 40, backend: "CUDA" },
  "A100": { vram: 80, backend: "CUDA" },
  "A10G": { vram: 24, backend: "CUDA" },
  "A10": { vram: 24, backend: "CUDA" },
  "A6000": { vram: 48, backend: "CUDA" },
  "A5000": { vram: 24, backend: "CUDA" },
  "A4000": { vram: 16, backend: "CUDA" },
  "A2000": { vram: 12, backend: "CUDA" },

  // L-series (Ada datacenter)
  "L40S": { vram: 48, backend: "CUDA" },
  "L40": { vram: 48, backend: "CUDA" },
  "L4": { vram: 24, backend: "CUDA" },

  // Tesla / Volta
  "V100 SXM": { vram: 32, backend: "CUDA" },
  "V100": { vram: 32, backend: "CUDA" },
  "V100 (16GB)": { vram: 16, backend: "CUDA" },
  "P100": { vram: 16, backend: "CUDA" },
  "T4": { vram: 16, backend: "CUDA" },

  // ────────────────── AMD CONSUMER (Radeon) ──────────────────

  // RX 9000-series (RDNA 4)
  "RX 9070 XT": { vram: 16, backend: "ROCM" },
  "RX 9070": { vram: 12, backend: "ROCM" },

  // RX 7000-series (RDNA 3)
  "RX 7900 XTX": { vram: 24, backend: "ROCM" },
  "RX 7900 XT": { vram: 20, backend: "ROCM" },
  "RX 7900 GRE": { vram: 16, backend: "ROCM" },
  "RX 7800 XT": { vram: 16, backend: "ROCM" },
  "RX 7700 XT": { vram: 12, backend: "ROCM" },
  "RX 7600": { vram: 8, backend: "ROCM" },

  // RX 6000-series (RDNA 2)
  "RX 6950 XT": { vram: 16, backend: "ROCM" },
  "RX 6900 XT": { vram: 16, backend: "ROCM" },
  "RX 6800 XT": { vram: 16, backend: "ROCM" },
  "RX 6800": { vram: 16, backend: "ROCM" },
  "RX 6700 XT": { vram: 12, backend: "ROCM" },
  "RX 6600 XT": { vram: 8, backend: "ROCM" },
  "RX 6600": { vram: 8, backend: "ROCM" },

  // ────────────────── AMD DATA CENTER (Instinct) ──────────────────

  // MI300 (CDNA 3)
  "MI300X": { vram: 192, backend: "ROCM" },
  "MI300": { vram: 192, backend: "ROCM" },

  // MI200 (CDNA 2)
  "MI250X": { vram: 128, backend: "ROCM" },
  "MI250": { vram: 128, backend: "ROCM" },
  "MI210": { vram: 64, backend: "ROCM" },

  // MI100 (CDNA 1)
  "MI100": { vram: 32, backend: "ROCM" },

  // ────────────────── INTEL ARC ──────────────────

  "Arc A770": { vram: 16, backend: "SYCL" },
  "Arc A750": { vram: 8, backend: "SYCL" },
  "Arc A380": { vram: 6, backend: "SYCL" },

  // ────────────────── APPLE SILICON ──────────────────

  // M4 family
  "M4 Max": { vram: 40, backend: "METAL", unified: true },
  "M4 Pro": { vram: 18, backend: "METAL", unified: true },
  "M4": { vram: 10, backend: "METAL", unified: true },

  // M3 family
  "M3 Max": { vram: 36, backend: "METAL", unified: true },
  "M3 Pro": { vram: 18, backend: "METAL", unified: true },
  "M3": { vram: 8, backend: "METAL", unified: true },

  // M2 family
  "M2 Ultra": { vram: 192, backend: "METAL", unified: true },
  "M2 Max": { vram: 32, backend: "METAL", unified: true },
  "M2 Pro": { vram: 16, backend: "METAL", unified: true },
  "M2": { vram: 8, backend: "METAL", unified: true },

  // M1 family
  "M1 Ultra": { vram: 128, backend: "METAL", unified: true },
  "M1 Max": { vram: 32, backend: "METAL", unified: true },
  "M1 Pro": { vram: 16, backend: "METAL", unified: true },
  "M1": { vram: 8, backend: "METAL", unified: true },
};

/**
 * Get GPU specs from model name
 * @param {string} gpuModel - GPU model name from dropdown
 * @returns {{vram: number, backend: string, unified?: boolean} | null}
 */
export function getGpuSpecs(gpuModel) {
  return GPU_MODELS[gpuModel] || null;
}

/**
 * Get all available GPU model names (for dropdown population)
 * @returns {string[]} Sorted GPU model names
 */
export function getAvailableGpus() {
  return Object.keys(GPU_MODELS).sort();
}
