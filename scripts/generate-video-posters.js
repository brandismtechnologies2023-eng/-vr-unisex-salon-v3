/**
 * Generates a poster image for each gallery video.
 *
 * Gallery cards must not mount a <video> (that downloaded ~59MB per page
 * load), so each video needs a still to show instead. Uses the locally
 * installed Chrome rather than Playwright's bundled Chromium, because only
 * the former ships the H.264 decoder these MP4s need.
 *
 * Requires the site running locally (npm run dev / start) so the videos are
 * reachable over http — browsers refuse file:// media from a blank page.
 *
 *   node scripts/generate-video-posters.js [baseUrl]
 */
const { chromium } = require("playwright");
const fs = require("fs");
const path = require("path");

const CHROME = "C:/Program Files/Google/Chrome/Application/chrome.exe";
const BASE_URL = process.argv[2] || "http://localhost:3200";
const MAX_WIDTH = 640;
const QUALITY = 0.72;

(async () => {
  const dir = path.join(process.cwd(), "public/images/gallery");
  const outDir = path.join(dir, "posters");
  fs.mkdirSync(outDir, { recursive: true });

  const videos = fs.readdirSync(dir).filter((f) => f.endsWith(".mp4"));
  if (videos.length === 0) return console.log("No videos found.");

  const browser = await chromium.launch({ executablePath: CHROME });
  const page = await browser.newPage({ viewport: { width: 800, height: 800 } });
  // Same-origin as the videos, so the canvas isn't tainted.
  await page.goto(BASE_URL, { waitUntil: "domcontentloaded" });

  for (const video of videos) {
    const dataUrl = await page
      .evaluate(
        async ({ src, maxWidth, quality }) => {
          const vid = document.createElement("video");
          vid.src = src;
          vid.muted = true;
          vid.playsInline = true;
          await new Promise((resolve, reject) => {
            vid.onloadeddata = () => {
              // A third of the way in, to avoid a black opening frame.
              vid.currentTime = Math.min(1.5, (vid.duration || 3) / 3);
            };
            vid.onseeked = resolve;
            vid.onerror = () => reject(new Error("decode failed"));
            setTimeout(() => reject(new Error("timeout")), 25000);
          });
          const canvas = document.createElement("canvas");
          const scale = Math.min(1, maxWidth / vid.videoWidth);
          canvas.width = Math.round(vid.videoWidth * scale);
          canvas.height = Math.round(vid.videoHeight * scale);
          canvas.getContext("2d").drawImage(vid, 0, 0, canvas.width, canvas.height);
          return canvas.toDataURL("image/jpeg", quality);
        },
        { src: `${BASE_URL}/images/gallery/${video}`, maxWidth: MAX_WIDTH, quality: QUALITY }
      )
      .catch((err) => {
        console.log(`  FAILED ${video}: ${err.message}`);
        return null;
      });

    if (!dataUrl) continue;
    const out = path.join(outDir, video.replace(".mp4", ".jpg"));
    fs.writeFileSync(out, Buffer.from(dataUrl.split(",")[1], "base64"));
    console.log(`  ${video} -> posters/${path.basename(out)} (${(fs.statSync(out).size / 1024).toFixed(0)}KB)`);
  }

  await browser.close();
})();
