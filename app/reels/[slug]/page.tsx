import Image from "next/image";
import Link from "next/link";
import { Eye, MapPin, PlayCircle } from "lucide-react";
import { ReelCard } from "@/components/cards/reel-card";
import { SaveButton } from "@/components/save-button";
import { SocialShare } from "@/components/social-share";
import { Container } from "@/components/ui/container";
import {
  allReels,
  getCategory,
  getCreator,
  getReel,
  getRelatedReels,
} from "@/lib/content";
import { createMetadata } from "@/lib/site";
import { formatDate } from "@/lib/utils";
import { notFound } from "next/navigation";

interface ReelPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return allReels.map((reel) => ({ slug: reel.slug }));
}

export async function generateMetadata({ params }: ReelPageProps) {
  const { slug } = await params;
  const reel = getReel(slug);

  if (!reel) {
    return createMetadata({
      title: "Reel",
      description: "Ranchi reel story",
      path: `/reels/${slug}`,
    });
  }

  return createMetadata({
    title: reel.title,
    description: reel.excerpt,
    path: `/reels/${reel.slug}`,
    image: reel.image,
  });
}

export default async function ReelDetailPage({ params }: ReelPageProps) {
  const { slug } = await params;
  const reel = getReel(slug);

  if (!reel) {
    notFound();
  }

  const creator = getCreator(reel.creatorSlug);
  const category = getCategory(reel.category);
  const related = getRelatedReels(reel.category, reel.slug);

  return (
    <>
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0">
          <Image
            src={reel.image}
            alt={reel.title}
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,11,10,0.82),rgba(7,11,10,0.42),rgba(7,11,10,0.16))]" />
        </div>
        <Container className="relative grid min-h-[70vh] items-end gap-10 py-14 md:grid-cols-[1fr_0.42fr] md:py-20">
          <div className="max-w-4xl text-white">
            <span className="rounded-full bg-white/12 px-3 py-1 font-label text-[11px] font-bold uppercase tracking-[0.22em]">
              {category?.name ?? "Reel"}
            </span>
            <h1 className="mt-5 font-headline text-4xl font-black leading-tight tracking-tight sm:text-5xl md:text-6xl">
              {reel.title}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-white/82 sm:text-lg">
              {reel.excerpt}
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-white/82">
              <span className="inline-flex items-center gap-2">
                <PlayCircle className="h-4 w-4" />
                {reel.duration}
              </span>
              <span className="inline-flex items-center gap-2">
                <Eye className="h-4 w-4" />
                {reel.views}
              </span>
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                {reel.location}
              </span>
              <span>{formatDate(reel.publishedAt)}</span>
            </div>
          </div>
          <div className="rounded-[2rem] border border-white/12 bg-black/25 p-6 text-white backdrop-blur">
            <p className="font-label text-[11px] font-bold uppercase tracking-[0.24em] text-white/72">
              Creator
            </p>
            <h2 className="mt-3 font-headline text-3xl font-black">{creator?.name}</h2>
            <p className="mt-2 text-sm text-white/72">{creator?.handle}</p>
            <p className="mt-4 text-sm leading-7 text-white/82">{creator?.bio}</p>
          </div>
        </Container>
      </section>

      <section className="py-12 sm:py-16">
        <Container className="grid gap-8 lg:grid-cols-[1fr_0.35fr]">
          <div className="rounded-[2rem] border border-border bg-panel p-8 panel-shadow">
            <div className="flex flex-wrap items-center gap-3">
              <SaveButton saveKey={`reel:${reel.slug}`} />
              <SocialShare title={reel.title} />
            </div>
            <div className="prose-copy mt-8 text-base leading-8 text-muted">
              <p>{reel.excerpt}</p>
              <ul>
                {reel.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="mt-8 flex flex-wrap gap-2">
              {reel.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-background px-3 py-1 text-xs font-semibold text-muted"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          <aside className="rounded-[2rem] border border-border bg-canvas p-8 panel-shadow">
            <p className="font-label text-xs font-bold uppercase tracking-[0.3em] text-terracotta">
              Creator profile
            </p>
            <h3 className="mt-4 font-headline text-3xl font-black tracking-tight text-charcoal dark:text-foreground">
              {creator?.name}
            </h3>
            <p className="mt-3 text-sm leading-7 text-muted">{creator?.role}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {creator?.specialties?.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-panel px-3 py-1 text-xs font-semibold text-muted"
                >
                  {item}
                </span>
              ))}
            </div>
            {creator ? (
              <Link
                href={`/creators/${creator.slug}`}
                className="mt-8 inline-flex rounded-full bg-forest px-5 py-3 font-label text-xs font-bold uppercase tracking-[0.2em] text-white"
              >
                View creator
              </Link>
            ) : null}
          </aside>
        </Container>
      </section>

      <section className="pb-20">
        <Container>
          <h2 className="font-headline text-3xl font-black tracking-tight text-charcoal dark:text-foreground">
            More reels from the city
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {related.map((item) => (
              <ReelCard key={item.id} reel={item} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
