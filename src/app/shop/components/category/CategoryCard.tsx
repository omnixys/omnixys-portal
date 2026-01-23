// components/category/CategoryCard.tsx
"use client";

import { Box, Button, Typography } from "@mui/material";
import { motion } from "framer-motion";
import Link from "next/link";
import { CategoryCard as CategoryCardType } from "../../types";

export function CategoryCard({
  title,
  subtitle,
  image,
  href,
}: CategoryCardType) {
  return (
    <Box
      component={motion.div}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
      sx={{
        position: "relative",
        height: 320,
        borderRadius: 4,
        overflow: "hidden",
        boxShadow: "0 10px 30px rgba(0,0,0,0.12)",
        cursor: "pointer",
      }}
    >
      {/* Background Image */}
      <Box
        component="img"
        src={image}
        alt={title}
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transition: "transform .4s",
          "&:hover": {
            transform: "scale(1.05)",
          },
        }}
      />

      {/* Overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to top, rgba(0,0,0,.55), rgba(0,0,0,.1))",
        }}
      />

      {/* Content */}
      <Box
        sx={{
          position: "absolute",
          bottom: 24,
          left: 24,
          color: "#fff",
        }}
      >
        <Typography fontSize={20} fontWeight={700}>
          {title}
        </Typography>

        {subtitle && (
          <Typography fontSize={14} sx={{ opacity: 0.85, mt: 0.5 }}>
            {subtitle}
          </Typography>
        )}

        <Button
          component={Link}
          href={href}
          variant="contained"
          sx={{
            mt: 2,
            backgroundColor: "#fff",
            color: "#000",
            borderRadius: 999,
            px: 3,
            textTransform: "none",
            fontWeight: 600,
            "&:hover": {
              backgroundColor: "#f2f2f2",
            },
          }}
        >
          Shop Now
        </Button>
      </Box>
    </Box>
  );
}
