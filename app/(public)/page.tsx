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
import { getServices } from "@/lib/content/services";
import { getSetting } from "@/lib/content/settings";

export default async function Home() {
  const [services, gallery, testimonials, heroCopy, servicesCopy, galleryCopy, testimonialsCopy] =
    await Promise.all([
      getServices(),
      galleryContent.getAll(),
      testimonialsContent.getAll(),
      getSetting("hero"),
      getSetting("servicesSection"),
      getSetting("gallery"),
      getSetting("testimonials"),
    ]);

  return (
    <>
      <Hero content={heroCopy} />
      {/* <AboutConnect /> — disabled for now */}
      <WhyChooseUs />
      <MeetTheTeam />
      <Services limit={6} showViewAll heading={servicesCopy} items={services} />
      <BrandsWeUse />
      <Pricing />
      <Gallery media={gallery} heading={galleryCopy} />
      <InstagramFeed />
      <Testimonials reviews={testimonials} heading={testimonialsCopy} />
      <Faq />
      <ContactSection />
      <ContactCta />
    </>
  );
}
