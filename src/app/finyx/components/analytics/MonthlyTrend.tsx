"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Card, CardContent, Typography } from "@mui/material";

const data = [
  { month: "Aug", expenses: 2100 },
  { month: "Sep", expenses: 2300 },
  { month: "Oct", expenses: 1950 },
  { month: "Nov", expenses: 2600 },
  { month: "Dec", expenses: 2450 },
];

export default function MonthlyTrend() {
  return (
    <Card>
      <CardContent>
        <Typography variant="body2" color="text.secondary" mb={2}>
          Monthly Expenses
        </Typography>

        <ResponsiveContainer width="100%" height={260}>
          <LineChart data={data}>
            <XAxis dataKey="month" />
            <YAxis hide />
            <Tooltip />
            <Line
              dataKey="expenses"
              stroke="#2563EB"
              strokeWidth={3}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
