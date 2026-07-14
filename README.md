This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Environment Variables

Copy `.env.example` to `.env.local` and fill in the values you have. Sections below only need to be filled in once you have real credentials — the site works with placeholder content until then.

### Instagram live feed (Meta Graph API)

The homepage Instagram section shows placeholder posts until `INSTAGRAM_ACCESS_TOKEN` and `INSTAGRAM_BUSINESS_ACCOUNT_ID` are set — it then automatically switches to your real feed (see `lib/instagram.ts`).

1. **Convert the Instagram account to a Business or Creator account** (Instagram app → Settings → Account type) if it isn't already, and link it to a Facebook Page you control.
2. **Create a Meta developer app** at [developers.facebook.com/apps](https://developers.facebook.com/apps) → "Create App" → type "Business".
3. In the app, **add the "Instagram Graph API" product**, then use the Graph API Explorer (or the app's setup flow) to generate a **User or Page access token** with the `instagram_basic` and `pages_show_list` permissions, for the Facebook Page linked to the Instagram account.
4. **Exchange it for a long-lived token** (valid ~60 days, renewable) — Meta's docs cover this under "Long-Lived Access Tokens".
5. **Find your Instagram Business Account ID**: call `GET /{page-id}?fields=instagram_business_account&access_token=...` in Graph API Explorer — the response gives you the ID to use as `INSTAGRAM_BUSINESS_ACCOUNT_ID`.
6. Put both values in `.env.local`:
   ```
   INSTAGRAM_ACCESS_TOKEN=...
   INSTAGRAM_BUSINESS_ACCOUNT_ID=...
   ```
7. Restart the dev server. The feed re-fetches at most once an hour (see `revalidate` in `lib/instagram.ts`).

Long-lived tokens expire after ~60 days and need refreshing; for production, plan to automate the refresh (a scheduled job calling Meta's refresh endpoint) rather than doing it manually each time.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
