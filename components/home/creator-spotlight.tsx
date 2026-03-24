import { CreatorCard } from "@/components/cards/creator-card";
import { featuredCreators } from "@/lib/content";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function CreatorSpotlight() {
  return (
    <section className="bg-canvas py-20">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Creator Spotlight"
            title="The people making Ranchi feel alive on screen."
            description="Food scouts, campus filmmakers, stylists, culture writers, and neighborhood reporters shaping how the city sees itself."
          />
        </Reveal>
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {featuredCreators.map((creator, index) => (
            <Reveal key={creator.id} delay={index * 0.06}>
              <CreatorCard creator={creator} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
