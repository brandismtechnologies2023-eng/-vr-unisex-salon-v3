import SectionHeading from "@/components/shared/SectionHeading";
import FaqAccordion from "@/components/shared/FaqAccordion";
import { faqs } from "@/lib/data";
import { whatsappLink } from "@/lib/site-config";

export default function Faq() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading eyebrow="FAQ" title="Frequently Asked Questions" />
      <FaqAccordion items={faqs} />
      <p className="mt-8 text-center text-sm text-zinc-500">
        Still have questions?{" "}
        <a
          href={whatsappLink("Hi, I have a question about your services.")}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-rose-600"
        >
          Chat with us on WhatsApp
        </a>
      </p>
    </section>
  );
}
