import Image from "next/image";
import { siteConfig } from "@/lib/site";

interface SiteLogoProps {
  className?: string;
  priority?: boolean;
}

export function SiteLogo({ className = "h-10 w-auto", priority = false }: SiteLogoProps) {
  return (
    <Image
      src="/logo/logo-trimmed.png"
      alt={`${siteConfig.name} logo`}
      width={1033}
      height={728}
      priority={priority}
      className={className}
    />
  );
}
