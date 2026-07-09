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

// Small inline icons (currentColor, so they inherit the button text color).
function ArrowIcon() {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ display: "block" }}
      aria-hidden="true"
    >
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="7 7 17 7 17 17" />
    </svg>
  );
}

function CodeIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ display: "block" }}
      aria-hidden="true"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

/**
 * The Live / Github link buttons for a project card.
 * - Live button (arrow icon) when there's a live URL.
 * - Github button (code icon) when there's a repo.
 * `single` (homepage) renders ONE button: the live link if present, else the
 * repo. Otherwise (projects page) it renders both, plus a "Source private" note.
 */
export function ProjectButtons({
  live,
  liveLabel,
  repo,
  privateSource,
  single = false,
  marginTop = "22px",
}) {
  const { tokens: t } = useTheme();

  const liveBtn = live ? (
    <GlassButton
      href={live}
      target="_blank"
      rel="noopener"
      fontSize="13px"
      padding="9px 16px"
    >
      <span style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
        {liveLabel || "Live"}
        <ArrowIcon />
      </span>
    </GlassButton>
  ) : null;

  const repoBtn = repo ? (
    <GlassButton
      href={repo}
      target="_blank"
      rel="noopener"
      fontSize="13px"
      padding="9px 16px"
    >
      <span style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
        Github
        <CodeIcon />
      </span>
    </GlassButton>
  ) : null;

  let content;
  if (single) {
    content = liveBtn || repoBtn;
    if (!content) return null;
  } else {
    if (!liveBtn && !repoBtn && !privateSource) return null;
    content = (
      <>
        {liveBtn}
        {repoBtn}
        {privateSource && (
          <span style={{ fontSize: "12.5px", color: t.c.textMuted }}>
            Source private
          </span>
        )}
      </>
    );
  }

  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
        marginTop,
        flexWrap: "wrap",
        alignItems: "center",
      }}
    >
      {content}
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
