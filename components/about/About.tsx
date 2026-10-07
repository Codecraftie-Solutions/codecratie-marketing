import { aboutCopy } from "@/lib/data/content";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function About({ as }: { as?: "h1" | "h2" }) {
  return (
    <section id="about">
      <div className="wrap">
        <SectionHeading k={aboutCopy.k} title={aboutCopy.title} as={as} />
        <p className="lede">{aboutCopy.lede}</p>
      </div>
    </section>
  );
}
