import type { ReactNode } from "react";
import { Container } from "@/components/ui/container";

interface PageIntroProps {
  eyebrow?: string;
  title: string;
  description: string;
  actions?: ReactNode;
}

export function PageIntro({
  eyebrow,
  title,
  description,
  actions,
}: PageIntroProps) {
  return (
    <section className="border-b border-border bg-canvas py-16 sm:py-20">
      <Container>
        <div className="max-w-4xl">
          {eyebrow ? (
            <span className="font-label text-xs font-bold uppercase tracking-[0.34em] text-terracotta">
              {eyebrow}
            </span>
          ) : null}
          <h1 className="mt-4 font-headline text-4xl font-black tracking-tight text-charcoal sm:text-5xl md:text-6xl dark:text-foreground">
            {title}
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-muted sm:text-lg">
            {description}
          </p>
          {actions ? <div className="mt-8">{actions}</div> : null}
        </div>
      </Container>
    </section>
  );
}
