"use client";

import { Grid, Skeleton } from "@mui/material";

export function ProductGridSkeleton() {
  return (
    <Grid container spacing={3}>
      {Array.from({ length: 8 }).map((_, i) => (
        <Grid sx={{ xs: 12, sm: 6, md: 3 }} key={i}>
          <Skeleton variant="rounded" height={260} />
        </Grid>
      ))}
    </Grid>
  );
}
