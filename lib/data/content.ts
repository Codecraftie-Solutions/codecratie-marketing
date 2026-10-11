/** Every sentence on the site lives here, so it can be edited in one place. */

export const navigation = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/#services" },
  { label: "Products", href: "/products" },
  { label: "Academy", href: "/academy" },
  { label: "About", href: "/about" },
];

export const hero = {
  title: "We build the software your business runs on.",
  sub:
    "Code-Craftie Solutions is a software studio in Lagos. We design, build and look after web apps, mobile apps and business systems, and we run products of our own.",
  primary: "Start a project",
  secondary: "See our work",
};

export const services = [
  {
    title: "Web apps and SaaS",
    text: "Customer-facing apps, dashboards and subscription products, with sign-in, roles and Paystack billing built in.",
  },
  {
    title: "Mobile apps",
    text: "iOS and Android apps in React Native, sharing one codebase and one back end with your web app.",
  },
  {
    title: "Back ends, APIs and integrations",
    text: "The part your customers never see: data, payments, and connections to Paystack, Shopify, Instagram and the tools you already use.",
  },
  {
    title: "Business systems and automation",
    text: "Internal tools shaped around how your team actually works, with AI where it saves real time and nowhere else.",
  },
  {
    title: "Fixing software you already have",
    text: "Slow, fragile or half-finished apps made fast, secure and maintainable, without starting over unless you have to.",
  },
  {
    title: "Hosting and keeping it running",
    text: "Deployment, monitoring, alerts and encrypted off-site backups, so the software keeps working after launch day.",
  },
];

/** A real sequence, so it is numbered. */
export const process = [
  {
    title: "Talk",
    text: "You tell us what you want to happen, in plain language. We ask questions until we understand the business behind the request.",
    get: "A written summary of what we heard.",
  },
  {
    title: "Scope",
    text: "We turn it into a plan: what gets built first, how it fits together, and what it costs.",
    get: "A fixed price for the first phase.",
  },
  {
    title: "Build",
    text: "We build in small working pieces. You can open and use each one on a private link as it lands.",
    get: "Weekly demos you can click through.",
  },
  {
    title: "Launch and run",
    text: "We put it live, watch it, back it up and keep improving it, or hand it to your team with the code and documentation.",
    get: "Code, access and docs that are yours.",
  },
];

export const founder = {
  name: "Ignatius Sani",
  role: "Founder and lead engineer",
  text: [
    "Code-Craftie Solutions is led by Ignatius Sani, a senior full-stack engineer who builds production systems in TypeScript, Node.js, React and PostgreSQL.",
    "You work with the person writing your software, not an account manager. When a project needs more hands, we bring in engineers we have trained and worked with, and we stay responsible for the result.",
  ],
};

export const academy = {
  title: "We also teach people to build.",
  text:
    "CodeCraftie Academy is our training arm. Its eight-week Software Engineering and AI Foundations programme takes complete beginners to their first real projects, with live sessions twice a week. Career Launch and 1:1 Pro add portfolio reviews, interview preparation and coaching.",
  cta: "Visit the Academy",
};

export const cta = {
  title: "Tell us what you need built.",
  text: "No technical specification needed. Describe the problem and we'll reply with how we would approach it.",
};
