"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Plays the scroll reveals. Nothing is hidden until this has run, so if
 * JavaScript fails or motion is reduced, every picture is simply there.
 * Elements already on screen are shown at once, without animating.
 */
export function Reveal() {
  const path = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    if (!root.classList.contains("motion")) return;
    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]:not(.in)"));
    const below = els.filter((el) => {
      if (el.getBoundingClientRect().top < window.innerHeight * 0.9) {
        el.classList.add("in");
        return false;
      }
      return true;
    });
    if (!("IntersectionObserver" in window)) {
      below.forEach((el) => el.classList.add("in"));
      return;
    }
    root.classList.add("reveal-ready");
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: "0px 0px -12% 0px" }
    );
    below.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [path]);

  return null;
}
