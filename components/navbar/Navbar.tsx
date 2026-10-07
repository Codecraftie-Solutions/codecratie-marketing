import type { CSSProperties } from "react";
import Link from "next/link";
import { navigation } from "@/lib/data/navigation";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { Logo } from "@/components/ui/Logo";

export function Navbar() {
  return (
    <>
      <header>
        <div className="wrap">
          <Link className="logo" href="/" aria-label="CodeCraftie Solutions, home">
            <Logo animate />
          </Link>
          <nav aria-label="Main">
            <ul>
              {navigation.map((n) => (
                <li key={n.sec}>
                  <a href={n.href} data-sec={n.sec}>
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <ThemeToggle />
          <a className="btn " href="/start">
            Start a Project
          </a>
          <button
            className="mb"
            aria-expanded="false"
            aria-controls="ov"
            aria-label="Open menu"
          >
            <i></i>
            <i></i>
          </button>
        </div>
      </header>
      <div id="ov" className="ov" aria-hidden="true">
        <nav aria-label="Menu">
          <ol>
            {navigation.map((n, i) => (
              <li key={n.sec} style={{ "--i": i } as CSSProperties}>
                <a className="l" href={n.href}>
                  <small>0{i + 1}</small>
                  <span className="t">{n.label}</span>
                </a>
              </li>
            ))}
          </ol>
        </nav>
        <div className="ovb">
          <a className="btn p" href="/start">
            Start a Project
          </a>
          <ThemeToggle />
        </div>
      </div>
    </>
  );
}
