import Image from "next/image";
import { CalendarCheck } from "lucide-react";
import Button from "@/components/shared/Button";
import InstagramSlider from "@/components/home/InstagramSlider";
import { InstagramIcon } from "@/components/shared/SocialIcons";
import { instagramPosts as placeholderPosts } from "@/lib/data";
import { getInstagramPosts, getInstagramProfile } from "@/lib/instagram";
import { siteConfig } from "@/lib/site-config";

// Dark navy body that fades from white at the top (matching the Gallery
// section above) into blush at the bottom (matching Testimonials' bg-primary/20
// below), so the section blends seamlessly with both neighbours.
//
// The fades are sized in pixels rather than percentages so the ramp stays a
// consistent, gradual length no matter how tall the content makes the section.
const FADE = 140;
const sectionGradient =
  `linear-gradient(180deg, #ffffff 0px, #272939 ${FADE}px, #272939 calc(100% - ${FADE}px), #fbf7f5 100%)`;

function formatCount(n: number): string {
  if (n >= 1000) return `${(n / 1000).toFixed(n % 1000 === 0 ? 0 : 1)}K+`;
  return `${n}+`;
}

export default async function InstagramFeed() {
  const [livePosts, profile] = await Promise.all([
    getInstagramPosts(30),
    getInstagramProfile(),
  ]);
  const posts = livePosts ?? placeholderPosts;

  const stats = [
    ...(profile
      ? [{ value: formatCount(profile.followersCount), label: "Followers" }]
      : []),
    { value: `${siteConfig.rating}★`, label: "Google" },
    { value: `${siteConfig.reviewCount}+`, label: "Reviews" },
  ];

  return (
    <section className="relative overflow-hidden" style={{ background: sectionGradient }}>
      {/* Slow-drifting balloons — no outlines, just a soft blush glow. */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <span className="animate-drift-1 absolute left-[8%] top-28 h-44 w-44 rounded-full bg-primary/5 shadow-[0_0_120px_50px_rgba(236,215,208,0.09)]" />
        <span className="animate-drift-2 absolute right-[10%] top-36 h-36 w-36 rounded-full bg-primary/5 shadow-[0_0_100px_40px_rgba(236,215,208,0.08)]" />
        <span className="animate-drift-3 absolute bottom-32 left-[20%] h-28 w-28 rounded-full bg-primary/5 shadow-[0_0_90px_35px_rgba(236,215,208,0.07)]" />
        <span className="animate-drift-1 absolute right-[16%] bottom-28 h-40 w-40 rounded-full bg-primary/5 shadow-[0_0_110px_45px_rgba(236,215,208,0.08)]" />
      </div>

      {/* Padding exceeds the fade length so the header and CTA sit on solid
          navy, clear of the light ramps where white text would wash out. */}
      <div className="relative mx-auto max-w-7xl px-4 py-44 sm:px-6 lg:px-8">
        {/* Profile header */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="mx-auto h-20 w-20 overflow-hidden rounded-full ring-2 ring-primary/40">
            <Image
              src="/images/logo.webp"
              alt={siteConfig.name}
              width={80}
              height={80}
              className="h-full w-full object-cover"
            />
          </div>

          <p className="mt-4 text-xl font-bold text-white">
            @{siteConfig.instagramHandle}
          </p>

          <dl className="mt-5 flex items-center justify-center gap-8">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="text-lg font-bold text-white">{stat.value}</dt>
                <dd className="mt-0.5 text-[11px] uppercase tracking-wider text-zinc-400">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>

          <p className="mt-5 text-sm leading-relaxed text-zinc-300">
            Real transformations from {siteConfig.name}, Burjuman — hair, skin,
            nails and beauty. Follow along on Instagram for our latest looks.
          </p>

          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            <Button
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
              icon={<InstagramIcon />}
            >
              Follow @{siteConfig.instagramHandle}
            </Button>
            <Button
              href="/contact"
              className="border border-white/30 bg-white/5 text-white hover:bg-white/15"
              icon={<CalendarCheck className="h-4 w-4" />}
            >
              Book a Similar Look
            </Button>
          </div>
        </div>

        {/* Reels */}
        <div className="mt-14">
          <p className="mb-8 text-center text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Our Instagram Reels
          </p>
          <InstagramSlider posts={posts} isLive={!!livePosts} />
        </div>
      </div>
    </section>
  );
}
