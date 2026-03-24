"use client";

import { startTransition, useDeferredValue, useMemo, useState } from "react";
import { CreatorCard } from "@/components/cards/creator-card";
import { FilterControls } from "@/components/ui/filter-controls";
import type { Creator } from "@/lib/types";

interface CreatorsBrowserProps {
  creators: Creator[];
}

export function CreatorsBrowser({ creators }: CreatorsBrowserProps) {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const deferredQuery = useDeferredValue(query);

  const categories = useMemo(
    () =>
      Array.from(
        new Set(creators.flatMap((item) => item.specialties).map((item) => item.toLowerCase().replace(/ & /g, "-").replace(/\s+/g, "-"))),
      ),
    [creators],
  );

  const filtered = useMemo(() => {
    return creators.filter((item) => {
      const creatorCategories = item.specialties
        .map((specialty) =>
          specialty.toLowerCase().replace(/ & /g, "-").replace(/\s+/g, "-"),
        )
        .join(" ");
      const matchesCategory =
        activeCategory === "all" || creatorCategories.includes(activeCategory);
      const haystack = `${item.name} ${item.bio} ${item.location} ${item.specialties.join(" ")}`.toLowerCase();
      const matchesQuery = haystack.includes(deferredQuery.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, creators, deferredQuery]);

  return (
    <div className="space-y-8">
      <FilterControls
        query={query}
        onQueryChange={(value) => startTransition(() => setQuery(value))}
        activeCategory={activeCategory}
        onCategoryChange={(value) => startTransition(() => setActiveCategory(value))}
        categories={categories}
        placeholder="Search creators, campus voices, and city specialists"
        resultCount={filtered.length}
      />
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((creator) => (
          <CreatorCard key={creator.id} creator={creator} />
        ))}
      </div>
    </div>
  );
}
