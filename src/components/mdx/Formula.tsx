import React from 'react';

export default function Formula({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-8 py-6 px-8 bg-[var(--surface)] border border-[var(--border)] rounded-2xl shadow-sm flex items-center justify-center relative overflow-hidden group transition-all hover:shadow-md">
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary/20 transition-all duration-300 group-hover:bg-primary" />

      <code className="relative z-10 text-lg md:text-xl font-semibold text-[var(--text-primary)] font-mono tracking-wide">
        {children}
      </code>
    </div>
  );
}
