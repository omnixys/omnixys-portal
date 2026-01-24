"use client";

import { Stack, Typography } from "@mui/material";
import { TripList } from "../components/trips/TripList";
import { MOCK_TRIPS } from "../lib/trips/mockTrips";

export default function TripsPage() {
  return (
    <Stack spacing={4} sx={{ p: 6 }}>
      <Typography variant="h4">Your Trips</Typography>
      <TripList trips={MOCK_TRIPS} />
    </Stack>
  );
}
