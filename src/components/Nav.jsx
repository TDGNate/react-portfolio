import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../theme/ThemeContext";
import { SolidButton } from "./ui";
import { RESUME_URL } from "../data/portfolio";

// One nav entry — renders a router <Link> (cross-page) or a plain <a> (same-page
// hash anchor), with the shared data-navlink hover-glow hook.
function NavLink({ item, onClick, style }) {
  const { tokens: t } = useTheme();
  const color = item.active ? t.c.text : t.c.textMuted;
  const weight = item.active ? 700 : 500;
  const shared = {
    "data-navlink": true,
    onClick,
    style: { color, fontWeight: weight, ...style },
  };
  if (item.to) {
    return (
      <Link to={item.to} {...shared}>
        {item.label}
      </Link>
    );
  }
  return (
    <a href={item.href} {...shared}>
      {item.label}
    </a>
  );
}

export default function Nav() {
  const { tokens: t, isDark, toggle } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const onProjects = location.pathname.startsWith("/projects");

  const links = onProjects
    ? [
        { label: "About", to: "/#about" },
        { label: "Skills", to: "/#skills" },
        { label: "Projects", to: "/projects", active: true },
        { label: "Faith", to: "/#faith" },
        { label: "Contact", to: "/#contact" },
      ]
    : [
        { label: "About", href: "#about" },
        { label: "Skills", href: "#skills" },
        { label: "Projects", href: "#projects" },
        { label: "Faith", href: "#faith" },
        { label: "Contact", href: "#contact" },
      ];

  const closeMenu = () => setMenuOpen(false);

  const themeToggle = (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      style={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
        background: t.c.trackBg,
        border: `1px solid ${t.c.surfaceBorder}`,
        borderRadius: "999px",
        padding: "4px",
        cursor: "pointer",
      }}
    >
      <div
        style={{
          width: "34px",
          height: "20px",
          borderRadius: "999px",
          background: t.c.trackInner,
          position: "relative",
          transition: "background 0.3s ease",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "2px",
            left: isDark ? "16px" : "2px",
            width: "16px",
            height: "16px",
            borderRadius: "50%",
            background: t.c.accent,
            transition: "left 0.25s ease",
            boxShadow: "0 1px 4px rgba(0,0,0,0.3)",
          }}
        />
      </div>
      <span style={{ fontSize: "12px", color: t.c.textMuted, paddingRight: "4px" }}>
        {isDark ? "Dark" : "Light"}
      </span>
    </button>
  );

  const logo = onProjects ? (
    <Link
      to="/#top"
      data-navlink
      style={{
        fontFamily: "'Space Grotesk', sans-serif",
        fontWeight: 600,
        fontSize: "17px",
        letterSpacing: "-0.01em",
        color: t.c.text,
      }}
    >
      Nate Mc
</Link>
  ) : (
    <a
      href="#top"
      data-navlink
      style={{
        fontFamily: "'Space Grotesk', sans-serif",
        fontWeight: 600,
        fontSize: "17px",
        letterSpacing: "-0.01em",
        color: t.c.text,
      }}
    >
      Nate Mc
</a>
  );

  return (
    <nav
      style={{
        position: "sticky",
        top: "14px",
        zIndex: 60,
        maxWidth: "1040px",
        margin: "0 auto",
        padding: "0 20px",
      }}
    >
      <div
        style={{
          position: "relative",
          borderRadius: "999px",
          overflow: "hidden",
          boxShadow: `0 8px 30px ${t.c.shadow}`,
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backdropFilter: `blur(${t.blurStrong}px) saturate(180%)`,
            WebkitBackdropFilter: `blur(${t.blurStrong}px) saturate(180%)`,
            background: t.c.navBg,
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
            alignItems: "center",
            justifyContent: "space-between",
            gap: "16px",
            padding: "12px 10px 12px 22px",
          }}
        >
          {logo}
          <div
            data-nav-links=""
            style={{
              display: "flex",
              alignItems: "center",
              gap: "26px",
              fontSize: "14.5px",
              fontWeight: 500,
              color: t.c.textMuted,
            }}
          >
            {links.map((item) => (
              <NavLink key={item.label} item={item} />
            ))}
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            {themeToggle}
            {onProjects ? (
              <SolidButton to="/" fontSize="14px" padding="9px 18px">
                ← Home
              </SolidButton>
            ) : (
              <SolidButton
                href={RESUME_URL}
                target="_blank"
                rel="noopener"
                fontSize="14px"
                padding="9px 18px"
              >
                Resume
              </SolidButton>
            )}
            <button
              data-nav-burger=""
              onClick={() => setMenuOpen((o) => !o)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              style={{
                display: "none",
                alignItems: "center",
                justifyContent: "center",
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                background: "transparent",
                border: `1px solid ${t.c.surfaceBorder}`,
                cursor: "pointer",
                color: t.c.text,
                fontSize: "16px",
              }}
            >
              ☰
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div
          id="mobile-menu"
          style={{
            position: "relative",
            marginTop: "8px",
            borderRadius: "20px",
            overflow: "hidden",
            boxShadow: `0 8px 30px ${t.c.shadow}`,
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              backdropFilter: `blur(${t.blurStrong}px) saturate(180%)`,
              WebkitBackdropFilter: `blur(${t.blurStrong}px) saturate(180%)`,
              background: t.c.navBg,
            }}
          />
          <div
            style={{
              position: "relative",
              zIndex: 1,
              display: "flex",
              flexDirection: "column",
              padding: "14px 22px",
              gap: "14px",
              fontSize: "15px",
              fontWeight: 500,
            }}
          >
            {links.map((item) => (
              <NavLink
                key={item.label}
                item={item}
                onClick={closeMenu}
                style={{ color: item.active ? t.c.text : t.c.text }}
              />
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
