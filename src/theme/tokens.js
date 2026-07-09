// Design tokens — a faithful port of the "renderVals()" logic from the
// Claude-designed handoff (Home.dc.html / Projects.dc.html).
//
// The prototype exposed three tweakable knobs (accent palette, glass intensity,
// gradient richness). We hardcode the shipped defaults here:
//   accent  = purple -> blue  (#8b5cf6 -> #38bdf8)
//   glass   = intensity 8
//   gradient = "Rich"
// Everything else (blur amounts, glass tint/edge, radial page wash) is derived
// exactly as the design did, so both themes reproduce the intended look.

export const ACCENT_1 = "#8b5cf6"; // purple
export const ACCENT_2 = "#38bdf8"; // blue
export const ACCENT_GRADIENT = `linear-gradient(135deg, ${ACCENT_1}, ${ACCENT_2})`;

const GLASS_INTENSITY = 8;
const RICH = true; // gradientStyle === "Rich"

const PALETTE = {
  light: {
    bg: "oklch(98% 0.006 300)",
    bgAlt: "oklch(95% 0.014 300)",
    surface: "rgba(255,255,255,0.55)",
    surfaceBorder: "rgba(255,255,255,0.85)",
    navBg: "rgba(255,255,255,0.6)",
    text: "oklch(22% 0.02 300)",
    textMuted: "oklch(46% 0.03 300)",
    accent: "oklch(62% 0.17 300)",
    accentDeep: "oklch(46% 0.16 300)",
    onAccent: "oklch(99% 0.005 300)",
    shadow: "rgba(40,20,50,0.14)",
    trackBg: "rgba(0,0,0,0.03)",
    trackInner: "rgba(0,0,0,0.12)",
    onStripe: "rgba(40,30,45,0.55)",
  },
  dark: {
    bg: "oklch(13% 0.02 300)",
    bgAlt: "oklch(18% 0.026 300)",
    surface: "rgba(255,255,255,0.06)",
    surfaceBorder: "rgba(255,255,255,0.14)",
    navBg: "rgba(20,16,26,0.55)",
    text: "oklch(95% 0.006 300)",
    textMuted: "oklch(70% 0.03 300)",
    accent: "oklch(72% 0.17 300)",
    accentDeep: "oklch(82% 0.14 300)",
    onAccent: "oklch(15% 0.03 300)",
    shadow: "rgba(0,0,0,0.55)",
    trackBg: "rgba(255,255,255,0.04)",
    trackInner: "rgba(255,255,255,0.16)",
    onStripe: "rgba(255,255,255,0.5)",
  },
};

const toHex = (n) =>
  Math.max(0, Math.min(255, Math.round(n))).toString(16).padStart(2, "0");

/**
 * Returns the full computed token set for the given mode.
 * @param {boolean} isDark
 */
export function getTokens(isDark) {
  const accent1 = ACCENT_1;
  const accent2 = ACCENT_2;
  const accentGradient = ACCENT_GRADIENT;

  const c = { ...PALETTE[isDark ? "dark" : "light"] };
  // soft colored bloom added to every panel drop shadow
  c.shadow = `${c.shadow}, 0 0 60px ${accent1}26`;

  const gi = GLASS_INTENSITY;
  const blurStrong = Math.round(12 + gi * 1.6); // ~25px
  const blurSoft = Math.round(8 + gi * 1.1); // ~17px

  const glassTint = `linear-gradient(135deg, ${accent1}${toHex(
    9 + gi * 2
  )} 0%, ${accent2}${toHex(7 + gi * 1.6)} 100%), ${c.surface}`;

  const glassRim = isDark ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.55)";
  const glassEdge = `inset 0 1px 1px rgba(255,255,255,0.4), inset 0 -2px 6px rgba(255,255,255,0.06), inset 0 0 0 1px ${glassRim}, inset 0 0 22px rgba(255,255,255,0.08)`;

  const subtleBorder = isDark ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.07)";

  const skillsBlur = blurStrong + 12; // extra-blurry skill cards
  const skillsTint = `linear-gradient(135deg, ${accent1}${toHex(
    6 + gi
  )} 0%, ${accent2}${toHex(5 + gi * 0.8)} 100%), ${
    isDark ? "rgba(255,255,255,0.03)" : "rgba(255,255,255,0.32)"
  }`;

  const richBlobOpacity = RICH ? 0.4 : 0.16;
  const rootBg = RICH
    ? `radial-gradient(1100px 780px at 4% -22%, ${accent1}20, transparent 62%), radial-gradient(1000px 720px at 99% -2%, ${accent2}18, transparent 58%), radial-gradient(1300px 780px at 50% 112%, ${accent1}32, transparent 58%), ${c.bg}`
    : c.bg;

  // striped placeholder gradients (kept for any card without a real image)
  const stripe = isDark
    ? "repeating-linear-gradient(135deg, oklch(24% 0.045 300) 0px, oklch(24% 0.045 300) 12px, oklch(21% 0.045 300) 12px, oklch(21% 0.045 300) 24px)"
    : "repeating-linear-gradient(135deg, oklch(92% 0.03 300) 0px, oklch(92% 0.03 300) 12px, oklch(89% 0.04 300) 12px, oklch(89% 0.04 300) 24px)";

  return {
    isDark,
    c,
    accent1,
    accent2,
    accentGradient,
    rootBg,
    richBlobOpacity,
    glassTint,
    glassEdge,
    subtleBorder,
    skillsBlur,
    skillsTint,
    blurStrong,
    blurSoft,
    stripe,
  };
}
