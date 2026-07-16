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

      <div className="space-y-16 lg:space-y-24">
        {team.map((member, i) => {
          // Alternate sides so the photo flips left/right down the column.
          const isReversed = i % 2 === 1;

          return (
            <div
              key={member.id}
              className="group grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-16"
            >
              <div className={isReversed ? "lg:order-2" : undefined}>
                {/* Square panel matches the 1:1 cutout exactly, so the tinted
                    backdrop reads as the wall behind each person. */}
                <div className="relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded-3xl bg-primary/30 transition-colors duration-300 group-hover:bg-secondary">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </div>

              <div className={isReversed ? "lg:order-1" : undefined}>
                <h3 className="text-3xl font-bold text-secondary sm:text-4xl">{member.name}</h3>
                <p className="mt-2 text-sm font-semibold uppercase tracking-wider text-third">
                  {member.role}
                </p>
                <span className="mt-5 block h-px w-12 bg-third/40" />
                <p className="mt-5 leading-relaxed text-zinc-600">{member.bio}</p>

                <div className="mt-7 flex gap-3">
                  <a
                    href={siteConfig.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${member.name} on Instagram`}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 text-secondary transition-colors hover:border-primary hover:bg-primary"
                  >
                    <InstagramIcon className="h-4 w-4" />
                  </a>
                  <a
                    href={whatsappLink(`Hi, I'd like to book an appointment with ${member.name}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Book ${member.name} on WhatsApp`}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 text-secondary transition-colors hover:border-primary hover:bg-primary"
                  >
                    <WhatsAppIcon className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
