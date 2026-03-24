"use client";

import { startTransition, useDeferredValue, useMemo, useState } from "react";
import { ArticleCard } from "@/components/cards/article-card";
import { FilterControls } from "@/components/ui/filter-controls";
import type { Article } from "@/lib/types";

interface ArticlesBrowserProps {
  articles: Article[];
}

export function ArticlesBrowser({ articles }: ArticlesBrowserProps) {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const deferredQuery = useDeferredValue(query);

  const categories = useMemo(
    () => Array.from(new Set(articles.map((item) => item.category))),
    [articles],
  );

  const filtered = useMemo(() => {
    return articles.filter((item) => {
      const matchesCategory =
        activeCategory === "all" || item.category === activeCategory;
      const haystack = `${item.title} ${item.deck} ${item.excerpt} ${item.location}`.toLowerCase();
      const matchesQuery = haystack.includes(deferredQuery.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, articles, deferredQuery]);

  return (
    <div className="space-y-8">
      <FilterControls
        query={query}
        onQueryChange={(value) => startTransition(() => setQuery(value))}
        activeCategory={activeCategory}
        onCategoryChange={(value) => startTransition(() => setActiveCategory(value))}
        categories={categories}
        placeholder="Search headlines, neighborhoods, and city updates"
        resultCount={filtered.length}
      />
      <div className="grid gap-6 xl:grid-cols-2">
        {filtered.map((article, index) => (
          <ArticleCard key={article.id} article={article} featured={index === 0} />
        ))}
      </div>
    </div>
  );
}
