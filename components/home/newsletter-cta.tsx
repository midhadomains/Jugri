import Link from "next/link";
import { MessageCircleMore } from "lucide-react";
import { Container } from "@/components/ui/container";

export function NewsletterCta() {
  return (
    <section className="py-20">
      <Container>
        <div className="relative overflow-hidden rounded-[2.5rem] bg-forest px-6 py-14 text-center text-white panel-shadow sm:px-10 md:px-16">
          <div className="absolute -left-12 top-0 h-48 w-48 rounded-full bg-terracotta/40 blur-3xl" />
          <div className="absolute -bottom-8 right-0 h-52 w-52 rounded-full bg-gold/30 blur-3xl" />
          <div className="relative mx-auto max-w-3xl">
            <p className="font-label text-[11px] font-bold uppercase tracking-[0.32em] text-gold-soft">
              Newsletter + WhatsApp
            </p>
            <h2 className="mt-4 font-headline text-4xl font-black tracking-tight sm:text-5xl">
              Stay in the loop with Ranchi.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-white/80 sm:text-lg">
              Get the best of the city delivered to your inbox or directly to your WhatsApp. No clutter, just what matters in Ranchi this week.
            </p>
            <form className="mx-auto mt-8 flex max-w-2xl flex-col gap-3 sm:flex-row">
              <input
                suppressHydrationWarning
                type="email"
                placeholder="Your email"
                className="h-14 flex-1 rounded-full border border-white/10 bg-white px-5 text-charcoal outline-none"
              />
              <button
                suppressHydrationWarning
                type="submit"
                className="h-14 rounded-full bg-terracotta px-8 font-label text-xs font-bold uppercase tracking-[0.2em] text-white"
              >
                Join Now
              </button>
            </form>
            <Link
              href="/contact"
              className="mt-5 inline-flex items-center gap-2 font-label text-xs font-bold uppercase tracking-[0.2em] text-white"
            >
              <MessageCircleMore className="h-4 w-4" />
              Get WhatsApp updates
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
