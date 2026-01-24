"use client";

import { Box, Typography } from "@mui/material";
import { motion, useMotionValue, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import HeroContent from "./HeroContent";
import { useEffect, useRef } from "react";


const Hero = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const rect = ref.current?.getBoundingClientRect();
      if (!rect) return;

      const x = e.clientX - (rect.left + rect.width / 2);
      const y = e.clientY - (rect.top + rect.height / 2);

      const distance = Math.sqrt(x * x + y * y);
      const max = 300;

      // 0 = nah, 1 = weit weg
      const proximity = Math.max(0, 1 - distance / max);

      mouseX.set(proximity);
      mouseY.set(proximity);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scale = useTransform(mouseX, [0, 1], [1.04, 1.1]);

  const glow = useTransform(
    mouseX,
    [0, 1],
    [
      "drop-shadow(0 0 18px rgba(168,62,180,0.35))",
      "drop-shadow(0 0 42px rgba(168,62,180,0.9))",
    ],
  );

  const filter = useTransform(
    mouseX,
    [0, 1],
    ["saturate(1.05) brightness(1.05)", "saturate(1.35) brightness(1.2)"],
  );

  return (
    <Box
      id="about-me"
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
        minHeight: "100vh",
        overflow: "hidden",
      }}
    >
      {/* Background Video */}
      <Box
        component="video"
        autoPlay
        muted
        loop
        sx={{
          position: "absolute",
          top: "-410px",
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transform: "rotate(180deg)",
          zIndex: 1,
        }}
      >
        <source src="/home/blackhole.webm" type="video/webm" />
      </Box>

      {/* Foreground Content */}
      <Box sx={{ position: "relative", zIndex: 20 }}>
        <Box left={690} top={40} sx={{ position: "relative" }}>
          <motion.div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              display: "inline-flex",
              filter,
              WebkitFilter: filter,
            }}
            animate={{
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 1.3,
              ease: [0.4, 0.0, 0.2, 1],
              // ease: "easeInOut",
              repeat: Infinity,
            }}
          >
            <motion.div style={{ filter: glow }}>
              <Image
                src="/omnixys.png"
                alt="Omnixys Logo"
                width={120}
                height={120}
                style={{ marginBottom: 24 }}
              />
            </motion.div>
          </motion.div>
        </Box>
        <HeroContent />
      </Box>
    </Box>
  );
};

export default Hero;
