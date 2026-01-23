// components/ui/InfiniteMultiItemCarousel.tsx
"use client";

import { Box } from "@mui/material";
import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

interface InfiniteMultiItemCarouselProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
  visibleCount?: number;
  gap?: number;
  autoPlay?: boolean;
  interval?: number;
}

export function InfiniteMultiItemCarousel<T>({
  items,
  renderItem,
  visibleCount = 3,
  gap = 24,
  autoPlay = true,
  interval = 4000,
}: InfiniteMultiItemCarouselProps<T>) {
  const extendedItems = useMemo(() => {
    if (items.length <= visibleCount) return items;
    return [
      ...items.slice(-visibleCount),
      ...items,
      ...items.slice(0, visibleCount),
    ];
  }, [items, visibleCount]);

  const [index, setIndex] = useState(visibleCount);
  const [animate, setAnimate] = useState(true);

  const maxIndex = items.length + visibleCount;

  useEffect(() => {
    if (!autoPlay || items.length <= visibleCount) return;

    const id = setInterval(() => {
      setIndex((i) => i + 1);
    }, interval);

    return () => clearInterval(id);
  }, [autoPlay, interval, items.length, visibleCount]);

  // Reset without animation when hitting clones
  useEffect(() => {
    if (index === maxIndex) {
      setTimeout(() => {
        setAnimate(false);
        setIndex(visibleCount);
      }, 300);
    }
  }, [index, maxIndex, visibleCount]);

  // Re-enable animation
  useEffect(() => {
    if (!animate) {
      requestAnimationFrame(() => setAnimate(true));
    }
  }, [animate]);

  return (
    <Box sx={{ overflow: "hidden", width: "100%", pl: 15, pr: 0, }}>
      <motion.div
        animate={{
          x: `calc(-${index * (100 / visibleCount)}% - ${index * gap}px)`,
        }}
        transition={
          animate ? { duration: 0.5, ease: "easeInOut" } : { duration: 0 }
        }
        style={{
          display: "flex",
          gap,
        }}
      >
        {extendedItems.map((item, i) => (
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
