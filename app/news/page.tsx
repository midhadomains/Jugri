import { ArticlesBrowser } from "@/components/browsers/articles-browser";
import { PageIntro } from "@/components/ui/page-intro";
import { allArticles } from "@/lib/content";
import { createMetadata } from "@/lib/site";

export const metadata = createMetadata({
  title: "News",
  description:
    "Ranchi headlines, civic shifts, neighborhood stories, traffic changes, culture updates, and city life with editorial depth.",
  path: "/news",
});

export default function NewsPage() {
  return (
    <>
      <PageIntro
        eyebrow="News"
        title="Ranchi updates with context, not noise."
        description="From Morabadi to Lalpur, these are the stories, route changes, openings, and cultural signals shaping the city right now."
      />
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ArticlesBrowser articles={allArticles} />
        </div>
      </section>
    </>
  );
}
