"use client";

import React, { JSX, useState } from "react";
import { Box, Typography } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";

import { CanvasRevealEffect } from "./CanvasRevealEffect";

const Approach = (): JSX.Element => {
  return (
    <Box component="section" sx={{ width: "100%", py: 10 }}>
      <Typography variant="h3" align="center" fontWeight={700}>
        My{" "}
        <Box component="span" sx={{ color: "#CBACF9" }}>
          approach
        </Box>
      </Typography>

      <Box
        sx={{
          my: 10,
          display: "flex",
          flexDirection: { xs: "column", lg: "row" },
          gap: 4,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Card
          title="Planning & Strategy"
          des="We'll collaborate to map out your website's goals, target audience, and key functionalities."
        >
          <CanvasRevealEffect animationSpeed={5.1} />
        </Card>

        <Card
          title="Development & Progress Update"
          des="From sketches to polished code, I keep you updated every step of the way."
        >
          <CanvasRevealEffect animationSpeed={3} />
        </Card>

        <Card
          title="Development & Launch"
          des="This is where the magic happens and your product comes to life."
        >
          <CanvasRevealEffect animationSpeed={3} />
        </Card>
      </Box>
    </Box>
  );
};

export default Approach;

const Card = ({
  title,
  des,
  children,
}: {
  title: string;
  des: string;
  children: React.ReactNode;
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <Box
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      sx={{
        position: "relative",
        maxWidth: 360,
        width: "100%",
        height: 560,
        borderRadius: "24px",
        p: 4,
        border: "1px solid rgba(255,255,255,0.15)",
        background:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
        overflow: "hidden",
      }}
    >
      <AnimatePresence>
        {hovered && (
          <Box
            component={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            sx={{ position: "absolute", inset: 0 }}
          >
            {children}
          </Box>
        )}
      </AnimatePresence>

      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          top: "50%",
          transform: "translateY(-50%)",
        }}
      >
        <Typography variant="h5" fontWeight={700} color="white">
          {title}
        </Typography>
        <Typography sx={{ mt: 2, color: "#E4ECFF", fontSize: "0.875rem" }}>
          {des}
        </Typography>
      </Box>
    </Box>
  );
};
