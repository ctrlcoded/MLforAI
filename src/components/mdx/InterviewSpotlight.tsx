import React from 'react';

type InterviewSpotlightProps = {
  title: string;
  children: React.ReactNode;
};

export default function InterviewSpotlight({ title, children }: InterviewSpotlightProps) {
  return (
    <div className="my-10 relative overflow-hidden rounded-[24px] border border-indigo-500/20 bg-[#0B1120] shadow-2xl">
      {/* Premium Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-purple-500/5 to-transparent pointer-events-none" />
      <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-indigo-500 to-purple-500" />
      
      <div className="relative z-10 p-6 md:p-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-indigo-500/20 text-indigo-400 border border-indigo-500/30">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-white tracking-tight m-0">FAANG Interview Spotlight</h3>
        </div>
        
        <div className="bg-white/5 border border-white/10 rounded-xl p-5 mb-6">
          <h4 className="text-lg font-bold text-indigo-300 m-0">{title}</h4>
        </div>
        
        <div className="prose prose-invert prose-slate max-w-none prose-p:leading-relaxed prose-a:text-indigo-400 hover:prose-a:text-indigo-300 prose-code:text-indigo-300 prose-code:bg-indigo-500/10 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md text-slate-300 text-sm md:text-base prose-strong:text-white">
          {children}
        </div>
      </div>
    </div>
  );
}
