export default async function ProductId(
  {params} :
 {params : Promise<{ productid: string }>} 
) {
   const{ productid} = await params;
   return <>
      
      <h1 className="text-3xl text-center font-bold text-green-400">
        This is product page for product id: {productid}
      </h1>
   </>
}