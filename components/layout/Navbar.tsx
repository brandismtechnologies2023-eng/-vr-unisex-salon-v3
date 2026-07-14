"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, Scissors, X } from "lucide-react";
import { navLinks } from "@/lib/data";
import { siteConfig } from "@/lib/site-config";
import Button from "@/components/shared/Button";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-100 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-rose-600 text-white">
            <Scissors className="h-4.5 w-4.5" />
          </span>
          <span className="text-lg font-bold text-zinc-900">{siteConfig.shortName}</span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.label} className="group relative">
                <button className="flex items-center gap-1 text-sm font-medium text-zinc-700 hover:text-rose-600">
                  {link.label}
                  <ChevronDown className="h-4 w-4" />
                </button>
                <div className="invisible absolute left-1/2 top-full grid w-[560px] -translate-x-1/2 grid-cols-2 gap-x-6 gap-y-1 rounded-2xl border border-zinc-100 bg-white p-4 opacity-0 shadow-xl transition-all group-hover:visible group-hover:opacity-100">
                  {link.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="rounded-lg px-3 py-2 text-sm text-zinc-600 hover:bg-rose-50 hover:text-rose-600"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-zinc-700 hover:text-rose-600"
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden lg:block">
          <Button href="/contact" size="sm">
            Book Appointment
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          className="lg:hidden"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-zinc-100 bg-white px-4 py-4 lg:hidden">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.label}>
                  <button
                    type="button"
                    onClick={() => setMobileServicesOpen((v) => !v)}
                    className="flex w-full items-center justify-between py-2 text-sm font-medium text-zinc-700"
                  >
                    {link.label}
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${
                        mobileServicesOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {mobileServicesOpen && (
                    <div className="ml-3 flex flex-col gap-1 border-l border-zinc-100 pl-3">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setMobileOpen(false)}
                          className="py-1.5 text-sm text-zinc-600"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="py-2 text-sm font-medium text-zinc-700"
                >
                  {link.label}
                </Link>
              )
            )}
            <Button href="/contact" size="sm" className="mt-3 w-full">
              Book Appointment
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
