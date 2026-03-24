import Image from "next/image";
import Link from "next/link";
import { Clock3, MapPin } from "lucide-react";
import { ArticleCard } from "@/components/cards/article-card";
import { SaveButton } from "@/components/save-button";
import { SocialShare } from "@/components/social-share";
import { Container } from "@/components/ui/container";
import {
  allArticles,
  getArticle,
  getCategory,
  getCreator,
  getRelatedArticles,
} from "@/lib/content";
import { createMetadata } from "@/lib/site";
import { formatDate, relativeLabel } from "@/lib/utils";
import { notFound } from "next/navigation";

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return allArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticle(slug);

  if (!article) {
    return createMetadata({
      title: "Story",
      description: "Ranchi story",
      path: `/news/${slug}`,
    });
  }

  return createMetadata({
    title: article.title,
    description: article.excerpt,
    path: `/news/${article.slug}`,
    image: article.image,
    type: "article",
  });
}

export default async function ArticleDetailPage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticle(slug);

  if (!article) {
    notFound();
  }

  const category = getCategory(article.category);
  const author = getCreator(article.authorSlug);
  const related = getRelatedArticles(article.category, article.slug);

  return (
    <>
      <section className="border-b border-border bg-canvas py-12 sm:py-16">
        <Container className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="relative min-h-[340px] overflow-hidden rounded-[2rem] border border-border panel-shadow">
            <Image
              src={article.image}
              alt={article.title}
              fill
              sizes="(max-width: 1024px) 100vw, 56vw"
              className="object-cover"
            />
          </div>
          <div className="max-w-3xl">
            <span className="font-label text-xs font-bold uppercase tracking-[0.32em] text-terracotta">
              {category?.name ?? "Story"}
            </span>
            <h1 className="mt-4 font-headline text-4xl font-black tracking-tight text-charcoal sm:text-5xl dark:text-foreground">
              {article.title}
            </h1>
            <p className="mt-5 text-lg leading-8 text-muted">{article.deck}</p>
            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-muted">
              <span>{relativeLabel(article.publishedAt)}</span>
              <span className="inline-flex items-center gap-2">
                <Clock3 className="h-4 w-4" />
                {article.readTime}
              </span>
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                {article.location}
              </span>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <SaveButton saveKey={`article:${article.slug}`} />
              <SocialShare title={article.title} />
            </div>
            {author ? (
              <Link
                href={`/creators/${author.slug}`}
                className="mt-8 inline-flex items-center gap-3 rounded-[1.5rem] border border-border bg-panel px-4 py-3"
              >
                <span className="font-label text-[11px] font-bold uppercase tracking-[0.22em] text-terracotta">
                  By {author.name}
                </span>
                <span className="text-sm text-muted">{formatDate(article.publishedAt)}</span>
              </Link>
            ) : null}
          </div>
        </Container>
      </section>

      <section className="py-12 sm:py-16">
        <Container className="grid gap-8 lg:grid-cols-[1fr_0.36fr]">
          <article className="rounded-[2rem] border border-border bg-panel p-8 panel-shadow">
            <div className="prose-copy text-base leading-8 text-muted">
              {article.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </article>
          <aside className="rounded-[2rem] border border-border bg-canvas p-8 panel-shadow">
            <p className="font-label text-xs font-bold uppercase tracking-[0.3em] text-terracotta">
              Key takeaways
            </p>
            <ul className="mt-5 grid gap-4 text-sm leading-7 text-muted">
              {article.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </aside>
        </Container>
      </section>

      <section className="pb-20">
        <Container>
          <h2 className="font-headline text-3xl font-black tracking-tight text-charcoal dark:text-foreground">
            Related coverage
          </h2>
          <div className="mt-8 grid gap-6 xl:grid-cols-2">
            {related.map((item) => (
              <ArticleCard key={item.id} article={item} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
