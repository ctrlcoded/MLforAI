"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NAVIGATION = [
  {
    title: 'Getting Started',
    links: [
      { title: 'Introduction to ML', href: '/docs/introduction' },
      { title: 'Core Foundations', href: '/docs/core-foundations' },
    ],
  },
  {
    title: 'ML Foundations',
    links: [
      { title: 'Statistics for ML', href: '/docs/statistics-for-ml' },
      { title: 'Probability for ML', href: '/docs/probability-for-ml' },
      { title: 'Data Preprocessing', href: '/docs/data-preprocessing' },
      { title: 'Feature Engineering', href: '/docs/feature-engineering' },
      { title: 'ML Fundamentals', href: '/docs/ml-fundamentals' },
    ],
  },
  {
    title: 'Machine Learning',
    links: [
      { title: 'Evaluation Metrics', href: '/docs/evaluation' },
      { title: 'Error Analysis', href: '/docs/error-analysis' },
      { title: 'Supervised Learning', href: '/docs/supervised-learning' },
      { title: 'Unsupervised Learning', href: '/docs/unsupervised-learning' },
    ],
  },
  {
    title: 'Deep Learning',
    links: [
      { title: 'Optimization', href: '/docs/optimization' },
      { title: 'Neural Networks', href: '/docs/neural-networks' },
      { title: 'Deep Architectures', href: '/docs/deep-learning' },
    ],
  },
  {
    title: 'Generative AI',
    links: [
      { title: 'The Bridge to GenAI', href: '/docs/classical-ml-to-llm-bridge' },
      { title: 'Transformers', href: '/docs/transformers' },
      { title: 'Embeddings & Vector DBs', href: '/docs/embeddings-and-vector-databases' },
      { title: 'Large Language Models', href: '/docs/large-language-models' },
      { title: 'RAG Architecture', href: '/docs/rag' },
      { title: 'AI Agents', href: '/docs/agents' },
    ],
  },
  {
    title: 'Production & Interviews',
    links: [
      { title: 'System Design', href: '/docs/ai-engineer-system-design' },
      { title: 'MLOps Fundamentals', href: '/docs/mlops-fundamentals' },
      { title: 'Interview Mastery', href: '/docs/ai-engineer-interview-mastery' },
    ],
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <nav className="w-full text-base lg:text-sm">
      <ul className="space-y-8">
        {NAVIGATION.map((section) => (
          <li key={section.title}>
            <h2 className="font-semibold text-[var(--text-primary)] mb-3 text-xs uppercase tracking-wider">{section.title}</h2>
            <ul className="space-y-1 border-l border-[var(--border)]">
              {section.links.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`block pl-4 py-1 -ml-[1px] border-l transition-colors duration-150 ${
                        isActive
                          ? 'text-primary border-primary font-medium'
                          : 'text-[var(--text-secondary)] border-transparent hover:border-[var(--text-muted)] hover:text-[var(--text-primary)]'
                      }`}
                    >
                      {link.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  );
}
