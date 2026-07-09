import React from "react";
import { useTheme } from "../../theme/ThemeContext";
import Reveal from "../Reveal";
import { GlassPill } from "../ui";
import { about, values, timeline } from "../../data/portfolio";

export default function About() {
  const { tokens: t } = useTheme();

  return (
    <div
      id="about"
      style={{
        position: "relative",
        maxWidth: "1040px",
        margin: "0 auto",
        padding: "40px 28px 90px",
      }}
    >
      <Reveal
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px,1fr))",
          gap: "120px",
          alignItems: "center",
        }}
      >
        <div>
          <div
            style={{
              fontSize: "13px",
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: t.c.accentDeep,
              marginBottom: "14px",
            }}
          >
            {about.eyebrow}
          </div>
          <h2
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 600,
              fontSize: "30px",
              margin: "0 0 18px",
              letterSpacing: "-0.01em",
            }}
          >
            {about.title}
          </h2>
          {about.paragraphs.map((para, i) => (
            <p
              key={i}
              style={{
                fontSize: "16px",
                lineHeight: 1.7,
                color: t.c.textMuted,
                margin: i === about.paragraphs.length - 1 ? "0 0 26px" : "0 0 16px",
              }}
            >
              {para}
            </p>
          ))}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
            {values.map((v) => (
              <GlassPill key={v} padding="8px 16px">
                {v}
              </GlassPill>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
          {timeline.map((stop) => (
            <div key={stop.label} style={{ display: "flex", gap: "18px" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    width: "14px",
                    height: "14px",
                    borderRadius: "50%",
                    background: stop.current ? t.c.accent : t.c.surfaceBorder,
                    flexShrink: 0,
                  }}
                />
                <div
                  style={{
                    width: "2px",
                    flex: 1,
                    background: t.c.surfaceBorder,
                    minHeight: "34px",
                  }}
                />
              </div>
              <div style={{ paddingBottom: "30px" }}>
                <div style={{ fontWeight: 600, fontSize: "15.5px", color: t.c.text }}>
                  {stop.label}
                </div>
                <div
                  style={{
                    fontSize: "13.5px",
                    color: t.c.textMuted,
                    marginTop: "2px",
                  }}
                >
                  {stop.sub}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </div>
  );
}
