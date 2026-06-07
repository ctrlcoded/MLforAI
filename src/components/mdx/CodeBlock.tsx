"use client";
import React, { useState } from 'react';

export default function CodeBlock({ children, ...props }: any) {
  const [copied, setCopied] = useState(false);

  const textContent = React.Children.toArray(children).reduce((acc: string, child: any) => {
    if (typeof child === 'string') return acc + child;
    if (child?.props?.children) {
      if (typeof child.props.children === 'string') return acc + child.props.children;
    }
    return acc;
  }, '');

  const copyToClipboard = () => {
    navigator.clipboard.writeText(textContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative my-8 rounded-2xl overflow-hidden bg-[#0f172a] border border-[#1e293b] shadow-xl">
      <div className="flex items-center justify-between px-4 py-3 bg-[#1e293b]/50 border-b border-[#1e293b]">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-amber-500/80" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
        </div>
        <button
          onClick={copyToClipboard}
          className="text-xs font-medium text-slate-400 hover:text-white transition-colors flex items-center gap-1.5 bg-white/5 hover:bg-white/10 px-2.5 py-1.5 rounded-md cursor-pointer"
        >
          {copied ? (
            <>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Copied!
            </>
          ) : (
            <>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              Copy
            </>
          )}
        </button>
      </div>
      <div className="p-5 overflow-x-auto text-[13px] font-mono text-slate-300 leading-loose">
        <pre {...props} className="!bg-transparent !p-0 !m-0 !shadow-none !border-none">
          {children}
        </pre>
      </div>
    </div>
  );
}
