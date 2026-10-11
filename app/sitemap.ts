import type { MetadataRoute } from "next";
import { site } from "@/lib/constants/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/start", "/work", "/products", "/academy", "/about", "/privacy"].map((p) => ({ url: `${site.url}${p}` }));
}
