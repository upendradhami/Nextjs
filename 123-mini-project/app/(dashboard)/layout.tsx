import Link from "next/link";

export default function DashboardLayout({children} :
  {
    children: React.ReactNode;
  }
) {
  return (
     <div className="container m-0 p-0">
      <div className="flex flex-col bg-white"> 
        <Link href={'/'}>back to home </Link>
        <Link href={'/events'}>Events</Link>
      </div>
      <div>{children}</div>
     </div>
  )
}