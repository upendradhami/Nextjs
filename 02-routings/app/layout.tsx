import Link from "next/link";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header className=" flex justify-center text-center text-2xl font-bold   m-5 bg-amber-400 p-3">
          <nav>
            <Link href="/" className="m-5 p-5 hover:text-blue-600"> Home </Link>
            <Link href="/dashboard" className="m-5 p-5 hover:text-blue-600"> Dashboard </Link>
            <Link href="/about" className="m-5 p-5 hover:text-blue-600"> About </Link>
            <Link href="/products" className="m-5 p-5 hover:text-blue-600"> Product </Link>
           </nav>
        </header>
        {children}
        <footer className="text-center text-2xl m-5 bg-blue-400 p-30"> Footer Section is here </footer>
      </body>
    </html>
  );
}
