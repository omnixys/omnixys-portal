"use client";

import { JSX, useState } from "react";
import {
  Box,
  Button,
  Stack,
  TextField,
  Typography,
  CircularProgress,
} from "@mui/material";
import { useQuery, useMutation } from "@apollo/client/react";
import { GET_SECURITY_QUESTIONS, VERIFY_SECURITY_QUESTIONS } from "./graphql";

type Props = {
  onSuccess: () => void;
  setId: (id: string) => void
};

export function getResetToken(): string | null {
  if (typeof window === "undefined") return null;

  const params = new URLSearchParams(window.location.search);
  return params.get("token");
}

export default function SecurityQuestionStep({
  onSuccess,
  setId,
}: Props): JSX.Element {
  const { data, loading } = useQuery(GET_SECURITY_QUESTIONS);
  const [verify, { loading: verifying }] = useMutation(
    VERIFY_SECURITY_QUESTIONS
  );

  const [answers, setAnswers] = useState<Record<string, string>>({});

  if (loading) {
    return <CircularProgress />;
  }

  const submit = async (): Promise<void> => {
    const payload = Object.entries(answers).map(([questionId, answer]) => ({
      questionId,
      answer,
    }));

    const res = await verify({
      variables: { answers: payload },
    });

    const result = res.data?.verifySecurityQuestionsAndResetPassword;

    if (result?.success && result.userId) {
      setId(result.userId);
      onSuccess();
    }
    
  };

  return (
    <Box maxWidth={480} mx="auto">
      <Typography variant="h5" mb={2}>
        Verify your identity
      </Typography>

      <Stack spacing={2}>
        {data?.getSecurityVerificationQuestions?.map((q: any) => (
          <TextField
            key={q.id}
            label={q.question}
            type="password"
            onChange={(e) =>
              setAnswers((prev) => ({
                ...prev,
                [q.id]: e.target.value,
              }))
            }
          />
        ))}

        <Button variant="contained" onClick={submit} disabled={verifying}>
          Verify
        </Button>
      </Stack>
    </Box>
  );
}
