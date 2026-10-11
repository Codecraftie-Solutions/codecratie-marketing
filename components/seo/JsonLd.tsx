import { site } from "@/lib/constants/site";

/** Only facts that are actually known: the registered name and address, no phone, founding date or headcount. */
export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    legalName: site.legalName,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.locality,
      addressRegion: site.address.region,
      addressCountry: "NG",
    },
    url: site.url,
    description: site.description,
    slogan: site.tagline,
    email: site.contactEmail,
    ...(site.social.length ? { sameAs: site.social.map((s) => s.url) } : {}),
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}
