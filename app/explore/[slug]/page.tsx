import Image from "next/image";
import { Clock3, MapPin, WalletCards } from "lucide-react";
import { PlaceCard } from "@/components/cards/place-card";
import { SocialShare } from "@/components/social-share";
import { Container } from "@/components/ui/container";
import {
  allPlaces,
  getCategory,
  getPlace,
  getRelatedPlaces,
} from "@/lib/content";
import { createMetadata } from "@/lib/site";
import { notFound } from "next/navigation";

interface PlacePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return allPlaces.map((place) => ({ slug: place.slug }));
}

export async function generateMetadata({ params }: PlacePageProps) {
  const { slug } = await params;
  const place = getPlace(slug);

  if (!place) {
    return createMetadata({
      title: "Place",
      description: "Ranchi place guide",
      path: `/explore/${slug}`,
    });
  }

  return createMetadata({
    title: place.title,
    description: place.description,
    path: `/explore/${place.slug}`,
    image: place.image,
  });
}

export default async function PlaceDetailPage({ params }: PlacePageProps) {
  const { slug } = await params;
  const place = getPlace(slug);

  if (!place) {
    notFound();
  }

  const category = getCategory(place.category);
  const related = getRelatedPlaces(place.category, place.slug);

  return (
    <>
      <section className="border-b border-border bg-canvas py-12 sm:py-16">
        <Container className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="relative min-h-[360px] overflow-hidden rounded-[2rem] border border-border panel-shadow">
            <Image
              src={place.image}
              alt={place.title}
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover"
            />
          </div>
          <div>
            <span className="font-label text-xs font-bold uppercase tracking-[0.32em] text-terracotta">
              {category?.name ?? "Place"}
            </span>
            <h1 className="mt-4 font-headline text-4xl font-black tracking-tight text-charcoal sm:text-5xl dark:text-foreground">
              {place.title}
            </h1>
            <p className="mt-5 text-lg leading-8 text-muted">{place.description}</p>
            <div className="mt-6 grid gap-3 text-sm text-muted">
              <div className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                {place.neighborhood} - {place.address}
              </div>
              <div className="inline-flex items-center gap-2">
                <Clock3 className="h-4 w-4" />
                {place.hours}
              </div>
              <div className="inline-flex items-center gap-2">
                <WalletCards className="h-4 w-4" />
                {place.priceNote}
              </div>
            </div>
            <div className="mt-8">
              <SocialShare title={place.title} />
            </div>
          </div>
        </Container>
      </section>

      <section className="py-12 sm:py-16">
        <Container className="grid gap-8 lg:grid-cols-[1fr_0.38fr]">
          <div className="rounded-[2rem] border border-border bg-panel p-8 panel-shadow">
            <h2 className="font-headline text-3xl font-black tracking-tight text-charcoal dark:text-foreground">
              Why go
            </h2>
            <p className="mt-4 text-base leading-8 text-muted">{place.vibe}</p>
            <p className="mt-4 text-base leading-8 text-muted">{place.description}</p>
          </div>
          <aside className="rounded-[2rem] border border-border bg-canvas p-8 panel-shadow">
            <p className="font-label text-xs font-bold uppercase tracking-[0.3em] text-terracotta">
              Local tips
            </p>
            <ul className="mt-5 grid gap-4 text-sm leading-7 text-muted">
              {place.tips.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </aside>
        </Container>
      </section>

      <section className="pb-20">
        <Container>
          <h2 className="font-headline text-3xl font-black tracking-tight text-charcoal dark:text-foreground">
            More places to explore
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {related.map((item) => (
              <PlaceCard key={item.id} place={item} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
