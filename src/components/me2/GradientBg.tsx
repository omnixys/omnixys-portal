"use client";

import { Box } from "@mui/material";
import React, { JSX, useEffect, useRef, useState } from "react";

/* =====================================================
   Background Gradient Animation
===================================================== */

export const BackgroundGradientAnimation = ({
  children,
}: {
  children?: React.ReactNode;
}): JSX.Element => {
  const interactiveRef = useRef<HTMLDivElement>(null);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--gradient-bg",
      "linear-gradient(40deg, #6c00a2, #001152)",
    );
  }, []);

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!interactiveRef.current) return;
    const rect = interactiveRef.current.getBoundingClientRect();
    setX(e.clientX - rect.left);
    setY(e.clientY - rect.top);
    interactiveRef.current.style.transform = `translate(${x}px, ${y}px)`;
  };

  return (
    <Box
      onMouseMove={onMouseMove}
      sx={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        background: "var(--gradient-bg)",
      }}
    >
      <Box
        ref={interactiveRef}
        sx={{
          position: "absolute",
          inset: "-50%",
          background:
            "radial-gradient(circle, rgba(140,100,255,0.6), transparent 70%)",
          filter: "blur(80px)",
        }}
      />
      {children}
    </Box>
  );
};
