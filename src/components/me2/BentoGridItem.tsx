"use client";

import { Box, Typography } from "@mui/material";
import React, { JSX } from "react";
import { motion } from "framer-motion";

interface BentoGridItemProps {
  id: number;
  title?: React.ReactNode;
  description?: React.ReactNode;
  img?: string;
  spareImg?: string;
  children?: React.ReactNode;
}

export const BentoGridItem = ({
  id,
  title,
  description,
  img,
  spareImg,
  children,
}: BentoGridItemProps): JSX.Element => {
  return (
    <Box
      component={motion.div}
      whileHover={{ y: -4 }}
      sx={{
        position: "relative",
        overflow: "hidden",
        borderRadius: "24px",
        border: "1px solid rgba(255,255,255,0.1)",
        background:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        minHeight: 200,
      }}
    >
      {img && (
        <Box
          // component="img"
          src={img}
          alt=""
          sx={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 0,
          }}
        />
      )}

      {spareImg && (
        <Box
          // component="img"
          src={spareImg}
          alt=""
          sx={{
            position: "absolute",
            right: 0,
            bottom: "-20px",
            width: "100%",
            opacity: 0.8,
          }}
        />
      )}

      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          p: { xs: 3, lg: 5 },
          display: "flex",
          flexDirection: "column",
          gap: 1,
        }}
      >
        {description && (
          <Typography
            sx={{
              fontSize: { xs: "0.75rem", lg: "1rem" },
              color: "#C1C2D3",
              fontWeight: 300,
              maxWidth: 320,
            }}
          >
            {description}
          </Typography>
        )}

        {title && (
          <Typography
            sx={{
              fontSize: { xs: "1.1rem", lg: "1.875rem" },
              fontWeight: 700,
              maxWidth: 380,
              color: "#FFFFFF",
            }}
          >
            {title}
          </Typography>
        )}

        {children}
      </Box>
    </Box>
  );
};
