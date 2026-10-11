import Image from "next/image";
import type { CaseStudy as Study, Media } from "@/lib/data/work";

function Visual({ media }: { media: Media }) {
  switch (media.kind) {
    case "reels":
      return (
        <div className="reels">
          {media.items.map((r) => (
            <div className="reel" key={r.src}>
              <Image src={r.src} alt={r.alt} fill sizes="(max-width: 800px) 30vw, 200px" />
            </div>
          ))}
        </div>
      );
    case "video":
      return (
        <div className="shot">
          <video src={media.src} poster={media.poster} muted loop playsInline autoPlay aria-label={media.alt} />
        </div>
      );
    case "image":
      return (
        <div className="shot">
          <Image src={media.src} alt={media.alt} fill sizes="(max-width: 800px) 100vw, 560px" />
        </div>
      );
    case "cover":
      return (
        <div className="shot cover" style={{ background: media.bg, color: media.fg }}>
          <span>{media.label}</span>
        </div>
      );
  }
}

/** One project: what it is, then the facts as a short list a reader can scan. */
export function CaseStudy({ study, heading = "h3", detailed = false }: { study: Study; heading?: "h2" | "h3"; detailed?: boolean }) {
  const H = heading;
  const facts = detailed ? study.facts : study.facts.slice(0, 2);
  return (
    <article className="case" id={study.slug}>
      <div className="case-visual">
        <Visual media={study.media} />
      </div>
      <div className="case-text">
        <p className="case-meta">
          {study.client} <span aria-hidden="true">/</span> {study.kind}
        </p>
        <H>{study.name}</H>
        <p className="case-summary">{study.summary}</p>
        <dl className="facts">
          {facts.map((f) => (
            <div key={f.label}>
              <dt>{f.label}</dt>
              <dd>{f.text}</dd>
            </div>
          ))}
          {detailed && study.stack.length > 0 && (
            <div>
              <dt>Built with</dt>
              <dd>{study.stack.join(", ")}</dd>
            </div>
          )}
        </dl>
        {study.url && (
          <a className="text-link" href={study.url} rel="noopener">
            Visit {study.name}
          </a>
        )}
      </div>
    </article>
  );
}
