import Link from "next/link";
import { site } from "@/lib/constants/site";
import { academy, cta, founder, process, services } from "@/lib/data/content";
import { caseStudies } from "@/lib/data/work";
import { products } from "@/lib/data/products";
import { CaseStudy } from "@/components/work/CaseStudy";

export function SelectedWork() {
  return (
    <section className="section" aria-labelledby="work-h">
      <div className="wrap">
        <div className="section-head">
          <h2 id="work-h">Work we have shipped</h2>
          <Link className="text-link" href="/work">
            All case studies
          </Link>
        </div>
        <div className="cases">
          {caseStudies.map((s) => (
            <CaseStudy key={s.slug} study={s} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function Services() {
  return (
    <section className="section" id="services" aria-labelledby="services-h">
      <div className="wrap split">
        <div className="split-head">
          <h2 id="services-h">What we build</h2>
          <p className="lede">
            Most of our clients arrive with a problem, not a specification. We work out what to build, build it, and
            keep it running.
          </p>
        </div>
        <ul className="service-list">
          {services.map((s) => (
            <li key={s.title}>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Process() {
  return (
    <section className="section band" aria-labelledby="process-h">
      <div className="wrap">
        <h2 id="process-h">How a project runs</h2>
        <ol className="steps">
          {process.map((p, i) => (
            <li key={p.title}>
              <span className="step-n" aria-hidden="true">
                {i + 1}
              </span>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
              <p className="step-get">{p.get}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function ProductsStrip() {
  return (
    <section className="section" aria-labelledby="products-h">
      <div className="wrap split">
        <div className="split-head">
          <h2 id="products-h">We run our own products too</h2>
          <p className="lede">
            Building and operating our own software keeps us honest about what it takes to keep something working for
            real customers.
          </p>
        </div>
        <ul className="product-list">
          {products.map((p) => (
            <li key={p.name}>
              <div className="product-top">
                <h3>{p.name}</h3>
                <span className="status">{p.status}</span>
              </div>
              <p>{p.what}</p>
              <a className="text-link" href={p.url} rel="noopener">
                {p.linkLabel}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Founder() {
  return (
    <section className="section" aria-labelledby="founder-h">
      <div className="wrap founder">
        <div className="founder-badge" aria-hidden="true">
          IS
        </div>
        <div>
          <h2 id="founder-h">Who you work with</h2>
          {founder.text.map((t) => (
            <p key={t.slice(0, 20)} className="lede">
              {t}
            </p>
          ))}
          <p className="founder-sign">
            {founder.name}, {founder.role}
          </p>
        </div>
      </div>
    </section>
  );
}

export function Academy() {
  return (
    <section className="section" aria-labelledby="academy-h">
      <div className="wrap academy">
        <div>
          <h2 id="academy-h">{academy.title}</h2>
          <p className="lede">{academy.text}</p>
        </div>
        <a className="btn btn-secondary" href={site.academyUrl} rel="noopener">
          {academy.cta}
        </a>
      </div>
    </section>
  );
}

export function Cta() {
  return (
    <section className="cta" aria-labelledby="cta-h">
      <div className="wrap cta-inner">
        <div>
          <h2 id="cta-h">{cta.title}</h2>
          <p>{cta.text}</p>
        </div>
        <div className="actions">
          <Link className="btn btn-on-dark" href="/start">
            Start a project
          </Link>
          <a className="btn btn-ghost-dark" href={`mailto:${site.contactEmail}`}>
            Email us
          </a>
        </div>
      </div>
    </section>
  );
}
