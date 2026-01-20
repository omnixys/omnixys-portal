"use client";

import React, { JSX } from "react";
import { Box, ButtonBase } from "@mui/material";

interface MagicButtonProps {
  title: string;
  icon: React.ReactNode;
  position: "left" | "right";
  handleClick?: () => void;
  otherClasses?: string; // kept for API compatibility (no Tailwind usage)
}

const MagicButton = ({
  title,
  icon,
  position,
  handleClick,
}: MagicButtonProps): JSX.Element => {
  return (
    <Box
      sx={{
        position: "relative",
        display: "inline-flex",
        height: "3rem", // h-12
        width: {
          xs: "100%",
          md: "15rem", // md:w-60
        },
        mt: {
          md: "2.5rem", // md:mt-10
        },
        overflow: "hidden",
        borderRadius: "0.5rem", // rounded-lg
        p: "1px",
      }}
    >
      {/* Spinning gradient border */}
      <Box
        sx={{
          position: "absolute",
          inset: "-1000%",
          animation: "spin 2s linear infinite",
          background:
            "conic-gradient(from 90deg at 50% 50%, #E2CBFF 0%, #393BB2 50%, #E2CBFF 100%)",
        }}
      />

      {/* Button content */}
      <ButtonBase
        onClick={handleClick}
        sx={{
          position: "relative",
          zIndex: 1,
          height: "100%",
          width: "100%",
          borderRadius: "0.5rem",
          backgroundColor: "#020617", // slate-950
          color: "#FFFFFF",
          px: "1.75rem", // px-7
          fontSize: "0.875rem",
          fontWeight: 500,
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "0.5rem", // gap-2
          backdropFilter: "blur(24px)", // backdrop-blur-3xl
        }}
      >
        {position === "left" && icon}
        {title}
        {position === "right" && icon}
      </ButtonBase>

      {/* Keyframes */}
      <style jsx global>{`
        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </Box>
  );
};

export default MagicButton;
