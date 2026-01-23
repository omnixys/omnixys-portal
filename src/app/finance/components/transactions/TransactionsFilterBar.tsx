"use client";

import { Card, CardContent, Stack, TextField, MenuItem } from "@mui/material";

export default function TransactionsFilterBar() {
  return (
    <Card>
      <CardContent>
        <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
          <TextField label="Search" placeholder="Merchant or note" fullWidth />

          <TextField select label="Category" sx={{ minWidth: 180 }}>
            <MenuItem value="">All</MenuItem>
            <MenuItem value="subscriptions">Subscriptions</MenuItem>
            <MenuItem value="groceries">Groceries</MenuItem>
            <MenuItem value="income">Income</MenuItem>
          </TextField>

          <TextField select label="Period" sx={{ minWidth: 160 }}>
            <MenuItem value="7">Last 7 days</MenuItem>
            <MenuItem value="30">Last 30 days</MenuItem>
            <MenuItem value="90">Last 90 days</MenuItem>
          </TextField>
        </Stack>
      </CardContent>
    </Card>
  );
}
