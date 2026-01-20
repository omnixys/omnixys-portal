"use client";

import { Box } from "@mui/material";
import React, { JSX } from "react";

interface BentoGridProps {
  children?: React.ReactNode;
}

export const BentoGrid = ({ children }: BentoGridProps): JSX.Element => {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: {
          xs: "1fr",
          md: "repeat(6, 1fr)",
          lg: "repeat(5, 1fr)",
        },
        gap: { xs: 4, lg: 8 },
        mx: "auto",
        width: "100%",
      }}
    >
      {children}
    </Box>
  );
};
