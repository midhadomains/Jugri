"use client";

import Image from "next/image";
import Link from "next/link";
import { Clock3, MapPin } from "lucide-react";
import { getCategory } from "@/lib/content";
import type { Place } from "@/lib/types";

interface PlaceCardProps {
  place: Place;
}

export function PlaceCard({ place }: PlaceCardProps) {
  const category = getCategory(place.category);

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[2rem] border border-border bg-panel panel-shadow">
      <Link href={`/explore/${place.slug}`} className="relative block aspect-[5/4] overflow-hidden">
        <Image
          src={place.image}
          alt={place.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 24rem"
          className="object-cover transition duration-700 group-hover:scale-105"
        />
      </Link>
      <div className="flex flex-1 flex-col p-5">
        <span className="font-label text-[11px] font-bold uppercase tracking-[0.22em] text-terracotta">
          {category?.name ?? "Place"}
        </span>
        <Link href={`/explore/${place.slug}`} className="mt-3">
          <h3 className="font-headline text-2xl font-black tracking-tight text-charcoal transition group-hover:text-forest dark:text-foreground">
            {place.title}
          </h3>
        </Link>
        <p className="mt-3 text-sm leading-7 text-muted">{place.description}</p>
        <div className="mt-5 grid gap-2 text-xs text-muted">
          <span className="inline-flex items-center gap-2">
            <MapPin className="h-3.5 w-3.5" />
            {place.neighborhood}
          </span>
          <span className="inline-flex items-center gap-2">
            <Clock3 className="h-3.5 w-3.5" />
            {place.hours}
          </span>
        </div>
      </div>
    </article>
  );
}
