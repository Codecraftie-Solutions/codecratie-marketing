import type { ReactNode } from "react";
import { marquee } from "@/lib/data/content";

/** Line icons on a 32px grid, drawn in the logo's language: plain strokes plus one gold block. */
const icons: Record<(typeof marquee)[number]["icon"], ReactNode> = {
  web: (<><rect x="3" y="6" width="26" height="20" /><path d="M3 12h26" /><rect className="g" x="21" y="8" width="5" height="2.5" /><path d="M8 18h9M8 22h14" /></>),
  mobile: (<><rect x="9" y="3" width="14" height="26" rx="1" /><path d="M14 25h4" /><path d="M13 9h6M13 13h6" /><rect className="g" x="13" y="17" width="6" height="3" /></>),
  saas: (<><path d="M16 4l12 6-12 6-12-6z" /><path d="M4 16l12 6 12-6" /><path d="M4 22l12 6 12-6" /><rect className="g" x="14" y="8" width="4" height="4" /></>),
  api: (<><path d="M11 9l-6 7 6 7M21 9l6 7-6 7" /><rect className="g" x="14" y="13" width="4" height="6" /></>),
  systems: (<><rect x="4" y="4" width="10" height="10" /><rect x="18" y="4" width="10" height="10" /><rect x="4" y="18" width="10" height="10" /><rect className="g" x="18" y="18" width="10" height="10" /></>),
  ai: (<><rect x="9" y="9" width="14" height="14" /><path d="M13 3v6M19 3v6M13 23v6M19 23v6M3 13h6M3 19h6M23 13h6M23 19h6" /><rect className="g" x="13.5" y="13.5" width="5" height="5" /></>),
  improve: (<><path d="M4 26h6v-6h6v-6h6V8" /><path d="M17 8h5.5V13" transform="translate(1 -3)" /><rect className="g" x="22" y="4" width="6" height="6" /></>),
  learn: (<><path d="M3 8h11a2 2 0 012 2v17a2 2 0 00-2-2H3zM29 8H18a2 2 0 00-2 2v17a2 2 0 012-2h11z" /><rect className="g" x="21" y="12" width="5" height="5" /></>),
};

function Item({ label, icon, n, hidden }: { label: string; icon: keyof typeof icons; n: number; hidden?: boolean }) {
  return (
    <span className="it" aria-hidden={hidden || undefined}>
      <i className="ic"><svg viewBox="0 0 32 32" focusable="false">{icons[icon]}</svg></i>
      <span className="tx"><small>{String(n).padStart(2, "0")}</small>{label}</span>
    </span>
  );
}

export function Marquee() {
  return (
    <div className="mq" role="group" aria-label="Capabilities">
      <div>
        {marquee.map((m, i) => <Item key={m.label} {...m} n={i + 1} />)}
        {marquee.map((m, i) => <Item key={`d-${m.label}`} {...m} n={i + 1} hidden />)}
      </div>
    </div>
  );
}
