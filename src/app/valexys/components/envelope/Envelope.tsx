"use client";

import { Box, Typography } from "@mui/material";
import { motion, useAnimationControls } from "framer-motion";
import { useEffect } from "react";
import { EnvelopeProps } from "./Envelope.types";
import * as sx from "./Envelope.styles";
import { envelopeWrapperSx } from "./Envelope.styles";
import { useDevice } from "../../../../providers/DeviceProvider";

export default function Envelope({ open = false, onExtracted }: EnvelopeProps) {
  const { isDesktop } = useDevice();

  const cardControls = useAnimationControls();
  const flapControls = useAnimationControls();

  useEffect(() => {
    if (open) {
      flapControls.start({
        rotateX: -180,
        transition: { duration: 0.7, ease: "easeInOut" },
      });

      cardControls.start({
        y: -90,
        transition: { delay: 0.4, duration: 0.6, ease: "easeOut" },
      });

      if (onExtracted) {
        const t = setTimeout(onExtracted, 1100);
        return () => clearTimeout(t);
      }
    } else {
      flapControls.start({ rotateX: 0 });
      cardControls.start({ y: 0 });
    }
  }, [open, flapControls, cardControls, onExtracted]);

  return (
    <Box
      component={motion.div}
      sx={{
        ...sx.envelopeContainer,
        ...envelopeWrapperSx,
      }}
      whileHover={isDesktop ? { y: -6 } : undefined}
      transition={{ type: "spring", stiffness: 200, damping: 18 }}
    >
      {/* Back */}
      <Box sx={sx.backPanel} />

      {/* Card inside */}
      <Box
        component={motion.div}
        animate={cardControls}
        initial={{ y: 0 }}
        sx={{
          position: "absolute",
          left: "8%",
          right: "8%",
          bottom: "12%",
          height: "70%",
          background: "linear-gradient(180deg, #ffffff, #f7f7f7)",
          borderRadius: 2,
          boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
          zIndex: open ? 1 : 0,
        }}
      />

      <Box
        sx={{
          ...sx.sidePanel,
          transform: open ? "translateY(80%)" : undefined,
          height: open ? "50%" : undefined,
        }}
      />

      {/* Top flap */}
      <Box
        component={motion.div}
        animate={flapControls}
        initial={{ rotateX: 0 }}
        sx={{ ...sx.topFlap, zIndex: open ? 0 : 4 }}
        style={{ transformStyle: "preserve-3d" }}
      />

      {/* Front flap */}
      <Box sx={sx.frontFlap} />

      {/* Text */}
      <Box
        component={motion.div}
        animate={{
          opacity: open ? 0 : 1,
          scale: open ? 0.92 : 1,
          y: open ? -6 : 0,
        }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        sx={{
          position: "absolute",
          inset: 0,
          zIndex: 5,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          pointerEvents: "none",
        }}
      >
        <Typography
          sx={{
            fontFamily: "'Playfair Display', serif",
            fontSize: { xs: 20, sm: 22, md: 24 },
            fontWeight: 500,
            color: "#7a3b3b",
            letterSpacing: "0.05em",
          }}
        >
          Für Rachel ❤️
        </Typography>
      </Box>
    </Box>
  );
}
