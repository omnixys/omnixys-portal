'use client'

import type { Metadata } from "next";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { visionTheme } from "./theme/visionTheme";
import { AppShell } from "./components/shell/AppShell";
import { PageTransition } from "./components/shell/PageTransition";

// export const metadata: Metadata = {
//   title: "Nexys Travel",
//   description: "Luxury Travel Planner & Booking Platform",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body>
        <ThemeProvider theme={visionTheme}>
          <CssBaseline />
          <AppShell>
            <PageTransition>{children}</PageTransition>
          </AppShell>
        </ThemeProvider>
      </body>
    </html>
  );
}
