import { EventsBrowser } from "@/components/browsers/events-browser";
import { PageIntro } from "@/components/ui/page-intro";
import { allEvents } from "@/lib/content";
import { createMetadata } from "@/lib/site";

export const metadata = createMetadata({
  title: "Events",
  description:
    "Weekend plans, market sessions, pop-ups, music rooms, campus showcases, and culture events across Ranchi and Jharkhand.",
  path: "/events",
});

export default function EventsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Events"
        title="Weekend plans with real local momentum."
        description="Markets, rooftop crawls, cultural exhibits, creator mixers, and the kind of events that make the city feel connected."
      />
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <EventsBrowser events={allEvents} />
        </div>
      </section>
    </>
  );
}
