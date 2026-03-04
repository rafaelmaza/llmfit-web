# llmfit-web

A web-based version of [llmfit](https://github.com/AlexsJones/llmfit) — find what LLM models run on your hardware, right in your browser.

**🌐 Live Demo:** https://rafaelmaza.github.io/llmfit-web/

---

## ⚠️ Project Origin

**This repository was AI-generated** as a web port of the original [llmfit](https://github.com/AlexsJones/llmfit) Rust CLI tool.

**All credit for the core algorithm, scoring logic, and conceptual design goes to [AlexsJones](https://github.com/AlexsJones)**, the creator of llmfit.

This project reimplements the llmfit scoring engine in JavaScript to make it accessible via a web interface. The original Rust implementation remains the authoritative reference.

---

## Overview

**llmfit-web** brings the model-scoring engine from the original Rust CLI tool to the web, allowing anyone to input their hardware specs and get instant recommendations for which LLM models will run well.

### Features

- **50+ GPU models** — NVIDIA RTX/A-series, AMD RDNA/MI-series, Intel Arc, Apple Silicon
- **206 LLM models** — From 812K to 753B parameters, including MoE architectures
- **Multi-dimensional scoring** — Quality, Speed, Fit, and Context analysis
- **Smart quantization** — GGUF and MLX quantization hierarchies with automatic optimization
- **Real-time ranking** — Instant results, no backend needed
- **Mobile responsive** — Works on phones, tablets, and desktops

## How It Works

1. **Select your GPU** (or enter custom VRAM)
2. **Choose your system RAM** (8GB to 128GB)
3. **Pick your use case** (Coding, Reasoning, Chat, Multimodal, etc.)
4. **Get ranked recommendations** — Top models scored by fit, speed, and quality

The scoring engine analyzes:

- **Memory fit** — Does it fit in VRAM, need CPU offload, or use MoE expert offloading?
- **Speed** — Tokens/sec based on backend (CUDA, ROCm, Metal, CPU) and quantization
- **Quality** — Parameter count, model family, quantization penalty, task alignment
- **Context** — Context window availability vs. use-case requirements

### Run Modes

- **GPU** — Model fully loaded into VRAM (fastest)
- **MoE Offload** — Active experts in VRAM, inactive experts in system RAM
- **CPU Offload** — Partial GPU, model spills to system RAM
- **CPU Only** — Entire model in system RAM (slowest)

### Fit Levels

- **Perfect** — Recommended memory met on GPU
- **Good** — Fits with headroom
- **Marginal** — Tight fit or CPU-only
- **Too Tight** — Does not fit

## Project Structure

```
llmfit-web/
├── src/
│   ├── scoring.js      # Core multi-dimensional scoring engine
│   ├── gpus.js         # GPU lookup table (NVIDIA, AMD, Apple, Intel)
│   ├── utils.js        # Quantization hierarchy, speed calculations
│   └── models.js       # Model database (206 models)
├── test/
│   └── scoring.test.js # Unit + integration tests (30 passing)
├── index.html          # Web UI (production-ready)
├── server.js           # Local dev server (Node.js)
├── package.json        # Dependencies
└── README.md           # This file
```

## Running Locally

**Start the dev server:**

```bash
npm start
```

Then visit:
- **Local:** http://localhost:8000
- **Network:** http://<your-ip>:8000

Or open `index.html` directly in a browser (works without a server).

## Testing

Run the test suite:

```bash
npm test
```

**Current: 30/30 tests passing** ✅

- 23 unit tests (scoring engine, memory fit, speed, quality)
- 7 integration tests (real-world hardware + model combinations)

## Deployment

This project is **static HTML + JavaScript** — no backend, no build step, no runtime dependencies.

Deploy anywhere:
- **GitHub Pages** (built-in)
- **Netlify / Vercel** (drag-and-drop)
- **Cloudflare Pages**
- **S3 + CloudFront**
- Or just serve the files from any web server

## Recording a Demo GIF (optional)

If you want a short GIF for the README, the repo includes a Playwright script that drives a headed Chromium session and records a demo video.

### 1) Install dev deps

```bash
npm install
```

### 2) Record (headed)

Local machine with a GUI:

```bash
npm run record:demo
```

Headless Linux server (uses a virtual display):

```bash
sudo apt-get install -y xvfb
xvfb-run -a npm run record:demo
```

The video will be saved under:

```
artifacts/videos/
```

### 3) Convert to GIF

```bash
sudo apt-get install -y ffmpeg
ffmpeg -i artifacts/videos/*.webm -vf "fps=15,scale=1000:-1:flags=lanczos" -loop 0 demo.gif
```

## Model Database

206 open-source models included:

| Category | Count | Parameter Range |
|----------|-------|-----------------|
| Tiny     | 31    | <1B             |
| Small    | 44    | 1-7B            |
| Medium   | 66    | 7-20B           |
| Large    | 37    | 20-70B          |
| XLarge   | 28    | 70B+            |
| MoE      | 33    | Mixture of Experts |

**Source:** Extracted from HuggingFace via the original llmfit project.

## API (for developers)

Use the scoring engine programmatically:

```javascript
import { scoreModels, UseCase } from './src/scoring.js';
import { getAllModels } from './src/models.js';

const hardware = {
  gpuVramGB: 24,
  systemRamGB: 64,
  backend: 'CUDA'
};

const useCase = UseCase.Coding;

const results = scoreModels(getAllModels(), hardware, useCase);
console.log(results.slice(0, 5)); // Top 5 models
```

## Credits

**Original Project:** [llmfit](https://github.com/AlexsJones/llmfit) by [AlexsJones](https://github.com/AlexsJones)

This web port was AI-generated and released under the same license as the original project.

## License

MIT License (matching the original llmfit project)

---

## Contributing

Issues and PRs welcome! If you find a bug or have a feature request, please open an issue.

For major changes to the scoring algorithm, consider contributing to the [original llmfit project](https://github.com/AlexsJones/llmfit) first.
