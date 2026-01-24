"use client";

import { Box } from "@mui/material";

interface GlassCardProps {
  children: React.ReactNode;
}

export function GlassCard({ children }: GlassCardProps) {
  return (
    <Box
      sx={{
        background: "rgba(255,255,255,0.75)",
        backdropFilter: "blur(24px)",
        border: "1px solid rgba(255,255,255,0.4)",
        borderRadius: 4,
        boxShadow: "0 30px 60px rgba(0,0,0,0.08)",
        p: 3,
      }}
    >
      {children}
    </Box>
  );
}
