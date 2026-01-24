"use client";

import { Typography, Stack } from "@mui/material";
import { Trip } from "../../lib/trips/tripTypes";
import { GlassCard } from "../ui/GlassCard";


interface TripCardProps {
  trip: Trip;
}

export function TripCard({ trip }: TripCardProps) {
  return (
    <GlassCard>
      <Stack spacing={1}>
        <Typography fontWeight={600}>{trip.title}</Typography>

        {trip.description && (
          <Typography variant="body2" color="text.secondary">
            {trip.description}
          </Typography>
        )}

        <Typography variant="body2">
          {trip.startDate} – {trip.endDate}
        </Typography>
      </Stack>
    </GlassCard>
  );
}
