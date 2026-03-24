"use client";

import Image from "next/image";
import Link from "next/link";
import { Eye, MapPin, Play } from "lucide-react";
import { SaveButton } from "@/components/save-button";
import { getCategory, getCreator } from "@/lib/content";
import type { Reel } from "@/lib/types";

interface ReelCardProps {
  reel: Reel;
}

export function ReelCard({ reel }: ReelCardProps) {
  const creator = getCreator(reel.creatorSlug);
  const category = getCategory(reel.category);

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[2rem] border border-border bg-panel panel-shadow">
      <Link href={`/reels/${reel.slug}`} className="relative block aspect-[9/14] overflow-hidden">
        <Image
          src={reel.image}
          alt={reel.title}
          fill
          sizes="(max-width: 640px) 92vw, (max-width: 1280px) 45vw, 22rem"
          className="object-cover transition duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/88 via-black/12 to-black/10" />
        <div className="absolute left-4 right-4 top-4 flex items-center justify-between">
          <span className="rounded-full bg-white/14 px-3 py-1 font-label text-[10px] font-bold uppercase tracking-[0.26em] text-white backdrop-blur">
            {category?.name ?? "Ranchi"}
          </span>
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/14 text-white backdrop-blur">
            <Play className="ml-0.5 h-4 w-4 fill-current" />
          </span>
        </div>
        <div className="absolute inset-x-0 bottom-0 p-4 text-white">
          <h3 className="font-headline text-xl font-black leading-tight text-balance">
            {reel.title}
          </h3>
          <div className="mt-3 flex flex-wrap items-center gap-3 text-xs text-white/82">
            <span className="inline-flex items-center gap-1.5">
              <Eye className="h-3.5 w-3.5" />
              {reel.views}
            </span>
            <span>{reel.duration}</span>
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5" />
              {reel.location}
            </span>
          </div>
        </div>
      </Link>
      <div className="flex items-center justify-between gap-3 p-4">
        <div>
          <p className="font-label text-[11px] font-bold uppercase tracking-[0.22em] text-terracotta">
            {creator?.handle ?? "@neo-sohrai"}
          </p>
          <p className="mt-1 text-sm text-muted">{reel.vibe}</p>
        </div>
        <SaveButton saveKey={`reel:${reel.slug}`} label="Save" />
      </div>
    </article>
  );
}
