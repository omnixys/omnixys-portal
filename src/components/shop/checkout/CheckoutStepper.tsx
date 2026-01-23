"use client";

import { Step, StepLabel, Stepper } from "@mui/material";

export const STEPS = ["Delivery", "Shipping", "Payment", "Review"];

export function CheckoutStepper({ activeStep }: { activeStep: number }) {
  return (
    <Stepper activeStep={activeStep} sx={{ mb: 3 }}>
      {STEPS.map((label) => (
        <Step key={label}>
          <StepLabel>{label}</StepLabel>
        </Step>
      ))}
    </Stepper>
  );
}
