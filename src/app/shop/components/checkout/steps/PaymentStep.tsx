// components/checkout/steps/PaymentStep.tsx
"use client";

import {
  Button,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";

export function PaymentStep({
  onNext,
  onBack,
}: {
  onNext: () => void;
  onBack: () => void;
}) {
  return (
    <>
      <Typography fontSize={20} fontWeight={700} mb={3}>
        Payment Method
      </Typography>

      <RadioGroup defaultValue="card">
        <FormControlLabel
          value="cod"
          control={<Radio />}
          label="Cash on Delivery"
        />
        <FormControlLabel value="paypal" control={<Radio />} label="PayPal" />
        <FormControlLabel
          value="card"
          control={<Radio />}
          label="Credit / Debit Card"
        />
      </RadioGroup>

      <Button onClick={onBack}>Back</Button>
      <Button variant="contained" onClick={onNext}>
        Continue
      </Button>
    </>
  );
}
