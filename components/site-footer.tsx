import Link from "next/link";
import { Facebook, Instagram, Youtube } from "lucide-react";
import { categories } from "@/data/categories";
import { footerNavigation } from "@/lib/site";
import { SiteLogo } from "@/components/site-logo";
import { Container } from "@/components/ui/container";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-canvas">
      <Container className="grid gap-12 py-14 md:grid-cols-[1.3fr_1fr_1fr]">
        <div className="space-y-5">
          <div>
            <SiteLogo className="h-24 w-auto sm:h-28" />
            <div className="mt-2 font-label text-xs font-bold uppercase tracking-[0.32em] text-muted">
              Ranchi x Jharkhand x youth culture
            </div>
          </div>
          <p className="max-w-md text-sm leading-7 text-muted">
            Premium hyperlocal storytelling for Ranchi and Jharkhand, built around reels, city updates, culture, creators, and the places people actually talk about.
          </p>
          <div className="flex items-center gap-3 text-charcoal dark:text-foreground">
            <a
              href="https://www.instagram.com/jugri_johar/"
              target="_blank"
              rel="noreferrer"
              aria-label="Jugri Johar on Instagram"
              className="rounded-full border border-border p-2"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href="https://www.youtube.com/@Jugri_Johar"
              target="_blank"
              rel="noreferrer"
              aria-label="Jugri Johar on YouTube"
              className="rounded-full border border-border p-2"
            >
              <Youtube className="h-4 w-4" />
            </a>
            <a
              href="https://www.facebook.com/jugri.johar"
              target="_blank"
              rel="noreferrer"
              aria-label="Jugri Johar on Facebook"
              className="rounded-full border border-border p-2"
            >
              <Facebook className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-label text-xs font-bold uppercase tracking-[0.28em] text-terracotta">
            Categories
          </h3>
          <div className="mt-5 grid gap-3">
            {categories.slice(0, 6).map((category) => (
              <Link
                key={category.slug}
                href={category.href}
                className="text-sm text-muted hover:text-charcoal dark:hover:text-foreground"
              >
                {category.name}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-label text-xs font-bold uppercase tracking-[0.28em] text-terracotta">
            Connect
          </h3>
          <div className="mt-5 grid gap-3">
            {footerNavigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-muted hover:text-charcoal dark:hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
            <p className="pt-4 text-sm leading-7 text-muted">
              Lalpur Chowk, Behind Plaza Cinema
              <br />
              Ranchi, Jharkhand 834001
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
