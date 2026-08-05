import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/site-config";
import { getSeoSettings } from "@/lib/content/seo-settings";
import { getSetting } from "@/lib/content/settings";

// Only the weights the UI actually uses — 300/800 were loaded but never
// applied, costing two extra render-blocking font files.
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

// Dynamic so the admin panel's "Search engine visibility" toggle takes effect
// without a redeploy. Applies to every page unless a page overrides it.
export async function generateMetadata(): Promise<Metadata> {
  const [{ allowIndexing }, meta] = await Promise.all([
    getSeoSettings(),
    getSetting("siteMeta"),
  ]);
  return {
    title: `${siteConfig.name} | ${meta.titleSuffix}`,
    description: meta.description ?? siteConfig.description,
    robots: allowIndexing
      ? { index: true, follow: true }
      : { index: false, follow: false },
  };
}

// Root layout is intentionally bare (just html/body/font). The public site
// chrome (navbar/footer) lives in app/(public)/layout.tsx; the admin panel
// has its own shell in app/vddbinew/layout.tsx.
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
