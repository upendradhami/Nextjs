'use client';

import { useState } from "react";


export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div className="flex flex-col justify-center items-center gap-5 m-5 p-5">
       <h1 className="text-center font-bold text-red-300">Counter is : {count} </h1>
       <button className="text-center bg-blue-500 p-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" 
        onClick={() => setCount(prev => prev + 1)}>Increment</button>
    </div>
  );
}