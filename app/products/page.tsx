import { pageMetadata } from "@/lib/utils/metadata";
import { products } from "@/lib/data/products";
import { PageHead } from "@/components/layout/PageHead";
import { Cta } from "@/components/home/Sections";

export const metadata = pageMetadata({
  title: "Products",
  description: "Software Code-Craftie Solutions builds and runs itself: CatalogFlow and Atlas.",
  path: "/products",
});

export default function Page() {
  return (
    <>
      <PageHead
        title="Our products"
        lede="Software we build, run and support ourselves. The same engineering goes into client work."
      />
      <section className="section section-tight">
        <div className="wrap">
          <ul className="product-list product-list-full">
            {products.map((p) => (
              <li key={p.name}>
                <div className="product-top">
                  <h2>{p.name}</h2>
                  <span className="status">{p.status}</span>
                </div>
                <p>{p.what}</p>
                <p className="muted">{p.who}</p>
                <a className="text-link" href={p.url} rel="noopener">
                  {p.linkLabel}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <Cta />
    </>
  );
}
