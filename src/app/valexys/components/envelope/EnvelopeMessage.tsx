"use client";

import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

export default function EnvelopeMessage() {
  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        delay: 0.9,
        duration: 0.5,
        ease: "easeOut",
      }}
      sx={{
        textAlign: "center",
        px: 2,
      }}
    >
      <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
        💌 Du bist eingeladen
      </Typography>

      <Typography variant="body2" sx={{ color: "text.secondary" }}>
        Wir freuen uns sehr, dich bei unserem besonderen Anlass begrüßen zu
        dürfen.
      </Typography>
    </Box>
  );
}
