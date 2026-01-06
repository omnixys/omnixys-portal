'use client';

import { CssBaseline, ThemeProvider } from '@mui/material';
import { SessionProvider } from 'next-auth/react';
import { Inter } from 'next/font/google';
import MotionLayout from '@/components/common/MotionLayout';
import { MotionProvider } from '@/components/common/MotionProvider';
import NavigationProgress from '@/components/common/NavigationProgress';
import { ProgressBarProvider } from '@/components/common/PageProgressBar';
import Navbar from '@/components/Navbar';
import { SettingsProvider } from '@/context/SettingsContext';
import { SidebarProvider } from '@/context/SidebarContext';
import { ColorModeProvider, useColorMode } from '@/themes/ColorModeContext';
import {
  ColorSchemeProvider,
  useColorScheme,
} from '@/themes/ColorSchemeContext';
import SettingsGate from '@/app/(nexys)/settings/SettingsGate';
import themeFactory from '@/themes/[ORIGINAL]theme';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({ subsets: ['latin'] });

function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SettingsProvider>
      <SettingsGate>
        <ColorModeProvider>
          <ColorSchemeProvider>
            <SidebarProvider>
              <ThemeWrapper>
                <ProgressBarProvider>
                  <MotionProvider>
                    <NavigationProgress />
                    {/* <PageTransitionOverlay /> */}
                    <MotionLayout>{children}</MotionLayout>
                  </MotionProvider>
                </ProgressBarProvider>
              </ThemeWrapper>
            </SidebarProvider>
          </ColorSchemeProvider>
        </ColorModeProvider>
      </SettingsGate>
    </SettingsProvider>
  );
}

function ThemeWrapper({ children }: { children: React.ReactNode }) {
  const { scheme } = useColorScheme();
  const { mode } = useColorMode(); // optional: erweitern, falls du den Modus im Kontext speicherst
  const theme = themeFactory(mode, scheme);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      {children}
    </ThemeProvider>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SpeedInsights />
        <Analytics />
        <SessionProvider>
          <Providers>{children}</Providers>
        </SessionProvider>
      </body>
    </html>
  );
}
