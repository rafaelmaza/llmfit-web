/**
 * GPU Lookup Table
 * Maps common GPU models to their specifications (VRAM, backend)
 */

export const GPU_MODELS = {
  // NVIDIA - RTX 40-series
  "RTX 4090": { vram: 24, backend: "CUDA" },
  "RTX 4080 Super": { vram: 24, backend: "CUDA" },
  "RTX 4080": { vram: 16, backend: "CUDA" },
  "RTX 4070 Ti Super": { vram: 16, backend: "CUDA" },
  "RTX 4070 Ti": { vram: 12, backend: "CUDA" },
  "RTX 4070 Super": { vram: 12, backend: "CUDA" },
  "RTX 4070": { vram: 12, backend: "CUDA" },
  "RTX 4060 Ti": { vram: 16, backend: "CUDA" },
  "RTX 4060": { vram: 8, backend: "CUDA" },

  // NVIDIA - RTX 30-series
  "RTX 3090 Ti": { vram: 24, backend: "CUDA" },
  "RTX 3090": { vram: 24, backend: "CUDA" },
  "RTX 3080 Ti": { vram: 12, backend: "CUDA" },
  "RTX 3080": { vram: 10, backend: "CUDA" },
  "RTX 3070 Ti": { vram: 8, backend: "CUDA" },
  "RTX 3070": { vram: 8, backend: "CUDA" },
  "RTX 3060 Ti": { vram: 8, backend: "CUDA" },
  "RTX 3060": { vram: 12, backend: "CUDA" },

  // NVIDIA - A-series (data center)
  "A100": { vram: 80, backend: "CUDA" },
  "A100 (40GB)": { vram: 40, backend: "CUDA" },
  "A6000": { vram: 48, backend: "CUDA" },
  "A5000": { vram: 24, backend: "CUDA" },
  "A4000": { vram: 16, backend: "CUDA" },
  "A2000": { vram: 12, backend: "CUDA" },

  // NVIDIA - Tesla
  "T4": { vram: 16, backend: "CUDA" },
  "V100": { vram: 32, backend: "CUDA" },
  "V100 (16GB)": { vram: 16, backend: "CUDA" },
  "P100": { vram: 16, backend: "CUDA" },

  // AMD - RDNA 3
  "RX 7900 XTX": { vram: 24, backend: "ROCM" },
  "RX 7900 XT": { vram: 20, backend: "ROCM" },
  "RX 7800 XT": { vram: 16, backend: "ROCM" },
  "RX 7700 XT": { vram: 12, backend: "ROCM" },

  // AMD - RDNA 2
  "RX 6900 XT": { vram: 16, backend: "ROCM" },
  "RX 6800 XT": { vram: 16, backend: "ROCM" },
  "RX 6800": { vram: 16, backend: "ROCM" },
  "RX 6700 XT": { vram: 12, backend: "ROCM" },

  // AMD - MI300 (data center)
  "MI300X": { vram: 192, backend: "ROCM" },
  "MI300": { vram: 192, backend: "ROCM" },

  // AMD - MI200 (data center)
  "MI250X": { vram: 128, backend: "ROCM" },
  "MI250": { vram: 128, backend: "ROCM" },
  "MI210": { vram: 64, backend: "ROCM" },
  "MI100": { vram: 32, backend: "ROCM" },

  // Intel Arc
  "Arc A770": { vram: 16, backend: "SYCL" },
  "Arc A750": { vram: 8, backend: "SYCL" },
  "Arc A380": { vram: 6, backend: "SYCL" },

  // Apple Silicon
  "M4 Max": { vram: 40, backend: "METAL", unified: true },
  "M4 Pro": { vram: 18, backend: "METAL", unified: true },
  "M4": { vram: 10, backend: "METAL", unified: true },
  "M3 Max": { vram: 36, backend: "METAL", unified: true },
  "M3 Pro": { vram: 18, backend: "METAL", unified: true },
  "M3": { vram: 8, backend: "METAL", unified: true },
  "M2 Max": { vram: 32, backend: "METAL", unified: true },
  "M2 Pro": { vram: 16, backend: "METAL", unified: true },
  "M2": { vram: 8, backend: "METAL", unified: true },
  "M2 Ultra": { vram: 192, backend: "METAL", unified: true },
  "M1 Max": { vram: 32, backend: "METAL", unified: true },
  "M1 Pro": { vram: 16, backend: "METAL", unified: true },
  "M1": { vram: 8, backend: "METAL", unified: true },
  "M1 Ultra": { vram: 128, backend: "METAL", unified: true },
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
