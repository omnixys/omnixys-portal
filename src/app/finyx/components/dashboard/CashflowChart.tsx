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
  { day: "Mon", value: 42000 },
  { day: "Tue", value: 42500 },
  { day: "Wed", value: 41800 },
  { day: "Thu", value: 43000 },
  { day: "Fri", value: 42680 },
];

export default function CashflowChart() {
  return (
    <Card>
      <CardContent>
        <Typography variant="body2" color="text.secondary" mb={2}>
          Cashflow (7 days)
        </Typography>

        <ResponsiveContainer width="100%" height={260}>
          <LineChart data={data}>
            <XAxis dataKey="day" />
            <YAxis hide />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="value"
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
