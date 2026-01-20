"use client";

import {
  Box,
  Button,
  Card,
  Checkbox,
  Divider,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

export default function LoginCard() {
  return (
    <Card
      sx={{
        width: 420,
        p: 4,
        borderRadius: 4,
        boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
      }}
    >
      <Stack spacing={2.5}>
        <Typography variant="h5" fontWeight={700}>
          Welcome back!
        </Typography>

        <TextField label="Email" fullWidth />
        <TextField label="Password" type="password" fullWidth />

        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Stack direction="row" alignItems="center">
            <Checkbox size="small" />
            <Typography variant="body2">Remember for 30 days</Typography>
          </Stack>
          <Typography variant="body2" color="primary">
            Forgot password?
          </Typography>
        </Stack>

        <Button
          fullWidth
          size="large"
          sx={{
            bgcolor: "#111",
            color: "#fff",
            borderRadius: 999,
            py: 1.2,
            "&:hover": { bgcolor: "#000" },
          }}
        >
          Login
        </Button>

        <Divider />

        <Button
          fullWidth
          variant="outlined"
          sx={{ borderRadius: 999, py: 1.1 }}
        >
          Login with Google
        </Button>

        <Typography variant="body2" textAlign="center">
          Don’t have an account? <b>Sign up</b>
        </Typography>
      </Stack>
    </Card>
  );
}
