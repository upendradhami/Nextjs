import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mini Project by Upendra ",
  description: "Project to practice routings in nextjs",
};


export default function RootLayout({children} :
   {
    children: React.ReactNode;
   }){
    return (
       <html >
      <body>
        {children}
      </body>
     </html>
    );
   }