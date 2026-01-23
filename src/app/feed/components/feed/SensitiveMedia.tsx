"use client";

import { Box, Typography } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";

type Props = {
  src: string; // image OR video src
  type: "image" | "video";
  poster?: string; // required for video
  sensitive?: boolean;
  aspectRatio?: string; // "16 / 9", "4 / 5", ...
};

export default function SensitiveMedia({
  src,
  type,
  poster,
  sensitive = false,
  aspectRatio = "16 / 9",
}: Props) {
  const [revealed, setRevealed] = useState(false);
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const toggleReveal = () => {
    if (sensitive) setRevealed((v) => !v);
  };

  const togglePlay = () => {
    if (type !== "video") return;

    if (!playing) {
      videoRef.current?.play();
      setPlaying(true);
    } else {
      videoRef.current?.pause();
      videoRef.current!.currentTime = 0;
      setPlaying(false);
    }
  };

  return (
    <Box
      position="relative"
      width="100%"
      sx={{
        aspectRatio,
        borderRadius: 2,
        overflow: "hidden",
        backgroundColor: "#000",
      }}
    >
      {/* IMAGE / POSTER */}
      {(type === "image" || !playing) && (
        <Box
          component="img"
          src={type === "video" ? poster : src}
          sx={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
            filter: sensitive && !revealed ? "blur(18px)" : "blur(0px)",
            transition: "filter 0.35s ease",
            zIndex: 1,
          }}
          onClick={toggleReveal}
        />
      )}

      {/* VIDEO */}
      {type === "video" && (
        <video
          ref={videoRef}
          src={src}
          playsInline
          controls={playing}
          onEnded={() => setPlaying(false)}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: playing ? "block" : "none",
            zIndex: 1,
          }}
        />
      )}

      {/* SENSITIVE OVERLAY */}
      <AnimatePresence>
        {sensitive && !revealed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            style={{
              position: "absolute",
              inset: 0,
              backgroundColor: "rgba(0,0,0,0.55)",
              zIndex: 2,
            }}
            onClick={toggleReveal}
          />
        )}
      </AnimatePresence>

      {/* CENTER CTA */}
      <AnimatePresence>
        {(sensitive && !revealed) ||
        (type === "video" && !playing && revealed) ? (
          <motion.div
            key="center-cta"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 3,
              cursor: "pointer",
            }}
            onClick={
              sensitive && !revealed
                ? toggleReveal
                : type === "video"
                  ? togglePlay
                  : undefined
            }
          >
            <Typography
              sx={{
                color: "#fff",
                fontWeight: 600,
                px: 2.5,
                py: 1,
                borderRadius: 999,
                bgcolor: "rgba(0,0,0,0.75)",
                whiteSpace: "nowrap",
                userSelect: "none",
              }}
            >
              {sensitive && !revealed ? "View sensitive content" : "▶ Play"}
            </Typography>
          </motion.div>
        ) : null}
      </AnimatePresence>

      {/* TAP TO HIDE (while playing) */}
      {type === "video" && playing && (
        <Box
          position="absolute"
          inset={0}
          zIndex={4}
          onClick={togglePlay}
          sx={{ cursor: "pointer" }}
        />
      )}
    </Box>
  );
}
