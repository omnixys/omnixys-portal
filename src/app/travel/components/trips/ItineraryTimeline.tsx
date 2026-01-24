"use client";

import { Stack, Typography } from "@mui/material";
import { TripLocation } from "../../lib/trips/tripTypes";
import { GlassCard } from "../ui/GlassCard";

interface Props {
  locations: TripLocation[];
}

export function ItineraryTimeline({ locations }: Props) {
  return (
    <Stack spacing={2}>
      {locations.map((loc) => (
        <GlassCard key={loc.id}>
          <Typography fontWeight={600}>
            Day {loc.day ?? "-"} · {loc.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lat: {loc.lat}, Lng: {loc.lng}
          </Typography>
        </GlassCard>
      ))}
    </Stack>
  );
}
