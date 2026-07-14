import { CalendarCheck, MessageCircle, Phone } from "lucide-react";
import Button from "@/components/shared/Button";
import { siteConfig, telLink, whatsappLink } from "@/lib/site-config";

export default function ContactCta() {
  return (
    <section className="bg-rose-600">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 py-16 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">
          Ready for Your Next Appointment?
        </h2>
        <p className="max-w-xl text-rose-100">
          Reach out on WhatsApp, give us a call, or book online — whichever
          is easiest for you.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Button
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            variant="secondary"
            size="lg"
            icon={<MessageCircle className="h-5 w-5" />}
          >
            WhatsApp
          </Button>
          <Button
            href={telLink()}
            size="lg"
            className="bg-white text-rose-600 hover:bg-zinc-100"
            icon={<Phone className="h-5 w-5" />}
          >
            Call {siteConfig.phone}
          </Button>
          <Button
            href="/contact"
            size="lg"
            className="border border-white bg-transparent text-white hover:bg-white/10"
            icon={<CalendarCheck className="h-5 w-5" />}
          >
            Book Appointment
          </Button>
        </div>
      </div>
    </section>
  );
}
