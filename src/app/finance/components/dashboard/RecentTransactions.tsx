"use client";

import { Card, CardContent, Typography, Stack, Box } from "@mui/material";

const transactions = [
  { name: "Spotify", amount: -12.99 },
  { name: "Salary", amount: 3200 },
  { name: "Amazon", amount: -86.4 },
];

export default function RecentTransactions() {
  return (
    <Card>
      <CardContent>
        <Typography variant="body2" color="text.secondary" mb={2}>
          Recent Transactions
        </Typography>

        <Stack spacing={1.5}>
          {transactions.map((tx) => (
            <Box key={tx.name} display="flex" justifyContent="space-between">
              <Typography>{tx.name}</Typography>
              <Typography
                fontWeight={600}
                color={tx.amount > 0 ? "success.main" : "error.main"}
              >
                {tx.amount > 0 ? "+" : "-"}€{Math.abs(tx.amount).toFixed(2)}
              </Typography>
            </Box>
          ))}
        </Stack>
      </CardContent>
    </Card>
  );
}
