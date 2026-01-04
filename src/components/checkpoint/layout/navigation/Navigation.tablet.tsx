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
import { JSX } from "react";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import BadgeIcon from "@mui/icons-material/Badge";
import DashboardIcon from "@mui/icons-material/Dashboard";
import EventSeatIcon from "@mui/icons-material/EventSeat";
import QrCodeScannerIcon from "@mui/icons-material/QrCodeScanner";

import { useAuth } from "@/providers/AuthProvider";
import EventSelector from "@/components/checkpoint/Selectors/EventSelector";
import { useActiveEvent } from "@/providers/ActiveEventProvider";
import { usePathname, useRouter } from "next/navigation";

type EventRole = "ADMIN" | "SECURITY" | "GUEST";

export default function NavigationTablet(): JSX.Element {
  const { isAuthenticated } = useAuth();
  const router = useRouter();
  const pathname = usePathname();
  const current = pathname.split("/checkpoint/")[1] ?? "checkpoint/home";

  const { activeEvent } = useActiveEvent();
  const role: EventRole = activeEvent?.myRole ?? "GUEST";

  const NAV: Record<
    EventRole,
    Array<{ label: string; icon: JSX.Element; path: string }>
  > = {
    ADMIN: [
      { label: "Home", icon: <DashboardIcon />, path: "checkpoint/home" },
      { label: "Scan", icon: <QrCodeScannerIcon />, path: "checkpoint/scan" },
      { label: "Seats", icon: <EventSeatIcon />, path: "checkpoint/seats" },
      { label: "Profil", icon: <AccountCircleIcon />, path: "checkpoint/me" },
    ],
    SECURITY: [
      { label: "Scan", icon: <QrCodeScannerIcon />, path: "checkpoint/scan" },
      { label: "Profil", icon: <AccountCircleIcon />, path: "checkpoint/me" },
    ],
    GUEST: [
      { label: "Mein Ticket", icon: <BadgeIcon />, path: "checkpoint/my-qr" },
      // { label: "Plus-Ones", icon: <GroupsIcon />, path: "my-plus-ones" },
      { label: "Profil", icon: <AccountCircleIcon />, path: "checkpoint/me" },
      {
        label: "Mein Sitzplatz",
        icon: <EventSeatIcon />,
        path: "checkpoint/my-seat",
      },
    ],
  };

  const items = NAV[role];

  return (
    <Box
      sx={{
        width: 220,
        backgroundColor: (t) => t.palette.apple.secondarySystemBackground,
        borderRight: (t) => `1px solid ${t.palette.apple.separator}`,
        height: "100dvh",
        p: 2,
      }}
    >
      <Typography variant="h5" fontWeight={700} mb={2}>
        Checkpoint
      </Typography>

      {isAuthenticated && (
        <>
          <Divider sx={{ my: 2 }} />

          <EventSelector />

          <Divider sx={{ my: 2 }} />

          <List>
            {items.map((item) => (
              <ListItemButton
                key={item.path}
                selected={current === item.path}
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
    </Box>
  );
}
