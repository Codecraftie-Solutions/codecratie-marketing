/** CodeCraftie lockup: the four-piece symbol, the wordmark and the SOLUTIONS line.
 *  `animate` plays the reveal (symbol assembles, letters rise, SOLUTIONS fades up). The reveal is gated in CSS
 *  by html.lk-in, so it only runs on the first load of a session and never under reduced motion. */
import type { CSSProperties } from "react";

const WORD = "CODECRAFTIE".split("");

export function Logo({ animate = false }: { animate?: boolean }) {
  return (
    <span className={animate ? "lk lk-anim" : "lk"} style={{ display: "contents" }} aria-hidden="true">
      <svg className="lm" viewBox="0 0 64 64" focusable="false">
        <rect className="lm-a" x="8" y="12" width="32" height="12" />
        <rect className="lm-s" x="8" y="28" width="12" height="14" />
        <rect className="lm-b" x="8" y="46" width="48" height="12" />
        <rect className="lm-k" x="44" y="6" width="12" height="12" />
      </svg>
      <span className="lm-t">
        <span className="lm-w">{WORD.map((c, i) => <span key={i} style={{ "--i": i } as CSSProperties}>{c}</span>)}</span>
        <span className="lm-d">SOLUTIONS</span>
      </span>
    </span>
  );
}
