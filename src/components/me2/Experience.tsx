"use client";

import React, { JSX } from "react";
import { Box, Typography } from "@mui/material";
import { workExperience } from "@/data";
import { MovingBorder } from "./MovingBorders";

const Experience = (): JSX.Element => {
  return (
    <Box sx={{ py: 10 }}>
      <Typography variant="h3" align="center" fontWeight={700}>
        My{" "}
        <Box component="span" sx={{ color: "#CBACF9" }}>
          work experience
        </Box>
      </Typography>

      <Box
        sx={{
          mt: 8,
          display: "grid",
          gridTemplateColumns: { xs: "1fr", lg: "repeat(4,1fr)" },
          gap: 5,
        }}
      >
        {workExperience.map((card) => (
          <MovingBorder
            key={card.id}
            // borderRadius="1.75rem"
            duration={Math.floor(Math.random() * 10000) + 10000}
          >
            <Box
              sx={{
                p: 4,
                display: "flex",
                gap: 3,
                alignItems: { xs: "flex-start", lg: "center" },
              }}
            >
              <img src={card.thumbnail} alt="" width={64} />
              <Box>
                <Typography fontWeight={700}>{card.title}</Typography>
                <Typography
                  sx={{ mt: 1, color: "#E4ECFF", fontSize: "0.875rem" }}
                >
                  {card.desc}
                </Typography>
              </Box>
            </Box>
          </MovingBorder>
        ))}
      </Box>
    </Box>
  );
};

export default Experience;
