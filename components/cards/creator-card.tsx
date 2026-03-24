"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin, Users } from "lucide-react";
import type { Creator } from "@/lib/types";

interface CreatorCardProps {
  creator: Creator;
}

export function CreatorCard({ creator }: CreatorCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[2rem] border border-border bg-panel panel-shadow">
      <Link href={`/creators/${creator.slug}`} className="relative block aspect-[5/4] overflow-hidden">
        <Image
          src={creator.heroImage}
          alt={creator.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 24rem"
          className="object-cover transition duration-700 group-hover:scale-105"
        />
      </Link>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center gap-3">
          <div className="relative h-14 w-14 overflow-hidden rounded-full border border-white/60 shadow-md">
            <Image
              src={creator.avatar}
              alt={creator.name}
              fill
              sizes="56px"
              className="object-cover"
            />
          </div>
          <div>
            <p className="font-headline text-2xl font-black tracking-tight text-charcoal dark:text-foreground">
              {creator.name}
            </p>
            <p className="font-label text-[11px] font-bold uppercase tracking-[0.22em] text-terracotta">
              {creator.handle}
            </p>
          </div>
        </div>
        <p className="mt-4 text-sm leading-7 text-muted">{creator.bio}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {creator.specialties.slice(0, 3).map((specialty) => (
            <span
              key={specialty}
              className="rounded-full bg-background px-3 py-1 text-xs font-semibold text-muted"
            >
              {specialty}
            </span>
          ))}
        </div>
        <div className="mt-5 flex flex-wrap items-center gap-4 text-xs text-muted">
          <span className="inline-flex items-center gap-2">
            <MapPin className="h-3.5 w-3.5" />
            {creator.location}
          </span>
          <span className="inline-flex items-center gap-2">
            <Users className="h-3.5 w-3.5" />
            {creator.followers}
          </span>
        </div>
        <Link
          href={`/creators/${creator.slug}`}
          className="mt-6 inline-flex items-center gap-2 font-label text-xs font-bold uppercase tracking-[0.22em] text-forest"
        >
          View profile
          <ArrowUpRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </article>
  );
}
