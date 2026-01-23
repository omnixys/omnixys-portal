export interface Address {
  firstName: string;
  lastName: string;
  street: string;
  city: string;
  zip: string;
  country: string;
  email: string;
}

export type ShippingMethod = "free" | "express";
export type PaymentMethod = "card" | "paypal";

export interface PaymentDetails {
  cardNumber?: string;
  expiry?: string;
  cvv?: string;
}

export interface CheckoutState {
  address: Address;
  shippingMethod: ShippingMethod;
  paymentMethod: PaymentMethod;
  paymentDetails: PaymentDetails;
}


export const initialCheckoutState: CheckoutState = {
  address: {
    firstName: "",
    lastName: "",
    street: "",
    city: "",
    zip: "",
    country: "",
    email: "",
  },
  shippingMethod: "free",
  paymentMethod: "card",
  paymentDetails: {},
};
