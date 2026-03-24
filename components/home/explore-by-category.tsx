import Image from "next/image";
import Link from "next/link";
import { categories } from "@/data/categories";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

const categoryImages: Record<string, string> = {
  "food-cafes":
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAyjGXLWPjeNgOgGOHGahTpvU8Rh918lXUw9Pz2njhKYGp-VzT7bxEK3ny6QGxAyrdZyMqNGt0O-UwOtW650jiRtmXGb_MMYpWU66mLGHDewK1EY8GZsRihOGvpuMZta5Bw0FWpx4FDd1-tZGZPFpB-O8GTLVe1SQ3bgjqxMiDbPjcR6Yk72g8K4ZqyB1yReHgq4jrbmnjbvw4m5uo_PO-V61DOOMUeW1ulhlJo3N7u75q2H4b1ldBn2fcX0aazIDSAV9Aqv5h33I0U",
  events:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBSqUWsIBm3wK-YnOD43bQG98Bn3j9VZ7vT5_ciO36Np3EK78hl6itERqYZ7q5jb39wejhIPmUygi4pIQH-Z2tFLcS9VEiOq9w56FiUZyo1mRBJropWKzGPb3FEAbQMrqaGzGkKubAsECyh4MEyVuWv5hX28ag6F3rgEIBSWgsgTCFvx2r8SV1F5LDKzCc4CFG9J8r71FKqLyOXo2w2IJl0NE2ONg3Lw-04uImGnlU_ODJTHjmpZ3x3PE56r7owEHow06Rl2lOiMXvQ",
  "college-campus":
    "https://lh3.googleusercontent.com/aida-public/AB6AXuD8SOeMnjlCCBQjgsHBhcqa3M_0Xl1Wgw4Q-Pg4LxiND5i3mQ0uB9m2REktC8eKW5vrAayRfc2Ws55ShCJYOCAuzk5m_P_R3ZgMHfv_DUCjazaQaL6HFyJjhO0gycza1Vw6-DryDLmtyNaKA9npYJ8_aVq7fqWUVqnD06JJaoto4QZDTWEpebQe-KgHyBc5sh9TIYZnnXroJtIKltdEW-Gw8zgkKzillw04i5F9OP2CUQLNdUmryhMOMAVUk4bC1Oi7F83bl4djvFIm",
  "fashion-lifestyle":
    "https://lh3.googleusercontent.com/aida-public/AB6AXuC_MqlrS-6ChdrRQ4aVkdIjtuy7tXB5BlTf85VEjX5wZ8uTLEexBnH93eUN3kl28xvO5n4yeKuWdKttzxy57-mNbIej_Qy3L8SGxZUArN3O4j8vrvefOH_eiSbUsN5ZMUTs44XjfvXgJrsPY6cPiBnfHs7OmTGBFAWhqNvK_Vok3QXTyIZe2GCcN6e1Uxd6RdKuh4Zu9txDMTZ50Bv_fNO00bblpO6641h3DMdqEZ4vy-X-pS8E3ecDaKTIrHH1IOK1J3OuVgLUAUne",
  "hidden-places":
    "https://lh3.googleusercontent.com/aida-public/AB6AXuA4ztQ0SrTI0_TBXUtvzhp9wMl-kK2v-e0mY7CahzAcACA_yypn9UE-31Cr93eRJ1HrzZi66XbGmk-rljC9HgNA5ua4lC5vpKrseCGISyeFBJgjtIm6K-AQSG5zyXMKuXeR7Cy8Gl_TQ5b5gaI0nTp1CB65Qi3I-til_5tXWnYG1WTir3PHC3ep5C2HCffuSANleLXbShiKOn0pRZeZFnnJGrOD-_CxYFXVJufmuAAAigVfAJcNt2DJhk5zVyHVbE3BhMwvTpkvqXN3",
  "jharkhand-culture":
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAdKWYqg0EEEFAP1mvD18UOSJZvetcfqQGfJ-mmWiHUv98I3oq7HP3AL6QvZd-_VrrqKeN1McCqnaseBzVsW95kiMG769F42ZFXTiSaF0m71aE6KrXtq2mqvdpPHJwU8dpjhBEnMeNXye30y9NW2vGwoDEf3BXkkJc1i9Tm_2C9SbwOyXTfAH8ut3KOxZD2FF9aAiXy4Rj0sS6qOoK6yMLXojU_Lm7uSfTPcSGY_ZfVnRxoTLrZe36yKAJIpXInu3gebftzkqTwhGA7",
  "ranchi-news":
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAJxqAmUJoX2CtjZYdKPllVgk1XcuQMRU7HW5L8gmdjJr6-OrOsiJi_nIA0eRJc6Rc-uGS7nKeFMzGj4CB40nVyu2_AOcaUoJdt7tMh5bmc20ImrmGepgL89XI3rkQE5OFbLq_VBR4lBFVzVVPM9ps06q2M0uE5wEC6lLbrVKxxPVi1redNM6YZmLRArrGHW7WUk43d5PvqY3-jArojY7-cI9e5VqNxqBUTNB6ey9ksRlPEgSusX7sMn5kqnm5TdX3gkHOHmj5XK-B2",
  "city-guides":
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDI7aD3oyFO0YhKHwqa3M-Jd9_V-3SAMtUxtojk6JbeVfm20fpA5i90EJMJyW-Jk_wkFI9WGcRyn8E-DjzXIXTZtNvfsuFwzD1Z4QTPJhZe0sifK8jtVjv1BHD1ZG77PVFXgjzPmMSimrmUycjtQtUUxNovJBbPo5jWCQXWGfJ0--XY4b0uA45dv4Bvc8RmOwHqe6jNkw58K8OwrrvpronZ8Q1PhlQ5-8aaw1vyGXw16UrOXYfWQyNGXYjm8t4wB_xKnGiSWbf60i9g",
};

export function ExploreByCategory() {
  const curated = categories.filter((item) =>
    [
      "food-cafes",
      "events",
      "college-campus",
      "jharkhand-culture",
      "ranchi-news",
      "fashion-lifestyle",
      "city-guides",
      "hidden-places",
    ].includes(item.slug),
  );

  return (
    <section className="py-20">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Explore By Vibe"
            title="Choose a mood and let Ranchi open up."
            description="Food runs, hidden corners, campuses, retail loops, and cultural stories, organized for discoverability instead of clutter."
          />
        </Reveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {curated.map((category, index) => (
            <Reveal key={category.slug} delay={index * 0.05}>
              <Link
                href={category.href}
                className="group relative block aspect-square overflow-hidden rounded-[1.8rem] border border-border panel-shadow"
              >
                <Image
                  src={categoryImages[category.slug]}
                  alt={category.name}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.1),rgba(0,0,0,0.62))]" />
                <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                  <div className="font-headline text-3xl font-black tracking-tight">
                    {category.name}
                  </div>
                  <div className="mt-2 font-label text-[11px] font-bold uppercase tracking-[0.22em] text-white/78">
                    {category.description}
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
