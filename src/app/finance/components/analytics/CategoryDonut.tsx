"use client";

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { Card, CardContent, Typography } from "@mui/material";

const data = [
  { name: "Rent", value: 1200 },
  { name: "Food", value: 450 },
  { name: "Subscriptions", value: 120 },
  { name: "Shopping", value: 310 },
];

const COLORS = ["#2563EB", "#16A34A", "#F59E0B", "#DC2626"];

export default function CategoryDonut() {
  return (
    <Card>
      <CardContent>
        <Typography variant="body2" color="text.secondary" mb={2}>
          Spending by Category
        </Typography>

        <ResponsiveContainer width="100%" height={260}>
          <PieChart>
            <Pie
              data={data}
              innerRadius={70}
              outerRadius={100}
              paddingAngle={4}
              dataKey="value"
            >
              {data.map((_, i) => (
                <Cell key={i} fill={COLORS[i]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
