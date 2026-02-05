/**
 * @file ProfilePersonalInfo.tsx
 * @description Minimal luxury personal information
 */

"use client";

import {
  Box,
  Stack,
  Typography,
  Divider,
  alpha,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";
import { User } from "@/types/user/user.type";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import WcIcon from "@mui/icons-material/Wc";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import MoreVertIcon from "@mui/icons-material/MoreVert";

type Props = {
  user: User;
};

export default function ProfilePersonalInfo({ user }: Props) {
  const theme = useTheme();
  const info = user?.personalInfo;

  const getAge = () => {
    if (!info?.birthDate) return null;
    const birth = new Date(info.birthDate);
    const now = new Date();
    return now.getFullYear() - birth.getFullYear();
  };

  const age = getAge();

  return (
    <Box
      sx={{
        borderRadius: 4,
        p: 3,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        background: "rgba(255,255,255,0.02)",
        border: "1px solid rgba(255,255,255,0.08)",
        backdropFilter: "blur(12px)",
        boxShadow: "0 8px 32px rgba(0,0,0,0.04)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle grid pattern */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
          linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
        `,
          backgroundSize: "40px 40px",
          zIndex: 0,
        }}
      />

      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          flex: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Header */}
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            mb: 4,
          }}
        >
          <Box>
            <Typography
              variant="h6"
              fontWeight={700}
              sx={{ mb: 0.5, letterSpacing: "-0.3px" }}
            >
              Personal Details
            </Typography>
            <Typography
              variant="caption"
              color="text.secondary"
              sx={{ letterSpacing: "0.3px" }}
            >
              Verified information
            </Typography>
          </Box>

          <Box
            sx={{
              width: 32,
              height: 32,
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "1px solid rgba(255,255,255,0.1)",
              cursor: "pointer",
              "&:hover": {
                bgcolor: "rgba(255,255,255,0.05)",
              },
            }}
          >
            <MoreVertIcon sx={{ fontSize: 18 }} />
          </Box>
        </Box>

        {/* Name Section */}
        <Box sx={{ mb: 4 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
            <Box
              sx={{
                width: 60,
                height: 60,
                borderRadius: "50%",
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)",
                border: "1px solid rgba(255,255,255,0.15)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <PersonOutlineIcon sx={{ fontSize: 28, opacity: 0.8 }} />
            </Box>
            <Box>
              <Typography
                variant="caption"
                color="text.secondary"
                sx={{ fontWeight: 500, letterSpacing: "1px" }}
              >
                IDENTITY
              </Typography>
              <Typography
                variant="h4"
                fontWeight={300}
                sx={{ letterSpacing: "-0.5px" }}
              >
                {info?.firstName}{" "}
                <Box component="span" fontWeight={600}>
                  {info?.lastName}
                </Box>
              </Typography>
            </Box>
          </Box>

          <Divider sx={{ borderColor: "rgba(255,255,255,0.08)" }} />
        </Box>

        {/* Information Grid */}
        <Box
          sx={{
            flex: 1,
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: 3,
          }}
        >
          {/* Birth Date */}
          <InfoItem
            icon={<CalendarMonthIcon />}
            label="Birth Date"
            value={
              info?.birthDate
                ? new Date(info.birthDate).toLocaleDateString()
                : "—"
            }
            detail={age ? `${age} years` : ""}
            accentColor="#FF6B6B"
          />

          {/* Gender */}
          <InfoItem
            icon={<WcIcon />}
            label="Gender"
            value={
              info?.gender
                ? info.gender.charAt(0).toUpperCase() + info.gender.slice(1)
                : "—"
            }
            detail=""
            accentColor="#4ECDC4"
          />

          {/* Marital Status */}
          <InfoItem
            icon={<FavoriteBorderIcon />}
            label="Marital Status"
            value={info?.maritalStatus || "—"}
            detail=""
            accentColor="#FFD166"
          />

          {/* Profile Age */}
          <InfoItem
            icon={<PersonOutlineIcon />}
            label="Member Since"
            value={
              user?.createdAt
                ? new Date(user.createdAt).getFullYear().toString()
                : "—"
            }
            detail={
              user?.createdAt
                ? `${new Date().getFullYear() - new Date(user.createdAt).getFullYear()} years`
                : ""
            }
            accentColor="#6A0572"
          />
        </Box>

        {/* Phone Numbers Section */}
        {info?.phoneNumbers?.length > 0 && (
          <Box sx={{ mt: "auto", pt: 3 }}>
            <Box
              sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 2 }}
            >
              <PhoneIphoneIcon sx={{ fontSize: 18, opacity: 0.7 }} />
              <Typography variant="subtitle2" fontWeight={600}>
                Contact Numbers
              </Typography>
            </Box>

            <Stack spacing={1.5}>
              {info.phoneNumbers.map((phone, index) => (
                <Box
                  key={phone.id}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    p: 2,
                    borderRadius: 2,
                    bgcolor: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.06)",
                    transition: "all 0.2s",
                    "&:hover": {
                      bgcolor: "rgba(255,255,255,0.06)",
                      transform: "translateX(2px)",
                    },
                  }}
                >
                  <Box>
                    <Typography
                      variant="body2"
                      fontWeight={500}
                      sx={{ mb: 0.25 }}
                    >
                      {phone.type
                        ? phone.type.charAt(0).toUpperCase() +
                          phone.type.slice(1)
                        : "Phone"}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      {phone.number}
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      bgcolor:
                        index === 0 ? "#4ECDC4" : "rgba(255,255,255,0.3)",
                    }}
                  />
                </Box>
              ))}
            </Stack>
          </Box>
        )}
      </Box>

      {/* Subtle footer line */}
      <Box
        sx={{
          mt: 3,
          pt: 3,
          borderTop: "1px solid rgba(255,255,255,0.06)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography
          variant="caption"
          color="text.secondary"
          sx={{ fontWeight: 500 }}
        >
          Last verified: Today
        </Typography>
        <Typography
          variant="caption"
          color="text.secondary"
          sx={{ fontWeight: 500 }}
        >
          Complete
        </Typography>
      </Box>
    </Box>
  );
}

function InfoItem({
  icon,
  label,
  value,
  detail,
  accentColor,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  detail: string;
  accentColor: string;
}) {
  return (
    <Box
      sx={{
        p: 2.5,
        borderRadius: 2,
        border: "1px solid rgba(255,255,255,0.08)",
        transition: "all 0.3s",
        position: "relative",
        overflow: "hidden",
        "&:hover": {
          borderColor: accentColor,
          transform: "translateY(-2px)",
        },
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "1px",
          background: `linear-gradient(90deg, ${accentColor}00 0%, ${accentColor} 50%, ${accentColor}00 100%)`,
          opacity: 0,
          transition: "opacity 0.3s",
        },
        "&:hover::before": {
          opacity: 0.5,
        },
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 2 }}>
        <Box
          sx={{
            width: 32,
            height: 32,
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            bgcolor: alpha(accentColor, 0.1),
            color: accentColor,
          }}
        >
          {icon}
        </Box>
        <Typography
          variant="caption"
          color="text.secondary"
          sx={{ fontWeight: 500 }}
        >
          {label}
        </Typography>
      </Box>

      <Typography variant="h6" fontWeight={500} sx={{ mb: 0.5 }}>
        {value}
      </Typography>

      {detail && (
        <Typography variant="caption" color="text.secondary">
          {detail}
        </Typography>
      )}
    </Box>
  );
}
