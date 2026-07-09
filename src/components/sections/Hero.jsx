import React from "react";
import { useTheme } from "../../theme/ThemeContext";
import { useMouseParallax } from "../../hooks/useMouseParallax";
import { GlassButton, SolidButton } from "../ui";
import { hero } from "../../data/portfolio";
import portrait from "../../assets/nate-portrait.png";

export default function Hero() {
  const { tokens: t } = useTheme();
  const mouse = useMouseParallax();

  const parallax1 = `translate(${mouse.x * -26}px, ${mouse.y * -26}px)`;
  const parallax2 = `translate(${mouse.x * 20}px, ${mouse.y * 20}px)`;
  const parallax3 = `translate(${mouse.x * 46}px, ${mouse.y * 46}px)`;

  return (
    <div
      id="top"
      style={{
        position: "relative",
        maxWidth: "1180px",
        margin: "0 auto",
        padding: "64px 28px 100px",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(340px,1fr))",
        gap: "48px",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      {/* Background blobs (drift with the cursor) */}
      <div
        style={{
          position: "absolute",
          top: "-60px",
          left: "-60px",
          zIndex: 0,
          transform: parallax1,
          transition: "transform 0.25s ease-out",
          pointerEvents: "none",
        }}
      >
        <div
          style={{
            width: "260px",
            height: "260px",
            borderRadius: "50%",
            background: t.accent1,
            filter: "blur(80px)",
            opacity: 0.35,
            animation: "floatY 8s ease-in-out infinite",
          }}
        />
      </div>
      <div
        style={{
          position: "absolute",
          bottom: "-40px",
          right: "10%",
          zIndex: 0,
          transform: parallax2,
          transition: "transform 0.25s ease-out",
          pointerEvents: "none",
        }}
      >
        <div
          style={{
            width: "220px",
            height: "220px",
            borderRadius: "50%",
            background: t.accent2,
            filter: "blur(90px)",
            opacity: 0.3,
            animation: "floatY2 9s ease-in-out infinite",
          }}
        />
      </div>

      {/* Left column */}
      <div style={{ position: "relative", zIndex: 1 }}>
        <div
          style={{
            fontSize: "14px",
            fontWeight: 600,
            letterSpacing: "0.04em",
            textTransform: "uppercase",
            color: t.c.accentDeep,
            marginBottom: "18px",
          }}
        >
          {hero.eyebrow}
        </div>
        <h1
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 600,
            fontSize: "clamp(34px,5vw,54px)",
            lineHeight: 1.08,
            letterSpacing: "-0.02em",
            margin: "0 0 22px",
          }}
        >
          {hero.title}
        </h1>
        <p
          style={{
            fontSize: "17px",
            lineHeight: 1.65,
            color: t.c.textMuted,
            maxWidth: "520px",
            margin: "0 0 32px",
          }}
        >
          {hero.body}
        </p>
        <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
          <SolidButton href="#projects">See my work</SolidButton>
          <GlassButton href="#contact" fontSize="15px" padding="14px 26px">
            Contact
          </GlassButton>
        </div>
      </div>

      {/* Right column — portrait in glass frame */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            position: "relative",
            width: "min(100%, 380px)",
            aspectRatio: "0.86",
          }}
        >
          {/* Slow-spinning dashed ring (drifts with cursor) */}
          <div
            style={{
              position: "absolute",
              inset: "-10%",
              transform: parallax3,
              transition: "transform 0.2s ease-out",
              pointerEvents: "none",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                borderRadius: "50%",
                border: `1.5px dashed ${t.c.accentDeep}`,
                opacity: 0.35,
                animation: "spinSlow 40s linear infinite",
              }}
            />
          </div>
          {/* Accent blobs behind the transparent portrait */}
          <div
            style={{
              position: "absolute",
              top: "8%",
              right: "2%",
              width: "130px",
              height: "130px",
              borderRadius: "50%",
              background: t.accent1,
              filter: "blur(50px)",
              opacity: 0.5,
              animation: "floatY3 7s ease-in-out infinite",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: "6%",
              left: 0,
              width: "110px",
              height: "110px",
              borderRadius: "50%",
              background: t.accent2,
              filter: "blur(50px)",
              opacity: 0.4,
              animation: "floatY 8s ease-in-out infinite",
            }}
          />
          {/* Glass frame */}
          <div
            style={{
              position: "absolute",
              inset: "6%",
              borderRadius: "36px",
              overflow: "hidden",
              boxShadow: `0 20px 60px ${t.c.shadow}`,
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
            <img
              src={portrait}
              alt="Portrait of Nate McIlvenny"
              style={{
                position: "relative",
                zIndex: 1,
                width: "100%",
                height: "100%",
                objectFit: "contain",
                objectPosition: "center bottom",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
