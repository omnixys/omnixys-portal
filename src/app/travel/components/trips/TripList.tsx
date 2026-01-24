"use client";

import { Grid } from "@mui/material";
import { TripCard } from "./TripCard";
import { Trip } from "../../lib/trips/tripTypes";

interface TripListProps {
  trips: Trip[];
}

export function TripList({ trips }: TripListProps) {
  return (
    <Grid container spacing={3}>
      {trips.map((trip) => (
        <Grid item xs={12} md={6} key={trip.id}>
          <TripCard trip={trip} />
        </Grid>
      ))}
    </Grid>
  );
}
