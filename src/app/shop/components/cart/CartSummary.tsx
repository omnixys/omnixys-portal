// components/cart/CartSummary.tsx
"use client";

import { Box, Button, Typography } from "@mui/material";
import { AddressSelect } from "./AddressSelect";
import { PromoCode } from "./PromoCode";
import { PriceBreakdown } from "./PriceBreakdown";

export function CartSummary({ items }: { items: any[] }) {
  const subtotal = items.reduce((s, i) => s + i.price * i.quantity, 0);
  const shipping = 0;
  const tax = subtotal * 0.02;
  const discount = 0;

  return (
    <Box sx={{ border: "1px solid #eee", borderRadius: 3, p: 3 }}>
      <Typography fontSize={18} fontWeight={700} mb={2}>
        Order Summary
      </Typography>

      <AddressSelect />
      <PromoCode />

      <PriceBreakdown
        subtotal={subtotal}
        shipping={shipping}
        tax={tax}
        discount={discount}
      />

      <Button
        fullWidth
        variant="contained"
        sx={{
          mt: 3,
          backgroundColor: "#f36c21",
          borderRadius: 1.5,
          py: 1.4,
          fontWeight: 600,
        }}
      >
        Place Order
      </Button>
    </Box>
  );
}
