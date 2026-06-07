import { getAllDocs, getDocBySlug } from '@/lib/mdx';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { notFound } from 'next/navigation';
import rehypeSlug from 'rehype-slug';
import Callout from '@/components/mdx/Callout';
import CodeBlock from '@/components/mdx/CodeBlock';
import RAGPipelineVisualizer from '@/components/mdx/RAGPipelineVisualizer';
import Formula from '@/components/mdx/Formula';
import InterviewSpotlight from '@/components/mdx/InterviewSpotlight';

const mdxComponents = {
  Callout,
  pre: CodeBlock,
  RAGPipelineVisualizer,
  Formula,
  InterviewSpotlight,
};

export async function generateStaticParams() {
  const docs = getAllDocs();
  return docs.map((doc) => ({
    slug: doc.slug,
  }));
}

export default async function DocPage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  const doc = getDocBySlug(slug);

  if (!doc) {
    notFound();
  }

  return (
    <div>
      <div className="mb-10">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[var(--text-primary)] mb-4 leading-[1.15]">
          {doc.frontmatter.title}
        </h1>
        {(doc.frontmatter.difficulty || doc.frontmatter.readingTime) && (
          <div className="flex gap-3 text-[var(--text-secondary)] font-medium text-sm">
            {doc.frontmatter.difficulty && (
              <span className="bg-[var(--surface)] px-3 py-1 rounded-full border border-[var(--border)]">{doc.frontmatter.difficulty}</span>
            )}
            {doc.frontmatter.readingTime && (
              <span className="flex items-center gap-1.5 bg-[var(--surface)] px-3 py-1 rounded-full border border-[var(--border)]">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {doc.frontmatter.readingTime}
              </span>
            )}
          </div>
        )}
      </div>

      <div className="prose prose-slate prose-lg max-w-none
        prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-[var(--text-primary)]
        prose-p:text-[var(--foreground)]
        prose-strong:text-[var(--text-primary)]
        prose-a:text-primary hover:prose-a:text-primary/80
        prose-img:rounded-2xl prose-img:shadow-xl
        prose-li:text-[var(--foreground)]
        prose-blockquote:text-[var(--text-secondary)]
        prose-hr:border-[var(--border)]
        prose-pre:bg-transparent prose-pre:p-0 prose-pre:m-0
        dark:prose-invert
        [&_:not(pre)>code]:text-primary [&_:not(pre)>code]:bg-primary/5 [&_:not(pre)>code]:px-1.5 [&_:not(pre)>code]:py-0.5 [&_:not(pre)>code]:rounded-md [&_:not(pre)>code]:font-medium [&_:not(pre)>code]:before:content-none [&_:not(pre)>code]:after:content-none
      ">
        <MDXRemote
          source={doc.content}
          components={mdxComponents}
          options={{
            mdxOptions: {
              rehypePlugins: [rehypeSlug],
            }
          }}
        />
      </div>
    </div>
  );
}
