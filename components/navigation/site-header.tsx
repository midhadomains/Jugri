"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useEffectEvent, useState } from "react";
import { Search, Sparkles } from "lucide-react";
import { primaryNavigation } from "@/lib/site";
import { SiteLogo } from "@/components/site-logo";
import { ThemeToggle } from "@/components/theme-toggle";
import { Container } from "@/components/ui/container";

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  const onScroll = useEffectEvent(() => {
    setScrolled(window.scrollY > 24);
  });

  useEffect(() => {
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const transparent = pathname === "/" && !scrolled;

  return (
    <header
      className={`sticky top-0 z-50 border-b ${
        transparent
          ? "border-transparent bg-transparent"
          : "border-border bg-background/82 backdrop-blur-xl"
      }`}
    >
      <Container className="flex h-28 items-center justify-between gap-4 sm:h-32">
        <div className="flex min-w-0 items-center gap-4">
          <Link href="/" className="group inline-flex min-w-0 flex-col items-start">
            <SiteLogo
              className="h-20 w-auto transition-transform duration-200 group-hover:scale-[1.02] sm:h-24"
              priority
            />
            <span className="font-label text-[10px] font-bold uppercase tracking-[0.32em] text-muted">
              Ranchi&apos;s Digital Pulse
            </span>
          </Link>
        </div>

        <nav className="hidden items-center gap-6 lg:flex">
          {primaryNavigation.slice(0, 7).map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`font-label text-xs font-bold uppercase tracking-[0.2em] ${
                  active
                    ? "text-forest"
                    : "text-muted hover:text-charcoal dark:hover:text-foreground"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            href="/news"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-panel text-charcoal hover:scale-[1.03] dark:text-foreground"
            aria-label="Search stories"
          >
            <Search className="h-4 w-4" />
          </Link>
          <ThemeToggle />
          <Link
            href="/collaborate"
            className="hidden items-center gap-2 rounded-full bg-forest px-4 py-2.5 font-label text-xs font-bold uppercase tracking-[0.2em] text-white shadow-[0_10px_30px_rgba(24,69,44,0.28)] transition hover:-translate-y-0.5 md:inline-flex"
          >
            <Sparkles className="h-3.5 w-3.5" />
            Submit Reel
          </Link>
        </div>
      </Container>
    </header>
  );
}
