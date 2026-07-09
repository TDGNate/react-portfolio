import React from "react";
import { useTheme } from "../theme/ThemeContext";
import Reveal from "../components/Reveal";
import { GlassButton, SolidButton, CategoryBanner } from "../components/ui";
import SiteFooterMark from "../components/SiteFooterMark";
import {
  featuredProjects,
  codingProjects,
  highlights,
  contactLinks,
} from "../data/portfolio";

// A tag chip (solid, matches the design's project-card tags).
function TagChip({ children }) {
  const { tokens: t } = useTheme();
  return (
    <div
      style={{
        fontSize: "12px",
        fontWeight: 500,
        padding: "5px 12px",
        borderRadius: "999px",
        background: t.c.bgAlt,
        color: t.c.textMuted,
      }}
    >
      {children}
    </div>
  );
}

// Large detailed category card (image half + text half, stacks on narrow).
function FeaturedCard({ p, angle }) {
  const { tokens: t } = useTheme();
  return (
    <Reveal
      style={{
        position: "relative",
        borderRadius: "28px",
        overflow: "hidden",
        boxShadow: `0 14px 46px ${t.c.shadow}`,
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
      <div
        style={{
          position: "relative",
          zIndex: 1,
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px,1fr))",
          gap: 0,
        }}
      >
        <div style={{ minHeight: "220px", display: "flex" }}>
          <CategoryBanner label={p.kicker} angle={angle} height="100%" />
        </div>
        <div style={{ padding: "34px" }}>
          <div
            style={{
              fontSize: "12.5px",
              fontWeight: 600,
              letterSpacing: "0.04em",
              textTransform: "uppercase",
              color: t.c.accentDeep,
              marginBottom: "10px",
            }}
          >
            {p.kicker}
          </div>
          <h3
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "22px",
              fontWeight: 600,
              margin: "0 0 14px",
              color: t.c.text,
            }}
          >
            {p.titleLong || p.title}
          </h3>
          <p
            style={{
              fontSize: "15px",
              lineHeight: 1.7,
              color: t.c.textMuted,
              margin: "0 0 20px",
            }}
          >
            {p.descLong}
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {p.tags.map((tag) => (
              <TagChip key={tag}>{tag}</TagChip>
            ))}
          </div>
        </div>
      </div>
    </Reveal>
  );
}

