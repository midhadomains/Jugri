import Link from "next/link";
import { Flame } from "lucide-react";
import { Container } from "@/components/ui/container";

interface LiveTickerProps {
  items: Array<{
    label: string;
    href: string;
  }>;
}

export function LiveTicker({ items }: LiveTickerProps) {
  const repeated = [...items, ...items];

  return (
    <section className="border-b border-border bg-forest text-white">
      <Container className="flex items-center gap-4 overflow-hidden py-3">
        <span className="shrink-0 rounded-full bg-white/12 px-3 py-1 font-label text-[11px] font-bold uppercase tracking-[0.26em]">
          Trending Now
        </span>
        <div className="flex min-w-0 flex-1 overflow-hidden">
          <div className="ticker-track flex shrink-0 items-center gap-8">
            {repeated.map((item, index) => (
              <Link
                key={`${item.href}-${index}`}
                href={item.href}
                className="inline-flex items-center gap-3 whitespace-nowrap font-label text-xs font-semibold uppercase tracking-[0.16em] text-white/88"
              >
                <Flame className="h-3.5 w-3.5 text-gold-soft" />
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
