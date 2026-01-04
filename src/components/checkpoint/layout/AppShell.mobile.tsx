"use client";

import ThemeToggleButton from "@/components/checkpoint/ui/ThemeToggleButton";
import { Box } from "@mui/material";
import React, { useState } from "react";
import { useAuth } from "@/providers/AuthProvider";
import { AppleNavBar } from "@/components/checkpoint/apple/AppleNavBar";
import EventSelectorActionSheet from "@/components/checkpoint/Selectors/EventSelectorActionSheet";
import EventSelectorMobileButton from "@/components/checkpoint/Selectors/EventSelectorMobileButton";
import UserMenu from "@/components/checkpoint/ui/UserMenu";
import NavigationMobile from "./navigation/Navigation.mobile";

export default function AppShellMobile({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const { isAuthenticated } = useAuth();

  return (
    <Box
      sx={{
        width: "100%",
        height: "100dvh",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden", // body ignorieren
      }}
    >
      {/* Sticky TopBar */}
      <Box
        sx={{
          position: "sticky",
          top: 0,
          zIndex: 100,
        }}
      >
        <AppleNavBar
          title="Checkpoint"
          rightActions={
            <>
              <ThemeToggleButton />

              {isAuthenticated && (
                <EventSelectorMobileButton onOpen={() => setOpen(true)} />
              )}

              <UserMenu />
            </>
          }
        />
      </Box>

      {/* Content scrollt separat */}
      <Box
        sx={{
          flexGrow: 1,
          overflowY: "auto",
          p: 2,
        }}
      >
        {children}
      </Box>

      {/* Sticky BottomBar */}
      <Box
        sx={{
          position: "sticky",
          bottom: 0,
          zIndex: 120,
        }}
      >
        <NavigationMobile />
      </Box>

      <EventSelectorActionSheet open={open} onClose={() => setOpen(false)} />
    </Box>
  );
}
