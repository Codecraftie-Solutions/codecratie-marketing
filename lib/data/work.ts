/**
 * Case studies. Only facts that have been confirmed go here: a project without
 * confirmed details is not listed at all, rather than shown with placeholders.
 */
export type Media =
  | { kind: "video"; src: string; poster: string; alt: string }
  | { kind: "image"; src: string; alt: string }
  | { kind: "reels"; items: { src: string; alt: string }[] }
  /** A plain name card in the client's colours, until a real screenshot is supplied. */
  | { kind: "cover"; bg: string; fg: string; label: string };

export type CaseStudy = {
  slug: string;
  name: string;
  /** Who it was for: "Own product" or the client's name. */
  client: string;
  kind: string;
  summary: string;
  url?: string;
  media: Media;
  facts: { label: string; text: string }[];
  stack: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "catalogflow",
    name: "CatalogFlow",
    client: "Own product",
    kind: "SaaS for online stores",
    summary:
      "Turns the products in a store's catalog into short, voiced videos and posts them to Instagram as Reels. Built for Nigerian merchants who sell on Instagram but have no time to edit video.",
    url: "https://catalogflow.codecraftie.com",
    media: {
      kind: "reels",
      items: [
        { src: "/work/catalogflow/amara-leather-luxury.jpg", alt: "A CatalogFlow video for a leather bag, luxury style" },
        { src: "/work/catalogflow/ori-botanics-collection.jpg", alt: "A CatalogFlow collection video for a skincare brand" },
        { src: "/work/catalogflow/nka-studio-gallery-poster.jpg", alt: "A CatalogFlow gallery video for an art studio" },
      ],
    },
    facts: [
      {
        label: "Problem",
        text: "Short video sells on Instagram, but a merchant with hundreds of products cannot film and edit a Reel for each one.",
      },
      {
        label: "What we built",
        text: "A web app that reads a catalog from Shopify, a feed or a spreadsheet, renders branded videos with voiceover and licensed music, and publishes them to Instagram. Free and Pro plans are billed through Paystack.",
      },
      {
        label: "The hard part",
        text: "Rendering video reliably on our own servers: a job queue, a separate rendering service, voiceover timed to each product card, and audio mixed and levelled so every video sounds the same.",
      },
      {
        label: "Result",
        text: "Live and taking subscriptions, with encrypted off-site backups every six hours and alerts on any failed render, post or payment.",
      },
    ],
    stack: ["Next.js", "Node.js", "PostgreSQL", "BullMQ and Redis", "Revideo", "OpenAI speech", "Paystack", "Meta Graph API", "Docker"],
  },
  {
    slug: "sunivera",
    name: "Sunivera",
    client: "Sunivera Logistics Limited",
    kind: "Company website",
    summary:
      "A new website for Sunivera Logistics, which positions itself as business execution infrastructure for Africa: a calm, premium marketing site in the company's charcoal and champagne-gold colours.",
    media: { kind: "cover", bg: "#202020", fg: "#C0A080", label: "Sunivera Logistics" },
    facts: [
      {
        label: "Problem",
        text: "The old homepage did not explain what Sunivera does or look like a company that large businesses would trust with their operations.",
      },
      {
        label: "What we built",
        text: "A Next.js marketing site, rebuilt from a single-page prototype, with a clear story, motion that supports it, and pages that load fast on mobile networks.",
      },
    ],
    stack: ["Next.js", "TypeScript", "CSS"],
  },
];
