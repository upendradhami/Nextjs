import {Metadata } from "next" ;

export const metadata: Metadata = {
  title : "Second Blog Page",
  description : "This is second blog page description"
}

export default async function secondBlog() {
   await new Promise (resolve =>
     setTimeout(() => {
        resolve(true);
   }, 3000 ));

  return (
    <div> 
      <h1 className="text-center font-bold text-2xl text-yellow-500"> welcome to second blog page</h1>
    </div>
  );
} 