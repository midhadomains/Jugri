// import { CultureSpotlight } from "@/components/home/culture-spotlight";
import { CreatorSpotlight } from "@/components/home/creator-spotlight";
// import { ExploreByCategory } from "@/components/home/explore-by-category";
import { FeaturedPlaces } from "@/components/home/featured-places";
import { Hero } from "@/components/home/hero";
import { LiveStories } from "@/components/home/live-stories";
import { NewsletterCta } from "@/components/home/newsletter-cta";
import { ReelsSection } from "@/components/home/reels-section";
// import { WeekendPlans } from "@/components/home/weekend-plans";
import { LiveTicker } from "@/components/live-ticker";
import { featuredArticles, featuredEvents, featuredReels } from "@/lib/content";

export default function HomePage() {
  const tickerItems = [
    ...featuredArticles.slice(0, 2).map((item) => ({
      label: item.title,
      href: `/news/${item.slug}`,
    })),
    ...featuredReels.slice(0, 2).map((item) => ({
      label: item.title,
      href: `/reels/${item.slug}`,
    })),
    ...featuredEvents.slice(0, 2).map((item) => ({
      label: item.title,
      href: `/events/${item.slug}`,
    })),
  ];

  return (
    <>
      <LiveTicker items={tickerItems} />
      <Hero />
      <ReelsSection />
      <LiveStories />
      {/* <ExploreByCategory /> */}
      <FeaturedPlaces />
      {/* <CultureSpotlight /> */}
      <CreatorSpotlight />
      {/* <WeekendPlans /> */}
      <NewsletterCta />
    </>
  );
}
