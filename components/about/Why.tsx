import { whyCopy } from "@/lib/data/content";
import { why } from "@/lib/data/services";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Why() {
  return (
    <section data-accent="#2FB57D">
      <div className="wrap">
        <SectionHeading k={whyCopy.k} title={whyCopy.title} />
        <div className="why">{why.map((w) => <div key={w.title}><h3>{w.title}</h3><p>{w.text}</p></div>)}</div>
      </div>
    </section>
  );
}
