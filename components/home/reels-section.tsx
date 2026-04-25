import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

const instagramReels = [
  "https://www.instagram.com/reel/DVY4o1WiJEt/",
  "https://www.instagram.com/reel/DVTYl_TDueg/",
  "https://www.instagram.com/reel/DVORgCeDlAB/",
  "https://www.instagram.com/reel/DVN7AiojhGL/",
];

function getInstagramEmbedUrl(url: string) {
  return `${url.replace(/\/$/, "")}/embed`;
}

export function ReelsSection() {
  return (
    <section className="relative overflow-hidden py-20">
      <div
        suppressHydrationWarning
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(24,69,44,0.08),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(190,99,67,0.1),transparent_30%)]"
      />
      <Container>
        <Reveal className="relative">
          <SectionHeading
            eyebrow="Reels First"
            title="Trending reels, built for how Ranchi discovers the city."
            description="Live Instagram reels from the city, embedded directly into the homepage for fast vertical discovery."
          />
        </Reveal>
        <div className="relative mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {instagramReels.map((reelUrl, index) => (
            <Reveal key={reelUrl} delay={index * 0.06} className="min-w-0">
              <article className="h-full overflow-hidden rounded-[2rem] border border-border bg-panel text-charcoal panel-shadow dark:text-foreground">
                <div className="flex items-center justify-between gap-4 border-b border-border px-5 py-4">
                  <div>
                    <p className="font-label text-[11px] font-bold uppercase tracking-[0.26em] text-terracotta">
                      Reel {String(index + 1).padStart(2, "0")}
                    </p>
                    <p className="mt-1 text-sm text-muted">
                      Instagram embed, aligned with the site&apos;s theme.
                    </p>
                  </div>
                  <a
                    href={reelUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-border bg-background px-4 py-2 font-label text-[11px] font-bold uppercase tracking-[0.18em] text-charcoal transition hover:bg-panel-strong dark:text-foreground"
                  >
                    Open Reel
                  </a>
                </div>
                <div className="p-4 sm:p-5">
                  <div className="rounded-[1.7rem] border border-border bg-canvas p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.25),0_18px_40px_rgba(0,0,0,0.08)] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_18px_40px_rgba(0,0,0,0.22)]">
                    <div className="mb-3 flex items-center gap-2 px-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-terracotta" />
                      <span className="h-2.5 w-2.5 rounded-full bg-gold" />
                      <span className="h-2.5 w-2.5 rounded-full bg-forest" />
                    </div>
                    <div className="relative aspect-[9/16] overflow-hidden rounded-[1.3rem] bg-panel ring-1 ring-black/6 dark:ring-white/8">
                      <iframe
                        src={getInstagramEmbedUrl(reelUrl)}
                        title={`Instagram reel ${index + 1}`}
                        className="absolute inset-0 h-full w-full"
                        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                        allowFullScreen
                        loading="lazy"
                        scrolling="no"
                        referrerPolicy="strict-origin-when-cross-origin"
                        style={{ border: 0 }}
                      />
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
