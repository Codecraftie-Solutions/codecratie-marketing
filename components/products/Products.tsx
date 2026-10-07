import { productsCopy } from "@/lib/data/content";
import { productStatuses, products } from "@/lib/data/products";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Products({ as }: { as?: "h1" | "h2" }) {
  return (
    <section id="products" data-accent="#FF7A59">
      <div className="wrap">
        <SectionHeading k={productsCopy.k} title={productsCopy.title} as={as} />
        {products.length === 0 ? (
          <div className="empty">
            {productsCopy.empty}<br />
            {productStatuses.map((s) => <span key={s}>{s}</span>)}
          </div>
        ) : (
          <div className="why">
            {products.map((p) => (
              <div key={p.name}>
                <h3>{p.name} <small>{p.status}</small></h3>
                <p>{p.problem}</p><p>{p.whatItDoes}</p>
                {p.url && <p><a href={p.url} rel="noopener">Visit</a></p>}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
