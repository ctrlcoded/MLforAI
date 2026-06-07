import Navbar from './Navbar';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative w-full max-w-[1440px] mx-auto flex flex-col bg-primary text-white overflow-hidden rounded-[32px] md:rounded-[48px] shadow-[0_30px_60px_rgba(55,101,243,0.15)]">
      <Navbar />

      {/* Background Subtle Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center justify-center max-w-5xl mx-auto px-4 pt-32 pb-24 md:pt-48 md:pb-32 text-center">
        <span className="text-sm font-semibold tracking-widest uppercase text-white/70 mb-6 block">
          AI Engineer Curriculum
        </span>
        <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tight leading-[1.1] mb-8 text-white">
          The definitive guide to <br className="hidden md:block" />
          <span className="text-white/90">AI Engineering.</span>
        </h1>
        <p className="text-lg md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed mb-12 font-medium">
          From Statistics & Probability to RAG & AI Agents. An interview-focused curriculum built for fresher AI Engineers.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/docs/introduction"
            className="px-8 py-4 bg-white text-primary rounded-2xl hover:bg-white/90 transition-all shadow-lg font-semibold text-lg hover:-translate-y-0.5 duration-200"
          >
            Start the Curriculum →
          </Link>
          <Link
            href="/roadmap"
            className="px-8 py-4 bg-white/10 text-white rounded-2xl hover:bg-white/20 transition-all border border-white/20 font-semibold text-lg hover:-translate-y-0.5 duration-200"
          >
            View Roadmap
          </Link>
        </div>
      </div>
    </section>
  );
}
