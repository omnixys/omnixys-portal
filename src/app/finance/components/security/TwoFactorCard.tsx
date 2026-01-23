"use client";

import {
  Card,
  CardContent,
  Typography,
  Stack,
  Switch,
  Button,
} from "@mui/material";

export default function TwoFactorCard() {
  return (
    <Card>
      <CardContent>
        <Stack spacing={2}>
          <Typography variant="h4">Two-Factor Authentication</Typography>

          <Typography color="text.secondary">
            Add an extra layer of security to your account.
          </Typography>

          <Stack direction="row" justifyContent="space-between">
            <Typography>2FA Enabled</Typography>
            <Switch checked />
          </Stack>

          <Button variant="outlined">Manage 2FA Methods</Button>
        </Stack>
      </CardContent>
    </Card>
  );
}
