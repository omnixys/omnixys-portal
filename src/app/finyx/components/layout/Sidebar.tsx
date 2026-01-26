"use client";

import {
  Box,
  Stack,
  Typography,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import {
  Home,
  CreditCard,
  ListAlt,
  Send,
  PieChart,
  Notifications,
  Settings,
} from "@mui/icons-material";
import { usePathname, useRouter } from "next/navigation";

const navItems = [
  { label: "Dashboard", icon: <Home />, path: "/finyx/dashboard" },
  { label: "Accounts", icon: <CreditCard />, path: "/finyx/accounts" },
  { label: "Transactions", icon: <ListAlt />, path: "/finyx/transactions" },
  { label: "Transfer", icon: <Send />, path: "/finyx/transfer" },
  { label: "Analytics", icon: <PieChart />, path: "/finyx/analytics" },
];

const secondaryItems = [
  { label: "Notifications", icon: <Notifications />, path: "/finyx/notifications" },
  { label: "Settings", icon: <Settings />, path: "/finyx/settings/security" },
];

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <Box
      width={260}
      minHeight="100vh"
      bgcolor="background.paper"
      px={2}
      py={3}
      boxShadow="1px 0 0 rgba(15,23,42,0.06)"
    >
      {/* Logo */}
      <Typography variant="h3" fontWeight={700} mb={4}>
        Horizon
      </Typography>

      {/* Main Navigation */}
      <List>
        {navItems.map((item) => {
          const active = pathname.startsWith(item.path);

          return (
            <ListItemButton
              key={item.label}
              onClick={() => router.push(item.path)}
              sx={{
                borderRadius: 2,
                mb: 0.5,
                bgcolor: active ? "primary.main" : "transparent",
                color: active ? "white" : "text.primary",
                "&:hover": {
                  bgcolor: active ? "primary.main" : "rgba(37,99,235,0.08)",
                },
              }}
            >
              <ListItemIcon
                sx={{
                  color: active ? "white" : "text.secondary",
                  minWidth: 40,
                }}
              >
                {item.icon}
              </ListItemIcon>

              <ListItemText primary={item.label} />
            </ListItemButton>
          );
        })}
      </List>

      {/* Spacer */}
      <Box flex={1} />

      {/* Secondary Navigation */}
      <List>
        {secondaryItems.map((item) => (
          <ListItemButton
            key={item.label}
            onClick={() => router.push(item.path)}
            sx={{ borderRadius: 2 }}
          >
            <ListItemIcon sx={{ minWidth: 40 }}>{item.icon}</ListItemIcon>
            <ListItemText primary={item.label} />
          </ListItemButton>
        ))}
      </List>
    </Box>
  );
}
