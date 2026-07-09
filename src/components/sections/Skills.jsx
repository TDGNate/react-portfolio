import React from "react";
import { useTheme } from "../../theme/ThemeContext";
import Reveal from "../Reveal";
import { GlassPill } from "../ui";
import { skillGroups } from "../../data/portfolio";

export default function Skills() {
  const { tokens: t } = useTheme();

  return (
    <div
      id="skills"
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
          top: "-90px",
          right: "-70px",
          zIndex: 0,
          pointerEvents: "none",
        }}
      >
        <div
          style={{
            width: "300px",
            height: "300px",
            borderRadius: "50%",
            background: t.accent2,
            filter: "blur(100px)",
            opacity: t.richBlobOpacity,
            animation: "floatY2 10s ease-in-out infinite",
          }}
        />
      </div>
      <Reveal
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "1040px",
          margin: "0 auto",
          padding: "90px 28px",
        }}
      >
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
          Skills &amp; Tools
        </div>
        <h2
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 600,
            fontSize: "30px",
            margin: "0 0 40px",
            letterSpacing: "-0.01em",
          }}
        >
          What I reach for most.
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px,1fr))",
            gap: "20px",
          }}
        >
          {skillGroups.map((group) => (
            <div
              key={group.title}
              style={{
                position: "relative",
                borderRadius: "22px",
                overflow: "hidden",
                boxShadow: `0 10px 34px ${t.c.shadow}`,
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  backdropFilter: `blur(${t.skillsBlur}px) saturate(155%)`,
                  WebkitBackdropFilter: `blur(${t.skillsBlur}px) saturate(155%)`,
                  background: t.skillsTint,
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
              <div style={{ position: "relative", zIndex: 1, padding: "24px" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    marginBottom: "18px",
                  }}
                >
                  <div
                    style={{
                      width: "11px",
                      height: "11px",
                      borderRadius: "50%",
                      background: t.accentGradient,
                    }}
                  />
                  <div style={{ fontSize: "15px", fontWeight: 600, color: t.c.text }}>
                    {group.title}
                  </div>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "9px" }}>
                  {group.items.map((skill) => (
                    <GlassPill key={skill}>{skill}</GlassPill>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </div>
  );
}
