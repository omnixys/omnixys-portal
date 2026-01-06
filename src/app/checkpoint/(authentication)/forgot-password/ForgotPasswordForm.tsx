"use client";

import { JSX, useState } from "react";
import {
  Box,
  Button,
  Stack,
  TextField,
  Typography,
  Alert,
} from "@mui/material";
import { useMutation } from "@apollo/client/react";
import { SEND_PASSWORD_RESET_EMAIL } from "./graphql";

export default function ForgotPasswordForm(): JSX.Element {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const [sendMail, { loading }] = useMutation(SEND_PASSWORD_RESET_EMAIL);

  const submit = async (): Promise<void> => {
    await sendMail({
      variables: {
        input: {
          email,
          resetUrl: `${window.location.origin}/checkpoint/password-reset`,
        },
      },
    });

    setSubmitted(true);
  };


  if (submitted) {
    return (
      <Alert severity="success">
        If an account exists for this email, a password reset link was sent.
        Please check your inbox.
      </Alert>
    );
  }

  return (
    <Box maxWidth={420} mx="auto">
      <Typography variant="h5" mb={2}>
        Forgot your password?
      </Typography>

      <Stack spacing={2}>
        <TextField
          label="Email address"
          type="email"
          autoComplete="email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <Button
          variant="contained"
          onClick={submit}
          disabled={loading || !email}
        >
          Send reset email
        </Button>
      </Stack>
    </Box>
  );
}
