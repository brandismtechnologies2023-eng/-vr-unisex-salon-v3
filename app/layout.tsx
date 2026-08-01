import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { siteContent } from "@/lib/data";
import { siteConfig } from "@/lib/site-config";
import { indexingAllowed } from "@/lib/seo";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: `${siteConfig.name} | ${siteContent.siteMeta.titleSuffix}`,
  description: siteConfig.description,
  // Applies to every page unless a page overrides it. Keeps the demo URL out
  // of search results; flip ALLOW_INDEXING on the real domain.
  robots: indexingAllowed
    ? { index: true, follow: true }
    : { index: false, follow: false },
};

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
