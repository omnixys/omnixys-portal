"use client";

import {
  Box,
  Divider,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { JSX, useMemo } from "react";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import BadgeIcon from "@mui/icons-material/Badge";
import DashboardIcon from "@mui/icons-material/Dashboard";
import EventSeatIcon from "@mui/icons-material/EventSeat";
import HomeIcon from "@mui/icons-material/Home";
import QrCodeScannerIcon from "@mui/icons-material/QrCodeScanner";

import { useActiveEvent } from "@/providers/ActiveEventProvider";
import { usePathname, useRouter } from "next/navigation";

import ThemeToggleButton from "@/components/checkpoint/ui/ThemeToggleButton";
import { useAuth } from "@/providers/AuthProvider";
import EventSelector from "@/components/checkpoint/Selectors/EventSelector";
import ColorBubbleSwitcher from "@/components/checkpoint/ui/ColorBubbleSwitcher";
import UserMenu from "@/components/checkpoint/ui/UserMenu";
import Link from "next/link";

type EventRole = "ADMIN" | "SECURITY" | "GUEST";

export default function NavigationDesktop(): JSX.Element {
  const { isAuthenticated } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  const { activeEvent } = useActiveEvent();
  const role: EventRole = activeEvent?.myRole ?? "GUEST";

  const current = pathname.split("/checkpoint/")[1] ?? "checkpoint/home";

  const NAV: Record<
    EventRole,
    Array<{ label: string; icon: JSX.Element; path: string; disabled: boolean }>
  > = {
    ADMIN: [
      {
        label: "Home",
        icon: <DashboardIcon />,
        path: "checkpoint",
        disabled: false,
      },
      {
        label: "Scanner",
        icon: <QrCodeScannerIcon />,
        path: "checkpoint/scan",
        disabled: false,
      },
      {
        label: "Seats",
        icon: <EventSeatIcon />,
        path: "checkpoint/seats",
        disabled: false,
      },
      {
        label: "Profil",
        icon: <AccountCircleIcon />,
        path: "checkpoint/me",
        disabled: false,
      },
    ],
    SECURITY: [
      {
        label: "Scanner",
        icon: <QrCodeScannerIcon />,
        path: "checkpoint/scan",
        disabled: false,
      },
      {
        label: "Profil",
        icon: <AccountCircleIcon />,
        path: "checkpoint/me",
        disabled: false,
      },
    ],
    GUEST: [
      {
        label: "Home",
        icon: <HomeIcon />,
        path: "checkpoint",
        disabled: false,
      },
      {
        label: "Mein Ticket",
        icon: <BadgeIcon />,
        path: "checkpoint/my-qr",
        disabled: false,
      },

      {
        label: "Mein Sitzplatz",
        icon: <EventSeatIcon />,
        path: "checkpoint/my-seat",
        disabled: false,
      },
      // { label: "Plus-Ones", icon: <GroupsIcon />, path: "my-plus-ones", disabled: true },
      {
        label: "Profil",
        icon: <AccountCircleIcon />,
        path: "checkpoint/me",
        disabled: false,
      },
    ],
  };

  const items = NAV[role];

  const activePath = useMemo(() => {
    // Strip /home layout
    const normalizedPath = pathname.startsWith("/checkpoint/home")
      ? pathname.replace(/^\/home/, "") || "/checkpoint/"
      : pathname;

    if (normalizedPath === "/checkpoint/" || normalizedPath === "/checkpoint") {
      return "checkpoint";
    }

    const match = items.find((item) => {
      if (!item.path) return false;

      return (
        normalizedPath === `/checkpoint/${item.path}` ||
        normalizedPath.startsWith(`/checkpoint/${item.path}/`)
      );
    });

    return match?.path ?? "checkpoint/";
  }, [pathname, items]);

  return (
    <Box
      sx={{
        width: 260,
        display: "flex",
        flexDirection: "column",
        height: "100dvh",
        borderRight: (t) => `1px solid ${t.palette.apple.separator}`,
        backgroundColor: (t) => t.palette.apple.systemBackground,
        p: 3,
      }}
    >
      <Typography
        variant="h5"
        fontWeight={700}
        mb={2}
        component={Link}
        href="/checkpoint"
        sx={{
          cursor: "pointer",
          textDecoration: "none",
          transition: "opacity 0.2s ease, transform 0.2s ease",
          "&:hover": {
            opacity: 0.85,
            transform: "translateY(-1px)",
          },
        }}
      >
        Checkpoint
      </Typography>

      <Divider sx={{ mb: 2 }} />
      {isAuthenticated && (
        <>
          <EventSelector />

          <Divider sx={{ my: 2 }} />

          <List sx={{ flexGrow: 1 }}>
            {items.map((item) => (
              <ListItemButton
                key={item.path}
                disabled={item.disabled}
                selected={activePath === item.path}
                onClick={() => router.push("/" + item.path)}
                sx={{ borderRadius: 2 }}
              >
                <ListItemIcon sx={{ minWidth: 36 }}>{item.icon}</ListItemIcon>
                <ListItemText primary={item.label} />
              </ListItemButton>
            ))}
          </List>
        </>
      )}

      <Box
        sx={{
          mt: "auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          pt: 2,
        }}
      >
        <ColorBubbleSwitcher />
        <ThemeToggleButton />
        <UserMenu />
      </Box>
    </Box>
  );
}
