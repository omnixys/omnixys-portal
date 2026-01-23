// components/cart/PriceBreakdown.tsx
"use client";

import { Box, Divider, Typography } from "@mui/material";

export function PriceBreakdown({
  subtotal,
  shipping,
  tax,
  discount,
}: {
  subtotal: number;
  shipping: number;
  tax: number;
  discount: number;
}) {
  const total = subtotal + shipping + tax - discount;

  return (
    <>
      <Divider sx={{ my: 2 }} />

      <Row label="Price" value={subtotal} />
      <Row
        label="Shipping Fee"
        value={shipping === 0 ? "Free" : `$${shipping}`}
      />
      <Row label="Tax (2%)" value={`$${tax.toFixed(2)}`} />
      <Row label="Discount" value={`- $${discount.toFixed(2)}`} />

      <Divider sx={{ my: 2 }} />

      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography fontWeight={700}>Total</Typography>
        <Typography fontWeight={700}>${total.toFixed(2)}</Typography>
      </Box>
    </>
  );
}

function Row({ label, value }: { label: string; value: any }) {
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
      <Typography>{label}</Typography>
      <Typography>{value}</Typography>
    </Box>
  );
}
