import { PlacesBrowser } from "@/components/browsers/places-browser";
import { PageIntro } from "@/components/ui/page-intro";
import { allPlaces } from "@/lib/content";
import { createMetadata } from "@/lib/site";

export const metadata = createMetadata({
  title: "Explore Ranchi & Jharkhand",
  description:
    "Discover Ranchi cafes, campuses, markets, waterfalls, dams, and nearby Jharkhand scenic stops through a premium local guide.",
  path: "/explore",
});

export default function ExplorePage() {
  return (
    <>
      <PageIntro
        eyebrow="Explore Ranchi & Jharkhand"
        title="A sharper guide to real places worth visiting."
        description="Cafe rooftops, campuses, Lalpur market stops, waterfalls, dams, and scenic detours that are practical to visit and easy to share."
      />
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <PlacesBrowser places={allPlaces} />
        </div>
      </section>
    </>
  );
}
