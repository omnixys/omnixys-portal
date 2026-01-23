// components/checkout/steps/AddressStep.tsx
"use client";

import { Button, Typography } from "@mui/material";
import { AddressSelect } from "../../cart/AddressSelect";

export function AddressStep({ onNext }: { onNext: () => void }) {
  return (
    <>
      <Typography fontSize={20} fontWeight={700} mb={3}>
        Delivery Address
      </Typography>

      <AddressSelect />

      <Button
        variant="contained"
        sx={{ mt: 4, backgroundColor: "#f36c21" }}
        onClick={onNext}
      >
        Continue
      </Button>
    </>
  );
}
