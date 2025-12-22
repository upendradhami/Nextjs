'use client';

import Link from "next/link";
import {usePathname} from 'next/navigation';

const navLinks = [
  {name:"forgot Password", href:"auth/forgotpassword" },
  {name:"login", href:"auth/login"},
  {name:"signup", href:"auth/signup"}
]
export default function AuthLayout({children} : {children: React.ReactNode}){
     const pathname = usePathname();
    
    return (
      <>
       {navLinks.map((link) => {
         const isActive = pathname === link.href || (pathname.startsWith(link.href) && link.href !== "/" ) ;
       return (  <Link href={link.href}
           className= {isActive ? "font-bold m-4" : "text-blue-300 m-4" }
           key={link.name}>{link.name}</Link>)
       })}

       {children}
       </>
    );
}