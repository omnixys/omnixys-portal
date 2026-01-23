"use client";

import {
  Box,
  Divider,
  FormControlLabel,
  Switch,
  Typography,
  RadioGroup,
  Radio,
} from "@mui/material";
import { useEffect, useState } from "react";

type FeedLayout = "x" | "instagram";

type Settings = {
  privateAccount: boolean;
  notifications: boolean;
  showSensitive: boolean;
  theme: "system" | "light" | "dark";
  feedLayout: FeedLayout;
};

const DEFAULT: Settings = {
  privateAccount: false,
  notifications: true,
  showSensitive: false,
  theme: "system",
  feedLayout: "x",
};

export default function SettingsPage() {
  const [settings, setSettings] = useState<Settings>(DEFAULT);

  useEffect(() => {
    const saved = localStorage.getItem("settings");
    if (saved) setSettings(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("settings", JSON.stringify(settings));
  }, [settings]);

  return (
    <Box maxWidth={600} mx="auto" mt={2}>
      <Typography fontWeight={700} fontSize={20} mb={2}>
        Settings
      </Typography>

      <Typography fontWeight={600}>Account</Typography>
      <FormControlLabel
        control={
          <Switch
            checked={settings.privateAccount}
            onChange={(e) =>
              setSettings((s) => ({ ...s, privateAccount: e.target.checked }))
            }
          />
        }
        label="Private account"
      />

      <Divider sx={{ my: 2 }} />

      <Typography fontWeight={600}>Notifications</Typography>
      <FormControlLabel
        control={
          <Switch
            checked={settings.notifications}
            onChange={(e) =>
              setSettings((s) => ({ ...s, notifications: e.target.checked }))
            }
          />
        }
        label="Enable notifications"
      />

      <Divider sx={{ my: 2 }} />

      <Typography fontWeight={600}>Content</Typography>
      <FormControlLabel
        control={
          <Switch
            checked={settings.showSensitive}
            onChange={(e) =>
              setSettings((s) => ({ ...s, showSensitive: e.target.checked }))
            }
          />
        }
        label="Show sensitive content"
      />

      <Divider sx={{ my: 2 }} />

      <Typography fontWeight={600}>Appearance</Typography>
      <RadioGroup
        value={settings.theme}
        onChange={(e) =>
          setSettings((s) => ({ ...s, theme: e.target.value as any }))
        }
      >
        <FormControlLabel value="system" control={<Radio />} label="System" />
        <FormControlLabel value="light" control={<Radio />} label="Light" />
        <FormControlLabel value="dark" control={<Radio />} label="Dark" />
      </RadioGroup>

      <Typography fontWeight={600} mt={2}>
        Feed layout
      </Typography>

      <RadioGroup
        value={settings.feedLayout}
        onChange={(e) =>
          setSettings((s) => ({
            ...s,
            feedLayout: e.target.value as "x" | "instagram",
          }))
        }
      >
        <FormControlLabel value="x" control={<Radio />} label="X / Twitter" />
        <FormControlLabel
          value="instagram"
          control={<Radio />}
          label="Instagram"
        />
      </RadioGroup>
    </Box>
  );
}
