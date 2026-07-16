import Image from "next/image";
import SectionHeading from "@/components/shared/SectionHeading";
import { InstagramIcon, WhatsAppIcon } from "@/components/shared/SocialIcons";
import { team } from "@/lib/data";
import { siteConfig, whatsappLink } from "@/lib/site-config";

export default function MeetTheTeam() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Our Team"
        title="Meet the Skilled Hands Behind VR Salon"
        subtitle="The founders and stylists who make every visit feel effortless."
      />

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {team.map((member) => (
          <div
            key={member.id}
            className="group flex flex-col overflow-hidden rounded-2xl border border-zinc-100 bg-white shadow-sm transition-shadow hover:shadow-md"
          >
            {/* Square panel matches the 1:1 cutout exactly, so the tinted
                backdrop reads as the wall behind each person. */}
            <div className="relative aspect-square bg-primary/30 transition-colors duration-300 group-hover:bg-secondary">
              <Image
                src={member.image}
                alt={member.name}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover"
              />

              <div className="absolute inset-x-0 bottom-4 flex translate-y-3 justify-center gap-3 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <a
                  href={siteConfig.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${member.name} on Instagram`}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-secondary shadow-md transition-colors hover:bg-primary"
                >
                  <InstagramIcon className="h-4 w-4" />
                </a>
                <a
                  href={whatsappLink(`Hi, I'd like to book an appointment with ${member.name}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Book ${member.name} on WhatsApp`}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-secondary shadow-md transition-colors hover:bg-primary"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="flex flex-1 flex-col p-6">
              <h3 className="text-xl font-semibold text-secondary">{member.name}</h3>
              <p className="mt-1 text-sm font-medium text-third">{member.role}</p>
              <p className="mt-3 text-sm leading-relaxed text-zinc-600">{member.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
