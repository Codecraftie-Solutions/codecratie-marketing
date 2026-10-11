/**
 * The Code-Craftie mark: an open C with the hyphen from the name sitting in its
 * mouth, like a tenon going into a joint. The C takes the text colour; the hyphen
 * takes the accent.
 */
export function Mark({ size = 32, title }: { size?: number; title?: string }) {
  return (
    <svg
      className="mark"
      width={size}
      height={size}
      viewBox="0 0 64 64"
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
      focusable="false"
    >
      {title && <title>{title}</title>}
      <path d="M42.6 18.1A20 20 0 1 0 42.6 45.9" fill="none" stroke="currentColor" strokeWidth="11" />
      <rect className="mark-dash" x="45" y="27" width="16" height="10" />
    </svg>
  );
}

/** Mark and wordmark, as used in the header and footer. */
export function Logo() {
  return (
    <span className="logo">
      <Mark size={34} />
      <span className="wordmark">
        <b>Code-Craftie</b>
        <span>Solutions</span>
      </span>
    </span>
  );
}
