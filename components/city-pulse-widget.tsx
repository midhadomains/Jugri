import Link from "next/link";
import { CloudRain, MapPinned, Sparkles, ThermometerSun } from "lucide-react";

export function CityPulseWidget() {
  return (
    <aside className="overflow-hidden rounded-[2rem] border border-border bg-forest p-6 text-white panel-shadow">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="font-label text-[11px] font-bold uppercase tracking-[0.28em] text-white/70">
            City Pulse
          </p>
          <h3 className="mt-3 font-headline text-3xl font-black leading-tight">
            Ranchi feels rain-ready and weekend-hungry.
          </h3>
        </div>
        <div className="rounded-full bg-white/10 p-3">
          <Sparkles className="h-5 w-5 text-gold-soft" />
        </div>
      </div>
      <div className="mt-6 grid gap-4 text-sm text-white/82">
        <div className="flex items-center gap-3">
          <ThermometerSun className="h-4 w-4 text-gold-soft" />
          28C with patchy evening humidity near Kanke Lake
        </div>
        <div className="flex items-center gap-3">
          <CloudRain className="h-4 w-4 text-gold-soft" />
          Showers possible after 6:30 PM, especially west side
        </div>
        <div className="flex items-center gap-3">
          <MapPinned className="h-4 w-4 text-gold-soft" />
          Buzzing zones: Morabadi, Lalpur, Circular Road
        </div>
      </div>
      <Link
        href="/events"
        className="mt-6 inline-flex items-center rounded-full bg-white px-4 py-2 font-label text-xs font-bold uppercase tracking-[0.2em] text-forest"
      >
        Check the weekend calendar
      </Link>
    </aside>
  );
}
