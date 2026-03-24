"use client";

import { Copy, MessageCircle, Share2 } from "lucide-react";

interface SocialShareProps {
  title: string;
}

export function SocialShare({ title }: SocialShareProps) {
  async function copyLink() {
    await navigator.clipboard.writeText(window.location.href);
  }

  const whatsappHref = `https://wa.me/?text=${encodeURIComponent(title)}`;

  return (
    <div className="flex flex-wrap items-center gap-3">
      <span className="inline-flex items-center gap-2 font-label text-xs font-bold uppercase tracking-[0.24em] text-muted">
        <Share2 className="h-3.5 w-3.5" />
        Share
      </span>
      <a
        href={whatsappHref}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-2 rounded-full border border-border bg-panel px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-charcoal dark:text-foreground"
      >
        <MessageCircle className="h-3.5 w-3.5" />
        WhatsApp
      </a>
      <button
        type="button"
        onClick={copyLink}
        suppressHydrationWarning
        className="inline-flex items-center gap-2 rounded-full border border-border bg-panel px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-charcoal dark:text-foreground"
      >
        <Copy className="h-3.5 w-3.5" />
        Copy Link
      </button>
    </div>
  );
}
