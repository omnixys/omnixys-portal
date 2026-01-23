"use client";

import { Card, CardContent, Typography, Stack, Button } from "@mui/material";

const sessions = [
  {
    device: "MacBook Pro – Chrome",
    location: "Berlin, DE",
    current: true,
  },
  {
    device: "iPhone 15",
    location: "Berlin, DE",
  },
];

export default function DeviceSessionsCard() {
  return (
    <Card>
      <CardContent>
        <Typography variant="h4" mb={2}>
          Active Sessions
        </Typography>

        <Stack spacing={2}>
          {sessions.map((s, i) => (
            <Stack
              key={i}
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <div>
                <Typography fontWeight={500}>{s.device}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {s.location}
                  {s.current && " • Current"}
                </Typography>
              </div>

              {!s.current && (
                <Button size="small" color="error">
                  Revoke
                </Button>
              )}
            </Stack>
          ))}
        </Stack>
      </CardContent>
    </Card>
  );
}
