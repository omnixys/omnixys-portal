// components/category/FilterBar.tsx
"use client";

import { Box, MenuItem, TextField } from "@mui/material";

export function FilterBar() {
  return (
    <Box sx={{ display: "flex", gap: 2 }}>
      <TextField select size="small" label="Category" sx={{ minWidth: 160 }}>
        <MenuItem value="all">All</MenuItem>
        <MenuItem value="audio">Audio</MenuItem>
        <MenuItem value="gaming">Gaming</MenuItem>
      </TextField>

      <TextField select size="small" label="Price" sx={{ minWidth: 160 }}>
        <MenuItem value="any">Any</MenuItem>
        <MenuItem value="low">Low → High</MenuItem>
        <MenuItem value="high">High → Low</MenuItem>
      </TextField>

      <TextField select size="small" label="Rating" sx={{ minWidth: 140 }}>
        <MenuItem value="4">4★ & up</MenuItem>
        <MenuItem value="3">3★ & up</MenuItem>
      </TextField>
    </Box>
  );
}
