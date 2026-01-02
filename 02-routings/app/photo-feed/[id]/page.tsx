import wondersImages, { WonderImage } from "../wonders";
import Image from "next/image";
export default async function PhotoPage({
  params,
}:{
  params: Promise<{id:string} >;
}
) {
  const {id} = await params;
  const photo:WonderImage  = wondersImages.find(p => p.id === id )!;
  return (
    <div className="container mx-auto my-10 flex flex-col  items-center ">
      <div>
        <h1 className="text-center text-3xl font-bold my-4">{photo.name}</h1>
      </div>
      
      <Image  alt={photo.name}
        src={photo.src}
        style={{
          height: 500,
          width: 500,
        }}/>

        <div className="bg-white py-4">
          <h3>{photo.photographer}</h3>
          <h3>{photo.location}</h3>
        </div>
    </div>
  );
}