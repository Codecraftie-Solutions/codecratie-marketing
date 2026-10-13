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
    kind: "SaaS for shops and estate agents",
    summary:
      "Turns a photo and a price into a short, voiced video and posts it to Instagram and the WhatsApp status, where buyers order or book an inspection. Built for Nigerian shops and estate agents who sell from their phone and have no time to edit video.",
    url: "https://catalogflow.codecraftie.com",
    media: {
      kind: "reels",
      items: [
        { src: "/work/catalogflow/amara-leather-luxury.jpg", alt: "A CatalogFlow video for a leather bag, luxury style" },
        { src: "/work/catalogflow/ori-botanics-collection.jpg", alt: "A CatalogFlow collection video for a skincare brand" },
        { src: "/work/catalogflow/iggy-homes-property-tour.jpg", alt: "A CatalogFlow Property Tour video for a duplex to let" },
      ],
    },
    facts: [
      {
        label: "Problem",
        text: "Short video sells on Instagram and WhatsApp, but a shop with hundreds of products, or an agent with a new property every week, cannot film and edit a Reel for each one. Most of them have no online store either.",
      },
      {
        label: "What we built",
        text: "A web app where merchants add listings from their phone (or bring in Shopify, a feed or a spreadsheet). It renders branded videos with voiceover and licensed music, including a Property Tour for agents, publishes them to Instagram, shares them to the WhatsApp status, and gives every merchant a shop page that ends in a WhatsApp message. Free and Pro plans are billed through Paystack.",
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
    slug: "wdni",
    name: "WDNI Mobility",
    client: "Women Drive Nigeria Initiative",
    kind: "Booking platform",
    summary:
      "Seat booking for scheduled intercity trips driven by verified women drivers, run by the Workbridge Empowerment Foundation with FEDAN and NITT. Passengers find a route, pick a seat, pay, and share their trip live with family.",
    url: "https://wdni.ng",
    media: { kind: "image", src: "/work/wdni/home.jpg", alt: "The WDNI Mobility home page, with the trip search form" },
    facts: [
      {
        label: "What it does",
        text: "Passengers search fixed routes between terminals, choose a seat on an interactive cabin map, and check out as a guest by card, USSD or bank transfer.",
      },
      {
        label: "What we built",
        text: "The booking flow with real-time seat status and a six-minute seat hold while the passenger pays, ticket lookup and booking management, driver applications, and in-trip safety: live GPS links to share with family and a hold-to-activate SOS button.",
      },
    ],
    stack: [],
  },
  {
    slug: "sunivera",
    name: "Sunivera",
    client: "Sunivera Logistics Limited",
    kind: "Company website",
    summary:
      "The website for Sunivera Logistics, a business execution partner for organisations in Africa: procurement, compliance, projects, workforce, technology and logistics under one accountable owner.",
    url: "https://suniveralogisticsltd.com",
    media: { kind: "image", src: "/work/sunivera/home.jpg", alt: "The Sunivera Logistics home page: We turn requirements into reliable execution" },
    facts: [
      {
        label: "What it does",
        text: "Explains six lines of business clearly enough for a procurement team to trust them, and turns visitors into enquiries.",
      },
      {
        label: "What we built",
        text: "A Next.js site with a project enquiry form, an opportunities board for tenders, RFQs and grants with deadlines, a talent network sign-up for NYSC and internship placements, and a staff login to the company's internal app.",
      },
    ],
    stack: ["Next.js", "TypeScript"],
  },
  {
    slug: "sand2keys",
    name: "Sand2Keys",
    client: "Sand2Keys",
    kind: "Property marketplace",
    summary:
      "A property search that starts from where you need to be. Buyers and renters enter their workplace, a school, a hospital or any address, and see homes within the distance they choose.",
    url: "https://www.sand2keys.com",
    media: { kind: "image", src: "/work/sand2keys/home.jpg", alt: "The Sand2Keys home page with its proximity search" },
    facts: [
      {
        label: "What it does",
        text: "Searches homes to buy or rent by distance from a destination, from half a mile to ten miles, with filters for type, bedrooms, bathrooms and price.",
      },
      {
        label: "What we built",
        text: "Proximity and map search, property pages, accounts with saved properties, and a partner-agent programme where agents apply, upload KYC documents and list homes once verified.",
      },
    ],
    stack: [],
  },
];
