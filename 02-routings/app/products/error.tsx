"use client"; ///  this is a error page
// it should always use "use client" as it is a client side page when any error occurs

import { useRouter, } from "next/navigation";
import { startTransition } from "react";
export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  const router = useRouter();
  const reload = () => {
      startTransition(() => {
        router.refresh()
        reset()
      })
  }
  return (
    <>
      <h1 className="bg-black text-3xl text-white">{error.message}</h1>
      <button onClick={() => reload() } className="bg-red-100 hover:bg-amber-400"> Try again</button>
    </>
  );
}
