import { site } from "@/lib/constants/site";
import { founder } from "@/lib/data/content";

/** Only facts that are actually known: the registered name and address, no phone, founding date or headcount. */
export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${site.url}/#organization`,
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
    logo: `${site.url}/icon.svg`,
    founder: {
      "@type": "Person",
      name: founder.name,
      jobTitle: founder.role,
      image: `${site.url}${founder.photo}`,
      sameAs: [founder.linkedin],
    },
    ...(site.social.length ? { sameAs: site.social.map((s) => s.url) } : {}),
  };
  const graph = { "@context": "https://schema.org", "@graph": [data, {
    "@type": "WebSite", "@id": `${site.url}/#website`, name: site.name, url: site.url,
    publisher: { "@id": `${site.url}/#organization` },
  }] };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graph).replace(/</g, "\\u003c") }} />;
}
