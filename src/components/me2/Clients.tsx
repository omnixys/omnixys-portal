"use client";

import React, { JSX } from "react";
import { Box, Typography } from "@mui/material";
import { companies, testimonials } from "@/data";
import { InfiniteMovingCards } from "./InfiniteMovingCards";

const Clients = (): JSX.Element => {
  return (
    <Box component="section" sx={{ py: 10 }}>
      <Typography variant="h3" align="center" fontWeight={700}>
        Kind words from{" "}
        <Box component="span" sx={{ color: "#CBACF9" }}>
          satisfied clients
        </Box>
      </Typography>

      <Box sx={{ mt: 8 }}>
        <Box sx={{ height: { xs: "50vh", md: 480 }, overflow: "hidden" }}>
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </Box>

        <Box
          sx={{
            mt: 8,
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: { xs: 4, md: 8 },
          }}
        >
          {companies.map((c) => (
            <Box
              key={c.id}
              sx={{ display: "flex", gap: 1, alignItems: "center" }}
            >
              <img src={c.img} alt={c.name} width={32} />
              <img src={c.nameImg} alt={c.name} width={96} />
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Clients;
