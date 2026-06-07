import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'content');

export interface Frontmatter {
  title: string;
  description: string;
  prerequisites?: string[];
  readingTime: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
}

export interface MdxDocument {
  frontmatter: Frontmatter;
  content: string;
  slug: string[];
}

export function getMdxFiles(dir: string): string[] {
  let results: string[] = [];
  if (!fs.existsSync(dir)) return results;
  
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getMdxFiles(filePath));
    } else if (filePath.endsWith('.mdx')) {
      results.push(filePath);
    }
  });
  return results;
}

export function getAllDocs(): MdxDocument[] {
  const mdxFiles = getMdxFiles(contentDirectory);
  
  return mdxFiles.map((filePath) => {
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);
    
    const relativePath = path.relative(contentDirectory, filePath);
    // Replace backslashes with forward slashes for cross-platform consistency
    const normalizedPath = relativePath.split(path.sep).join('/');
    const slug = normalizedPath.replace(/\.mdx$/, '').split('/');

    return {
      frontmatter: data as Frontmatter,
      content,
      slug,
    };
  });
}

export function getDocBySlug(slugArray: string[]): MdxDocument | null {
  try {
    const slugPath = slugArray.join('/');
    const filePath = path.join(contentDirectory, `${slugPath}.mdx`);
    
    if (!fs.existsSync(filePath)) return null;

    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      frontmatter: data as Frontmatter,
      content,
      slug: slugArray,
    };
  } catch (e) {
    return null;
  }
}
