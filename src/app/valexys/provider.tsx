"use client";

import React from "react";

import { CssBaseline, ThemeProvider } from "@mui/material";
import { DeviceProvider } from "../../providers/DeviceProvider";
import theme from "./theme/theme";
type ProviderProps = { children: React.ReactNode };

export default function Provider({ children }: ProviderProps) {
  return (
    <DeviceProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </DeviceProvider>
  );
}
