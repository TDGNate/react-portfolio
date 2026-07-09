import React from "react";
import { useTheme } from "../../theme/ThemeContext";
import Reveal from "../Reveal";
import { GlassButton, CategoryBanner, ProjectButtons } from "../ui";
import { homeFeatured } from "../../data/portfolio";

export default function ProjectsPreview() {
  const { tokens: t } = useTheme();
  const angles = ["135deg", "115deg", "155deg"];

  return (
    <div
      id="projects"
      style={{
        position: "relative",
        overflow: "hidden",
        maxWidth: "1180px",
        margin: "0 auto",
        padding: "100px 28px",
      }}
    >
      <div
        style={{
          position: "absolute",
          bottom: "-60px",
          left: "-80px",
          zIndex: 0,
          pointerEvents: "none",
        }}
      >
        <div
          style={{
            width: "280px",
            height: "280px",
            borderRadius: "50%",
            background: t.accent1,
            filter: "blur(100px)",
            opacity: t.richBlobOpacity,
            animation: "floatY 11s ease-in-out infinite",
          }}
        />
      </div>
      <Reveal style={{ position: "relative", zIndex: 1 }}>
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "20px",
            marginBottom: "40px",
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
              Selected Projects
            </div>
            <h2
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 600,
                fontSize: "30px",
                margin: 0,
                letterSpacing: "-0.01em",
              }}
            >
              A few things I've built.
            </h2>
          </div>
          <GlassButton to="/projects">View all projects →</GlassButton>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px,1fr))",
            gap: "26px",
          }}
        >
          {homeFeatured.map((p, i) => (
            <div
              key={p.key}
              style={{
                position: "relative",
                borderRadius: "26px",
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
              <div style={{ position: "relative", zIndex: 1 }}>
                {p.thumbnail ? (
                  <div
                    style={{
                      height: "150px",
                      background: t.c.bgAlt,
                      overflow: "hidden",
                    }}
                  >
                    <img
                      src={p.thumbnail}
                      alt={`${p.title} preview`}
                      loading="lazy"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        display: "block",
                      }}
                    />
                  </div>
                ) : (
                  <CategoryBanner
                    label={p.bannerLabel}
                    angle={angles[i % angles.length]}
                  />
                )}
                <div style={{ padding: "24px" }}>
                  <h3
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: "18px",
                      fontWeight: 600,
                      margin: "0 0 10px",
                      color: t.c.text,
                    }}
                  >
                    {p.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "14.5px",
                      lineHeight: 1.6,
                      color: t.c.textMuted,
                      margin: "0 0 16px",
                    }}
                  >
                    {p.desc}
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                    {p.tags.map((tag) => (
                      <div
                        key={tag}
                        style={{
                          fontSize: "12px",
                          fontWeight: 500,
                          padding: "5px 11px",
                          borderRadius: "999px",
                          background: t.c.bgAlt,
                          color: t.c.textMuted,
                        }}
                      >
                        {tag}
                      </div>
                    ))}
                  </div>
                  <ProjectButtons
                    single
                    live={p.live}
                    liveLabel={p.liveLabel}
                    repo={p.repo}
                    marginTop="18px"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </div>
  );
}
