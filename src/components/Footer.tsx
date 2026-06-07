import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full bg-[var(--surface-elevated)] border-t border-[var(--border)] pt-20 pb-10 mt-20">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-16 lg:gap-8 mb-20">

          <div className="max-w-sm">
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center transition-transform group-hover:scale-105">
                <div className="w-4 h-4 bg-white rounded-sm" />
              </div>
              <span className="text-xl font-bold text-[var(--text-primary)] tracking-tight">ML for AI</span>
            </Link>
            <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
              The premier open-source guide to building, evaluating, and scaling modern AI systems. An interview-focused curriculum built for fresher AI Engineers.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 lg:gap-12 flex-1 lg:max-w-2xl">
            <div className="flex flex-col gap-4">
              <h4 className="font-semibold text-[var(--text-primary)] text-sm tracking-wide">Foundations</h4>
              <Link href="/docs/introduction" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors text-sm">Introduction</Link>
              <Link href="/docs/statistics-for-ml" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors text-sm">Statistics</Link>
              <Link href="/docs/probability-for-ml" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors text-sm">Probability</Link>
              <Link href="/docs/ml-fundamentals" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors text-sm">ML Fundamentals</Link>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="font-semibold text-[var(--text-primary)] text-sm tracking-wide">Generative AI</h4>
              <Link href="/docs/transformers" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors text-sm">Transformers</Link>
              <Link href="/docs/large-language-models" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors text-sm">Large Language Models</Link>
              <Link href="/docs/rag" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors text-sm">RAG Architecture</Link>
              <Link href="/docs/agents" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors text-sm">AI Agents</Link>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="font-semibold text-[var(--text-primary)] text-sm tracking-wide">Resources</h4>
              <Link href="/roadmap" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors text-sm">Learning Roadmap</Link>
              <Link href="/docs/ai-engineer-interview-mastery" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors text-sm">Interview Mastery</Link>
              <Link href="/docs/ai-engineer-system-design" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors text-sm">System Design</Link>
              <Link href="/docs/mlops-fundamentals" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors text-sm">MLOps</Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-[var(--border)]">
          <p className="text-[var(--text-muted)] text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} ML for AI. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2 text-sm text-[var(--text-muted)]">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              All systems operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
