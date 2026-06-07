import Hero from '@/components/Hero';
import Card from '@/components/Card';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--background)] pt-4 md:pt-6 px-4 md:px-6">
      <Hero />

      <div className="max-w-[1280px] mx-auto px-4 py-32 md:py-48">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-[2.75rem] font-bold text-[var(--text-primary)] mb-6 tracking-tight leading-tight">
            Everything you need to become an AI Engineer
          </h2>
          <p className="text-xl md:text-2xl text-[var(--text-secondary)] max-w-3xl mx-auto leading-relaxed">
            From probability to multi-agent RAG systems. A complete interview-focused curriculum.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-10">
          <Card
            title="Core Foundations"
            description="Master the mathematics, probability, statistics, and feature engineering required to truly understand how ML algorithms work."
            href="/docs/introduction"
          >
            <div className="h-40 bg-[var(--surface)] rounded-2xl border border-[var(--border)] flex items-center justify-center overflow-hidden relative">
              <div className="flex gap-3 relative z-10">
                <span className="px-3 py-1.5 bg-[var(--surface-elevated)] rounded-lg border border-[var(--border)] text-[var(--text-muted)] font-mono text-sm">Stats</span>
                <span className="px-3 py-1.5 bg-[var(--surface-elevated)] rounded-lg border border-[var(--border)] text-[var(--text-muted)] font-mono text-sm">Probability</span>
                <span className="px-3 py-1.5 bg-[var(--surface-elevated)] rounded-lg border border-[var(--border)] text-[var(--text-muted)] font-mono text-sm">Features</span>
              </div>
            </div>
          </Card>

          <Card
            title="Generative AI & Applied AI"
            description="Deep dive into Transformers, LLMs, RAG, and AI Agents. Build the mental models for modern AI Engineering interviews."
            href="/docs/classical-ml-to-llm-bridge"
          >
            <div className="grid grid-cols-2 gap-4 h-40">
              <div className="bg-[#FFF4ED] dark:bg-orange-500/10 rounded-2xl border border-[#FFEDD5] dark:border-orange-500/20 flex items-center justify-center">
                <span className="text-[#F97316] font-semibold text-sm">Transformers</span>
              </div>
              <div className="bg-[#F5F3FF] dark:bg-violet-500/10 rounded-2xl border border-[#EDE9FE] dark:border-violet-500/20 flex items-center justify-center">
                <span className="text-[#8B5CF6] font-semibold text-sm">RAG & Agents</span>
              </div>
            </div>
          </Card>
        </div>
      </div>

      <Footer />
    </main>
  );
}
