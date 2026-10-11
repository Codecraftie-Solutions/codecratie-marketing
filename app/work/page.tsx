import { pageMetadata } from "@/lib/utils/metadata";
import { caseStudies } from "@/lib/data/work";
import { CaseStudy } from "@/components/work/CaseStudy";
import { PageHead } from "@/components/layout/PageHead";
import { Cta } from "@/components/home/Sections";

export const metadata = pageMetadata({
  title: "Work",
  description: "Case studies from Code-Craftie Solutions: what each project was for, what we built and how it turned out.",
  path: "/work",
});

export default function Page() {
  return (
    <>
      <PageHead
        title="Work we have shipped"
        lede="What each project was for, what we built, the hard part, and how it turned out."
      />
      <section className="section section-tight">
        <div className="wrap cases">
          {caseStudies.map((s) => (
            <CaseStudy key={s.slug} study={s} heading="h2" detailed />
          ))}
        </div>
      </section>
      <Cta />
    </>
  );
}
