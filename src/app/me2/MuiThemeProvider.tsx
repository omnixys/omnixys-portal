"use client";

import { JSX, ReactNode, useMemo, useState } from "react";
import {
  CssBaseline,
  ThemeProvider,
  createTheme,
  PaletteMode,
} from "@mui/material";
import { useMediaQuery } from "@mui/material";

import { getDesignTokens } from "./theme";

interface Props {
  children: ReactNode;
}

export default function MuiThemeProvider({ children }: Props): JSX.Element {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const [mode] = useState<PaletteMode>(
    prefersDarkMode ? "dark" : "dark", // defaultTheme="dark"
  );

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
