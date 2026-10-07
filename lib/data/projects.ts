export type ProjectField = "problem" | "context" | "built" | "technology" | "challenge" | "outcome";

export const projectFields: { key: ProjectField; label: string }[] = [
  { key: "problem", label: "Problem" },
  { key: "context", label: "Context" },
  { key: "built", label: "What we built" },
  { key: "technology", label: "Technology" },
  { key: "challenge", label: "Engineering challenge" },
  { key: "outcome", label: "Outcome" },
];

export type Project = {
  slug: string;
  name: string;
  /** "content-pending" renders marked placeholders. Switch to "published" once fields are verified. */
  status: "content-pending" | "published";
  category?: string;
  /** Files live in public/images/projects/<slug>/ */
  image?: { src: string; alt: string };
  fields: Partial<Record<ProjectField, string>>;
};

import { images } from "./images";

export const projects: Project[] = [
  { slug: "catalogflow", image: images.catalogflow, name: "CatalogFlow", status: "content-pending", fields: {} },
  { slug: "sand2keys", image: images.sand2keys, name: "Sand2Keys", status: "content-pending", fields: {} },
  { slug: "wdni", image: images.wdni, name: "WDNI", status: "content-pending", fields: {} },
  { slug: "sunivera", image: images.sunivera, name: "Sunivera", status: "content-pending", fields: {} },
];
