import type { Metadata } from "next";
import type { ReactNode } from "react";
import { privacyPolicy, type PolicyBlock } from "@/lib/privacy-policy";
import { siteConfig, telLink } from "@/lib/site-config";

export const metadata: Metadata = {
  title: `${privacyPolicy.title} | ${siteConfig.name}`,
  description:
    "How VR Unisex Salon collects, uses, shares and protects your personal information, and the privacy rights you have under UAE data protection law.",
};

const LINK_PATTERN = /(https?:\/\/[^\s]+|[\w.+-]+@[\w-]+\.[\w.]+|\+971[\d ]+\d)/g;

// Turns the URLs, email addresses and phone numbers in the policy text into
// links. Our own site opens in the same tab; everything else in a new one.
function linkify(text: string): ReactNode[] {
  return text.split(LINK_PATTERN).map((part, i) => {
    if (i % 2 === 0) return part;
    const isEmail = part.includes("@") && !part.startsWith("http");
    const isPhone = part.startsWith("+");
    const href = isEmail ? `mailto:${part}` : isPhone ? telLink(part) : part;
    const external = !isEmail && !isPhone && !part.includes("vrunisexsalon.com");
    return (
      <a
        key={i}
        href={href}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        className="break-words text-third underline underline-offset-2 hover:text-secondary"
      >
        {part}
      </a>
    );
  });
}

function Block({ block }: { block: PolicyBlock }) {
  switch (block.type) {
    case "p":
      return <p className="mt-4 leading-relaxed text-zinc-600">{linkify(block.text)}</p>;
    case "h3":
      return <h3 className="mt-6 font-semibold text-secondary">{block.text}</h3>;
    case "ul":
      return (
        <ul className="mt-4 list-disc space-y-2 pl-6 leading-relaxed text-zinc-600 marker:text-third">
          {block.items.map((item) => (
            <li key={item}>{linkify(item)}</li>
          ))}
        </ul>
      );
    case "lines":
      return (
        <p className="mt-4 leading-relaxed text-zinc-600">
          {block.title && <span className="block font-semibold text-secondary">{block.title}</span>}
          {block.lines.map((line) => (
            <span key={line} className="block">
              {linkify(line)}
            </span>
          ))}
        </p>
      );
  }
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="bg-primary/15 py-16 lg:py-20">
        {/* Same look as SectionHeading, but the two dates stack on phones
            instead of wrapping mid-phrase. */}
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-secondary sm:text-4xl">{privacyPolicy.title}</h1>
          <p className="mt-4 text-zinc-600">
            <span className="block sm:inline">Effective Date: {privacyPolicy.effectiveDate}</span>
            <span className="hidden sm:inline"> · </span>
            <span className="block sm:inline">Last Updated: {privacyPolicy.lastUpdated}</span>
          </p>
        </div>
      </section>

      <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        {privacyPolicy.sections.map((section) => (
          <section key={section.title} className="mt-10 first:mt-0">
            <h2 className="text-xl font-bold text-secondary sm:text-2xl">{section.title}</h2>
            {section.blocks.map((block, i) => (
              <Block key={i} block={block} />
            ))}
          </section>
        ))}
      </article>
    </>
  );
}
