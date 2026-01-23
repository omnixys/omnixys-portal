// components/sections/Newsletter.tsx
"use client";

import { Box, Button, InputBase, Typography } from "@mui/material";
import { motion } from "framer-motion";

export function Newsletter() {
  return (
    <Box
      component={motion.section}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      sx={{
        maxWidth: 1280,
        mx: "auto",
        mt: 10,
        px: 4,
      }}
    >
      <Box
        sx={{
          backgroundColor: "#f5f5f7",
          borderRadius: 4,
          px: { xs: 3, md: 8 },
          py: { xs: 5, md: 6 },
          textAlign: "center",
        }}
      >
        <Typography fontSize={28} fontWeight={700} mb={1}>
          Subscribe & get 20% off
        </Typography>

        <Typography color="text.secondary" mb={4}>
          Join our newsletter and get updates on new products and offers
        </Typography>

        <Box
          sx={{
            maxWidth: 420,
            mx: "auto",
            display: "flex",
            backgroundColor: "#fff",
            borderRadius: 999,
            overflow: "hidden",
            boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
          }}
        >
          <InputBase
            placeholder="Enter your email"
            sx={{
              flex: 1,
              px: 3,
              py: 1.5,
              fontSize: 14,
            }}
          />

          <Button
            sx={{
              px: 4,
              borderRadius: 999,
              backgroundColor: "#000",
              color: "#fff",
              textTransform: "none",
              fontWeight: 600,
              "&:hover": {
                backgroundColor: "#222",
              },
            }}
          >
            Subscribe
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
