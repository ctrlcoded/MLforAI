import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Timeline from '@/components/Timeline';

export default function Roadmap() {
  return (
    <main className="min-h-screen bg-[var(--background)] pt-4 md:pt-6 px-4 md:px-6">
      <div className="relative max-w-[1440px] mx-auto bg-primary rounded-[32px] md:rounded-[48px] overflow-hidden min-h-[40vh] flex flex-col items-center justify-center text-center px-4 shadow-[0_30px_60px_rgba(55,101,243,0.15)]">
        <Navbar />
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />

        <div className="relative z-10 mt-24 mb-16 px-4">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">Learning Roadmap</h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto font-medium">Your step-by-step guide to becoming an AI Engineer. 15 modules from foundations to production.</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto py-24 px-4 sm:px-8">
        <Timeline />
      </div>

      <Footer />
    </main>
  );
}
