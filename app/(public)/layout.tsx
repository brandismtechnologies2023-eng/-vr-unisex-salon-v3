import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import GlobalBreadcrumb from "@/components/layout/GlobalBreadcrumb";
import ScrollToTop from "@/components/shared/ScrollToTop";

// Chrome for the public-facing site. The admin panel deliberately sits
// outside this group so it doesn't inherit the navbar/footer.
export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <GlobalBreadcrumb />
      <main className="flex-1">{children}</main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
