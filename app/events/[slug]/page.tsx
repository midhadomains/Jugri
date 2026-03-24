import Link from "next/link";
import Image from "next/image";
import { CalendarDays, Clock3, MapPin, Ticket } from "lucide-react";
import { EventCard } from "@/components/cards/event-card";
import { SocialShare } from "@/components/social-share";
import { Container } from "@/components/ui/container";
import {
  allEvents,
  getCategory,
  getCreator,
  getEvent,
  getRelatedEvents,
} from "@/lib/content";
import { createMetadata } from "@/lib/site";
import { formatEventDate } from "@/lib/utils";
import { notFound } from "next/navigation";

interface EventPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return allEvents.map((event) => ({ slug: event.slug }));
}

export async function generateMetadata({ params }: EventPageProps) {
  const { slug } = await params;
  const event = getEvent(slug);

  if (!event) {
    return createMetadata({
      title: "Event",
      description: "Ranchi event",
      path: `/events/${slug}`,
    });
  }

  return createMetadata({
    title: event.title,
    description: event.summary,
    path: `/events/${event.slug}`,
    image: event.image,
  });
}

export default async function EventDetailPage({ params }: EventPageProps) {
  const { slug } = await params;
  const event = getEvent(slug);

  if (!event) {
    notFound();
  }

  const category = getCategory(event.category);
  const host = getCreator(event.hostSlug);
  const related = getRelatedEvents(event.category, event.slug);

  return (
    <>
      <section className="border-b border-border bg-canvas py-12 sm:py-16">
        <Container className="grid gap-10 lg:grid-cols-[1fr_0.95fr]">
          <div className="relative min-h-[360px] overflow-hidden rounded-[2rem] border border-border panel-shadow">
            <Image
              src={event.image}
              alt={event.title}
              fill
              sizes="(max-width: 1024px) 100vw, 52vw"
              className="object-cover"
            />
          </div>
          <div>
            <span className="font-label text-xs font-bold uppercase tracking-[0.32em] text-terracotta">
              {category?.name ?? "Event"}
            </span>
            <h1 className="mt-4 font-headline text-4xl font-black tracking-tight text-charcoal sm:text-5xl dark:text-foreground">
              {event.title}
            </h1>
            <p className="mt-5 text-lg leading-8 text-muted">{event.summary}</p>
            <div className="mt-6 grid gap-3 text-sm text-muted">
              <div className="inline-flex items-center gap-2">
                <CalendarDays className="h-4 w-4" />
                {formatEventDate(event.dateIso)}
              </div>
              <div className="inline-flex items-center gap-2">
                <Clock3 className="h-4 w-4" />
                {event.time}
              </div>
              <div className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                {event.venue}
              </div>
              <div className="inline-flex items-center gap-2">
                <Ticket className="h-4 w-4" />
                {event.price}
              </div>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="/contact"
                className="rounded-full bg-forest px-6 py-3 font-label text-xs font-bold uppercase tracking-[0.2em] text-white"
              >
                RSVP / Enquire
              </Link>
              <SocialShare title={event.title} />
            </div>
          </div>
        </Container>
      </section>

      <section className="py-12 sm:py-16">
        <Container className="grid gap-8 lg:grid-cols-[1fr_0.38fr]">
          <div className="rounded-[2rem] border border-border bg-panel p-8 panel-shadow">
            <h2 className="font-headline text-3xl font-black tracking-tight text-charcoal dark:text-foreground">
              What to expect
            </h2>
            <ul className="mt-5 grid gap-4 text-base leading-8 text-muted">
              {event.details.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <aside className="rounded-[2rem] border border-border bg-canvas p-8 panel-shadow">
            <p className="font-label text-xs font-bold uppercase tracking-[0.3em] text-terracotta">
              Hosted by
            </p>
            <h3 className="mt-4 font-headline text-3xl font-black tracking-tight text-charcoal dark:text-foreground">
              {host?.name}
            </h3>
            <p className="mt-3 text-sm leading-7 text-muted">{host?.role}</p>
            {host ? (
              <Link
                href={`/creators/${host.slug}`}
                className="mt-8 inline-flex rounded-full bg-panel px-5 py-3 font-label text-xs font-bold uppercase tracking-[0.2em] text-charcoal dark:text-foreground"
              >
                View host profile
              </Link>
            ) : null}
          </aside>
        </Container>
      </section>

      <section className="pb-20">
        <Container>
          <h2 className="font-headline text-3xl font-black tracking-tight text-charcoal dark:text-foreground">
            More events
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {related.map((item) => (
              <EventCard key={item.id} event={item} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
