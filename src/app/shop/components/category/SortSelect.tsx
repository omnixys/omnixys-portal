// components/category/SortSelect.tsx
"use client";

import { MenuItem, TextField } from "@mui/material";

export function SortSelect() {
  return (
    <TextField select size="small" label="Sort by" sx={{ minWidth: 180 }}>
      <MenuItem value="relevance">Relevance</MenuItem>
      <MenuItem value="priceLow">Price: Low → High</MenuItem>
      <MenuItem value="priceHigh">Price: High → Low</MenuItem>
    </TextField>
  );
}
