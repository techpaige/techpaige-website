# Fonts

Both site fonts are free, open-source Google Fonts (SIL Open Font License)
and are already bundled here — nothing to add:

- **Fraunces** (headings) — `Fraunces-Variable.woff2`
- **Space Grotesk** (body/UI) — `SpaceGrotesk-Variable.woff2`

Both are variable fonts, so a single file covers the whole weight range
(300–700) via the `font-weight` CSS property — see the `@font-face` rules in
`src/styles/global.css`. They're self-hosted from this folder rather than
loaded from Google's CDN, so the site makes no external font requests.

To swap either font later, replace the file and update the matching
`@font-face` `src` in `src/styles/global.css`.
