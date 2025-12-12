import './globals.css'; // Global styles

export const metadata = {
  title: 'My Simple Blog',
  description: 'A Next.js learning project',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <nav style={{ padding: '1rem', background: '#f0f0f0' }}>
          <a href="/" style={{ marginRight: '1rem' }}>Home</a>
          <a href="/about">About</a>
        </nav>
        <main style={{ padding: '1rem' }}>{children}</main>
      </body>
    </html>
  );
}