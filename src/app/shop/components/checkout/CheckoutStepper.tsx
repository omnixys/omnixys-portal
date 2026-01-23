// components/checkout/CheckoutStepper.tsx
"use client";

import { Step, StepLabel, Stepper } from "@mui/material";

const steps = ["Address", "Shipping", "Payment", "Review", "Confirm"];

export function CheckoutStepper({ activeStep }: { activeStep: number }) {
  return (
    <Stepper activeStep={activeStep} sx={{ mb: 6 }}>
      {steps.map((label) => (
        <Step key={label}>
          <StepLabel>{label}</StepLabel>
        </Step>
      ))}
    </Stepper>
  );
}
