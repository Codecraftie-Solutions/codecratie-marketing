import Link from "next/link";
import { hero } from "@/lib/data/content";

/**
 * The opening: what we do, in one sentence, next to something we actually
 * shipped. The phone plays a real video made by CatalogFlow.
 */
export function Hero() {
  return (
    <section className="hero">
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <h1>{hero.title}</h1>
          <p className="hero-sub">{hero.sub}</p>
          <div className="actions">
            <Link className="btn btn-on-dark" href="/start">
              {hero.primary}
            </Link>
            <Link className="btn btn-ghost-dark" href="/work">
              {hero.secondary}
            </Link>
          </div>
        </div>
        <figure className="hero-shot">
          <div className="phone">
            <video
              src="/work/catalogflow/amara-leather-flash-sale.mp4"
              poster="/work/catalogflow/amara-leather-flash-sale.jpg"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-label="A product video made by CatalogFlow for a leather goods store"
            />
          </div>
          <figcaption>
            Made by <Link href="/work#catalogflow">CatalogFlow</Link>, our own product: it turns a store&apos;s catalog
            into Instagram Reels.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
