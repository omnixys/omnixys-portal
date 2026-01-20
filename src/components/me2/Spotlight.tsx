import React from "react";
import { Box } from "@mui/material";

type SpotlightProps = {
  fill?: string;
  sx?: object;
};

export const Spotlight = ({ fill = "white", sx }: SpotlightProps) => {
  return (
    <Box
      component="svg"
      sx={{
        position: "absolute",
        inset: 0,
        width: "140%",
        height: "170%",
        opacity: 0,
        animation: "spotlight 2s ease forwards",
        pointerEvents: "none",
        ...sx,
      }}
      viewBox="0 0 3787 2842"
      fill="none"
    >
      <defs>
        <filter id="blur">
          <feGaussianBlur stdDeviation="151" />
        </filter>
      </defs>
      <ellipse
        cx="1924"
        cy="273"
        rx="1924"
        ry="273"
        fill={fill}
        fillOpacity="0.21"
        filter="url(#blur)"
      />
    </Box>
  );
};
