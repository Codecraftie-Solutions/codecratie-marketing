import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/constants/site";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/seo/JsonLd";

const sans = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-sans", display: "swap", axes: ["opsz", "wdth"] });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.name, template: `%s | ${site.name}` },
  description: site.description,
  applicationName: site.name,
  robots: { index: true, follow: true },
  openGraph: { siteName: site.name, type: "website", locale: "en_NG", images: ["/og.png"] },
  twitter: { card: "summary_large_image", images: ["/og.png"] },
};
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F5F6F8" },
    { media: "(prefers-color-scheme: dark)", color: "#0C1023" },
  ],
};

// Runs before paint, so the page never flashes the wrong theme.
const themeInit = `try{var t=localStorage.getItem("cc-theme");if(t)document.documentElement.setAttribute("data-theme",t)}catch(e){}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={sans.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
      </head>
      <body>
        <a className="skip" href="#main">
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <JsonLd />
      </body>
    </html>
  );
}
