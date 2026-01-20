"use client";

import { JSX, useState } from "react";
import Link from "next/link";
import { Box, Stack, Typography } from "@mui/material";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";

interface NavItem {
  name: string;
  link: string;
  icon?: JSX.Element;
}

interface FloatingNavProps {
  navItems: NavItem[];
}

export function FloatingNav({ navItems }: FloatingNavProps): JSX.Element {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current !== "number") return;

    const prev = scrollYProgress.getPrevious() ?? 0;
    const direction = current - prev;

    if (current < 0.05) {
      setVisible(true);
    } else {
      setVisible(direction < 0);
    }
  });

  return (
    <AnimatePresence mode="wait">
      <Box
        component={motion.div}
        initial={{ y: -100, opacity: 1 }}
        animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        sx={{
          position: "fixed",
          top: "2.5rem",
          left: 0,
          right: 0,
          mx: "auto",
          zIndex: 5000,
          px: "2.5rem",
          py: "1.25rem",
          width: "fit-content",
          minWidth: { md: "70vw", lg: "fit-content" },
          borderRadius: "12px",
          backdropFilter: "blur(16px) saturate(180%)",
          backgroundColor: "rgba(17, 25, 40, 0.75)",
          border: "1px solid rgba(255,255,255,0.125)",
          boxShadow:
            "0px 2px 3px -1px rgba(0,0,0,0.1), 0px 1px 0px rgba(25,28,33,0.02), 0px 0px 0px 1px rgba(25,28,33,0.08)",
        }}
      >
        <Stack direction="row" spacing={3} alignItems="center">
          {navItems.map((item, idx) => (
            <Link key={idx} href={item.link} style={{ textDecoration: "none" }}>
              <Stack direction="row" spacing={0.5} alignItems="center">
                {item.icon}
                <Typography
                  sx={{
                    fontSize: "0.875rem",
                    color: "#F8FAFC",
                    cursor: "pointer",
                    "&:hover": { opacity: 0.8 },
                  }}
                >
                  {item.name}
                </Typography>
              </Stack>
            </Link>
          ))}
        </Stack>
      </Box>
    </AnimatePresence>
  );
}
