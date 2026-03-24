import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Compass, PlayCircle } from "lucide-react";
import { categories } from "@/data/categories";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

const heroImage =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDI7aD3oyFO0YhKHwqa3M-Jd9_V-3SAMtUxtojk6JbeVfm20fpA5i90EJMJyW-Jk_wkFI9WGcRyn8E-DjzXIXTZtNvfsuFwzD1Z4QTPJhZe0sifK8jtVjv1BHD1ZG77PVFXgjzPmMSimrmUycjtQtUUxNovJBbPo5jWCQXWGfJ0--XY4b0uA45dv4Bvc8RmOwHqe6jNkw58K8OwrrvpronZ8Q1PhlQ5-8aaw1vyGXw16UrOXYfWQyNGXYjm8t4wB_xKnGiSWbf60i9g";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="absolute inset-0">
        <Image
          src={heroImage}
          alt="Ranchi skyline at golden hour"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(9,15,13,0.86),rgba(9,15,13,0.48),rgba(9,15,13,0.2))]" />
      </div>
      <div className="absolute -right-20 top-28 hidden h-64 w-64 rounded-full district-accent opacity-80 lg:block" />
      <Container className="relative grid min-h-[calc(100vh-5rem)] items-end gap-12 py-16 md:py-20 lg:grid-cols-[1.15fr_0.85fr] lg:py-24">
        <Reveal className="max-w-4xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-terracotta px-3 py-1 font-label text-[11px] font-bold uppercase tracking-[0.24em] text-white">
            Live from Ranchi
          </span>
          <h1 className="mt-6 max-w-4xl font-headline text-5xl font-black leading-[0.98] tracking-tight text-white text-balance sm:text-6xl md:text-7xl">
            Ranchi right now: what the city is watching, wearing, eating, and talking about.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/82 sm:text-xl">
            A premium reels-first home for city updates, waterfall escapes, fashion circuits, campus culture, and Jharkhand stories told with modern editorial energy.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/reels"
              className="inline-flex items-center gap-2 rounded-full bg-terracotta px-6 py-3 font-label text-xs font-bold uppercase tracking-[0.2em] text-white"
            >
              <PlayCircle className="h-4 w-4" />
              Watch Reels
            </Link>
            <Link
              href="/explore"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-6 py-3 font-label text-xs font-bold uppercase tracking-[0.2em] text-white backdrop-blur"
            >
              <Compass className="h-4 w-4" />
              Explore Ranchi
            </Link>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="grain relative overflow-hidden rounded-[2rem] border border-white/15 bg-white/10 p-6 text-white backdrop-blur-xl">
            <div className="absolute inset-0 sohrai-dots opacity-20" />
            <div className="relative">
              <p className="font-label text-[11px] font-bold uppercase tracking-[0.28em] text-white/70">
                Discover by signal
              </p>
              <div className="mt-5 rounded-[1.5rem] border border-white/14 bg-black/15 p-4">
                <p className="text-sm text-white/72">
                  Start with a category and move like a local: food, live updates, hidden places, and youth culture.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {categories.slice(0, 8).map((category) => (
                    <Link
                      key={category.slug}
                      href={category.href}
                      className="rounded-full bg-white/10 px-3 py-2 font-label text-[11px] font-bold uppercase tracking-[0.18em] text-white"
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="mt-5 grid gap-3 rounded-[1.5rem] border border-white/14 bg-black/15 p-4">
                <div className="flex items-center justify-between gap-3">
                  <span className="font-label text-[11px] font-bold uppercase tracking-[0.24em] text-gold-soft">
                    This week
                  </span>
                  <ArrowRight className="h-4 w-4 text-white/80" />
                </div>
                <div className="grid gap-3 text-sm text-white/84">
                  <div>Morabadi night market is becoming the city&apos;s easiest social reset.</div>
                  <div>Campus dance and sound edits are pushing local culture into mainstream social feeds.</div>
                  <div>Lalpur&apos;s retail loop is getting stronger with boutique interiors and late openings.</div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
