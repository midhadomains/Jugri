import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { allArticles, allPlaces, allCreators } from "@/lib/content";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function CultureSpotlight() {
  const cultureStory = allArticles.find((item) => item.slug === "why-gen-z-is-dressing-in-modern-sohrai-motifs");
  const cultureCreator = allCreators.find((item) => item.slug === "ishita-kerketta");
  const culturePlace = allPlaces.find((item) => item.slug === "jonha-falls-gautamdhara");

  const cards = [
    {
      href: `/news/${cultureStory?.slug}`,
      title: cultureStory?.title ?? "Modern Sohrai style",
      description: cultureStory?.deck ?? "",
      image: cultureStory?.image ?? "",
      eyebrow: "Culture story",
    },
    {
      href: `/creators/${cultureCreator?.slug}`,
      title: cultureCreator?.name ?? "Ishita Kerketta",
      description: cultureCreator?.bio ?? "",
      image: cultureCreator?.heroImage ?? "",
      eyebrow: "Creator lens",
    },
    {
      href: `/explore/${culturePlace?.slug}`,
      title: culturePlace?.title ?? "Jonha Falls (Gautamdhara)",
      description: culturePlace?.description ?? "",
      image: culturePlace?.image ?? "",
      eyebrow: "Natural heritage",
    },
  ];

  return (
    <section className="relative overflow-hidden py-24">
      <div className="absolute inset-0 opacity-30 khovar-lines" />
      <Container className="relative">
        <Reveal>
          <SectionHeading
            eyebrow="Culture & Identity"
            title="Modern tribal storytelling, styled for the present tense."
            description="Sohrai and Khovar references appear here as design systems, sound choices, silhouettes, and spaces, not museum glass."
            align="center"
          />
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {cards.map((card, index) => (
            <Reveal key={card.href} delay={index * 0.07}>
              <Link
                href={card.href}
                className="group block overflow-hidden rounded-[2rem] border border-border bg-panel panel-shadow"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <span className="font-label text-[11px] font-bold uppercase tracking-[0.24em] text-terracotta">
                    {card.eyebrow}
                  </span>
                  <h3 className="mt-3 font-headline text-2xl font-black tracking-tight text-charcoal dark:text-foreground">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-muted">{card.description}</p>
                  <span className="mt-5 inline-flex items-center gap-2 font-label text-xs font-bold uppercase tracking-[0.22em] text-forest">
                    Open feature
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
