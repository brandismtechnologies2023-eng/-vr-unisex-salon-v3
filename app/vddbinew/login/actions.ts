"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { verifyPassword } from "@/lib/admin/password";
import { SESSION_COOKIE, createSessionToken } from "@/lib/admin/session";

export async function login(formData: FormData) {
  const password = String(formData.get("password") ?? "");

  if (!verifyPassword(password, process.env.ADMIN_PASSWORD_HASH)) {
    redirect("/vddbinew/login?error=1");
  }

  const token = await createSessionToken();
  (await cookies()).set(SESSION_COOKIE, token, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });

  redirect("/vddbinew");
}

export async function logout() {
  (await cookies()).delete(SESSION_COOKIE);
  redirect("/vddbinew/login");
}
