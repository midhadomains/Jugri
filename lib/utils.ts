export function formatDate(dateString: string) {
  return new Intl.DateTimeFormat("en-IN", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(dateString));
}

export function formatEventDate(dateString: string) {
  return new Intl.DateTimeFormat("en-IN", {
    weekday: "short",
    month: "short",
    day: "numeric",
  }).format(new Date(dateString));
}

export function relativeLabel(dateString: string) {
  const date = new Date(dateString);
  const now = new Date("2026-03-23T00:00:00+05:30");
  const diff = Math.round((now.getTime() - date.getTime()) / (1000 * 60 * 60));

  if (diff < 24) {
    return `${Math.max(diff, 1)} hours ago`;
  }

  const days = Math.round(diff / 24);
  return `${days} days ago`;
}

export function sortByNewest<T extends { publishedAt: string }>(items: T[]) {
  return [...items].sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );
}

export function sortByUpcoming<T extends { dateIso: string }>(items: T[]) {
  return [...items].sort(
    (a, b) => new Date(a.dateIso).getTime() - new Date(b.dateIso).getTime(),
  );
}
