import { statement } from "@/lib/data/content";

export function Statement() {
  return (
    <section className="stmt" data-tone="gold" data-accent="#141413" aria-label="Build. Learn. Grow.">
      <div className="wrap">{statement.map((w) => <p className="bl" key={w}>{w}</p>)}</div>
    </section>
  );
}
