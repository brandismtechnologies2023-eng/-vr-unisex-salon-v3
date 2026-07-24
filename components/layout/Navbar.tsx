"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { navLinks, siteContent } from "@/lib/data";
import { siteConfig } from "@/lib/site-config";
import Button from "@/components/shared/Button";

const { common } = siteContent;

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  // Lock background scroll while the off-canvas mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-secondary">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/logo.webp"
            alt={siteConfig.name}
            width={190}
            height={190}
            priority
            className="h-22 w-22 rounded-lg object-cover lg:h-16 lg:w-16"
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.label} className="group relative">
                <button className="flex items-center gap-1 text-sm font-medium text-primary hover:text-white">
                  {link.label}
                  <ChevronDown className="h-4 w-4" />
                </button>
                <div className="invisible absolute left-1/2 top-full grid w-[660px] -translate-x-1/2 grid-cols-2 gap-x-6 gap-y-1 rounded-2xl border border-primary/30 bg-[color-mix(in_srgb,var(--color-primary),white_50%)] p-4 opacity-0 shadow-xl transition-all group-hover:visible group-hover:opacity-100">
                  {link.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="rounded-lg px-3 py-2 text-sm text-secondary hover:bg-white/50"
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
                className="text-sm font-medium text-primary hover:text-white"
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden lg:block">
          <Button href="/contact" size="sm" variant="secondary">
            {common.bookAppointmentLabel}
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          className="text-primary lg:hidden"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Backdrop */}
      <div
        onClick={() => setMobileOpen(false)}
        aria-hidden="true"
        className={`fixed inset-0 z-[60] bg-black/50 transition-opacity duration-300 lg:hidden ${
          mobileOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      {/* Off-canvas drawer, slides in from the left */}
      <div
        className={`fixed inset-y-0 left-0 z-[70] flex w-72 max-w-[80%] flex-col bg-secondary shadow-xl transition-transform duration-300 lg:hidden ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
          <Link href="/" onClick={() => setMobileOpen(false)} className="flex items-center gap-2">
            <Image
              src="/images/logo.webp"
              alt={siteConfig.name}
              width={100}
              height={100}
              className="h-12 w-12 rounded-lg object-cover"
            />
          </Link>
          <button
            type="button"
            onClick={() => setMobileOpen(false)}
            className="text-primary"
            aria-label="Close menu"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <nav className="flex flex-1 flex-col gap-1 overflow-y-auto px-4 py-4">
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.label}>
                <button
                  type="button"
                  onClick={() => setMobileServicesOpen((v) => !v)}
                  className="flex w-full items-center justify-between py-2 text-sm font-medium text-primary"
                >
                  {link.label}
                  <span className="relative flex h-4 w-4 shrink-0 items-center justify-center">
                    <span className="absolute h-0.5 w-4 rounded-full bg-primary" />
                    <span
                      className={`absolute h-4 w-0.5 rounded-full bg-primary transition-transform duration-200 ${
                        mobileServicesOpen ? "scale-y-0" : "scale-y-100"
                      }`}
                    />
                  </span>
                </button>
                {mobileServicesOpen && (
                  <div className="ml-3 flex flex-col gap-1 border-l border-primary/30 pl-3">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setMobileOpen(false)}
                        className="py-1.5 text-sm text-primary/80"
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
                className="py-2 text-sm font-medium text-primary"
              >
                {link.label}
              </Link>
            )
          )}
          <Button href="/contact" size="sm" variant="secondary" className="mt-3 w-full">
            {common.bookAppointmentLabel}
          </Button>
        </nav>
      </div>
    </header>
  );
}
