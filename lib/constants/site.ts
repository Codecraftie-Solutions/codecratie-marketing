export const site = {
  name: "CodeCraftie Solutions",
  /** Exactly as registered with the Corporate Affairs Commission. */
  legalName: "Code-Craftie Solutions",
  registration: "BN 8701900",
  address: { street: "No 35 Onilewura Street", locality: "Ikotun", region: "Lagos", country: "Nigeria" },
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  tagline: "Build technology. Develop talent. Create opportunity.",
  description:
    "CodeCraftie Solutions builds web and mobile applications, SaaS products, backend systems and intelligent automation for businesses.",
  academyUrl: "https://codecratie-academy.vercel.app/",
  /** null until supplied via env. UI hides anything that depends on it. */
  careerLaunchUrl: process.env.NEXT_PUBLIC_CAREER_LAUNCH_URL || null,
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "support@codecraftie.com",
  /** Only add profiles that exist. */
  social: [] as { label: string; url: string }[],
};
