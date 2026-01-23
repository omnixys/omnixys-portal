"use client";

import { Box, Button, Stack, Typography } from "@mui/material";
import {
  Home,
  Search,
  Mail,
  Bookmark,
  Work,
  Groups,
  MoreHoriz,
  Person,
  Notifications,
  Settings,
} from "@mui/icons-material";
import Link from "next/link";
import { link } from "fs";

const items = [
  { label: "Homepage", icon: <Home /> },
  { label: "Explore", icon: <Search />, link: "/feed/search" },
  { label: "Messages", icon: <Mail />, link: "/feed/messages" },
  { label: "Bookmarks", icon: <Bookmark />, link: "/feed/bookmarks" },
  {
    label: "Notifications",
    icon: <Notifications />,
    link: "/feed/notifications",
  },
  { label: "Jobs", icon: <Work /> },
  { label: "Communities", icon: <Groups /> },
  { label: "Profile", icon: <Person /> },
  { label: "Settings", icon: <Settings />, link: "/feed/settings" },
  { label: "More", icon: <MoreHoriz /> },
];

export default function LeftSidebar() {
  return (
    <Box
      width={260}
      position="sticky"
      top={0}
      height="100vh"
      display={{ xs: "none", md: "flex" }}
      flexDirection="column"
      justifyContent="space-between"
      py={2}
    >
      <Stack spacing={1}>
        <Typography fontWeight={700} fontSize={22} px={2}>
          LAMA
        </Typography>

        {items.map((item) => (
          <Link
            key={item.label}
            href={item.link || "/feed"}
            style={{ textDecoration: "none", color: "inherit" }}
          >
          <Button
            key={item.label}
            startIcon={item.icon}
            sx={{
              justifyContent: "flex-start",
              fontSize: 16,
              px: 2,
            }}
          >
            {item.label}
          </Button>
          </Link>
        ))}

        <Link href="/feed/compose/post">
          <Button variant="contained" fullWidth sx={{ borderRadius: 999 }}>
            Post
          </Button>
        </Link>
      </Stack>

      <Box px={2}>
        <Typography variant="caption" color="text.secondary">
          © 2026 Lama Social
        </Typography>
      </Box>
    </Box>
  );
}
