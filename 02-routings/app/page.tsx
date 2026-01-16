
import Link from 'next/link';

export const metadata = {
  title: 'Home Page',
  description: 'This is the home page of our Next.js application.',
}

export default function HomePage() {
  return <>
   <h1 className="text-center font-bold text-3xl text-indigo-400 "> Welcome to Home Page</h1>
   <h2>Go to articles</h2>
   <Link href="/articles/news-article?lang=fr">Learning in french</Link>
   <Link href="/articles/news-article?lang=en">Learning in English</Link>
   </>
}