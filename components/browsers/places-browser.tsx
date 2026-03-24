"use client";

import { startTransition, useDeferredValue, useMemo, useState } from "react";
import { PlaceCard } from "@/components/cards/place-card";
import { FilterControls } from "@/components/ui/filter-controls";
import type { Place } from "@/lib/types";

interface PlacesBrowserProps {
  places: Place[];
}

export function PlacesBrowser({ places }: PlacesBrowserProps) {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const deferredQuery = useDeferredValue(query);

  const categories = useMemo(
    () => Array.from(new Set(places.map((item) => item.category))),
    [places],
  );

  const filtered = useMemo(() => {
    return places.filter((item) => {
      const matchesCategory =
        activeCategory === "all" || item.category === activeCategory;
      const haystack = `${item.title} ${item.description} ${item.neighborhood} ${item.vibe} ${item.address}`.toLowerCase();
      const matchesQuery = haystack.includes(deferredQuery.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, deferredQuery, places]);

  return (
    <div className="space-y-8">
      <FilterControls
        query={query}
        onQueryChange={(value) => startTransition(() => setQuery(value))}
        activeCategory={activeCategory}
        onCategoryChange={(value) => startTransition(() => setActiveCategory(value))}
        categories={categories}
        placeholder="Search cafes, hidden places, and neighborhood vibes"
        resultCount={filtered.length}
      />
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((place) => (
          <PlaceCard key={place.id} place={place} />
        ))}
      </div>
    </div>
  );
}
