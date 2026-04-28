import { NextResponse } from "next/server";

export function proxy(request) {
  console.log(request, 'request');

  const isLoggedIn = false; // Replace with actual authentication logic

  if (isLoggedIn) {
    return NextResponse.next();
  }
  return NextResponse.redirect(new URL('/login', request.url));
}

export const config = {
  matcher: ['/career'],
};