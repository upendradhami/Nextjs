import Link from "next/link";

export default function ArticlePage(
  {params}:
   {params: {articleid:string;
     searchid:string;
}}) {

  const {articleid, searchid} = params;
  return (

    <>
       <h1 className="text-center text-blue-400 font-bold">Welcome to Article page , You are using {articleid} {searchid} Language </h1>
      
      <div className="flex justify-center gap-5 m-5 p-5"  >
         <Link href="news-article?lang={articleid}">English</Link>
        <Link href="news-article?lang={articleid}}">French</Link>
      </div>
    </>
  )
}