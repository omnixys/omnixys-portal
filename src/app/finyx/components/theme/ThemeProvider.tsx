"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { ThemeProvider as MuiThemeProvider } from "@mui/material";
import { darkTheme } from "../../theme/dark";
import { lightTheme } from "../../theme/light";

type ThemeMode = "light" | "dark" | "system";

type ThemeContextType = {
  mode: ThemeMode;
  setMode: (mode: ThemeMode) => void;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

export function AppThemeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState<ThemeMode>("system");

  useEffect(() => {
    const saved = localStorage.getItem("theme-mode") as ThemeMode;
    if (saved) setMode(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("theme-mode", mode);
  }, [mode]);

  const resolvedTheme = useMemo(() => {
    if (mode === "system") {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)",
      ).matches;
      return prefersDark ? darkTheme : lightTheme;
    }
    return mode === "dark" ? darkTheme : lightTheme;
  }, [mode]);

  return (
    <ThemeContext.Provider value={{ mode, setMode }}>
      <MuiThemeProvider theme={resolvedTheme}>{children}</MuiThemeProvider>
    </ThemeContext.Provider>
  );
}

export function useThemeMode() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("ThemeContext not found");
  return ctx;
}
