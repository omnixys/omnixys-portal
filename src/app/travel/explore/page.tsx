"use client";

import { Stack, Typography, Grid } from "@mui/material";
import { DealsGrid } from "../components/explore/DealsGrid";
import { ExploreFilters } from "../components/explore/ExploreFilters";
import { ExploreMap } from "../components/explore/ExploreMap";
import { InspirationCard } from "../components/explore/InspirationCard";
import { VideoHero } from "../components/hero/VideoHero";
import { MotionContainer } from "../components/ui/MotionContainer";
import { EXPLORE_LOCATIONS, EXPLORE_DEALS } from "../lib/explore/exploreMockData";


export default function ExplorePage() {
  return (
    <Stack spacing={6} sx={{ p: 6 }}>
      {/* HERO */}
      <VideoHero
        title="Explore the world differently"
        subtitle="Discover destinations, experiences and exclusive deals."
        videoSrc="/travel/images/hero1.mp4"
        ctaLabel="Start exploring"
      />

      <MotionContainer
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <Typography variant="h4">Explore</Typography>
        <Typography color="text.secondary">
          Discover destinations, deals and inspiration
        </Typography>
      </MotionContainer>

      <ExploreFilters />

      <ExploreMap locations={EXPLORE_LOCATIONS} />

      <Stack spacing={3}>
        <Typography variant="h5">Inspiration</Typography>
        <Grid container spacing={3}>
          {EXPLORE_LOCATIONS.map((loc) => (
            <Grid item xs={12} md={4} key={loc.id}>
              <InspirationCard location={loc} />
            </Grid>
          ))}
        </Grid>
      </Stack>

      <Stack spacing={3}>
        <Typography variant="h5">Best Deals</Typography>
        <DealsGrid deals={EXPLORE_DEALS} />
      </Stack>
    </Stack>
  );
}
