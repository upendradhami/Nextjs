'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ProductsLayout({children} : {children: React.ReactNode}) {
   const pathname = usePathname();
   const productid = pathname.split("/")[2];
   const reviewid = pathname.split("/")[4];

    return (
    <>
     <div className=" m-5">
       <h1 className="text-center font-bold text-3xl text-green-500"> Welcome to Products Layout Page </h1> <div className="text-center text-xl font-semibold underline m-5">

      <Link href="/products" className="text-center text-xl text-purple-500 underline"> Back to Products Main Page </Link>
      
      <Link href={`/products/${productid}/review`} className="text-center text-xl text-blue-500 underline"> Back to Products Page :{productid} </Link>


      <Link href={`/products/${productid}/review/${reviewid}`} className="text-center text-xl text-red-500 underline"> go to review page : {reviewid} </Link>
      </div>
       {children}
     </div>
    </>
    );
}