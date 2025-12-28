import { redirect } from "next/navigation";

export default function  review() {
  return (
    <div>
       <h1 className="text-center font-bold text-2xl text-blue-500"> you will have review page here </h1>
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" 
         onClick={ () => {
            redirect('/products');
         } }
        >
          Go to products page
        </button>
    </div>
  );
}