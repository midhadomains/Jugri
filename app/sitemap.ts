import type { MetadataRoute } from "next";
import { allArticles, allCreators, allEvents, allPlaces, allReels } from "@/lib/content";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/reels",
    "/news",
    "/explore",
    "/events",
    "/culture",
    "/creators",
    "/about",
    "/contact",
    "/advertise",
    "/collaborate",
  ].map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: new Date("2026-03-23T00:00:00+05:30"),
  }));

  const articleRoutes = allArticles.map((article) => ({
    url: `${siteConfig.url}/news/${article.slug}`,
    lastModified: new Date(article.publishedAt),
  }));

  const reelRoutes = allReels.map((reel) => ({
    url: `${siteConfig.url}/reels/${reel.slug}`,
    lastModified: new Date(reel.publishedAt),
  }));

  const placeRoutes = allPlaces.map((place) => ({
    url: `${siteConfig.url}/explore/${place.slug}`,
    lastModified: new Date("2026-03-23T00:00:00+05:30"),
  }));

  const eventRoutes = allEvents.map((event) => ({
    url: `${siteConfig.url}/events/${event.slug}`,
    lastModified: new Date(event.dateIso),
  }));

  const creatorRoutes = allCreators.map((creator) => ({
    url: `${siteConfig.url}/creators/${creator.slug}`,
    lastModified: new Date("2026-03-23T00:00:00+05:30"),
  }));

  return [
    ...staticRoutes,
    ...articleRoutes,
    ...reelRoutes,
    ...placeRoutes,
    ...eventRoutes,
    ...creatorRoutes,
  ];
}
