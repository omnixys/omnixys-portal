"use client";

import { Box } from "@mui/material";
import { motion } from "framer-motion";
import { useDevice } from "../../../providers/DeviceProvider";

export default function RomanticBackground() {
  const { isMobile } = useDevice();

  const heartCount = isMobile ? 8 : 15;
  const petalCount = isMobile ? 10 : 20;

  return (
    <Box
      sx={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        zIndex: 0,
        overflow: "hidden",
        background: "linear-gradient(180deg, #fff5f7 0%, #fffafb 100%)",
      }}
    >
      {/* Schwebende Herzen */}
      {Array.from({ length: heartCount }).map((_, i) => (
        <motion.div
          key={`heart-${i}`}
          style={{
            position: "absolute",
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            fontSize: `${Math.random() * 20 + 10}px`,
            opacity: 0.2,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: Math.random() * 4 + 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          ❤️
        </motion.div>
      ))}

      {/* Fallende Blütenblätter */}
      {Array.from({ length: petalCount }).map((_, i) => (
        <motion.div
          key={`petal-${i}`}
          style={{
            position: "absolute",
            top: -50,
            left: `${Math.random() * 100}%`,
            fontSize: `${Math.random() * 24 + 16}px`,
            opacity: 0.6,
          }}
          animate={{
            y: ["0vh", "100vh"],
            x: [0, Math.random() * 200 - 100],
            rotate: [0, 360],
          }}
          transition={{
            duration: Math.random() * 5 + 10,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "linear",
          }}
        >
          {["🌸", "💮", "🌺", "🌹"][Math.floor(Math.random() * 4)]}
        </motion.div>
      ))}

      {/* Glitzer-Effekte */}
      {Array.from({ length: isMobile ? 5 : 10 }).map((_, i) => (
        <motion.div
          key={`sparkle-${i}`}
          style={{
            position: "absolute",
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            fontSize: "16px",
            opacity: 0,
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        >
          ✨
        </motion.div>
      ))}
    </Box>
  );
}
