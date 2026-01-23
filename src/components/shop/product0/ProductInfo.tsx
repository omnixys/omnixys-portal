// components/product/ProductInfo.tsx
"use client";

import { Box, Button, Rating, Typography } from "@mui/material";
import { Product } from "../../../app/shop/types";

export function ProductInfo({ product }: { product: Product }) {
  return (
    <Box sx={{ maxWidth: 420 }}>
      {/* Title */}
      <Typography fontSize={22} fontWeight={600} mb={1}>
        {product.title}
      </Typography>

      <Typography
        fontSize={14}
        color="text.secondary"
        lineHeight={1.7}
        sx={{ mt: 2 }}
      >
        {product.description}
      </Typography>

      {/* Rating */}
      <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
        <Rating
          value={product.rating.rate}
          precision={0.5}
          readOnly
          size="small"
        />
        <Typography fontSize={13} ml={1} color="text.secondary">
          ({product.rating.count})
        </Typography>
      </Box>

      {/* Price */}
      <Typography fontSize={24} fontWeight={700} mb={2}>
        ${product.price.toFixed(2)}
      </Typography>

      {/* Actions */}
      <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
        <Button
          variant="contained"
          sx={{
            flex: 1,
            backgroundColor: "#1b5e20",
            borderRadius: 999,
            textTransform: "none",
            fontWeight: 600,
            "&:hover": { backgroundColor: "#174d1b" },
          }}
        >
          Buy Now
        </Button>

        <Button
          variant="outlined"
          sx={{
            flex: 1,
            borderRadius: 999,
            textTransform: "none",
            fontWeight: 600,
          }}
        >
          Add to Cart
        </Button>
      </Box>

      {/* Delivery info */}
      <Typography fontSize={14} color="text.secondary">
        ✓ Free delivery
        <br />✓ 30 days return
      </Typography>
    </Box>
  );
}
