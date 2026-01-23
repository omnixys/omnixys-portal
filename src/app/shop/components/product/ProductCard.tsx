"use client";

import {
  Box,
  Button,
  Card,
  IconButton,
  Rating,
  Typography,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Product } from "../../types";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        borderRadius: 3,
        boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
        transition: "all .25s ease",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: "0 12px 32px rgba(0,0,0,0.12)",
        },
      }}
    >
      {/* Image */}
      <Box
        sx={{
          position: "relative",
          p: 3,
          height: 220,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <IconButton
          sx={{
            position: "absolute",
            top: 12,
            right: 12,
            backgroundColor: "#fff",
            boxShadow: 1,
          }}
        >
          <FavoriteBorderIcon fontSize="small" />
        </IconButton>

        <Box
          component="img"
          src={product.image}
          alt={product.title}
          sx={{
            maxHeight: "100%",
            maxWidth: "100%",
            objectFit: "contain",
          }}
        />
      </Box>

      {/* Content */}
      <Box
        sx={{
          px: 2.5,
          pb: 2.5,
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
        }}
      >
        {/* Title – fixierte Höhe */}
        <Typography
          fontSize={14}
          fontWeight={600}
          lineHeight={1.4}
          sx={{
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            minHeight: 40, // <-- Titel immer gleich hoch
          }}
        >
          {product.title}
        </Typography>

        {/* Description – fixierte Höhe */}
        <Typography
          fontSize={13}
          color="text.secondary"
          mt={0.5}
          sx={{
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            minHeight: 36,
          }}
        >
          {product.description}
        </Typography>

        {/* Rating + Price – fixer Block */}
        <Box
          sx={{
            mt: 1,
            minHeight: 56, // <-- entscheidend
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Rating
              value={product.rating.rate}
              precision={0.5}
              readOnly
              size="small"
            />
            <Typography fontSize={12} color="text.secondary" ml={0.5}>
              ({product.rating.count})
            </Typography>
          </Box>

          <Typography fontSize={18} fontWeight={700}>
            ${product.price.toFixed(2)}
          </Typography>
        </Box>

        {/* Button – immer unten */}
        <Button
          fullWidth
          variant="contained"
          sx={{
            mt: "auto",
            backgroundColor: "#000",
            borderRadius: 999,
            textTransform: "none",
            fontWeight: 600,
            "&:hover": {
              backgroundColor: "#222",
            },
          }}
        >
          Add to cart
        </Button>
      </Box>
    </Card>
  );
}
