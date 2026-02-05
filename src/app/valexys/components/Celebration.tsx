"use client";

import { Box, Typography } from "@mui/material";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useMemo } from "react";
import { useDevice } from "../../../providers/DeviceProvider";

// -------------------------------------------------------------
// Helpers
// -------------------------------------------------------------
function random(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

// -------------------------------------------------------------
// Component
// -------------------------------------------------------------
export default function Celebration({ onDone }: { onDone?: () => void }) {
  const prefersReducedMotion = useReducedMotion();
  const { isMobile } = useDevice();

  // mehr Herzen und Variationen
  const hearts = useMemo(() => {
    const count = isMobile ? 15 : 25;

    return Array.from({ length: count }).map(() => {
      const size = random(20, 40);
      return {
        x: random(-150, 150),
        y: random(-200, -100),
        scale: random(0.7, 1.5),
        size: size,
        duration: random(1.5, 2.5),
        delay: random(0, 1),
        emoji: ["❤️", "💖", "💕", "💗", "💓", "💞"][
          Math.floor(Math.random() * 6)
        ],
        rotation: random(-180, 180),
      };
    });
  }, [isMobile]);

  useEffect(() => {
    const timer = setTimeout(
      () => {
        onDone?.();
      },
      prefersReducedMotion ? 600 : 2800,
    );

    return () => clearTimeout(timer);
  }, [onDone, prefersReducedMotion]);

  return (
    <Box
      sx={{
        position: "relative",
        py: { xs: 3, sm: 4 },
        textAlign: "center",
        overflow: "hidden",
        minHeight: 300,
      }}
    >
      {/* Success Text */}
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <Typography
          variant="h3"
          sx={{
            fontSize: { xs: "2rem", sm: "2.8rem" },
            fontWeight: 800,
            background: "linear-gradient(135deg, #ff6b9d, #ff3366)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            mb: 1,
          }}
        >
          YAY! 💖
        </Typography>
        <Typography
          variant="h6"
          sx={{
            mt: 1,
            fontWeight: 500,
            animation: "pulse 2s infinite",
            "@keyframes pulse": {
              "0%, 100%": { opacity: 0.8 },
              "50%": { opacity: 1 },
            },
          }}
        >
          Das macht mich unglaublich glücklich!
        </Typography>
      </motion.div>

      {/* Konfetti-Effekt */}
      {!prefersReducedMotion && (
        <>
          {/* Konfetti-Teilchen */}
          {Array.from({ length: isMobile ? 20 : 40 }).map((_, i) => (
            <motion.div
              key={`confetti-${i}`}
              initial={{ opacity: 0, y: -100, x: random(-50, 50) }}
              animate={{
                opacity: [0, 1, 1, 0],
                y: [0, random(100, 300)],
                x: [0, random(-100, 100)],
                rotate: random(-360, 360),
              }}
              transition={{
                duration: random(1.5, 3),
                delay: random(0, 0.5),
                ease: "easeOut",
              }}
              style={{
                position: "absolute",
                left: "50%",
                top: "30%",
                width: random(6, 12),
                height: random(6, 12),
                backgroundColor: [
                  "#ff6b9d",
                  "#ff3366",
                  "#ff9ebb",
                  "#ffd1dc",
                  "#ffccd5",
                ][Math.floor(Math.random() * 5)],
                borderRadius: "50%",
                pointerEvents: "none",
              }}
            />
          ))}

          {/* Herzen */}
          {hearts.map((h, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0, x: 0, y: 0, rotate: 0 }}
              animate={{
                opacity: [0, 1, 1, 0],
                scale: [0, h.scale, h.scale, 0],
                x: [0, h.x, h.x + random(-20, 20)],
                y: [0, h.y, h.y - random(20, 50)],
                rotate: [0, h.rotation],
              }}
              transition={{
                duration: h.duration,
                delay: h.delay,
                ease: "easeOut",
              }}
              style={{
                position: "absolute",
                left: "50%",
                top: "50%",
                fontSize: `${h.size}px`,
                pointerEvents: "none",
                filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.2))",
              }}
            >
              {h.emoji}
            </motion.div>
          ))}
        </>
      )}

      {/* Blitzende Sterne */}
      {!prefersReducedMotion &&
        Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={`star-${i}`}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 0.8,
              repeat: Infinity,
              delay: i * 0.1,
            }}
            style={{
              position: "absolute",
              left: `${random(10, 90)}%`,
              top: `${random(10, 90)}%`,
              fontSize: "20px",
              pointerEvents: "none",
            }}
          >
            ✨
          </motion.div>
        ))}
    </Box>
  );
}
