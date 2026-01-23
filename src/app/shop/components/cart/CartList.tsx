// components/cart/CartList.tsx
"use client";

import { Box, Divider, Typography } from "@mui/material";
import { CartItem } from "./CartItem";

export function CartList({ items }: { items: any[] }) {
  return (
    <Box>
      <Typography fontSize={22} fontWeight={700} mb={3}>
        Shopping Cart
      </Typography>

      {items.map((item, i) => (
        <Box key={item.id}>
          <CartItem item={item} />
          {i < items.length - 1 && <Divider sx={{ my: 3 }} />}
        </Box>
      ))}
    </Box>
  );
}
