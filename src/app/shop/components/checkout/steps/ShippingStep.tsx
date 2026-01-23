// components/checkout/steps/ShippingStep.tsx
"use client";

import {
  Button,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";

export function ShippingStep({
  onNext,
  onBack,
}: {
  onNext: () => void;
  onBack: () => void;
}) {
  return (
    <>
      <Typography fontSize={20} fontWeight={700} mb={3}>
        Shipping Method
      </Typography>

      <RadioGroup defaultValue="standard">
        <FormControlLabel
          value="standard"
          control={<Radio />}
          label="Standard Delivery (Free, 3–5 days)"
        />
        <FormControlLabel
          value="express"
          control={<Radio />}
          label="Express Delivery ($9.99, 1–2 days)"
        />
      </RadioGroup>

      <Button onClick={onBack}>Back</Button>
      <Button variant="contained" onClick={onNext}>
        Continue
      </Button>
    </>
  );
}
