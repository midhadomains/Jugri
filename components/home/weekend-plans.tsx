import { EventCard } from "@/components/cards/event-card";
import { featuredEvents } from "@/lib/content";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function WeekendPlans() {
  return (
    <section className="py-20">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Weekend Calendar"
            title="Plans worth leaving the group chat for."
            description="A fast-moving calendar of market sessions, music nights, waterfall routes, culture pop-ups, and community events."
          />
        </Reveal>
        <div className="mt-10 grid gap-6 xl:grid-cols-[1fr_1fr_1fr_0.9fr]">
          {featuredEvents.slice(0, 3).map((event, index) => (
            <Reveal key={event.id} delay={index * 0.06}>
              <EventCard event={event} />
            </Reveal>
          ))}
          <Reveal delay={0.24}>
            <div className="grain h-full overflow-hidden rounded-[2rem] border border-border bg-charcoal p-6 text-white panel-shadow">
              <p className="font-label text-[11px] font-bold uppercase tracking-[0.28em] text-gold-soft">
                Featured Weekend Plan
              </p>
              <h3 className="mt-4 font-headline text-3xl font-black leading-tight">
                One day, one route: coffee, market, sunset, and a late set in Lalpur.
              </h3>
              <p className="mt-4 text-sm leading-7 text-white/76">
                Start with a Circular Road cafe, cross to Morabadi for the market session, pause by the lake at golden hour, then end at a music room or creator meetup. The site is designed to make this kind of day easy to discover.
              </p>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
