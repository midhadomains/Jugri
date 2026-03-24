import { ReelsBrowser } from "@/components/browsers/reels-browser";
import { PageIntro } from "@/components/ui/page-intro";
import { allReels } from "@/lib/content";
import { createMetadata } from "@/lib/site";

export const metadata = createMetadata({
  title: "Reels",
  description:
    "Vertical stories from Ranchi covering food, campus energy, weather shifts, hidden places, and local style.",
  path: "/reels",
});

export default function ReelsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Reels"
        title="A reels-first feed for the city."
        description="Fast visual reporting from cafes, campus nights, hidden trails, shopping lanes, and the everyday pulse of Ranchi."
      />
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ReelsBrowser reels={allReels} />
        </div>
      </section>
    </>
  );
}
