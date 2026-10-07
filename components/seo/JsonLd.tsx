import { site } from "@/lib/constants/site";

/** Only facts that are actually known. No address, phone, founding date or headcount. */
export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: site.url,
    description: site.description,
    slogan: site.tagline,
    ...(site.contactEmail ? { email: site.contactEmail } : {}),
    ...(site.social.length ? { sameAs: site.social.map((s) => s.url) } : {}),
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}
