/**
 * @file CustomerInterestSpectrum.tsx
 * @description Interest Spectrum with idle auto-scroll, keyboard & focus-dim
 */

"use client";

import {
  Box,
  Stack,
  Typography,
  useTheme,
  MenuItem,
  Select,
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import { useTranslations } from "next-intl";

/* =====================================================
   TAXONOMY (Frontend, API liefert keine Kategorie)
===================================================== */

type InterestCategory =
  | "banking"
  | "technology"
  | "realEstate"
  | "insurance"
  | "investments"
  | "lifestyle";

const INTEREST_CATEGORY_MAP: Record<string, InterestCategory> = {
  CREDIT_AND_DEBT: "banking",
  SAVING_AND_FINANCE: "banking",
  BANK_PRODUCTS_AND_SERVICES: "banking",

  TECHNOLOGY: "technology",
  TECHNOLOGY_AND_INNOVATION: "technology",

  REAL_ESTATE: "realEstate",
  INSURANCE: "insurance",
  INVESTMENTS: "investments",

  SPORTS: "lifestyle",
  MUSIC: "lifestyle",
  TRAVEL: "lifestyle",
};

/* ===================================================== */

type Props = {
  interests: string[];
};

const MotionBox = motion(Box);

export default function CustomerInterestSpectrum({ interests }: Props) {
  const theme = useTheme();
  const tInterest = useTranslations("interest");
  const tCategory = useTranslations("interestCategory");
  const tProfile = useTranslations("profile.role.customer");

  /* ---------------------- normalize & categorize */

  const categorized = useMemo(() => {
    return interests.reduce<Record<InterestCategory, string[]>>(
      (acc, raw) => {
        const code = raw.toUpperCase();
        const cat =
          INTEREST_CATEGORY_MAP[code] ?? "lifestyle";
        acc[cat] ??= [];
        acc[cat].push(code);
        return acc;
      },
      {} as Record<InterestCategory, string[]>,
    );
  }, [interests]);

  const categories = Object.keys(categorized) as InterestCategory[];

  /* ---------------------- density (normalized) */

  const maxCount = Math.max(
    ...Object.values(categorized).map((v) => v.length),
  );

  const density = (cat: InterestCategory) =>
    categorized[cat].length / maxCount;

  /* ---------------------- state */

  const [category, setCategory] = useState<InterestCategory>(
    categories[0],
  );
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);

  const idleTimer = useRef<NodeJS.Timeout | null>(null);
  const lock = useRef(false);

  const list = categorized[category] ?? [];
  const current = list[index];

  /* ---------------------- navigation */

  function step(dir: 1 | -1) {
    if (lock.current) return;
    lock.current = true;

    setDirection(dir);
    setIndex((i) =>
      Math.max(0, Math.min(list.length - 1, i + dir)),
    );

    resetIdle();
    setTimeout(() => (lock.current = false), 420);
  }

  /* ---------------------- idle auto-scroll */

  function resetIdle() {
    if (idleTimer.current) clearTimeout(idleTimer.current);

    idleTimer.current = setTimeout(() => {
      step(1);
    }, 3200);
  }

  /* ---------------------- effects */

  useEffect(() => {
    resetIdle();
    return () => idleTimer.current && clearTimeout(idleTimer.current);
  }, [index, category]);

  useEffect(() => {
    function onWheel(e: WheelEvent) {
      step(e.deltaY > 0 ? 1 : -1);
    }

    function onKey(e: KeyboardEvent) {
      if (e.key === "ArrowDown") step(1);
      if (e.key === "ArrowUp") step(-1);
    }

    window.addEventListener("wheel", onWheel, { passive: true });
    window.addEventListener("keydown", onKey);

    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("keydown", onKey);
    };
  }, [list.length]);

  if (!interests.length) {
    return (
      <Typography variant="caption" color="text.secondary">
        {tProfile("noInterests")}
      </Typography>
    );
  }

  /* =====================================================
     RENDER
  ===================================================== */

  return (
    <Stack spacing={2}>
      {/* HEADER ROW */}
      <Stack
        direction="row"
        spacing={2}
        alignItems="center"
      >
        <Typography fontWeight={700}>{tProfile("interests")}</Typography>

        <Select
          size="small"
          value={category}
          onChange={(e) => {
            setCategory(e.target.value as InterestCategory);
            setIndex(0);
          }}
          sx={{
            minWidth: 160,
            borderRadius: 999,
          }}
        >
          {categories.map((cat) => (
            <MenuItem key={cat} value={cat}>
              <Stack spacing={0.5} width="100%">
                <Typography variant="caption" fontWeight={600}>
                  {tCategory(cat)}
                </Typography>

                <Box
                  sx={{
                    height: 4,
                    borderRadius: 999,
                    bgcolor: theme.palette.divider,
                    overflow: "hidden",
                  }}
                >
                  <Box
                    sx={{
                      width: `${density(cat) * 100}%`,
                      height: "100%",
                      bgcolor: theme.palette.primary.main,
                    }}
                  />
                </Box>
              </Stack>
            </MenuItem>
          ))}
        </Select>
      </Stack>

      {/* FOCUS WHEEL */}
      <Box
        sx={{
          position: "relative",
          height: 64,
          overflow: "hidden",
        }}
      >
        <AnimatePresence mode="wait">
          <MotionBox
            key={current}
            initial={{
              opacity: 0,
              y: direction === 1 ? 28 : -28,
              scale: 0.96,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1.03,
            }}
            exit={{
              opacity: 0,
              y: direction === 1 ? -28 : 28,
              scale: 0.96,
            }}
            transition={{
              duration: 0.45,
              ease: [0.16, 1, 0.3, 1],
            }}
            sx={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
            }}
          >
            {/* INTEREST PILL */}
            <Box
              sx={{
                px: 3.5,
                py: 1.2,
                borderRadius: 999,
                border: `1px solid ${theme.palette.divider}`,
                fontWeight: 600,
                opacity: 0.95,
              }}
            >
              {tInterest(current.toLowerCase())}
            </Box>
          </MotionBox>
        </AnimatePresence>
      </Box>
    </Stack>
  );
}
