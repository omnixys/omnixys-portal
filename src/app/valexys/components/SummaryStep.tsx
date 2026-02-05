"use client";

import { Card, Typography, Stack, Box, Divider } from "@mui/material";

export default function SummaryStep({
  activities,
  wishes,
}: {
  activities: string[];
  wishes: string;
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
          Unser Valentine-Plan 💖
        </Typography>

        <Divider />

        {/* Activities */}
        <Box>
          <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
            Aktivitäten
          </Typography>

          <Stack spacing={1}>
            {activities.map((a) => (
              <Typography
                key={a}
                sx={{
                  px: 1.5,
                  py: 0.75,
                  borderRadius: 2,
                  bgcolor: "rgba(255,105,135,0.12)",
                  fontSize: "0.95rem",
                }}
              >
                {a}
              </Typography>
            ))}
          </Stack>
        </Box>

        {/* Wishes */}
        {wishes && (
          <Box>
            <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
              Deine Wünsche
            </Typography>

            <Box
              sx={{
                px: 1.5,
                py: 1.25,
                borderRadius: 2,
                bgcolor: "rgba(255,105,135,0.08)",
              }}
            >
              <Typography sx={{ fontSize: "0.95rem" }}>{wishes}</Typography>
            </Box>
          </Box>
        )}

        {/* Closing */}
        <Typography
          sx={{
            mt: 2,
            textAlign: "center",
            fontWeight: 500,
          }}
        >
          Danke, dass du mein Valentine bist ❤️
        </Typography>
      </Stack>
    </Card>
  );
}
