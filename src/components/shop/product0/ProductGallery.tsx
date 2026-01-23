// components/product/ProductGallery.tsx
"use client";

import { Box } from "@mui/material";

export function ProductGallery({ images }: { images: string[] }) {
  return (
    <Box>
      {/* Main image */}
      <Box
        sx={{
          backgroundColor: "#fff",
          borderRadius: 3,
          p: 4,
          border: "1px solid #eee",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mb: 2,
        }}
      >
        <Box
          component="img"
          src={images[0]}
          alt="Product"
          sx={{
            maxHeight: 360,
            objectFit: "contain",
          }}
        />
      </Box>

      {/* Thumbnails */}
      <Box sx={{ display: "flex", gap: 2 }}>
        {images.map((img, i) => (
          <Box
            key={i}
            component="img"
            src={img}
            sx={{
              width: 64,
              height: 64,
              borderRadius: 2,
              border: "1px solid #ddd",
              p: 1,
              objectFit: "contain",
              cursor: "pointer",
            }}
          />
        ))}
      </Box>
    </Box>
  );
}
