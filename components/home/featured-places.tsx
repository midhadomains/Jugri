import { PlaceCard } from "@/components/cards/place-card";
import { featuredPlaces } from "@/lib/content";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function FeaturedPlaces() {
  return (
    <section className="bg-canvas py-20">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Featured Places"
            title="Where to go when you want Ranchi to feel stylish, local, and worth filming."
            description="Cafes, design shops, scenic detours, and neighborhoods that work as both guides and social discovery."
          />
        </Reveal>
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {featuredPlaces.slice(0, 4).map((place, index) => (
            <Reveal key={place.id} delay={index * 0.06}>
              <PlaceCard place={place} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
