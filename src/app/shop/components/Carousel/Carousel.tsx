// components/ui/Carousel.tsx
"use client";

import { Box } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

interface CarouselProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
  autoPlay?: boolean;
  interval?: number;
}

export function Carousel<T>({
  items,
  renderItem,
  autoPlay = true,
  interval = 4000,
}: CarouselProps<T>) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!autoPlay) return;
    const id = setInterval(
      () => setIndex((i) => (i + 1) % items.length),
      interval,
    );
    return () => clearInterval(id);
  }, [autoPlay, interval, items.length]);

  return (
    <Box sx={{ overflow: "hidden", width: "100%" }}>
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ x: 80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -80, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          {renderItem(items[index])}
        </motion.div>
      </AnimatePresence>
    </Box>
  );
}
