import { capabilitiesCopy } from "@/lib/data/content";
import { capabilities } from "@/lib/data/services";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Capabilities() {
  return (
    <section data-tone="dark" data-accent="#FF7A59">
      <div className="wrap">
        <SectionHeading k={capabilitiesCopy.k} title={capabilitiesCopy.title} />
        <div className="cap">
          {capabilities.map((g) => (
            <div key={g.title}><h3>{g.title}</h3><ul>{g.items.map((i) => <li key={i}>{i}</li>)}</ul></div>
          ))}
        </div>
      </div>
    </section>
  );
}
