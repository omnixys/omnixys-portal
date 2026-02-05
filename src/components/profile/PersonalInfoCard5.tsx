/**
 * @file ProfilePersonalInfo.tsx
 * @description Luxurious personal info card with glassmorphism + staggered animations
 */

"use client";

import { Box, Stack, Typography, useTheme, alpha } from "@mui/material";
import { motion } from "framer-motion";
import { User } from "@/types/user/user.type";

const MotionBox = motion(Box);
const MotionStack = motion(Stack);

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06, delayChildren: 0.1 },
  },
};

const rowVariants = {
  hidden: { opacity: 0, x: -12 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
  },
};

type Props = { user: User };

export default function ProfilePersonalInfo({ user }: Props) {
  const theme = useTheme();
  const info = user?.personalInfo;

  return (
    <Box
      sx={{
        position: "relative",
        height: "100%",
        borderRadius: 4,
        overflow: "hidden",
        // Glassmorphism
        bgcolor: alpha(theme.palette.background.paper, 0.6),
        backdropFilter: "blur(24px)",
        border: `1px solid ${alpha(theme.palette.common.white, 0.08)}`,
        boxShadow: `0 8px 32px ${alpha(theme.palette.common.black, 0.25)}`,
      }}
    >
      {/* Subtle gradient overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.03)} 0%, transparent 60%)`,
          pointerEvents: "none",
        }}
      />

      <Box sx={{ position: "relative", p: 3 }}>
        <Typography
          variant="overline"
          sx={{
            letterSpacing: 2,
            color: theme.palette.text.secondary,
            mb: 3,
            display: "block",
          }}
        >
          Personal Information
        </Typography>

        <MotionStack
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          spacing={0}
        >
          <InfoRow label="First name" value={info?.firstName} />
          <InfoRow label="Last name" value={info?.lastName} />
          <InfoRow
            label="Birth date"
            value={
              info?.birthDate
                ? new Date(info.birthDate).toLocaleDateString()
                : "—"
            }
          />
          <InfoRow label="Gender" value={info?.gender ?? "—"} />
          <InfoRow
            label="Marital status"
            value={info?.maritalStatus ?? "—"}
            last
          />

          {info?.phoneNumbers?.length > 0 && (
            <MotionBox variants={rowVariants} sx={{ pt: 2 }}>
              <Typography
                variant="caption"
                color="text.secondary"
                sx={{ mb: 1, display: "block" }}
              >
                Phone numbers
              </Typography>
              <Stack spacing={0.5}>
                {info.phoneNumbers.map((phone) => (
                  <Typography key={phone.id} variant="body2" fontWeight={500}>
                    {phone.type ? `${phone.type}: ` : ""}
                    {phone.number}
                  </Typography>
                ))}
              </Stack>
            </MotionBox>
          )}
        </MotionStack>
      </Box>
    </Box>
  );
}

function InfoRow({
  label,
  value,
  last,
}: {
  label: string;
  value?: string;
  last?: boolean;
}) {
  const theme = useTheme();

  return (
    <MotionBox
      variants={rowVariants}
      whileHover={{
        x: 4,
        backgroundColor: alpha(theme.palette.common.white, 0.03),
      }}
      transition={{ duration: 0.2 }}
      sx={{
        display: "grid",
        gridTemplateColumns: "140px 1fr",
        alignItems: "center",
        gap: 2,
        py: 1.5,
        px: 1,
        mx: -1,
        borderRadius: 2,
        borderBottom: last
          ? "none"
          : `1px solid ${alpha(theme.palette.divider, 0.4)}`,
        cursor: "default",
      }}
    >
      <Typography variant="caption" color="text.secondary">
        {label}
      </Typography>
      <Typography variant="body2" fontWeight={500}>
        {value || "—"}
      </Typography>
    </MotionBox>
  );
}
