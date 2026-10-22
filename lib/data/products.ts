export type Product = {
  name: string;
  status: "Live" | "Open source" | "Building";
  what: string;
  who: string;
  url: string;
  linkLabel: string;
  /** A second, smaller link, e.g. a hosted edition. */
  more?: { url: string; label: string; note?: string };
};

/** Products Code-Craftie Solutions builds and runs itself. */
export const products: Product[] = [
  {
    name: "CatalogFlow",
    status: "Live",
    what: "Turns a photo and a price into a short voiced video, posts it to Instagram and the WhatsApp status, and sends buyers to WhatsApp to order or book an inspection.",
    who: "Shops and estate agents who sell from their phone, with or without an online store. Free to start; Pro is ₦15,000 a month.",
    url: "https://catalogflow.codecraftie.com",
    linkLabel: "Open CatalogFlow",
  },
  {
    name: "ExperimentLab",
    status: "Live",
    what: "A/B tests and feature flags that say in plain words which version won, and check every variant against Google's page-speed budgets before you ship it.",
    who: "Product teams who test changes to their site or app and want an answer they can act on. Free to start; Team is $29 a month, or self-host the open-source edition.",
    url: "https://experimentlab.codecraftie.com",
    linkLabel: "Open ExperimentLab",
  },
  {
    name: "Atlas",
    status: "Open source",
    what: "Encrypted off-site backups, restore checks and diagnostics for apps that run in Docker. It backs up our own products.",
    who: "Teams running their own servers who need backups they have actually tested.",
    url: "https://github.com/ignatius22/atlas",
    linkLabel: "View on GitHub",
    more: { url: "https://cloud.codecraftie.com", label: "Atlas Cloud", note: "Hosted dashboard, private beta" },
  },
];
