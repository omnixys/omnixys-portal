"use client";

import { Stack, Button } from "@mui/material";

export default function TransactionActions() {
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="outlined" fullWidth>
        Change Category
      </Button>
      <Button variant="outlined" fullWidth>
        Add Note
      </Button>
    </Stack>
  );
}
