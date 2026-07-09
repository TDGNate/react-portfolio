import React from "react";
import { useTheme } from "../../theme/ThemeContext";
import Reveal from "../Reveal";

export default function Faith() {
  const { tokens: t } = useTheme();

  return (
    <div
      id="faith"
      style={{
        position: "relative",
        overflow: "hidden",
        background: t.c.bgAlt,
        transition: "background 0.4s ease",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "-70px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      >
        <div
          style={{
            width: "620px",
            height: "320px",
            borderRadius: "50%",
            background: t.accentGradient,
            filter: "blur(150px)",
            opacity: t.richBlobOpacity,
          }}
        />
      </div>
      <Reveal
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "720px",
          margin: "0 auto",
          padding: "100px 28px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontSize: "13px",
            fontWeight: 600,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: t.c.accentDeep,
            marginBottom: "26px",
          }}
        >
          Faith
        </div>
        <div
          style={{
            position: "relative",
            borderRadius: "28px",
            overflow: "hidden",
            boxShadow: `0 12px 40px ${t.c.shadow}`,
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              backdropFilter: `blur(${t.blurStrong}px) saturate(160%) brightness(1.05)`,
              WebkitBackdropFilter: `blur(${t.blurStrong}px) saturate(160%) brightness(1.05)`,
              background: t.glassTint,
              transform: "translateZ(0)",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: "inherit",
              boxShadow: t.glassEdge,
            }}
          />
          <div style={{ position: "relative", zIndex: 1, padding: "48px 40px" }}>
            <p
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "22px",
                lineHeight: 1.5,
                fontWeight: 500,
                margin: "0 0 16px",
                color: t.c.text,
              }}
            >
              "I am the way, the truth, and the life: no man cometh unto the Father,
              but by me."
            </p>
            <div style={{ fontSize: "14px", color: t.c.textMuted }}>John 14:6, KJV</div>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
