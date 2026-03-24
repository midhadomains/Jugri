import { ArticleCard } from "@/components/cards/article-card";
import { CityPulseWidget } from "@/components/city-pulse-widget";
import { featuredArticles } from "@/lib/content";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function LiveStories() {
  const [lead, ...rest] = featuredArticles;

  return (
    <section className="bg-canvas py-20">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="What's Happening"
            title="Live stories from the city, not generic city content."
            description="Civic shifts, nightlife signals, route diversions, and the practical updates that shape a real Ranchi day."
          />
        </Reveal>
        <div className="mt-10 grid gap-6 xl:grid-cols-[1.25fr_0.75fr]">
          <Reveal>
            <ArticleCard article={lead} featured />
          </Reveal>
          <div className="grid gap-6">
            {rest.slice(0, 2).map((article, index) => (
              <Reveal key={article.id} delay={0.08 * (index + 1)}>
                <ArticleCard article={article} />
              </Reveal>
            ))}
            <Reveal delay={0.22}>
              <CityPulseWidget />
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
