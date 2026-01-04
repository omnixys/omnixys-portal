"use client";

import { CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";
import { triggerAccentPulse } from "@/lib/accent-animation";
import {
  AppThemeMode,
  OmnixysColorScheme,
  createAppTheme,
} from "@/themes/theme";

// -------------------------------------------------------------
// Context Types
// -------------------------------------------------------------
type ThemeModeContextValue = {
  mode: AppThemeMode;
  scheme: OmnixysColorScheme;
  setMode: (m: AppThemeMode) => void;
  setScheme: (s: OmnixysColorScheme) => void;
  toggle: () => void;
};

// -------------------------------------------------------------
// React Context
// -------------------------------------------------------------
export const ThemeModeContext =
  React.createContext<ThemeModeContextValue | null>(null);

// Storage keys
const STORAGE_MODE = "checkpoint.theme.mode";
const STORAGE_SCHEME = "checkpoint.theme.scheme";

export default function ThemeModeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  // Light/Dark
  const [mode, setMode] = React.useState<AppThemeMode>("light");

  // Omnixys color scheme
  const [scheme, setScheme] = React.useState<OmnixysColorScheme>("original");

  // -------------------------------------------------------------
  //  Load mode + scheme from localStorage
  // -------------------------------------------------------------
  React.useEffect(() => {
    const savedMode = window.localStorage.getItem(
      STORAGE_MODE
    ) as AppThemeMode | null;

    const savedScheme = window.localStorage.getItem(
      STORAGE_SCHEME
    ) as OmnixysColorScheme | null;

    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    setMode(savedMode ?? (prefersDark ? "dark" : "light"));
    setScheme(savedScheme ?? "original");
  }, []);

  // -------------------------------------------------------------
  // Add smooth iOS fade transition on theme change
  // -------------------------------------------------------------
  React.useEffect(() => {
    const root = document.documentElement;
    root.classList.add("theme-transition");

    // Read new theme primary color
    const accent = getComputedStyle(document.documentElement)
      .getPropertyValue("--mui-palette-primary-main")
      .trim();

    // Trigger accent pulse
    triggerAccentPulse(accent);

    const timeout = setTimeout(() => {
      root.classList.remove("theme-transition");
    }, 350);

    return () => clearTimeout(timeout);
  }, [mode, scheme]);

  // -------------------------------------------------------------
  // Context value
  // -------------------------------------------------------------
  const value = React.useMemo(
    () => ({
      mode,
      scheme,

      setMode: (m: AppThemeMode) => {
        window.localStorage.setItem(STORAGE_MODE, m);
        setMode(m);
      },

      setScheme: (s: OmnixysColorScheme) => {
        window.localStorage.setItem(STORAGE_SCHEME, s);
        setScheme(s);
      },

      toggle: () => {
        const next = mode === "dark" ? "light" : "dark";
        window.localStorage.setItem(STORAGE_MODE, next);
        setMode(next);
      },
    }),
    [mode, scheme]
  );

  // Create theme with both mode + scheme
  const theme = createAppTheme(mode, scheme);

  return (
    <ThemeModeContext.Provider value={value}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeModeContext.Provider>
  );
}

// -------------------------------------------------------------
// Custom Hook
// -------------------------------------------------------------
export function useThemeMode() {
  const ctx = React.useContext(ThemeModeContext);
  if (!ctx)
    throw new Error("useThemeMode must be used within ThemeModeProvider");
  return ctx;
}
