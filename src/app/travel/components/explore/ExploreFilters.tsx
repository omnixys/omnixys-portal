"use client";

import { Stack, TextField } from "@mui/material";

export function ExploreFilters() {
  return (
    <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
      <TextField label="Destination" fullWidth />
      <TextField label="Budget (€)" fullWidth />
      <TextField label="Date" fullWidth />
    </Stack>
  );
}
