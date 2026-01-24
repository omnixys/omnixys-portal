"use client";

import { ReactNode } from "react";
import { Box, Stack, Button } from "@mui/material";
import Link from "next/link";

interface Props {
  children: ReactNode;
}

export function AppShell({ children }: Props) {
  return (
    <Stack spacing={3}>
      {/* TOP NAV */}
      <Box
        sx={{
          px: 6,
          py: 2,
          display: "flex",
          gap: 2,
          backdropFilter: "blur(20px)",
          background: "rgba(255,255,255,0.7)",
          position: "sticky",
          top: 0,
          zIndex: 10,
        }}
      >
        <Button component={Link} href="/">
          Home
        </Button>
        <Button component={Link} href="/explore">
          Explore
        </Button>
        <Button component={Link} href="/dashboard">
          Dashboard
        </Button>
        <Button component={Link} href="/globe">
          Globe
        </Button>
      </Box>

      {/* CONTENT */}
      <Box>{children}</Box>
    </Stack>
  );
}
