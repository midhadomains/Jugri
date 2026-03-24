import Link from "next/link";
import { Camera, MessageCircleMore } from "lucide-react";

export function FloatingActions() {
  return (
    <div className="pointer-events-none fixed bottom-24 right-4 z-40 hidden flex-col gap-3 md:flex">
      <Link
        href="/collaborate"
        className="pointer-events-auto inline-flex items-center gap-2 rounded-full bg-forest px-5 py-3 font-label text-xs font-bold uppercase tracking-[0.2em] text-white shadow-[0_16px_40px_rgba(24,69,44,0.34)] transition hover:-translate-y-0.5"
      >
        <Camera className="h-4 w-4" />
        Submit Your Reel
      </Link>
      <a
        href="https://wa.me/919999999999"
        target="_blank"
        rel="noreferrer"
        className="pointer-events-auto inline-flex items-center gap-2 rounded-full border border-border bg-panel px-5 py-3 font-label text-xs font-bold uppercase tracking-[0.2em] text-charcoal panel-shadow dark:text-foreground"
      >
        <MessageCircleMore className="h-4 w-4 text-terracotta" />
        WhatsApp Community
      </a>
    </div>
  );
}
