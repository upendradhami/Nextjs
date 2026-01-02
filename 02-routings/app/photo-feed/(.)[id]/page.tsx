import wondersImages,{WonderImage} from "../wonders";
import Image from "next/image";
import Modal from "@/components/modal";

export default async function PhotoPage({
  params
}:{
  params : Promise<{id: string}>
}) {
  const {id} = await params;
  const photo:WonderImage = wondersImages.find(p => p.id === id)!;
  return (
      <Modal>
         <div className="flex flex-cols mx-auto my-3">
        <h1>{photo.name} </h1>
        <Image
        alt={photo.name}
        src={photo.src}
        id={photo.id}
        className="h-full w-2xl" />
        <div>
          <h1>{photo.photographer}</h1>
          <h1>{photo.location}</h1>
        </div>

       </div>
      </Modal>
  );
}