/** The title block at the top of every page other than home. */
export function PageHead({ title, lede, children }: { title: React.ReactNode; lede?: string; children?: React.ReactNode }) {
  return (
    <div className="page-head">
      <div className="wrap">
        <h1>{title}</h1>
        {lede && <p className="lede">{lede}</p>}
        {children}
      </div>
    </div>
  );
}
