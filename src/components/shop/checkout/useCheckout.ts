"use client";

import { useContext } from "react";
import { CheckoutContext } from "./CheckoutContext";

export function useCheckout() {
  const { state, dispatch } = useContext(CheckoutContext);

  return {
    state,

    setAddress: (data: any) => dispatch({ type: "SET_ADDRESS", payload: data }),

    setShipping: (method: any) =>
      dispatch({ type: "SET_SHIPPING", payload: method }),

    setPaymentMethod: (method: any) =>
      dispatch({ type: "SET_PAYMENT_METHOD", payload: method }),

    setPaymentDetails: (data: any) =>
      dispatch({ type: "SET_PAYMENT_DETAILS", payload: data }),

    reset: () => dispatch({ type: "RESET" }),
  };
}
