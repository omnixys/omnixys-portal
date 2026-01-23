"use client";

import { Stack } from "@mui/material";
import { useState } from "react";
import { CheckoutStepper, STEPS } from "./CheckoutStepper";
import { AddressForm } from "./AddressForm";
import { ShippingMethod } from "./ShippingMethod";
import { PaymentMethod } from "./PaymentMethod";
import { ReviewOrder } from "./ReviewOrder";
import { StepActions } from "./StepActions";
import { useCheckout } from "./useCheckout";
import {
  validateAddressInline,
  validatePaymentInline,
} from "./useStepValidation";
import { hasErrors } from "./formErrors";

export function CheckoutLayout() {
  const [step, setStep] = useState(0);
  const { state } = useCheckout();

  const addressErrors = validateAddressInline(state);
  const paymentErrors = validatePaymentInline(state);

  const canProceed = () => {
    if (step === 0) return !hasErrors(addressErrors);
    if (step === 2) return !hasErrors(paymentErrors);
    return true;
  };

  return (
    <Stack spacing={3}>
      <CheckoutStepper activeStep={step} />

      {step === 0 && <AddressForm errors={addressErrors} />}
      {step === 1 && <ShippingMethod />}
      {step === 2 && <PaymentMethod errors={paymentErrors} />}
      {step === 3 && <ReviewOrder />}

      <StepActions
        onBack={step > 0 ? () => setStep((s) => s - 1) : undefined}
        onNext={() => setStep((s) => Math.min(s + 1, STEPS.length - 1))}
        canProceed={canProceed()}
        isLast={step === STEPS.length - 1}
      />
    </Stack>
  );
}
