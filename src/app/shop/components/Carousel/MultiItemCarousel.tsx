// components/ui/MultiItemCarousel.tsx
"use client";

import { Box } from "@mui/material";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface MultiItemCarouselProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
  visibleCount?: number;
  gap?: number;
  autoPlay?: boolean;
  interval?: number;
}

export function MultiItemCarousel<T>({
  items,
  renderItem,
  visibleCount = 3,
  gap = 24,
  autoPlay = false,
  interval = 4000,
}: MultiItemCarouselProps<T>) {
  const [index, setIndex] = useState(0);

  const maxIndex = Math.max(items.length - visibleCount, 0);

  useEffect(() => {
    if (!autoPlay || maxIndex === 0) return;

    const id = setInterval(() => {
      setIndex((i) => (i >= maxIndex ? 0 : i + 1));
    }, interval);

    return () => clearInterval(id);
  }, [autoPlay, interval, maxIndex]);

  return (
    <Box sx={{ overflow: "hidden", width: "100%" }}>
      <motion.div
        animate={{
          x: `calc(-${index * (100 / visibleCount)}% - ${index * gap}px)`,
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        style={{
          display: "flex",
          gap,
        }}
      >
        {items.map((item, i) => (
          <Box
            key={i}
            sx={{
              flex: `0 0 calc(${100 / visibleCount}% - ${
                (gap * (visibleCount - 1)) / visibleCount
              }px)`,
            }}
          >
            {renderItem(item)}
          </Box>
        ))}
      </motion.div>
    </Box>
  );
}
