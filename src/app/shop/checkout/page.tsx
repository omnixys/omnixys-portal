// app/checkout/page.tsx
"use client";

import { Box, Grid } from "@mui/material";
import { useState } from "react";
import { CheckoutStepper } from "../components/checkout/CheckoutStepper";
import { AddressStep } from "../components/checkout/steps/AddressStep";
import { ShippingStep } from "../components/checkout/steps/ShippingStep";
import { PaymentStep } from "../components/checkout/steps/PaymentStep";
import { ReviewStep } from "../components/checkout/steps/ReviewStep";
import { ConfirmStep } from "../components/checkout/steps/ConfirmStep";
import { Footer } from "../components/footer/Footer";


export default function CheckoutPage() {
  const [step, setStep] = useState(0);

  const next = () => setStep((s) => s + 1);
  const back = () => setStep((s) => Math.max(0, s - 1));

  return (
    <Box sx={{ backgroundColor: "#fff" }}>
      <Box sx={{ maxWidth: 1300, mx: "auto", px: 3, py: 6 }}>
        <CheckoutStepper activeStep={step} />

        <Grid container spacing={6}>
          <Grid sx={{ xs: 12, md: 8 }}>
            {step === 0 && <AddressStep onNext={next} />}
            {step === 1 && <ShippingStep onNext={next} onBack={back} />}
            {step === 2 && <PaymentStep onNext={next} onBack={back} />}
            {step === 3 && <ReviewStep onNext={next} onBack={back} />}
            {step === 4 && <ConfirmStep />}
          </Grid>
        </Grid>
      </Box>

      <Footer />
    </Box>
  );
}
