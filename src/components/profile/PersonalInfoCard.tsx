/**
 * @file ProfilePersonalInfo.tsx
 * @description Luxury identity-style personal profile (read-only)
 */

"use client";

import { Box, Stack, Typography, useTheme } from "@mui/material";
import { User } from "@/types/user/user.type";

type Props = {
  user: User;
};

export default function ProfilePersonalInfo({ user }: Props) {
  const theme = useTheme();
  const info = user?.personalInfo;

  const birthDate = info?.birthDate
    ? new Date(info.birthDate).toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      })
    : null;

  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        borderRadius: theme.shape.borderRadius * 1.5,
        p: 4,
        height: "100%",
      }}
    >
      {/* Section title */}
      <Typography
        variant="caption"
        color="text.secondary"
        sx={{ mb: 1, letterSpacing: 0.6 }}
      >
        Personal Profile
      </Typography>

      {/* Identity */}
      <Stack spacing={1.2}>
        <Stack spacing={0.5}>
          <Typography variant="h4" fontWeight={700}>
            {user?.personalInfo?.firstName} {user?.personalInfo?.lastName}
          </Typography>

          <Typography variant="body2" color="text.secondary">
            @{user?.username} · {user?.personalInfo?.email}
          </Typography>
        </Stack>
        <Typography variant="body2" color="text.secondary">
          {[birthDate && `Born ${birthDate}`, info?.gender, info?.maritalStatus]
            .filter(Boolean)
            .join(" · ")}
        </Typography>
      </Stack>

      {/* Contact */}
      {info?.phoneNumbers?.length > 0 && (
        <Box sx={{ mt: 4 }}>
          <Typography
            variant="caption"
            color="text.secondary"
            sx={{ mb: 1, display: "block", letterSpacing: 0.6 }}
          >
            Contact
          </Typography>

          <Stack spacing={0.75}>
            {info.phoneNumbers.map((phone) => (
              <Typography key={phone.id} variant="body2" fontWeight={500}>
                {phone.type && (
                  <Typography
                    component="span"
                    variant="caption"
                    color="text.secondary"
                    sx={{ mr: 0.5 }}
                  >
                    {phone.type}
                    {" · "}
                  </Typography>
                )}
                {phone.number}
              </Typography>
            ))}
          </Stack>
        </Box>
      )}
    </Box>
  );
}
