import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../theme/ThemeContext";

/**
 * Glass pill button with a diagonal glint that sweeps once on hover.
 * Renders a router <Link> when `to` is set, otherwise a plain <a>.
 */
export function GlassButton({
  to,
  href,
  onClick,
  target,
  rel,
  children,
  fontSize = "14.5px",
  padding = "12px 22px",
  style,
  ...rest
}) {
  const { tokens: t } = useTheme();

  const inner = (
    <>
      <span
        style={{
          position: "absolute",
          inset: 0,
          backdropFilter: `blur(${t.blurSoft}px)`,
          WebkitBackdropFilter: `blur(${t.blurSoft}px)`,
          background: t.glassTint,
          border: `1px solid ${t.c.surfaceBorder}`,
          borderRadius: "999px",
        }}
      />
      <span
        className="dc-glint"
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: "999px",
          overflow: "hidden",
          background:
            "linear-gradient(115deg, transparent 42%, rgba(255,255,255,0.5) 50%, transparent 58%)",
          backgroundSize: "200% 100%",
          backgroundPosition: "200% 0",
          backgroundRepeat: "no-repeat",
        }}
      />
      <span
        style={{
          position: "relative",
          zIndex: 1,
          pointerEvents: "none",
          color: t.c.text,
        }}
      >
        {children}
      </span>
    </>
  );

  const commonStyle = {
    position: "relative",
    display: "inline-block",
    fontWeight: 600,
    fontSize,
    padding,
    borderRadius: "999px",
    overflow: "hidden",
    whiteSpace: "nowrap",
    transition: "transform 0.15s ease-out",
    ...style,
  };

  if (to) {
    return (
      <Link
        to={to}
        onClick={onClick}
        className="dc-glass-btn"
        style={commonStyle}
        {...rest}
      >
        {inner}
      </Link>
    );
  }
  return (
    <a
      href={href}
      onClick={onClick}
      target={target}
      rel={rel}
      className="dc-glass-btn"
      style={commonStyle}
      {...rest}
    >
      {inner}
    </a>
  );
}

/**
 * Solid accent-gradient button. Lifts + glows on hover (see .dc-solid-btn).
 */
export function SolidButton({
  to,
  href,
  onClick,
  target,
  rel,
  children,
  fontSize = "15px",
  padding = "14px 26px",
  style,
  ...rest
}) {
  const { tokens: t } = useTheme();
  const commonStyle = {
    display: "inline-block",
    fontWeight: 600,
    fontSize,
    padding,
    borderRadius: "999px",
    background: t.accentGradient,
    color: "#ffffff",
    whiteSpace: "nowrap",
    ...style,
  };

  if (to) {
    return (
      <Link
        to={to}
        onClick={onClick}
        className="dc-solid-btn"
        style={commonStyle}
        {...rest}
      >
        {children}
      </Link>
    );
  }
  return (
    <a
      href={href}
      onClick={onClick}
      target={target}
      rel={rel}
      className="dc-solid-btn"
      style={commonStyle}
      {...rest}
    >
      {children}
    </a>
  );
}

/**
 * Vivid on-brand accent banner, used as the "image" for project categories
 * that don't have a single representative screenshot.
 */
export function CategoryBanner({ label, angle = "135deg", height = "150px" }) {
  const { tokens: t } = useTheme();
  return (
    <div
      style={{
        height,
        minHeight: "inherit",
        position: "relative",
        overflow: "hidden",
        background: `linear-gradient(${angle}, ${t.accent1}, ${t.accent2})`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(120% 120% at 80% -10%, rgba(255,255,255,0.28), transparent 55%)",
        }}
      />
      <span
        style={{
          position: "relative",
          zIndex: 1,
          fontFamily: "monospace",
          fontSize: "12px",
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color: "rgba(255,255,255,0.92)",
          padding: "0 16px",
          textAlign: "center",
        }}
      >
        {label}
      </span>
    </div>
  );
}

/**
 * Small frosted-glass pill used for value chips and skill tags.
 */
export function GlassPill({ children, padding = "8px 15px" }) {
  const { tokens: t } = useTheme();
  return (
    <div style={{ position: "relative", borderRadius: "999px", overflow: "hidden" }}>
      <span
        style={{
          position: "absolute",
          inset: 0,
          backdropFilter: `blur(${t.blurSoft}px)`,
          WebkitBackdropFilter: `blur(${t.blurSoft}px)`,
          background: t.glassTint,
          border: `1px solid ${t.subtleBorder}`,
        }}
      />
      <div
        style={{
          position: "relative",
          zIndex: 1,
          padding,
          fontSize: "13.5px",
          fontWeight: 500,
          color: t.c.text,
        }}
      >
        {children}
      </div>
    </div>
  );
}
