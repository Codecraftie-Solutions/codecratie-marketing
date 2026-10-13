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
    what: "Turns a photo and a price into a short voiced video, posts it to Instagram and the WhatsApp status, and sends buyers to WhatsApp to order or book an inspection.",
    who: "Shops and estate agents who sell from their phone, with or without an online store. Free to start; Pro is ₦15,000 a month.",
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
