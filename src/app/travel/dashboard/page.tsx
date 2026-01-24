"use client";

import { Stack, Typography, Grid } from "@mui/material";
import { QuickActions } from "../components/dashboard/QuickActions";
import { StatCard } from "../components/dashboard/StatCard";
import { TripCard } from "../components/trips/TripCard";
import { MotionContainer } from "../components/ui/MotionContainer";
import { MOCK_TRIPS } from "../lib/trips/mockTrips";


export default function DashboardPage() {
  return (
    <Stack spacing={6} sx={{ p: 6 }}>
      {/* Welcome */}
      <MotionContainer
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <Typography variant="h4">Welcome back, Caleb</Typography>
        <Typography color="text.secondary">
          You have {MOCK_TRIPS.length} trips planned.
        </Typography>
      </MotionContainer>

      {/* Stats */}
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <StatCard label="Countries visited" value={5} />
        </Grid>
        <Grid item xs={12} md={4}>
          <StatCard label="Total trips" value={MOCK_TRIPS.length} />
        </Grid>
        <Grid item xs={12} md={4}>
          <StatCard label="Distance traveled" value="42,000 km" />
        </Grid>
      </Grid>

      {/* Quick Actions */}
      <QuickActions />

      {/* Upcoming Trips */}
      <Stack spacing={3}>
        <Typography variant="h5">Upcoming Trips</Typography>

        <Grid container spacing={3}>
          {MOCK_TRIPS.map((trip) => (
            <Grid item xs={12} md={6} key={trip.id}>
              <TripCard trip={trip} />
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Stack>
  );
}
