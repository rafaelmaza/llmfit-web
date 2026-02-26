/**
 * LLM Model Database
 * 206 models from HuggingFace, embedded for browser use
 * 
 * Data extracted from llmfit: https://github.com/AlexsJones/llmfit
 * Last updated: 2026-02-26
 */

export const MODELS = [
  {
    "name": "zai-org/GLM-5",
    "provider": "zai-org",
    "paramsBillions": 753.864139008,
    "contextLength": 202752,
    "isMoE": true,
    "quantization": "Q4_K_M",
    "useCase": "General purpose text generation",
    "releaseDate": "2026-02-11"
  },
  {
    "name": "deepseek-ai/DeepSeek-V3.2",
    "provider": "DeepSeek",
    "paramsBillions": 685.396921376,
    "contextLength": 163840,
    "isMoE": true,
    "quantization": "Q4_K_M",
    "useCase": "General purpose text generation",
    "releaseDate": "2025-12-01"
  },
  {
    "name": "deepseek-ai/DeepSeek-V3",
    "provider": "DeepSeek",
    "paramsBillions": 685,
    "contextLength": 131072,
    "isMoE": true,
    "quantization": "Q4_K_M",
    "useCase": "State-of-the-art",
    "releaseDate": null
  },
  {
    "name": "deepseek-ai/DeepSeek-R1-0528",
    "provider": "DeepSeek",
    "paramsBillions": 684.531386,
    "contextLength": 163840,
    "isMoE": true,
    "quantization": "Q4_K_M",
    "useCase": "Advanced reasoning",
    "releaseDate": "2025-05-28"
  },
  {
    "name": "deepseek-ai/DeepSeek-V3-0324",
    "provider": "DeepSeek",
    "paramsBillions": 684.531386,
    "contextLength": 163840,
    "isMoE": true,
    "quantization": "Q4_K_M",
    "useCase": "General purpose text generation",
    "releaseDate": "2025-03-24"
  },
  {
    "name": "meta-llama/Llama-3.1-405B-Instruct",
    "provider": "Meta",
    "paramsBillions": 405.8533888,
    "contextLength": 4096,
    "isMoE": false,
    "quantization": "Q4_K_M",
    "useCase": "Instruction following",
    "releaseDate": "2024-07-16"
  },
  {
    "name": "nvidia/DeepSeek-R1-0528-NVFP4-v2",
    "provider": "nvidia",
    "paramsBillions": 393.632819968,
    "contextLength": 163840,
    "isMoE": true,
    "quantization": "Q4_K_M",
    "useCase": "Advanced reasoning",
    "releaseDate": "2025-07-21"
  },
  {
    "name": "baidu/ERNIE-4.5-300B-A47B-Paddle",
    "provider": "baidu",
    "paramsBillions": 300.474051776,
    "contextLength": 131072,
    "isMoE": true,
    "quantization": "Q4_K_M",
    "useCase": "General purpose text generation",
    "releaseDate": "2025-06-28"
  },
  {
    "name": "casperhansen/deepseek-coder-v2-instruct-awq",
    "provider": "casperhansen",
    "paramsBillions": 235.74143488,
    "contextLength": 163840,
    "isMoE": true,
    "quantization": "Q4_K_M",
    "useCase": "Code generation and completion",
    "releaseDate": "2024-07-03"
  },
  {
    "name": "Qwen/Qwen3-235B-A22B-Instruct-2507-FP8",
    "provider": "Alibaba",
    "paramsBillions": 235.107904512,
    "contextLength": 262144,
    "isMoE": true,
    "quantization": "Q4_K_M",
    "useCase": "Instruction following",
    "releaseDate": "2025-07-21"
  },
  {
    "name": "QuantTrio/MiniMax-M2-AWQ",
    "provider": "quanttrio",
    "paramsBillions": 228.689764864,
    "contextLength": 196608,
    "isMoE": true,
    "quantization": "Q4_K_M",
    "useCase": "Lightweight",
    "releaseDate": "2025-10-28"
  },
  {
    "name": "stepfun-ai/Step-3.5-Flash",
    "provider": "stepfun-ai",
    "paramsBillions": 199.384301376,
    "contextLength": 262144,
    "isMoE": false,
    "quantization": "Q4_K_M",
    "useCase": "General purpose text generation",
    "releaseDate": "2026-02-01"
  },
  {
    "name": "tiiuae/falcon-180B-chat",
    "provider": "TII",
    "paramsBillions": 179.52256512,
    "contextLength": 4096,
    "isMoE": false,
    "quantization": "Q4_K_M",
    "useCase": "Instruction following",
    "releaseDate": "2023-09-04"
  },
  {
    "name": "bigscience/bloom",
    "provider": "bigscience",
    "paramsBillions": 176.247271424,
    "contextLength": 4096,
    "isMoE": false,
    "quantization": "Q4_K_M",
    "useCase": "General purpose text generation",
    "releaseDate": "2022-05-19"
  },
  {
    "name": "rednote-hilab/dots.llm1.inst",
    "provider": "rednote-hilab",
    "paramsBillions": 142.774381696,
    "contextLength": 32768,
    "isMoE": false,
    "quantization": "Q4_K_M",
    "useCase": "General purpose text generation",
    "releaseDate": "2025-05-14"
  },
  {
    "name": "mistralai/Mixtral-8x22B-Instruct-v0.1",
    "provider": "Mistral AI",
    "paramsBillions": 140.630071296,
    "contextLength": 65536,
    "isMoE": true,
    "quantization": "Q4_K_M",
    "useCase": "Instruction following",
    "releaseDate": "2024-04-16"
  },
  {
    "name": "Qwen/Qwen1.5-110B-Chat-AWQ",
    "provider": "Alibaba",
    "paramsBillions": 111.209914368,
    "contextLength": 32768,
    "isMoE": false,
    "quantization": "Q4_K_M",
    "useCase": "Instruction following",
    "releaseDate": "2024-04-27"
  },
  {
    "name": "Qwen/Qwen3-Next-80B-A3B-Instruct-FP8",
    "provider": "Alibaba",
    "paramsBillions": 81.329784384,
    "contextLength": 262144,
    "isMoE": false,
    "quantization": "Q4_K_M",
    "useCase": "Instruction following",
    "releaseDate": "2025-09-22"
  },
  {
    "name": "Qwen/Qwen3-Next-80B-A3B-Instruct",
    "provider": "Alibaba",
    "paramsBillions": 81.32486272,
    "contextLength": 262144,
    "isMoE": false,
    "quantization": "Q4_K_M",
    "useCase": "Instruction following",
    "releaseDate": "2025-09-09"
  },
  {
    "name": "Qwen/Qwen3-Coder-Next-FP8",
    "provider": "Alibaba",
    "paramsBillions": 79.6792128,
    "contextLength": 262144,
    "isMoE": false,
    "quantization": "Q4_K_M",
    "useCase": "Code generation and completion",
    "releaseDate": "2026-02-01"
  },
  {
    "name": "Qwen/Qwen3-Coder-Next",
    "provider": "Alibaba",
    "paramsBillions": 79.674391296,
    "contextLength": 262144,
    "isMoE": false,
    "quantization": "Q4_K_M",
    "useCase": "Code generation and completion",
    "releaseDate": "2026-01-30"
  },
  {
    "name": "NexVeridian/Qwen3-Coder-Next-8bit",
    "provider": "nexveridian",
    "paramsBillions": 79.674388992,
    "contextLength": 262144,
    "isMoE": false,
    "quantization": "Q4_K_M",
    "useCase": "Code generation and completion",
    "releaseDate": "2026-02-03"
  },
  {
    "name": "Qwen/Qwen2.5-72B-Instruct-AWQ",
    "provider": "Alibaba",
    "paramsBillions": 72.957861888,
    "contextLength": 32768,
    "isMoE": false,
    "quantization": "Q4_K_M",
    "useCase": "Instruction following",
    "releaseDate": "2024-09-17"
  },
  {
    "name": "Qwen/Qwen2.5-72B-Instruct",
    "provider": "Alibaba",
    "paramsBillions": 72.706203648,
    "contextLength": 32768,
    "isMoE": false,
    "quantization": "Q4_K_M",
    "useCase": "Instruction following",
    "releaseDate": "2024-09-16"
  },
  {
    "name": "meta-llama/Llama-3.1-70B-Instruct",
    "provider": "Meta",
    "paramsBillions": 70.553706496,
    "contextLength": 4096,
    "isMoE": false,
    "quantization": "Q4_K_M",
    "useCase": "Instruction following",
    "releaseDate": "2024-07-16"
  },
  {
    "name": "meta-llama/Llama-3.3-70B-Instruct",
    "provider": "Meta",
    "paramsBillions": 70.553706496,
    "contextLength": 131072,
    "isMoE": false,
    "quantization": "Q4_K_M",
    "useCase": "Instruction following",
    "releaseDate": null
  },
  {
    "name": "casperhansen/llama-3.3-70b-instruct-awq",
    "provider": "casperhansen",
    "paramsBillions": 70.553706496,
    "contextLength": 131072,
    "isMoE": false,
    "quantization": "Q4_K_M",
    "useCase": "Instruction following",
    "releaseDate": "2024-12-06"
  },
  {
    "name": "kosbu/Llama-3.3-70B-Instruct-AWQ",
    "provider": "kosbu",
    "paramsBillions": 70.553706496,
    "contextLength": 131072,
    "isMoE": false,
    "quantization": "Q4_K_M",
    "useCase": "Instruction following",
    "releaseDate": "2024-12-06"
  },
  {
    "name": "NousResearch/Nous-Hermes-2-Mixtral-8x7B-DPO",
    "provider": "NousResearch",
    "paramsBillions": 46.702809088,
    "contextLength": 32768,
    "isMoE": true,
    "quantization": "Q4_K_M",
    "useCase": "General purpose text generation",
    "releaseDate": "2024-01-11"
  },
  {
    "name": "mistralai/Mixtral-8x7B-Instruct-v0.1",
    "provider": "Mistral AI",
    "paramsBillions": 46.702792704,
    "contextLength": 32768,
    "isMoE": true,
    "quantization": "Q4_K_M",
    "useCase": "Instruction following",
    "releaseDate": "2023-12-10"
  },
  {
    "name": "tiiuae/falcon-40b-instruct",
    "provider": "TII",
    "paramsBillions": 40,
    "contextLength": 2048,
    "isMoE": false,
    "quantization": "Q4_K_M",
    "useCase": "Instruction following",
    "releaseDate": null
  },
  {
    "name": "CohereForAI/c4ai-command-r-v01",
    "provider": "Cohere",
    "paramsBillions": 35,
    "contextLength": 131072,
    "isMoE": false,
    "quantization": "Q4_K_M",
    "useCase": "RAG",
    "releaseDate": null
  },
  {
    "name": "dphn/dolphin-2.9.1-yi-1.5-34b",
    "provider": "dphn",
    "paramsBillions": 34.388917248,
    "contextLength": 8192,
    "isMoE": false,
    "quantization": "Q4_K_M",
    "useCase": "General purpose text generation",
    "releaseDate": "2024-05-18"
  },
  {
    "name": "01-ai/Yi-34B-Chat",
    "provider": "01.ai",
    "paramsBillions": 34.38678016,
    "contextLength": 4096,
    "isMoE": false,
    "quantization": "Q4_K_M",
    "useCase": "Multilingual",
    "releaseDate": null
  },
  {
    "name": "meta-llama/CodeLlama-34b-Instruct-hf",
    "provider": "Meta",
    "paramsBillions": 33.743970304,
    "contextLength": 4096,
    "isMoE": false,
    "quantization": "Q4_K_M",
    "useCase": "Code generation and completion",
    "releaseDate": "2024-03-14"
  },
  {
    "name": "Qwen/Qwen2.5-Coder-32B-Instruct",
    "provider": "Alibaba",
    "paramsBillions": 32.763876352,
    "contextLength": 32768,
    "isMoE": false,
    "quantization": "Q4_K_M",
    "useCase": "Code generation and completion",
    "releaseDate": "2024-11-06"
  },
  {
    "name": "deepseek-ai/DeepSeek-R1-Distill-Qwen-32B",
    "provider": "DeepSeek",
    "paramsBillions": 32.763876352,
    "contextLength": 131072,
    "isMoE": false,
    "quantization": "Q4_K_M",
    "useCase": "Advanced reasoning",
    "releaseDate": "2025-01-20"
  },
  {
    "name": "Qwen/Qwen2.5-32B-Instruct-AWQ",
    "provider": "Alibaba",
    "paramsBillions": 32.763876352,
    "contextLength": 32768,
    "isMoE": false,
    "quantization": "Q4_K_M",
    "useCase": "Instruction following",
    "releaseDate": "2024-09-17"
  },
  {
    "name": "Qwen/Qwen2.5-Coder-32B-Instruct-AWQ",
    "provider": "Alibaba",
    "paramsBillions": 32.763876352,
    "contextLength": 32768,
    "isMoE": false,
    "quantization": "Q4_K_M",
    "useCase": "Code generation and completion",
    "releaseDate": "2024-11-09"
  },
  {
    "name": "Qwen/QwQ-32B-AWQ",
    "provider": "Alibaba",
    "paramsBillions": 32.763876352,
    "contextLength": 40960,
    "isMoE": false,
    "quantization": "Q4_K_M",
    "useCase": "General purpose text generation",
    "releaseDate": "2025-03-05"
  },
  {
    "name": "Qwen/Qwen2.5-32B-Instruct-GPTQ-Int4",
    "provider": "Alibaba",
    "paramsBillions": 32.763876352,
    "contextLength": 32768,
    "isMoE": false,
    "quantization": "Q4_K_M",
    "useCase": "Instruction following",
    "releaseDate": "2024-09-17"
  },
  {
    "name": "Qwen/Qwen2.5-32B",
    "provider": "Alibaba",
    "paramsBillions": 32.763876352,
    "contextLength": 131072,
    "isMoE": false,
    "quantization": "Q4_K_M",
    "useCase": "General purpose text generation",
    "releaseDate": "2024-09-15"
  },
  {
    "name": "Qwen/Qwen3-32B-AWQ",
    "provider": "Alibaba",
    "paramsBillions": 32.762123264,
    "contextLength": 40960,
    "isMoE": false,
    "quantization": "Q4_K_M",
    "useCase": "General purpose text generation",
    "releaseDate": "2025-05-01"
  },
  {
    "name": "Qwen/Qwen2.5-32B-Instruct",
    "provider": "Alibaba",
    "paramsBillions": 32.51,
    "contextLength": 131072,
    "isMoE": false,
    "quantization": "Q4_K_M",
    "useCase": "Instruction following",
    "releaseDate": null
  },
  {
    "name": "allenai/OLMo-2-0325-32B-Instruct",
    "provider": "allenai",
    "paramsBillions": 32.234279936,
    "contextLength": 4096,
    "isMoE": false,
    "quantization": "Q4_K_M",
    "useCase": "Instruction following",
    "releaseDate": "2025-03-12"
  },
  {
    "name": "LGAI-EXAONE/EXAONE-4.0.1-32B",
    "provider": "lgai-exaone",
    "paramsBillions": 32.003216384,
    "contextLength": 131072,
    "isMoE": false,
    "quantization": "Q4_K_M",
    "useCase": "General purpose text generation",
    "releaseDate": "2025-07-29"
  },
  {
    "name": "nvidia/NVIDIA-Nemotron-3-Nano-30B-A3B-FP8",
    "provider": "nvidia",
    "paramsBillions": 31.577946256,
    "contextLength": 262144,
    "isMoE": false,
    "quantization": "Q4_K_M",
    "useCase": "General purpose text generation",
    "releaseDate": "2025-12-06"
  },
  {
    "name": "nvidia/NVIDIA-Nemotron-3-Nano-30B-A3B-BF16",
    "provider": "nvidia",
    "paramsBillions": 31.577937344,
    "contextLength": 262144,
    "isMoE": false,
    "quantization": "Q4_K_M",
    "useCase": "General purpose text generation",
    "releaseDate": "2025-12-04"
  },
  {
    "name": "lmstudio-community/NVIDIA-Nemotron-3-Nano-30B-A3B-MLX-4bit",
    "provider": "lmstudio-community",
    "paramsBillions": 31.577935872,
    "contextLength": 262144,
    "isMoE": false,
    "quantization": "Q4_K_M",
    "useCase": "General purpose text generation",
    "releaseDate": "2025-12-16"
  },
  {
    "name": "lmstudio-community/NVIDIA-Nemotron-3-Nano-30B-A3B-MLX-8bit",
    "provider": "lmstudio-community",
    "paramsBillions": 31.577935872,
    "contextLength": 262144,
    "isMoE": false,
    "quantization": "Q4_K_M",
    "useCase": "General purpose text generation",
    "releaseDate": "2025-12-16"
  },
  {
    "name": "lmstudio-community/NVIDIA-Nemotron-3-Nano-30B-A3B-MLX-6bit",
    "provider": "lmstudio-community",
    "paramsBillions": 31.577935872,
    "contextLength": 262144,
    "isMoE": false,
    "quantization": "Q4_K_M",
    "useCase": "General purpose text generation",
    "releaseDate": "2025-12-16"
  },
  {
    "name": "lmstudio-community/NVIDIA-Nemotron-3-Nano-30B-A3B-MLX-5bit",
    "provider": "lmstudio-community",
    "paramsBillions": 31.577935872,
    "contextLength": 262144,
    "isMoE": false,
    "quantization": "Q4_K_M",
    "useCase": "General purpose text generation",
    "releaseDate": "2025-12-16"
  },
  {
    "name": "QuantTrio/GLM-4.7-Flash-AWQ",
    "provider": "quanttrio",
    "paramsBillions": 31.221488576,
    "contextLength": 202752,
    "isMoE": true,
    "quantization": "Q4_K_M",
    "useCase": "General purpose text generation",
    "releaseDate": "2026-01-21"
  },
  {
    "name": "QuantTrio/Qwen3-VL-30B-A3B-Instruct-AWQ",
    "provider": "quanttrio",
    "paramsBillions": 31.070754032,
    "contextLength": 4096,
    "isMoE": true,
    "quantization": "Q4_K_M",
    "useCase": "Instruction following",
    "releaseDate": "2025-10-04"
  },
  {
    "name": "Qwen/Qwen3-30B-A3B-Instruct-2507-FP8",
    "provider": "Alibaba",
    "paramsBillions": 30.533947392,
    "contextLength": 262144,
    "isMoE": true,
    "quantization": "Q4_K_M",
    "useCase": "Instruction following",
    "releaseDate": "2025-07-28"
  },
  {
    "name": "Qwen/Qwen3-Coder-30B-A3B-Instruct-FP8",
    "provider": "Alibaba",
    "paramsBillions": 30.533947392,
    "contextLength": 262144,
    "isMoE": true,
    "quantization": "Q4_K_M",
    "useCase": "Code generation and completion",
    "releaseDate": "2025-07-31"
  },
  {
    "name": "Qwen/Qwen3-30B-A3B-GPTQ-Int4",
    "provider": "Alibaba",
    "paramsBillions": 30.532122624,
    "contextLength": 40960,
    "isMoE": true,
    "quantization": "Q4_K_M",
    "useCase": "General purpose text generation",
    "releaseDate": "2025-05-05"
  },
  {
    "name": "lmstudio-community/Qwen3-Coder-30B-A3B-Instruct-MLX-4bit",
    "provider": "lmstudio-community",
    "paramsBillions": 30.532122624,
    "contextLength": 262144,
    "isMoE": true,
    "quantization": "Q4_K_M",
    "useCase": "Code generation and completion",
    "releaseDate": "2025-07-31"
  },
  {
    "name": "lmstudio-community/Qwen3-Coder-30B-A3B-Instruct-MLX-5bit",
    "provider": "lmstudio-community",
    "paramsBillions": 30.532122624,
    "contextLength": 262144,
    "isMoE": true,
    "quantization": "Q4_K_M",
    "useCase": "Code generation and completion",
    "releaseDate": "2025-08-01"
  },
  {
    "name": "lmstudio-community/Qwen3-Coder-30B-A3B-Instruct-MLX-8bit",
    "provider": "lmstudio-community",
    "paramsBillions": 30.532122624,
    "contextLength": 262144,
    "isMoE": true,
    "quantization": "Q4_K_M",
    "useCase": "Code generation and completion",
    "releaseDate": "2025-07-31"
  },
  {
    "name": "lmstudio-community/Qwen3-Coder-30B-A3B-Instruct-MLX-6bit",
    "provider": "lmstudio-community",
    "paramsBillions": 30.532122624,
    "contextLength": 262144,
    "isMoE": true,
    "quantization": "Q4_K_M",
    "useCase": "Code generation and completion",
    "releaseDate": "2025-07-31"
  },
  {
    "name": "lmstudio-community/GLM-4.7-Flash-MLX-8bit",
    "provider": "lmstudio-community",
    "paramsBillions": 29.94339392,
    "contextLength": 202752,
    "isMoE": true,
    "quantization": "Q4_K_M",
    "useCase": "General purpose text generation",
    "releaseDate": "2026-01-19"
  },
  {
    "name": "lmstudio-community/GLM-4.7-Flash-MLX-6bit",
    "provider": "lmstudio-community",
    "paramsBillions": 29.94339392,
    "contextLength": 202752,
    "isMoE": true,
    "quantization": "Q4_K_M",
    "useCase": "General purpose text generation",
    "releaseDate": "2026-01-19"
  },
  {
    "name": "google/gemma-2-27b-it",
    "provider": "Google",
    "paramsBillions": 27.22712832,
    "contextLength": 4096,
    "isMoE": false,
    "quantization": "Q4_K_M",
    "useCase": "General purpose text generation",
    "releaseDate": "2024-06-24"
  },
  {
    "name": "mistralai/Mistral-Small-24B-Instruct-2501",
    "provider": "Mistral AI",
    "paramsBillions": 24,
    "contextLength": 32768,
    "isMoE": false,
    "quantization": "Q4_K_M",
    "useCase": "Instruction following",
    "releaseDate": null
  },
  {
    "name": "cyankiwi/GLM-4.5-Air-AWQ-4bit",
    "provider": "cyankiwi",
    "paramsBillions": 18.626406504,
    "contextLength": 131072,
    "isMoE": true,
    "quantization": "Q4_K_M",
    "useCase": "General purpose text generation",
    "releaseDate": "2025-07-29"
  },
  {
    "name": "nvidia/NVIDIA-Nemotron-3-Nano-30B-A3B-NVFP4",
    "provider": "nvidia",
    "paramsBillions": 18.237772608,
    "contextLength": 262144,
    "isMoE": false,
    "quantization": "Q4_K_M",
    "useCase": "General purpose text generation",
    "releaseDate": "2025-12-20"
  },
  {
    "name": "inclusionAI/Ling-lite",
    "provider": "inclusionai",
    "paramsBillions": 16.801974272,
    "contextLength": 32768,
    "isMoE": true,
    "quantization": "Q4_K_M",
    "useCase": "General purpose text generation",
    "releaseDate": "2025-02-28"
  },
  {
    "name": "deepseek-ai/DeepSeek-V2-Lite-Chat",
    "provider": "DeepSeek",
    "paramsBillions": 15.706484224,
    "contextLength": 163840,
    "isMoE": true,
    "quantization": "Q4_K_M",
    "useCase": "Instruction following",
    "releaseDate": "2024-05-15"
  },
  {
    "name": "deepseek-ai/DeepSeek-V2-Lite",
    "provider": "DeepSeek",
    "paramsBillions": 15.706484224,
    "contextLength": 163840,
    "isMoE": true,
    "quantization": "Q4_K_M",
    "useCase": "General purpose text generation",
    "releaseDate": "2024-05-15"
  },
  {
    "name": "bigcode/starcoder2-15b",
    "provider": "BigCode",
    "paramsBillions": 15.7,
    "contextLength": 16384,
    "isMoE": false,
    "quantization": "Q4_K_M",
    "useCase": "Code generation and completion",
    "releaseDate": null
  },
  {
    "name": "deepseek-ai/DeepSeek-Coder-V2-Lite-Instruct",
    "provider": "DeepSeek",
    "paramsBillions": 15.7,
    "contextLength": 131072,
    "isMoE": true,
    "quantization": "Q4_K_M",
    "useCase": "Code generation and completion",
    "releaseDate": null
  },
  {
    "name": "WizardLMTeam/WizardCoder-15B-V1.0",
    "provider": "WizardLM",
    "paramsBillions": 15.515334656,
    "contextLength": 8192,
    "isMoE": false,
    "quantization": "Q4_K_M",
    "useCase": "Code generation and completion",
    "releaseDate": null
  },
  {
    "name": "Qwen/Qwen2.5-Coder-14B-Instruct",
    "provider": "Alibaba",
    "paramsBillions": 14.770033664,
    "contextLength": 32768,
    "isMoE": false,
    "quantization": "Q4_K_M",
    "useCase": "Code generation and completion",
    "releaseDate": "2024-11-06"
  },
  {
    "name": "Qwen/Qwen2.5-14B-Instruct-AWQ",
    "provider": "Alibaba",
    "paramsBillions": 14.770033664,
    "contextLength": 32768,
    "isMoE": false,
    "quantization": "Q4_K_M",
    "useCase": "Instruction following",
    "releaseDate": "2024-09-17"
  },
  {
    "name": "deepseek-ai/DeepSeek-R1-Distill-Qwen-14B",
    "provider": "DeepSeek",
    "paramsBillions": 14.770033664,
    "contextLength": 131072,
    "isMoE": false,
    "quantization": "Q4_K_M",
    "useCase": "Advanced reasoning",
    "releaseDate": "2025-01-20"
  },
  {
    "name": "Qwen/Qwen2.5-Coder-14B-Instruct-AWQ",
    "provider": "Alibaba",
    "paramsBillions": 14.770033664,
    "contextLength": 32768,
    "isMoE": false,
    "quantization": "Q4_K_M",
    "useCase": "Code generation and completion",
    "releaseDate": "2024-11-09"
  },
  {
    "name": "Qwen/Qwen2.5-14B-Instruct",
    "provider": "Alibaba",
    "paramsBillions": 14.77,
    "contextLength": 131072,
    "isMoE": false,
    "quantization": "Q4_K_M",
    "useCase": "Instruction following",
    "releaseDate": null
  },
  {
    "name": "Qwen/Qwen3-14B",
    "provider": "Alibaba",
    "paramsBillions": 14.77,
    "contextLength": 131072,
    "isMoE": false,
    "quantization": "Q4_K_M",
    "useCase": "General purpose text generation",
    "releaseDate": null
  },
  {
    "name": "Qwen/Qwen3-14B-AWQ",
    "provider": "Alibaba",
    "paramsBillions": 14.7683072,
    "contextLength": 40960,
    "isMoE": false,
    "quantization": "Q4_K_M",
    "useCase": "General purpose text generation",
    "releaseDate": "2025-05-01"
  },
  {
    "name": "OpenPipe/Qwen3-14B-Instruct",
    "provider": "openpipe",
    "paramsBillions": 14.7683072,
    "contextLength": 40960,
    "isMoE": false,
    "quantization": "Q4_K_M",
    "useCase": "Instruction following",
    "releaseDate": "2025-10-10"
  },
  {
    "name": "cyankiwi/Qwen3-Next-80B-A3B-Thinking-AWQ-4bit",
    "provider": "cyankiwi",
    "paramsBillions": 14.736242944,
    "contextLength": 262144,
    "isMoE": false,
    "quantization": "Q4_K_M",
    "useCase": "General purpose text generation",
    "releaseDate": "2025-09-12"
  },
  {
    "name": "bullpoint/Qwen3-Coder-Next-AWQ-4bit",
    "provider": "bullpoint",
    "paramsBillions": 14.444722944,
    "contextLength": 262144,
    "isMoE": false,
    "quantization": "Q4_K_M",
    "useCase": "Code generation and completion",
    "releaseDate": "2026-02-03"
  },
  {
    "name": "microsoft/phi-4",
    "provider": "Microsoft",
    "paramsBillions": 14,
    "contextLength": 16384,
    "isMoE": false,
    "quantization": "Q4_K_M",
    "useCase": "Reasoning",
    "releaseDate": null
  },
  {
    "name": "microsoft/Phi-3-medium-14b-instruct",
    "provider": "Microsoft",
    "paramsBillions": 14,
    "contextLength": 4096,
    "isMoE": false,
    "quantization": "Q4_K_M",
    "useCase": "Balanced performance and size",
    "releaseDate": null
  },
  {
    "name": "meta-llama/CodeLlama-13b-Instruct-hf",
    "provider": "Meta",
    "paramsBillions": 13.01602816,
    "contextLength": 4096,
    "isMoE": false,
    "quantization": "Q4_K_M",
    "useCase": "Code generation and completion",
    "releaseDate": "2024-03-13"
  },
  {
    "name": "microsoft/Orca-2-13b",
    "provider": "Microsoft",
    "paramsBillions": 13.01586432,
    "contextLength": 4096,
    "isMoE": false,
    "quantization": "Q4_K_M",
    "useCase": "Reasoning",
    "releaseDate": null
  },
  {
    "name": "lmsys/vicuna-13b-v1.5",
    "provider": "LMSYS",
    "paramsBillions": 13.01586432,
    "contextLength": 4096,
    "isMoE": false,
    "quantization": "Q4_K_M",
    "useCase": "Instruction following",
    "releaseDate": null
  },
  {
    "name": "WizardLMTeam/WizardLM-13B-V1.2",
    "provider": "WizardLM",
    "paramsBillions": 13.01586432,
    "contextLength": 4096,
    "isMoE": false,
    "quantization": "Q4_K_M",
    "useCase": "Instruction following",
    "releaseDate": null
  },
  {
    "name": "casperhansen/mistral-nemo-instruct-2407-awq",
    "provider": "casperhansen",
    "paramsBillions": 12.2477824,
    "contextLength": 1024000,
    "isMoE": false,
    "quantization": "Q4_K_M",
    "useCase": "Instruction following",
    "releaseDate": "2024-07-23"
  },
  {
    "name": "mistralai/Mistral-Nemo-Instruct-2407",
    "provider": "Mistral AI",
    "paramsBillions": 12.247076864,
    "contextLength": 131072,
    "isMoE": false,
    "quantization": "Q4_K_M",
    "useCase": "Instruction following",
    "releaseDate": null
  },
  {
    "name": "google/gemma-3-12b-it",
    "provider": "Google",
    "paramsBillions": 12,
    "contextLength": 131072,
    "isMoE": false,
    "quantization": "Q4_K_M",
    "useCase": "Multimodal",
    "releaseDate": null
  },
  {
    "name": "speakleash/Bielik-11B-v3.0-Instruct",
    "provider": "speakleash",
    "paramsBillions": 11.168796672,
    "contextLength": 4096,
    "isMoE": false,
    "quantization": "Q4_K_M",
    "useCase": "Instruction following",
    "releaseDate": "2025-11-07"
  },
  {
    "name": "upstage/SOLAR-10.7B-Instruct-v1.0",
    "provider": "Upstage",
    "paramsBillions": 10.7,
    "contextLength": 4096,
    "isMoE": false,
    "quantization": "Q4_K_M",
    "useCase": "High-performance instruction following",
    "releaseDate": null
  },
  {
    "name": "meta-llama/Llama-3.2-11B-Vision-Instruct",
    "provider": "Meta",
    "paramsBillions": 10.665463808,
    "contextLength": 131072,
    "isMoE": false,
    "quantization": "Q4_K_M",
    "useCase": "Multimodal",
    "releaseDate": null
  },
  {
    "name": "THUDM/glm-4-9b-chat",
    "provider": "thudm",
    "paramsBillions": 9.399951392,
    "contextLength": 131072,
    "isMoE": false,
    "quantization": "Q4_K_M",
    "useCase": "Instruction following",
    "releaseDate": "2024-06-04"
  },
  {
    "name": "google/gemma-2-9b-it",
    "provider": "Google",
    "paramsBillions": 9.241705984,
    "contextLength": 4096,
    "isMoE": false,
    "quantization": "Q4_K_M",
    "useCase": "General purpose text generation",
    "releaseDate": "2024-06-24"
  },
  {
    "name": "nvidia/NVIDIA-Nemotron-Nano-9B-v2-Base",
    "provider": "nvidia",
    "paramsBillions": 8.888227328,
    "contextLength": 131072,
    "isMoE": false,
    "quantization": "Q4_K_M",
    "useCase": "General purpose text generation",
    "releaseDate": "2025-08-14"
  },
  {
    "name": "Qwen/Qwen2.5-VL-7B-Instruct",
    "provider": "Alibaba",
    "paramsBillions": 8.29,
    "contextLength": 32768,
    "isMoE": false,
    "quantization": "Q4_K_M",
    "useCase": "Multimodal",
    "releaseDate": null
  },
  {
    "name": "Qwen/Qwen3-8B-FP8",
    "provider": "Alibaba",
    "paramsBillions": 8.191159296,
    "contextLength": 40960,
    "isMoE": false,
    "quantization": "Q4_K_M",
    "useCase": "General purpose text generation",
    "releaseDate": "2025-04-28"
  },
  {
    "name": "Qwen/Qwen3-8B-Base",
    "provider": "Alibaba",
    "paramsBillions": 8.19073536,
    "contextLength": 32768,
    "isMoE": false,
    "quantization": "Q4_K_M",
    "useCase": "General purpose text generation",
    "releaseDate": "2025-04-28"
  },
  {
    "name": "Qwen/Qwen3-8B-AWQ",
    "provider": "Alibaba",
    "paramsBillions": 8.19073536,
    "contextLength": 40960,
    "isMoE": false,
    "quantization": "Q4_K_M",
    "useCase": "General purpose text generation",
    "releaseDate": "2025-05-03"
  },
  {
    "name": "deepseek-ai/DeepSeek-R1-0528-Qwen3-8B",
    "provider": "DeepSeek",
    "paramsBillions": 8.19073536,
    "contextLength": 131072,
    "isMoE": false,
    "quantization": "Q4_K_M",
    "useCase": "Advanced reasoning",
    "releaseDate": "2025-05-29"
  },
  {
    "name": "RedHatAI/Meta-Llama-3.1-8B-Instruct-FP8",
    "provider": "redhatai",
    "paramsBillions": 8.030261696,
    "contextLength": 131072,
    "isMoE": false,
    "quantization": "Q4_K_M",
    "useCase": "Instruction following",
    "releaseDate": "2024-07-23"
  },
  {
    "name": "RedHatAI/Meta-Llama-3.1-8B-FP8",
    "provider": "redhatai",
    "paramsBillions": 8.030261696,
    "contextLength": 131072,
    "isMoE": false,
    "quantization": "Q4_K_M",
    "useCase": "General purpose text generation",
    "releaseDate": "2024-07-31"
  },
  {
    "name": "mistralai/Ministral-8B-Instruct-2410",
    "provider": "Mistral AI",
    "paramsBillions": 8.030261248,
    "contextLength": 32768,
    "isMoE": false,
    "quantization": "Q4_K_M",
    "useCase": "Instruction following",
    "releaseDate": null
  },
  {
    "name": "meta-llama/Meta-Llama-3-8B",
    "provider": "Meta",
    "paramsBillions": 8.030261248,
    "contextLength": 4096,
    "isMoE": false,
    "quantization": "Q4_K_M",
    "useCase": "General purpose text generation",
    "releaseDate": "2024-04-17"
  },
  {
    "name": "meta-llama/Meta-Llama-3-8B-Instruct",
    "provider": "Meta",
    "paramsBillions": 8.030261248,
    "contextLength": 4096,
    "isMoE": false,
    "quantization": "Q4_K_M",
    "useCase": "Instruction following",
    "releaseDate": "2024-04-17"
  },
  {
    "name": "NousResearch/Hermes-3-Llama-3.1-8B",
    "provider": "NousResearch",
    "paramsBillions": 8.030261248,
    "contextLength": 131072,
    "isMoE": false,
    "quantization": "Q4_K_M",
    "useCase": "General purpose text generation",
    "releaseDate": "2024-07-28"
  },
  {
    "name": "IlyaGusev/saiga_llama3_8b",
    "provider": "ilyagusev",
    "paramsBillions": 8.030261248,
    "contextLength": 8192,
    "isMoE": false,
    "quantization": "Q4_K_M",
    "useCase": "General purpose text generation",
    "releaseDate": "2024-04-18"
  },
  {
    "name": "NousResearch/Meta-Llama-3.1-8B-Instruct",
    "provider": "NousResearch",
    "paramsBillions": 8.030261248,
    "contextLength": 131072,
    "isMoE": false,
    "quantization": "Q4_K_M",
    "useCase": "Instruction following",
    "releaseDate": "2024-07-24"
  },
  {
    "name": "Qwen/Qwen-7B-Chat",
    "provider": "Alibaba",
    "paramsBillions": 7.721324544,
    "contextLength": 32768,
    "isMoE": false,
    "quantization": "Q4_K_M",
    "useCase": "Instruction following",
    "releaseDate": "2023-08-03"
  },
  {
    "name": "Qwen/Qwen-7B",
    "provider": "Alibaba",
    "paramsBillions": 7.721324544,
    "contextLength": 32768,
    "isMoE": false,
    "quantization": "Q4_K_M",
    "useCase": "General purpose text generation",
    "releaseDate": "2023-08-03"
  },
  {
    "name": "Qwen/Qwen2.5-7B-Instruct",
    "provider": "Alibaba",
    "paramsBillions": 7.615616512,
    "contextLength": 32768,
    "isMoE": false,
    "quantization": "Q4_K_M",
    "useCase": "Instruction following",
    "releaseDate": "2024-09-16"
  },
  {
    "name": "Qwen/Qwen2.5-Coder-7B-Instruct",
    "provider": "Alibaba",
    "paramsBillions": 7.615616512,
    "contextLength": 32768,
    "isMoE": false,
    "quantization": "Q4_K_M",
    "useCase": "Code generation and completion",
    "releaseDate": "2024-09-17"
  },
  {
    "name": "deepseek-ai/DeepSeek-R1-Distill-Qwen-7B",
    "provider": "DeepSeek",
    "paramsBillions": 7.615616512,
    "contextLength": 131072,
    "isMoE": false,
    "quantization": "Q4_K_M",
    "useCase": "Advanced reasoning",
    "releaseDate": "2025-01-20"
  },
  {
    "name": "Qwen/Qwen2.5-7B",
    "provider": "Alibaba",
    "paramsBillions": 7.615616512,
    "contextLength": 131072,
    "isMoE": false,
    "quantization": "Q4_K_M",
    "useCase": "General purpose text generation",
    "releaseDate": "2024-09-15"
  },
  {
    "name": "Qwen/Qwen2.5-Coder-7B-Instruct-AWQ",
    "provider": "Alibaba",
    "paramsBillions": 7.615616512,
    "contextLength": 32768,
    "isMoE": false,
    "quantization": "Q4_K_M",
    "useCase": "Code generation and completion",
    "releaseDate": "2024-09-20"
  },
  {
    "name": "Qwen/Qwen2.5-Coder-7B-Instruct-GPTQ-Int4",
    "provider": "Alibaba",
    "paramsBillions": 7.615616512,
    "contextLength": 32768,
    "isMoE": false,
    "quantization": "Q4_K_M",
    "useCase": "Code generation and completion",
    "releaseDate": "2024-09-20"
  },
  {
    "name": "Qwen/Qwen2.5-Math-7B-Instruct",
    "provider": "Alibaba",
    "paramsBillions": 7.615616512,
    "contextLength": 4096,
    "isMoE": false,
    "quantization": "Q4_K_M",
    "useCase": "Instruction following",
    "releaseDate": "2024-09-19"
  },
  {
    "name": "Qwen/Qwen2.5-Coder-7B",
    "provider": "Alibaba",
    "paramsBillions": 7.615616512,
    "contextLength": 32768,
    "isMoE": false,
    "quantization": "Q4_K_M",
    "useCase": "Code generation and completion",
    "releaseDate": "2024-09-16"
  },
  {
    "name": "Qwen/Qwen2-7B-Instruct",
    "provider": "Alibaba",
    "paramsBillions": 7.615616512,
    "contextLength": 32768,
    "isMoE": false,
    "quantization": "Q4_K_M",
    "useCase": "Instruction following",
    "releaseDate": "2024-06-04"
  },
  {
    "name": "Qwen/Qwen2.5-7B-Instruct-GPTQ-Int4",
    "provider": "Alibaba",
    "paramsBillions": 7.615616512,
    "contextLength": 32768,
    "isMoE": false,
    "quantization": "Q4_K_M",
    "useCase": "Instruction following",
    "releaseDate": "2024-09-17"
  },
  {
    "name": "tiiuae/Falcon3-7B-Instruct",
    "provider": "TII",
    "paramsBillions": 7.455550464,
    "contextLength": 32768,
    "isMoE": false,
    "quantization": "Q4_K_M",
    "useCase": "Instruction following",
    "releaseDate": "2024-11-29"
  },
  {
    "name": "mistralai/Mistral-7B-Instruct-v0.3",
    "provider": "Mistral AI",
    "paramsBillions": 7.248023552,
    "contextLength": 32768,
    "isMoE": false,
    "quantization": "Q4_K_M",
    "useCase": "Instruction following",
    "releaseDate": "2024-05-22"
  },
  {
    "name": "HuggingFaceH4/zephyr-7b-beta",
    "provider": "HuggingFace",
    "paramsBillions": 7.241732096,
    "contextLength": 32768,
    "isMoE": false,
    "quantization": "Q4_K_M",
    "useCase": "General purpose text generation",
    "releaseDate": "2023-10-26"
  },
  {
    "name": "mistralai/Mistral-7B-Instruct-v0.2",
    "provider": "Mistral AI",
    "paramsBillions": 7.241732096,
    "contextLength": 32768,
    "isMoE": false,
    "quantization": "Q4_K_M",
    "useCase": "Instruction following",
    "releaseDate": "2023-12-11"
  },
  {
    "name": "tiiuae/falcon-7b-instruct",
    "provider": "TII",
    "paramsBillions": 7.21718976,
    "contextLength": 4096,
    "isMoE": false,
    "quantization": "Q4_K_M",
    "useCase": "Instruction following",
    "releaseDate": "2023-04-25"
  },
  {
    "name": "bigcode/starcoder2-7b",
    "provider": "BigCode",
    "paramsBillions": 7.17392384,
    "contextLength": 16384,
    "isMoE": false,
    "quantization": "Q4_K_M",
    "useCase": "Code generation and completion",
    "releaseDate": "2024-02-20"
  },
  {
    "name": "microsoft/Orca-2-7b",
    "provider": "Microsoft",
    "paramsBillions": 7.016400896,
    "contextLength": 4096,
    "isMoE": false,
    "quantization": "Q4_K_M",
    "useCase": "Reasoning",
    "releaseDate": null
  },
  {
    "name": "openchat/openchat-3.5-0106",
    "provider": "OpenChat",
    "paramsBillions": 7,
    "contextLength": 8192,
    "isMoE": false,
    "quantization": "Q4_K_M",
    "useCase": "Instruction following",
    "releaseDate": null
  },
  {
    "name": "meta-llama/CodeLlama-7b-Instruct-hf",
    "provider": "Meta",
    "paramsBillions": 6.738546688,
    "contextLength": 4096,
    "isMoE": false,
    "quantization": "Q4_K_M",
    "useCase": "Code generation and completion",
    "releaseDate": "2024-03-13"
  },
  {
    "name": "meta-llama/Llama-2-7b-hf",
    "provider": "Meta",
    "paramsBillions": 6.738417664,
    "contextLength": 4096,
    "isMoE": false,
    "quantization": "Q4_K_M",
    "useCase": "General purpose text generation",
    "releaseDate": "2023-07-13"
  },
  {
    "name": "lmsys/vicuna-7b-v1.5",
    "provider": "LMSYS",
    "paramsBillions": 6.738415616,
    "contextLength": 4096,
    "isMoE": false,
    "quantization": "Q4_K_M",
    "useCase": "Instruction following",
    "releaseDate": null
  },
  {
    "name": "cyankiwi/GLM-4.7-Flash-AWQ-4bit",
    "provider": "cyankiwi",
    "paramsBillions": 6.407095318,
    "contextLength": 202752,
    "isMoE": true,
    "quantization": "Q4_K_M",
    "useCase": "General purpose text generation",
    "releaseDate": "2026-01-19"
  },
  {
    "name": "01-ai/Yi-6B-Chat",
    "provider": "01.ai",
    "paramsBillions": 6.06103552,
    "contextLength": 4096,
    "isMoE": false,
    "quantization": "Q4_K_M",
    "useCase": "Instruction following",
    "releaseDate": "2023-11-22"
  },
  {
    "name": "cyankiwi/Qwen3-30B-A3B-Instruct-2507-AWQ-4bit",
    "provider": "cyankiwi",
    "paramsBillions": 5.30656704,
    "contextLength": 262144,
    "isMoE": true,
    "quantization": "Q4_K_M",
    "useCase": "Instruction following",
    "releaseDate": "2025-07-29"
  },
  {
    "name": "XLabs-AI/xflux_text_encoders",
    "provider": "xlabs-ai",
    "paramsBillions": 4.762310656,
    "contextLength": 4096,
    "isMoE": false,
    "quantization": "Q4_K_M",
    "useCase": "Code generation and completion",
    "releaseDate": "2024-08-11"
  },
  {
    "name": "Qwen/Qwen3-4B-Instruct-2507-FP8",
    "provider": "Alibaba",
    "paramsBillions": 4.411646016,
    "contextLength": 262144,
    "isMoE": false,
    "quantization": "Q4_K_M",
    "useCase": "Instruction following",
    "releaseDate": "2025-08-06"
  },
  {
    "name": "Qwen/Qwen3-4B-FP8",
    "provider": "Alibaba",
    "paramsBillions": 4.411646016,
    "contextLength": 40960,
    "isMoE": false,
    "quantization": "Q4_K_M",
    "useCase": "General purpose text generation",
    "releaseDate": "2025-04-28"
  },
  {
    "name": "Qwen/Qwen3-4B-Base",
    "provider": "Alibaba",
    "paramsBillions": 4.022468096,
    "contextLength": 32768,
    "isMoE": false,
    "quantization": "Q4_K_M",
    "useCase": "General purpose text generation",
    "releaseDate": "2025-04-28"
  },
  {
    "name": "Qwen/Qwen3-4B-AWQ",
    "provider": "Alibaba",
    "paramsBillions": 4.022468096,
    "contextLength": 40960,
    "isMoE": false,
    "quantization": "Q4_K_M",
    "useCase": "General purpose text generation",
    "releaseDate": "2025-05-05"
  },
  {
    "name": "Nanbeige/Nanbeige4.1-3B",
    "provider": "nanbeige",
    "paramsBillions": 3.93363712,
    "contextLength": 262144,
    "isMoE": false,
    "quantization": "Q4_K_M",
    "useCase": "General purpose text generation",
    "releaseDate": "2026-02-10"
  },
  {
    "name": "kaitchup/Phi-3-mini-4k-instruct-gptq-4bit",
    "provider": "kaitchup",
    "paramsBillions": 3.82209536,
    "contextLength": 4096,
    "isMoE": false,
    "quantization": "Q4_K_M",
    "useCase": "Instruction following",
    "releaseDate": "2024-04-25"
  },
  {
    "name": "microsoft/phi-3-mini-4k-instruct",
    "provider": "Microsoft",
    "paramsBillions": 3.821,
    "contextLength": 4096,
    "isMoE": false,
    "quantization": "Q4_K_M",
    "useCase": "Lightweight",
    "releaseDate": null
  },
  {
    "name": "microsoft/Phi-3.5-mini-instruct",
    "provider": "Microsoft",
    "paramsBillions": 3.821,
    "contextLength": 131072,
    "isMoE": false,
    "quantization": "Q4_K_M",
    "useCase": "Lightweight",
    "releaseDate": null
  },
  {
    "name": "llm-jp/llm-jp-3-3.7b-instruct",
    "provider": "llm-jp",
    "paramsBillions": 3.782913024,
    "contextLength": 4096,
    "isMoE": false,
    "quantization": "Q4_K_M",
    "useCase": "Instruction following",
    "releaseDate": "2024-09-23"
  },
  {
    "name": "microsoft/Phi-tiny-MoE-instruct",
    "provider": "Microsoft",
    "paramsBillions": 3.755220288,
    "contextLength": 4096,
    "isMoE": true,
    "quantization": "Q4_K_M",
    "useCase": "Instruction following",
    "releaseDate": "2025-06-23"
  },
  {
    "name": "Qwen/Qwen2.5-VL-3B-Instruct",
    "provider": "Alibaba",
    "paramsBillions": 3.754622976,
    "contextLength": 128000,
    "isMoE": false,
    "quantization": "Q4_K_M",
    "useCase": "Instruction following",
    "releaseDate": "2025-01-26"
  },
  {
    "name": "ibm-granite/granite-3b-code-base-2k",
    "provider": "ibm-granite",
    "paramsBillions": 3.48250368,
    "contextLength": 2048,
    "isMoE": false,
    "quantization": "Q4_K_M",
    "useCase": "Code generation and completion",
    "releaseDate": "2024-04-23"
  },
  {
    "name": "ibm-research/PowerMoE-3b",
    "provider": "ibm-research",
    "paramsBillions": 3.374286336,
    "contextLength": 4096,
    "isMoE": true,
    "quantization": "Q4_K_M",
    "useCase": "General purpose text generation",
    "releaseDate": "2024-08-14"
  },
  {
    "name": "meta-llama/Llama-3.2-3B",
    "provider": "Meta",
    "paramsBillions": 3.212749824,
    "contextLength": 4096,
    "isMoE": false,
    "quantization": "Q4_K_M",
    "useCase": "General purpose text generation",
    "releaseDate": "2024-09-18"
  },
  {
    "name": "Qwen/Qwen2.5-3B-Instruct",
    "provider": "Alibaba",
    "paramsBillions": 3.085938688,
    "contextLength": 32768,
    "isMoE": false,
    "quantization": "Q4_K_M",
    "useCase": "Instruction following",
    "releaseDate": "2024-09-17"
  },
  {
    "name": "Qwen/Qwen2.5-3B",
    "provider": "Alibaba",
    "paramsBillions": 3.085938688,
    "contextLength": 32768,
    "isMoE": false,
    "quantization": "Q4_K_M",
    "useCase": "General purpose text generation",
    "releaseDate": "2024-09-15"
  },
  {
    "name": "Qwen/Qwen2.5-Coder-3B-Instruct",
    "provider": "Alibaba",
    "paramsBillions": 3.085938688,
    "contextLength": 32768,
    "isMoE": false,
    "quantization": "Q4_K_M",
    "useCase": "Code generation and completion",
    "releaseDate": "2024-11-06"
  },
  {
    "name": "microsoft/phi-2",
    "provider": "Microsoft",
    "paramsBillions": 2.77968384,
    "contextLength": 2048,
    "isMoE": false,
    "quantization": "Q4_K_M",
    "useCase": "General purpose text generation",
    "releaseDate": "2023-12-13"
  },
  {
    "name": "google/gemma-2-2b-it",
    "provider": "Google",
    "paramsBillions": 2.614341376,
    "contextLength": 8192,
    "isMoE": false,
    "quantization": "Q4_K_M",
    "useCase": "Lightweight",
    "releaseDate": null
  },
  {
    "name": "lmstudio-community/DeepSeek-R1-0528-Qwen3-8B-MLX-8bit",
    "provider": "lmstudio-community",
    "paramsBillions": 2.303865856,
    "contextLength": 131072,
    "isMoE": false,
    "quantization": "Q4_K_M",
    "useCase": "Advanced reasoning",
    "releaseDate": "2025-05-29"
  },
  {
    "name": "h2oai/h2ovl-mississippi-2b",
    "provider": "h2oai",
    "paramsBillions": 2.15231744,
    "contextLength": 4096,
    "isMoE": false,
    "quantization": "Q4_K_M",
    "useCase": "General purpose text generation",
    "releaseDate": "2024-10-15"
  },
  {
    "name": "RedHatAI/Qwen2.5-1.5B-quantized.w8a8",
    "provider": "redhatai",
    "paramsBillions": 1.77773312,
    "contextLength": 32768,
    "isMoE": false,
    "quantization": "Q4_K_M",
    "useCase": "General purpose text generation",
    "releaseDate": "2024-10-09"
  },
  {
    "name": "Qwen/Qwen2.5-1.5B-Instruct-AWQ",
    "provider": "Alibaba",
    "paramsBillions": 1.777088,
    "contextLength": 32768,
    "isMoE": false,
    "quantization": "Q4_K_M",
    "useCase": "Instruction following",
    "releaseDate": "2024-09-17"
  },
  {
    "name": "Qwen/Qwen2.5-Coder-1.5B-Instruct-AWQ",
    "provider": "Alibaba",
    "paramsBillions": 1.777088,
    "contextLength": 32768,
    "isMoE": false,
    "quantization": "Q4_K_M",
    "useCase": "Code generation and completion",
    "releaseDate": "2024-09-20"
  },
  {
    "name": "Qwen/Qwen3-1.7B-Base",
    "provider": "Alibaba",
    "paramsBillions": 1.720574976,
    "contextLength": 32768,
    "isMoE": false,
    "quantization": "Q4_K_M",
    "useCase": "General purpose text generation",
    "releaseDate": "2025-04-28"
  },
  {
    "name": "stabilityai/stablelm-2-1_6b-chat",
    "provider": "Stability AI",
    "paramsBillions": 1.644515328,
    "contextLength": 4096,
    "isMoE": false,
    "quantization": "Q4_K_M",
    "useCase": "Instruction following",
    "releaseDate": "2024-04-08"
  },
  {
    "name": "Qwen/Qwen2.5-Coder-1.5B-Instruct",
    "provider": "Alibaba",
    "paramsBillions": 1.543714304,
    "contextLength": 32768,
    "isMoE": false,
    "quantization": "Q4_K_M",
    "useCase": "Code generation and completion",
    "releaseDate": "2024-09-18"
  },
  {
    "name": "Qwen/Qwen2.5-1.5B-Instruct",
    "provider": "Alibaba",
    "paramsBillions": 1.543714304,
    "contextLength": 32768,
    "isMoE": false,
    "quantization": "Q4_K_M",
    "useCase": "Instruction following",
    "releaseDate": "2024-09-17"
  },
  {
    "name": "Qwen/Qwen2-1.5B-Instruct",
    "provider": "Alibaba",
    "paramsBillions": 1.543714304,
    "contextLength": 32768,
    "isMoE": false,
    "quantization": "Q4_K_M",
    "useCase": "Instruction following",
    "releaseDate": "2024-06-03"
  },
  {
    "name": "Qwen/Qwen2.5-Math-1.5B",
    "provider": "Alibaba",
    "paramsBillions": 1.543714304,
    "contextLength": 4096,
    "isMoE": false,
    "quantization": "Q4_K_M",
    "useCase": "General purpose text generation",
    "releaseDate": "2024-09-16"
  },
  {
    "name": "Qwen/Qwen2.5-1.5B",
    "provider": "Alibaba",
    "paramsBillions": 1.543714304,
    "contextLength": 131072,
    "isMoE": false,
    "quantization": "Q4_K_M",
    "useCase": "General purpose text generation",
    "releaseDate": "2024-09-15"
  },
  {
    "name": "RedHatAI/Llama-3.2-1B-Instruct-FP8-dynamic",
    "provider": "redhatai",
    "paramsBillions": 1.49885952,
    "contextLength": 131072,
    "isMoE": false,
    "quantization": "Q4_K_M",
    "useCase": "Instruction following",
    "releaseDate": "2024-09-25"
  },
  {
    "name": "RedHatAI/Llama-3.2-1B-Instruct-FP8",
    "provider": "redhatai",
    "paramsBillions": 1.498482912,
    "contextLength": 131072,
    "isMoE": false,
    "quantization": "Q4_K_M",
    "useCase": "Instruction following",
    "releaseDate": "2024-09-26"
  },
  {
    "name": "allenai/OLMo-2-0425-1B",
    "provider": "allenai",
    "paramsBillions": 1.484916736,
    "contextLength": 4096,
    "isMoE": false,
    "quantization": "Q4_K_M",
    "useCase": "General purpose text generation",
    "releaseDate": "2025-04-17"
  },
  {
    "name": "lmstudio-community/DeepSeek-R1-0528-Qwen3-8B-MLX-4bit",
    "provider": "lmstudio-community",
    "paramsBillions": 1.280062464,
    "contextLength": 131072,
    "isMoE": false,
    "quantization": "Q4_K_M",
    "useCase": "Advanced reasoning",
    "releaseDate": "2025-05-29"
  },
  {
    "name": "meta-llama/Llama-3.2-1B",
    "provider": "Meta",
    "paramsBillions": 1.2358144,
    "contextLength": 4096,
    "isMoE": false,
    "quantization": "Q4_K_M",
    "useCase": "General purpose text generation",
    "releaseDate": "2024-09-18"
  },
  {
    "name": "TinyLlama/TinyLlama-1.1B-Chat-v1.0",
    "provider": "Community",
    "paramsBillions": 1.100048384,
    "contextLength": 2048,
    "isMoE": false,
    "quantization": "Q4_K_M",
    "useCase": "Instruction following",
    "releaseDate": "2023-12-30"
  },
  {
    "name": "Joaoffg/ELM",
    "provider": "joaoffg",
    "paramsBillions": 0.90289152,
    "contextLength": 2048,
    "isMoE": false,
    "quantization": "Q4_K_M",
    "useCase": "General purpose text generation",
    "releaseDate": "2024-05-29"
  },
  {
    "name": "h2oai/h2ovl-mississippi-800m",
    "provider": "h2oai",
    "paramsBillions": 0.826295808,
    "contextLength": 4096,
    "isMoE": false,
    "quantization": "Q4_K_M",
    "useCase": "General purpose text generation",
    "releaseDate": "2024-10-16"
  },
  {
    "name": "Qwen/Qwen3-0.6B-FP8",
    "provider": "Alibaba",
    "paramsBillions": 0.751659264,
    "contextLength": 40960,
    "isMoE": false,
    "quantization": "Q4_K_M",
    "useCase": "General purpose text generation",
    "releaseDate": "2025-04-28"
  },
  {
    "name": "Qwen/Qwen3Guard-Gen-0.6B",
    "provider": "Alibaba",
    "paramsBillions": 0.751632384,
    "contextLength": 32768,
    "isMoE": false,
    "quantization": "Q4_K_M",
    "useCase": "General purpose text generation",
    "releaseDate": "2025-09-23"
  },
  {
    "name": "google/t5gemma-b-b-prefixlm",
    "provider": "Google",
    "paramsBillions": 0.59149056,
    "contextLength": 4096,
    "isMoE": false,
    "quantization": "Q4_K_M",
    "useCase": "General purpose text generation",
    "releaseDate": "2025-06-19"
  },
  {
    "name": "bigscience/bloomz-560m",
    "provider": "bigscience",
    "paramsBillions": 0.559214592,
    "contextLength": 2048,
    "isMoE": false,
    "quantization": "Q4_K_M",
    "useCase": "General purpose text generation",
    "releaseDate": "2022-10-08"
  },
  {
    "name": "RedHatAI/Qwen3-30B-A3B-Instruct-2507-speculator.eagle3",
    "provider": "redhatai",
    "paramsBillions": 0.522152832,
    "contextLength": 4096,
    "isMoE": false,
    "quantization": "Q4_K_M",
    "useCase": "Instruction following",
    "releaseDate": "2025-12-12"
  },
  {
    "name": "Qwen/Qwen2.5-0.5B-Instruct",
    "provider": "Alibaba",
    "paramsBillions": 0.494032768,
    "contextLength": 32768,
    "isMoE": false,
    "quantization": "Q4_K_M",
    "useCase": "Instruction following",
    "releaseDate": "2024-09-16"
  },
  {
    "name": "Qwen/Qwen2.5-Coder-0.5B-Instruct",
    "provider": "Alibaba",
    "paramsBillions": 0.494032768,
    "contextLength": 32768,
    "isMoE": false,
    "quantization": "Q4_K_M",
    "useCase": "Code generation and completion",
    "releaseDate": "2024-11-06"
  },
  {
    "name": "Qwen/Qwen2.5-0.5B",
    "provider": "Alibaba",
    "paramsBillions": 0.494032768,
    "contextLength": 32768,
    "isMoE": false,
    "quantization": "Q4_K_M",
    "useCase": "General purpose text generation",
    "releaseDate": "2024-09-15"
  },
  {
    "name": "Qwen/Qwen2-0.5B-Instruct",
    "provider": "Alibaba",
    "paramsBillions": 0.494032768,
    "contextLength": 32768,
    "isMoE": false,
    "quantization": "Q4_K_M",
    "useCase": "Instruction following",
    "releaseDate": "2024-06-03"
  },
  {
    "name": "lmstudio-community/LFM2.5-1.2B-Instruct-MLX-8bit",
    "provider": "lmstudio-community",
    "paramsBillions": 0.329251584,
    "contextLength": 128000,
    "isMoE": false,
    "quantization": "Q4_K_M",
    "useCase": "Instruction following",
    "releaseDate": "2026-01-07"
  },
  {
    "name": "lmstudio-community/LFM2.5-1.2B-Instruct-MLX-6bit",
    "provider": "lmstudio-community",
    "paramsBillions": 0.256113408,
    "contextLength": 128000,
    "isMoE": false,
    "quantization": "Q4_K_M",
    "useCase": "Instruction following",
    "releaseDate": "2026-01-07"
  },
  {
    "name": "rinna/japanese-gpt-neox-small",
    "provider": "rinna",
    "paramsBillions": 0.203611008,
    "contextLength": 2048,
    "isMoE": false,
    "quantization": "Q4_K_M",
    "useCase": "Lightweight",
    "releaseDate": "2022-08-31"
  },
  {
    "name": "lmstudio-community/LFM2.5-1.2B-Instruct-MLX-4bit",
    "provider": "lmstudio-community",
    "paramsBillions": 0.182975232,
    "contextLength": 128000,
    "isMoE": false,
    "quantization": "Q4_K_M",
    "useCase": "Instruction following",
    "releaseDate": "2026-01-07"
  },
  {
    "name": "EleutherAI/gpt-neo-125m",
    "provider": "eleutherai",
    "paramsBillions": 0.150364416,
    "contextLength": 2048,
    "isMoE": false,
    "quantization": "Q4_K_M",
    "useCase": "General purpose text generation",
    "releaseDate": "2022-03-02"
  },
  {
    "name": "nomic-ai/nomic-embed-text-v1.5",
    "provider": "Nomic",
    "paramsBillions": 0.137,
    "contextLength": 8192,
    "isMoE": false,
    "quantization": "F16",
    "useCase": "Text embeddings for RAG",
    "releaseDate": null
  },
  {
    "name": "HuggingFaceTB/SmolLM2-135M",
    "provider": "huggingfacetb",
    "paramsBillions": 0.134515008,
    "contextLength": 8192,
    "isMoE": false,
    "quantization": "Q4_K_M",
    "useCase": "General purpose text generation",
    "releaseDate": "2024-10-31"
  },
  {
    "name": "HuggingFaceTB/SmolLM2-135M-Instruct",
    "provider": "huggingfacetb",
    "paramsBillions": 0.134515008,
    "contextLength": 8192,
    "isMoE": false,
    "quantization": "Q4_K_M",
    "useCase": "Instruction following",
    "releaseDate": "2024-10-31"
  },
  {
    "name": "HuggingFaceTB/SmolLM-135M-Instruct",
    "provider": "huggingfacetb",
    "paramsBillions": 0.134515008,
    "contextLength": 2048,
    "isMoE": false,
    "quantization": "Q4_K_M",
    "useCase": "Instruction following",
    "releaseDate": "2024-07-15"
  },
  {
    "name": "HuggingFaceTB/SmolLM-135M",
    "provider": "huggingfacetb",
    "paramsBillions": 0.134515008,
    "contextLength": 2048,
    "isMoE": false,
    "quantization": "Q4_K_M",
    "useCase": "General purpose text generation",
    "releaseDate": "2024-07-14"
  },
  {
    "name": "state-spaces/mamba-130m-hf",
    "provider": "state-spaces",
    "paramsBillions": 0.12913536,
    "contextLength": 4096,
    "isMoE": false,
    "quantization": "Q4_K_M",
    "useCase": "General purpose text generation",
    "releaseDate": "2024-03-06"
  },
  {
    "name": "peft-internal-testing/opt-125m",
    "provider": "peft-internal-testing",
    "paramsBillions": 0.125239296,
    "contextLength": 2048,
    "isMoE": false,
    "quantization": "Q4_K_M",
    "useCase": "General purpose text generation",
    "releaseDate": "2025-11-19"
  },
  {
    "name": "EleutherAI/pythia-70m-deduped",
    "provider": "eleutherai",
    "paramsBillions": 0.095592496,
    "contextLength": 2048,
    "isMoE": false,
    "quantization": "Q4_K_M",
    "useCase": "General purpose text generation",
    "releaseDate": "2023-02-13"
  },
  {
    "name": "tiiuae/Falcon-H1-Tiny-90M-Instruct",
    "provider": "TII",
    "paramsBillions": 0.091131072,
    "contextLength": 262144,
    "isMoE": false,
    "quantization": "Q4_K_M",
    "useCase": "Instruction following",
    "releaseDate": "2026-01-12"
  },
  {
    "name": "erwanf/gpt2-mini",
    "provider": "erwanf",
    "paramsBillions": 0.038604288,
    "contextLength": 512,
    "isMoE": false,
    "quantization": "Q4_K_M",
    "useCase": "Lightweight",
    "releaseDate": "2024-06-23"
  },
  {
    "name": "hmellor/tiny-random-BambaForCausalLM",
    "provider": "hmellor",
    "paramsBillions": 0.03311076,
    "contextLength": 262144,
    "isMoE": false,
    "quantization": "Q4_K_M",
    "useCase": "Lightweight",
    "releaseDate": "2025-04-29"
  },
  {
    "name": "hmellor/tiny-random-Gemma2ForCausalLM",
    "provider": "hmellor",
    "paramsBillions": 0.008438816,
    "contextLength": 8192,
    "isMoE": false,
    "quantization": "Q4_K_M",
    "useCase": "Lightweight",
    "releaseDate": "2025-04-29"
  },
  {
    "name": "llamafactory/tiny-random-Llama-3",
    "provider": "llamafactory",
    "paramsBillions": 0.004112464,
    "contextLength": 131072,
    "isMoE": false,
    "quantization": "Q4_K_M",
    "useCase": "Lightweight",
    "releaseDate": "2024-06-07"
  },
  {
    "name": "hmellor/tiny-random-LlamaForCausalLM",
    "provider": "hmellor",
    "paramsBillions": 0.001062992,
    "contextLength": 8192,
    "isMoE": false,
    "quantization": "Q4_K_M",
    "useCase": "Lightweight",
    "releaseDate": "2025-04-29"
  },
  {
    "name": "peft-internal-testing/tiny-random-OPTForCausalLM",
    "provider": "peft-internal-testing",
    "paramsBillions": 0.000812404,
    "contextLength": 100,
    "isMoE": false,
    "quantization": "Q4_K_M",
    "useCase": "Lightweight",
    "releaseDate": "2025-11-13"
  }
];

