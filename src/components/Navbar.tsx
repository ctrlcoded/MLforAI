import Link from 'next/link';
import { ThemeToggle } from '@/components/ThemeToggle';

export default function Navbar() {
  return (
    <nav className="absolute top-0 w-full z-50 flex items-center justify-between px-6 py-6 md:px-12 text-white">
      <div className="flex items-center gap-6 md:gap-10">
        <Link href="/" className="font-bold text-2xl tracking-tight flex items-center gap-3">
          <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
            <div className="w-4 h-4 bg-primary rounded-sm" />
          </div>
          ML for AI
        </Link>
        <div className="hidden lg:flex gap-6 text-[15px] font-medium text-white/80">
          <Link href="/docs/introduction" className="hover:text-white transition-colors">
            Docs
          </Link>
          <Link href="/roadmap" className="hover:text-white transition-colors">
            Roadmap
          </Link>
        </div>
      </div>

      <div className="flex items-center gap-4 text-[15px] font-medium">
        <ThemeToggle />
        <Link href="/docs/introduction" className="px-6 py-2.5 bg-white text-primary rounded-full hover:bg-white/90 transition-colors shadow-sm whitespace-nowrap">
          Start Learning
        </Link>
      </div>
    </nav>
  );
}
