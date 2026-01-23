"use client";

import React, { createContext, useReducer } from "react";
import { CartItem, CartState } from "./cart.types";

/* =====================================================
   Actions
===================================================== */
type Action =
  | { type: "ADD_ITEM"; item: CartItem }
  | { type: "REMOVE_ITEM"; id: string }
  | { type: "CLEAR_CART" };

const initialState: CartState = {
  items: [],
};

/* =====================================================
   Reducer
===================================================== */
function cartReducer(state: CartState, action: Action): CartState {
  switch (action.type) {
    case "ADD_ITEM": {
      const existing = state.items.find((i) => i.id === action.item.id);

      if (existing) {
        return {
          items: state.items.map((i) =>
            i.id === action.item.id ? { ...i, quantity: i.quantity + 1 } : i,
          ),
        };
      }

      return {
        items: [...state.items, { ...action.item, quantity: 1 }],
      };
    }

    case "REMOVE_ITEM":
      return {
        items: state.items.filter((i) => i.id !== action.id),
      };

    case "CLEAR_CART":
      return initialState;

    default:
      return state;
  }
}

/* =====================================================
   Context
===================================================== */
export const CartContext = createContext<{
  state: CartState;
  dispatch: React.Dispatch<Action>;
}>({
  state: initialState,
  dispatch: () => null,
});

/* =====================================================
   Provider
===================================================== */
export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}
