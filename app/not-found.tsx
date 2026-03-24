import Link from "next/link";
import { Container } from "@/components/ui/container";

export default function NotFound() {
  return (
    <section className="py-24">
      <Container>
        <div className="rounded-[2rem] border border-border bg-panel p-10 text-center panel-shadow">
          <p className="font-label text-xs font-bold uppercase tracking-[0.34em] text-terracotta">
            Not Found
          </p>
          <h1 className="mt-4 font-headline text-4xl font-black tracking-tight text-charcoal dark:text-foreground">
            That Ranchi story slipped off the map.
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-muted">
            The page may have moved, the slug may be off, or the content is no longer in this build.
          </p>
          <Link
            href="/"
            className="mt-8 inline-flex rounded-full bg-forest px-6 py-3 font-label text-xs font-bold uppercase tracking-[0.2em] text-white"
          >
            Back home
          </Link>
        </div>
      </Container>
    </section>
  );
}
