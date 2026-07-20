import Button from "@/components/shared/Button";
import InstagramSlider from "@/components/home/InstagramSlider";
import { InstagramIcon } from "@/components/shared/SocialIcons";
import { instagramPosts as placeholderPosts } from "@/lib/data";
import { getInstagramPosts } from "@/lib/instagram";
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

export default async function InstagramFeed() {
  const livePosts = await getInstagramPosts(30);
  const posts = livePosts ?? placeholderPosts;

  return (
    <section className="relative overflow-hidden" style={{ background: sectionGradient }}>
      {/* Slow-drifting balloons — no outlines, just a soft blush glow. */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <span className="animate-drift-1 absolute left-[8%] top-28 h-44 w-44 rounded-full bg-primary/5 shadow-[0_0_120px_50px_rgba(236,215,208,0.09)]" />
        <span className="animate-drift-2 absolute right-[10%] top-36 h-36 w-36 rounded-full bg-primary/5 shadow-[0_0_100px_40px_rgba(236,215,208,0.08)]" />
        <span className="animate-drift-3 absolute bottom-32 left-[20%] h-28 w-28 rounded-full bg-primary/5 shadow-[0_0_90px_35px_rgba(236,215,208,0.07)]" />
        <span className="animate-drift-1 absolute right-[16%] bottom-28 h-40 w-40 rounded-full bg-primary/5 shadow-[0_0_110px_45px_rgba(236,215,208,0.08)]" />
      </div>

      {/* Padding exceeds the fade length so the heading and CTA sit on solid
          navy, clear of the light ramps where white text would wash out. */}
      <div className="relative mx-auto max-w-7xl px-4 py-44 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            Follow Along
          </span>
          <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
            Latest From Our Instagram
          </h2>
        </div>

        <InstagramSlider posts={posts} isLive={!!livePosts} />

        <div className="mt-10 flex justify-center">
          <Button
            href={siteConfig.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white/30 bg-white/5 text-white hover:bg-white/15"
            icon={<InstagramIcon />}
          >
            Follow @{siteConfig.instagramHandle}
          </Button>
        </div>
      </div>
    </section>
  );
}
