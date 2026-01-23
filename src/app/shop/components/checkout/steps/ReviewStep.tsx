// components/checkout/steps/ReviewStep.tsx
"use client";

import { Button, Typography } from "@mui/material";

export function ReviewStep({
  onNext,
  onBack,
}: {
  onNext: () => void;
  onBack: () => void;
}) {
  return (
    <>
      <Typography fontSize={20} fontWeight={700} mb={3}>
        Review Order
      </Typography>

      {/* hier später Order Summary + Items */}
      <Typography>Items, address, payment, totals…</Typography>

      <Button onClick={onBack}>Back</Button>
      <Button variant="contained" onClick={onNext}>
        Place Order
      </Button>
    </>
  );
}
