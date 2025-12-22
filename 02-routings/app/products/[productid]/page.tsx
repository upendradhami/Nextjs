import { Metadata } from "next";

type Props = {
  params: Promise<{ productid: string }>
}


export const generateMetadata = async ({params} : Props) : Promise<Metadata> => {
   const id = (await params).productid;
   const title = await new Promise<string>((resolve) => {
      setTimeout(() => {
         resolve(`Iphone ${id}`);
      }, 100);
   });   


   return {
      title : `Product ${title} ${id} page`,
   }
};

export default async function ProductId(
  {params} : Props
) {
   const{ productid} = await params;
   return <>
      
      <h1 className="text-3xl text-center font-bold text-green-400">
        This is product page for product id: {productid}
      </h1>
   </>
}