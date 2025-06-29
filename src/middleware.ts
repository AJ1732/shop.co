import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === "/product") {
    return NextResponse.redirect(new URL("/shop", request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: "/product",
};
