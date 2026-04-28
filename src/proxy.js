import { NextResponse } from "next/server";
import { headers } from "next/headers";
import { auth} from "./lib/auth";

export async function proxy(request) {
  // console.log(request, 'request');

  const session = await auth.api.getSession({
    headers: await headers()
  });

  console.log(session, 'session');

  // const isLoggedIn = false; 

  // if (isLoggedIn) {

  if (session) {
    return NextResponse.next();
  }
  return NextResponse.redirect(new URL("/login", request.url));
}

export const config = {
  matcher: ["/career", "/news/:path*"],
};