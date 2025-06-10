import { NextRequest, NextResponse } from "next/server";
import { getSessionCookie } from "better-auth/cookies";

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip middleware for static files and API routes
  // This is needed to properly load css file
  if (
    pathname.startsWith("/_next/") ||
    pathname.startsWith("/api/") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  const session = getSessionCookie(request);

  // No session and not on sign-in page -> redirect to sign-in
  if (!session && pathname !== "/sign-in") {
    return NextResponse.redirect(new URL("/sign-in", request.url));
  }

  // Session and on sign-in page -> redirect to home
  if (session && pathname === "/sign-in") {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

// This matches is also needed to show the css properly
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
