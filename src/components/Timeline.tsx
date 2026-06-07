"use client";
import { useEffect, useRef } from 'react';
import Link from 'next/link';

const ROADMAP_STEPS = [
  { id: 1, title: 'Introduction to ML', description: 'What is ML, why AI Engineers need it, and the landscape of modern AI.', href: '/docs/introduction' },
  { id: 2, title: 'Core Foundations', description: 'Datasets, Features, Labels, Training/Validation/Test splits, and Bias-Variance.', href: '/docs/core-foundations' },
  { id: 3, title: 'Statistics for ML', description: 'Distributions, expected values, and the mathematical backbone of ML.', href: '/docs/statistics-for-ml' },
  { id: 4, title: 'Probability for ML', description: 'Bayes Theorem, conditional probability, and uncertainty modeling.', href: '/docs/probability-for-ml' },
  { id: 5, title: 'Data Preprocessing', description: 'Handling missing values, scaling, encoding, and data leakage prevention.', href: '/docs/data-preprocessing' },
  { id: 6, title: 'Feature Engineering', description: 'Creating meaningful signals, dimensionality reduction, and Feature Stores.', href: '/docs/feature-engineering' },
  { id: 7, title: 'ML Fundamentals', description: 'Loss functions, gradient descent intuitions, and the learning loop.', href: '/docs/ml-fundamentals' },
  { id: 8, title: 'Evaluation Metrics', description: 'Precision, Recall, F1-Score, PR-AUC, and choosing the right metric.', href: '/docs/evaluation' },
  { id: 9, title: 'Error Analysis', description: 'The 6-step workflow to diagnose why your model is failing.', href: '/docs/error-analysis' },
  { id: 10, title: 'Supervised Learning', description: 'Linear models, Decision Trees, and Ensemble methods (Random Forests, XGBoost).', href: '/docs/supervised-learning' },
  { id: 11, title: 'Unsupervised Learning', description: 'Clustering (K-Means, DBSCAN) and Anomaly Detection techniques.', href: '/docs/unsupervised-learning' },
  { id: 12, title: 'Optimization', description: 'Stochastic Gradient Descent, Momentum, Adam, and learning rate schedules.', href: '/docs/optimization' },
  { id: 13, title: 'Neural Networks', description: 'Perceptrons, hidden layers, activation functions, and Backpropagation.', href: '/docs/neural-networks' },
  { id: 14, title: 'Deep Architectures', description: 'CNNs for vision, RNNs/LSTMs for sequences, and Transfer Learning.', href: '/docs/deep-learning' },
  { id: 15, title: 'The Bridge to GenAI', description: 'The evolutionary story from Logistic Regression to Foundation Models.', href: '/docs/classical-ml-to-llm-bridge' },
  { id: 16, title: 'Transformers & Attention', description: 'Self-Attention, QKV, Multi-Head Attention, and Positional Encoding.', href: '/docs/transformers' },
  { id: 17, title: 'Embeddings & Vector DBs', description: 'Semantic search, Cosine Similarity, and indexing with Vector Databases.', href: '/docs/embeddings-and-vector-databases' },
  { id: 18, title: 'Large Language Models', description: 'Pre-training, Instruction Tuning, RLHF, Temperature, and Context Windows.', href: '/docs/large-language-models' },
  { id: 19, title: 'RAG Architecture', description: 'Chunking, Retrieval, Re-ranking, and production GenAI pipelines.', href: '/docs/rag' },
  { id: 20, title: 'AI Agents', description: 'Tool Calling, ReAct loops, Multi-Agent systems, and when NOT to use agents.', href: '/docs/agents' },
  { id: 21, title: 'System Design', description: 'Latency vs Cost, Semantic Caching, scaling, and architectural tradeoffs.', href: '/docs/ai-engineer-system-design' },
  { id: 22, title: 'MLOps Fundamentals', description: 'Model registries, drift detection, CI/CD for ML, and production monitoring.', href: '/docs/mlops-fundamentals' },
  { id: 23, title: 'Interview Mastery', description: 'The T-Shaped Engineer, Project Defense, and the most failed interview questions.', href: '/docs/ai-engineer-interview-mastery' },
];

export default function Timeline() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-12');
            observerRef.current?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = document.querySelectorAll('.timeline-card');
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <div className="relative border-l-2 border-[var(--border)] ml-4 md:ml-0">
      {ROADMAP_STEPS.map((step) => (
        <div
          key={step.id}
          className="timeline-card opacity-0 translate-y-12 transition-all duration-1000 ease-out mb-12 ml-8 md:ml-12 relative group"
        >
          <span className="absolute -left-[41px] md:-left-[57px] flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full ring-4 ring-[var(--background)] transition-transform duration-300 group-hover:scale-110 bg-primary text-white shadow-[0_4px_10px_rgba(55,101,243,0.3)]">
            <span className="text-sm md:text-base font-bold">{step.id}</span>
          </span>

          <Link href={step.href} className="block">
            <div className="bg-[var(--surface-elevated)] p-6 md:p-8 rounded-[24px] shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-[var(--border)] transition-all duration-300 hover:shadow-[0_12px_30px_rgba(0,0,0,0.08)] hover:-translate-y-1 dark:shadow-none dark:hover:shadow-[0_12px_30px_rgba(0,0,0,0.3)]">
              <h3 className="text-xl md:text-2xl font-bold text-[var(--text-primary)] mb-2 tracking-tight group-hover:text-primary transition-colors">
                {step.title}
              </h3>
              <p className="text-[var(--text-secondary)] text-base md:text-lg">{step.description}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
