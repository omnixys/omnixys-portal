"use client";

import {
  Card,
  Typography,
  Box,
  Stack,
  IconButton,
  Button,
} from "@mui/material";
import { motion, Variants } from "framer-motion";
import { useState, useEffect } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { usePersistentState } from "../hooks/usePersistentState";
import { useBackgroundMusic } from "../hooks/useBackgroundMusic";
import YesNoButtons from "./YesNoButtons";
import Celebration from "./Celebration";
import ActivitiesStep from "./ActivitiesStep";
import WishesStep from "./WishesStep";
import SummaryStep from "./SummaryStep";


// -------------------------------------------------------------
// Animation Variants
// -------------------------------------------------------------
const cardVariants: Variants = {
  hidden: { opacity: 0, scale: 0.96, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const floatingHeartVariants: Variants = {
  float: {
    y: [0, -20, 0],
    rotate: [0, 10, -10, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

// -------------------------------------------------------------
// State Type
// -------------------------------------------------------------
export type ValentineState = {
  accepted: boolean;
  step: "message" | "question" | "activities" | "wishes" | "summary";
  activities: string[];
  wishes: string;
};

// -------------------------------------------------------------
// Schreibmaschinen-Text
// -------------------------------------------------------------
const TYPEWRITER_TEXT = [
  "Rachel,",
  "ich weiß, dass gerade nicht alles leicht ist zwischen uns.",
  "Und ich weiß auch,",
  "dass ich nicht immer alles richtig mache.",
  "",
  "Mir ist nur wichtig,",
  "dass du weißt:",
  "Du bedeutest mir viel.",
  "Und ich denke an dich.",
  "",
  "Wenn es sich für dich richtig anfühlt,",
  "würde ich mich freuen,",
  "diesen Valentinstag",
  "mit dir zu verbringen. ❤️",
];

// -------------------------------------------------------------
// Typewriter-Komponente
// -------------------------------------------------------------
function TypewriterText({ onComplete }: { onComplete: () => void }) {
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (isComplete || currentLineIndex >= TYPEWRITER_TEXT.length) {
      if (!isComplete) {
        setIsComplete(true);
        onComplete();
      }
      return;
    }

    const currentLine = TYPEWRITER_TEXT[currentLineIndex];

    if (currentCharIndex < currentLine.length) {
      const timer = setTimeout(() => {
        setCurrentCharIndex((prev) => prev + 1);
      }, 40);

      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(
        () => {
          setDisplayedLines((prev) => [...prev, currentLine]);
          setCurrentLineIndex((prev) => prev + 1);
          setCurrentCharIndex(0);
        },
        currentLineIndex === TYPEWRITER_TEXT.length - 1 ? 1000 : 400,
      );

      return () => clearTimeout(timer);
    }
  }, [currentLineIndex, currentCharIndex, isComplete, onComplete]);

  const getCurrentDisplay = () => {
    if (currentLineIndex >= TYPEWRITER_TEXT.length) return displayedLines;

    const currentLine = TYPEWRITER_TEXT[currentLineIndex];
    const currentText = currentLine.substring(0, currentCharIndex);

    return [...displayedLines, currentText];
  };

  const lines = getCurrentDisplay();

  return (
    <Box sx={{ position: "relative" }}>
      {lines.map((line, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Typography
            sx={{
              fontFamily:
                index === 0
                  ? "'Playfair Display', serif"
                  : "'Dancing Script', cursive",
              fontSize:
                index === 0
                  ? { xs: "1.8rem", sm: "2rem" }
                  : { xs: "1.4rem", sm: "1.7rem" },
              lineHeight: 1.8,
              color: "#3a0b1f",
              mb: line === "" ? 2.5 : 0.8,
              fontWeight: index === 0 ? 600 : 400,
              letterSpacing: index === 0 ? "0.02em" : "0.01em",
            }}
          >
            {line || " "}
            {index === lines.length - 1 &&
              currentLineIndex < TYPEWRITER_TEXT.length &&
              TYPEWRITER_TEXT[currentLineIndex].length > currentCharIndex && (
                <motion.span
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  style={{
                    color: "#ff3366",
                    fontWeight: "bold",
                    marginLeft: "2px",
                    fontFamily: "monospace",
                  }}
                >
                  █
                </motion.span>
              )}
          </Typography>
        </motion.div>
      ))}

      {/* Schreibmaschinen-Sound-Effekte (visuell) */}
      {currentLineIndex < TYPEWRITER_TEXT.length && (
        <Box
          component={motion.div}
          animate={{
            scale: [1, 1.02, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
          }}
          sx={{
            position: "absolute",
            bottom: -30,
            left: "50%",
            transform: "translateX(-50%)",
            width: 80,
            height: 3,
            background:
              "linear-gradient(90deg, transparent, #ff6b9d, transparent)",
            borderRadius: "3px",
          }}
        />
      )}
    </Box>
  );
}

// -------------------------------------------------------------
// Romantischer Bestätigungs-Button
// -------------------------------------------------------------
function RomanticContinueButton({
  onClick,
  disabled = false,
}: {
  onClick: () => void;
  disabled?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{
        opacity: disabled ? 0 : 1,
        scale: disabled ? 0.8 : 1,
        y: disabled ? 20 : 0,
      }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
        opacity: { duration: 1 },
      }}
      whileHover={{ scale: disabled ? 1 : 1.05 }}
      whileTap={{ scale: disabled ? 1 : 0.95 }}
    >
      <Button
        variant="contained"
        size="large"
        onClick={onClick}
        disabled={disabled}
        sx={{
          px: 5,
          py: 1.8,
          borderRadius: 999,
          background: disabled
            ? "rgba(255,182,193,0.3)"
            : "linear-gradient(135deg, #ff6b9d, #ff3366, #ff6b9d)",
          backgroundSize: "200% 100%",
          fontSize: "1.1rem",
          fontWeight: 600,
          color: disabled ? "rgba(58,11,31,0.4)" : "white",
          boxShadow: disabled
            ? "none"
            : "0 15px 40px rgba(255,51,102,0.4), inset 0 1px 0 rgba(255,255,255,0.3)",
          position: "relative",
          overflow: "hidden",
          transition: "all 0.4s ease",
          "&:before": disabled
            ? {}
            : {
                content: '""',
                position: "absolute",
                top: 0,
                left: "-100%",
                width: "100%",
                height: "100%",
                background:
                  "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
                transition: "left 0.8s",
              },
          "&:hover:before": disabled
            ? {}
            : {
                left: "100%",
              },
          "&:hover": {
            background: disabled
              ? "rgba(255,182,193,0.3)"
              : "linear-gradient(135deg, #ff3366, #ff6b9d, #ff3366)",
            backgroundPosition: "100% 0",
            boxShadow: "0 20px 50px rgba(255,51,102,0.6)",
          },
        }}
      >
        {/* Pulsierendes Herz neben dem Text */}
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          style={{ marginRight: "10px" }}
        >
          {disabled && "❤️" }
        </motion.div>

        {disabled ? "Bitte warten..." : "Darf ich dir eine Frage stellen?"}

        {/* Schimmernde Herzen um den Button */}
        {!disabled && (
          <>
            <motion.div
              animate={{
                y: [0, -10, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: 0.2,
              }}
              style={{
                position: "absolute",
                top: -20,
                left: "20%",
                fontSize: "20px",
              }}
            >
              💖
            </motion.div>
            <motion.div
              animate={{
                y: [0, -8, 0],
                opacity: [0, 0.8, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: 0.5,
              }}
              style={{
                position: "absolute",
                top: -15,
                right: "30%",
                fontSize: "16px",
              }}
            >
              💕
            </motion.div>
          </>
        )}
      </Button>
    </motion.div>
  );
}

// -------------------------------------------------------------
// Hauptkomponente
// -------------------------------------------------------------
export default function ValentineCard() {
  const [state, setState] = usePersistentState<ValentineState>(
    "valenxys-state",
    {
      accepted: false,
      step: "message",
      activities: [],
      wishes: "",
    },
  );

  const [showCelebration, setShowCelebration] = useState(false);
  const [musicPlaying, setMusicPlaying] = useState(true);
  const [hearts, setHearts] = useState<
    Array<{ id: number; x: number; y: number }>
  >([]);
  const [typewriterComplete, setTypewriterComplete] = useState(false);
  const [showRomanticHint, setShowRomanticHint] = useState(false);

  // 🎵 Musik-Steuerung
  const { toggle: toggleMusic } = useBackgroundMusic(
    "/music/romantic.mp3",
    musicPlaying,
  );

  // ❤️ Generiere schwebende Herzen
  useEffect(() => {
    const newHearts = Array.from({ length: 5 }).map((_, i) => ({
      id: Date.now() + i,
      x: Math.random() * 100,
      y: Math.random() * 100,
    }));
    setHearts(newHearts);

    const interval = setInterval(() => {
      setHearts((prev) => [
        ...prev.slice(-7),
        {
          id: Date.now(),
          x: Math.random() * 100,
          y: Math.random() * 100,
        },
      ]);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // Zeige romantischen Hinweis nach Typewriter
  useEffect(() => {
    if (typewriterComplete) {
      const timer = setTimeout(() => {
        setShowRomanticHint(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [typewriterComplete]);

  const handleTypewriterComplete = () => {
    setTypewriterComplete(true);
  };

  const handleContinueToQuestion = () => {
    setState({ ...state, step: "question" });
  };

  return (
    <Box sx={{ position: "relative", width: "100%" }}>
      {/* ❤️ Schwebende Herzen im Hintergrund */}
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          variants={floatingHeartVariants}
          animate="float"
          style={{
            position: "absolute",
            left: `${heart.x}%`,
            top: `${heart.y}%`,
            fontSize: "28px",
            opacity: 0.2,
            pointerEvents: "none",
            zIndex: 0,
          }}
        >
          {["❤️", "💖", "💗"][heart.id % 3]}
        </motion.div>
      ))}

      {/* 🎵 Musik-Steuerung */}
      <IconButton
        onClick={() => {
          setMusicPlaying(!musicPlaying);
          toggleMusic();
        }}
        sx={{
          position: "fixed",
          top: 16,
          right: 16,
          zIndex: 1000,
          bgcolor: "rgba(255,255,255,0.9)",
          boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
          "&:hover": {
            bgcolor: "rgba(255,107,157,0.1)",
          },
        }}
      >
        {musicPlaying ? (
          <MusicNoteIcon sx={{ color: "#ff3366" }} />
        ) : (
          <VolumeOffIcon sx={{ color: "#ff3366" }} />
        )}
      </IconButton>

      <motion.div
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        style={{ width: "100%" }}
      >
        <Card
          sx={{
            p: { xs: 2.5, sm: 4 },
            textAlign: "center",
            maxWidth: 640,
            mx: "auto",
            minHeight: "100dvh",
            display: "flex",
            alignItems: "center",
            background:
              "linear-gradient(145deg, rgba(255,240,245,0.98), rgba(255,250,252,0.98))",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255,182,193,0.4)",
            position: "relative",
            overflow: "hidden",
            "&:before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "4px",
              background: "linear-gradient(90deg, #ff6b9d, #ff3366, #ff6b9d)",
              animation: "shimmer 3s infinite linear",
              "@keyframes shimmer": {
                "0%": { transform: "translateX(-100%)" },
                "100%": { transform: "translateX(100%)" },
              },
            },
            "&:after": {
              content: '""',
              position: "absolute",
              inset: 0,
              background: `radial-gradient(circle at 20% 30%, rgba(255,182,193,0.08) 0%, transparent 50%),
                         radial-gradient(circle at 80% 70%, rgba(255,105,180,0.08) 0%, transparent 50%)`,
              pointerEvents: "none",
            },
          }}
        >
          <Stack
            spacing={3}
            sx={{
              width: "100%",
              pb: { xs: 6, sm: 0 },
              position: "relative",
              zIndex: 1,
            }}
          >
            {/* Romantischer Header */}
            <motion.div
              animate={{ y: [0, -3, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
            >
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 700,
                  background: "linear-gradient(135deg, #ff6b9d, #ff3366)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 1.5,
                  fontFamily: "'Playfair Display', serif",
                  letterSpacing: "0.03em",
                }}
              >
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  💌
                </motion.div>
                Für meine Rachel
                <motion.div
                  animate={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
                >
                  💌
                </motion.div>
              </Typography>
            </motion.div>

            {/* ================= PERSONAL MESSAGE ================= */}
            {state.step === "message" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                <Stack spacing={4} alignItems="center">
                  {/* Brief-Container */}
                  <Box
                    sx={{
                      p: { xs: 3, sm: 4 },
                      borderRadius: 4,
                      bgcolor: "rgba(255,255,255,0.85)",
                      border: "2px solid rgba(255,182,193,0.3)",
                      boxShadow: `
                        0 10px 40px rgba(0,0,0,0.08),
                        inset 0 1px 0 rgba(255,255,255,0.8)
                      `,
                      minHeight: 420,
                      width: "100%",
                      maxWidth: 520,
                      mx: "auto",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      position: "relative",
                      overflow: "hidden",
                    }}
                  >
                    {/* Vintage Papier-Textur */}
                    <Box
                      sx={{
                        position: "absolute",
                        inset: 0,
                        background: `
                          linear-gradient(rgba(255,250,245,0.95), rgba(255,250,245,0.95)),
                          url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ff6b9d' fill-opacity='0.06' fill-rule='evenodd'/%3E%3C/svg%3E")
                        `,
                        opacity: 0.8,
                      }}
                    />

                    {/* Handgeschriebener Text */}
                    <Box
                      sx={{
                        width: "100%",
                        maxWidth: 480,
                        position: "relative",
                        zIndex: 2,
                      }}
                    >
                      <TypewriterText onComplete={handleTypewriterComplete} />
                    </Box>

                    {/* Tintenfleck-Effekt */}
                    {typewriterComplete && (
                      <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 0.7 }}
                        transition={{ duration: 0.8, type: "spring" }}
                        style={{
                          position: "absolute",
                          bottom: 15,
                          right: 20,
                        }}
                      >
                        <Box
                          sx={{
                            width: 35,
                            height: 35,
                            background:
                              "radial-gradient(circle, rgba(255,51,102,0.7), rgba(216,27,96,0.2))",
                            borderRadius: "50% 50% 50% 0",
                            filter: "blur(1px)",
                            transform: "rotate(-45deg)",
                          }}
                        />
                      </motion.div>
                    )}

                    {/* Falz-Effekt */}
                    <Box
                      sx={{
                        position: "absolute",
                        left: 20,
                        top: 0,
                        bottom: 0,
                        width: 3,
                        background:
                          "linear-gradient(to bottom, transparent, rgba(255,182,193,0.2), transparent)",
                      }}
                    />
                  </Box>

                  {/* Romantischer Bestätigungs-Button */}
                  <RomanticContinueButton
                    onClick={handleContinueToQuestion}
                    disabled={!typewriterComplete}
                  />

                  {/* Romantischer Hinweis während Typewriter */}
                  {!typewriterComplete && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1 }}
                    >
                      <Typography
                        variant="body2"
                        sx={{
                          color: "rgba(58,11,31,0.6)",
                          fontStyle: "italic",
                          textAlign: "center",
                          maxWidth: 320,
                          fontFamily: "'Dancing Script', cursive",
                          fontSize: "1.1rem",
                          animation: "pulse 2.5s infinite",
                          "@keyframes pulse": {
                            "0%, 100%": { opacity: 0.6 },
                            "50%": { opacity: 1 },
                          },
                        }}
                      >
                        Das wollte ich dir in Ruhe sagen...
                      </Typography>
                    </motion.div>
                  )}

                  {/* Romantischer Hinweis nach Typewriter */}
                  {showRomanticHint && typewriterComplete && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#ff3366",
                          textAlign: "center",
                          maxWidth: 350,
                          fontFamily: "'Dancing Script', cursive",
                          fontSize: "1.2rem",
                          fontWeight: 500,
                          animation: "gentlePulse 3s infinite",
                          "@keyframes gentlePulse": {
                            "0%, 100%": { opacity: 0.8, transform: "scale(1)" },
                            "50%": { opacity: 1, transform: "scale(1.02)" },
                          },
                        }}
                      >
                        Das wollte ich nicht unausgesprochen lassen...
                      </Typography>
                    </motion.div>
                  )}
                </Stack>
              </motion.div>
            )}

            {/* ================= FRAGE ================= */}
            {state.step === "question" && !showCelebration && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                <Stack spacing={3}>
                  {/* Romantische Einleitung */}
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "'Dancing Script', cursive",
                        fontSize: { xs: "1.5rem", sm: "1.8rem" },
                        color: "rgba(58,11,31,0.8)",
                        mb: 1,
                        textAlign: "center",
                      }}
                    >
                      Vielleicht noch das...
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: "'Dancing Script', cursive",
                        fontSize: { xs: "1.3rem", sm: "1.5rem" },
                        color: "#ff3366",
                        textAlign: "center",
                      }}
                    >
                      ...Wenn es für dich okay ist 💌
                    </Typography>
                  </motion.div>

                  {/* Die wichtige Frage */}
                  <motion.div
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                  >
                    <Box
                      sx={{
                        p: 4,
                        borderRadius: 4,
                        bgcolor: "rgba(255,255,255,0.9)",
                        border: "2px solid rgba(255,107,157,0.4)",
                        boxShadow: `
                          0 15px 50px rgba(255,107,157,0.2),
                          inset 0 1px 0 rgba(255,255,255,0.6)
                        `,
                        position: "relative",
                        overflow: "hidden",
                        "&:before": {
                          content: '""',
                          position: "absolute",
                          top: 0,
                          left: 0,
                          right: 0,
                          height: "3px",
                          background:
                            "linear-gradient(90deg, #ff6b9d, #ff3366)",
                        },
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: { xs: "1.4rem", sm: "1.6rem" },
                          fontWeight: 600,
                          color: "#ff3366",
                          lineHeight: 1.6,
                          fontFamily: "'Playfair Display', serif",
                        }}
                      >
                        Liebe Rachel,
                        <br />
                        <motion.span
                          animate={{
                            textShadow: [
                              "0 0 0px rgba(255,51,102,0)",
                              "0 0 10px rgba(255,51,102,0.3)",
                              "0 0 0px rgba(255,51,102,0)",
                            ],
                          }}
                          transition={{ duration: 2, repeat: Infinity }}
                          style={{ display: "inline-block" }}
                        >
                          Möchtest du diesen Valentinstag
                        </motion.span>
                        <br />
            
                        mit mir verbringen? ❤️
                      </Typography>
                    </Box>
                  </motion.div>

                  {/* Yes/No Buttons */}
                  <Box mt={1}>
                    <YesNoButtons
                      onYes={() => {
                        setShowCelebration(true);
                        setState({
                          ...state,
                          accepted: true,
                          step: "activities",
                        });
                      }}
                    />
                  </Box>

                  {/* Zurück-Button */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                  >
                    <Button
                      variant="text"
                      size="small"
                      onClick={() => setState({ ...state, step: "message" })}
                      sx={{
                        color: "rgba(58,11,31,0.6)",
                        fontFamily: "'Dancing Script', cursive",
                        fontSize: "1.1rem",
                        "&:hover": {
                          color: "#ff3366",
                          background: "rgba(255,107,157,0.1)",
                        },
                      }}
                    >
                      ← Nochmal lesen, was ich dir geschrieben habe
                    </Button>
                  </motion.div>
                </Stack>
              </motion.div>
            )}

            {/* ================= CELEBRATION ================= */}
            {showCelebration && (
              <Celebration onDone={() => setShowCelebration(false)} />
            )}

            {/* ================= ACTIVITIES ================= */}
            {state.step === "activities" && !showCelebration && (
              <ActivitiesStep
                selected={state.activities}
                onChange={(activities) => setState({ ...state, activities })}
                onNext={() => setState({ ...state, step: "wishes" })}
              />
            )}

            {/* ================= WISHES ================= */}
            {state.step === "wishes" && (
              <WishesStep
                wishes={state.wishes}
                onChange={(wishes) => setState({ ...state, wishes })}
                onNext={() => setState({ ...state, step: "summary" })}
              />
            )}

            {/* ================= SUMMARY ================= */}
            {state.step === "summary" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Stack spacing={3}>
                  <Typography
                    variant="h6"
                    sx={{
                      color: "#ff3366",
                      fontFamily: "'Playfair Display', serif",
                    }}
                  >
                    Meine liebe Rachel ❤️
                  </Typography>

                  <Typography
                    sx={{
                      p: 2,
                      borderRadius: 3,
                      bgcolor: "rgba(255,107,157,0.1)",
                      fontFamily: "'Dancing Script', cursive",
                      fontSize: "1.2rem",
                    }}
                  >
                    Danke, dass du mein Leben heller, wärmer und schöner machst.
                  </Typography>

                  <SummaryStep
                    activities={state.activities}
                    wishes={state.wishes}
                  />

                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "'Dancing Script', cursive",
                        fontSize: "2rem",
                        color: "#ff3366",
                        opacity: 0.9,
                      }}
                    >
                      Für immer dein
                      <br />
                      💖
                    </Typography>
                  </motion.div>

                  {/* Zurück zum Anfang */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                  >
                    <Button
                      variant="outlined"
                      size="small"
                      onClick={() =>
                        setState({
                          ...state,
                          step: "message",
                          accepted: false,
                          activities: [],
                          wishes: "",
                        })
                      }
                      sx={{
                        mt: 2,
                        color: "rgba(58,11,31,0.6)",
                        borderColor: "rgba(255,107,157,0.3)",
                        fontFamily: "'Dancing Script', cursive",
                        fontSize: "1.1rem",
                        "&:hover": {
                          borderColor: "#ff3366",
                          color: "#ff3366",
                          background: "rgba(255,107,157,0.1)",
                        },
                      }}
                    >
                      Nochmal von vorne beginnen ♥
                    </Button>
                  </motion.div>
                </Stack>
              </motion.div>
            )}
          </Stack>
        </Card>
      </motion.div>
    </Box>
  );
}
