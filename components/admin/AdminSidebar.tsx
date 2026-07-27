"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LogOut } from "lucide-react";
import { adminNav } from "@/lib/admin/nav";
import { logout } from "@/app/admin/login/actions";

export default function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex w-60 shrink-0 flex-col border-r border-zinc-200 bg-white">
      <div className="border-b border-zinc-200 px-5 py-4">
        <p className="text-sm font-bold text-secondary">VR Salon</p>
        <p className="text-xs text-zinc-400">Admin Panel</p>
      </div>

      <nav className="flex-1 space-y-1 p-3">
        {adminNav.map((item) => {
          const active =
            item.href === "/admin"
              ? pathname === "/admin"
              : pathname.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`block rounded-lg px-3 py-2 text-sm transition-colors ${
                active
                  ? "bg-secondary text-white"
                  : "text-zinc-600 hover:bg-zinc-100"
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>

      <form action={logout} className="border-t border-zinc-200 p-3">
        <button
          type="submit"
          className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm text-zinc-600 transition-colors hover:bg-zinc-100"
        >
          <LogOut className="h-4 w-4" />
          Log Out
        </button>
      </form>
    </aside>
  );
}
