import { CheckoutState } from "./checkout.types";

const KEY = "checkout_state";

export function loadCheckoutState(): CheckoutState | null {
  if (typeof window === "undefined") return null;
  const raw = localStorage.getItem(KEY);
  return raw ? JSON.parse(raw) : null;
}

export function saveCheckoutState(state: CheckoutState) {
  localStorage.setItem(KEY, JSON.stringify(state));
}

export function clearCheckoutState() {
  localStorage.removeItem(KEY);
}
