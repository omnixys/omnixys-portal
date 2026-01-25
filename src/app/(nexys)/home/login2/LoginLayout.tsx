"use client";

import { Box, Paper } from "@mui/material";
import AnimatedCharacter from "./AnimatedCharacter";
import LoginForm from "./LoginForm";

export default function LoginLayout() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        background: "radial-gradient(circle at top, #1b1b1b, #0b0b0b)",
      }}
    >
      <Paper
        elevation={24}
        sx={{
          width: 420,
          p: 4,
          borderRadius: 4,
          bgcolor: "#111",
          color: "#fff",
          display: "flex",
          flexDirection: "column",
          gap: 3,
        }}
      >
        <AnimatedCharacter />
        <LoginForm />
      </Paper>
    </Box>
  );
}
