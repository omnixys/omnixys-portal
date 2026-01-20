"use client";

import { Box } from "@mui/material";
import {
  motion,
  useAnimationFrame,
  useMotionTemplate,
  useMotionValue,
  useTransform,
} from "framer-motion";
import React, { JSX, useRef } from "react";

/* =====================================================
   Moving Border
===================================================== */

export const MovingBorder = ({
  children,
  duration = 2000,
}: {
  children: React.ReactNode;
  duration?: number;
}): JSX.Element => {
  const pathRef = useRef<SVGRectElement | null>(null);
  const progress = useMotionValue(0);

  useAnimationFrame((time) => {
    const length = pathRef.current?.getTotalLength();
    if (!length) return;
    progress.set((time * length) / duration);
  });

  const x = useTransform(
    progress,
    (v) => pathRef.current?.getPointAtLength(v).x,
  );
  const y = useTransform(
    progress,
    (v) => pathRef.current?.getPointAtLength(v).y,
  );

  const transform = useMotionTemplate`
    translateX(${x}px) translateY(${y}px) translate(-50%, -50%)
  `;

  return (
    <Box sx={{ position: "absolute", inset: 0 }}>
      <svg width="100%" height="100%">
        <rect
          ref={pathRef}
          width="100%"
          height="100%"
          rx="30%"
          ry="30%"
          fill="none"
        />
      </svg>

      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          transform,
        }}
      >
        {children}
      </motion.div>
    </Box>
  );
};
