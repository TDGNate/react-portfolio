import React, { useEffect, useRef } from "react";

/**
 * Fades its content up (opacity 0 -> 1, translateY(24px) -> 0) the first time
 * it scrolls into view, via IntersectionObserver. After the transition it
 * clears the inline transform back to `none` — a lingering transform on an
 * ancestor triggers a Chromium backdrop-filter seam bug on the glass cards.
 */
export default function Reveal({
  as: Tag = "div",
  threshold = 0.15,
  style,
  children,
  ...rest
}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      el.style.opacity = "1";
      el.style.transform = "none";
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const t = entry.target;
            t.style.opacity = "1";
            t.style.transform = "translateY(0)";
            setTimeout(() => {
              t.style.transform = "none";
            }, 900);
            observer.unobserve(t);
          }
        });
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return (
    <Tag
      ref={ref}
      style={{
        opacity: 0,
        transform: "translateY(24px)",
        transition: "opacity 0.8s ease, transform 0.8s ease",
        ...style,
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
