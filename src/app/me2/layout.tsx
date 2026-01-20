import type { Metadata } from "next";
import { Inter } from "next/font/google";

import MuiThemeProvider from "./MuiThemeProvider";
import { JSX } from "react";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Adrian's Portfolio",
  description: "Modern & Minimal JS Mastery Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/jsm-logo.png" sizes="any" />
      </head>
      <body className={inter.className}>
        <MuiThemeProvider>{children}</MuiThemeProvider>
      </body>
    </html>
  );
}
