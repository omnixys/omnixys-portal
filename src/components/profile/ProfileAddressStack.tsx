/**
 * @file ProfileAddressStack.tsx
 * @description Glassmorphism address carousel with expandable single card
 */

"use client";

import { Box, Stack, Typography, IconButton, Chip, alpha } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import { Address, User } from "@/types/user/user.type";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";

type Props = {
  user: User;
};

export default function ProfileAddressStack({ user }: Props) {
  const addresses = user?.addresses ?? [];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right
  const [isPlaying, setIsPlaying] = useState(false);
  const [favorites, setFavorites] = useState<Set<string>>(new Set());
  const [expanded, setExpanded] = useState(false);

  const currentAddress = addresses[currentIndex];
  const isFavorite = currentAddress ? favorites.has(currentAddress.id) : false;

  // Auto-play functionality
  useEffect(() => {
    if (!isPlaying || addresses.length <= 1) return;

    const interval = setInterval(() => {
      handleNext();
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, [isPlaying, currentIndex, addresses.length]);

  const handleNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % addresses.length);
    setExpanded(false); // Collapse when changing address
  }, [addresses.length]);

  const handlePrev = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + addresses.length) % addresses.length);
    setExpanded(false); // Collapse when changing address
  }, [addresses.length]);

  const toggleFavorite = useCallback(() => {
    if (!currentAddress) return;

    setFavorites((prev) => {
      const next = new Set(prev);
      if (next.has(currentAddress.id)) {
        next.delete(currentAddress.id);
      } else {
        next.add(currentAddress.id);
      }
      return next;
    });
  }, [currentAddress]);

  const handleDotClick = useCallback(
    (index: number) => {
      setDirection(index > currentIndex ? 1 : -1);
      setCurrentIndex(index);
      setExpanded(false); // Collapse when changing address
    },
    [currentIndex],
  );

  // Keyboard navigation (in useEffect einfügen)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (addresses.length <= 1) return;

      switch (e.key) {
        case "ArrowLeft":
          e.preventDefault();
          handlePrev();
          break;
        case "ArrowRight":
          e.preventDefault();
          handleNext();
          break;
        case " ":
          e.preventDefault();
          setExpanded((prev) => !prev);
          break;
        case "f":
          e.preventDefault();
          toggleFavorite();
          break;
        case "p":
          e.preventDefault();
          setIsPlaying((prev) => !prev);
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handlePrev, handleNext, toggleFavorite, addresses.length]);

  if (!addresses?.length) {
    return (
      <Box
        sx={{
          borderRadius: 4,
          p: 3,
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(255,255,255,0.2)",
          boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
        }}
      >
        <Box
          sx={{
            textAlign: "center",
            maxWidth: 200,
          }}
        >
          <Box
            sx={{
              width: 60,
              height: 60,
              borderRadius: "50%",
              bgcolor: "rgba(25,118,210,0.1)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mx: "auto",
              mb: 2,
            }}
          >
            <LocationOnIcon sx={{ color: "primary.main" }} />
          </Box>
          <Typography color="text.secondary" sx={{ mb: 1 }}>
            No addresses yet
          </Typography>
          <Typography variant="caption" color="text.secondary">
            Add your first location to get started
          </Typography>
        </Box>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        borderRadius: 4,
        p: 3,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        background:
          "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)",
        backdropFilter: "blur(10px)",
        border: "1px solid rgba(255,255,255,0.2)",
        boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background glow effect */}
      <Box
        sx={{
          position: "absolute",
          top: -100,
          right: -100,
          width: 200,
          height: 200,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(25,118,210,0.15) 0%, transparent 70%)",
          filter: "blur(20px)",
          zIndex: 0,
        }}
      />

      {/* Header with controls */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mb: 3,
          position: "relative",
          zIndex: 1,
        }}
      >
        <Typography
          variant="h6"
          fontWeight={700}
          sx={{
            background: "linear-gradient(90deg, #1976d2 0%, #2196f3 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Address Carousel
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <IconButton
            size="small"
            onClick={() => setIsPlaying(!isPlaying)}
            color={isPlaying ? "primary" : "default"}
            sx={{
              bgcolor: "rgba(255,255,255,0.1)",
              "&:hover": { bgcolor: "rgba(255,255,255,0.2)" },
            }}
          >
            {isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
          </IconButton>

          <Chip
            label={`${currentIndex + 1}/${addresses.length}`}
            size="small"
            sx={{
              bgcolor: "rgba(255,255,255,0.1)",
              border: "1px solid rgba(255,255,255,0.2)",
              color: "text.primary",
            }}
          />
        </Box>
      </Box>

      {/* Main carousel area */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
          zIndex: 1,
        }}
      >
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentAddress.id}
            custom={direction}
            initial={{
              opacity: 0,
              x: direction > 0 ? 100 : -100,
              scale: 0.9,
            }}
            animate={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              x: direction > 0 ? -100 : 100,
              scale: 0.9,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 25,
              duration: 0.4,
            }}
            style={{
              width: "100%",
              height: "100%",
            }}
          >
            {/* Main expandable card */}
            <Box
              onClick={() => setExpanded(!expanded)}
              sx={{
                borderRadius: 3,
                p: 2.5,
                background: expanded
                  ? "linear-gradient(135deg, rgba(25,118,210,0.15) 0%, rgba(33,150,243,0.1) 100%)"
                  : "rgba(255,255,255,0.08)",
                border: "1px solid",
                borderColor: expanded
                  ? "primary.main"
                  : "rgba(255,255,255,0.15)",
                cursor: "pointer",
                transition: "all 0.3s ease",
                position: "relative",
                overflow: "hidden",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                "&:hover": {
                  transform: "translateY(-2px)",
                  borderColor: "primary.main",
                  boxShadow: "0 8px 32px rgba(25,118,210,0.2)",
                },
              }}
            >
              {/* Background Effect */}
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "100%",
                  background:
                    "radial-gradient(circle at 30% 20%, rgba(25,118,210,0.1) 0%, transparent 70%)",
                  opacity: 0.5,
                }}
              />

              <Box
                sx={{
                  position: "relative",
                  zIndex: 1,
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {/* Header */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    mb: 2,
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                    <Box
                      sx={{
                        width: 48,
                        height: 48,
                        borderRadius: "50%",
                        bgcolor: "rgba(255,255,255,0.1)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        border: "1px solid rgba(255,255,255,0.2)",
                      }}
                    >
                      <LocationOnIcon sx={{ fontSize: 24 }} />
                    </Box>
                    <Box>
                      <Typography variant="subtitle1" fontWeight={600}>
                        {currentAddress.street} {currentAddress.houseNumber}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        {currentAddress.city}, {currentAddress.country}
                      </Typography>
                    </Box>
                  </Box>

                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <IconButton
                      size="small"
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleFavorite();
                      }}
                      sx={{
                        bgcolor: "rgba(255,255,255,0.1)",
                        "&:hover": { bgcolor: "rgba(255,255,255,0.2)" },
                      }}
                    >
                      {isFavorite ? (
                        <FavoriteIcon sx={{ color: "error.main" }} />
                      ) : (
                        <FavoriteBorderIcon />
                      )}
                    </IconButton>

                    <IconButton
                      size="small"
                      onClick={(e) => {
                        e.stopPropagation();
                        setExpanded(!expanded);
                      }}
                      sx={{
                        bgcolor: "rgba(255,255,255,0.1)",
                        "&:hover": { bgcolor: "rgba(255,255,255,0.2)" },
                      }}
                    >
                      {expanded ? (
                        <KeyboardArrowUpIcon />
                      ) : (
                        <KeyboardArrowDownIcon />
                      )}
                    </IconButton>
                  </Box>
                </Box>

                {/* Expanded Content */}
                <AnimatePresence>
                  {expanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      style={{ flex: 1, overflow: "hidden" }}
                    >
                      <Box
                        sx={{
                          mt: 2,
                          pt: 2,
                          borderTop: "1px dashed rgba(255,255,255,0.1)",
                          flex: 1,
                        }}
                      >
                        <Stack spacing={2}>
                          <Box
                            sx={{
                              display: "grid",
                              gridTemplateColumns: "1fr 1fr",
                              gap: 2,
                            }}
                          >
                            <Box
                              sx={{
                                bgcolor: "rgba(255,255,255,0.05)",
                                p: 2,
                                borderRadius: 2,
                                border: "1px solid rgba(255,255,255,0.1)",
                              }}
                            >
                              <Typography
                                variant="caption"
                                color="text.secondary"
                                display="block"
                              >
                                Postal Code
                              </Typography>
                              <Typography variant="body1" fontWeight={500}>
                                {currentAddress.zipCode}
                              </Typography>
                            </Box>

                            <Box
                              sx={{
                                bgcolor: "rgba(255,255,255,0.05)",
                                p: 2,
                                borderRadius: 2,
                                border: "1px solid rgba(255,255,255,0.1)",
                              }}
                            >
                              <Typography
                                variant="caption"
                                color="text.secondary"
                                display="block"
                              >
                                City
                              </Typography>
                              <Typography variant="body1" fontWeight={500}>
                                {currentAddress.city}
                              </Typography>
                            </Box>
                          </Box>

                          <Box
                            sx={{
                              bgcolor: "rgba(255,255,255,0.05)",
                              p: 2,
                              borderRadius: 2,
                              border: "1px solid rgba(255,255,255,0.1)",
                            }}
                          >
                            <Typography
                              variant="caption"
                              color="text.secondary"
                              display="block"
                            >
                              Country
                            </Typography>
                            <Typography variant="body1" fontWeight={500}>
                              {currentAddress.country}
                            </Typography>
                          </Box>

                          {currentAddress.additionalInfo && (
                            <Box
                              sx={{
                                bgcolor: "rgba(255,255,255,0.05)",
                                p: 2,
                                borderRadius: 2,
                                border: "1px solid rgba(255,255,255,0.1)",
                              }}
                            >
                              <Typography
                                variant="caption"
                                color="text.secondary"
                                display="block"
                              >
                                Additional Information
                              </Typography>
                              <Typography variant="body2" sx={{ mt: 0.5 }}>
                                {currentAddress.additionalInfo}
                              </Typography>
                            </Box>
                          )}

                          {/* Action Buttons */}
                          <Box
                            sx={{
                              display: "flex",
                              gap: 1,
                              pt: 2,
                              borderTop: "1px dashed rgba(255,255,255,0.1)",
                            }}
                          >
                            <IconButton
                              size="small"
                              sx={{
                                flex: 1,
                                bgcolor: "rgba(255,255,255,0.1)",
                                "&:hover": { bgcolor: "rgba(255,255,255,0.2)" },
                              }}
                              onClick={(e) => e.stopPropagation()}
                            >
                              <EditIcon />
                            </IconButton>
                            <IconButton
                              size="small"
                              sx={{
                                flex: 1,
                                bgcolor: "rgba(255,255,255,0.1)",
                                "&:hover": { bgcolor: "rgba(255,255,255,0.2)" },
                              }}
                              onClick={(e) => e.stopPropagation()}
                            >
                              <DeleteIcon />
                            </IconButton>
                          </Box>
                        </Stack>
                      </Box>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Collapsed summary (shown when not expanded) */}
                {!expanded && (
                  <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    style={{ flex: 1, display: "flex", alignItems: "center" }}
                  >
                    <Box
                      sx={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: 3,
                        width: "100%",
                        mt: 2,
                      }}
                    >
                      <Box>
                        <Typography
                          variant="caption"
                          color="text.secondary"
                          display="block"
                        >
                          Postal Code
                        </Typography>
                        <Typography variant="body2" fontWeight={500}>
                          {currentAddress.zipCode}
                        </Typography>
                      </Box>
                      <Box>
                        <Typography
                          variant="caption"
                          color="text.secondary"
                          display="block"
                        >
                          City
                        </Typography>
                        <Typography variant="body2" fontWeight={500}>
                          {currentAddress.city}
                        </Typography>
                      </Box>
                    </Box>
                  </motion.div>
                )}
              </Box>
            </Box>
          </motion.div>
        </AnimatePresence>

        {/* Navigation arrows (only show if multiple addresses) */}
        {addresses.length > 1 && (
          <>
            <IconButton
              onClick={handlePrev}
              sx={{
                position: "absolute",
                left: 16,
                bgcolor: "rgba(255,255,255,0.15)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255,255,255,0.2)",
                "&:hover": {
                  bgcolor: "rgba(255,255,255,0.25)",
                  transform: "scale(1.1)",
                },
                transition: "all 0.2s",
              }}
            >
              <ArrowBackIcon />
            </IconButton>

            <IconButton
              onClick={handleNext}
              sx={{
                position: "absolute",
                right: 16,
                bgcolor: "rgba(255,255,255,0.15)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255,255,255,0.2)",
                "&:hover": {
                  bgcolor: "rgba(255,255,255,0.25)",
                  transform: "scale(1.1)",
                },
                transition: "all 0.2s",
              }}
            >
              <ArrowForwardIcon />
            </IconButton>
          </>
        )}
      </Box>

      {/* Footer with pagination and controls */}
      <Box
        sx={{
          mt: 3,
          pt: 2,
          borderTop: "1px solid rgba(255,255,255,0.1)",
          position: "relative",
          zIndex: 1,
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mb: 1,
          }}
        >
          {/* Pagination dots */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            {addresses.map((_, index) => (
              <Box
                key={index}
                onClick={() => handleDotClick(index)}
                sx={{
                  width: index === currentIndex ? 24 : 8,
                  height: 8,
                  borderRadius: 4,
                  bgcolor:
                    index === currentIndex
                      ? "primary.main"
                      : "rgba(255,255,255,0.2)",
                  cursor: "pointer",
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  "&:hover": {
                    bgcolor:
                      index === currentIndex
                        ? "primary.dark"
                        : "rgba(255,255,255,0.3)",
                  },
                }}
              />
            ))}
          </Box>

          {/* Stats */}
          <Typography variant="caption" color="text.secondary">
            {favorites.size} favorited • {addresses.length} total
          </Typography>

          {/* Expand hint */}
          <Typography
            variant="caption"
            color="text.secondary"
            sx={{ display: "flex", alignItems: "center", gap: 0.5 }}
          >
            Click to {expanded ? "collapse" : "expand"}
          </Typography>
        </Box>

        {/* Keyboard hint */}
        <Typography
          variant="caption"
          color="text.secondary"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            opacity: 0.7,
          }}
        >
          Use ← → keys to navigate • Space to {expanded ? "collapse" : "expand"}
        </Typography>
      </Box>
    </Box>
  );
}
