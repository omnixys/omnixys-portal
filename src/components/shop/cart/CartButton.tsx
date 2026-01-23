"use client";

import { Badge, IconButton } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useCart } from "./useCart";
import { useState } from "react";
import { CartDrawer } from "./CartDrawer";

export function CartButton() {
  const { items } = useCart();
  const [open, setOpen] = useState(false);

  const count = items.reduce((sum, i) => sum + i.quantity, 0);

  return (
    <>
      <IconButton onClick={() => setOpen(true)}>
        <Badge badgeContent={count} color="primary">
          <ShoppingCartIcon />
        </Badge>
      </IconButton>

      <CartDrawer open={open} onClose={() => setOpen(false)} />
    </>
  );
}
