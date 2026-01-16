'use client';

import { useRouter } from "next/navigation";
export default function OrderProuduct() {
  const router = useRouter();
  const handleClick = () => {
    console.log('Placing your order');
         router.push("/");
          // router.replace("/dashboard");
         // router.back();
          }
  return (
    <div>
      <h1 className="text-center text-3xl font-bold text-green-400">Order Product Page</h1>
      <div className="flex justify-center m-5 p-5">
        <button
          onClick={handleClick}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          Place Order
        </button>
      </div>    
    </div>
  );
}