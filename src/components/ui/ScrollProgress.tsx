"use client";
import { useEffect, useState } from 'react';

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;

      const scrollableHeight = documentHeight - windowHeight;
      if (scrollableHeight <= 0) {
        setProgress(0);
        return;
      }

      const scrollPercent = (scrollTop / scrollableHeight) * 100;
      setProgress(scrollPercent);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-[3px] z-[100] pointer-events-none">
      <div
        className="h-full bg-primary transition-all duration-75 ease-out shadow-[0_0_10px_rgba(55,101,243,0.5)]"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
