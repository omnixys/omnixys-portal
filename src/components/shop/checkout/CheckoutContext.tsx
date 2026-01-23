"use client";

import React, { createContext, useEffect, useReducer } from "react";
import { CheckoutState, initialCheckoutState } from "./checkout.types";
import { loadCheckoutState, saveCheckoutState } from "./storage";

type Action =
  | { type: "SET_ADDRESS"; payload: Partial<CheckoutState["address"]> }
  | { type: "SET_SHIPPING"; payload: CheckoutState["shippingMethod"] }
  | { type: "SET_PAYMENT_METHOD"; payload: CheckoutState["paymentMethod"] }
  | { type: "SET_PAYMENT_DETAILS"; payload: CheckoutState["paymentDetails"] }
  | { type: "RESET" };

function reducer(state: CheckoutState, action: Action): CheckoutState {
  switch (action.type) {
    case "SET_ADDRESS":
      return { ...state, address: { ...state.address, ...action.payload } };

    case "SET_SHIPPING":
      return { ...state, shippingMethod: action.payload };

    case "SET_PAYMENT_METHOD":
      return { ...state, paymentMethod: action.payload };

    case "SET_PAYMENT_DETAILS":
      return {
        ...state,
        paymentDetails: { ...state.paymentDetails, ...action.payload },
      };

    case "RESET":
      return initialCheckoutState;

    default:
      return state;
  }
}

export const CheckoutContext = createContext<{
  state: CheckoutState;
  dispatch: React.Dispatch<Action>;
}>({
  state: initialCheckoutState,
  dispatch: () => null,
});

export function CheckoutProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(
    reducer,
    initialCheckoutState,
    () => loadCheckoutState() ?? initialCheckoutState,
  );

  useEffect(() => {
    saveCheckoutState(state);
  }, [state]);

  return (
    <CheckoutContext.Provider value={{ state, dispatch }}>
      {children}
    </CheckoutContext.Provider>
  );
}
