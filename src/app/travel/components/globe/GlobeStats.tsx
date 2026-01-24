"use client";

import { Grid, Typography } from "@mui/material";
import { GlobeStats as Stats } from "../../lib/globe/globeTypes";
import { GlassCard } from "../ui/GlassCard";

interface Props {
  stats: Stats;
}

export function GlobeStats({ stats }: Props) {
  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <GlassCard>
          <Typography variant="body2">Countries</Typography>
          <Typography variant="h6">{stats.countries}</Typography>
        </GlassCard>
      </Grid>

      <Grid item xs={6}>
        <GlassCard>
          <Typography variant="body2">Cities</Typography>
          <Typography variant="h6">{stats.cities}</Typography>
        </GlassCard>
      </Grid>

      <Grid item xs={6}>
        <GlassCard>
          <Typography variant="body2">Trips</Typography>
          <Typography variant="h6">{stats.trips}</Typography>
        </GlassCard>
      </Grid>

      <Grid item xs={6}>
        <GlassCard>
          <Typography variant="body2">Distance</Typography>
          <Typography variant="h6">
            {stats.distanceKm.toLocaleString()} km
          </Typography>
        </GlassCard>
      </Grid>
    </Grid>
  );
}
