"use client";

import React, { JSX, useEffect, useRef, useState } from "react";
import { Box, Typography } from "@mui/material";

type Direction = "left" | "right";
type Speed = "fast" | "normal" | "slow";

interface Item {
  quote: string;
  name: string;
  title: string;
}

interface InfiniteMovingCardsProps {
  items: Item[];
  direction?: Direction;
  speed?: Speed;
  pauseOnHover?: boolean;
  className?: string;
}

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
}: InfiniteMovingCardsProps): JSX.Element => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    if (!containerRef.current || !scrollerRef.current) return;

    // duplicate items (exact Tailwind behavior)
    const children = Array.from(scrollerRef.current.children);
    children.forEach((child) => {
      scrollerRef.current?.appendChild(child.cloneNode(true));
    });

    // direction
    containerRef.current.style.setProperty(
      "--animation-direction",
      direction === "left" ? "forwards" : "reverse",
    );

    // speed
    const duration =
      speed === "fast" ? "20s" : speed === "normal" ? "40s" : "80s";
    containerRef.current.style.setProperty("--animation-duration", duration);

    setStart(true);
  }, []);

  return (
    <Box
      ref={containerRef}
      sx={{
        position: "relative",
        zIndex: 20,
        width: "100vw",
        overflow: "hidden",
        maskImage:
          "linear-gradient(to right, transparent, white 20%, white 80%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, white 20%, white 80%, transparent)",
      }}
    >
      <Box
        component="ul"
        ref={scrollerRef}
        sx={{
          display: "flex",
          minWidth: "100%",
          flexShrink: 0,
          gap: "4rem", // gap-16
          py: 2,
          width: "max-content",
          flexWrap: "nowrap",
          listStyle: "none",
          padding: 0,
          margin: 0,
          animation: start
            ? "scroll var(--animation-duration) linear infinite"
            : "none",
          animationDirection: "var(--animation-direction)",
          ...(pauseOnHover && {
            "&:hover": {
              animationPlayState: "paused",
            },
          }),
        }}
      >
        {items.map((item, idx) => (
          <Box
            component="li"
            key={idx}
            sx={{
              width: { xs: "90vw", md: "60vw" },
              flexShrink: 0,
              borderRadius: "1rem",
              border: "1px solid #1E293B", // slate-800
              borderBottom: "none",
              p: { xs: 2, md: 8 }, // p-5 / md:p-16
              background:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              position: "relative",
            }}
          >
            <blockquote>
              <Typography
                sx={{
                  position: "relative",
                  zIndex: 20,
                  fontSize: { xs: "0.875rem", md: "1.125rem" },
                  lineHeight: 1.6,
                  color: "#FFFFFF",
                  fontWeight: 400,
                }}
              >
                {item.quote}
              </Typography>

              <Box
                sx={{
                  position: "relative",
                  zIndex: 20,
                  mt: 3,
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Box sx={{ mr: 2 }}>
                  <img src="/profile.svg" alt="profile" />
                </Box>

                <Box
                  sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}
                >
                  <Typography
                    sx={{
                      fontSize: "1.25rem",
                      fontWeight: 700,
                      color: "#FFFFFF",
                      lineHeight: 1.6,
                    }}
                  >
                    {item.name}
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: "0.875rem",
                      fontWeight: 400,
                      color: "#CBD5E1", // white-200 equivalent
                      lineHeight: 1.6,
                    }}
                  >
                    {item.title}
                  </Typography>
                </Box>
              </Box>
            </blockquote>
          </Box>
        ))}
      </Box>

      {/* keyframes */}
      <style jsx global>{`
        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </Box>
  );
};
