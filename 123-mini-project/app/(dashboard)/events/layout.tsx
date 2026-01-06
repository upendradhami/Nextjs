export default function EventsLayout({
  children,
  feed,
  stats,
}: {
  children: React.ReactNode;
  feed: React.ReactNode;
  stats: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <section>
          {children} {/* This is the page.js content */}
          <div className="flex gap-4">
            <div className="w-2/3">{feed}</div> {/* Displays @feed */}
            <div className="w-1/3">{stats}</div> {/* Displays @stats */}
          </div>
        </section>
      </body>
    </html>
  );
}
