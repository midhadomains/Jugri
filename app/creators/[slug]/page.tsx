import Image from "next/image";
import { MapPin, Users } from "lucide-react";
import { ArticleCard } from "@/components/cards/article-card";
import { ReelCard } from "@/components/cards/reel-card";
import { SocialShare } from "@/components/social-share";
import { Container } from "@/components/ui/container";
import { allArticles, allCreators, allReels, getCreator } from "@/lib/content";
import { createMetadata } from "@/lib/site";
import { notFound } from "next/navigation";

interface CreatorPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return allCreators.map((creator) => ({ slug: creator.slug }));
}

export async function generateMetadata({ params }: CreatorPageProps) {
  const { slug } = await params;
  const creator = getCreator(slug);

  if (!creator) {
    return createMetadata({
      title: "Creator",
      description: "Ranchi creator profile",
      path: `/creators/${slug}`,
    });
  }

  return createMetadata({
    title: creator.name,
    description: creator.bio,
    path: `/creators/${creator.slug}`,
    image: creator.heroImage,
  });
}

export default async function CreatorDetailPage({ params }: CreatorPageProps) {
  const { slug } = await params;
  const creator = getCreator(slug);

  if (!creator) {
    notFound();
  }

  const reels = allReels.filter((item) => item.creatorSlug === creator.slug);
  const stories = allArticles.filter((item) => item.authorSlug === creator.slug);

  return (
    <>
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0">
          <Image
            src={creator.heroImage}
            alt={creator.name}
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,15,14,0.82),rgba(10,15,14,0.42),rgba(10,15,14,0.18))]" />
        </div>
        <Container className="relative grid min-h-[64vh] items-end gap-10 py-16 md:grid-cols-[0.9fr_0.6fr]">
          <div className="text-white">
            <div className="relative h-24 w-24 overflow-hidden rounded-full border border-white/30 shadow-lg">
              <Image
                src={creator.avatar}
                alt={creator.name}
                fill
                sizes="96px"
                className="object-cover"
              />
            </div>
            <h1 className="mt-6 font-headline text-4xl font-black tracking-tight sm:text-5xl md:text-6xl">
              {creator.name}
            </h1>
            <p className="mt-3 font-label text-xs font-bold uppercase tracking-[0.32em] text-gold-soft">
              {creator.handle}
            </p>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/82">{creator.bio}</p>
            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-white/82">
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                {creator.location}
              </span>
              <span className="inline-flex items-center gap-2">
                <Users className="h-4 w-4" />
                {creator.followers}
              </span>
            </div>
          </div>
          <div className="rounded-[2rem] border border-white/12 bg-black/25 p-6 text-white backdrop-blur">
            <p className="font-label text-[11px] font-bold uppercase tracking-[0.28em] text-white/70">
              Focus areas
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {creator.specialties.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-white/10 px-3 py-2 text-xs font-semibold text-white"
                >
                  {item}
                </span>
              ))}
            </div>
            <div className="mt-6">
              <SocialShare title={creator.name} />
            </div>
          </div>
        </Container>
      </section>

      <section className="py-12 sm:py-16">
        <Container className="grid gap-8 lg:grid-cols-[1fr_0.38fr]">
          <div className="rounded-[2rem] border border-border bg-panel p-8 panel-shadow">
            <h2 className="font-headline text-3xl font-black tracking-tight text-charcoal dark:text-foreground">
              Creator story
            </h2>
            <div className="prose-copy mt-5 text-base leading-8 text-muted">
              {creator.story.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
          <aside className="rounded-[2rem] border border-border bg-canvas p-8 panel-shadow">
            <p className="font-label text-xs font-bold uppercase tracking-[0.3em] text-terracotta">
              Role
            </p>
            <h3 className="mt-4 font-headline text-3xl font-black tracking-tight text-charcoal dark:text-foreground">
              {creator.role}
            </h3>
          </aside>
        </Container>
      </section>

      <section className="pb-12">
        <Container>
          <h2 className="font-headline text-3xl font-black tracking-tight text-charcoal dark:text-foreground">
            Recent reels
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {reels.map((item) => (
              <ReelCard key={item.id} reel={item} />
            ))}
          </div>
        </Container>
      </section>

      {stories.length ? (
        <section className="pb-20">
          <Container>
            <h2 className="font-headline text-3xl font-black tracking-tight text-charcoal dark:text-foreground">
              Reported stories
            </h2>
            <div className="mt-8 grid gap-6 xl:grid-cols-2">
              {stories.map((item) => (
                <ArticleCard key={item.id} article={item} />
              ))}
            </div>
          </Container>
        </section>
      ) : null}
    </>
  );
}
