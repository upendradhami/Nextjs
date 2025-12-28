'use client';

import  './globals.css'

// this page is shown in the production page not in development page so use npm run start build 

export default function GlobalError(){
  return (
    <html>
      <body>
        <div className='flex flex-col items-center justify-center min-h-screen'>
          
            <h1 className='text-2xl text-amber-600 font-bold mb-4'>Something Went Wrong here </h1>
           <button onClick={() => {
               /// on click it will refresh the page here 
               window.location.reload();
           }}
            className='bg-blue-400 hover:bg-blue-600 text-white 
            font-bold py-2 px-4'>
              Refresh
            </button>
           </div>
       
      </body>
    </html>
  )
}