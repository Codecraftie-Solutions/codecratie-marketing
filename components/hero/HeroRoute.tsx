/** Hero route map: Build, Learn and Grow are three lines that meet at one CodeCraftie interchange.
 *  Static SVG; the lines draw in and two dots travel the network (both disabled under reduced motion). */
const BUILD = "M60 300H280L340 240H620L680 180H940";
const LEARN = "M60 90H260L400 230V240";
const GROW = "M400 240L460 300H620L680 360H940";
const LEARN_TO_GROW = "M60 90H260L400 230V240L460 300H620L680 360H940";

export function HeroRoute() {
  return (
    <div className="route">
      <div className="route-sv">
        <svg viewBox="0 0 1000 440" role="img" aria-label="A route map. The Build line runs Understand, Plan, Build, Test, Launch, Improve. The Learn line (Foundations, Projects, Mentorship) and the Grow line (Portfolio, Career Launch, Freelance) meet it at the CodeCraftie interchange.">
          <path className="rt" pathLength={1} stroke="var(--accent)" d={BUILD} />
          <path className="rt l2" pathLength={1} stroke="var(--ink)" d={LEARN} />
          <path className="rt l3" pathLength={1} stroke="#2FB57D" d={GROW} />
          <g className="rt-st">
            <circle cx="60" cy="300" r="9" /><circle cx="190" cy="300" r="9" /><circle cx="540" cy="240" r="9" /><circle cx="780" cy="180" r="9" /><circle cx="920" cy="180" r="9" />
            <circle cx="60" cy="90" r="9" /><circle cx="160" cy="90" r="9" /><circle cx="330" cy="160" r="9" />
            <circle cx="540" cy="300" r="9" /><circle cx="760" cy="360" r="9" /><circle cx="920" cy="360" r="9" />
          </g>
          <circle cx="400" cy="240" r="26" className="rt-st" />
          <g transform="translate(384 224) scale(.5)" style={{ color: "var(--ink)" }}>
            <g fill="currentColor"><rect x="8" y="12" width="32" height="12" /><rect x="8" y="28" width="12" height="14" /><rect x="8" y="46" width="48" height="12" /></g>
            <rect x="44" y="6" width="12" height="12" style={{ fill: "var(--accent)" }} />
          </g>
          <g className="route-t">
            <text x="60" y="326" textAnchor="middle">Understand</text><text x="190" y="326" textAnchor="middle">Plan</text>
            <text x="540" y="218" textAnchor="middle">Test</text><text x="780" y="158" textAnchor="middle">Launch</text><text x="920" y="158" textAnchor="middle">Improve</text>
            <text x="60" y="68" textAnchor="middle">Foundations</text><text x="160" y="68" textAnchor="middle">Projects</text><text x="318" y="168" textAnchor="end">Mentorship</text>
            <text x="540" y="326" textAnchor="middle">Portfolio</text><text x="760" y="386" textAnchor="middle">Career Launch</text><text x="920" y="386" textAnchor="middle">Freelance</text>
            <text x="432" y="212" style={{ fontWeight: 500 }}>CodeCraftie</text>
          </g>
          <circle r="6" className="rt-dot" style={{ fill: "var(--ink)" }}>
            <animateMotion dur="10s" repeatCount="indefinite" path={BUILD} />
          </circle>
          <circle r="6" className="rt-dot" style={{ fill: "var(--accent)" }}>
            <animateMotion dur="8s" begin="1s" repeatCount="indefinite" path={LEARN_TO_GROW} />
          </circle>
        </svg>
      </div>
      <div className="route-leg" aria-hidden="true">
        <span><i style={{ background: "var(--accent)" }}></i>BUILD</span>
        <span><i style={{ background: "var(--ink)" }}></i>LEARN</span>
        <span><i style={{ background: "#2FB57D" }}></i>GROW</span>
      </div>
    </div>
  );
}
