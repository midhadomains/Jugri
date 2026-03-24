import { articles } from "@/data/articles";
import { categories } from "@/data/categories";
import { creators } from "@/data/creators";
import { events } from "@/data/events";
import { places } from "@/data/places";
import { reels } from "@/data/reels";
import { sortByNewest, sortByUpcoming } from "@/lib/utils";

export const allCategories = categories;
export const allCreators = creators;
export const allReels = sortByNewest(reels);
export const allArticles = sortByNewest(articles);
export const allPlaces = places;
export const allEvents = sortByUpcoming(events);

export const featuredReels = allReels.filter((item) => item.featured);
export const featuredArticles = allArticles.filter((item) => item.featured);
export const featuredPlaces = allPlaces.filter((item) => item.featured);
export const featuredCreators = allCreators.filter((item) => item.featured);
export const featuredEvents = allEvents.filter((item) => item.featured);

export function getCategory(slug: string) {
  return allCategories.find((item) => item.slug === slug);
}

export function getCreator(slug: string) {
  return allCreators.find((item) => item.slug === slug);
}

export function getReel(slug: string) {
  return allReels.find((item) => item.slug === slug);
}

export function getArticle(slug: string) {
  return allArticles.find((item) => item.slug === slug);
}

export function getPlace(slug: string) {
  return allPlaces.find((item) => item.slug === slug);
}

export function getEvent(slug: string) {
  return allEvents.find((item) => item.slug === slug);
}

export function getRelatedReels(category: string, currentSlug: string) {
  return allReels
    .filter((item) => item.category === category && item.slug !== currentSlug)
    .slice(0, 3);
}

export function getRelatedArticles(category: string, currentSlug: string) {
  return allArticles
    .filter((item) => item.category === category && item.slug !== currentSlug)
    .slice(0, 3);
}

export function getRelatedPlaces(category: string, currentSlug: string) {
  return allPlaces
    .filter((item) => item.category === category && item.slug !== currentSlug)
    .slice(0, 3);
}

export function getRelatedEvents(category: string, currentSlug: string) {
  return allEvents
    .filter((item) => item.category === category && item.slug !== currentSlug)
    .slice(0, 3);
}
