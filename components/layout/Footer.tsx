import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { navLinks, services } from "@/lib/data";
import { getSetting } from "@/lib/content/settings";
import { siteConfig } from "@/lib/site-config";
import { FacebookIcon, InstagramIcon } from "@/components/shared/SocialIcons";

export default async function Footer() {
  const content = await getSetting("footer");
  const midpoint = Math.ceil(services.length / 2);
  const serviceColumns = [
    services.slice(0, midpoint),
    services.slice(midpoint),
  ];

  return (
    <footer className="bg-secondary text-zinc-300">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 lg:grid-cols-[0.7fr_0.4fr_2fr_1.2fr] lg:px-8">
        {/* Column 1 */}
        <div>
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/logo.webp"
              alt={siteConfig.name}
              width={230}
              height={230}
              className="h-22 w-22 rounded-lg object-cover"
            />
          </Link>
          <p className="mt-4 text-sm text-zinc-400">{siteConfig.description}</p>
          <div className="mt-5 flex items-center gap-3">
            <a
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-third"
            >
              <InstagramIcon />
            </a>
            <a
              href={siteConfig.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-third"
            >
              <FacebookIcon />
            </a>
          </div>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
            {content.quickLinksHeading}
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-primary">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
            {content.servicesHeading}
          </h3>
          <div className="mt-4 grid grid-cols-2 gap-x-1 gap-y-2 text-sm">
            {serviceColumns.map((column, i) => (
              <ul key={i} className="space-y-2">
                {column.map((service) => (
                  <li key={service.id}>
                    <Link
                      href={`/services/${service.slug}`}
                      className="hover:text-primary"
                    >
                      {service.shortTitle ?? service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>

        {/* Column 4 */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
            {content.getInTouchHeading}
          </h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <a href={siteConfig.mapLink} target="_blank" rel="noopener noreferrer">
                {siteConfig.address}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0 text-primary" />
              <a href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`}>
                {siteConfig.phone}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0 text-primary" />
              <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            </li>
          </ul>
          <div className="mt-4 space-y-1 text-sm text-zinc-400">
            {siteConfig.hours.map((h) => (
              <p key={h.day}>
                {h.day}: {h.time}
              </p>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-6 text-center text-xs text-zinc-500">
        © {new Date().getFullYear()} {siteConfig.name}. {content.rightsReservedSuffix}
      </div>
    </footer>
  );
}
