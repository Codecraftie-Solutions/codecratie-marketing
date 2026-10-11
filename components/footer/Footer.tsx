import { site } from "@/lib/constants/site";
import { Logo } from "@/components/ui/Logo";

const links = [
  { label: "Solutions", href: "/#solutions" },
  { label: "Work", href: "/work" },
  { label: "Products", href: "/products" },
  { label: "Academy", href: "/academy" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/start#contact" },
];

export function Footer() {
  const a = site.address;
  return (
    <footer className="dark" data-tone="dark">
      <div className="wrap">
        <div>
          <div role="img" aria-label="CodeCraftie Solutions" style={{ display: "flex", alignItems: "center", gap: 12 }}><Logo /></div>
          <p style={{ marginTop: 12, color: "#BDBBB2" }}>Build technology.<br />Develop talent.<br />Create opportunity.</p>
        </div>
        <nav aria-label="Footer"><ul>{links.map((l) => <li key={l.label}><a href={l.href}>{l.label}</a></li>)}</ul></nav>
        <a className="btn p" href="/start">Start a Project</a>
      </div>
      <div className="giant" aria-hidden="true">CODECRAFTIE</div>
      <div className="fbw">
        <div className="fb">
          <span>© {new Date().getFullYear()} {site.legalName}, registered in Nigeria, {site.registration}</span>
          <span><a href="/privacy">Privacy Policy</a></span>
        </div>
        <address className="fa">
          {a.street}, {a.locality}, {a.region}, {a.country}
          <br />
          <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>
        </address>
      </div>
    </footer>
  );
}