/**
 * Get all models
 */
export function getAllModels() {
  return MODELS;
}

/**
 * Get models by parameter range
 */
export function getModelsByParamRange(minB, maxB) {
  return MODELS.filter(m => m.paramsBillions >= minB && m.paramsBillions <= maxB);
}

/**
 * Get small models (< 1B params)
 */
export function getSmallModels() {
  return MODELS.filter(m => m.paramsBillions < 1);
}

/**
 * Get mid-range models (1B - 20B params)
 */
export function getMidRangeModels() {
  return MODELS.filter(m => m.paramsBillions >= 1 && m.paramsBillions < 20);
}

/**
 * Get large models (20B+ params)
 */
export function getLargeModels() {
  return MODELS.filter(m => m.paramsBillions >= 20);
}

/**
 * Get MoE (Mixture of Experts) models
 */
export function getMoEModels() {
  return MODELS.filter(m => m.isMoE);
}

/**
 * Search models by name or provider
 */
export function searchModels(query) {
  const q = query.toLowerCase();
  return MODELS.filter(m =>
    m.name.toLowerCase().includes(q) ||
    m.provider.toLowerCase().includes(q)
  );
}

/**
 * Get models by use case
 */
export function getModelsByUseCase(useCase) {
  return MODELS.filter(m =>
    m.useCase.toLowerCase().includes(useCase.toLowerCase())
  );
}

/**
 * Get top N models by parameter count
 */
export function getTopModels(n = 10) {
  return MODELS.slice(0, n);
}

/**
 * Statistics
 */
export function getModelStats() {
  const moeCount = MODELS.filter(m => m.isMoE).length;
  const paramRanges = {
    tiny: MODELS.filter(m => m.paramsBillions < 1).length,
    small: MODELS.filter(m => m.paramsBillions >= 1 && m.paramsBillions < 7).length,
    medium: MODELS.filter(m => m.paramsBillions >= 7 && m.paramsBillions < 20).length,
    large: MODELS.filter(m => m.paramsBillions >= 20 && m.paramsBillions < 70).length,
    xlarge: MODELS.filter(m => m.paramsBillions >= 70).length,
  };
  
  return {
    totalModels: MODELS.length,
    moeModels: moeCount,
    denseModels: MODELS.length - moeCount,
    paramRanges,
    largestModel: MODELS[0],
    smallestModel: MODELS[MODELS.length - 1],
  };
}
