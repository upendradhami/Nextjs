

/// // if you want to use client side then params and srechparams will not work in client side component
// so you have to use {use } from 'react ' and then use it like below
'use client';
import {use} from 'react';

import Link from "next/link";
export default function ArticlePage(
  {
   params,
   searchParams
  }:{
    params: Promise<{articleid: string;}>;
    searchParams: Promise<{ lang ?: 'en' | 'fr' | 'es'}>}
  ) {

  const {articleid} = use(params); //  here 
  const {lang = 'en'} =  use(searchParams);
  return (

    <>
       <h1 className="text-center text-blue-400 font-bold">Welcome to {articleid} page , You are using {lang} Language </h1>
      
      <div className="flex justify-center gap-5 m-5 p-5"  >
         <Link href={`/articles/news-article?lang=en`}>English</Link>
        <Link href={`/articles/news-article?lang=fr`}>French</Link>
        <Link href={`/articles/news-article?lang=es`}>Spanish</Link>
      </div>
    </>
  )
}