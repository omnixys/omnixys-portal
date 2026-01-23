"use client";

import { motion } from "framer-motion";
import { Box, Button, Typography } from "@mui/material";

const slides = [
  { title: "Level Up Your Gaming", subtitle: "Immersive sound & control" },
  { title: "Latest Tech Deals", subtitle: "Save up to 50%" },
];

export function BannerCarousel() {
  return (
    <Box sx={{ overflow: "hidden", position: "relative", height: 60, backgroundColor: "green", borderBottom: "2px solid black" }}>
      <motion.div
        animate={{ x: ["0%", "-100%"] }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        style={{ display: "flex" }}
      >
        {[...slides, ...slides].map((s, i) => (
          <Box key={i} sx={{ minWidth: "100%" }}>
            <Typography variant="h3">
              {s.title} {s.subtitle} Buy Now
            </Typography>
          </Box>
        ))}
      </motion.div>
    </Box>
  );
}
