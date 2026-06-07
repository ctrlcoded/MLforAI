import React from 'react';

type CalloutProps = {
  type?: 'info' | 'warning' | 'success' | 'danger';
  title?: string;
  children: React.ReactNode;
};

const styles = {
  info: 'bg-blue-50/50 border-blue-200/60 text-blue-900 dark:bg-blue-500/10 dark:border-blue-500/20 dark:text-blue-200',
  warning: 'bg-amber-50/50 border-amber-200/60 text-amber-900 dark:bg-amber-500/10 dark:border-amber-500/20 dark:text-amber-200',
  success: 'bg-emerald-50/50 border-emerald-200/60 text-emerald-900 dark:bg-emerald-500/10 dark:border-emerald-500/20 dark:text-emerald-200',
  danger: 'bg-red-50/50 border-red-200/60 text-red-900 dark:bg-red-500/10 dark:border-red-500/20 dark:text-red-200',
};

const iconColors = {
  info: 'text-blue-500',
  warning: 'text-amber-500',
  success: 'text-emerald-500',
  danger: 'text-red-500',
};

const icons = {
  info: (
    <svg className="w-5 h-5 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  warning: (
    <svg className="w-5 h-5 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
    </svg>
  ),
  success: (
    <svg className="w-5 h-5 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  danger: (
    <svg className="w-5 h-5 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
};

export default function Callout({ type = 'info', title, children }: CalloutProps) {
  return (
    <div className={`my-6 flex gap-3 p-5 rounded-2xl border ${styles[type]} shadow-sm`}>
      <div className={iconColors[type]}>{icons[type]}</div>
      <div className="flex flex-col gap-1 w-full text-sm leading-relaxed">
        {title && <span className="font-semibold text-base">{title}</span>}
        <div className="opacity-90 [&>p]:my-0">
          {children}
        </div>
      </div>
    </div>
  );
}
