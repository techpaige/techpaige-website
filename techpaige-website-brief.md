# TechPaige Website Brief — for Claude Code

## Project Summary
Build a personal brand website for TechPaige — a content creator covering tech gear reviews, app breakdowns, and productivity/workflow content for small business owners and solo creators. Structure is inspired by b-r.io: minimal, content-forward, personality-driven without being flashy.

Positioning line: "Tech, simplified. No jargon, no judgment."

---

## Visual System

| Element | Choice |
|---|---|
| Headline / display font | **Fraunces** (Google Fonts) |
| Body / nav / UI font | **Space Grotesk** (Google Fonts) |
| Color palette | Warm Evolved — cream, espresso, terracotta, sand |
| Overall feel | Clean, minimal, warm — not corporate, not cluttered |

Both fonts load via Google Fonts (free, open license, no license management needed).

---

## Page Structure

### 1. Hero
- Short, personality-driven headline (not corporate tagline)
- One-line sub-copy: what the site covers + who it's for
- Visual: photo or short clip — open to shots of Paige herself when it fits the content or brand, alongside product/gear/desk imagery. Not strictly faceless, not strictly on-camera either — mix as fits each piece
- **Social icons required** — order: YouTube, Threads, Instagram, TikTok, Mail. Keep clean and minimal (small icon row, not a busy button set). Download platform icons as SVGs from Simple Icons in a neutral color, styled via CSS (`fill: currentColor`) so they can be recolored per state:
  - Resting: espresso (light mode) / cream or sand (dark mode)
  - Hover: terracotta, consistent across both modes
- **Email displayed**: hello@techpaige.ca, using Lucide's "Mail" icon as the last item in the social icon row, same resting/hover treatment as the rest
- This is the manually-maintained blog — Paige will add posts on an ongoing basis
- Show a maximum of **3 most recent posts** on the homepage (kept short to avoid a long page)
- Each entry: thumbnail/image, title, one-line description, publish date, link to full post
- Should read as the main content engine of the homepage, similar to b-r.io's "Recent Posts" section
- Needs a simple, low-friction way for Paige to add new posts (e.g., structured content files or a lightweight CMS pattern) since she's maintaining it herself long-term

### 3. Gear / Tools Strip
- Shows current daily-carry tech and go-to apps
- Simple list/grid format — image or icon, name, short note
- Should be easy to update periodically as gear changes
- Potential future home for affiliate links (not in scope for phase 1, but keep the structure flexible)

### 4. Top Navigation
- Minimal floating pill nav, centered at the top of the page — white/cream background, rounded corners, subtle shadow, sits above content rather than a full-width bar
- Simple text links: About / Posts / Gear / Contact — resting in espresso/cream depending on mode, hover to terracotta
- Light/dark mode toggle in the top-right corner, separate from the nav pill — **required**, styled to complement the Warm Evolved palette rather than a generic black/white toggle:
  - Light mode: cream background, espresso text, terracotta accents (buttons, links, active states)
  - Dark mode: espresso background, cream/sand text, terracotta accents carried through as the consistent brand color across both modes; sand slightly muted/darkened so it doesn't glow too bright against espresso
  - Toggle icon in terracotta (sun/moon or a simpler dot/gradient swap), not default black/gray
- Reference: b-r.io's top nav treatment

### 5. Footer
- Same nav links repeated: About / Posts / Gear / Contact — same resting/hover-to-terracotta treatment as the top nav
- Gives a landing point at the bottom of longer pages (like the blog/posts page) without forcing users to scroll back up

---

## Explicitly Out of Scope (Phase 1)
- **Newsletter signup** — planned for phase 2, do not build now, but don't design against it either (leave room to add later)

---

## Technical Notes
- Site will be built with Claude Code and hosted on GitHub
- Fonts: Fraunces + Space Grotesk via Google Fonts `<link>` embed
- Should be responsive (mobile-first, since a chunk of audience will land from Instagram/TikTok/Shorts links)
- Blog content structure should be simple enough for Paige to add posts herself without needing to touch site code each time
