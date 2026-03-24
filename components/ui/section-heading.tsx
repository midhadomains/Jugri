interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const alignment =
    align === "center" ? "items-center text-center" : "items-start text-left";

  return (
    <div className={`flex max-w-3xl flex-col gap-3 ${alignment}`}>
      {eyebrow ? (
        <span className="font-label text-xs font-bold uppercase tracking-[0.35em] text-terracotta">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="font-headline text-3xl font-black tracking-tight text-charcoal sm:text-4xl md:text-5xl dark:text-foreground">
        {title}
      </h2>
      {description ? (
        <p className="max-w-2xl text-base leading-7 text-muted sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
