import { pageMetadata } from "@/lib/utils/metadata";
import { site } from "@/lib/constants/site";
import { PageHead } from "@/components/layout/PageHead";
import { Founder, Cta } from "@/components/home/Sections";

export const metadata = pageMetadata({
  title: "About",
  description: "Code-Craftie Solutions (CodeCraftie) is a registered software studio in Lagos, led by Ignatius Sani. We build business software, run CatalogFlow, and teach through Code-Craftie Academy.",
  path: "/about",
});

export default function Page() {
  const a = site.address;
  return (
    <>
      <PageHead
        title={<>About <span className="nowrap">Code-Craftie</span> Solutions</>}
        lede="We are a small software studio in Lagos. We build software for businesses, run products of our own, and train the next engineers through CodeCraftie Academy."
      />
      <section className="section">
        <div className="wrap split">
          <div className="split-head"><h2>CodeCraftie, the company</h2></div>
          <div>
            <p>CodeCraftie is the brand name used by {site.legalName}, a software studio registered in Nigeria as {site.registration}. Led by {"Ignatius Sani"}, we build web apps, mobile apps and business systems from Lagos.</p>
            <p>Our official company website is <a href={site.url}>www.codecraftie.com</a>. <a href={site.academyUrl}>Code-Craftie Academy</a> is our training arm. <a href="https://catalogflow.codecraftie.com/">CatalogFlow</a> is our product for creating videos from product catalogs.</p>
          </div>
        </div>
      </section>
      <Founder />
      <section className="section">
        <div className="wrap split">
          <div className="split-head">
            <h2>Company details</h2>
          </div>
          <dl className="facts facts-wide">
            <div>
              <dt>Registered name</dt>
              <dd>{site.legalName}</dd>
            </div>
            <div>
              <dt>Registration</dt>
              <dd>Business name registered with the Corporate Affairs Commission, Nigeria, {site.registration}</dd>
            </div>
            <div>
              <dt>Address</dt>
              <dd>
                {a.street}, {a.locality}, {a.region}, {a.country}
              </dd>
            </div>
            <div>
              <dt>Email</dt>
              <dd>
                <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>
              </dd>
            </div>
          </dl>
        </div>
      </section>
      <Cta />
    </>
  );
}
