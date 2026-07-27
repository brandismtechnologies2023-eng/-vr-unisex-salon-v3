import SectionHeading from "@/components/shared/SectionHeading";
import FaqAccordion from "@/components/shared/FaqAccordion";
import { siteContent } from "@/lib/data";
import { faqsContent } from "@/lib/content/faqs";
import { whatsappLink } from "@/lib/site-config";

const content = siteContent.faqSection;

export default async function Faq() {
  const faqs = await faqsContent.getAll();
  return (
    <section className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading eyebrow={content.eyebrow} title={content.title} subtitle={content.subtitle} />
      <FaqAccordion items={faqs} />
      <p className="mt-8 text-center text-sm text-zinc-500">
        {content.stillHaveQuestions}{" "}
        <a
          href={whatsappLink(content.whatsappMessage)}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-secondary"
        >
          {content.chatLabel}
        </a>
      </p>
    </section>
  );
}
