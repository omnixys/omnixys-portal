"use client";

import React, { JSX, useState } from "react";
import { Box } from "@mui/material";
import { motion } from "framer-motion";

interface PinContainerProps {
  children: React.ReactNode;
  title?: string;
  href?: string;
}

export const PinContainer = ({
  children,
  title,
  href,
}: PinContainerProps): JSX.Element => {
  const [transform, setTransform] = useState(
    "translate(-50%,-50%) rotateX(0deg) scale(1)",
  );

  return (
    <Box
      onMouseEnter={() =>
        setTransform("translate(-50%,-50%) rotateX(40deg) scale(0.8)")
      }
      onMouseLeave={() =>
        setTransform("translate(-50%,-50%) rotateX(0deg) scale(1)")
      }
      sx={{
        position: "relative",
        cursor: "pointer",
        zIndex: 50,
      }}
    >
      <Box
        sx={{
          perspective: "1000px",
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "rotateX(70deg) translate(-50%, -50%)",
        }}
      >
        <Box
          sx={{
            transform,
            p: 2,
            borderRadius: "16px",
            border: "1px solid rgba(255,255,255,0.15)",
            boxShadow: "0 8px 16px rgba(0,0,0,0.4)",
            transition: "transform 0.7s",
            backgroundColor: "#020617",
          }}
        >
          {children}
        </Box>
      </Box>

      <PinPerspective title={title} href={href} />
    </Box>
  );
};

const PinPerspective = ({ title, href }: { title?: string; href?: string }) => {
  return (
    <Box
      component={motion.div}
      sx={{
        width: "100%",
        height: "20rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        opacity: 0,
        transition: "opacity 0.5s",
        pointerEvents: "none",
      }}
      whileHover={{ opacity: 1 }}
    >
      {title && (
        <Box
          component="a"
          href={href}
          target="_blank"
          sx={{
            px: 3,
            py: 0.5,
            borderRadius: "999px",
            backgroundColor: "#020617",
            border: "1px solid rgba(255,255,255,0.1)",
            color: "#fff",
            fontSize: "0.75rem",
            fontWeight: 700,
            textDecoration: "none",
          }}
        >
          {title}
        </Box>
      )}
    </Box>
  );
};
