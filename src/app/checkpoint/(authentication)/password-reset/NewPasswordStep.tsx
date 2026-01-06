"use client";

import { JSX, useState } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { useMutation } from "@apollo/client/react";
import { ADMIN_CHANGE_PASSWORD } from "./graphql";
import { useRouter } from "next/navigation";

type Props = {
  id?: string;
};


export default function NewPasswordStep({ id }: Props): JSX.Element {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [changePassword, { loading }] = useMutation(ADMIN_CHANGE_PASSWORD);

  const submit = async (): Promise<void> => {
    if (!id || !password) {
      return;
    }

    await changePassword({
      variables: {
        input: {
          id,
          newPassword: password,
        },
      },
    });

    router.replace("/checkpoint/login");
  };

  return (
    <Box maxWidth={480} mx="auto">
      <Typography variant="h5" mb={2}>
        Set new password
      </Typography>

      <Stack spacing={2}>
        <TextField
          label="New password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button
          variant="contained"
          onClick={submit}
          disabled={!id || !password || loading}
        >
          Save password
        </Button>
      </Stack>
    </Box>
  );
}
