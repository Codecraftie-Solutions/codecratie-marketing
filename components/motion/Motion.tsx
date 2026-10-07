"use client";

import { useEffect } from "react";

/**
 * Loads the approved motion layer (public/js/motion.js) after hydration.
 * It is the verbatim vanilla JS from the approved prototype. Refactoring it into React hooks is a follow-up.
 */
export function Motion() {
  useEffect(() => {
    for (const src of ["/js/motion.js", "/js/hero.js"]) {
      const s = document.createElement("script");
      s.src = src;
      s.async = true;
      document.body.appendChild(s);
    }
  }, []);
  return null;
}
