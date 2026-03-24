"use client";

import { Moon, SunMedium } from "lucide-react";
import { useTheme } from "@/components/providers/theme-provider";

export function ThemeToggle() {
  const { toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      suppressHydrationWarning
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-panel text-charcoal hover:scale-[1.03] dark:text-foreground"
      aria-label="Toggle color theme"
    >
      <SunMedium className="hidden h-4 w-4 dark:block" />
      <Moon className="h-4 w-4 dark:hidden" />
    </button>
  );
}
