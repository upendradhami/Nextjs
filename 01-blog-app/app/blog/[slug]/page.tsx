// app/blog/[slug]/page.tsx
import { getPostBySlug } from '@/lib/post';
import ReactMarkdown from 'react-markdown';

// This is an async Server Component
export default async function BlogPost({ params }: { params: { slug: string } }) {
  // We await params in the latest Next.js versions (if you get a warning, this is why)
  // For standard setups, params is available directly.
  const { slug } = await params; 
  
  const post = getPostBySlug(slug);

  return (
    <main className="p-10 max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-500 mb-8">{post.date}</p>
      
      <article className="prose lg:prose-xl">
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </article>
    </main>
  );
}