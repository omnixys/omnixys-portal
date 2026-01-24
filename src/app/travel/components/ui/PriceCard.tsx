"use client";

import { Box, Typography, Button } from "@mui/material";
import { GlassCard } from "./GlassCard";

export interface PriceCardProps {
  title: string;
  subtitle?: string;
  price: number;
  currency?: string;
}

export function PriceCard({
  title,
  subtitle,
  price,
  currency = "€",
}: PriceCardProps) {
  return (
    <GlassCard>
      <Typography variant="h6">{title}</Typography>
      {subtitle && (
        <Typography variant="body2" color="text.secondary">
          {subtitle}
        </Typography>
      )}

      <Box display="flex" justifyContent="space-between" mt={2}>
        <Typography variant="h5">
          {price} {currency}
        </Typography>
        <Button variant="contained">View</Button>
      </Box>
    </GlassCard>
  );
}
