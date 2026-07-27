import SectionHeading from "@/components/shared/SectionHeading";
import FaqAccordion from "@/components/shared/FaqAccordion";
import { faqsContent } from "@/lib/content/faqs";
import { getSetting } from "@/lib/content/settings";
import { whatsappLink } from "@/lib/site-config";

export default async function Faq() {
  const [faqs, content] = await Promise.all([faqsContent.getAll(), getSetting("faqSection")]);
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
