"use client";

import { Box } from "@mui/material";
import { motion } from "framer-motion";
import React, { JSX, useEffect, useState } from "react";

type Direction = "TOP" | "LEFT" | "BOTTOM" | "RIGHT";

interface HoverBorderGradientProps {
  children: React.ReactNode;
  duration?: number;
  clockwise?: boolean;
}

export function HoverBorderGradient({
  children,
  duration = 1,
  clockwise = true,
}: HoverBorderGradientProps): JSX.Element {
  const [hovered, setHovered] = useState(false);
  const [direction, setDirection] = useState<Direction>("TOP");

  const rotateDirection = (dir: Direction): Direction => {
    const dirs: Direction[] = ["TOP", "LEFT", "BOTTOM", "RIGHT"];
    const index = dirs.indexOf(dir);
    return clockwise
      ? dirs[(index - 1 + dirs.length) % dirs.length]
      : dirs[(index + 1) % dirs.length];
  };

  useEffect(() => {
    if (!hovered) {
      const id = setInterval(
        () => setDirection((d) => rotateDirection(d)),
        duration * 1000,
      );
      return () => clearInterval(id);
    }
  }, [hovered]);

  const gradients: Record<Direction, string> = {
    TOP: "radial-gradient(20% 50% at 50% 0%, white 0%, transparent 100%)",
    LEFT: "radial-gradient(20% 50% at 0% 50%, white 0%, transparent 100%)",
    BOTTOM: "radial-gradient(20% 50% at 50% 100%, white 0%, transparent 100%)",
    RIGHT: "radial-gradient(20% 50% at 100% 50%, white 0%, transparent 100%)",
  };

  return (
    <Box
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      sx={{
        position: "relative",
        borderRadius: "999px",
        padding: "1px",
        backgroundColor: "rgba(255,255,255,0.2)",
        width: "fit-content",
      }}
    >
      <Box
        sx={{
          backgroundColor: "#000",
          color: "#fff",
          px: 2,
          py: 1,
          borderRadius: "inherit",
          position: "relative",
          zIndex: 1,
        }}
      >
        {children}
      </Box>

      <Box
        component={motion.div}
        initial={{ background: gradients[direction] }}
        animate={{
          background: hovered
            ? [
                gradients[direction],
                "radial-gradient(circle, #3275F8, transparent 70%)",
              ]
            : gradients[direction],
        }}
        transition={{ duration, ease: "linear" }}
        sx={{
          position: "absolute",
          inset: 0,
          borderRadius: "inherit",
          filter: "blur(2px)",
        }}
      />
    </Box>
  );
}
