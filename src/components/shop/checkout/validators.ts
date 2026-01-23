import { CheckoutState } from "./checkout.types";

export function validateAddress(state: CheckoutState): string[] {
  const a = state.address;
  const errors: string[] = [];

  if (!a.firstName) errors.push("First name is required");
  if (!a.lastName) errors.push("Last name is required");
  if (!a.street) errors.push("Street is required");
  if (!a.city) errors.push("City is required");
  if (!a.zip) errors.push("ZIP code is required");
  if (!a.country) errors.push("Country is required");
  if (!a.email.includes("@")) errors.push("Invalid email");

  return errors;
}

export function validatePayment(state: CheckoutState): string[] {
  if (state.paymentMethod === "card") {
    const p = state.paymentDetails;
    const errors: string[] = [];

    if (!p.cardNumber) errors.push("Card number missing");
    if (!p.expiry) errors.push("Expiry date missing");
    if (!p.cvv) errors.push("CVV missing");

    return errors;
  }

  return [];
}
