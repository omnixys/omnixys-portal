"use client";

import { Button, Stack, TextField, Typography } from "@mui/material";
import { setCharacterFocus } from "./AnimatedCharacter";

export default function LoginForm() {
  return (
    <Stack spacing={2}>
      <Typography variant="h6" fontWeight={700}>
        Welcome back
      </Typography>

      <TextField
        label="Username"
        fullWidth
        onFocus={() => setCharacterFocus("username")}
        onBlur={() => setCharacterFocus("none")}
        InputLabelProps={{ style: { color: "#aaa" } }}
        sx={{
          input: { color: "#fff" },
          "& .MuiOutlinedInput-root": {
            fieldset: { borderColor: "#333" },
          },
        }}
      />

      <TextField
        label="Password"
        type="password"
        fullWidth
        onFocus={() => setCharacterFocus("password")}
        onBlur={() => setCharacterFocus("none")}
        InputLabelProps={{ style: { color: "#aaa" } }}
        sx={{
          input: { color: "#fff" },
          "& .MuiOutlinedInput-root": {
            fieldset: { borderColor: "#333" },
          },
        }}
      />

      <Button
        size="large"
        variant="contained"
        sx={{
          mt: 1,
          borderRadius: 999,
          fontWeight: 700,
          background: "linear-gradient(135deg, #6a5acd, #836fff)",
        }}
      >
        Sign in
      </Button>
    </Stack>
  );
}
