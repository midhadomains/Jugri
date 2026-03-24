import { CreatorsBrowser } from "@/components/browsers/creators-browser";
import { PageIntro } from "@/components/ui/page-intro";
import { allCreators } from "@/lib/content";
import { createMetadata } from "@/lib/site";

export const metadata = createMetadata({
  title: "Creators",
  description:
    "Meet the Ranchi creators covering food, campus culture, style, hidden places, and local identity with strong editorial voice.",
  path: "/creators",
});

export default function CreatorsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Creators"
        title="The local voices behind the feed."
        description="Food scouts, city reporters, stylists, campus filmmakers, and culture writers making Ranchi more discoverable."
      />
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <CreatorsBrowser creators={allCreators} />
        </div>
      </section>
    </>
  );
}
