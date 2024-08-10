import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  if (path.split("/")[1] !== "authentication" &&!request.cookies.has("token")) {
    return NextResponse.redirect(new URL("/authentication/login", request.url));
  }
  if (path.split("/")[1] === "authentication" && request.cookies.has("token")) {
    return NextResponse.redirect(new URL(`/newsfeed/style1`, request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/",
    "/auth/:path*",
    "/authentication/:path*",
    "/birthday",
    "/company/:path*",
    "/element/:path*",
    "/event",
    "/favourite/:path*",
    "/games",
    "/helpandsupport",
    "/helparticle",
    "/messanger",
    "/music",
    "/newsfeed/:path*",
    "/pagelist",
    "/profile/:path*",
    "/settings",
    "/weather",
  ],
};
