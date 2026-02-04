'use client'

import { useEffect } from "react";

export default function ErrorPage({error} : {error: Error}) {

  useEffect(
    ()=>{
    console.error({error})
    },
    [error]
  )

  return (
    <div className="flex items-center justify-center">
      <h1 className="text-red-500 text-3xl">Error loading data</h1>
    </div>
  );
}