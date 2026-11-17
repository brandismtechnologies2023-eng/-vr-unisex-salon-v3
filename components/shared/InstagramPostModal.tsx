"use client";

import { useEffect, useRef, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Heart,
  MessageCircle,
  Play,
  Send,
  Volume2,
  VolumeX,
} from "lucide-react";
import { useInstagramImage } from "@/hooks/useInstagramImage";
import type { InstagramMediaItem, InstagramPost } from "@/types";
import { siteContent } from "@/lib/data";
import { siteConfig } from "@/lib/site-config";
import { formatInstagramTimestamp } from "@/utils/formatInstagramTimestamp";
import ImagePlaceholder from "./ImagePlaceholder";

const content = siteContent.instagramPost;

interface InstagramPostModalProps {
  post: InstagramPost;
  href: string;
}

function renderCaption(caption: string) {
  return caption.split(/(#\S+)/g).map((part, i) =>
    part.startsWith("#") ? (
      <span key={i} className="text-sky-600">
        {part}
      </span>
    ) : (
      <span key={i}>{part}</span>
    )
  );
}

// The whole post at its own aspect ratio, with a blurred copy of the same
// image filling the rest of the frame instead of flat bars. Reels play in
// place; if the MP4 link has expired, the cover shows with a link out.
function MediaFrame({ item, href }: { item: InstagramMediaItem; href: string }) {
  const { src, onError } = useInstagramImage(item.image, item.fallbackImage);
  const [videoFailed, setVideoFailed] = useState(false);
  const [muted, setMuted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const showVideo = !!item.videoUrl && !videoFailed;

  // The reel just plays and loops, like in-app; the only control is sound.
  // The popup opens on a click, so sound is usually allowed; if the browser
  // still blocks it, play muted rather than not at all.
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.play().catch(() => {
      video.muted = true;
      setMuted(true);
      video.play().catch(() => {});
    });
  }, [showVideo]);

  // Set on the element directly: React doesn't keep the `muted` attribute in
  // sync after the first render.
  const toggleSound = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setMuted(video.muted);
    if (video.paused) video.play().catch(() => {});
  };

  if (!src && !showVideo) return <ImagePlaceholder className="h-full w-full" />;

  return (
    <div className="relative h-full w-full overflow-hidden">
      {src && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt=""
          aria-hidden
          className="absolute inset-0 h-full w-full scale-110 object-cover opacity-70 blur-2xl"
        />
      )}
      {showVideo ? (
        <>
          <video
            ref={videoRef}
            src={item.videoUrl}
            poster={src}
            playsInline
            loop
            onError={() => setVideoFailed(true)}
            className="relative h-full w-full object-contain"
          />
          <button
            type="button"
            onClick={toggleSound}
            aria-label={muted ? "Unmute" : "Mute"}
            className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-black/55 text-white transition-colors hover:bg-black/70"
          >
            {muted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
          </button>
        </>
      ) : (
        <>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt={content.reelAlt}
            onError={onError}
            className="relative h-full w-full object-contain"
          />
          {item.videoUrl && (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 flex flex-col items-center justify-center gap-3"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/85 shadow-md">
                <Play className="h-6 w-6 translate-x-0.5 fill-secondary text-secondary" />
              </span>
              <span className="rounded-full bg-black/55 px-3 py-1 text-xs font-medium text-white">
                {content.viewOnInstagramLabel}
              </span>
            </a>
          )}
        </>
      )}
    </div>
  );
}

export default function InstagramPostModal({ post, href }: InstagramPostModalProps) {
  const slides = post.children?.length ? post.children : [post];
  const [slide, setSlide] = useState(0);
  const isCarousel = slides.length > 1;

  return (
    <div className="flex max-h-[85vh] w-[92vw] max-w-4xl flex-col overflow-hidden rounded-xl bg-white sm:h-[75vh] sm:flex-row">
      <div className="relative h-72 shrink-0 bg-secondary sm:h-full sm:flex-1">
        {/* Keyed so each slide starts with a fresh image/fallback state. */}
        <MediaFrame key={slide} item={slides[slide]} href={href} />

        {isCarousel && (
          <>
            {slide > 0 && (
              <button
                type="button"
                onClick={() => setSlide((s) => s - 1)}
                aria-label="Previous photo"
                className="absolute left-3 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white/85 text-secondary shadow-md transition-colors hover:bg-white"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
            )}
            {slide < slides.length - 1 && (
              <button
                type="button"
                onClick={() => setSlide((s) => s + 1)}
                aria-label="Next photo"
                className="absolute right-3 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white/85 text-secondary shadow-md transition-colors hover:bg-white"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            )}
            <div className="absolute inset-x-0 bottom-3 flex justify-center gap-1.5">
              {slides.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setSlide(i)}
                  aria-label={`Photo ${i + 1} of ${slides.length}`}
                  className={`h-1.5 rounded-full transition-all ${
                    i === slide ? "w-4 bg-white" : "w-1.5 bg-white/60"
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      <div className="flex w-full flex-1 flex-col overflow-hidden sm:w-80 sm:flex-none">
        <div className="flex items-center gap-3 border-b border-zinc-100 p-4">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-xs font-semibold text-secondary">
            {content.avatarFallbackInitials}
          </div>
          <span className="text-sm font-semibold text-secondary">
            {siteConfig.instagramHandle}
          </span>
        </div>

        <div className="flex-1 overflow-y-auto p-4 text-sm text-zinc-700">
          <p>
            <span className="font-semibold text-secondary">
              {siteConfig.instagramHandle}
            </span>{" "}
            {renderCaption(post.caption)}
          </p>
        </div>

        <div className="border-t border-zinc-100 p-4">
          <div className="flex items-center gap-4">
            <a href={href} target="_blank" rel="noopener noreferrer" aria-label="Like on Instagram">
              <Heart className="h-6 w-6 text-zinc-700 hover:text-secondary" />
            </a>
            <a href={href} target="_blank" rel="noopener noreferrer" aria-label="Comment on Instagram">
              <MessageCircle className="h-6 w-6 text-zinc-700 hover:text-secondary" />
            </a>
            <a href={href} target="_blank" rel="noopener noreferrer" aria-label="Share">
              <Send className="h-6 w-6 text-zinc-700 hover:text-secondary" />
            </a>
          </div>
          <p className="mt-2 text-sm font-semibold text-secondary">
            {content.likesCommentsLabel(post.likes, post.comments)}
          </p>
          {post.timestamp && (
            <p className="mt-1 text-xs uppercase tracking-wide text-zinc-400">
              {formatInstagramTimestamp(post.timestamp)}
            </p>
          )}
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 block text-center text-sm font-medium text-secondary"
          >
            {content.viewOnInstagramLabel}
          </a>
        </div>
      </div>
    </div>
  );
}
