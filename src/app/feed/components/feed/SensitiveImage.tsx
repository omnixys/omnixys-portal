"use client";

import { Box, Typography } from "@mui/material";
import { useState } from "react";

type Props = {
  src: string;
  sensitive?: boolean;
  revealed: boolean;
  onReveal: () => void;
  aspectRatio?: string;
};

export default function SensitiveImage({
  src,
  sensitive,
  revealed,
  onReveal,
  aspectRatio = "16 / 9",
}: Props) {
    const toggleReveal = () => {
      if (sensitive && revealed) {
        onReveal();
      }
    };
  
  return (
    <Box
      onClick={toggleReveal}
      position="relative"
      width="100%"
      sx={{
        aspectRatio: "16 / 9", // 🔑 feste Höhe
        borderRadius: 2,
        overflow: "hidden", // 🔑 Overlay exakt begrenzen
      }}
    >
      {/* IMAGE */}
      <Box
        component="img"
        src={src}
        sx={{
          position: "absolute",
          width: "100%",
          height: "100%", // 🔑 füllt Container
          objectFit: "cover",
          display: "block", // 🔑 kein baseline-gap
          filter: sensitive && !revealed ? "blur(18px)" : "none",
          transition: "filter 0.25s ease",
        }}
      />

      {/* OVERLAY */}
      {sensitive && !revealed && (
        <Box
          top="45%"
          left="30%"
          position="absolute"
          inset={0}
          display="flex"
          alignItems="center"
          justifyContent="center"
          bgcolor="rgba(0,0,0,0.55)"
          sx={{
            zIndex: 3,
            cursor: "pointer",
          }}
          onClick={onReveal}
        >
          <Typography
            sx={{
              color: "#fff",
              fontWeight: 600,
              px: 2,
              py: 1,
              borderRadius: 999,
              bgcolor: "rgba(0,0,0,0.65)",
            }}
          >
            View sensitive content
          </Typography>
        </Box>
      )}
    </Box>
  );
}
