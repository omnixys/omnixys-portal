"use client";

import {
  Card,
  CardContent,
  Typography,
  LinearProgress,
  Stack,
} from "@mui/material";

const budgets = [
  { label: "Food", used: 420, limit: 500 },
  { label: "Shopping", used: 310, limit: 300 },
];

export default function BudgetOverview() {
  return (
    <Card>
      <CardContent>
        <Typography variant="body2" color="text.secondary" mb={2}>
          Budgets
        </Typography>

        <Stack spacing={2}>
          {budgets.map((b) => {
            const percent = (b.used / b.limit) * 100;

            return (
              <div key={b.label}>
                <Typography fontWeight={500}>
                  {b.label} – €{b.used} / €{b.limit}
                </Typography>

                <LinearProgress
                  variant="determinate"
                  value={percent}
                  color={percent > 100 ? "error" : "primary"}
                  sx={{ height: 8, borderRadius: 4 }}
                />
              </div>
            );
          })}
        </Stack>
      </CardContent>
    </Card>
  );
}
