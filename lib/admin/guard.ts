import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { SESSION_COOKIE, isValidSessionToken } from "@/lib/admin/session";

// For server components/actions (Node runtime). Middleware does its own
// check with req.cookies and must not import this (it pulls in next/headers).

export async function isAdmin(): Promise<boolean> {
  const token = (await cookies()).get(SESSION_COOKIE)?.value;
  return isValidSessionToken(token);
}

// Call as the first line of every mutating admin server action, and in the
// admin layout — this is the real security boundary (middleware is only the
// redirect-to-login UX layer).
export async function requireAdmin(): Promise<void> {
  if (!(await isAdmin())) redirect("/admin/login");
}
