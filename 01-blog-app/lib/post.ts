// lib/posts.ts
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'content');

export function getAllPosts() {
  // 1. Get file names under /content
  const fileNames = fs.readdirSync(contentDirectory);

  const allPostsData = fileNames.map((fileName) => {
    // 2. Remove ".md" from file name to get id
    const slug = fileName.replace(/\.md$/, '');

    // 3. Read markdown file as string
    const fullPath = path.join(contentDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // 4. Use gray-matter to parse the post metadata section
    const { data } = matter(fileContents);

    // Combine the data with the slug
    return {
      slug,
      ...data,
    } as { slug: string; title: string; date: string };
  });

  return allPostsData;
}


// Add this to lib/posts.ts

export function getPostBySlug(slug: string) {
  const fullPath = path.join(contentDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  
  const { data, content } = matter(fileContents);
  
  return {
    slug,
    content,
    ...data,
  } as { slug: string; title: string; date: string; content: string };
}