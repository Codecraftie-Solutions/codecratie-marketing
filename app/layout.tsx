import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono, Schibsted_Grotesk } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/constants/site";
import { Navbar } from "@/components/navbar/Navbar";
import { Footer } from "@/components/footer/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import { Motion } from "@/components/motion/Motion";

const sans = Schibsted_Grotesk({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-sans", display: "swap" });
const mono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-mono", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.name, template: `%s | ${site.name}` },
  description: site.description,
  applicationName: site.name,
  robots: { index: true, follow: true },
  openGraph: { siteName: site.name, type: "website", locale: "en" },
};
export const viewport: Viewport = { width: "device-width", initialScale: 1, viewportFit: "cover" };

// Runs before paint: applies the saved/system theme and holds hero animations until the curtain finishes.
const themeInit = `try{var t=localStorage.getItem("cc-theme");if(!t)t=matchMedia("(prefers-color-scheme:dark)").matches?"dark":"light";document.documentElement.setAttribute("data-theme",t)}catch(e){}`;
const holdInit = `if(!matchMedia("(prefers-reduced-motion:reduce)").matches){document.documentElement.classList.add("hold");try{if(!sessionStorage.getItem("cc"))document.documentElement.classList.add("lk-in")}catch(e){}setTimeout(function(){document.documentElement.classList.remove("hold")},4500)}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable}`} suppressHydrationWarning>
      <head><script dangerouslySetInnerHTML={{ __html: themeInit }} /></head>
      <body>
        <script dangerouslySetInnerHTML={{ __html: holdInit }} />
        <div id="pg" aria-hidden="true"></div>
        <Navbar />
        <main id="top">{children}</main>
        <Footer />
        <JsonLd />
        <Motion />
      </body>
    </html>
  );
}
