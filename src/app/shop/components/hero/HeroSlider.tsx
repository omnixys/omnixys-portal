// components/hero/HeroSlider.tsx
"use client";

import { Box } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { HeroSlide } from "./HeroSlide";
import { DotPagination } from "../ui/DotPagination";

const slides = [
  {
    key: 1,
    title: "Level Up Your Gaming Experience",
    subtitle: "From immersive sound to precise control",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7",
  },
  {
    key: 2,
    title: "Experience Pure Sound",
    subtitle: "Your perfect headphones await",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7",
  },
  {
    key: 3,
    title: "Experience Pure Sound2",
    subtitle: "Your perfect headphones await4",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
  },
  {
    key: 4,
    title: "Experience Pure Sound3",
    subtitle: "Your perfect headphones await3",
    image:
      "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png",
  },
];

export function HeroSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setIndex((i) => (i + 1) % slides.length),
      5000,
    );
    return () => clearInterval(id);
  }, []);

  return (
    <Box
      sx={{
        backgroundColor: "#f5f5f7",
        borderRadius: 4,
        maxWidth: 1280,
        mx: "auto",
        mt: 4,
        overflow: "hidden",
        py: 6,
      }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -40 }}
          transition={{ duration: 0.5 }}
        >
          <HeroSlide
            key={slides[index].title}
            title={slides[index].title}
            subtitle={slides[index].subtitle}
            image={slides[index].image}
          />
        </motion.div>
      </AnimatePresence>

      <DotPagination count={slides.length} active={index} />
    </Box>
  );
}
