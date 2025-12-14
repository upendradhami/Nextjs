"use client";     // it is usedin orfer to use hooks like usePathname or other hooks . 

import { usePathname } from "next/navigation"


export default function notFound() {

  const pathname = usePathname();  // is a array of the path segments i.e products/productid/review/reviewid/not-found
  const productid = pathname.split("/")[2]; 
  const reviewid = pathname.split("/")[4];
  console.log(pathname)
    return <>
      <h1 className="text-center font-bold text-3xl text-red-600">
        404 - Review Page Not Found
    </h1>

     <h2 className="text-center font-bold text-xl text-blue-500 mt-3">
          For Product id: {productid} and Review id: {reviewid} we are unable to find the page
      </h2>
    </>

}