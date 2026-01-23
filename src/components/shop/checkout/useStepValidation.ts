"use client";

import { CheckoutState } from "./checkout.types";
import { FormErrors } from "./formErrors";

export function validateAddressInline(
  state: CheckoutState,
): FormErrors<CheckoutState["address"]> {
  const a = state.address;
  return {
    firstName: !a.firstName ? "Required" : undefined,
    lastName: !a.lastName ? "Required" : undefined,
    street: !a.street ? "Required" : undefined,
    city: !a.city ? "Required" : undefined,
    zip: !a.zip ? "Required" : undefined,
    country: !a.country ? "Required" : undefined,
    email: !a.email.includes("@") ? "Invalid email" : undefined,
  };
}

export function validatePaymentInline(
  state: CheckoutState,
): FormErrors<CheckoutState["paymentDetails"]> {
  if (state.paymentMethod !== "card") return {};
  const p = state.paymentDetails;

  return {
    cardNumber: !p.cardNumber ? "Required" : undefined,
    expiry: !p.expiry ? "Required" : undefined,
    cvv: !p.cvv ? "Required" : undefined,
  };
}
