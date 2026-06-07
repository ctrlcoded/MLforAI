"use client";
import { useState } from 'react';
import Sidebar from './Sidebar';

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setIsOpen(true)}
        className="p-2 -ml-2 mr-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-primary/20 rounded-lg transition-colors"
      >
        <span className="sr-only">Open menu</span>
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-[100] flex">
          <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
          <div className="relative flex-1 flex flex-col max-w-xs w-full bg-[var(--surface-elevated)] shadow-2xl h-full overflow-y-auto">
            <div className="flex items-center justify-between px-6 py-5 border-b border-[var(--border)]">
              <div className="font-bold text-xl tracking-tight text-[var(--text-primary)] flex items-center gap-3">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <div className="w-4 h-4 bg-white rounded-sm" />
                </div>
                ML for AI
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 -mr-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] rounded-lg transition-colors bg-[var(--surface)] hover:bg-[var(--border)]"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="px-6 py-8">
              <Sidebar />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
