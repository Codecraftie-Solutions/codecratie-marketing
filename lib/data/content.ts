export const hero = {
  title: "Every idea needs a route to launch.",
  sub: "Three lines meet at one interchange: build for businesses, learn to build, grow a career. Ideas travel the whole network.",
};
export const marquee = [
  { label: "Web applications", icon: "web" },
  { label: "Mobile applications", icon: "mobile" },
  { label: "SaaS & MVP", icon: "saas" },
  { label: "Backend & APIs", icon: "api" },
  { label: "Business systems", icon: "systems" },
  { label: "AI & automation", icon: "ai" },
  { label: "Existing product improvement", icon: "improve" },
  { label: "Engineering education", icon: "learn" },
] as const;
export const intro = {
  k: "What we build",
  title: "Have something that needs building?",
  lede: "You don't need to arrive with a technical specification. Tell us what you're trying to accomplish and we'll help you work out the right way to build it.",
  list: ["Web Applications", "Mobile Applications", "SaaS / MVP", "Backend & APIs", "Business Systems", "AI & Automation", "Existing Product Improvements"],
};
export const servicesCopy = { k: "Services", title: "Software built around the work your business does." };
export const processCopy = { k: "How we work", title: "A product engineering partner, not hours for hire." };
export const workCopy = { k: "Selected work", title: "The work is the proof.", lede: "Project details are being added as each one is verified. Placeholders are marked." };
export const capabilitiesCopy = { k: "Engineering capabilities", title: "The tools behind the work." };
export const statement = ["Build.", "Learn.", "Grow."];
export const ecosystemCopy = {
  k: "Build / Learn / Grow",
  title: "More than a software company.",
  build: "We build software and digital products for businesses.",
  learnTitle: "Want to learn technology instead?",
  learn: "Through CodeCraftie Academy, we teach people how to build with technology. It helps students develop practical software engineering and AI skills through project-based learning.",
  grow: "Through Career Launch and 1:1 Pro, we help technology professionals turn skills into jobs, freelance opportunities and stronger careers.",
};
export const whyCopy = { k: "Why CodeCraftie", title: "How we think about the work." };
export const productsCopy = {
  k: "Products",
  title: "Products we build ourselves.",
  empty: "Only verified CodeCraftie products will be listed here. Each entry shows the problem, what it does and its status.",
};
export const aboutCopy = {
  k: "About",
  title: "A company that builds software and builds people.",
  lede: "CodeCraftie Solutions is a technology company that builds software, develops technology talent and creates opportunities through technology. We believe the same skills that ship a product can change a career, so we do both.",
};
export const ctaCopy = { title: "Have something worth building?", lede: "Tell us what you're trying to accomplish. We'll help you figure out what comes next." };

/** Hero slides: the headline and text change together with the background photo. Slide 1 is the main headline. */
export const heroSlidesCopy = [
  { k: "Build", title: hero.title, sub: hero.sub },
  { k: "Learn", title: "Learn how to build with technology.", sub: ecosystemCopy.learn },
  { k: "Grow", title: "Turn your skills into a stronger career.", sub: ecosystemCopy.grow },
];
