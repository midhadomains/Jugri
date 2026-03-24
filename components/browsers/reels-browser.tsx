"use client";

import { startTransition, useDeferredValue, useMemo, useState } from "react";
import { ReelCard } from "@/components/cards/reel-card";
import { FilterControls } from "@/components/ui/filter-controls";
import type { Reel } from "@/lib/types";

interface ReelsBrowserProps {
  reels: Reel[];
}

export function ReelsBrowser({ reels }: ReelsBrowserProps) {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const deferredQuery = useDeferredValue(query);

  const categories = useMemo(
    () => Array.from(new Set(reels.map((item) => item.category))),
    [reels],
  );

  const filtered = useMemo(() => {
    return reels.filter((item) => {
      const matchesCategory =
        activeCategory === "all" || item.category === activeCategory;
      const haystack = `${item.title} ${item.excerpt} ${item.location} ${item.tags.join(" ")}`.toLowerCase();
      const matchesQuery = haystack.includes(deferredQuery.toLowerCase());

      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, deferredQuery, reels]);

  return (
    <div className="space-y-8">
      <FilterControls
        query={query}
        onQueryChange={(value) => startTransition(() => setQuery(value))}
        activeCategory={activeCategory}
        onCategoryChange={(value) => startTransition(() => setActiveCategory(value))}
        categories={categories}
        placeholder="Search reels, spots, moods, and creators"
        resultCount={filtered.length}
      />
      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {filtered.map((reel) => (
          <ReelCard key={reel.id} reel={reel} />
        ))}
      </div>
    </div>
  );
}
