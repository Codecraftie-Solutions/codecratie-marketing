import Image from "next/image";
import { projectFields, type Project } from "@/lib/data/projects";

const PENDING = "To be supplied";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="proj">
      {project.image ? (
        <div className="shot has-img">
          <Image src={project.image.src} alt={project.image.alt} fill sizes="(max-width: 760px) 100vw, 560px" style={{ objectFit: "cover" }} />
        </div>
      ) : (
        <div className="shot">Screenshot to be added</div>
      )}
      <p className="meta">{project.category ?? "Category to be added"}</p>
      <h3>{project.name}</h3>
      <details className="cs">
        <summary>View case study</summary>
        <dl className="kv">
          {projectFields.map((f) => (
            <div key={f.key} style={{ display: "contents" }}>
              <dt>{f.label}</dt><dd>{project.fields[f.key] ?? PENDING}</dd>
            </div>
          ))}
        </dl>
      </details>
    </article>
  );
}
