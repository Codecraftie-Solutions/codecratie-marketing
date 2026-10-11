import Link from "next/link";
import { site } from "@/lib/constants/site";
import { navigation } from "@/lib/data/content";
import { Logo } from "@/components/brand/Logo";

export function Footer() {
  const a = site.address;
  return (
    <footer className="site-footer">
      <div className="wrap footer-grid">
        <div>
          <Logo />
          <p className="footer-line">{site.tagline}</p>
        </div>
        <nav aria-label="Footer">
          <ul>
            {navigation.map((n) => (
              <li key={n.href}>
                <Link href={n.href}>{n.label}</Link>
              </li>
            ))}
            <li>
              <Link href="/start">Start a project</Link>
            </li>
          </ul>
        </nav>
        <address>
          <span>{a.street}</span>
          <span>
            {a.locality}, {a.region}, {a.country}
          </span>
          <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>
        </address>
      </div>
      <div className="wrap footer-legal">
        <span>
          © {new Date().getFullYear()} {site.legalName}. A business name registered with the Corporate Affairs
          Commission, Nigeria, {site.registration}.
        </span>
        <Link href="/privacy">Privacy Policy</Link>
      </div>
    </footer>
  );
}
