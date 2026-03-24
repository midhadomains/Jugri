import { ArticleCard } from "@/components/cards/article-card";
import { CreatorCard } from "@/components/cards/creator-card";
import { EventCard } from "@/components/cards/event-card";
import { PlaceCard } from "@/components/cards/place-card";
import { Container } from "@/components/ui/container";
import { PageIntro } from "@/components/ui/page-intro";
import { allArticles, allCreators, allEvents, allPlaces } from "@/lib/content";
import { createMetadata } from "@/lib/site";

export const metadata = createMetadata({
  title: "Culture",
  description:
    "Modern Jharkhand culture through Sohrai, Khovar, sound, design, fashion, and the people reshaping Ranchi's identity.",
  path: "/culture",
});

export default function CulturePage() {
  const cultureArticles = allArticles.filter((item) =>
    ["jharkhand-culture", "fashion-lifestyle"].includes(item.category),
  );
  const cultureCreator = allCreators.find((item) => item.slug === "ishita-kerketta");
  const culturePlace = allPlaces.find((item) => item.slug === "khovar-studio-store-main-road");
  const cultureEvent = allEvents.find((item) => item.slug === "khovar-walls-pop-up-exhibit");

  return (
    <>
      <PageIntro
        eyebrow="Culture"
        title="Jharkhand identity, edited for now."
        description="Sohrai and Khovar influences, fashion shifts, folk-meets-digital sound, design objects, and local creators building a new visual language for Ranchi."
      />
      <section className="py-12 sm:py-16">
        <Container className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
          <ArticleCard article={cultureArticles[0]} featured />
          {cultureCreator ? <CreatorCard creator={cultureCreator} /> : null}
        </Container>
        <Container className="mt-6 grid gap-6 md:grid-cols-2">
          {culturePlace ? <PlaceCard place={culturePlace} /> : null}
          {cultureEvent ? <EventCard event={cultureEvent} /> : null}
        </Container>
      </section>
    </>
  );
}
