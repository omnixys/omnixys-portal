"use client";

import { Box, IconButton, Stack, Typography } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { CartItem } from "./cart.types";
import { useCart } from "./useCart";
import Image from "next/image";

export function CartItemRow({ item }: { item: CartItem }) {
  const { removeItem, addItem } = useCart();

  return (
    <Stack direction="row" spacing={2} alignItems="center">
      {item.image && (
        <Image src={item.image} alt={item.name} width={60} height={60} />
      )}

      <Box flex={1}>
        <Typography fontWeight={600}>{item.name}</Typography>
        <Typography color="text.secondary">
          ${item.price} × {item.quantity}
        </Typography>
      </Box>

      <IconButton onClick={() => removeItem(item.id)}>
        <DeleteOutlineIcon />
      </IconButton>
    </Stack>
  );
}
