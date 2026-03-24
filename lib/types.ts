export type AccentTone = "forest" | "terracotta" | "gold" | "charcoal";

export interface Category {
  slug: string;
  name: string;
  description: string;
  href: string;
  tone: AccentTone;
}

export interface Creator {
  id: string;
  slug: string;
  name: string;
  handle: string;
  role: string;
  location: string;
  bio: string;
  avatar: string;
  heroImage: string;
  followers: string;
  specialties: string[];
  story: string[];
  featured?: boolean;
}

export interface Reel {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  creatorSlug: string;
  image: string;
  location: string;
  publishedAt: string;
  views: string;
  duration: string;
  vibe: string;
  tags: string[];
  highlights: string[];
  featured?: boolean;
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  deck: string;
  excerpt: string;
  category: string;
  authorSlug: string;
  image: string;
  location: string;
  publishedAt: string;
  readTime: string;
  highlights: string[];
  body: string[];
  featured?: boolean;
}

export interface Place {
  id: string;
  slug: string;
  title: string;
  category: string;
  image: string;
  neighborhood: string;
  address: string;
  hours: string;
  priceNote: string;
  vibe: string;
  description: string;
  tips: string[];
  featured?: boolean;
}

export interface Event {
  id: string;
  slug: string;
  title: string;
  category: string;
  hostSlug: string;
  image: string;
  venue: string;
  dateIso: string;
  time: string;
  price: string;
  summary: string;
  details: string[];
  featured?: boolean;
}

export interface NavItem {
  href: string;
  label: string;
}
