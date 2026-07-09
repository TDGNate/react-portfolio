import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * On route change: scroll to the hash target (smoothly) when there is one, or to
 * the top of the page otherwise. This is what makes cross-page links like
 * "/#about" (Projects -> Home) land on the right section, since a client-side
 * navigation doesn't trigger the browser's native anchor scroll.
 */
export default function ScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = decodeURIComponent(hash.slice(1));
      // Double rAF so the destination route has committed + laid out first.
      requestAnimationFrame(() =>
        requestAnimationFrame(() => {
          const el = document.getElementById(id);
          if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
        })
      );
    } else {
      // Instant, not smooth: a route change should land at the top immediately
      // (like a full page load). "auto" would inherit html{scroll-behavior:smooth}
      // and animate an unwanted scroll-up when navigating while scrolled down.
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
  }, [pathname, hash]);

  return null;
}
