import { ecosystemCopy as c } from "@/lib/data/content";
import { site } from "@/lib/constants/site";
import { SectionHeading } from "@/components/ui/SectionHeading";

/** /academy: a gateway only. The Academy itself is a separate website. */
export function AcademyIntro() {
  return (
    <section id="ecosystem">
      <div className="wrap">
        <SectionHeading k="Academy" title={c.learnTitle} as="h1" />
        <p className="lede">{c.learn}</p>
        <div className="row">
          <a className="btn" href={site.academyUrl} rel="noopener">Explore CodeCraftie Academy</a>
          {site.careerLaunchUrl && <a className="btn" href={site.careerLaunchUrl} rel="noopener">Explore Career Launch</a>}
          <a className="btn p" href="/start">Start a Project</a>
        </div>
        <p className="lede">{c.grow}</p>
      </div>
    </section>
  );
}
