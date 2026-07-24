import Hero from "@/components/home/Hero";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import MeetTheTeam from "@/components/home/MeetTheTeam";
import Services from "@/components/home/Services";
import Pricing from "@/components/home/Pricing";
import Gallery from "@/components/home/Gallery";
import InstagramFeed from "@/components/home/InstagramFeed";
import Testimonials from "@/components/home/Testimonials";
import Faq from "@/components/home/Faq";
import ContactCta from "@/components/home/ContactCta";
import ContactSection from "@/components/home/ContactSection";

export default function Home() {
  return (
    <>
      <Hero />
      {/* <AboutConnect /> — disabled for now */}
      <WhyChooseUs />
      <MeetTheTeam />
      <Services limit={6} showViewAll />
      <Pricing />
      <Gallery />
      <InstagramFeed />
      <Testimonials />
      <Faq />
      <ContactSection />
      <ContactCta />
    </>
  );
}