// Individual coding-project glass card (real screenshot + links).
function CodingCard({ p }) {
  const { tokens: t } = useTheme();
  return (
    <div
      style={{
        position: "relative",
        borderRadius: "26px",
        overflow: "hidden",
        boxShadow: `0 12px 40px ${t.c.shadow}`,
        display: "flex",
        flexDirection: "column",
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
      <div
        style={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          flex: 1,
        }}
      >
        <div style={{ height: "190px", background: t.c.bgAlt, overflow: "hidden" }}>
          <img
            src={p.thumbnail}
            alt={`${p.title} screenshot`}
            loading="lazy"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
          />
        </div>
        <div
          style={{
            padding: "22px",
            display: "flex",
            flexDirection: "column",
            flex: 1,
          }}
        >
          <h3
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "17px",
              fontWeight: 600,
              margin: "0 0 10px",
              color: t.c.text,
            }}
          >
            {p.title}
          </h3>
          <p
            style={{
              fontSize: "14px",
              lineHeight: 1.6,
              color: t.c.textMuted,
              margin: "0 0 16px",
            }}
          >
            {p.desc}
          </p>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "8px",
              marginBottom: "18px",
            }}
          >
            {p.tags.map((tag) => (
              <TagChip key={tag}>{tag}</TagChip>
            ))}
          </div>
          <div
            style={{
              display: "flex",
              gap: "10px",
              marginTop: "auto",
              flexWrap: "wrap",
            }}
          >
            {p.live && (
              <GlassButton
                href={p.live}
                target="_blank"
                rel="noopener"
                fontSize="13px"
                padding="9px 16px"
              >
                Live ↗
              </GlassButton>
            )}
            <GlassButton
              href={p.repo}
              target="_blank"
              rel="noopener"
              fontSize="13px"
              padding="9px 16px"
            >
              Code
            </GlassButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const { tokens: t } = useTheme();
  const angles = ["135deg", "115deg", "155deg"];

  return (
    <>
      {/* Header */}
      <div
        style={{
          position: "relative",
          maxWidth: "1040px",
          margin: "0 auto",
          padding: "70px 28px 20px",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-40px",
            right: 0,
            zIndex: 0,
            pointerEvents: "none",
          }}
        >
          <div
            style={{
              width: "240px",
              height: "240px",
              borderRadius: "50%",
              background: t.c.accent,
              filter: "blur(90px)",
              opacity: 0.3,
              animation: "floatY 9s ease-in-out infinite",
            }}
          />
        </div>
        <div style={{ position: "relative", zIndex: 1 }}>
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
            Projects
          </div>
          <h1
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 600,
              fontSize: "clamp(30px,4.5vw,44px)",
              margin: "0 0 16px",
              letterSpacing: "-0.02em",
            }}
          >
            Game dev, web builds, and robotics.
          </h1>
          <p
            style={{
              fontSize: "16.5px",
              lineHeight: 1.65,
              color: t.c.textMuted,
              maxWidth: "560px",
              margin: 0,
            }}
          >
            A closer look at what I've made — from shipped games to team websites to
            competition robots.
          </p>
        </div>
      </div>

      {/* Featured category cards */}
      <div
        style={{
          position: "relative",
          maxWidth: "1040px",
          margin: "0 auto",
          padding: "50px 28px 30px",
          display: "flex",
          flexDirection: "column",
          gap: "30px",
        }}
      >
        {featuredProjects.map((p, i) => (
          <FeaturedCard key={p.id} p={p} angle={angles[i % angles.length]} />
        ))}
      </div>

      {/* More projects — the real coding builds */}
      <div
        style={{
          position: "relative",
          maxWidth: "1180px",
          margin: "0 auto",
          padding: "40px 28px 20px",
        }}
      >
        <Reveal>
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
            More Projects
          </div>
          <h2
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 600,
              fontSize: "28px",
              margin: "0 0 8px",
              letterSpacing: "-0.01em",
            }}
          >
            Web &amp; coding builds.
          </h2>
          <p
            style={{
              fontSize: "15.5px",
              lineHeight: 1.65,
              color: t.c.textMuted,
              maxWidth: "560px",
              margin: "0 0 34px",
            }}
          >
            A collection of apps, games, and full-stack projects I built while
            learning to code — each with its source and, where it's still hosted, a
            live demo.
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px,1fr))",
              gap: "26px",
            }}
          >
            {codingProjects.map((p) => (
              <CodingCard key={p.title} p={p} />
            ))}
          </div>
        </Reveal>
      </div>

      {/* Highlights */}
      <div
        style={{
          position: "relative",
          background: t.c.bgAlt,
          transition: "background 0.4s ease",
          marginTop: "40px",
        }}
      >
        <Reveal
          style={{ maxWidth: "1040px", margin: "0 auto", padding: "80px 28px" }}
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
            Highlights
          </div>
          <h2
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 600,
              fontSize: "28px",
              margin: "0 0 34px",
              letterSpacing: "-0.01em",
            }}
          >
            Along the way.
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px,1fr))",
              gap: "18px",
            }}
          >
            {highlights.map((h) => (
              <div
                key={h.title}
                style={{
                  position: "relative",
                  borderRadius: "20px",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    backdropFilter: `blur(${t.blurSoft}px)`,
                    WebkitBackdropFilter: `blur(${t.blurSoft}px)`,
                    background: t.glassTint,
                    border: `1px solid ${t.subtleBorder}`,
                  }}
                />
                <div style={{ position: "relative", zIndex: 1, padding: "22px" }}>
                  <div
                    style={{
                      fontSize: "15px",
                      fontWeight: 600,
                      color: t.c.text,
                      marginBottom: "6px",
                    }}
                  >
                    {h.title}
                  </div>
                  <div
                    style={{
                      fontSize: "13.5px",
                      lineHeight: 1.5,
                      color: t.c.textMuted,
                    }}
                  >
                    {h.sub}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      {/* Footer */}
      <div
        style={{
          position: "relative",
          maxWidth: "900px",
          margin: "0 auto",
          padding: "100px 28px 60px",
          textAlign: "center",
        }}
      >
        <Reveal>
          <h2
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 600,
              fontSize: "30px",
              margin: "0 0 14px",
              letterSpacing: "-0.01em",
            }}
          >
            Curious about a project?
          </h2>
          <p style={{ fontSize: "16px", color: t.c.textMuted, margin: "0 0 30px" }}>
            Happy to walk through any of these in more detail.
          </p>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "12px",
            }}
          >
            <SolidButton
              href={contactLinks.email}
              fontSize="14.5px"
              padding="12px 22px"
            >
              Email Me
            </SolidButton>
            <GlassButton to="/#contact">More ways to reach me</GlassButton>
          </div>
          <SiteFooterMark topPad={50} />
        </Reveal>
      </div>
    </>
  );
}
