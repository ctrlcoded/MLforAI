import { ReactNode } from 'react';
import Link from 'next/link';

interface CardProps {
  title: string;
  description: string;
  href: string;
  children?: ReactNode;
}

export default function Card({ title, description, href, children }: CardProps) {
  return (
    <Link href={href} className="group block h-full">
      <div className="bg-[var(--surface-elevated)] rounded-[32px] p-8 md:p-12 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-[var(--border)] transition-all duration-300 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] hover:-translate-y-1.5 h-full flex flex-col dark:shadow-none dark:hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)]">
        <h3 className="text-3xl font-semibold text-[var(--text-primary)] mb-4 group-hover:text-primary transition-colors tracking-tight">
          {title}
        </h3>
        <p className="text-[var(--text-secondary)] text-lg leading-relaxed mb-10 flex-1">
          {description}
        </p>

        {children && (
          <div className="mt-auto mb-8">
            {children}
          </div>
        )}

        <div className="mt-auto flex items-center text-primary font-medium text-lg pt-6 border-t border-[var(--border-subtle)]">
          Explore section <span className="ml-2 transition-transform group-hover:translate-x-1.5 font-bold">→</span>
        </div>
      </div>
    </Link>
  );
}
