"use client";

import { Button, Stack } from "@mui/material";

export function StepActions({
  onBack,
  onNext,
  canProceed,
  isLast,
}: {
  onBack?: () => void;
  onNext: () => void;
  canProceed: boolean;
  isLast?: boolean;
}) {
  return (
    <Stack direction="row" spacing={2} mt={3}>
      {onBack && (
        <Button variant="text" onClick={onBack}>
          Back
        </Button>
      )}
      <Button variant="contained" onClick={onNext} disabled={!canProceed}>
        {isLast ? "Place Order" : "Continue"}
      </Button>
    </Stack>
  );
}
