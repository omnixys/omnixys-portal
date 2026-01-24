"use client";

import { Box, Typography } from "@mui/material";
import { TripLocation } from "../../lib/trips/tripTypes";
import { GlassCard } from "../ui/GlassCard";
import { MapProvider } from "../maps/MapProvider";
import { TravelMap } from "../maps/TravelMap";


interface Props {
  locations: TripLocation[];
}

export function TripMap({ locations }: Props) {
  return (
    <GlassCard>
      <MapProvider>
        <TravelMap locations={locations} />
      </MapProvider>
    </GlassCard>
  );
}
