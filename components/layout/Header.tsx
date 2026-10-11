"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navigation } from "@/lib/data/content";
import { Logo } from "@/components/brand/Logo";
import { ThemeToggle } from "@/components/layout/ThemeToggle";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const path = usePathname();

  // Close the menu after navigating, and with Escape.
  useEffect(() => setOpen(false), [path]);
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.documentElement.classList.add("menu-open");
    return () => {
      document.removeEventListener("keydown", onKey);
      document.documentElement.classList.remove("menu-open");
    };
  }, [open]);

  return (
    <header className={scrolled ? "site-header scrolled" : "site-header"}>
      <div className="wrap bar">
        <Link href="/" aria-label="Code-Craftie Solutions, home">
          <Logo />
        </Link>
        <nav aria-label="Main" className="nav">
          <ul>
            {navigation.map((n) => (
              <li key={n.href}>
                <Link href={n.href} aria-current={path === n.href ? "page" : undefined}>
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="bar-end">
          <ThemeToggle />
          <Link className="btn btn-primary bar-cta" href="/start">
            Start a project
          </Link>
          <button
            type="button"
            className="menu-btn"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>
      <nav id="mobile-menu" aria-label="Menu" className="mobile-menu" hidden={!open}>
        <ul className="wrap">
          {navigation.map((n) => (
            <li key={n.href}>
              <Link href={n.href}>{n.label}</Link>
            </li>
          ))}
          <li>
            <Link className="btn btn-primary" href="/start">
              Start a project
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
