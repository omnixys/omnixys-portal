"use client";

import { Grid } from "@mui/material";
import { BookingResult } from "../../lib/booking/bookingTypes";
import { PriceCard } from "../ui/PriceCard";


interface Props {
  results: BookingResult[];
}

export function BookingResults({ results }: Props) {
  return (
    <Grid container spacing={3}>
      {results.map((r) => (
        <Grid item xs={12} md={6} key={r.id}>
          <PriceCard
            title={r.title}
            subtitle={r.subtitle}
            price={r.price}
            currency={r.currency}
          />
        </Grid>
      ))}
    </Grid>
  );
}
