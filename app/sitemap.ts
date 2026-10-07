import type { MetadataRoute } from "next";
import { site } from "@/lib/constants/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/start", "/work", "/products", "/academy", "/about"].map((p) => ({ url: `${site.url}${p}` }));
}
