import type { ReactNode } from "react";
import { Fragment } from "react";
import { CalendarCheck, Phone } from "lucide-react";
import Button from "@/components/shared/Button";
import { WhatsAppIcon } from "@/components/shared/SocialIcons";
import { siteContent } from "@/lib/data";
import { telLink, whatsappLink } from "@/lib/site-config";

const content = siteContent.contactCta;
const { common } = siteContent;

const DEFAULT_DESCRIPTION = (
  <>
    {content.descriptionLines.map((line, i) => (
      <Fragment key={line}>
        {i > 0 && <br />}
        {line}
      </Fragment>
    ))}
  </>
);

// Turns saved description lines into the <br/>-joined layout this component
// expects, dropping any line an admin has blanked out.
export function joinDescriptionLines(lines: string[]): ReactNode {
  return (
    <>
      {lines
        .filter((line) => line.trim() !== "")
        .map((line, i) => (
          <Fragment key={line}>
            {i > 0 && <br />}
            {line}
          </Fragment>
        ))}
    </>
  );
}

interface ContactCtaProps {
  // Only the wording varies per page — the layout, colours and buttons stay
  // here so restyling this one file updates the CTA everywhere. Pages that
  // want the admin-edited default (rather than their own custom wording)
  // fetch it themselves and pass it down — this stays a plain component so
  // client components (like ServiceDetail) can keep rendering it directly.
  title?: string;
  description?: ReactNode;
  bookLabel?: string;
  whatsappLabel?: string;
  callPrefix?: string;
  // The admin-editable contact number — every caller fetches it (via
  // getSetting("contactInfo")) and passes it down, since this component
  // itself stays a plain sync component so client callers can render it.
  phone: string;
}

export default function ContactCta({
  title = content.title,
  description = DEFAULT_DESCRIPTION,
  bookLabel = common.bookAppointmentLabel,
  whatsappLabel = content.whatsappLabel,
  callPrefix = content.callPrefix,
  phone,
}: ContactCtaProps) {
  return (
    <section className="bg-primary/30">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 py-16 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-secondary sm:text-4xl">{title}</h2>
        <p className="max-w-8xl text-secondary">{description}</p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Button
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            size="lg"
            className="bg-[#25D366] text-white hover:bg-[#1ebe5d]"
            icon={<WhatsAppIcon className="h-5 w-5" />}
          >
            {whatsappLabel}
          </Button>
          <Button
            href={telLink(phone)}
            size="lg"
            className="bg-secondary/60 text-white hover:bg-secondary hover:text-primary"
            icon={<Phone className="h-5 w-5" />}
          >
            {callPrefix} {phone}
          </Button>
          <Button
            href="/contact"
            size="lg"
            className="border border-secondary bg-primary/50 text-secondary hover:bg-white/10"
            icon={<CalendarCheck className="h-5 w-5" />}
          >
            {bookLabel}
          </Button>
        </div>
      </div>
    </section>
  );
}
