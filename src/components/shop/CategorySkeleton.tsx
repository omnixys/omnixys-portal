"use client";

import { Card, Skeleton, Stack } from "@mui/material";

export function CategorySkeleton() {
  return (
    <Card sx={{ p: 2, borderRadius: 3 }}>
      <Stack direction="row" spacing={2} alignItems="center">
        <Skeleton variant="rounded" width={56} height={56} />
        <Stack spacing={1} sx={{ flex: 1 }}>
          <Skeleton variant="text" width="60%" />
          <Skeleton variant="text" width="40%" />
        </Stack>
      </Stack>
    </Card>
  );
}
