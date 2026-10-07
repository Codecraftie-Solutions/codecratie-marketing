import { servicesCopy } from "@/lib/data/content";
import { services } from "@/lib/data/services";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Services() {
  return (
    <section>
      <div className="wrap">
        <SectionHeading k={servicesCopy.k} title={servicesCopy.title} />
        <ol className="svc">
          {services.map((s, i) => (
            <li key={s.title}>
              <details name="svc" open={i === 0}>
                <summary>
                  <span className="n">{String(i + 1).padStart(2, "0")}</span>
                  <h3>{s.title}</h3>
                  <span className="pm" aria-hidden="true"></span>
                </summary>
                <p>{s.text}</p>
              </details>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
