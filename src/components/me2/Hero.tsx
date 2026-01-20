"use client";

import { Box, Typography } from "@mui/material";
import { FaLocationArrow } from "react-icons/fa6";

import MagicButton from "./MagicButton";
import { Spotlight } from "./Spotlight";
import { TextGenerateEffect } from "./TextGenerateEffect";
import { JSX } from "react";

const Hero = (): JSX.Element => {
  return (
    <Box
      sx={{
        pt: "9rem", // pt-36
        pb: "5rem", // pb-20
        position: "relative",
      }}
    >
      {/* Spotlights */}
      <Box>
        <Spotlight
          fill="white"
          sx={{
            top: "-10rem", // -top-40
            left: "-2.5rem", // -left-10
            height: "100vh",
            "@media (min-width:900px)": {
              top: "-5rem", // md:-top-20
              left: "-8rem", // md:-left-32
            },
          }}
        />

        <Spotlight
          fill="purple"
          sx={{
            top: "2.5rem", // top-10
            left: "100%", // left-full
            width: "50vw",
            height: "80vh",
          }}
        />

        <Spotlight
          fill="blue"
          sx={{
            top: "7rem", // top-28
            left: "20rem", // left-80
            width: "50vw",
            height: "80vh",
          }}
        />
      </Box>

      {/* Grid background */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          height: "100vh",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "background.default",
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
          zIndex: 0,
        }}
      >
        {/* Radial fade overlay */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            backgroundColor: "background.default",
            maskImage:
              "radial-gradient(ellipse at center, transparent 20%, black)",
            WebkitMaskImage:
              "radial-gradient(ellipse at center, transparent 20%, black)",
          }}
        />
      </Box>

      {/* Content */}
      <Box
        sx={{
          position: "relative",
          zIndex: 10,
          my: "5rem",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            maxWidth: {
              xs: "89vw",
              md: "42rem",
              lg: "60vw",
            },
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            sx={{
              textTransform: "uppercase",
              letterSpacing: "0.2em",
              fontSize: "0.75rem",
              textAlign: "center",
              color: "#93C5FD",
              maxWidth: "20rem",
              mb: 2,
            }}
          >
            Dynamic Web Magic with Next.js
          </Typography>

          <TextGenerateEffect words="Transforming Concepts into Seamless User Experiences" />

          <Typography
            sx={{
              textAlign: "center",
              mt: 2,
              mb: 4,
              fontSize: {
                xs: "0.875rem",
                md: "1.125rem",
                lg: "1.5rem",
              },
              letterSpacing: {
                md: "0.05em",
              },
            }}
          >
            Hi! I&apos;m Adrian, a Next.js Developer based in Croatia.
          </Typography>

          <Box component="a" href="#about" sx={{ textDecoration: "none" }}>
            <MagicButton
              title="Show my work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
