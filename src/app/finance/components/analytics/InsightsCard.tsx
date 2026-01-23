"use client";

import { Card, CardContent, Typography, Stack } from "@mui/material";

export default function InsightsCard() {
  return (
    <Card>
      <CardContent>
        <Typography variant="body2" color="text.secondary" mb={2}>
          Insights
        </Typography>

        <Stack spacing={1.5}>
          <Typography>
            You spent <b>18% more on food</b> compared to last month.
          </Typography>

          <Typography>
            Your shopping budget is <b>exceeded by €10</b>.
          </Typography>

          <Typography>
            At your current pace, you will save <b>€420</b> this month.
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
}
