import { Container } from "@/components/ui/container";
import { PageIntro } from "@/components/ui/page-intro";
import { createMetadata } from "@/lib/site";

export const metadata = createMetadata({
  title: "Advertise With Us",
  description:
    "Partner with Jugri to reach young, local, highly engaged Ranchi audiences.",
  path: "/advertise",
});

export default function AdvertisePage() {
  return (
    <>
      <PageIntro
        eyebrow="Advertise"
        title="Reach Ranchi through stories people actually follow."
        description="Brand integrations, local launches, creator collaborations, event amplification, and guide-led partnerships for businesses that want a premium local audience."
      />
      <section className="py-12 sm:py-16">
        <Container className="grid gap-6 md:grid-cols-3">
          {[
            "Sponsored reels and creator edits",
            "Neighborhood guides and premium place features",
            "Event amplification and weekend plan integrations",
          ].map((item) => (
            <div key={item} className="rounded-[2rem] border border-border bg-panel p-8 panel-shadow">
              <h2 className="font-headline text-2xl font-black tracking-tight text-charcoal dark:text-foreground">
                {item}
              </h2>
            </div>
          ))}
        </Container>
      </section>
    </>
  );
}
