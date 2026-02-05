/**
 * @file ProfileStatusStrip.tsx
 * @description Horizontal profile status strip (read-only system status)
 */

"use client";

import { Box, Chip, Divider, Stack, Typography, useTheme } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import WarningAmberOutlinedIcon from "@mui/icons-material/WarningAmberOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DonutSmallOutlinedIcon from "@mui/icons-material/DonutSmallOutlined";
import { motion } from "framer-motion";

type Props = {
  completeness: number;
  contacts: number;
  addresses: number;
  secure: boolean;
};

const MotionBox = motion(Box);

export default function ProfileStatusStrip({
  completeness,
  contacts,
  addresses,
  secure,
}: Props) {
  const theme = useTheme();

  const info  = {
    subscribed: true,
  }

  return (
    <MotionBox
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      sx={{
        display: "flex",
        alignItems: "center",
        height: "100%",
      }}
    >
      <Stack
        direction="row"
        alignItems="center"
        divider={<Divider orientation="vertical" flexItem sx={{ mx: 2 }} />}
        spacing={2}
      >
        <StatusItem
          icon={
            <DonutSmallOutlinedIcon
              sx={{ color: theme.palette.primary.main }}
            />
          }
          label="Profile"
          value={`${completeness}%`}
        />

        <StatusItem
          icon={
            <ContactsOutlinedIcon
              sx={{ color: theme.palette.text.secondary }}
            />
          }
          label="Contacts"
          value={contacts}
        />

        <StatusItem
          icon={
            <HomeOutlinedIcon sx={{ color: theme.palette.text.secondary }} />
          }
          label="Addresses"
          value={addresses}
        />

        <StatusItem
          icon={
            secure ? (
              <CheckCircleOutlineIcon
                sx={{ color: theme.palette.success.main }}
              />
            ) : (
              <WarningAmberOutlinedIcon
                sx={{ color: theme.palette.error.main }}
              />
            )
          }
          label="Security"
          value={secure ? "Secure" : "Action required"}
        />
      </Stack>

       <Stack direction="row" spacing={2} mb={2}>
              <Chip
                label={`Tier Level ${'3'}`}
                sx={{
                  bgcolor: theme.palette.primary.main + "22",
                  color: theme.palette.primary.main,
                  fontWeight: 600,
                }}
              />
      
              <Chip
                label={info.subscribed ? "Subscribed" : "Not subscribed"}
                sx={{
                  bgcolor: info.subscribed
                    ? theme.palette.success.main + "22"
                    : theme.palette.divider,
                  color: info.subscribed
                    ? theme.palette.success.main
                    : theme.palette.text.secondary,
                }}
              />
            </Stack>
    </MotionBox>
  );
}

/* ------------------------------------------------------------------ */
/* Internal sub component                                              */
/* ------------------------------------------------------------------ */

function StatusItem({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string | number;
}) {
  return (
    <Stack direction="row" spacing={1.2} alignItems="center">
      {icon}

      <Typography
        variant="body2"
        color="text.secondary"
        sx={{ whiteSpace: "nowrap" }}
      >
        {label}
      </Typography>

      <Typography
        variant="body2"
        fontWeight={600}
        color="text.primary"
        sx={{ whiteSpace: "nowrap" }}
      >
        {value}
      </Typography>
    </Stack>
  );
}
