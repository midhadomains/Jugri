"use client";

import { startTransition, useDeferredValue, useMemo, useState } from "react";
import { EventCard } from "@/components/cards/event-card";
import { FilterControls } from "@/components/ui/filter-controls";
import type { Event } from "@/lib/types";

interface EventsBrowserProps {
  events: Event[];
}

export function EventsBrowser({ events }: EventsBrowserProps) {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const deferredQuery = useDeferredValue(query);

  const categories = useMemo(
    () => Array.from(new Set(events.map((item) => item.category))),
    [events],
  );

  const filtered = useMemo(() => {
    return events.filter((item) => {
      const matchesCategory =
        activeCategory === "all" || item.category === activeCategory;
      const haystack = `${item.title} ${item.summary} ${item.venue} ${item.price}`.toLowerCase();
      const matchesQuery = haystack.includes(deferredQuery.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, deferredQuery, events]);

  return (
    <div className="space-y-8">
      <FilterControls
        query={query}
        onQueryChange={(value) => startTransition(() => setQuery(value))}
        activeCategory={activeCategory}
        onCategoryChange={(value) => startTransition(() => setActiveCategory(value))}
        categories={categories}
        placeholder="Search by venue, category, or weekend plan"
        resultCount={filtered.length}
      />
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
}
