"use client";

import {
  Card,
  Typography,
  Box,
  Stack,
  Checkbox,
  Button,
  Divider,
  IconButton,
} from "@mui/material";
import { motion } from "framer-motion";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const ACTIVITIES = [
  "🍝 Gemeinsam essen gehen",
  "🎬 Kino- oder Serienabend",
  "🌙 Abendspaziergang",
  "🎮 Spieleabend",
  "💆‍♀️ Entspannter Wellness-Abend",
  "☕ Spontanes Café-Date",
  "🌅 Sonnenuntergang anschauen",
  "✈️ Kurztrip / Wochenend-Ausflug",
  "🍳 Gemeinsames Kochen zu Hause",
  "📸 Erinnerungen festhalten (Fotos)",
  "🎶 Musik hören & tanzen",
  "🕯️ Romantischer Abend bei Kerzenlicht",
  "🌧️ Regentag auf dem Sofa",
  "💌 Kleine Überraschungen füreinander",
  "💖 Überlasse ich dir",
];

export default function ActivitiesStep({
  selected,
  onChange,
  onNext,
}: {
  selected: string[];
  onChange: (values: string[]) => void;
  onNext: () => void;
}) {
  const [search, setSearch] = useState("");
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  function toggle(value: string) {
    onChange(
      selected.includes(value)
        ? selected.filter((v) => v !== value)
        : [...selected, value],
    );
  }

  const filteredActivities = ACTIVITIES.filter((item) =>
    item.toLowerCase().includes(search.toLowerCase()),
  );

  const handleSelectAll = () => {
    if (selected.length === ACTIVITIES.length) {
      onChange([]);
    } else {
      onChange([...ACTIVITIES]);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card
        sx={{
          p: { xs: 2.5, sm: 4 },
          maxWidth: 520,
          mx: "auto",
          background:
            "linear-gradient(145deg, rgba(255,240,245,0.9), rgba(255,250,252,0.9))",
          border: "1px solid rgba(255,182,193,0.3)",
        }}
      >
        <Stack spacing={3}>
          <Typography
            variant="h5"
            sx={{
              textAlign: "center",
              fontWeight: 700,
              background: "linear-gradient(135deg, #ff6b9d, #ff3366)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Was wollen wir machen? 💕
          </Typography>

          <Divider sx={{ borderColor: "rgba(255,182,193,0.3)" }} />

          {/* Suchleiste */}
          <Box
            sx={{
              position: "relative",
              "&:hover": {
                "& .search-icon": {
                  transform: "scale(1.1)",
                },
              },
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                px: 2,
                py: 1,
                borderRadius: 3,
                bgcolor: "rgba(255,255,255,0.8)",
                border: "1px solid rgba(255,182,193,0.4)",
              }}
            >
              <SearchIcon
                className="search-icon"
                sx={{
                  color: "#ff6b9d",
                  transition: "transform 0.3s ease",
                }}
              />
              <input
                type="text"
                placeholder="Aktivitäten suchen..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{
                  flex: 1,
                  border: "none",
                  background: "transparent",
                  outline: "none",
                  fontSize: "0.95rem",
                  color: "#3a0b1f",
                }}
              />
              {search && (
                <IconButton
                  size="small"
                  onClick={() => setSearch("")}
                  sx={{ color: "#ff6b9d" }}
                >
                  <CloseIcon fontSize="small" />
                </IconButton>
              )}
            </Box>
          </Box>

          {/* Auswahl-Info */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              px: 1,
            }}
          >
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {selected.length} / {ACTIVITIES.length} ausgewählt
            </Typography>
            <Button
              size="small"
              onClick={handleSelectAll}
              sx={{
                color: "#ff6b9d",
                "&:hover": {
                  backgroundColor: "rgba(255,107,157,0.1)",
                },
              }}
            >
              {selected.length === ACTIVITIES.length
                ? "Alle abwählen"
                : "Alle auswählen"}
            </Button>
          </Box>

          {/* Aktivitäten-Liste */}
          <Box
            sx={{
              maxHeight: { xs: "50vh", sm: "60vh" },
              overflowY: "auto",
              pr: 1,
              "&::-webkit-scrollbar": {
                width: "6px",
              },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: "rgba(255,107,157,0.3)",
                borderRadius: "3px",
              },
              "&::-webkit-scrollbar-track": {
                backgroundColor: "rgba(255,182,193,0.1)",
              },
            }}
          >
            <Stack spacing={1.5}>
              {filteredActivities.map((item) => {
                const checked = selected.includes(item);
                const isHovered = hoveredItem === item;

                return (
                  <motion.div
                    key={item}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                  >
                    <Box
                      onClick={() => toggle(item)}
                      onMouseEnter={() => setHoveredItem(item)}
                      onMouseLeave={() => setHoveredItem(null)}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        borderRadius: 3,
                        px: 2,
                        py: 1.5,
                        cursor: "pointer",
                        bgcolor: checked
                          ? "rgba(255,107,157,0.15)"
                          : isHovered
                            ? "rgba(255,182,193,0.1)"
                            : "transparent",
                        border: checked
                          ? "2px solid rgba(255,107,157,0.5)"
                          : "2px solid transparent",
                        transition: "all 0.3s ease",
                        position: "relative",
                        overflow: "hidden",
                        "&:before": checked
                          ? {
                              content: '""',
                              position: "absolute",
                              top: 0,
                              left: 0,
                              right: 0,
                              height: "2px",
                              background:
                                "linear-gradient(90deg, transparent, #ff6b9d, transparent)",
                              animation: "shine 2s infinite",
                              "@keyframes shine": {
                                "0%": { transform: "translateX(-100%)" },
                                "100%": { transform: "translateX(100%)" },
                              },
                            }
                          : {},
                      }}
                    >
                      <motion.div
                        animate={{ scale: checked ? 1.2 : 1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        {checked ? (
                          <FavoriteIcon sx={{ color: "#ff3366", mr: 1.5 }} />
                        ) : (
                          <FavoriteBorderIcon
                            sx={{ color: "rgba(255,107,157,0.5)", mr: 1.5 }}
                          />
                        )}
                      </motion.div>
                      <Typography
                        sx={{
                          fontSize: "1rem",
                          fontWeight: checked ? 600 : 400,
                          color: checked ? "#ff3366" : "text.primary",
                          flex: 1,
                        }}
                      >
                        {item}
                      </Typography>
                      {checked && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: "spring" }}
                        >
                          <Box
                            sx={{
                              width: 24,
                              height: 24,
                              borderRadius: "50%",
                              bgcolor: "#ff3366",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              ml: 1,
                            }}
                          >
                            <Typography
                              sx={{ fontSize: "0.75rem", color: "white" }}
                            >
                              ✓
                            </Typography>
                          </Box>
                        </motion.div>
                      )}
                    </Box>
                  </motion.div>
                );
              })}
            </Stack>
          </Box>

          {/* Weiter-Button mit Animation */}
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Button
              variant="contained"
              size="large"
              onClick={onNext}
              disabled={selected.length === 0}
              sx={{
                mt: 2,
                py: 1.6,
                borderRadius: 999,
                fontSize: "1.1rem",
                fontWeight: 600,
                background: "linear-gradient(135deg, #ff6b9d, #ff3366)",
                boxShadow:
                  selected.length > 0
                    ? "0 10px 30px rgba(255,51,102,0.4)"
                    : "none",
                position: "relative",
                overflow: "hidden",
                "&:before":
                  selected.length > 0
                    ? {
                        content: '""',
                        position: "absolute",
                        top: 0,
                        left: "-100%",
                        width: "100%",
                        height: "100%",
                        background:
                          "linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)",
                        transition: "left 0.7s",
                      }
                    : {},
                "&:hover:before": selected.length > 0 ? { left: "100%" } : {},
              }}
            >
              <Stack direction="row" spacing={1} alignItems="center">
                <Typography>Weiter</Typography>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  💖
                </motion.div>
              </Stack>
            </Button>
          </motion.div>

          {/* Fortschrittsanzeige */}
          {selected.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Typography
                variant="body2"
                sx={{
                  textAlign: "center",
                  color: "#ff3366",
                  fontWeight: 500,
                  animation: "pulse 2s infinite",
                  "@keyframes pulse": {
                    "0%, 100%": { opacity: 0.8 },
                    "50%": { opacity: 1 },
                  },
                }}
              >
                {selected.length === 1
                  ? "Eine tolle Wahl! 💕"
                  : selected.length < 5
                    ? `${selected.length} wundervolle Ideen! ✨`
                    : `Wow! ${selected.length} romantische Pläne! 🌟`}
              </Typography>
            </motion.div>
          )}
        </Stack>
      </Card>
    </motion.div>
  );
}
