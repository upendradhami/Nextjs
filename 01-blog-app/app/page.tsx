import Link from 'next/link';

// Reuse the same hardcoded posts
const posts = [
  { id: '1', title: 'First Post', content: 'This is my first blog post.' },
  { id: '2', title: 'Second Post', content: 'Learning Next.js is fun!' },
];

export default function Home() {
  return (
    <div>
      <h1>Welcome to My Blog</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}