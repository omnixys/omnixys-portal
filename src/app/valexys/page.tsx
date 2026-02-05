"use client";

import { Box, Button, Stack, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useDevice } from "../../providers/DeviceProvider";
import { useBackgroundMusic } from "./hooks/useBackgroundMusic";
import Envelope from "./components/envelope/Envelope";
import ValentineCard from "./components/ValentineCard";

export default function Page() {
  const [open, setOpen] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const { isMobile } = useDevice();

  // 🎵 Musik läuft NUR in Card-Phase
  useBackgroundMusic("/music/romantic.mp3", open);

  // 🌹 Zeige Hinweis nach kurzer Zeit
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHint(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  // ❤️ Herzanimationen im Hintergrund
  const renderHearts = () => {
    const heartCount = isMobile ? 8 : 15;
    return Array.from({ length: heartCount }).map((_, i) => (
      <motion.div
        key={i}
        style={{
          position: "fixed",
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          fontSize: `${Math.random() * 20 + 10}px`,
          opacity: 0.3,
          pointerEvents: "none",
          zIndex: 0,
        }}
        animate={{
          y: [0, -30, 0],
          x: [0, Math.random() * 20 - 10, 0],
          rotate: [0, 360],
        }}
        transition={{
          duration: Math.random() * 3 + 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        ❤️
      </motion.div>
    ));
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background:
          "linear-gradient(135deg, #fff0f5 0%, #fffafc 50%, #ffe6ee 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* 🌟 Glitzer-Effekte im Hintergrund */}
      {renderHearts()}

      {/* ✨ Subtile Partikeleffekte */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background: `
            radial-gradient(circle at 20% 30%, rgba(255,182,193,0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(255,105,180,0.1) 0%, transparent 50%),
            radial-gradient(circle at 40% 80%, rgba(255,192,203,0.1) 0%, transparent 50%)
          `,
          zIndex: 0,
        }}
      />

      <AnimatePresence mode="wait">
        {!open && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={{ width: "100%", zIndex: 1 }}
          >
            <Stack spacing={4} alignItems="center">
              <motion.div
                animate={{
                  y: [0, -8, 0],
                  rotate: [0, 1, -1, 0],
                }}
                transition={{
                  y: {
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                  rotate: {
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
              >
                <Envelope open={open} onExtracted={() => setOpen(true)} />
              </motion.div>

              <Stack spacing={2} alignItems="center">
                <Button
                  variant="contained"
                  size="large"
                  component={motion.button}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  sx={{
                    px: 5,
                    py: 1.5,
                    borderRadius: 999,
                    background: "linear-gradient(135deg, #ff6b9d, #ff3366)",
                    fontSize: "1.1rem",
                    fontWeight: 600,
                    boxShadow: "0 12px 35px rgba(255,51,102,0.4)",
                    "&:hover": {
                      background: "linear-gradient(135deg, #ff3366, #e6004c)",
                      boxShadow: "0 16px 40px rgba(255,51,102,0.6)",
                    },
                  }}
                  onClick={() => setOpen(true)}
                >
                  💌 Umschlag öffnen
                </Button>

                <AnimatePresence>
                  {showHint && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                    >
                      <Typography
                        variant="body2"
                        sx={{
                          color: "text.secondary",
                          fontStyle: "italic",
                          textAlign: "center",
                          maxWidth: 300,
                          animation: "pulse 2s infinite",
                          "@keyframes pulse": {
                            "0%, 100%": { opacity: 0.7 },
                            "50%": { opacity: 1 },
                          },
                        }}
                      >
                        Klick, um die Überraschung zu entdecken...
                      </Typography>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Stack>

              {/* 🌹 Romantischer Text */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    textAlign: "center",
                    maxWidth: 400,
                    px: 2,
                    color: "text.secondary",
                    fontFamily: "'Dancing Script', cursive",
                    fontSize: "1.2rem",
                  }}
                >
                  "In jedem Herzen schlägt die Hoffnung auf Liebe..."
                </Typography>
              </motion.div>
            </Stack>
          </motion.div>
        )}

        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            style={{ width: "100%", zIndex: 1 }}
          >
            <Box sx={{ width: "100%", maxWidth: 920 }}>
              <ValentineCard />
            </Box>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 🌹 Blütenblätter-Animation */}
      {open && (
        <Box
          sx={{
            position: "fixed",
            inset: 0,
            pointerEvents: "none",
            zIndex: 0,
            overflow: "hidden",
          }}
        >
          {Array.from({ length: isMobile ? 12 : 20 }).map((_, i) => (
            <motion.div
              key={i}
              style={{
                position: "absolute",
                top: -50,
                left: `${Math.random() * 100}%`,
                fontSize: `${Math.random() * 24 + 16}px`,
                opacity: 0.7,
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
              {i % 3 === 0 ? "🌸" : i % 3 === 1 ? "💮" : "🌺"}
            </motion.div>
          ))}
        </Box>
      )}

      {/* 🛠️ Admin Button (versteckt) */}
      {typeof window !== "undefined" &&
        localStorage.getItem("omnixys-admin") === "true" && (
          <Box
            sx={{
              position: "fixed",
              bottom: 24,
              right: 24,
              zIndex: 9999,
            }}
          >
            <Button
              variant="outlined"
              color="secondary"
              size="small"
              onClick={() => {
                localStorage.removeItem("valenxys-state");
                window.location.reload();
              }}
              sx={{
                backdropFilter: "blur(10px)",
                background: "rgba(255,255,255,0.8)",
              }}
            >
              🔄 Reset Valentine
            </Button>
          </Box>
        )}
    </Box>
  );
}
