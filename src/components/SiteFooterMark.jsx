import React from "react";
import { useTheme } from "../theme/ThemeContext";
import { FAITH_LINE, COPYRIGHT } from "../data/portfolio";

/**
 * The shared footer tail: italic faith line, a small cross built from two thin
 * bars (no icon font), and the copyright line. `topPad` matches the different
 * spacing the two pages use above the faith line.
 */
export default function SiteFooterMark({ topPad = 44 }) {
  const { tokens: t } = useTheme();
  return (
    <>
      <div
        style={{
          fontSize: "13.5px",
          color: t.c.textMuted,
          paddingTop: `${topPad}px`,
          fontStyle: "italic",
        }}
      >
        {FAITH_LINE}
      </div>
      <div style={{ display: "flex", justifyContent: "center", paddingTop: "16px" }}>
        <div style={{ position: "relative", width: "16px", height: "22px", opacity: 0.55 }}>
          <div
            style={{
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
              top: 0,
              width: "2.5px",
              height: "100%",
              background: t.c.textMuted,
              borderRadius: "2px",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: "30%",
              left: 0,
              width: "100%",
              height: "2.5px",
              background: t.c.textMuted,
              borderRadius: "2px",
            }}
          />
        </div>
      </div>
      <div style={{ fontSize: "13px", color: t.c.textMuted, paddingTop: "16px" }}>
        {COPYRIGHT}
      </div>
    </>
  );
}
