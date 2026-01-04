"use client";

import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import React, { JSX } from "react";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import BadgeIcon from "@mui/icons-material/Badge";
import EventSeatIcon from "@mui/icons-material/EventSeat";
import HomeIcon from "@mui/icons-material/Home";
import QrCodeScannerIcon from "@mui/icons-material/QrCodeScanner";

import { useActiveEvent } from "@/providers/ActiveEventProvider";
import { usePathname, useRouter } from "next/navigation";
import { useAuth } from "@/providers/AuthProvider";

type EventRole = "ADMIN" | "SECURITY" | "GUEST";

export default function NavigationMobile(): JSX.Element {
  const { isAuthenticated } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  const { activeEvent } = useActiveEvent();
  const role: EventRole = activeEvent?.myRole ?? "GUEST";

  const NAV: Record<
    EventRole,
    Array<{ label: string; value: string; icon: JSX.Element }>
  > = {
    ADMIN: [
      { label: "Home", value: "checkpoint", icon: <HomeIcon /> },
      { label: "Scan", value: "checkpoint/scan", icon: <QrCodeScannerIcon /> },
      { label: "Seats", value: "checkpoint/seats", icon: <EventSeatIcon /> },
      { label: "Profil", value: "checkpoint/me", icon: <AccountCircleIcon /> },
    ],
    SECURITY: [
      { label: "Home", value: "checkpoint", icon: <HomeIcon /> },
      { label: "Scan", value: "checkpoint/scan", icon: <QrCodeScannerIcon /> },
      { label: "Profil", value: "checkpoint/me", icon: <AccountCircleIcon /> },
    ],
    GUEST: [
      { label: "Home", value: "checkpoint", icon: <HomeIcon /> },
      { label: "QR", value: "checkpoint/my-qr", icon: <BadgeIcon /> },
      {
        label: "Mein Sitzplatz",
        icon: <EventSeatIcon />,
        value: "checkpoint/my-seat",
      },
      //{ label: "Plus", value: "my-plus-ones", icon: <GroupsIcon /> },
      { label: "Profil", value: "checkpoint/me", icon: <AccountCircleIcon /> },
    ],
  };

  const items = NAV[role];

  const activeValue = React.useMemo(() => {
    // Normalize pathname (strip /home layout)
    const normalizedPath = pathname.startsWith("/home")
      ? pathname.replace(/^\/home/, "") || "/checkpoint/"
      : pathname;

    // Home (root)
    if (normalizedPath === "/checkpoint/" || normalizedPath === "checkpoint/") {
      return "checkpoint/";
    }

    // Other routes
    const match = items.find((item) => {
      if (!item.value) return false;

      return (
        normalizedPath === `/${item.value}` ||
        normalizedPath.startsWith(`/${item.value}/`)
      );
    });

    return match?.value ?? "";
  }, [pathname, items]);

  return (
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0, borderRadius: 0 }}
      elevation={12}
    >
      {isAuthenticated && (
        <>
          <BottomNavigation
            value={activeValue}
            onChange={(_, next) => router.push("/" + next)}
            showLabels
          >
            {items.map((item) => (
              <BottomNavigationAction
                key={item.value}
                value={item.value}
                label={item.label}
                icon={item.icon}
              />
            ))}
          </BottomNavigation>
        </>
      )}
    </Paper>
  );
}
