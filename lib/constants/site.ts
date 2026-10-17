export const site = {
  name: "Code-Craftie Solutions",
  /** Exactly as registered with the Corporate Affairs Commission. */
  legalName: "Code-Craftie Solutions",
  registration: "BN 8701900",
  address: { street: "No 35 Onilewura Street", locality: "Ikotun", region: "Lagos", country: "Nigeria" },
  url: (process.env.NEXT_PUBLIC_SITE_URL || "https://www.codecraftie.com").replace(/\/+$/, ""),
  tagline: "We build the software your business runs on.",
  description:
    "Code-Craftie Solutions is a software studio in Lagos. We design, build and look after web apps, mobile apps and business systems for businesses, and run products of our own.",
  academyUrl: "https://academy.codecraftie.com/",
  /** null until supplied via env. UI hides anything that depends on it. */
  careerLaunchUrl: process.env.NEXT_PUBLIC_CAREER_LAUNCH_URL || null,
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "support@codecraftie.com",
  /** Only add profiles that exist. */
  social: [] as { label: string; url: string }[],
};
