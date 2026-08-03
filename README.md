# TechPaige.ca

Static site for TechPaige, built with [Astro](https://astro.build). No monthly
platform subscription — this deploys as plain static files.

## What's here

- `src/pages/` — Home, Posts (`/blog`), Amazon Finds archive, Shop, Gear, About, Contact
- `src/content/blog/` — every blog post is its own markdown file
- `src/data/products.ts` — every shop product is one entry in this file
- `src/data/gear.ts` — every gear item is one entry in this file (shown on the homepage strip and in full on `/gear`)
- `src/data/site.ts` — positioning line, bio text, contact email, social links (edit here to change site-wide)
- `src/styles/global.css` — colors, fonts, base styles, and the light/dark theme variables ("Warm evolved" palette)
- `src/icons/` — the original source SVGs for the social icons (kept for reference; the components inline the actual markup)
- `public/fonts/` — Fraunces (headings) and Space Grotesk (body/UI), self-hosted Google Fonts, already bundled

### Navigation model

A floating pill nav (About / Posts / Shop / Gear / Contact), centered at the
top of the page, cream/dark-surface background with a shadow — not a
full-width bar. The same links repeat in the footer so longer pages (like
Posts) have a landing point at the bottom too. To add or reorder links, edit
the `links` array in **both** `src/components/Header.astro` and
`src/components/Footer.astro` (they're intentionally two separate lists, not
a shared import, since the footer also carries the social icon row).

### Light/dark mode

Required by the brief, not just a nice-to-have. A toggle sits top-right,
separate from the pill nav (`src/components/ThemeToggle.astro`), sun icon in
light mode / moon in dark, always terracotta. It:

- Persists to `localStorage` and respects `prefers-color-scheme` on first visit
- Sets `data-theme` on `<html>` via a blocking inline script in
  `BaseLayout.astro` `<head>`, so there's no light-flash before dark mode
  applies
- Is driven entirely by CSS custom properties in `src/styles/global.css` —
  `:root` has the light values, `[data-theme='dark']` overrides them
  (including `--color-sand-dark`, a muted/darkened sand so it doesn't glow
  against the espresso background, per the brief)

The footer is a permanent dark surface in both modes (by design, like the
original single-theme build) — it doesn't flip with the toggle.

### Social icons

Order is YouTube, Threads, Instagram, TikTok, Mail, per the brief. The first
four are official [Simple Icons](https://simpleicons.org) (CC0), the mail
icon is from [Lucide](https://lucide.dev) (ISC) — both free/open, no
attribution required, sources kept in `src/icons/`. Colors aren't hardcoded
on the SVGs; they inherit `currentColor` from CSS so the resting/hover states
in `SocialIcons.astro` can recolor them per theme.

### Fonts: self-hosted, not a Google Fonts `<link>`

Both fonts are downloaded and served from `public/fonts/` rather than loaded
from Google's CDN via `<link>`. Same fonts, same free/open license — just
faster (no extra DNS/TLS round trip) and no external request at all. If you'd
rather use the Google-hosted `<link>` version instead, swap the `@font-face`
block in `src/styles/global.css` for a `<link>` tag in `BaseLayout.astro`
pointing at `fonts.googleapis.com`.

## Local development

This machine didn't have Node.js installed, so a portable copy lives in
`.tools/node/` (gitignored — it's local machine setup, not part of the site).
If you're on a machine that already has Node 18+ installed, you can ignore
`.tools/` entirely and just use your system `node`/`npm`.

```bash
export PATH="$PWD/.tools/node/bin:$PATH"   # skip this if you already have Node 18+
npm install
npm run dev
```

Then open http://localhost:4321.

To build the static output (what actually gets deployed):

```bash
npm run build
```

Output goes to `dist/` — that folder is what Cloudflare Pages serves.

## Adding a blog post

Create a new markdown file in `src/content/blog/`, e.g.
`src/content/blog/my-new-post.md`:

```markdown
---
title: "Post Title"
description: "One sentence for previews and SEO."
pubDate: 2026-08-15
category: general        # or "amazon-finds" for the Amazon Finds series
tags: ["tag-one", "tag-two"]
heroImage: "/images/blog/my-new-post.jpg"   # optional
---

Post content goes here, in markdown.
```

Any post with `category: amazon-finds` automatically shows up on the
`/blog/amazon-finds` archive — no other file needs to change.

## Adding a shop product

Add one entry to the `products` array in `src/data/products.ts`:

```ts
{
  slug: 'my-new-product',
  name: 'My New Product',
  description: 'Short description shown on the card.',
  price: '$12',
  image: '/images/products/my-new-product.jpg',
  category: 'Notion Template', // Planner | Stickers | Notion Template | Wallpapers
  gumroadUrl: 'https://gumroad.com/l/my-new-product',
  etsyUrl: 'https://etsy.com/listing/my-new-product', // optional, top sellers only
  featured: true, // optional, shows it on the homepage row
},
```

Drop the product image in `public/images/products/`.

## Adding a gear item

Add one entry to the `gear` array in `src/data/gear.ts`:

```ts
{
  slug: 'keyboard',
  name: 'Keyboard',
  note: 'Short one-line reason it made the cut.',
  category: 'Computers', // Phone & Wearables | Tablets & eReaders | Computers | Audio
  image: '/images/gear/keyboard.svg',
  url: 'https://example.com/keyboard', // optional — not used yet, ready for affiliate links later
},
```

It'll show up on `/gear` automatically, grouped by category. To add a new
category, add it to both the `GearItem['category']` union in
`src/data/gear.ts` and the `categories` array in `src/pages/gear.astro`. The
homepage strip only shows the first four items overall (not category-aware)
— keep your most representative items first in the array if you want them
featured there. Desk setup hardware (desk, monitor, keyboard, etc.) is
intentionally left off this page for now — it's earmarked for its own
dedicated "Desk Setup" blog post instead.

## What's placeholder right now

- **Product details**: filled in with realistic placeholders marked `TODO`
  in `src/data/products.ts`. Replace before launch.
- **Bio (About page)**: `bioLong` in `src/data/site.ts` is still a `TODO`
  placeholder — `bioShort` and the hero copy are real.
- **Images**: every blog/product/gear image is a generated placeholder SVG so
  nothing is broken — swap the files in `public/images/` for real photos
  (keep the same filenames, or update the paths in the post frontmatter /
  `products.ts` / `gear.ts`).
- **Hero photo**: no hero image yet — Paige is planning a workspace/desk
  shot for later. The hero currently ships as headline + tagline only, no
  image slot. Once a photo exists, add an `<img>` (or `<video>` for a short
  clip) back into the `.hero-inner` block in `src/pages/index.astro`, and
  reintroduce a two-column grid layout in the scoped `<style>` below it.
- **Newsletter signup**: intentionally not built (explicitly out of scope for
  phase 1 per the brief). The hero and footer are simple flex/grid sections,
  so there's room to add a signup block later without restructuring.

## Deploying to Cloudflare Pages

**Option A — connect a GitHub repo (recommended, auto-deploys on push):**

1. Push this project to a GitHub repository.
2. In the Cloudflare dashboard: Workers & Pages → Create → Pages → Connect to Git.
3. Select the repo. Build settings:
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Environment variable: `NODE_VERSION` = `22`
4. Deploy. Every push to the main branch redeploys automatically.

**Option B — direct upload, no GitHub needed:**

```bash
npm run build
npx wrangler pages deploy dist --project-name=techpaige
```

(First run will prompt you to log in to Cloudflare.)

## Pointing techpaige.ca at it

Domain stays with GoDaddy — only the DNS records move to point at Cloudflare
Pages:

1. In Cloudflare Pages, open the project → **Custom domains** → **Set up a
   custom domain** → enter `techpaige.ca` (and `www.techpaige.ca` if wanted).
2. Cloudflare will show you the DNS records to add (either full nameserver
   change to Cloudflare, or just a CNAME if you're keeping GoDaddy as the
   DNS host — Cloudflare will tell you which one applies to your setup).
3. Add those records in GoDaddy's DNS management for techpaige.ca.
4. DNS propagation can take a few minutes to a few hours.

Domain renewal is the only ongoing cost — hosting is free on Cloudflare
Pages, and there's no platform subscription anymore.
