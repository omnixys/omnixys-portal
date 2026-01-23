"use client";

import { Phone } from "@mui/icons-material";
import { Box, Container } from "@mui/material";
import { MenuButton } from "./MenuButton";

export default function Banner() {
  return (
    <Box sx={{ backgroundColor: "red" }}>
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          color: "white",
          padding: "10px",
        }}
      >
        <Box sx={{ display: "flex", gap: "15px" }}>
          <Phone />
          <Box>1234567890</Box>
        </Box>
        <Box>Get 50% Off on Selected Items | Shop Now</Box>
        <MenuButton label="Language" items={[{ label: "English" }, { label: "German" }]} />
        <MenuButton label="Location" items={[]} />
      </Container>
    </Box>
  );
}
