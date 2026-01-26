"use client";

import { ThemeProvider, CssBaseline } from "@mui/material";
import { AppThemeProvider } from "./components/theme/ThemeProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* <AppThemeProvider> */}
          <CssBaseline />
          {children}
        {/* </AppThemeProvider> */}
      </body>
    </html>
  );
}
