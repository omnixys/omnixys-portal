"use client";

import { Button, Stack } from "@mui/material";

export function MainNav() {
  return (
    <Stack direction="row" spacing={1}>
      <Button sx={{ fontWeight: 500 }}>Deals</Button>
      <Button sx={{ fontWeight: 500 }}>What’s New</Button>
      <Button sx={{ fontWeight: 500 }}>Delivery</Button>
    </Stack>
  );
}
