"use client";

import { Typography, Stack } from "@mui/material";
import { GlassCard } from "../ui/GlassCard";

interface StatCardProps {
  label: string;
  value: string | number;
}

export function StatCard({ label, value }: StatCardProps) {
  return (
    <GlassCard>
      <Stack spacing={0.5}>
        <Typography variant="body2" color="text.secondary">
          {label}
        </Typography>
        <Typography variant="h5" fontWeight={600}>
          {value}
        </Typography>
      </Stack>
    </GlassCard>
  );
}
