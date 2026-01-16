// app/posts/[id]/page.tsx
import { notFound } from 'next/navigation';

// Hardcoded posts for now
const posts = [
  { id: '1', title: 'First Post', content: 'This is my first blog post.' },
  { id: '2', title: 'Second Post', content: 'Learning Next.js is fun!' },
];

export default function PostPage({ params }: { params: { id: string } }) {
  const post = posts.find((p) => p.id === params.id);
  if (!post) return notFound(); // Handles 404

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}