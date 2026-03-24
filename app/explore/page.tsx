import { PlacesBrowser } from "@/components/browsers/places-browser";
import { PageIntro } from "@/components/ui/page-intro";
import { allPlaces } from "@/lib/content";
import { createMetadata } from "@/lib/site";

export const metadata = createMetadata({
  title: "Explore Ranchi",
  description:
    "Discover Ranchi cafes, quiet corners, hidden places, boutique interiors, and scenic stops through a premium local guide.",
  path: "/explore",
});

export default function ExplorePage() {
  return (
    <>
      <PageIntro
        eyebrow="Explore Ranchi"
        title="A sharper guide to where the city actually goes."
        description="Cafe rooftops, scenic detours, culture-led shops, and neighborhoods that feel good to visit and good to share."
      />
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <PlacesBrowser places={allPlaces} />
        </div>
      </section>
    </>
  );
}
