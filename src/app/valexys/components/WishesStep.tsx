"use client";

import { Card, Typography, Stack, TextField, Button } from "@mui/material";

export default function WishesStep({
  wishes,
  onChange,
  onNext,
}: {
  wishes: string;
  onChange: (value: string) => void;
  onNext: () => void;
}) {
  return (
    <Card
      sx={{
        p: { xs: 2.5, sm: 4 },
        maxWidth: 520,
        mx: "auto",
      }}
    >
      <Stack spacing={3}>
        {/* Title */}
        <Typography
          variant="h5"
          sx={{
            textAlign: "center",
            fontWeight: 600,
          }}
        >
          Hast du noch Wünsche? 💌
        </Typography>

        {/* Text Input */}
        <TextField
          multiline
          minRows={3}
          maxRows={6}
          placeholder="Alles, was dein Herz sich wünscht …"
          value={wishes}
          onChange={(e) => onChange(e.target.value)}
          fullWidth
          autoFocus
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: 2,
            },
          }}
        />

        {/* Continue Button */}
        <Button
          variant="contained"
          size="large"
          onClick={onNext}
          sx={{
            mt: 1,
            py: 1.4,
            borderRadius: 999,
            fontSize: "1rem",
          }}
        >
          Weiter ✨
        </Button>
      </Stack>
    </Card>
  );
}
