"use client";

import { Stack, Typography } from "@mui/material";
import { BOOKING_FILTERS, BOOKING_SORTS } from "../../lib/booking/bookingFilters";
import { BookingResult } from "../../lib/booking/bookingTypes";
import { applyFilters } from "../../lib/filters/applyFilters";
import { applySort } from "../../lib/filters/applySort";
import { useFilterStore } from "../../lib/filters/filterStore";
import { FilterBar } from "../filters/FilterBar";
import { BookingResults } from "./BookingResults";

interface Props {
  title: string;
  description?: string;
  results: BookingResult[];
}

export function BookingPage({ title, description, results }: Props) {
  const { filters, sortBy } = useFilterStore();
  const filtered = applySort(applyFilters(results, filters), sortBy);

  return (
    <Stack spacing={4} sx={{ p: 6 }}>
      <Typography variant="h4">{title}</Typography>
      {description && (
        <Typography color="text.secondary">{description}</Typography>
      )}

      <FilterBar filters={BOOKING_FILTERS} sortOptions={BOOKING_SORTS} />

      <BookingResults results={filtered} />
    </Stack>
  );
}
