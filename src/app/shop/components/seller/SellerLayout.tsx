// components/seller/SellerLayout.tsx
"use client";

import { Box } from "@mui/material";
import { SellerSidebar } from "./SellerSidebar";

export function SellerLayout({ children }: { children: React.ReactNode }) {
  return (
    <Box sx={{ display: "flex", minHeight: "100vh", backgroundColor: "#fff" }}>
      <SellerSidebar />

      <Box sx={{ flex: 1, px: 6, py: 4 }}>{children}</Box>
    </Box>
  );
}
