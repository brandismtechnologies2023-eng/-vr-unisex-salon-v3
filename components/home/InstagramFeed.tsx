import Image from "next/image";
import { CalendarCheck } from "lucide-react";
import Button from "@/components/shared/Button";
import InstagramSlider from "@/components/home/InstagramSlider";
import { InstagramIcon } from "@/components/shared/SocialIcons";
import { instagramPosts as placeholderPosts } from "@/lib/data";
import { getInstagramPosts, getInstagramProfile } from "@/lib/instagram";
import { siteConfig } from "@/lib/site-config";

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
    <section className="bg-primary">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        {/* Profile header */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="mx-auto h-20 w-20 overflow-hidden rounded-full ring-2 ring-secondary/20">
            <Image
              src="/images/logo.webp"
              alt={siteConfig.name}
              width={80}
              height={80}
              className="h-full w-full object-cover"
            />
          </div>

          <p className="mt-4 text-xl font-bold text-secondary">
            @{siteConfig.instagramHandle}
          </p>

          <dl className="mt-5 flex items-center justify-center gap-8">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="text-lg font-bold text-secondary">{stat.value}</dt>
                <dd className="mt-0.5 text-[11px] uppercase tracking-wider text-secondary/60">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>

          <p className="mt-5 text-sm leading-relaxed text-zinc-700">
            Beauty is constantly evolving, and so are we. Follow us for the latest transformations, styling inspiration, beauty tips, and behind-the-scenes moments from everyday life at VR Unisex Salon. 
          </p>

          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            <Button
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              icon={<InstagramIcon />}
            >
              Follow @{siteConfig.instagramHandle}
            </Button>
            <Button href="/contact" variant="outline" icon={<CalendarCheck className="h-4 w-4" />}>
              Book a Similar Look
            </Button>
          </div>
        </div>

        {/* Reels */}
        <div className="mt-14">
          <p className="mb-8 text-center text-sm font-semibold uppercase tracking-[0.2em] text-secondary">
            Our Instagram Reels
          </p>
          <InstagramSlider posts={posts} isLive={!!livePosts} />
        </div>
      </div>
    </section>
  );
}
