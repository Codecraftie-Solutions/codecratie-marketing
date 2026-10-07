import { processCopy } from "@/lib/data/content";
import { process } from "@/lib/data/services";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Process() {
  return (
    <section>
      <div className="wrap">
        <SectionHeading k={processCopy.k} title={processCopy.title} />
        <ol className="steps">
          {process.map((s, i) => (
            <li key={s.title}><span className="n">{String(i + 1).padStart(2, "0")}</span><h3>{s.title}</h3><p>{s.text}</p></li>
          ))}
        </ol>
      </div>
    </section>
  );
}
