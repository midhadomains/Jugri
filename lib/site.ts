import type { Metadata } from "next";
import type { NavItem } from "@/lib/types";

export const siteConfig = {
  name: "Jugri",
  shortName: "Jugri",
  url: "https://jugri.vercel.app",
  description:
    "Ranchi's premium reels-first guide to city news, culture, food, events, creators, and weekend energy across Jharkhand.",
  location: "Ranchi, Jharkhand, India",
};

export const primaryNavigation: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/reels", label: "Reels" },
  { href: "/news", label: "News" },
  { href: "/explore", label: "Explore Ranchi" },
  { href: "/events", label: "Events" },
  { href: "/culture", label: "Culture" },
  { href: "/creators", label: "Creators" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const footerNavigation: NavItem[] = [
  { href: "/advertise", label: "Advertise With Us" },
  { href: "/collaborate", label: "Collaborate" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

interface MetadataOptions {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: "website" | "article";
}

export function createMetadata({
  title,
  description,
  path,
  image,
  type = "website",
}: MetadataOptions): Metadata {
  const fullTitle = `${title} | ${siteConfig.name}`;

  return {
    metadataBase: new URL(siteConfig.url),
    title: fullTitle,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: fullTitle,
      description,
      url: path,
      siteName: siteConfig.name,
      locale: "en_IN",
      type,
      images: image
        ? [
            {
              url: image,
              width: 1200,
              height: 630,
              alt: fullTitle,
            },
          ]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: image ? [image] : undefined,
    },
  };
}
