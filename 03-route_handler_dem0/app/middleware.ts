import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";


export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  const themePreference = request.cookies.cookies.get("theme");
  if(!themePreference){
    response.cookies.set("theme", "light");
  }

  return response;

  // return NextResponse.redirect(new URL("/hello", request.url));    // Redirect to /hello route using matcher config 

  // // now lets do it conditionally 
  // if (request.nextUrl.pathname === "/profile"){
  //   return NextResponse.rewrite(new URL("/dashboard", request.url));
  // }
}

// // methods used in middleware  matcher config for match 
// export const config = {
//   matcher: "/profile"
// };