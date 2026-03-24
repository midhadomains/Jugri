import { Container } from "@/components/ui/container";
import { PageIntro } from "@/components/ui/page-intro";
import { createMetadata } from "@/lib/site";

export const metadata = createMetadata({
  title: "Collaborate",
  description:
    "Collaborate with Jugri as a creator, contributor, photographer, or community partner.",
  path: "/collaborate",
});

export default function CollaboratePage() {
  return (
    <>
      <PageIntro
        eyebrow="Collaborate"
        title="Pitch a reel, a guide, a story, or a local project."
        description="We work with campus creators, photographers, food scouts, designers, writers, and community organizers who have a strong Ranchi point of view."
      />
      <section className="py-12 sm:py-16">
        <Container className="grid gap-6 lg:grid-cols-[1fr_0.85fr]">
          <div className="rounded-[2rem] border border-border bg-panel p-8 panel-shadow">
            <h2 className="font-headline text-3xl font-black tracking-tight text-charcoal dark:text-foreground">
              What to send
            </h2>
            <ul className="mt-4 grid gap-3 text-sm leading-7 text-muted">
              <li>One paragraph on your format and why it matters to Ranchi</li>
              <li>Two or three existing reels, clips, or story links</li>
              <li>A clear category fit: food, campus, culture, events, style, or places</li>
            </ul>
          </div>
          <form className="rounded-[2rem] border border-border bg-canvas p-8 panel-shadow">
            <div className="grid gap-4">
              <input suppressHydrationWarning className="h-14 rounded-2xl border border-border bg-background px-4" placeholder="Your name" />
              <input suppressHydrationWarning className="h-14 rounded-2xl border border-border bg-background px-4" placeholder="Email" type="email" />
              <input suppressHydrationWarning className="h-14 rounded-2xl border border-border bg-background px-4" placeholder="Instagram or portfolio link" />
              <textarea suppressHydrationWarning className="min-h-40 rounded-2xl border border-border bg-background px-4 py-4" placeholder="Pitch your collaboration idea" />
              <button suppressHydrationWarning type="submit" className="h-14 rounded-full bg-terracotta font-label text-xs font-bold uppercase tracking-[0.2em] text-white">
                Send pitch
              </button>
            </div>
          </form>
        </Container>
      </section>
    </>
  );
}
