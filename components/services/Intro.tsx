import { intro } from "@/lib/data/content";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Intro() {
  return (
    <section className="intro" id="solutions">
      <div className="wrap">
        <div>
          <SectionHeading k={intro.k} title={intro.title} />
          <p className="lede">{intro.lede}</p>
          <div className="row"><a className="btn p" href="/start">Start a Project</a></div>
        </div>
        <ul>{intro.list.map((i) => <li key={i}>{i}</li>)}</ul>
      </div>
    </section>
  );
}
