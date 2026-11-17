"use client";

import { useState } from "react";

// Instagram's original media URLs are signed and expire after a few days.
// When one fails, fall back to the long-lived copy (Behold's square image)
// before giving up, so callers only show a placeholder when both are gone.
export function useInstagramImage(image?: string, fallbackImage?: string) {
  const [src, setSrc] = useState(image);
  const [failed, setFailed] = useState(false);

  const onError = () => {
    if (fallbackImage && src !== fallbackImage) {
      setSrc(fallbackImage);
    } else {
      setFailed(true);
    }
  };

  return { src: failed ? undefined : src, onError };
}
