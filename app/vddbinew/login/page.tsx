import type { Metadata } from "next";
import Image from "next/image";
import { login } from "./actions";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Admin Login",
  robots: { index: false, follow: false },
};

export default async function AdminLoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const { error } = await searchParams;

  return (
    <div className="flex min-h-screen items-center justify-center bg-secondary px-4">
      <div className="w-full max-w-sm rounded-2xl bg-white p-8 shadow-xl">
        <div className="mb-6 flex flex-col items-center text-center">
          <Image
            src="/images/logo.webp"
            alt={siteConfig.name}
            width={56}
            height={56}
            className="h-14 w-14 rounded-lg object-cover"
          />
          <h1 className="mt-4 text-lg font-bold text-secondary">Admin Panel</h1>
          <p className="mt-1 text-sm text-zinc-500">{siteConfig.name}</p>
        </div>

        <form action={login} className="space-y-4">
          <div>
            <label htmlFor="password" className="mb-1.5 block text-sm font-medium text-secondary">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              autoFocus
              className="w-full rounded-xl border border-zinc-200 px-4 py-2.5 text-sm outline-none focus:border-secondary"
            />
          </div>

          {error && (
            <p className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-600">
              Incorrect password. Please try again.
            </p>
          )}

          <button
            type="submit"
            className="w-full rounded-full bg-secondary px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-secondary/90"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}
