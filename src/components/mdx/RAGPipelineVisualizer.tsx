"use client";
import React, { useEffect, useState } from 'react';

export default function RAGPipelineVisualizer() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    { title: "Document", desc: "Raw text or PDF", icon: "📄" },
    { title: "Chunking", desc: "Split into pieces", icon: "✂️" },
    { title: "Embeddings", desc: "Convert to vectors", icon: "🔢" },
    { title: "Vector DB", desc: "Store and index", icon: "🗄️" },
    { title: "Retrieval", desc: "Find nearest", icon: "🔍" },
    { title: "Generation", desc: "LLM synthesis", icon: "✨" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 1500);
    return () => clearInterval(interval);
  }, [steps.length]);

  return (
    <div className="my-10 p-6 md:p-10 bg-[var(--surface)] border border-[var(--border)] rounded-[24px] overflow-hidden shadow-inner relative">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:24px_24px] opacity-30"></div>

      <div className="relative z-10 flex flex-wrap items-center justify-center gap-2 md:gap-4">
        {steps.map((step, index) => {
          const isActive = activeStep >= index;
          return (
            <React.Fragment key={index}>
              <div
                className={`flex flex-col items-center justify-center w-[90px] h-[90px] md:w-28 md:h-28 rounded-2xl transition-all duration-500 ease-out border-2 ${
                  isActive
                    ? 'bg-[var(--surface-elevated)] border-primary shadow-[0_10px_40px_rgba(55,101,243,0.15)] scale-105 z-10'
                    : 'bg-[var(--surface)] border-[var(--border)] scale-95 z-0 opacity-50'
                }`}
              >
                <div className={`text-2xl md:text-3xl mb-1 transition-all duration-500 ${isActive ? '' : 'grayscale opacity-50'}`}>
                  {step.icon}
                </div>
                <h4 className={`text-xs md:text-sm font-bold text-center mb-0.5 ${isActive ? 'text-[var(--text-primary)]' : 'text-[var(--text-muted)]'}`}>{step.title}</h4>
                <p className="text-[9px] md:text-[10px] text-center px-1 leading-tight text-[var(--text-muted)]">{step.desc}</p>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden lg:flex flex-col items-center justify-center w-6">
                  <div className={`w-full h-1 rounded-full transition-all duration-700 ${isActive ? 'bg-primary' : 'bg-[var(--border)]'}`}></div>
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>

      <div className="relative z-10 mt-8 text-center">
        <p className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--text-secondary)] bg-[var(--surface-elevated)] px-4 py-2 rounded-full border border-[var(--border)] shadow-sm">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          Live RAG Pipeline
        </p>
      </div>
    </div>
  );
}
