// components/ui/SectionHeading.tsx
"use client";

import { Box, Typography } from "@mui/material";

interface SectionHeadingProps {
  title: string;
  highlight: string;
  subtitle?: string;
  highlightColor?: string;
  underline?: boolean;
}

export function SectionHeading({
  title,
  highlight,
  subtitle,
  highlightColor = "#1b5e20", // PDF Grün
  underline = false,
}: SectionHeadingProps) {
  return (
    <Box sx={{ textAlign: "center", mb: 6 }}>
      {/* Title */}
      <Typography
        fontSize={26}
        fontWeight={700}
        sx={{ position: "relative", display: "inline-block" }}
      >
        {title}{" "}
        <Box component="span" sx={{ color: highlightColor }}>
          {highlight}
        </Box>
        {/* Underline */}
        {underline && (
          <Box
            sx={{
              position: "absolute",
              left: "50%",
              bottom: -10,
              transform: "translateX(-50%)",
              width: 80,
              height: 3,
              borderRadius: 2,
              backgroundColor: highlightColor,
            }}
          />
        )}
      </Typography>

      {/* Subtitle */}
      {subtitle && (
        <Typography fontSize={14} color="text.secondary" sx={{ mt: 3 }}>
          {subtitle}
        </Typography>
      )}
    </Box>
  );
}
