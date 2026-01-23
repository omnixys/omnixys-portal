"use client";

import {
  Box,
  Button,
  Divider,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useCart } from "../cart/useCart";


export function OrderSummaryCard() {
  const { items, totalPrice } = useCart();

  return (
    <Box sx={{ border: "1px solid #E5E5E5", borderRadius: 4, p: 3 }}>
      <Typography fontWeight={700}>Order Summary</Typography>

      {items.map((item) => (
        <Row
          key={item.id}
          label={`${item.name} x${item.quantity}`}
          value={`$${item.price * item.quantity}`}
        />
      ))}

      <Divider sx={{ my: 2 }} />

      <Row label="Total" value={`$${totalPrice}`} bold />

      <Button fullWidth variant="contained" sx={{ mt: 2 }}>
        Checkout
      </Button>
    </Box>
  );
}


function Row({
  label,
  value,
  bold,
}: {
  label: string;
  value: string;
  bold?: boolean;
}) {
  return (
    <Stack direction="row" justifyContent="space-between">
      <Typography fontWeight={bold ? 600 : 400}>{label}</Typography>
      <Typography fontWeight={bold ? 600 : 400}>{value}</Typography>
    </Stack>
  );
}
