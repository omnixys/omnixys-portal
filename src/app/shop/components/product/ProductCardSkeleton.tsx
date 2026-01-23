"use client";

import { Box, Card, Skeleton } from "@mui/material";

export function ProductCardSkeleton() {
  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        borderRadius: 3,
        boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
      }}
    >
      {/* Image */}
      <Box sx={{ p: 3, height: 220 }}>
        <Skeleton variant="rectangular" height="100%" />
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
        {/* Title */}
        <Skeleton height={20} />
        <Skeleton height={20} width="80%" sx={{ mt: 0.5 }} />

        {/* Description */}
        <Skeleton height={16} sx={{ mt: 1 }} />
        <Skeleton height={16} width="70%" />

        {/* Rating + Price */}
        <Box sx={{ mt: 1, minHeight: 56 }}>
          <Skeleton height={16} width="50%" />
          <Skeleton height={24} width="40%" sx={{ mt: 0.5 }} />
        </Box>

        {/* Button */}
        <Skeleton
          variant="rectangular"
          height={40}
          sx={{ mt: "auto", borderRadius: 999 }}
        />
      </Box>
    </Card>
  );
}
