"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CalendarRange, Compass, Home, Newspaper, PlaySquare, Users } from "lucide-react";

const mobileItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/reels", label: "Reels", icon: PlaySquare },
  { href: "/news", label: "News", icon: Newspaper },
  { href: "/explore", label: "Explore", icon: Compass },
  { href: "/events", label: "Events", icon: CalendarRange },
  { href: "/creators", label: "Creators", icon: Users },
];

export function MobileNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/94 backdrop-blur-xl md:hidden">
      <div className="grid grid-cols-6 gap-1 px-2 pb-5 pt-2">
        {mobileItems.map((item) => {
          const Icon = item.icon;
          const active = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center justify-center gap-1 rounded-2xl px-2 py-2 ${
                active
                  ? "bg-forest text-white"
                  : "text-muted hover:bg-panel hover:text-charcoal dark:hover:text-foreground"
              }`}
            >
              <Icon className="h-4 w-4" />
              <span className="font-label text-[10px] font-bold uppercase tracking-[0.18em]">
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
