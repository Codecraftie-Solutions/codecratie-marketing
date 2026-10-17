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
    alternateName: ["CodeCraftie", "CodeCraftie Solutions"],
    identifier: { "@type": "PropertyValue", propertyID: "CAC business name registration", value: site.registration },
    subOrganization: { "@id": "https://academy.codecraftie.com/#organization" },
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
      "@id": `${site.url}/about#founder`,
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
    alternateName: "CodeCraftie",
  }, {
    "@type": "EducationalOrganization", "@id": "https://academy.codecraftie.com/#organization",
    name: "Code-Craftie Academy", url: site.academyUrl,
    parentOrganization: { "@id": `${site.url}/#organization` },
  }, {
    "@type": "SoftwareApplication", "@id": "https://catalogflow.codecraftie.com/#software",
    name: "CatalogFlow", url: "https://catalogflow.codecraftie.com/",
    applicationCategory: "BusinessApplication", operatingSystem: "Web",
    publisher: { "@id": `${site.url}/#organization` },
  }] };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graph).replace(/</g, "\\u003c") }} />;
}
