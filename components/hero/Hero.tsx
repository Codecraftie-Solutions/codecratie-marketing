import { heroSlidesCopy } from "@/lib/data/content";
import { HeroCarousel } from "./HeroCarousel";
import { HeroRoute } from "./HeroRoute";

export function Hero() {
  return (
    <section className="hero" data-tone="dark">
      <HeroCarousel />
      <div className="wrap">
        {/* All slides share one grid cell; the active one is shown. Only the first is the page <h1>. */}
        <div className="hx">
          {heroSlidesCopy.map((s, i) => (
            <div key={s.k} className={`ht${i === 0 ? " is-on" : ""}`} data-x>
              <span className="k">{s.k}</span>
              {i === 0 ? <h1 className="hl">{s.title}</h1> : <div className="hl">{s.title}</div>}
              <p className="s">{s.sub}</p>
            </div>
          ))}
        </div>
        <div className="row">
          <a className="btn p" href="/start">Start a Project</a>
          <a className="btn" href="/work">See Our Work</a>
        </div>
        <HeroRoute />
      </div>
    </section>
  );
}
