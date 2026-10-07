import type { ReactNode } from "react";

type Props = { id: string; label: string; hint?: string; error?: string; full?: boolean; children: ReactNode };

export function Field({ id, label, hint, error, full, children }: Props) {
  return (
    <div className={full ? "f w" : "f"}>
      <label htmlFor={id}>
        {label} {hint && <small>({hint})</small>}
      </label>
      {children}
      {error && <p id={`${id}-err`} className="field-err" role="alert">{error}</p>}
    </div>
  );
}

export const aria = (id: string, error?: string) => ({
  "aria-invalid": error ? true : undefined,
  "aria-describedby": error ? `${id}-err` : undefined,
});
