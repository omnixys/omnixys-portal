"use client";

import { Stack, Button } from "@mui/material";

export function QuickActions() {
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="contained">New Trip</Button>
      <Button variant="outlined">Explore</Button>
      <Button variant="outlined">3D Globe</Button>
    </Stack>
  );
}
