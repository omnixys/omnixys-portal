"use client";

import { Box, Button, Divider, Drawer, Stack, Typography } from "@mui/material";
import { useCart } from "./useCart";
import { CartItemRow } from "./CartItemRow";

export function CartDrawer({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const { items, totalPrice, clearCart } = useCart();

  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <Box sx={{ width: 380, p: 3 }}>
        <Typography variant="h6" fontWeight={700}>
          Your Cart
        </Typography>

        <Divider sx={{ my: 2 }} />

        <Stack spacing={2}>
          {items.length === 0 && (
            <Typography color="text.secondary">Your cart is empty</Typography>
          )}

          {items.map((item) => (
            <CartItemRow key={item.id} item={item} />
          ))}
        </Stack>

        <Divider sx={{ my: 2 }} />

        <Stack spacing={2}>
          <Stack direction="row" justifyContent="space-between">
            <Typography fontWeight={600}>Total</Typography>
            <Typography fontWeight={600}>${totalPrice.toFixed(2)}</Typography>
          </Stack>

          <Button variant="contained" fullWidth>
            Checkout
          </Button>

          <Button variant="text" color="error" onClick={clearCart}>
            Clear Cart
          </Button>
        </Stack>
      </Box>
    </Drawer>
  );
}
