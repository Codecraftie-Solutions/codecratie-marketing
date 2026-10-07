import { workCopy } from "@/lib/data/content";
import { projects } from "@/lib/data/projects";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "./ProjectCard";

export function Work({ as }: { as?: "h1" | "h2" }) {
  return (
    <section id="work" data-tone="dark" data-accent="#34C98B">
      <div className="wrap">
        <SectionHeading k={workCopy.k} title={workCopy.title} as={as} />
        <p className="lede">{workCopy.lede}</p>
        <div id="projects">
          {projects.map((p) => <ProjectCard key={p.slug} project={p} />)}
          <a className="circ" href="/start">Start a<br />Project</a>
        </div>
      </div>
    </section>
  );
}
