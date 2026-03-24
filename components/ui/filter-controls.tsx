"use client";

import { Search } from "lucide-react";

interface FilterControlsProps {
  query: string;
  onQueryChange: (value: string) => void;
  activeCategory: string;
  onCategoryChange: (value: string) => void;
  categories: string[];
  placeholder: string;
  resultCount: number;
}

export function FilterControls({
  query,
  onQueryChange,
  activeCategory,
  onCategoryChange,
  categories,
  placeholder,
  resultCount,
}: FilterControlsProps) {
  return (
    <div className="rounded-[2rem] border border-border bg-panel/90 p-5 panel-shadow backdrop-blur">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <label className="flex w-full items-center gap-3 rounded-full border border-border bg-background px-4 py-3 lg:max-w-md">
          <Search className="h-4 w-4 text-muted" />
          <input
            suppressHydrationWarning
            value={query}
            onChange={(event) => onQueryChange(event.target.value)}
            placeholder={placeholder}
            className="w-full bg-transparent text-sm outline-none placeholder:text-muted"
            type="search"
          />
        </label>
        <span className="font-label text-xs font-semibold uppercase tracking-[0.28em] text-muted">
          {resultCount} stories in view
        </span>
      </div>
      <div className="mt-4 flex gap-2 overflow-x-auto hide-scrollbar">
        {["all", ...categories].map((category) => {
          const active = activeCategory === category;
          return (
            <button
              key={category}
              type="button"
              onClick={() => onCategoryChange(category)}
              suppressHydrationWarning
              className={`rounded-full px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] ${
                active
                  ? "bg-forest text-white"
                  : "bg-background text-muted hover:bg-panel-strong hover:text-charcoal dark:hover:text-foreground"
              }`}
            >
              {category === "all" ? "All" : category.replace(/-/g, " ")}
            </button>
          );
        })}
      </div>
    </div>
  );
}
