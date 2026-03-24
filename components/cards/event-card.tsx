"use client";

import Image from "next/image";
import Link from "next/link";
import { CalendarDays, Clock3, MapPin } from "lucide-react";
import { getCategory } from "@/lib/content";
import type { Event } from "@/lib/types";
import { formatEventDate } from "@/lib/utils";

interface EventCardProps {
  event: Event;
}

export function EventCard({ event }: EventCardProps) {
  const category = getCategory(event.category);

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[2rem] border border-border bg-panel panel-shadow">
      <Link href={`/events/${event.slug}`} className="relative block aspect-[16/11] overflow-hidden">
        <Image
          src={event.image}
          alt={event.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 24rem"
          className="object-cover transition duration-700 group-hover:scale-105"
        />
      </Link>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <span className="font-label text-[11px] font-bold uppercase tracking-[0.22em] text-terracotta">
            {category?.name ?? "Event"}
          </span>
          <span className="rounded-full bg-background px-3 py-1 font-label text-[11px] font-bold uppercase tracking-[0.16em] text-forest">
            {event.price}
          </span>
        </div>
        <Link href={`/events/${event.slug}`} className="mt-3">
          <h3 className="font-headline text-2xl font-black tracking-tight text-charcoal transition group-hover:text-forest dark:text-foreground">
            {event.title}
          </h3>
        </Link>
        <p className="mt-3 text-sm leading-7 text-muted">{event.summary}</p>
        <div className="mt-5 grid gap-2 text-xs text-muted">
          <span className="inline-flex items-center gap-2">
            <CalendarDays className="h-3.5 w-3.5" />
            {formatEventDate(event.dateIso)}
          </span>
          <span className="inline-flex items-center gap-2">
            <Clock3 className="h-3.5 w-3.5" />
            {event.time}
          </span>
          <span className="inline-flex items-center gap-2">
            <MapPin className="h-3.5 w-3.5" />
            {event.venue}
          </span>
        </div>
      </div>
    </article>
  );
}
