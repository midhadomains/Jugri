import { featuredReels } from "@/lib/content";
import { ReelCard } from "@/components/cards/reel-card";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function ReelsSection() {
  return (
    <section className="py-20">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Reels First"
            title="Trending reels, built for how Ranchi discovers the city."
            description="Vertical updates from campus, food counters, hidden routes, and style scenes. Social-native motion with editorial context."
          />
        </Reveal>
        <div className="mt-10 flex gap-6 overflow-x-auto pb-4 hide-scrollbar">
          {featuredReels.map((reel, index) => (
            <Reveal
              key={reel.id}
              delay={index * 0.06}
              className="min-w-[78vw] sm:min-w-[320px] xl:min-w-[290px]"
            >
              <ReelCard reel={reel} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
