import type { Metadata } from "next";
import { site } from "@/lib/constants/site";

export function pageMetadata(o: { title: string; description: string; path: string; absolute?: boolean }): Metadata {
  const full = o.absolute ? o.title : `${o.title} | ${site.name}`;
  return {
    title: o.absolute ? { absolute: o.title } : o.title,
    description: o.description,
    alternates: { canonical: o.path },
    openGraph: { title: full, description: o.description, url: o.path, siteName: site.name, type: "website", locale: "en" },
    twitter: { card: "summary", title: full, description: o.description },
  };
}
