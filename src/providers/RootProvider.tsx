"use client";

import React from "react";

import AppShell from "@/components/layout/AppShell";
import OnboardingModal from "@/components/onboarding/OnboardingModal";
import { CssBaseline } from "@mui/material";
import { usePathname } from "next/navigation";
import { ActiveEventProvider } from "./ActiveEventProvider";
import { AuthProvider } from "./AuthProvider";
import DateProvider from "./DateProvider";
import { DeviceProvider } from "./DeviceProvider";
import SwipeBackProvider from "./SwipeBackProvider";
import ThemeModeProvider from "./ThemeModeProvider";

type ProviderProps = { children: React.ReactNode };

export default function RootProvider({ children }: ProviderProps) {

  return (
    <DeviceProvider>
      <ThemeModeProvider>
        <CssBaseline />
        <AuthProvider>
          <ActiveEventProvider>
         {children}
          </ActiveEventProvider>
        </AuthProvider>
      </ThemeModeProvider>
    </DeviceProvider>
  );
}
