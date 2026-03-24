"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock3, MapPin } from "lucide-react";
import { SaveButton } from "@/components/save-button";
import { getCategory } from "@/lib/content";
import type { Article } from "@/lib/types";
import { relativeLabel } from "@/lib/utils";

interface ArticleCardProps {
  article: Article;
  featured?: boolean;
}

export function ArticleCard({ article, featured = false }: ArticleCardProps) {
  const category = getCategory(article.category);

  return (
    <article
      className={`group overflow-hidden rounded-[2rem] border border-border bg-panel panel-shadow ${
        featured ? "grid gap-0 md:grid-cols-[1.2fr_1fr]" : "flex h-full flex-col"
      }`}
    >
      <Link
        href={`/news/${article.slug}`}
        className={`relative block overflow-hidden ${featured ? "min-h-[320px]" : "aspect-[5/4]"}`}
      >
        <Image
          src={article.image}
          alt={article.title}
          fill
          sizes={
            featured
              ? "(max-width: 768px) 100vw, (max-width: 1280px) 60vw, 40rem"
              : "(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 24rem"
          }
          className="object-cover transition duration-700 group-hover:scale-105"
        />
      </Link>
      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <div className="flex items-center justify-between gap-3">
          <span className="font-label text-[11px] font-bold uppercase tracking-[0.24em] text-terracotta">
            {category?.name ?? "Story"}
          </span>
          <SaveButton saveKey={`article:${article.slug}`} label="Save" />
        </div>
        <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-muted">
          <span>{relativeLabel(article.publishedAt)}</span>
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="h-3.5 w-3.5" />
            {article.location}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Clock3 className="h-3.5 w-3.5" />
            {article.readTime}
          </span>
        </div>
        <Link href={`/news/${article.slug}`} className="mt-4">
          <h3
            className={`font-headline font-black tracking-tight text-charcoal transition group-hover:text-terracotta dark:text-foreground ${
              featured ? "text-3xl leading-tight" : "text-2xl leading-snug"
            }`}
          >
            {article.title}
          </h3>
        </Link>
        <p className="mt-4 text-sm leading-7 text-muted sm:text-base">
          {featured ? article.excerpt : article.deck}
        </p>
        <Link
          href={`/news/${article.slug}`}
          className="mt-6 inline-flex items-center gap-2 font-label text-xs font-bold uppercase tracking-[0.22em] text-forest"
        >
          Read Story
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </article>
  );
}
