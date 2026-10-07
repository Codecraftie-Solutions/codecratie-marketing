import Image from "next/image";
import { heroSlides } from "@/lib/data/images";

/** One transition per slide, cycled. Styles live in globals.css (.hs[data-fx]). */
const fx = ["zoom", "iris", "wipe"] as const;

/**
 * Full-bleed backdrop. Markup only: it advances on its own (public/js/hero.js), with no manual controls.
 * Purely decorative, so it is hidden from assistive tech; the text for each slide lives in Hero.tsx.
 */
export function HeroCarousel() {
  return (
    <div className="hc" data-hc data-interval="7000" aria-hidden="true">
      <div className="stage">
        {heroSlides.map((s, i) => (
          <div key={s.src} className={`hs${i === 0 ? " is-on" : ""}`} data-s data-fx={fx[i % fx.length]}>
            <Image src={s.src} alt="" fill priority={i === 0} sizes="100vw" style={{ objectFit: "cover" }} />
          </div>
        ))}
      </div>
      <div className="hc-shade" />
    </div>
  );
}
