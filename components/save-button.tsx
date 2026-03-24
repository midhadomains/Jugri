"use client";

import { Bookmark } from "lucide-react";
import { useSyncExternalStore } from "react";

interface SaveButtonProps {
  saveKey: string;
  label?: string;
}

const storageKey = "neo-sohrai-saved";

function readSavedState(saveKey: string) {
  if (typeof window === "undefined") {
    return false;
  }

  try {
    const raw = window.localStorage.getItem(storageKey);
    const parsed: string[] = raw ? JSON.parse(raw) : [];
    return parsed.includes(saveKey);
  } catch {
    return false;
  }
}

function subscribe(callback: () => void) {
  if (typeof window === "undefined") {
    return () => undefined;
  }

  const onStorage = () => callback();

  window.addEventListener("storage", onStorage);
  window.addEventListener("neo-sohrai-saved", onStorage);

  return () => {
    window.removeEventListener("storage", onStorage);
    window.removeEventListener("neo-sohrai-saved", onStorage);
  };
}

export function SaveButton({
  saveKey,
  label = "Save story",
}: SaveButtonProps) {
  const saved = useSyncExternalStore(
    subscribe,
    () => readSavedState(saveKey),
    () => false,
  );

  function toggleSave() {
    const raw = window.localStorage.getItem(storageKey);
    const parsed: string[] = raw ? JSON.parse(raw) : [];
    const next = parsed.includes(saveKey)
      ? parsed.filter((item) => item !== saveKey)
      : [...parsed, saveKey];

    window.localStorage.setItem(storageKey, JSON.stringify(next));
    window.dispatchEvent(new Event("neo-sohrai-saved"));
  }

  return (
    <button
      type="button"
      onClick={toggleSave}
      suppressHydrationWarning
      className={`inline-flex items-center gap-2 rounded-full border px-3 py-2 text-xs font-bold uppercase tracking-[0.22em] ${
        saved
          ? "border-terracotta bg-terracotta text-white"
          : "border-border bg-panel text-muted hover:text-charcoal dark:hover:text-foreground"
      }`}
      aria-pressed={saved}
    >
      <Bookmark className={`h-3.5 w-3.5 ${saved ? "fill-current" : ""}`} />
      {label}
    </button>
  );
}
