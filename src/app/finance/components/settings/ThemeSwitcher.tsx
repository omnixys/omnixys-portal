"use client";

import {
  Card,
  CardContent,
  Typography,
  ToggleButton,
  ToggleButtonGroup,
  Stack,
} from "@mui/material";
import { useThemeMode } from "../theme/ThemeProvider";

export default function ThemeSwitcher() {
  const { mode, setMode } = useThemeMode();

  return (
    <Card>
      <CardContent>
        <Stack spacing={2}>
          <Typography variant="body2" color="text.secondary">
            Theme
          </Typography>

          <ToggleButtonGroup
            value={mode}
            exclusive
            onChange={(_, v) => v && setMode(v)}
          >
            <ToggleButton value="light">Light</ToggleButton>
            <ToggleButton value="dark">Dark</ToggleButton>
            <ToggleButton value="system">System</ToggleButton>
          </ToggleButtonGroup>
        </Stack>
      </CardContent>
    </Card>
  );
}
