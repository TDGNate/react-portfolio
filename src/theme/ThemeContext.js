import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { getTokens } from "./tokens";

const ThemeContext = createContext(null);

const STORAGE_KEY = "nate-theme";

// Resolve the initial theme: URL ?theme -> localStorage -> system, in that order.
function resolveInitialMode() {
  try {
    const q = new URLSearchParams(window.location.search).get("theme");
    if (q === "light" || q === "dark") return q;
  } catch (e) {}
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "light" || saved === "dark") return saved;
  } catch (e) {}
  if (
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    return "dark";
  }
  return "light";
}

export function ThemeProvider({ children }) {
  const [mode, setMode] = useState(resolveInitialMode);

  const isDark = mode === "dark";

  // Keep the document in sync so global CSS ([data-theme="dark"] ...) works
  // and so the browser paints the correct scrollbar / form colors.
  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("data-theme", mode);
    root.style.colorScheme = mode;
  }, [mode]);

  const toggle = () => {
    setMode((m) => {
      const next = m === "light" ? "dark" : "light";
      try {
        localStorage.setItem(STORAGE_KEY, next);
      } catch (e) {}
      return next;
    });
  };

  const tokens = useMemo(() => getTokens(isDark), [isDark]);

  const value = useMemo(
    () => ({ mode, isDark, toggle, tokens }),
    [mode, isDark, tokens]
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within a ThemeProvider");
  return ctx;
}
