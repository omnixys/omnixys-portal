"use client";

import { useState } from "react";
import { Stack, Typography } from "@mui/material";
import { SearchForm } from "./components/search/SearchForm";
import { MotionContainer } from "./components/ui/MotionContainer";
import { SegmentedTabs } from "./components/ui/SegmentedTabs";
import { TravelCategoryId, TRAVEL_CATEGORIES } from "./lib/travelCategories";


export default function LandingPage() {
  const [category, setCategory] = useState<TravelCategoryId>("flights");

  return (
    <Stack spacing={6} sx={{ p: 6 }}>
      <MotionContainer
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Typography variant="h2">Plan your next journey</Typography>
        <Typography color="text.secondary">
          One search. Every travel option.
        </Typography>
      </MotionContainer>

      <SegmentedTabs
        value={category}
        onChange={setCategory}
        options={TRAVEL_CATEGORIES.map((c) => ({
          value: c.id,
          label: c.label,
        }))}
      />

      <SearchForm category={category} />
    </Stack>
  );
}
