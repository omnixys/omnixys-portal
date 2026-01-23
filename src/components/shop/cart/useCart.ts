"use client";

import { useContext } from "react";
import { CartContext } from "./CartContext";
import { CartItem } from "./cart.types";

export function useCart() {
  const { state, dispatch } = useContext(CartContext);

  const addItem = (item: CartItem) => dispatch({ type: "ADD_ITEM", item });

  const removeItem = (id: string) => dispatch({ type: "REMOVE_ITEM", id });

  const clearCart = () => dispatch({ type: "CLEAR_CART" });

  const totalPrice = state.items.reduce(
    (sum, i) => sum + i.price * i.quantity,
    0,
  );

  return {
    items: state.items,
    addItem,
    removeItem,
    clearCart,
    totalPrice,
  };
}
