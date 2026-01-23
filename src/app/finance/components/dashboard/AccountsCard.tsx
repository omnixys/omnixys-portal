"use client";

import { Card, CardContent, Typography, Stack, Box } from "@mui/material";

const accounts = [
  { name: "Main Account", balance: 18520.4 },
  { name: "Savings", balance: 24160.1 },
];

export default function AccountsCard() {
  return (
    <Card>
      <CardContent>
        <Typography variant="body2" color="text.secondary" mb={2}>
          Accounts
        </Typography>

        <Stack spacing={1.5}>
          {accounts.map((acc) => (
            <Box key={acc.name} display="flex" justifyContent="space-between">
              <Typography>{acc.name}</Typography>
              <Typography fontWeight={600}>
                €{acc.balance.toLocaleString()}
              </Typography>
            </Box>
          ))}
        </Stack>
      </CardContent>
    </Card>
  );
}
