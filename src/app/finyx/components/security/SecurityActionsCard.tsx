"use client";

import { Card, CardContent, Typography, Stack, Button } from "@mui/material";

export default function SecurityActionsCard() {
  return (
    <Card>
      <CardContent>
        <Typography variant="h4" mb={2}>
          Security Actions
        </Typography>

        <Stack spacing={2}>
          <Button color="error" variant="outlined">
            Log out from all devices
          </Button>

          <Button color="error" variant="outlined">
            Reset security settings
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
}
