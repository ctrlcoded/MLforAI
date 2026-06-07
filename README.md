<div align="center">
  <img src="https://img.shields.io/badge/Next.js-16.2.7-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js" />
  <img src="https://img.shields.io/badge/TailwindCSS-v4.0-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="TailwindCSS" />
  <img src="https://img.shields.io/badge/MDX-Remote-F9AC00?style=for-the-badge&logo=mdx&logoColor=white" alt="MDX" />
  <img src="https://img.shields.io/badge/Status-Production_Ready-success?style=for-the-badge" alt="Status" />
</div>

<h1 align="center">Machine Learning for AI Engineers</h1>

<p align="center">
  <strong>The definitive, interview-focused open-source curriculum for modern AI Engineering.</strong><br>
  <em>Bridging the critical gap between Classical Machine Learning and Generative Foundation Models.</em>
</p>

---

## 📖 Philosophy & Vision

The modern AI landscape is fragmented. Most resources fall into two extremes:
1. **Academic ML Courses:** Drown learners in calculus and archaic Support Vector Machines.
2. **"Prompt Engineering" Bootcamps:** Teach API wrapper creation without explaining the underlying mechanics of embeddings, chunking algorithms, or attention heads.

**This project solves that gap.** It is a comprehensive, 23-module curriculum designed specifically to prepare freshers for rigorous AI Engineering interviews. It focuses heavily on **Mental Models, System Design Tradeoffs, and Production Reality**. 

We do not teach formulas until the learner intuitively understands the problem the formula solves.

---

## 📚 Curriculum Architecture

The curriculum is structured into three progressive pillars:

### 1. Core Foundations (The Math & The Data)
- **Probability & Statistics**: Distributions, Bayes Theorem, Expected Values.
- **Data Engineering**: Handling missing data, scaling, leakage prevention.
- **Feature Engineering**: Creating meaningful signals and dimensionality reduction.

### 2. Classical Machine Learning (The Intuition)
- **Evaluation & Error**: Precision, Recall, PR-AUC, and the 6-step Error Analysis workflow.
- **Supervised & Unsupervised Learning**: Tree-based ensembles (XGBoost), clustering, and anomaly detection.
- **Deep Learning**: Backpropagation, gradient descent optimization, CNNs, and LSTMs.

### 3. Applied Generative AI (The Modern Era)
- **The Bridge**: The evolutionary story from Logistic Regression to GPT-4.
- **Transformers & Attention**: Self-Attention mechanisms and Positional Encoding.
- **RAG Architecture**: Advanced chunking, vector embeddings, cosine similarity, and re-ranking.
- **AI Agents**: Tool calling, ReAct loops, and multi-agent system design.
- **Production & MLOps**: Latency vs. Cost tradeoffs, semantic caching, and drift detection.

---

## 🛠️ Technical Stack & Architecture

This repository is built using modern, bleeding-edge web technologies to ensure maximum performance and developer experience.

* **Framework:** [Next.js 16 (App Router)](https://nextjs.org/) utilizing Turbopack for rapid compilation.
* **Content Engine:** [`next-mdx-remote/rsc`](https://github.com/hashicorp/next-mdx-remote) for fully server-rendered markdown. This allows us to interleave React Server Components directly into our curriculum content.
* **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) using the new native CSS `@theme` architecture.
* **Theming:** Industry-standard Dark/Light mode utilizing `next-themes` and CSS custom variables.
* **Typography:** `@tailwindcss/typography` (`.prose`) heavily customized for readability, code block legibility, and vertical rhythm.

### Directory Structure

```text
mlforai/
├── content/               # The 23 MDX curriculum files (The actual course data)
├── src/
│   ├── app/               # Next.js 16 App Router pages and layouts
│   │   ├── docs/          # MDX rendering engine route group
│   │   ├── globals.css    # Tailwind v4 configuration and global CSS variables
│   │   └── page.tsx       # Landing page
│   ├── components/        # Reusable UI components (Hero, Navbar, Sidebar)
│   │   └── mdx/           # Specialized React components injected into MDX files
│   └── lib/
│       └── mdx.ts         # Server-side filesystem parsing logic for MDX
```

---

## 💻 Local Development

### Prerequisites
- Node.js `^20.19.0`, `^22.13.0`, or `>=24`
- npm `v11+` or bun/pnpm equivalents

### Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/mlforai.git
   cd mlforai
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server (Turbopack enabled):**
   ```bash
   npm run dev
   ```

4. **View the application:**
   Open [http://localhost:3000](http://localhost:3000) in your browser. The page will hot-reload as you make edits to `src/` or `content/`.

### Building for Production
This application is fully statically generated (SSG). To test the production build locally:

```bash
npm run build
npm run start
```

---

## 🤝 Contributing

We welcome contributions to the curriculum! If you find a typo, want to clarify a mental model, or add a new interview question, please feel free to open a Pull Request.

### Content Guidelines
If editing or adding `.mdx` files in the `content/` directory, please adhere to our strict pedagogical philosophy:
1. **Mental Model First:** Never introduce an equation before explaining the real-world intuition.
2. **Problems Before Mechanisms:** Explain *why* the previous technology failed before introducing the new solution (e.g., explain RNN long-term dependency failures before teaching Attention).
3. **Interview & Production Focus:** Always relate concepts back to cost, latency, or common interview gotchas.

---

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.
