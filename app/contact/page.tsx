import { Container } from "@/components/ui/container";
import { PageIntro } from "@/components/ui/page-intro";
import { createMetadata } from "@/lib/site";

export const metadata = createMetadata({
  title: "Contact",
  description:
    "Contact Jugri for tips, collaborations, partnerships, and community updates.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageIntro
        eyebrow="Contact"
        title="Send a tip, pitch a reel, or start a collaboration."
        description="Use this page for story leads, creator partnerships, advertising conversations, community invitations, and local recommendations."
      />
      <section className="py-12 sm:py-16">
        <Container className="grid gap-6 lg:grid-cols-[1fr_0.8fr]">
          <form className="rounded-[2rem] border border-border bg-panel p-8 panel-shadow">
            <div className="grid gap-4">
              <input suppressHydrationWarning className="h-14 rounded-2xl border border-border bg-background px-4" placeholder="Your name" />
              <input suppressHydrationWarning className="h-14 rounded-2xl border border-border bg-background px-4" placeholder="Email" type="email" />
              <input suppressHydrationWarning className="h-14 rounded-2xl border border-border bg-background px-4" placeholder="Subject" />
              <textarea suppressHydrationWarning className="min-h-40 rounded-2xl border border-border bg-background px-4 py-4" placeholder="Tell us what you have in mind" />
              <button suppressHydrationWarning type="submit" className="h-14 rounded-full bg-forest font-label text-xs font-bold uppercase tracking-[0.2em] text-white">
                Send message
              </button>
            </div>
          </form>
          <div className="grid gap-6">
            <div className="rounded-[2rem] border border-border bg-canvas p-8 panel-shadow">
              <h2 className="font-headline text-3xl font-black tracking-tight text-charcoal dark:text-foreground">
                Contact lines
              </h2>
              <div className="mt-4 grid gap-3 text-sm leading-7 text-muted">
                <p>Editorial: hello@jugri.in</p>
                <p>Partnerships: partnerships@jugri.in</p>
                <p>WhatsApp community: +91 99999 99999</p>
                <p>Lalpur Chowk, Behind Plaza Cinema, Ranchi, Jharkhand 834001</p>
              </div>
            </div>
            <div className="rounded-[2rem] border border-border bg-panel p-8 panel-shadow">
              <h2 className="font-headline text-3xl font-black tracking-tight text-charcoal dark:text-foreground">
                Best submissions
              </h2>
              <p className="mt-4 text-sm leading-7 text-muted">
                We respond fastest to location-specific tips, event details with dates, creator reels with context, and stories tied to neighborhoods or student life.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
