"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    instgrm?: { Embeds: { process(): void } };
  }
}

const EMBED_SCRIPT = "https://www.instagram.com/embed.js";

// Instagram's own profile embed (latest posts grid). Needs no token or Meta
// app, so it stands in while no feed source returns posts. The script is
// only fetched once the block nears the viewport.
export default function InstagramProfileEmbed({ username }: { username: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const permalink = `https://www.instagram.com/${username}/`;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const load = () => {
      if (window.instgrm) {
        window.instgrm.Embeds.process();
      } else if (!document.querySelector(`script[src="${EMBED_SCRIPT}"]`)) {
        const script = document.createElement("script");
        script.src = EMBED_SCRIPT;
        script.async = true;
        document.body.appendChild(script);
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          observer.disconnect();
          load();
        }
      },
      { rootMargin: "400px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // embed.js swaps the blockquote for an iframe, so it's set as raw HTML
  // to keep React from trying to reconcile a node it no longer owns. Only
  // the iframe's outer box can be styled (its contents are Instagram's), so
  // its own thin border, margin and small radius are replaced by our card look.
  return (
    <div
      ref={ref}
      className="mx-auto max-w-[540px] overflow-hidden rounded-2xl border border-zinc-100 bg-white shadow-sm [&_iframe]:m-0! [&_iframe]:w-full! [&_iframe]:min-w-0! [&_iframe]:max-w-full! [&_iframe]:rounded-none! [&_iframe]:border-0! [&_iframe]:shadow-none!"
      dangerouslySetInnerHTML={{
        __html: `<blockquote class="instagram-media" data-instgrm-permalink="${permalink}" data-instgrm-version="14" style="background:#fff;border:0;border-radius:16px;margin:0 auto;max-width:540px;min-width:280px;width:100%;padding:0;"><a href="${permalink}" target="_blank" rel="noopener noreferrer" style="display:block;padding:24px;text-align:center;color:#272939;font-weight:600;">View @${username} on Instagram</a></blockquote>`,
      }}
    />
  );
}
