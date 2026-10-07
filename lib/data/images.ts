/**
 * Every photo on the site lives here. These are Unsplash stand-ins.
 * To replace one: drop a file in /public/images and change `src` to "/images/your-file.jpg".
 */
const u = (id: string, w = 1600) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=75`;

export type Img = { src: string; alt: string };

export const images = {
  process: { src: u("photo-1522071820081-009f0129c71c", 2000), alt: "A product team planning together around a table" },
  build: { src: u("photo-1555066931-4365d14bab8c", 900), alt: "Source code on a monitor" },
  learn: { src: u("photo-1531482615713-2afd69097998", 900), alt: "Students and an instructor working through a lesson" },
  grow: { src: u("photo-1573164713714-d95e436ab8d6", 900), alt: "A professional smiling at a desk" },
  cta: { src: u("photo-1460925895917-afdab827c52f", 2000), alt: "" },
  catalogflow: { src: u("photo-1460925895917-afdab827c52f", 1200), alt: "Dashboard on a laptop (placeholder for CatalogFlow screenshot)" },
  sand2keys: { src: u("photo-1560518883-ce09059eeffa", 1200), alt: "Property exterior (placeholder for Sand2Keys screenshot)" },
  wdni: { src: u("photo-1551434678-e076c223a692", 1200), alt: "Team at work (placeholder for WDNI screenshot)" },
  sunivera: { src: u("photo-1586528116311-ad8dd3c8310d", 1200), alt: "Warehouse logistics (placeholder for Sunivera screenshot)" },
} satisfies Record<string, Img>;

/** Full-bleed hero carousel: exactly three slides, matched by index to `heroSlidesCopy` in content.ts. */
export const heroSlides: { src: string }[] = [
  { src: u("photo-1498050108023-c5249f4df085", 2400) }, // Build
  { src: u("photo-1531482615713-2afd69097998", 2400) }, // Learn
  { src: u("photo-1573164713714-d95e436ab8d6", 2400) }, // Grow
];
