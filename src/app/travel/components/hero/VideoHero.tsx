"use client";

import { Box, Stack, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";

interface VideoHeroProps {
  title: string;
  subtitle?: string;
  videoSrc: string;
  height?: number;
  ctaLabel?: string;
  onCtaClick?: () => void;
}

export function VideoHero({
  title,
  subtitle,
  videoSrc,
  height = 520,
  ctaLabel,
  onCtaClick,
}: VideoHeroProps) {
  return (
    <Box
      sx={{
        position: "relative",
        height,
        width: "100%",
        overflow: "hidden",
        borderRadius: 4,
      }}
    >
      {/* VIDEO */}
      <Box
        component="video"
        src={videoSrc}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        sx={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />

      {/* DARK GRADIENT OVERLAY */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.25), rgba(0,0,0,0.65))",
        }}
      />

      {/* CONTENT */}
      <Stack
        component={motion.div}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        spacing={2}
        sx={{
          position: "relative",
          zIndex: 1,
          height: "100%",
          color: "#fff",
          px: { xs: 3, md: 6 },
          py: { xs: 4, md: 6 },
          justifyContent: "flex-end",
        }}
      >
        <Typography variant="h3" fontWeight={700}>
          {title}
        </Typography>

        {subtitle && (
          <Typography variant="body1" sx={{ opacity: 0.9, maxWidth: 520 }}>
            {subtitle}
          </Typography>
        )}

        {ctaLabel && (
          <Button
            variant="contained"
            color="primary"
            sx={{ width: "fit-content", mt: 2 }}
            onClick={onCtaClick}
          >
            {ctaLabel}
          </Button>
        )}
      </Stack>
    </Box>
  );
}
