import Hero from "@/components/home/Hero";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import MeetTheTeam from "@/components/home/MeetTheTeam";
import Services from "@/components/home/Services";
import BrandsWeUse from "@/components/home/BrandsWeUse";
import Pricing from "@/components/home/Pricing";
import Gallery from "@/components/home/Gallery";
import InstagramFeed from "@/components/home/InstagramFeed";
import Testimonials from "@/components/home/Testimonials";
import Faq from "@/components/home/Faq";
import ContactCta from "@/components/home/ContactCta";
import ContactSection from "@/components/home/ContactSection";
import { galleryContent } from "@/lib/content/gallery";
import { testimonialsContent } from "@/lib/content/testimonials";

export default async function Home() {
  const [gallery, testimonials] = await Promise.all([
    galleryContent.getAll(),
    testimonialsContent.getAll(),
  ]);

  return (
    <>
      <Hero />
      {/* <AboutConnect /> — disabled for now */}
      <WhyChooseUs />
      <MeetTheTeam />
      <Services limit={6} showViewAll />
      <BrandsWeUse />
      <Pricing />
      <Gallery media={gallery} />
      <InstagramFeed />
      <Testimonials reviews={testimonials} />
      <Faq />
      <ContactSection />
      <ContactCta />
    </>
  );
}
