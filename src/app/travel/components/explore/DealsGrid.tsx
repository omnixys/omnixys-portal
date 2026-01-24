"use client";

import { Grid } from "@mui/material";
import { ExploreDeal } from "../../lib/explore/exploreTypes";
import { PriceCard } from "../ui/PriceCard";

interface Props {
  deals: ExploreDeal[];
}

export function DealsGrid({ deals }: Props) {
  return (
    <Grid container spacing={3}>
      {deals.map((deal) => (
        <Grid item xs={12} md={6} key={deal.id}>
          <PriceCard
            title={deal.title}
            subtitle={deal.subtitle}
            price={deal.price}
            currency={deal.currency}
          />
        </Grid>
      ))}
    </Grid>
  );
}
