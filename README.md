# llmfit-web

A web-based version of [llmfit](https://github.com/AlexsJones/llmfit) — find what LLM models run on your hardware, right in your browser.

## Overview

**llmfit-web** brings the model-scoring engine from the original Rust CLI tool to the web, allowing anyone to input their hardware specs and get instant recommendations for which LLM models will run well.

### What It Does

- **Hardware detection form** — Users enter their GPU model, RAM, and intended use case
- **Multi-dimensional scoring** — Scores models across Quality, Speed, Fit, and Context dimensions
- **Intelligent recommendations** — Ranks 200+ open-source models by fit and performance
- **No backend needed** — Everything runs in the browser (pure JavaScript)

## Project Structure

```
llmfit-web/
├── src/
│   ├── scoring.js      # Core multi-dimensional scoring engine
│   ├── gpus.js         # GPU lookup table (NVIDIA, AMD, Apple, Intel)
│   ├── utils.js        # Quantization hierarchy, speed calculations
│   └── models.js       # Model database (to be created)
├── test/
│   └── scoring.test.js # Comprehensive unit tests (23 passing)
├── index.html          # Web UI (placeholder)
├── package.json        # Dependencies
└── README.md           # This file
```

## Scoring Algorithm

Based on the original llmfit Rust codebase, the scoring engine:

1. **Analyzes memory fit**: Determines if a model fits in VRAM, needs CPU offloading, or uses expert offloading (MoE)
2. **Estimates speed**: Calculates tokens/sec based on backend (CUDA, ROCm, Metal, CPU) and quantization
3. **Computes quality**: Factor in parameter count, model family, quantization penalty, and task alignment
4. **Evaluates context**: Scores context window availability vs. use-case needs
5. **Weights by use case**: Different weights for Coding, Reasoning, Chat, etc.

### Run Modes

- **GPU** — Model fully loaded into VRAM (fastest)
- **MoE Offload** — Active experts in VRAM, inactive experts in system RAM
- **CPU Offload** — Partial GPU offload, model spills to system RAM
- **CPU Only** — Entire model in system RAM (slowest)

### Fit Levels

- **Perfect** — Recommended memory met on GPU
- **Good** — Fits with headroom
- **Marginal** — Tight fit or CPU-only
- **Too Tight** — Does not fit

## Testing

Run the unit test suite:

```bash
node --test test/scoring.test.js
```

**Current: 23/23 tests passing** ✅

Key tests:
- Memory fit scoring
- Speed penalties by run mode
- Quality scoring by parameter count and quantization
- Use-case-specific weighting
- Real-world hardware scenarios (RTX 4090, 8GB GPU, CPU-only, Apple Silicon)

## Checkpoint 1 Deliverables ✅

- [x] JavaScript scoring engine (fully ported from Rust)
- [x] GPU lookup table (50+ models)
- [x] Quantization hierarchy and speed calculations
- [x] Multi-dimensional scoring functions
- [x] Comprehensive unit tests
- [x] Git repo initialized

## Next Checkpoints

### Checkpoint 2: Model Database
- Extract 206 models from original llmfit
- Import `hf_models.json`
- Create models.js with model data structure

### Checkpoint 3: Web UI
- Input form: GPU dropdown, system RAM, use case
- Results table: sortable, filterable, detailed view
- GitHub Pages deployment

## Development

Start a local dev server:

```bash
npm run dev
```

Then visit `http://localhost:8000`

## License

MIT (matching the original llmfit project)

## Credits

Inspired by [llmfit](https://github.com/AlexsJones/llmfit) by [AlexsJones](https://github.com/AlexsJones)
