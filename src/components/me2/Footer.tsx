"use client";

import React, { JSX } from "react";
import { Box, Typography } from "@mui/material";
import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";

const Footer = (): JSX.Element => {
  return (
    <Box
      component="footer"
      sx={{ pt: 10, pb: 5, position: "relative" }}
      id="contact"
    >
      <Box sx={{ textAlign: "center" }}>
        <Typography variant="h3" fontWeight={700}>
          Ready to take{" "}
          <Box component="span" sx={{ color: "#CBACF9" }}>
            your
          </Box>{" "}
          digital presence to the next level?
        </Typography>

        <Typography sx={{ mt: 4, color: "#E4ECFF" }}>
          Reach out to me today and let's discuss your project.
        </Typography>

        <Box sx={{ mt: 4 }}>
          <a href="mailto:contact@jsmastery.pro">
            <MagicButton
              title="Let's get in touch"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </Box>
      </Box>

      <Box
        sx={{
          mt: 8,
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography fontSize="0.875rem">© 2024 Adrian Hajdin</Typography>

        <Box sx={{ display: "flex", gap: 3 }}>
          {socialMedia.map((s) => (
            <Box
              key={s.id}
              sx={{
                width: 40,
                height: 40,
                borderRadius: "12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backdropFilter: "blur(12px)",
                backgroundColor: "rgba(0,0,0,0.6)",
                border: "1px solid rgba(255,255,255,0.15)",
              }}
            >
              <img src={s.img} alt="" width={20} />
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
