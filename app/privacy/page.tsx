import { pageMetadata } from "@/lib/utils/metadata";
import { site } from "@/lib/constants/site";

export const metadata = pageMetadata({
  title: "Privacy Policy",
  description: `How ${site.legalName} handles the information you send through this website.`,
  path: "/privacy",
});

export default function Page() {
  const a = site.address;
  return (
    <section className="page-head">
      <div className="wrap legal">
        <h1>Privacy Policy</h1>
        <p className="lede">Last updated 11 October 2026</p>

        <p style={{ marginTop: 28 }}>
          This website is run by {site.legalName}, a business name registered with the Corporate Affairs Commission,
          Nigeria ({site.registration}), at {a.street}, {a.locality}, {a.region}, {a.country}. This policy covers this
          website only. Our products, such as CatalogFlow, have their own privacy policies.
        </p>

        <h2>What we collect</h2>
        <p>
          When you send a project inquiry, we receive what you type into the form: your name, email address, and, if
          you fill them in, your company, phone number, and the details of your project, timeline and budget.
        </p>
        <p>
          We do not use analytics or advertising trackers on this website. Like any website, our hosting provider
          keeps short-lived server logs, such as IP addresses, to keep the site running and secure.
        </p>

        <h2>How we use it</h2>
        <ul>
          <li>To reply to your inquiry and discuss your project.</li>
          <li>To keep a record of our conversation if we go on to work together.</li>
        </ul>
        <p>We do not sell your information or use it for marketing you did not ask for.</p>

        <h2>Who else sees it</h2>
        <p>
          Your inquiry is delivered to us by email, so it passes through our hosting and email providers. They handle
          it only to provide those services to us.
        </p>

        <h2>How long we keep it</h2>
        <p>
          We keep inquiries for as long as we are discussing or doing work with you, and delete those that lead
          nowhere within two years.
        </p>

        <h2>Your rights</h2>
        <p>
          Under the Nigeria Data Protection Act 2023 you can ask to see, correct or delete the information we hold
          about you. Email <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a> and we will reply within
          30 days.
        </p>
      </div>
    </section>
  );
}
