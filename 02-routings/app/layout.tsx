import "./globals.css";
import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <nav style={{ padding: "1rem", background: "#f0f0f0" }}>
          <div className="flex justify-center items-center m-1 p-2 align-middle">
            <Link href="/" style={{ marginRight: "1rem" }}>
              Home
            </Link>
            <Link href="/about" style={{ marginRight: "1rem" }}>About</Link>
            <Link href="/products">Products</Link>
          </div>
        </nav>
        <main style={{ padding: "1rem" }}>{children}</main>
      </body>
    </html>
  );
}
