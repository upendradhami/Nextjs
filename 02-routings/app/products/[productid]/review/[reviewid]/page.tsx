import {notFound} from "next/navigation";

export default async function review(
  {params} : {
    params: Promise < {reviewid: string, productid: string}>
  }
) {
  const {reviewid, productid} = await params;
  if( parseInt(reviewid) >= 1000){
   notFound();
  }
  return <>
     <h1 className="text-center text-3xl text-stone-300">
      This is review page for review id: {reviewid} and product id: {productid}
      </h1> 
      </> 
}