import type { Metadata, Viewport } from "next";
import { Epilogue, Manrope, Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
import { FloatingActions } from "@/components/floating-actions";
import { MobileNav } from "@/components/navigation/mobile-nav";
import { SiteHeader } from "@/components/navigation/site-header";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { SiteFooter } from "@/components/site-footer";
import { createMetadata, siteConfig } from "@/lib/site";
import "./globals.css";

const epilogue = Epilogue({
  variable: "--font-epilogue",
  subsets: ["latin"],
  weight: ["700", "800", "900"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const themeInitScript = `
  try {
    const storedTheme = window.localStorage.getItem("jugri-theme");
    const theme = storedTheme === "dark" || storedTheme === "light"
      ? storedTheme
      : window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    document.documentElement.classList.toggle("dark", theme === "dark");
    document.documentElement.style.colorScheme = theme;
  } catch {}
`;

const siteJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.name,
  url: siteConfig.url,
  description: siteConfig.description,
  inLanguage: "en-IN",
  areaServed: {
    "@type": "City",
    name: "Ranchi",
  },
}).replace(/</g, "\\u003c");

export const metadata: Metadata = createMetadata({
  title: "Jharkhand Updates and Ground Reports Initiative",
  description:
    "A premium reels-first media platform tracking Ranchi news, food, culture, events, creators, and weekend energy across Jharkhand.",
  path: "/",
});

export const viewport: Viewport = {
  colorScheme: "dark light",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f7efe5" },
    { media: "(prefers-color-scheme: dark)", color: "#101312" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${epilogue.variable} ${manrope.variable} ${plusJakartaSans.variable} h-full antialiased`}
    >
      <body suppressHydrationWarning className="min-h-full bg-background text-foreground">
        <Script id="theme-init" strategy="beforeInteractive">
          {themeInitScript}
        </Script>
        <Script id="site-json-ld" type="application/ld+json" strategy="beforeInteractive">
          {siteJsonLd}
        </Script>
        <ThemeProvider>
          <div className="site-shell relative flex min-h-screen flex-col">
            <SiteHeader />
            <main className="flex-1 pb-28 md:pb-0">{children}</main>
            <SiteFooter />
            <FloatingActions />
            <MobileNav />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
