// components/cart/CartItem.tsx
"use client";

import { Box, Button, IconButton, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export function CartItem({ item }: { item: any }) {
  const subtotal = item.price * item.quantity;

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "2fr 1fr 1fr 1fr auto",
        alignItems: "center",
        gap: 2,
      }}
    >
      {/* Product */}
      <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
        <Box
          sx={{
            width: 80,
            height: 80,
            borderRadius: 2,
            border: "1px solid #eee",
            p: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box component="img" src={item.image} sx={{ maxHeight: "100%" }} />
        </Box>

        <Box>
          <Typography fontWeight={600}>{item.title}</Typography>
          <Typography fontSize={13} color="text.secondary">
            Color: {item.color}
          </Typography>
          <Typography
            fontSize={13}
            color="error.main"
            sx={{ cursor: "pointer" }}
          >
            Remove
          </Typography>
        </Box>
      </Box>

      {/* Price */}
      <Typography>${item.price.toFixed(2)}</Typography>

      {/* Quantity */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <Button size="small" variant="outlined">
          −
        </Button>
        <Typography>{item.quantity}</Typography>
        <Button size="small" variant="outlined">
          +
        </Button>
      </Box>

      {/* Subtotal */}
      <Typography fontWeight={600}>${subtotal.toFixed(2)}</Typography>

      {/* Remove */}
      <IconButton>
        <CloseIcon />
      </IconButton>
    </Box>
  );
}
