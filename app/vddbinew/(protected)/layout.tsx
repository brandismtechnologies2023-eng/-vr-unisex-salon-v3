import type { Metadata } from "next";
import AdminSidebar from "@/components/admin/AdminSidebar";
import { requireAdmin } from "@/lib/admin/guard";

export const metadata: Metadata = {
  title: "Admin",
  robots: { index: false, follow: false },
};

// Real authorization boundary for admin pages (middleware is only the
// redirect-to-login UX layer). Runs on every request to a protected page.
export default async function ProtectedAdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  await requireAdmin();

  // On mobile AdminSidebar renders a sticky top bar plus a slide-in drawer;
  // from lg up it becomes the static left column.
  return (
    <div className="min-h-screen bg-zinc-50 lg:flex">
      <AdminSidebar />
      <div className="min-w-0 flex-1 overflow-x-hidden">{children}</div>
    </div>
  );
}
