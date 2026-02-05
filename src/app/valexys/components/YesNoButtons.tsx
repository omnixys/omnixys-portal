"use client";

import { Button, Box, Typography } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { useSoundEffect } from "../hooks/useSoundEffect";
import { useDevice } from "../../../providers/DeviceProvider";

const MotionButton = motion(Button);

export default function YesNoButtons({ onYes }: { onYes: () => void }) {
  const { isDesktop } = useDevice();

  const [noPos, setNoPos] = useState({ x: 0, y: 0 });
  const [showHint, setShowHint] = useState(false);
  const lastMove = useRef(0);

  const { play: playYesSound } = useSoundEffect("/sounds/yes.wav", 0.7);
  const { play: playNoSound } = useSoundEffect("/sounds/no.wav", 0.6);

  function moveNoButton() {
    const now = Date.now();
    if (now - lastMove.current < 80) return;
    lastMove.current = now;

    playNoSound();
    setShowHint(true);

    // viewport-aware movement
    const maxX = window.innerWidth < 400 ? 90 : 140;
    const maxY = 32;

    const x = (Math.random() - 0.5) * maxX * 2;
    const y = (Math.random() - 0.5) * maxY * 2;

    setNoPos({ x, y });
  }

  function handleYes() {
    playYesSound();
    navigator.vibrate?.(15);
    onYes();
  }

  return (
    <Box
      sx={{
        position: "relative",
        height: 140,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
        overflow: "hidden",
      }}
    >
      {/* ================= BUTTON ROW ================= */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: 72,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* YES */}
        <MotionButton
          variant="contained"
          size="large"
          whileTap={{ scale: 0.94 }}
          onClick={handleYes}
          sx={{
            px: { xs: 5, sm: 6 },
            fontSize: "1.1rem",
            borderRadius: 999,
            zIndex: 2,
          }}
        >
          Ja 💖
        </MotionButton>

        {/* NO */}
        <MotionButton
          variant="outlined"
          animate={{ x: noPos.x, y: noPos.y }}
          transition={{
            type: "tween",
            duration: 0.1,
            ease: "linear",
          }}
          onPointerEnter={isDesktop ? moveNoButton : undefined}
          onPointerDown={(e) => {
            e.preventDefault();
            moveNoButton();
          }}
          sx={{
            position: "absolute",
            right: { xs: "6%", sm: "10%" },
            opacity: 0.65,
            userSelect: "none",
            cursor: "not-allowed",
          }}
        >
          Nein 🙈
        </MotionButton>
      </Box>

      {/* ================= HINT ================= */}
      <AnimatePresence>
        {showHint && (
          <motion.div
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            <Typography
              variant="body2"
              sx={{
                color: "text.secondary",
                fontStyle: "italic",
                textAlign: "center",
              }}
            >
              „Nein“ ist heute ein bisschen schüchtern 🙈
            </Typography>
          </motion.div>
        )}
      </AnimatePresence>
    </Box>
  );
}
