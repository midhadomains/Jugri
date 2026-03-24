import { Container } from "@/components/ui/container";
import { PageIntro } from "@/components/ui/page-intro";
import { createMetadata } from "@/lib/site";

export const metadata = createMetadata({
  title: "About",
  description:
    "About Jugri, a premium hyperlocal media brand for Ranchi and Jharkhand.",
  path: "/about",
});

export default function AboutPage() {
  const principles = [
    "Hyperlocal reporting with a premium visual language",
    "Reels-first discovery for mobile-native audiences",
    "Fresh Jharkhand identity without flattening culture into nostalgia",
    "Mock CMS-ready architecture built to scale into a newsroom product",
  ];

  return (
    <>
      <PageIntro
        eyebrow="About"
        title="A modern media brand rooted in Ranchi."
        description="Jugri exists to document what the city is becoming: more visual, more creator-led, more design-aware, and more confident in its Jharkhand identity."
      />
      <section className="py-12 sm:py-16">
        <Container className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-[2rem] border border-border bg-panel p-8 panel-shadow">
            <h2 className="font-headline text-3xl font-black tracking-tight text-charcoal dark:text-foreground">
              Why this platform exists
            </h2>
            <p className="mt-4 text-base leading-8 text-muted">
              Ranchi deserves a local media experience that moves like the internet people actually use. That means short-form discovery, strong imagery, smart curation, readable reporting, and an identity that feels like the city rather than a generic template.
            </p>
          </div>
          <div className="rounded-[2rem] border border-border bg-canvas p-8 panel-shadow">
            <h2 className="font-headline text-3xl font-black tracking-tight text-charcoal dark:text-foreground">
              Editorial principles
            </h2>
            <ul className="mt-4 grid gap-3 text-sm leading-7 text-muted">
              {principles.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </Container>
      </section>
    </>
  );
}
