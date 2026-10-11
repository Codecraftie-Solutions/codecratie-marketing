export type Product = {
  name: string;
  status: "Live" | "Open source" | "Building";
  what: string;
  who: string;
  url: string;
  linkLabel: string;
};

/** Products Code-Craftie Solutions builds and runs itself. */
export const products: Product[] = [
  {
    name: "CatalogFlow",
    status: "Live",
    what: "Turns a store's product catalog into short voiced videos and posts them to Instagram as Reels.",
    who: "Online stores that sell on Instagram. Free to start; Pro is ₦15,000 a month.",
    url: "https://catalogflow.codecraftie.com",
    linkLabel: "Open CatalogFlow",
  },
  {
    name: "Atlas",
    status: "Open source",
    what: "Encrypted off-site backups, restore checks and diagnostics for apps that run in Docker. It backs up our own products.",
    who: "Teams running their own servers who need backups they have actually tested.",
    url: "https://github.com/ignatius22/atlas",
    linkLabel: "View on GitHub",
  },
];
