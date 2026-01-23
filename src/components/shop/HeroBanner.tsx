"use client";

import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";

export function HeroBanner() {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: { xs: "1fr", md: "1.2fr 1fr" },
        alignItems: "center",
        bgcolor: "#FFF3E8",
        borderRadius: 4,
        px: 6,
        py: 5,
        mx: "auto",
        maxWidth: 1400,
      }}
    >
      <Box>
        <Typography variant="h3" fontWeight={700}>
          Grab Upto 50% Off On
          <br />
          Selected Headphone
        </Typography>

        <Button
          variant="contained"
          sx={{ mt: 3, borderRadius: 999 }}
          size="large"
        >
          Buy Now
        </Button>
      </Box>

      <Box textAlign="right">
        <Image
          src="/hero-headphones.png"
          alt="Headphones"
          width={420}
          height={420}
          priority
        />
      </Box>
    </Box>
  );
}
