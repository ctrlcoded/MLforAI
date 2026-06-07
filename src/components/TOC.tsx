"use client";
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

type Heading = {
  id: string;
  text: string;
  level: number;
};

export default function TOC() {
  const [activeId, setActiveId] = useState<string>('');
  const [headings, setHeadings] = useState<Heading[]>([]);
  const pathname = usePathname();

  useEffect(() => {
    const extractHeadings = () => {
      const elements = Array.from(document.querySelectorAll('main h2, main h3'))
        .filter(el => el.id);

      const parsed = elements.map(el => ({
        id: el.id,
        text: el.textContent || '',
        level: el.tagName === 'H3' ? 3 : 2
      }));
      setHeadings(parsed);
    };

    extractHeadings();
    setTimeout(extractHeadings, 100);

    const handleScroll = () => {
      const elements = Array.from(document.querySelectorAll('main h2, main h3'));
      let currentId = '';
      for (const heading of elements) {
        if (heading.getBoundingClientRect().top < 150) {
          currentId = heading.id;
        }
      }
      setActiveId(currentId);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  if (headings.length === 0) return null;

  return (
    <div className="text-sm">
      <h4 className="font-semibold text-[var(--text-primary)] mb-4 tracking-tight text-xs uppercase tracking-wider">On this page</h4>
      <ul className="space-y-2">
        {headings.map(heading => (
          <li key={heading.id} className={heading.level === 3 ? 'ml-3 border-l pl-3 border-[var(--border)]' : ''}>
            <a
              href={`#${heading.id}`}
              className={`transition-colors block leading-relaxed ${
                activeId === heading.id
                  ? 'text-primary font-medium'
                  : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
              }`}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
