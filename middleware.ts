import { NextResponse, type NextRequest } from "next/server";
import { SESSION_COOKIE, isValidSessionToken } from "@/lib/admin/session";

// UX gate only: redirect unauthenticated visits to the login page. The real
// authorization check is requireAdmin() inside each admin server action/page.
export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // The login page itself must stay reachable while logged out.
  if (pathname === "/admin/login") return NextResponse.next();

  const token = request.cookies.get(SESSION_COOKIE)?.value;
  if (await isValidSessionToken(token)) return NextResponse.next();

  const loginUrl = new URL("/admin/login", request.url);
  return NextResponse.redirect(loginUrl);
}

export const config = {
  matcher: ["/admin/:path*"],
};
