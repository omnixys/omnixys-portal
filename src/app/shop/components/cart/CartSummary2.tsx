// components/cart/CartSummary.tsx
"use client";

import { Box, Button, Divider, Typography } from "@mui/material";

export function CartSummary({ items }: { items: any[] }) {
  const subtotal = items.reduce((sum, i) => sum + i.price * i.quantity, 0);
  const shipping = subtotal > 100 ? 0 : 9.99;
  const total = subtotal + shipping;

  return (
    <Box
      sx={{
        border: "1px solid #eee",
        borderRadius: 3,
        p: 3,
      }}
    >
      <Typography fontSize={18} fontWeight={700} mb={2}>
        Order Summary
      </Typography>

      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
        <Typography>Subtotal</Typography>
        <Typography>${subtotal.toFixed(2)}</Typography>
      </Box>

      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
        <Typography>Shipping</Typography>
        <Typography>
          {shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}
        </Typography>
      </Box>

      <Divider sx={{ mb: 2 }} />

      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 3 }}>
        <Typography fontWeight={700}>Total</Typography>
        <Typography fontWeight={700}>${total.toFixed(2)}</Typography>
      </Box>

      <Button
        fullWidth
        variant="contained"
        sx={{
          backgroundColor: "#1b5e20",
          borderRadius: 999,
          py: 1.4,
          fontWeight: 600,
          "&:hover": { backgroundColor: "#174d1b" },
        }}
      >
        Proceed to Checkout
      </Button>

      <Typography
        fontSize={13}
        color="text.secondary"
        textAlign="center"
        mt={2}
      >
        Secure checkout · SSL encrypted
      </Typography>
    </Box>
  );
}
