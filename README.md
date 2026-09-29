# Jugri

Jugri is a premium hyperlocal media platform for Ranchi and Jharkhand, built with Next.js App Router. The product is designed around a reels-first, mobile-first experience covering local news, food, events, youth culture, creators, places, and weekend discovery.

## Stack

- Next.js 16.2.1 with App Router
- React 19
- TypeScript
- Tailwind CSS 4
- Framer Motion
- Lucide React

## What Is Included

- Editorial homepage with reels, live stories, category discovery, featured places, culture, creators, weekend plans, and newsletter CTA
- Static routes for `Home`, `Reels`, `News`, `Explore Ranchi`, `Events`, `Culture`, `Creators`, `About`, `Contact`
- Bonus routes for `Advertise` and `Collaborate`
- Dynamic detail routes for:
  - reels
  - news articles
  - places
  - events
  - creators
- Metadata, Open Graph data, `robots.txt`, and `sitemap.xml`
- Custom dark mode bootstrap and theme toggle
- Mock CMS-ready content layer using typed local data files

## Routes

### Static

- `/`
- `/reels`
- `/news`
- `/explore`
- `/events`
- `/culture`
- `/creators`
- `/about`
- `/contact`
- `/advertise`
- `/collaborate`

### Dynamic

- `/reels/[slug]`
- `/news/[slug]`
- `/explore/[slug]`
- `/events/[slug]`
- `/creators/[slug]`

## Project Structure

```text
app/
  about/
  advertise/
  collaborate/
  contact/
  creators/
  culture/
  events/
  explore/
  news/
  reels/
  layout.tsx
  page.tsx
  robots.ts
  sitemap.ts

components/
  browsers/
  cards/
  home/
  navigation/
  providers/
  ui/

data/
  articles.ts
  categories.ts
  creators.ts
  events.ts
  places.ts
  reels.ts

lib/
  content.ts
  site.ts
  types.ts
  utils.ts
```

## Local Development

Install dependencies:

```bash
npm install
```

Start the dev server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

## Scripts

- `npm run dev` starts Next.js in development mode using webpack
- `npm run build` creates a production build using webpack
- `npm run start` starts the production server
- `npm run lint` runs ESLint

## Content Model

All content is currently local and typed. The site is structured so it can later be swapped to a CMS with minimal UI churn.

Current datasets:

- [data/reels.ts](./data/reels.ts)
- [data/articles.ts](./data/articles.ts)
- [data/places.ts](./data/places.ts)
- [data/events.ts](./data/events.ts)
- [data/creators.ts](./data/creators.ts)
- [data/categories.ts](./data/categories.ts)

## Images

The project uses `next/image` with remote images from `lh3.googleusercontent.com`.

Relevant config:

- [next.config.ts](./next.config.ts)

## Branding

Site identity is configured in:

- [lib/site.ts](./lib/site.ts)

This includes:

- site name
- short name
- canonical base URL
- default SEO description
- primary and footer navigation

## SEO And Metadata

Shared metadata generation lives in:

- [lib/site.ts](./lib/site.ts)

Root layout metadata and structured data live in:

- [app/layout.tsx](./app/layout.tsx)

Search engine support files:

- [app/robots.ts](./app/robots.ts)
- [app/sitemap.ts](./app/sitemap.ts)

## Development Notes

### Why `npm run dev` Uses Webpack

The dev script intentionally uses:

```bash
next dev --webpack
```

This avoids a local development issue where Turbopack was resolving Tailwind incorrectly from the Windows user directory in this workspace.

Production builds also use `next build --webpack` to work around the Turbopack Google font import error (`next/font/google queries have exactly one entry`). Deployment build commands should invoke `npm run build` so this setting is applied.

### Hydration Warnings On Localhost

If you see hydration warnings on `localhost` mentioning attributes such as:

- `data-gr-ext-installed`
- `data-new-gr-c-s-check-loaded`
- `fdprocessedid`

those are coming from browser extensions mutating the DOM before React hydrates. Common causes include Grammarly and form/autofill helpers.

To verify the app itself, test in:

- an Incognito/InPrivate window with extensions disabled
- a clean browser profile
- a normal browser session with those extensions disabled for `localhost`

## Verification

The project has been verified with:

```bash
npm run lint
npm run build
```
