// components/product/ProductInfo.tsx
"use client";

import { truncateText } from "@/utils/text";
import { Box, Button, Divider, Rating, Typography } from "@mui/material";
import { Product } from "../../types";
import { QuantitySelector } from "./QuantitySelector";
import { ColorSelector } from "./ColorSelector";
import { FeaturedCarousel } from "./FeaturedCarousel";
import { PRODUCTS } from "../../mock/products";

export function ProductInfo({ product }: { product: Product }) {
  return (
    <Box>
      {/* Title */}
      <Typography fontSize={26} fontWeight={700} mb={1}>
        {product.title}
      </Typography>

      {/* Description */}
      <Typography fontSize={15} color="text.secondary" mb={4}>
        {truncateText(product.description, 220)}
      </Typography>

      {/* Rating */}
      <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
        <Rating value={product.rating.rate} precision={0.5} readOnly />
        <Typography fontSize={14} ml={1} color="text.secondary">
          ({product.rating.count} reviews)
        </Typography>
      </Box>

      {/* Price */}
      <Typography fontSize={28} fontWeight={700} mb={3}>
        ${product.price.toFixed(2)}
      </Typography>

      <ColorSelector />

      <QuantitySelector stock={12} />

      {/* CTA */}
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

      <Divider sx={{ my: 4 }} />

      {/* Trust Info (wie im PDF) */}
      <Typography fontSize={14} color="text.secondary">
        ✓ Free delivery within 24–48 hours
        <br />
        ✓ Secure payment
        <br />✓ 30 days return policy
      </Typography>
    </Box>
  );
}
