import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import TransitionProvider from "@/components/me/transitionProvider";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lama Dev Portfolio App",
  description: "The best animated portfolio page",
};

const theme = createTheme({
  typography: {
    fontFamily: inter.style.fontFamily,
  },
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* <ThemeProvider theme={theme}> */}
          <CssBaseline />
          <TransitionProvider>
            {children}
          </TransitionProvider>
        {/* </ThemeProvider> */}
      </body>
    </html>
  );
}
