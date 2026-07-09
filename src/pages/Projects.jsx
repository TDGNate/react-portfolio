import React from "react";
import { useTheme } from "../theme/ThemeContext";
import Reveal from "../components/Reveal";
import {
  GlassButton,
  SolidButton,
  CategoryBanner,
  ProjectButtons,
} from "../components/ui";
import SiteFooterMark from "../components/SiteFooterMark";
import { projectsPageOrder, highlights, contactLinks } from "../data/portfolio";

const ANGLES = ["135deg", "115deg", "155deg"];

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

/**
 * Horizontal glass project card: image (or accent banner) on one side, text on
 * the other. On desktop the media sits to the LEFT and the content to the
 * RIGHT (the featured "new style" layout); on narrow screens the grid collapses
 * so the media stacks on top.
 */
function HCard({
  image,
  imageAlt,
  bannerLabel,
  bannerAngle = "135deg",
  kicker,
  title,
  desc,
  tags,
  live,
  liveLabel,
  repo,
  privateSource,
}) {
  const { tokens: t } = useTheme();
  return (
    <Reveal
      threshold={0.12}
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
          gridTemplateColumns: "repeat(auto-fit, minmax(260px,1fr))",
          gap: 0,
        }}
      >
        {/* Media side */}
        <div
          style={{
            position: "relative",
            minHeight: "230px",
            background: t.c.bgAlt,
            overflow: "hidden",
          }}
        >
          {image ? (
            <img
              src={image}
              alt={imageAlt}
              loading="lazy"
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
          ) : (
            <div style={{ position: "absolute", inset: 0 }}>
              <CategoryBanner label={bannerLabel} angle={bannerAngle} height="100%" />
            </div>
          )}
        </div>

        {/* Text side */}
        <div
          style={{
            padding: "34px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          {kicker && (
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
              {kicker}
            </div>
          )}
          <h3
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "22px",
              fontWeight: 600,
              margin: "0 0 14px",
              color: t.c.text,
            }}
          >
            {title}
          </h3>
          <p
            style={{
              fontSize: "15px",
              lineHeight: 1.7,
              color: t.c.textMuted,
              margin: "0 0 20px",
            }}
          >
            {desc}
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {tags.map((tag) => (
              <TagChip key={tag}>{tag}</TagChip>
            ))}
          </div>
          <ProjectButtons
            live={live}
            liveLabel={liveLabel}
            repo={repo}
            privateSource={privateSource}
          />
        </div>
      </div>
    </Reveal>
  );
}

export default function Projects() {
  const { tokens: t } = useTheme();

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
            A closer look at what I've made — from a desktop study app in progress to
            shipped games, team websites, and competition robots. Roughly ordered by
            how much they mean to me.
          </p>
        </div>
      </div>

      {/* One importance-ordered stack of horizontal cards */}
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
        {projectsPageOrder.map((p, i) => (
          <HCard key={p.key} bannerAngle={ANGLES[i % ANGLES.length]} {...p} />
        ))}
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
