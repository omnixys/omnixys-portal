"use client";

import { Box, Divider, Typography } from "@mui/material";

export function OrderSummary({ order }: { order: any }) {
  const subtotal = order.items.reduce(
    (s: number, i: any) => s + i.price * i.qty,
    0,
  );
  const total = subtotal + order.tax - order.discount;

  return (
    <Box sx={{ border: "1px solid #eee", borderRadius: 3, p: 3 }}>
      <Typography fontSize={18} fontWeight={700} mb={2}>
        Order Summary
      </Typography>

      <Typography fontWeight={600} mb={1}>
        Delivery Address
      </Typography>
      <Typography fontSize={14} color="text.secondary">
        {order.address.name}
        <br />
        {order.address.street}
        <br />
        {order.address.zip} {order.address.city}
        <br />
        {order.address.country}
      </Typography>

      <Divider sx={{ my: 2 }} />

      <Row label="Shipping" value={order.shipping} />
      <Row label="Payment" value={order.payment} />
      <Row label="Subtotal" value={`$${subtotal.toFixed(2)}`} />
      <Row label="Tax" value={`$${order.tax.toFixed(2)}`} />
      <Row label="Discount" value={`-$${order.discount.toFixed(2)}`} />

      <Divider sx={{ my: 2 }} />

      <Row label="Total" value={`$${total.toFixed(2)}`} strong />
    </Box>
  );
}

function Row({
  label,
  value,
  strong,
}: {
  label: string;
  value: string;
  strong?: boolean;
}) {
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
      <Typography fontWeight={strong ? 700 : 400}>{label}</Typography>
      <Typography fontWeight={strong ? 700 : 400}>{value}</Typography>
    </Box>
  );
}
