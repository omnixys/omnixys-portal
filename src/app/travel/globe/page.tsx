"use client";

import { Box, Grid, Stack, Typography } from "@mui/material";
import { CountriesVisitedCard } from "../components/globe/CountriesVisitedCard";
import { GlobeStats } from "../components/globe/GlobeStats";
import { GlobeView } from "../components/globe/GlobeView";
import { TripTimeline } from "../components/globe/TripTimeline";
import {
  GLOBE_STATS,
  ROUTES,
  VISITED_POINTS,
} from "../lib/globe/globeMockData";
import { MOCK_TRIPS } from "../lib/trips/mockTrips";

export default function GlobePage() {
  return (
    <Stack spacing={4} sx={{ p: 6 }}>
      <Typography variant="h4">Your Travel History</Typography>

      <Grid container spacing={4}>
        <Grid item xs={12} md={8}>
          <Box
            style={{
              background: "#fff",
              borderRadius: 12,
              padding: 24,
              boxShadow: "0 10px 40px rgba(0,0,0,0.08)",
            }}
          >
            <Typography variant="subtitle1" sx={{ mb: 2 }}>
              See where you've been...
            </Typography>
            <GlobeView
              points={VISITED_POINTS}
              routes={ROUTES}
              trips={MOCK_TRIPS}
            />
          </Box>
        </Grid>

        <Grid item xs={12} md={4}>
          <Stack spacing={3}>
            <CountriesVisitedCard
              countries={[
                ...new Set(
                  MOCK_TRIPS.flatMap((trip) =>
                    trip.locations.map((loc) => loc.name),
                  ),
                ),
              ]}
            />
            {/* <CountriesVisitedCard countries={["Brazil", "Japan"]} /> */}

            <TripTimeline years={[2022, 2023, 2024]} />
            <GlobeStats stats={GLOBE_STATS} />
          </Stack>
        </Grid>
      </Grid>
    </Stack>
  );
}
