type Props = { k: string; title: string; as?: "h1" | "h2" };

/** Pages other than home use h1 here, styled identically to the approved h2. */
export function SectionHeading({ k, title, as: Tag = "h2" }: Props) {
  return (
    <>
      <span className="k">{k}</span>
      <Tag className={Tag === "h1" ? "as-h2" : undefined}>{title}</Tag>
    </>
  );
}
