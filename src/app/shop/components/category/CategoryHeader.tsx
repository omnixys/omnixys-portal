// components/category/CategoryHeader.tsx
"use client";

import { Box, Typography } from "@mui/material";

export function CategoryHeader() {
  return (
    <Box sx={{ borderBottom: "1px solid #eee", py: 2 }}>
      <Box sx={{ maxWidth: 1300, mx: "auto", px: 3 }}>
        <Typography fontSize={13} color="text.secondary">
          Electronics / Audio / Headphones
        </Typography>
      </Box>
    </Box>
  );
}
