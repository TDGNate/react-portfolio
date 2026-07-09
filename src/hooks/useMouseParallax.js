import { useEffect, useState } from "react";

/**
 * Tracks the cursor's normalized offset from the viewport center
 * ({x,y} in roughly [-0.5, 0.5]) for the hero parallax. rAF-throttled, and a
 * no-op when the user prefers reduced motion.
 */
export function useMouseParallax() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const mq =
      window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq && mq.matches) return;

    const latest = { x: 0, y: 0 };
    let raf = null;
    const flush = () => {
      raf = null;
      setMouse({ x: latest.x, y: latest.y });
    };
    const onMove = (e) => {
      latest.x = e.clientX / window.innerWidth - 0.5;
      latest.y = e.clientY / window.innerHeight - 0.5;
      if (raf == null) raf = requestAnimationFrame(flush);
    };

    window.addEventListener("mousemove", onMove);
    return () => {
      window.removeEventListener("mousemove", onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return mouse;
}
