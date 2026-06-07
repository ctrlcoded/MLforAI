import Sidebar from '@/components/Sidebar';
import TOC from '@/components/TOC';
import MobileNav from '@/components/MobileNav';
import ScrollProgress from '@/components/ui/ScrollProgress';
import { ThemeToggle } from '@/components/ThemeToggle';
import Link from 'next/link';

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[var(--background)] flex flex-col relative">
      <ScrollProgress />
      <header className="sticky top-0 z-50 w-full border-b border-[var(--border)] bg-[var(--background)]/80 backdrop-blur-lg">
        <div className="flex h-16 items-center px-4 sm:px-6 md:px-8 gap-4 md:gap-8">
          <MobileNav />
          <Link href="/" className="font-bold text-lg md:text-xl tracking-tight text-[var(--text-primary)] flex items-center gap-2 md:gap-3">
            <div className="w-7 h-7 md:w-8 md:h-8 bg-primary rounded-lg flex items-center justify-center">
              <div className="w-3.5 h-3.5 md:w-4 md:h-4 bg-white rounded-sm" />
            </div>
            <span className="hidden sm:inline">ML for AI</span>
            <span className="sm:hidden">MLAI</span>
          </Link>
          <div className="flex-1" />
          <ThemeToggle />
        </div>
      </header>

      <div className="flex-1 w-full max-w-[1536px] mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[260px_minmax(0,1fr)] xl:grid-cols-[260px_minmax(0,1fr)_220px] gap-8 h-full">

          <aside className="hidden lg:block relative">
            <div className="sticky top-[4rem] h-[calc(100vh-4rem)] overflow-y-auto py-8 pr-6">
              <Sidebar />
            </div>
          </aside>

          <main className="py-12 min-w-0 max-w-3xl mx-auto w-full">
            {children}
          </main>

          <aside className="hidden xl:block relative">
            <div className="sticky top-[4rem] h-[calc(100vh-4rem)] overflow-y-auto py-12 pl-6">
              <TOC />
            </div>
          </aside>

        </div>
      </div>
    </div>
  );
}
