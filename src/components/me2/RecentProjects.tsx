"use client";

import React, { JSX } from "react";
import { Box, Typography } from "@mui/material";
import { FaLocationArrow } from "react-icons/fa6";
import { projects } from "@/data";
import { PinContainer } from "./Pin";

const RecentProjects = (): JSX.Element => {
  return (
    <Box sx={{ py: 10 }}>
      <Typography variant="h3" align="center" fontWeight={700}>
        A small selection of{" "}
        <Box component="span" sx={{ color: "#CBACF9" }}>
          recent projects
        </Box>
      </Typography>

      <Box
        sx={{
          mt: 8,
          display: "flex",
          flexWrap: "wrap",
          gap: 8,
          justifyContent: "center",
        }}
      >
        {projects.map((p) => (
          <Box key={p.id} sx={{ width: { xs: "80vw", sm: 360 } }}>
            <PinContainer title="/ui.aceternity.com" href="#">
              <Box sx={{ position: "relative", height: 220 }}>
                <img src={p.img} alt="" style={{ width: "100%" }} />
              </Box>

              <Typography fontWeight={700} sx={{ mt: 2 }}>
                {p.title}
              </Typography>

              <Typography
                sx={{ color: "#BEC1DD", fontSize: "0.875rem", mt: 1 }}
              >
                {p.des}
              </Typography>

              <Box
                sx={{
                  mt: 3,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography sx={{ color: "#CBACF9" }}>
                  Check Live Site
                </Typography>
                <FaLocationArrow color="#CBACF9" />
              </Box>
            </PinContainer>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default RecentProjects;
